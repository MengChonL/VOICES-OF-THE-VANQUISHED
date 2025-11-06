import React, { useState } from 'react';
import './StartScreen.css';
import Lightning from './Lightning';

function StartScreen({ onStartGame }) {
  const [showPhilosophy, setShowPhilosophy] = useState(false);

  if (showPhilosophy) {
    return (
      <div className="start-screen">
        <Lightning
          hue={45}
          xOffset={0}
          speed={0.6}
          intensity={1.0}
          size={1.2}
        />
        <div className="philosophy-content">
          <div className="philosophy-header">
            <h2 className="philosophy-title">遊戲設計理念與思路</h2>
            <div className="title-divider"></div>
          </div>
          
          <div className="philosophy-text">
            <p className="philosophy-paragraph">
              這個遊戲的靈感源於我對新冠疫情期間各地防疫政策差異的觀察。當時，不同國家和地區採取了截然不同的應對方式。例如，澳門基本上與中國大陸保持一致的防疫策略，直到2022年底才正式轉向「與病毒共存」；而鄰近的香港，雖然初期也實行類似大陸的嚴格管控，但在經歷一波大規模爆發後，實際上已無法維持「動態清零」，因此更早地走向了共存路線。
            </p>
            
            <p className="philosophy-paragraph">
              由於我的親戚朋友分散在各地，親身經歷了這些不同的防疫措施，彼此之間的體驗差異極大——有人長期封控，有人早早恢復日常。這種「同一場災難，千種人生」的對比深深觸動了我。
            </p>
            
            <p className="philosophy-paragraph">
              由此，我開始思考：如果將這種「面對同一場巨大變局，不同群體卻有截然不同命運」的主題，移植到歷史中會如何？我立刻聯想到西班牙入侵美洲大陸的時期——那同樣是一場由傳染病（如天花）與外來征服交織而成的災難。天花對美洲原住民社會造成的衝擊，其規模與破壞性，堪比現代的全球疫情。
            </p>
            
            <p className="philosophy-paragraph">
              因此，我希望透過這個遊戲，模擬在16世紀西班牙入侵與疫病蔓延的雙重衝擊下，不同帝國、城邦與家族（如阿茲特克、印加、瑪雅的Xiu與Cocom等）如何因地理位置、政治選擇、文化信仰與外部聯盟等因素，走上迥異的生存或毀滅之路。每條故事線都試圖呈現普通人在歷史巨變中的掙扎、適應與抉擇——正如我們在疫情中所經歷的那樣。
            </p>
          </div>
          
          <button 
            className="back-button" 
            onClick={() => setShowPhilosophy(false)}
          >
            返回主選單
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="start-screen">
      <Lightning
        hue={45}
        xOffset={0}
        speed={0.6}
        intensity={1.0}
        size={1.2}
      />
      <div className="start-content">
        <div className="title-decoration-top"></div>
        <h1 className="game-title">被遺忘的聲音</h1>
        <p className="game-subtitle">Voices of the Vanquished</p>
        <div className="title-divider"></div>
        <p className="game-description">
          一個關於信仰崩潰、文明衝突與生存抉擇的文字冒險遊戲
        </p>
        <p className="game-period">1490 - 1562</p>
        <div className="ornament-divider"></div>
        <button className="start-button" onClick={onStartGame}>
          開始遊戲
        </button>
        <button 
          className="philosophy-button" 
          onClick={() => setShowPhilosophy(true)}
        >
          遊戲設計理念
        </button>
        <div className="game-info">
          <p>選擇你的角色，體驗四段不同的歷史視角</p>
          <p>每個角色都有三條不同的命運線</p>
        </div>
        <div className="title-decoration-bottom"></div>
      </div>
    </div>
  );
}

export default StartScreen;

