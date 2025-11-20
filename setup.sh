#!/bin/bash

# GEGA2008 項目安裝腳本
# 此腳本會檢查並安裝所有必需的依賴項

# 獲取腳本所在目錄並切換到該目錄
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

echo "=================================="
echo "  GESB2008 項目依賴安裝腳本"
echo "=================================="
echo ""
echo "工作目錄: $SCRIPT_DIR"
echo ""

# 函數：安裝 Node.js
install_nodejs() {
    echo ""
    echo "=================================="
    echo "  正在自動安裝 Node.js..."
    echo "=================================="
    echo ""
    
    # 檢測操作系統
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        echo "檢測到 macOS 系統"
        
        # 檢查 Homebrew 是否已安裝
        if command -v brew &> /dev/null; then
            echo "✓ Homebrew 已安裝，使用 Homebrew 安裝 Node.js..."
            brew install node
        else
            echo "✗ 未檢測到 Homebrew"
            echo "正在安裝 Homebrew..."
            /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
            
            if [ $? -eq 0 ]; then
                echo "✓ Homebrew 安裝成功"
                echo "正在安裝 Node.js..."
                brew install node
            else
                echo "✗ Homebrew 安裝失敗"
                return 1
            fi
        fi
        
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        # Linux
        echo "檢測到 Linux 系統"
        
        # 檢查是否為 Ubuntu/Debian
        if command -v apt-get &> /dev/null; then
            echo "使用 apt 安裝 Node.js..."
            sudo apt-get update
            sudo apt-get install -y curl
            curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
            sudo apt-get install -y nodejs
            
        # 檢查是否為 Fedora/CentOS/RHEL
        elif command -v yum &> /dev/null; then
            echo "使用 yum 安裝 Node.js..."
            sudo yum install -y curl
            curl -fsSL https://rpm.nodesource.com/setup_lts.x | sudo bash -
            sudo yum install -y nodejs
            
        else
            echo "✗ 無法識別的 Linux 發行版"
            echo "請手動安裝 Node.js: https://nodejs.org/"
            return 1
        fi
    else
        echo "✗ 無法識別的操作系統: $OSTYPE"
        echo "請手動安裝 Node.js: https://nodejs.org/"
        return 1
    fi
    
    # 驗證安裝
    if command -v node &> /dev/null; then
        NODE_VERSION=$(node -v)
        echo ""
        echo "✓ Node.js 安裝成功: $NODE_VERSION"
        return 0
    else
        echo ""
        echo "✗ Node.js 安裝失敗"
        return 1
    fi
}

# 檢查 Node.js 是否已安裝
echo "正在檢查 Node.js..."
if command -v node &> /dev/null
then
    NODE_VERSION=$(node -v)
    echo "✓ Node.js 已安裝: $NODE_VERSION"
else
    echo "✗ Node.js 未安裝"
    echo ""
    read -p "是否要自動安裝 Node.js? (y/n) " -n 1 -r
    echo ""
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        install_nodejs
        if [ $? -ne 0 ]; then
            echo ""
            echo "自動安裝失敗，請手動安裝 Node.js:"
            echo "訪問 https://nodejs.org/ 下載並安裝"
            exit 1
        fi
    else
        echo ""
        echo "請先手動安裝 Node.js (建議版本 16 或更高):"
        echo "訪問 https://nodejs.org/ 下載並安裝"
        echo ""
        echo "或使用 Homebrew 安裝 (Mac):"
        echo "  brew install node"
        echo ""
        exit 1
    fi
fi

# 檢查 npm 是否已安裝
echo "正在檢查 npm..."
if command -v npm &> /dev/null
then
    NPM_VERSION=$(npm -v)
    echo "✓ npm 已安裝: $NPM_VERSION"
else
    echo "✗ npm 未安裝"
    echo "npm 通常隨 Node.js 一起安裝，請重新安裝 Node.js"
    exit 1
fi

echo ""
echo "=================================="
echo "  開始安裝項目依賴..."
echo "=================================="
echo ""

# 進入 text-game 目錄
cd text-game

if [ $? -ne 0 ]; then
    echo "✗ 錯誤: 無法進入 text-game 目錄"
    exit 1
fi

echo "當前目錄: $(pwd)"
echo ""

# 安裝依賴
echo "正在安裝 npm 依賴項..."
echo "這可能需要幾分鐘時間，請耐心等待..."
echo ""

npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "=================================="
    echo "  ✓ 安裝成功！"
    echo "=================================="
    echo ""
    echo "已安裝的主要依賴項:"
    echo "  • React ^19.2.0"
    echo "  • React DOM ^19.2.0"
    echo "  • React Scripts 5.0.1"
    echo "  • Testing Libraries"
    echo ""
    echo "=================================="
    echo "  正在啟動開發服務器..."
    echo "=================================="
    echo ""
    echo "項目將在瀏覽器中自動打開 (http://localhost:3000)"
    echo "按 Ctrl+C 可停止服務器"
    echo ""
    sleep 2
    
    # 自動啟動開發服務器
    npm start
else
    echo ""
    echo "=================================="
    echo "  ✗ 安裝失敗"
    echo "=================================="
    echo ""
    echo "請檢查錯誤信息並重試"
    echo "常見問題:"
    echo "  • 檢查網絡連接"
    echo "  • 嘗試清除 npm 緩存: npm cache clean --force"
    echo "  • 刪除 node_modules 文件夾後重試"
    echo ""
    exit 1
fi

