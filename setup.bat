@echo off
chcp 65001 >nul
REM GESB2008 項目安裝腳本
REM 此腳本會檢查並安裝所有必需的依賴項

REM 切換到腳本所在目錄
cd /d "%~dp0"

echo ==================================
echo   GESB2008 項目依賴安裝腳本
echo ==================================
echo.
echo 工作目錄: %CD%
echo.

REM 檢查 Node.js 是否已安裝
echo 正在檢查 Node.js...
where node >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
    echo √ Node.js 已安裝: %NODE_VERSION%
    goto :check_npm
)

echo × Node.js 未安裝
echo.
set /p INSTALL_NODE="是否要自動安裝 Node.js? (y/n): "

if /i "%INSTALL_NODE%"=="y" goto :install_node
if /i "%INSTALL_NODE%"=="yes" goto :install_node

echo.
echo 請先手動安裝 Node.js (建議版本 16 或更高):
echo 訪問 https://nodejs.org/ 下載並安裝
echo.
pause
exit /b 1

:install_node
echo.
echo ==================================
echo   正在自動安裝 Node.js...
echo ==================================
echo.

REM 檢查 Chocolatey 是否已安裝
where choco >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo √ 檢測到 Chocolatey，使用 Chocolatey 安裝 Node.js...
    choco install nodejs -y
    goto :verify_node
)

echo × 未檢測到 Chocolatey
echo.
echo 方法 1: 安裝 Chocolatey (推薦)
echo 方法 2: 直接下載 Node.js 安裝包
echo.
set /p CHOCO_CHOICE="選擇安裝方式 (1/2): "

if "%CHOCO_CHOICE%"=="1" goto :install_chocolatey
if "%CHOCO_CHOICE%"=="2" goto :download_node

:install_chocolatey
echo.
echo 正在安裝 Chocolatey...
echo 注意: 此操作需要管理員權限
echo.
powershell -NoProfile -ExecutionPolicy Bypass -Command "Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))"

if %ERRORLEVEL% EQU 0 (
    echo √ Chocolatey 安裝成功
    echo 正在使用 Chocolatey 安裝 Node.js...
    refreshenv
    choco install nodejs -y
    goto :verify_node
) else (
    echo × Chocolatey 安裝失敗
    goto :download_node
)

:download_node
echo.
echo 正在下載 Node.js 安裝包...
echo 下載位置: %TEMP%\node-installer.msi
echo.

REM 使用 PowerShell 下載 Node.js LTS 版本
powershell -Command "& {[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://nodejs.org/dist/v20.11.0/node-v20.11.0-x64.msi' -OutFile '%TEMP%\node-installer.msi'}"

if %ERRORLEVEL% EQU 0 (
    echo √ 下載完成
    echo.
    echo 正在安裝 Node.js...
    echo 注意: 安裝過程中可能會彈出安裝向導
    echo.
    msiexec /i "%TEMP%\node-installer.msi" /passive
    
    echo.
    echo 等待安裝完成...
    timeout /t 30 /nobreak
    
    REM 刪除安裝包
    del "%TEMP%\node-installer.msi" >nul 2>nul
    
    echo.
    echo 請關閉此窗口，重新打開命令提示符再次運行此腳本
    echo (需要重新啟動命令提示符才能使用 Node.js)
    pause
    exit /b 0
) else (
    echo × 下載失敗
    echo.
    echo 請手動安裝 Node.js:
    echo 訪問 https://nodejs.org/ 下載並安裝
    pause
    exit /b 1
)

:verify_node
echo.
echo 正在驗證 Node.js 安裝...
REM 刷新環境變量
call refreshenv >nul 2>nul

where node >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
    echo √ Node.js 安裝成功: %NODE_VERSION%
) else (
    echo × Node.js 安裝失敗
    echo.
    echo 請關閉此窗口，重新打開命令提示符再次運行此腳本
    echo (需要重新啟動命令提示符才能使用 Node.js)
    pause
    exit /b 1
)

:check_npm

REM 檢查 npm 是否已安裝
echo 正在檢查 npm...
where npm >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    for /f "tokens=*" %%i in ('npm -v') do set NPM_VERSION=%%i
    echo √ npm 已安裝: %NPM_VERSION%
) else (
    echo × npm 未安裝
    echo npm 通常隨 Node.js 一起安裝，請重新安裝 Node.js
    pause
    exit /b 1
)

echo.
echo ==================================
echo   開始安裝項目依賴...
echo ==================================
echo.

REM 進入 text-game 目錄
cd text-game

if %ERRORLEVEL% NEQ 0 (
    echo × 錯誤: 無法進入 text-game 目錄
    pause
    exit /b 1
)

echo 當前目錄: %CD%
echo.

REM 安裝依賴
echo 正在安裝 npm 依賴項...
echo 這可能需要幾分鐘時間，請耐心等待...
echo.

call npm install

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ==================================
    echo   √ 安裝成功！
    echo ==================================
    echo.
    echo 已安裝的主要依賴項:
    echo   • React ^19.2.0
    echo   • React DOM ^19.2.0
    echo   • React Scripts 5.0.1
    echo   • Testing Libraries
    echo.
    echo ==================================
    echo   正在啟動開發服務器...
    echo ==================================
    echo.
    echo 項目將在瀏覽器中自動打開 (http://localhost:3000)
    echo 按 Ctrl+C 可停止服務器
    echo.
    timeout /t 2 /nobreak >nul
    
    REM 自動啟動開發服務器
    call npm start
) else (
    echo.
    echo ==================================
    echo   × 安裝失敗
    echo ==================================
    echo.
    echo 請檢查錯誤信息並重試
    echo 常見問題:
    echo   • 檢查網絡連接
    echo   • 嘗試清除 npm 緩存: npm cache clean --force
    echo   • 刪除 node_modules 文件夾後重試
    echo.
    pause
    exit /b 1
)

pause

