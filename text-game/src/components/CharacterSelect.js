import React from 'react';
import './CharacterSelect.css';
import CardGallery from './CardGallery';
import Lightning from './Lightning';

// 導入角色圖片
import line1character from '../asset/line1character.jpg';
import line2character from '../asset/line2character.jpg';
import line3character from '../asset/line3character.jpg';
import line4character from '../asset/line4character.jpg';

function CharacterSelect({ characters, onSelectCharacter, onBack }) {
  // 為角色添加圖片
  const charactersWithImages = characters.map(char => {
    let imageSrc;
    switch(char.id) {
      case 'popoca':
        imageSrc = line1character;
        break;
      case 'kallpa':
        imageSrc = line2character;
        break;
      case 'guani':
        imageSrc = line3character;
        break;
      case 'balam':
        imageSrc = line4character;
        break;
      default:
        imageSrc = line1character;
    }
    return {
      ...char,
      image: imageSrc
    };
  });

  const handleSelectItem = (character) => {
    onSelectCharacter(character.id);
  };

  return (
    <div className="character-select">
      <Lightning
        hue={45}
        xOffset={0}
        speed={0.5}
        intensity={0.8}
        size={1.5}
      />
      
      <div className="character-select-content">
        <div className="select-header">
          <h1 className="select-title">選擇你的角色</h1>
          <p className="select-subtitle">每個角色都有獨特的故事和三條不同的命運線</p>
        </div>
        
        <div className="gallery-wrapper">
          <CardGallery
            items={charactersWithImages}
            onSelectItem={handleSelectItem}
          />
        </div>
        
        <button className="back-button" onClick={onBack}>
          返回主選單
        </button>
      </div>
    </div>
  );
}

export default CharacterSelect;
