import React, { useState } from 'react';
import './StoryGame.css';
import Lightning from './Lightning';

// 導入波波卡（Line 1）相關圖片
import line1Character from '../asset/line1character.jpg';
import line1QuetzalFeather from '../asset/line1Quetzal feather.jpg';
import line1TemploMayor from '../asset/line1Templo Mayor.jpg';
import line1Tilmatli from '../asset/line1Tilmatli.jpg';
import Cocoliztli from '../asset/Cocoliztli.jpg';
import line1Quetzalcoatl from '../asset/line1Quetzalcoatl.jpg';
import line1QuetzalFeathercrown from '../asset/line1Quetzal feathercrown.jpg';
import line1AztecWarriors from '../asset/line1AztecWarriors.jpg';
import line1Macuahuitl from '../asset/line1Macuahuitl.jpg';
import line1JaguarWarriorSuit from '../asset/line1JaguarWarriorSuit.jpg';
import line1Sainship from '../asset/line1Sainship.jpeg';
import line1War from '../asset/line1war.jpg';
import line1Gun from '../asset/line1gun.jpg';
import line1Chimalli from '../asset/line1Chimalli.jpg';
import line1FeatherworkVirginMary from '../asset/line1FeatherworkVirginMary.jpg';
import line11 from '../asset/line1-1.jpg';
import line12 from '../asset/line1-2.jpg';
import line13 from '../asset/line1-3.jpg';
import line14 from '../asset/line1-4.jpg';
import line15 from '../asset/line1-5.jpg';
import line16 from '../asset/line1-6.jpg';

// 導入Kallpa（Line 2）相關圖片
import line2Andenes from '../asset/line2Andenes.JPG';
import line2Pachamama from '../asset/line2Pachamama.jpg';
import line2Alpaca from '../asset/line2Alpaca.jpg';
import line2Kuraka from '../asset/line2kuraka.jpg';
import line2Huayancapac from '../asset/line2huayancapac.jpg';
import line2Cusco from '../asset/line2cusco.jpg';
import line2CivilWar from '../asset/line2IncacivilwarHuáscarAtahualpa.jpeg';
import line2War from '../asset/line2war.jpg';
import line2Dead from '../asset/line2dead.jpg';
import line2Potosi from '../asset/line2potosi.jpg';
import line2Chaquitaclla from '../asset/line2chaquitaclla.jpeg';
import line2Encomienda from '../asset/line2Encomienda.jpg';

// 導入Guani（Line 3）相關圖片
import line3Character from '../asset/line3-1.jpg';
import line3Yuca from '../asset/line3-2.jpg';
import line3Atabey from '../asset/line3-3.jpg';
import line3Cibucan from '../asset/line3-4.jpg';
import line3Casabe from '../asset/line3-5.jpg';
import line3Ship from '../asset/line3-6.jpg';
import line3Maboya from '../asset/line3-7.jpg';
import line3Encomendero from '../asset/line3-8.jpeg';
import line3Bahoruco from '../asset/line3-9.jpg';
import line3Carib from '../asset/line3-10.jpg';
import line3Zemi from '../asset/line3-11.jpg';
import line312 from '../asset/line3-12.jpg';

// 導入B'alam（Line 4）相關圖片
import line4Market from '../asset/line4-1.jpg';
import line4CityStates from '../asset/line4-2.jpg';
import line4Mani from '../asset/line4-3.jpg';
import line4Kukulkan from '../asset/line4-4.jpg';
import line4Salt from '../asset/line4-5.jpg';
import line4Snake from '../asset/line4-6.jpg';
import line4Sotuta from '../asset/line4-7.jpg';
import line4Cocom from '../asset/line4-8.jpg';
import line4Dzules from '../asset/line4-9.jpg';
import line4Strategy from '../asset/line4-10.jpg';
import line4Routes from '../asset/line4-11.jpg';
import line4Merida from '../asset/line4-12.jpg';
import line4Missionary from '../asset/line4-13.jpg';
import line4Landa from '../asset/line4-14.jpg';
import line4Fire from '../asset/line4-15.jpg';

// 共用圖片
import gun from '../asset/gun.jpg';

function StoryGame({ character, storyData, onBackToMenu, onBackToCharacterSelect }) {
  const [currentAct, setCurrentAct] = useState(0);
  const [currentScene, setCurrentScene] = useState(0);
  const [currentDialogue, setCurrentDialogue] = useState(0);
  const [showingChoice, setShowingChoice] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [choiceDialogue, setChoiceDialogue] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  
  // 記錄歷史狀態以便後退
  const [history, setHistory] = useState([]);

  // 基於對話文本精確匹配的圖片映射（不再使用關鍵詞）
  // 格式：對話文本片段 -> 圖片
  const dialogueImageMap = {
    'popoca': {
      // Line 1 - 波波卡
      '我是Amanteca——羽毛工匠': line1Character,
      '我的兒子，科約特': line1QuetzalFeather,
      'Coyotl': line1QuetzalFeather,
      '格查爾鳥': line1QuetzalFeather,
      'Templo Mayor': line1TemploMayor,
      '大神廟': line1TemploMayor,
      '獻給祭司的布料': line1Tilmatli,
      'Cocoliztli': Cocoliztli,
      '天花': Cocoliztli,
      'Quetzalcoatl': line1Quetzalcoatl,
      '羽蛇神': line1Quetzalcoatl,
      '佈滿灰塵的傑作': line1QuetzalFeathercrown,
      '我的神死了': line1AztecWarriors,
      '特諾奇提特蘭人': line1AztecWarriors,
      'Tenochca': line1AztecWarriors,
      'Macuahuitl': line1Macuahuitl,
      '黑曜石鋸劍': line1Macuahuitl,
      '美洲虎武士服': line1JaguarWarriorSuit,
      '特拉科潘': line1JaguarWarriorSuit,
      'Tlacopan': line1JaguarWarriorSuit,
      '保衛堤道': line1War,
      'Teules': line1War,
      'Brigantines': line1Sainship,
      '西班牙人的戰船': line1Sainship,
      '特諾奇提特蘭正在燃燒': line1Sainship,
      '金屬管': line1Gun,
      '羽毛盾牌': line1Chimalli,
      '蒙塵的羽毛盾牌': line1Chimalli,
      '教堂': line1FeatherworkVirginMary,
      '聖母瑪利亞': line1FeatherworkVirginMary,
      'Xiuhtecuhtli（火神），工藝之主……看看我的奉獻……救救她……': line13,
      '門被踢開了。是(西班牙人)Teules和他們的特拉斯卡拉盟友(阿茲特克敵國)。他們看到了我，舉起了劍。他們看到了我身上的病疤（天花後遺症），露出了厭惡的表情': line14,
      '他們把我拖走，和其他倖存者一起關進奴隸營。日復一日，我在碎石與灰燼中勞作，重建這座被他們稱為『墨西哥城』的廢墟': line15,
      '一年過去了。他們在我們神廟的遺址上，蓋起了一座冰冷的石頭教堂': line16,
      '士兵們笑了。但跟在他們身後的一個穿著棕色長袍、沒有武器的西班牙人（方濟會修士）推開了他們。他拿起盾牌，在昏暗的光線下端詳。他睜大了眼睛': line11,
      '堤道方向傳來雷鳴般的巨響——那是 Teules 的『火蛇』在噴吐死亡。水道被屍體堵塞，鷹與美洲豹戰士的喊殺聲越來越弱……特諾奇提特蘭，正在沉入湖底': line12
    },
    'kallpa': {
      // Line 2 - Kallpa
      '藜麥': line2Andenes,
      'Quinoa': line2Andenes,
      'Pachamama': line2Pachamama,
      '羊駝': line2Alpaca,
      'Alpaca': line2Alpaca,
      'Kuraka': line2Kuraka,
      'Huayna Capac': line2Huayancapac,
      '瓦伊納': line2Huayancapac,
      '太陽之子': line2Huayancapac,
      '庫斯科': line2Cusco,
      'Cusco': line2Cusco,
      '內戰': line2CivilWar,
      '瓦斯卡爾': line2CivilWar,
      '阿塔瓦爾帕': line2CivilWar,
      '卡哈馬卡': line2War,
      '處決了阿塔瓦爾帕': line2Dead,
      '波托西': line2Potosi,
      'Potosí': line2Potosi,
      'Chaquitaclla': line2Chaquitaclla,
      'Illapa': gun,
      '火槍': gun,
      'Encomendero': line2Encomienda
    },
    'guani': {
      // Line 3 - Guani (基於對話文本精確匹配)
      // 第一幕
      '我叫Guani。我的世界是海洋的蔚藍與叢林的深綠': line3Character,
      '食物的創造者': line3Character,
      '我從土裡挖出木薯（Yuca）的根莖': line3Yuca,
      '我的兒子，Anani（阿納尼），在我身邊玩耍': line3Yuca,
      '我觸摸著這根莖。Atabey賜予了它生命': line3Atabey,
      '馴服死亡': line3Atabey,
      '我將木薯漿填入Cibucán（編織擠壓管）': line3Cibucan,
      '乳白色的毒汁流出': line3Cibucan,
      '它就變成了生命。這就是Atabey教導我們的平衡': line3Casabe,
      '無毒的木薯粉烤成Casabe餅': line3Casabe,
      '三座漂浮的「巨山」（帆船）到來了': line3Ship,
      'Guani，帶Anani躲起來。他們可能是Maboya（惡靈）': line3Maboya,
      '那一刻，我犯了一個錯誤。我以為他們是人。我以為他們也懂『互惠』。我用食物歡迎了他們，而他們看到的，卻是黃金': null,  // 明確標記為null，不顯示圖片
      
      // 第二幕
      '我跪在Zemí（神靈）雕像前，Anani躲在我身後': line3Zemi,
      'Atabey！看看你的子民！這是一場考驗，對嗎？是Maboya在作祟！請降下神蹟！驅逐他們': line3Atabey,
      '那天晚上，監護主（Encomendero）喝醉了': line3Encomendero,
      '他闖進了我的小屋': line3Encomendero,
      '混血的男嬰': line3Encomendero,
      '我憎恨他。我憎恨這個孽種': null,  // null標記
      '疾病大流行。我的Anani': null,  // null標記
      '我瘋狂地祈禱。但Anani的病情迅速惡化': null,  // null標記
      'Atabey！救救他': line3Atabey,
      'Atabey……你為什麼救了那個孽種': null,  // null標記
      
      // 抉擇部分
      '不行！我不能讓他死！Cristianos的惡靈污染了海岸！我必須帶Anani去Bahoruco山區': line3Bahoruco,
      'Bahoruco山區': line3Bahoruco,
      '我們在海上漂流': line3Carib,
      '加勒比人（Carib）的領地': line3Carib,
      'Carib': line3Carib,
      '不行！Atabey已經拋棄了這座島！我們必須離開': null,  // 明確標記為null，不顯示圖片
      '抱著瀕死的Anani': null,  // null標記
      '主人，我會說你們的語言。我會管理你的莊園。我會……接受洗禮': line312
    },
    'balam': {
      // Line 4 - B'alam (基於對話文本精確匹配)
      // 第一幕 - 第一場景
      '我叫B\'alam。我的神是Ek\' Chuah，商人之神': line4Market,
      '別做虧本生意': line4Market,
      '我的世界是破碎的，分為16個城邦': line4CityStates,
      '但對我來說，這不是16個國家，這是16個市場': line4CityStates,
      '今天，我在馬尼，Xiu家族的地盤': line4Mani,
      'Xiu家族的地盤': line4Mani,
      '……B\'alam，你的蠟一如既往的純淨': line4Kukulkan,
      '這將在羽蛇神（Kukulkan）的祭壇上完美燃燒': line4Kukulkan,
      '能為『真正』的馬雅繼承者服務，是我的榮幸': line4Kukulkan,
      'Kukulkan賜予Xiu家族智慧': line4Kukulkan,
      '說得好，商人。這是你的可可豆。下次帶些沿海的鹽來': line4Salt,
      'Kukulkan...一條長著羽毛的蛇': line4Snake,
      '我只見過死蛇': line4Snake,
      
      // 第一幕 - 第二場景
      '三天後，我抵達了索圖塔': line4Sotuta,
      'Cocom家族的地盤': line4Sotuta,
      '至少你還記得誰才是這片土地的主人': line4Cocom,
      '你的可可豆呢？拿來': line4Cocom,
      '直到消息傳來。Dzules（外來者）': line4Dzules,
      '鋼鐵。火炮。騎著「巨型野鹿」（馬）的怪物': line4Dzules,
      'K\'atun 13 Ajaw的末日到了': line4Dzules,
      
      // 抉擇一
      '這是一筆很簡單的帳。資產負債表': line4Strategy,
      '這不是一場公平的戰爭，這是一場收購': line4Strategy,
      'Xiu家族雖然愚蠢地相信他們能控制西班牙人': line4Routes,
      '向Tutul Xiu（Xiu領主）和蒙特霍（Montejo）獻上我的忠誠': line4Routes,
      '我最有價值的資產：我的路線圖': line4Routes,
      'Cocom家族所有的秘密補給路線和隱藏的水源地（Cenote）': line4Routes,
      '你成為了新秩序的既得利益者': line4Merida,
      '新首府梅里達（Mérida）': line4Merida,
      '壟斷貿易權': line4Merida,
      '迪亞哥·巴拉姆（Diego B\'alam）': line4Merida,
      
      // 抉擇二
      '我的策略：這是一場高風險、高回報的投資': line4Routes,
      'Nachi Cocom（Cocom領主）': line4Routes,
      '後勤總管（Quartermaster）': line4Routes,
      '水源地（Cenote）的了解': line4Routes,
      
      // 抉擇三
      'Xiu和Cocom都在打一場舊戰爭': line4Missionary,
      '穿著棕色長袍、手無寸鐵的傳教士（方濟會）': line4Missionary,
      '我將主動接近那個叫迪亞哥·德·蘭達（Diego de Landa）的修士': null,  // 明確標記為null，不顯示圖片
      '我將成為他的首席線人和文化翻譯': null,  // null標記
      '我將成為教會的「中間人」': null,  // null標記
      '你成了迪亞哥·德·蘭達（Diego de Landa）最信任的「文化掮客」': line4Landa,
      '迪亞哥·德·蘭達': line4Landa,
      '文化掮客': line4Landa,
      '你幫助他記錄馬雅曆法': line4Landa,
      'Chaac 雨神石雕（偶像）': line4Landa,
      '你一生油滑的辯詞，在宗教法庭的酷刑面前毫無用處': line4Fire,
      '蘭達點燃了巨大的火焰': line4Fire,
      '馬雅古抄本（Codices）': line4Fire,
      '全部被扔進了火裡': line4Fire
    }
  };

  const getCurrentDialogue = () => {
    if (selectedChoice !== null) {
      return storyData.choices[selectedChoice].content[choiceDialogue];
    }
    // 檢查當前幕和場景是否存在
    const currentActData = storyData.acts[currentAct];
    if (!currentActData || !currentActData.scenes || currentActData.scenes.length === 0) {
      return null;
    }
    const currentSceneData = currentActData.scenes[currentScene];
    if (!currentSceneData || !currentSceneData.dialogue) {
      return null;
    }
    return currentSceneData.dialogue[currentDialogue];
  };

  // 根據對話文本精確匹配圖片（不再使用關鍵詞映射）
  const detectAndShowImage = (dialogue) => {
    if (!dialogue) {
      setCurrentImage(null);
      return;
    }

    const dialogueText = dialogue.text || '';
    if (!dialogueText.trim()) {
      setCurrentImage(null);
      return;
    }

    const charDialogueMap = dialogueImageMap[character.id];
    if (!charDialogueMap) {
      setCurrentImage(null);
      return;
    }

    // 按文本片段長度排序，優先匹配更長、更具體的片段
    const sortedTexts = Object.entries(charDialogueMap).sort((a, b) => b[0].length - a[0].length);

    // 檢查對話文字中是否包含文本片段
    for (const [textFragment, image] of sortedTexts) {
      if (dialogueText.includes(textFragment)) {
        // 如果明確標記為null，不顯示圖片
        if (image === null) {
          setCurrentImage(null);
          return;
        }
        setCurrentImage(image);
        return;
      }
    }
    
    // 如果沒有匹配，清除圖片
    setCurrentImage(null);
  };

  // 監聽對話變化並更新圖片
  React.useEffect(() => {
    const dialogue = getCurrentDialogue();
    if (dialogue) {
      detectAndShowImage(dialogue);
    } else {
      setCurrentImage(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDialogue, currentAct, currentScene, selectedChoice, choiceDialogue]);

  // 檢查並跳過空的幕（在初始化或幕切換時）
  React.useEffect(() => {
    if (!showingChoice && !gameEnded && selectedChoice === null) {
      const currentActData = storyData.acts[currentAct];
      
      // 如果當前幕是空的或沒有場景
      if (!currentActData || !currentActData.scenes || currentActData.scenes.length === 0) {
        // 檢查下一幕
        let nextValidAct = currentAct;
        for (let i = currentAct + 1; i < storyData.acts.length; i++) {
          const actData = storyData.acts[i];
          if (actData && actData.scenes && actData.scenes.length > 0) {
            nextValidAct = i;
            break;
          }
        }
        
        if (nextValidAct !== currentAct && nextValidAct < storyData.acts.length) {
          // 找到有效的下一幕，切換過去
          setCurrentAct(nextValidAct);
          setCurrentScene(0);
          setCurrentDialogue(0);
        } else {
          // 沒有找到有效的幕，直接顯示抉擇
          setShowingChoice(true);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentAct, showingChoice, gameEnded, selectedChoice]);

  // 保存當前狀態到歷史
  const saveStateToHistory = () => {
    setHistory(prev => [...prev, {
      act: currentAct,
      scene: currentScene,
      dialogue: currentDialogue,
      selectedChoice,
      choiceDialogue,
      showingChoice,
      gameEnded
    }]);
  };

  const handleNext = () => {
    const currentDialogueData = getCurrentDialogue();
    
    // 保存當前狀態
    saveStateToHistory();
    
    // 如果是最終對話，標記遊戲結束
    if (currentDialogueData?.type === 'final') {
      setGameEnded(true);
      return;
    }

    if (selectedChoice !== null) {
      // 在抉擇內容中
      if (choiceDialogue < storyData.choices[selectedChoice].content.length - 1) {
        setChoiceDialogue(choiceDialogue + 1);
      } else {
        setGameEnded(true);
      }
    } else {
      // 在正常劇情中
      const currentActData = storyData.acts[currentAct];
      
      // 檢查當前幕是否有場景
      if (!currentActData || !currentActData.scenes || currentActData.scenes.length === 0) {
        // 如果當前幕沒有場景，檢查下一幕或顯示抉擇
        if (currentAct < storyData.acts.length - 1) {
          // 檢查下一幕是否有場景
          const nextActData = storyData.acts[currentAct + 1];
          if (nextActData && nextActData.scenes && nextActData.scenes.length > 0) {
            // 下一幕有場景，切換到下一幕
            setCurrentAct(currentAct + 1);
            setCurrentScene(0);
            setCurrentDialogue(0);
          } else {
            // 下一幕也是空的，直接顯示抉擇
            setShowingChoice(true);
          }
        } else {
          // 所有幕都看完了，顯示抉擇
          setShowingChoice(true);
        }
        return;
      }
      
      const currentSceneData = currentActData.scenes[currentScene];
      if (!currentSceneData || !currentSceneData.dialogue) {
        // 如果當前場景無效，跳到下一場景或下一幕
        if (currentScene < currentActData.scenes.length - 1) {
          setCurrentScene(currentScene + 1);
          setCurrentDialogue(0);
        } else if (currentAct < storyData.acts.length - 1) {
          // 檢查下一幕是否有場景
          const nextActData = storyData.acts[currentAct + 1];
          if (nextActData && nextActData.scenes && nextActData.scenes.length > 0) {
            // 下一幕有場景，切換到下一幕
            setCurrentAct(currentAct + 1);
            setCurrentScene(0);
            setCurrentDialogue(0);
          } else {
            // 下一幕是空的，直接顯示抉擇
            setShowingChoice(true);
          }
        } else {
          setShowingChoice(true);
        }
        return;
      }
      
      if (currentDialogue < currentSceneData.dialogue.length - 1) {
        setCurrentDialogue(currentDialogue + 1);
      } else if (currentScene < currentActData.scenes.length - 1) {
        setCurrentScene(currentScene + 1);
        setCurrentDialogue(0);
      } else if (currentAct < storyData.acts.length - 1) {
        // 檢查下一幕是否有場景
        const nextActData = storyData.acts[currentAct + 1];
        if (nextActData && nextActData.scenes && nextActData.scenes.length > 0) {
          // 下一幕有場景，切換到下一幕
          setCurrentAct(currentAct + 1);
          setCurrentScene(0);
          setCurrentDialogue(0);
        } else {
          // 下一幕是空的或沒有場景，直接顯示抉擇
          setShowingChoice(true);
        }
      } else {
        // 所有幕都看完了，顯示抉擇
        setShowingChoice(true);
      }
    }
  };

  // 後退到上一個對話
  const handlePrevious = () => {
    if (history.length === 0) {
      // 如果沒有歷史記錄，嘗試手動後退
      if (selectedChoice !== null) {
        // 在抉擇內容中
        if (choiceDialogue > 0) {
          setChoiceDialogue(choiceDialogue - 1);
          return;
        } else {
          // 回到抉擇選擇畫面
          setSelectedChoice(null);
          setChoiceDialogue(0);
          setShowingChoice(true);
          setGameEnded(false);
          return;
        }
      } else {
        // 在正常劇情中
        if (currentDialogue > 0) {
          setCurrentDialogue(currentDialogue - 1);
          return;
        } else if (currentScene > 0) {
          setCurrentScene(currentScene - 1);
          const prevScene = storyData.acts[currentAct].scenes[currentScene - 1];
          setCurrentDialogue(prevScene.dialogue.length - 1);
          return;
        } else if (currentAct > 0) {
          setCurrentAct(currentAct - 1);
          const prevAct = storyData.acts[currentAct - 1];
          const lastScene = prevAct.scenes[prevAct.scenes.length - 1];
          setCurrentScene(prevAct.scenes.length - 1);
          setCurrentDialogue(lastScene.dialogue.length - 1);
          return;
        }
      }
      return; // 已經是第一個對話，無法後退
    }

    // 從歷史中恢復狀態
    const previousState = history[history.length - 1];
    setCurrentAct(previousState.act);
    setCurrentScene(previousState.scene);
    setCurrentDialogue(previousState.dialogue);
    setSelectedChoice(previousState.selectedChoice);
    setChoiceDialogue(previousState.choiceDialogue);
    setShowingChoice(previousState.showingChoice);
    setGameEnded(previousState.gameEnded);
    
    // 移除最後一個歷史記錄
    setHistory(prev => prev.slice(0, -1));
  };

  // 檢查是否可以後退
  const canGoBack = () => {
    if (history.length > 0) return true;
    if (selectedChoice !== null && choiceDialogue > 0) return true;
    if (currentDialogue > 0 || currentScene > 0 || currentAct > 0) return true;
    return false;
  };

  const handleChoice = (choiceIndex) => {
    saveStateToHistory();
    setSelectedChoice(choiceIndex);
    setShowingChoice(false);
    setChoiceDialogue(0);
  };

  // 回到抉擇部分
  const handleBackToChoices = () => {
    setGameEnded(false);
    setSelectedChoice(null);
    setChoiceDialogue(0);
    setShowingChoice(true);
    setHistory([]); // 清空歷史記錄
  };

  const handleRestart = () => {
    setCurrentAct(0);
    setCurrentScene(0);
    setCurrentDialogue(0);
    setShowingChoice(false);
    setSelectedChoice(null);
    setChoiceDialogue(0);
    setGameEnded(false);
    setHistory([]); // 清空歷史記錄
  };

  const currentDialogueData = getCurrentDialogue();
  const getCurrentLocationText = () => {
    if (selectedChoice !== null) {
      return storyData.choices[selectedChoice].title;
    }
    const currentActData = storyData.acts[currentAct];
    if (!currentActData || !currentActData.scenes || currentActData.scenes.length === 0) {
      return '未知地點';
    }
    const currentSceneData = currentActData.scenes[currentScene];
    if (!currentSceneData) {
      return '未知地點';
    }
    return currentSceneData.location || '未知地點';
  };
  const currentLocationText = getCurrentLocationText();

  return (
    <div className="story-game">
      <Lightning
        hue={45}
        xOffset={0}
        speed={0.4}
        intensity={0.6}
        size={1.5}
      />
      <div className="story-header" style={{ borderBottomColor: character.color }}>
        <div className="character-info-bar">
          <span className="character-icon-small">{character.image}</span>
          <div>
            <h2 className="character-name-small">{character.name}</h2>
            <p className="character-title-small">{character.title}</p>
          </div>
        </div>
        <div className="story-progress">
          <span className="act-title">
            {showingChoice 
              ? '抉擇時刻' 
              : selectedChoice !== null
                ? (storyData.choices[selectedChoice].actTitle || storyData.choices[selectedChoice].title)
                : (storyData.acts[currentAct]?.title || '未知')}
          </span>
        </div>
      </div>

      <div className="story-content">
        {showingChoice ? (
          <div className="choices-container">
            <h2 className="choices-title">你的抉擇將決定命運</h2>
            <p className="choices-subtitle">選擇你的道路...</p>
            <div className="choices-grid">
              {storyData.choices.map((choice, index) => (
                <div 
                  key={choice.id} 
                  className="choice-card"
                  onClick={() => handleChoice(index)}
                  style={{ borderColor: character.color }}
                >
                  <h3 className="choice-title">{choice.title}</h3>
                  <p className="choice-preview">
                    {choice.content[0]?.text?.substring(0, 100)}...
                  </p>
                  <button 
                    className="choice-button"
                    style={{ backgroundColor: character.color }}
                  >
                    選擇此路線
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : gameEnded ? (
          <div className="game-ended">
            <h2 className="ended-title">故事結束</h2>
            <p className="ended-message">
              {selectedChoice !== null 
                ? `你選擇了：${storyData.choices[selectedChoice].title}`
                : '你已經看完了所有劇情'}
            </p>
            <div className="ended-actions">
              {selectedChoice !== null && (
                <button 
                  className="back-to-choices-button" 
                  onClick={handleBackToChoices}
                  style={{ backgroundColor: character.color }}
                >
                  ← 回到抉擇
                </button>
              )}
              <button 
                className="restart-button" 
                onClick={handleRestart}
                style={{ backgroundColor: character.color }}
              >
                重新開始這個角色
              </button>
              <button 
                className="back-to-select-button" 
                onClick={onBackToCharacterSelect}
              >
                選擇其他角色
              </button>
              <button 
                className="back-to-menu-button" 
                onClick={onBackToMenu}
              >
                返回主選單
              </button>
            </div>
          </div>
        ) : (
          <div className="dialogue-container">
            {/* 圖片顯示區域 */}
            {currentImage && (
              <div className="story-image-container">
                <img 
                  src={currentImage} 
                  alt="劇情圖片" 
                  className="story-image"
                />
              </div>
            )}

            <div className="location-tag" style={{ backgroundColor: character.color }}>
              📍 {currentLocationText}
            </div>
            
            <div className="dialogue-box">
              {currentDialogueData && (
                <>
                  <div className="speaker-info">
                    {currentDialogueData.speaker && (
                      <span 
                        className="speaker-name"
                        style={{ color: character.color }}
                      >
                        {currentDialogueData.speaker}
                      </span>
                    )}
                    {currentDialogueData.emotion && (
                      <span className="speaker-emotion">({currentDialogueData.emotion})</span>
                    )}
                    {currentDialogueData.action && (
                      <span className="speaker-action">[{currentDialogueData.action}]</span>
                    )}
                    {currentDialogueData.type === 'thought' && (
                      <span className="thought-indicator">💭 內心獨白</span>
                    )}
                  </div>
                  
                  <p className={`dialogue-text ${currentDialogueData.type === 'thought' ? 'thought-text' : ''}`}>
                    {currentDialogueData.text}
                  </p>
                </>
              )}
            </div>

            <div className="dialogue-actions">
              <button 
                className="previous-button"
                onClick={handlePrevious}
                disabled={!canGoBack()}
                style={{ 
                  backgroundColor: canGoBack() ? character.color : '#666',
                  opacity: canGoBack() ? 1 : 0.5,
                  cursor: canGoBack() ? 'pointer' : 'not-allowed'
                }}
              >
                ← 上一個
              </button>
              <button 
                className="next-button"
                onClick={handleNext}
                style={{ backgroundColor: character.color }}
              >
                {currentDialogueData?.type === 'final' ? '結束' : '繼續 →'}
              </button>
            </div>
          </div>
        )}
      </div>

      {!showingChoice && !gameEnded && (
        <div className="story-footer">
          <button className="footer-button" onClick={onBackToCharacterSelect}>
            重選角色
          </button>
          <button className="footer-button" onClick={onBackToMenu}>
            主選單
          </button>
        </div>
      )}
    </div>
  );
}

export default StoryGame;