import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { characters, storyData } from './data';
import StartScreen from './components/StartScreen';
import CharacterSelect from './components/CharacterSelect';
import StoryGame from './components/StoryGame';
import bgm from './asset/bgm.mp3';

function App() {
  const [gameState, setGameState] = useState('start'); // start, characterSelect, story
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isMuted, setIsMuted] = useState(true); // 初始为静音，等待用户点击
  const [hasStarted, setHasStarted] = useState(false); // 是否已经开始播放过
  const audioRef = useRef(null);

  // 初始化音频并设置循环播放
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5; // 设置音量（0-1之间）
    }
  }, []);

  // 控制静音/播放
  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        // 如果之前没播放过，开始播放
        if (!hasStarted) {
          audioRef.current.play().then(() => {
            setHasStarted(true);
            setIsMuted(false);
          }).catch(() => {
            console.log('播放失败');
          });
        } else {
          // 如果之前播放过，继续播放
          audioRef.current.play().catch(() => {
            console.log('播放失败');
          });
          setIsMuted(false);
        }
      } else {
        // 暂停
        audioRef.current.pause();
        setIsMuted(true);
      }
    }
  };

  const handleStartGame = () => {
    setGameState('characterSelect');
    // 如果音乐还没开始播放，尝试自动开始
    if (!hasStarted && audioRef.current && isMuted) {
      audioRef.current.play().then(() => {
        setHasStarted(true);
        setIsMuted(false);
      }).catch(() => {
        // 自动播放失败，保持静音状态，等待用户手动点击
      });
    }
  };

  const handleSelectCharacter = (characterId) => {
    setSelectedCharacter(characterId);
    setGameState('story');
  };

  const handleBackToMenu = () => {
    setGameState('start');
    setSelectedCharacter(null);
  };

  const handleBackToCharacterSelect = () => {
    setGameState('characterSelect');
    setSelectedCharacter(null);
  };

  return (
    <div className="App">
      {/* 背景音乐 */}
      <audio ref={audioRef} src={bgm} preload="auto" />
      
      {/* 音乐控制按钮 */}
      <button 
        className="bgm-control-button"
        onClick={toggleMute}
        aria-label={isMuted ? '播放音乐' : '静音'}
      >
        {isMuted ? '🔇' : '🔊'}
      </button>

      {gameState === 'start' && (
        <StartScreen onStartGame={handleStartGame} />
      )}
      {gameState === 'characterSelect' && (
        <CharacterSelect 
          characters={characters}
          onSelectCharacter={handleSelectCharacter}
          onBack={handleBackToMenu}
        />
      )}
      {gameState === 'story' && selectedCharacter && (
        <StoryGame 
          character={characters.find(c => c.id === selectedCharacter)}
          storyData={storyData[selectedCharacter]}
          onBackToMenu={handleBackToMenu}
          onBackToCharacterSelect={handleBackToCharacterSelect}
        />
      )}
    </div>
  );
}

export default App;
