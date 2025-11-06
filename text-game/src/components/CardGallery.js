import React, { useState } from 'react';
import './CardGallery.css';

const CardGallery = ({ items = [], onSelectItem }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('');

  const handlePrevious = () => {
    if (isAnimating) return;
    setDirection('prev');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
      setIsAnimating(false);
    }, 300);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setDirection('next');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
      setIsAnimating(false);
    }, 300);
  };

  const handleSelect = () => {
    if (onSelectItem && items[currentIndex]) {
      onSelectItem(items[currentIndex]);
    }
  };

  const currentItem = items[currentIndex];

  if (!currentItem) return null;

  return (
    <div className="card-gallery">
      <div className="card-navigation">
        <button 
          className="nav-arrow nav-arrow-left" 
          onClick={handlePrevious}
          disabled={isAnimating}
        >
          ◀
        </button>

        <div className="card-container">
          <div className={`character-card ${isAnimating ? `slide-${direction}` : ''}`}>
            <div className="card-image-wrapper">
              <img 
                src={currentItem.image} 
                alt={currentItem.name} 
                className="card-image"
              />
              <div className="card-gradient"></div>
            </div>
            
            <div className="card-content">
              <div className="card-header">
                <h2 className="card-name">{currentItem.name}</h2>
                <h3 className="card-title">{currentItem.title}</h3>
              </div>
              
              <div className="card-info">
                <p className="card-location">📍 {currentItem.location}</p>
                <p className="card-period">⏰ {currentItem.period}</p>
              </div>
              
              <p className="card-description">{currentItem.description}</p>
              
              <button className="card-select-button" onClick={handleSelect}>
                選擇此角色進入遊戲
              </button>
            </div>
          </div>

          <div className="card-indicator">
            {items.map((_, index) => (
              <span 
                key={index} 
                className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => {
                  if (!isAnimating) {
                    setDirection(index > currentIndex ? 'next' : 'prev');
                    setIsAnimating(true);
                    setTimeout(() => {
                      setCurrentIndex(index);
                      setIsAnimating(false);
                    }, 300);
                  }
                }}
              />
            ))}
          </div>
        </div>

        <button 
          className="nav-arrow nav-arrow-right" 
          onClick={handleNext}
          disabled={isAnimating}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default CardGallery;

