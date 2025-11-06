import React, { useRef, useEffect, useState } from 'react';
import './CircularGallery.css';

const CircularGallery = ({ 
  items = [], 
  bend = 3, 
  textColor = "#ffffff", 
  borderRadius = 0.05, 
  scrollEase = 0.02,
  onSelectItem
}) => {
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  const [targetRotation, setTargetRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const animate = () => {
      setRotation(prev => {
        const diff = targetRotation - prev;
        return prev + diff * scrollEase;
      });
      requestAnimationFrame(animate);
    };
    animate();
  }, [targetRotation, scrollEase]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    setTargetRotation(prev => prev + deltaX * 0.5);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // 找到最近的項目並對齊
    const itemCount = items.length;
    const anglePerItem = 360 / itemCount;
    const normalizedRotation = ((rotation % 360) + 360) % 360;
    const nearestIndex = Math.round(normalizedRotation / anglePerItem) % itemCount;
    setSelectedIndex(nearestIndex);
    setTargetRotation(nearestIndex * anglePerItem);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startX;
    setTargetRotation(prev => prev + deltaX * 0.5);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  const handleItemClick = (index, e) => {
    e.stopPropagation();
    const anglePerItem = 360 / items.length;
    const targetAngle = index * anglePerItem;
    setTargetRotation(targetAngle);
    setSelectedIndex(index);
  };

  const handleConfirmSelect = () => {
    if (onSelectItem && items[selectedIndex]) {
      onSelectItem(items[selectedIndex]);
    }
  };

  const handleDoubleClick = (index, e) => {
    e.stopPropagation();
    if (index === selectedIndex && onSelectItem) {
      onSelectItem(items[index]);
    }
  };

  const handlePrevious = () => {
    const itemCount = items.length;
    const newIndex = (selectedIndex - 1 + itemCount) % itemCount;
    const anglePerItem = 360 / itemCount;
    const newRotation = newIndex * anglePerItem;
    // 直接設置當前旋轉值和目標旋轉值，實現立即跳轉
    setRotation(newRotation);
    setTargetRotation(newRotation);
    setSelectedIndex(newIndex);
  };

  const handleNext = () => {
    const itemCount = items.length;
    const newIndex = (selectedIndex + 1) % itemCount;
    const anglePerItem = 360 / itemCount;
    const newRotation = newIndex * anglePerItem;
    // 直接設置當前旋轉值和目標旋轉值，實現立即跳轉
    setRotation(newRotation);
    setTargetRotation(newRotation);
    setSelectedIndex(newIndex);
  };

  return (
    <div 
      className="circular-gallery"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="gallery-container">
        <div className="drag-hint">← 拖動旋轉查看 →</div>
        <button className="arrow-button arrow-left" onClick={handlePrevious} aria-label="上一個角色">
          ◀
        </button>
        <button className="arrow-button arrow-right" onClick={handleNext} aria-label="下一個角色">
          ▶
        </button>
        {items.map((item, index) => {
          const angle = (360 / items.length) * index - rotation;
          const radius = 400;
          const x = Math.sin((angle * Math.PI) / 180) * radius;
          const z = Math.cos((angle * Math.PI) / 180) * radius - radius;
          const scale = 1 - (Math.abs(z) / radius) * 0.5;
          const opacity = 1 - (Math.abs(z) / radius) * 0.7;
          const rotateY = -angle * bend;
          
          const isSelected = index === selectedIndex;

          return (
            <div
              key={item.id}
              className={`gallery-item ${isSelected ? 'selected' : ''}`}
              style={{
                transform: `translateX(${x}px) translateZ(${z}px) scale(${scale}) rotateY(${rotateY}deg)`,
                opacity: opacity,
                zIndex: Math.round(1000 - Math.abs(z)),
                borderRadius: `${borderRadius * 100}%`,
              }}
              onClick={(e) => handleItemClick(index, e)}
              onDoubleClick={(e) => handleDoubleClick(index, e)}
            >
              <div className="item-content">
                <img src={item.image} alt={item.name} className="item-image" />
                <div className="item-overlay">
                  <h3 className="item-title" style={{ color: textColor }}>{item.name}</h3>
                  <p className="item-subtitle" style={{ color: textColor }}>{item.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {items[selectedIndex] && (
        <div className="selected-info">
          <h2 className="selected-name">{items[selectedIndex].name}</h2>
          <h3 className="selected-title">{items[selectedIndex].title}</h3>
          <p className="selected-description">{items[selectedIndex].description}</p>
          <button 
            className="select-button"
            onClick={handleConfirmSelect}
          >
            選擇此角色進入遊戲
          </button>
          <p className="select-hint">提示：雙擊角色圖片也可直接進入</p>
        </div>
      )}
    </div>
  );
};

export default CircularGallery;

