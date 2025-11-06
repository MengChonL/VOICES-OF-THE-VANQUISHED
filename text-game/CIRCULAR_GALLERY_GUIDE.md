# CircularGallery 角色選擇指南

## ✨ 已完成的功能

CircularGallery 3D旋轉畫廊已成功整合到角色選擇介面！

## 🎮 功能特點

### 1. **3D旋轉畫廊**
   - 四個角色圖片呈環形排列
   - 可以用滑鼠拖曳旋轉
   - 支援觸控螢幕（手機/平板）
   - 平滑的動畫過渡

### 2. **角色圖片**
   使用的角色圖片：
   - **波波卡 (Popoca)** - `line1character.jpg`
   - **Kallpa** - `line2character.jpg`
   - **Guani** - `line3character.jpg`
   - **B'alam** - `line4character.jpg`

### 3. **互動方式**
   - **拖曳旋轉**：點擊並拖動畫面
   - **點擊選擇**：點擊角色卡片選中
   - **自動對齊**：鬆開後自動對齊到最近的角色
   - **查看資訊**：選中角色後下方顯示詳細資訊

### 4. **視覺效果**
   - 3D透視效果
   - 選中角色有金色邊框高亮
   - 根據距離調整大小和透明度
   - 古典風格配色（金色主題）

## ⚙️ 可調整參數

在 `CharacterSelect.js` 中的 `CircularGallery` 組件：

```javascript
<CircularGallery
  items={charactersWithImages}
  bend={3}              // 彎曲程度 (1-5)
  textColor="#D4AF37"   // 文字顏色
  borderRadius={0.05}   // 圓角 (0-1)
  scrollEase={0.02}     // 滾動平滑度 (0.01-0.1)
  onSelectItem={handleSelectItem}
/>
```

### 參數說明：

#### bend (彎曲程度)
- **範圍**: 1-5
- **當前值**: 3
- **效果**: 
  - 1 = 幾乎平面
  - 3 = 適中的3D效果（當前）
  - 5 = 強烈的3D彎曲

#### scrollEase (滾動平滑度)
- **範圍**: 0.01-0.1
- **當前值**: 0.02
- **效果**:
  - 0.01 = 非常平滑，慢速
  - 0.02 = 平滑（當前）
  - 0.1 = 快速響應

#### textColor (文字顏色)
- **當前值**: `#D4AF37` (金色)
- **配合古老風格主題**

## 🎨 視覺設計

### 古老風格配色
- **主色調**: 金色 (#D4AF37)
- **輔助色**: 古銅色 (#8B6914)
- **背景**: 深褐色半透明
- **邊框**: 金色發光效果

### Lightning 背景
- **色調**: 金色 (hue: 45)
- **速度**: 較慢 (0.5)
- **強度**: 柔和 (0.8)
- 配合古典主題

## 📱 響應式設計

- **桌面**: 大圖片 (300x400px)
- **平板/手機**: 自動縮小 (200x280px)
- 觸控手勢支援
- 適應不同螢幕尺寸

## 🔧 如何調整

### 改變圖片大小

編輯 `CircularGallery.css` 中的 `.gallery-item`:

```css
.gallery-item {
  width: 300px;    /* 寬度 */
  height: 400px;   /* 高度 */
  /* ... */
}
```

### 改變旋轉半徑

編輯 `CircularGallery.js` 中的 `radius` 變數：

```javascript
const radius = 400;  // 增加數值 = 圓圈更大
```

### 改變選中效果

編輯 `CircularGallery.css` 中的 `.gallery-item.selected`:

```css
.gallery-item.selected {
  border-color: #D4AF37;  /* 邊框顏色 */
  box-shadow: 0 0 30px rgba(212, 175, 55, 0.6);  /* 光暈效果 */
}
```

## 🎯 使用流程

1. **進入角色選擇頁面**
   - 從開始畫面點擊「開始遊戲」

2. **瀏覽角色**
   - 拖曳畫面旋轉查看所有角色
   - 或直接點擊想看的角色

3. **查看詳情**
   - 選中角色後，下方自動顯示詳細資訊
   - 包含角色名稱、職業、背景描述

4. **確認選擇**
   - 點擊「選擇此角色」按鈕進入遊戲

## 💡 使用建議

### 如果旋轉太快/太慢：
- 調整 `scrollEase` 參數
- 或修改滑鼠移動的乘數：
  ```javascript
  setTargetRotation(prev => prev + deltaX * 0.3);  // 改變 0.3
  ```

### 如果想要更多角色：
- 添加新圖片到 `src/asset/`
- 在 `gameData.js` 中添加角色資料
- 在 `CharacterSelect.js` 的 switch 中添加對應

### 如果3D效果太強/太弱：
- 調整 `bend` 參數（1-5）
- 或修改 `perspective` 值：
  ```css
  .circular-gallery {
    perspective: 1200px;  /* 增加 = 減弱3D效果 */
  }
  ```

## 🐛 故障排除

### 圖片無法顯示：
1. 確認圖片在 `src/asset/` 目錄
2. 檢查圖片檔名是否正確
3. 確認 import 路徑正確

### 旋轉不流暢：
1. 降低 `scrollEase` 值
2. 檢查圖片檔案大小（建議 < 500KB）
3. 確認瀏覽器支援 3D transform

### 選擇按鈕無反應：
1. 檢查 `onSelectCharacter` 函數是否正確傳遞
2. 確認 character.id 與 gameData 中的 id 匹配

## 📂 相關檔案

- **組件**: `src/components/CircularGallery.js`
- **樣式**: `src/components/CircularGallery.css`
- **整合**: `src/components/CharacterSelect.js`
- **圖片**: `src/asset/line[1-4]character.jpg`

## 🌟 特色功能

- ✅ 3D 旋轉動畫
- ✅ 滑鼠拖曳控制
- ✅ 觸控手勢支援
- ✅ 自動對齊功能
- ✅ 選中狀態高亮
- ✅ 詳細資訊顯示
- ✅ 古典風格設計
- ✅ 響應式布局
- ✅ 平滑過渡動畫

---

**提示**: 建議在多種設備上測試，確保旋轉和觸控功能正常運作！

