// 遊戲數據 - 角色和劇情
export const characters = [
  {
    id: 'popoca',
    name: '波波卡 (Popoca)',
    title: '阿茲特克羽毛工匠',
    location: '特諾奇提特蘭 (Tenochtitlan)',
    period: 'c. 1519-1521',
    description: '你是備受尊敬的羽毛工匠（Amanteca），為皇帝蒙特祖馬和最精銳的戰士製作華麗的儀式披風。你的雙手被賦予了神聖的使命，你的技藝是世襲的。你相信階級是神所制定的，你對這門古老技藝充滿驕傲。',
    image: '🪶',
    color: '#8B4513'
  },
  {
    id: 'kallpa',
    name: 'Kallpa (卡爾帕)',
    title: '安第斯山區村民',
    location: '安第斯山脈',
    period: 'c. 1526-1533',
    description: '你是生活在世界屋脊的年輕牧民，照看著家族的駱馬和羊駝。你的生活由血緣親屬和神聖的互惠原則（Ayni）維繫著。你最親近的人是表哥Pacha，他是你心中的榜樣。你相信腳下的大地（Pachamama）和護佑村莊的雪山之靈（Apu）。',
    image: '🦙',
    color: '#CD853F'
  },
  {
    id: 'guani',
    name: 'Guani (瓜妮)',
    title: '泰諾農藝師 / 陶藝師',
    location: 'Quisqueya（伊斯帕尼奧拉島）',
    period: 'c. 1492-1508',
    description: '你是食物的創造者，木薯（Yuca）處理的大師。你深知這種植物的秘密——它的根莖生吃是致命劇毒，但經過你的雙手就變成了養活全村的主食。作為酋長的妹妹，你在母系社會中地位崇高。你堅定地信仰Atabey。',
    image: '🌿',
    color: '#2E8B57'
  },
  {
    id: 'balam',
    name: "B'alam (巴拉姆)",
    title: '馬雅可可商人',
    location: '猶加敦半島',
    period: 'c. 1542-1562',
    description: '你是受人尊敬的馬雅商人（P\'polom），經營可可豆、蜂蜜和蠟燭。猶加敦半島分裂成16個城邦，但對你而言這是16個市場。你是現實主義者，真正的信仰是"利潤"。你深知要打開市場，必須表現得比祭司更虔誠。',
    image: '🍫',
    color: '#654321'
  }
];

export const storyData = {
  popoca: {
    acts: [
      {
        title: '第一幕：世界如常 (c. 1519)',
        scenes: [
          {
            location: '我的工坊 (Amantlan 區)',
            dialogue: [
              { speaker: '波波卡', text: '我叫波波卡。我的雙手比你們macehualli（平民）的血脈更高貴。我不是在湖泥裡種玉米的，我是Amanteca——羽毛工匠。我的雙手，是為戰神維齊洛波奇特利（Huitzilopochtli）和「獨一真神」特斯卡特利波卡（Tezcatlipoca）服務的。' },
              { speaker: '旁白', text: '我的兒子，科約特（Coyotl），正低著頭。他的手指在發抖，毀了一根珍貴的格查爾鳥（Quetzal）長尾羽。' },
              { speaker: '波波卡', text: '停下。' },
              { speaker: '科約特', text: '父親……我……', emotion: '顫抖' },
              { speaker: '波波卡', text: '抬起頭。看看你的手。這是在致敬神祇，還是在侮辱神祇？這片羽毛的光澤，被你的汗水弄髒了。這不是『好』，這甚至不配被燒掉。' },
              { speaker: '科約特', text: '對不起，父親……' },
              { speaker: '波波卡', text: '『對不起』不能讓格查爾鳥死而復生。我們是波波卡家族。我們的作品懸掛在大神廟（Templo Mayor）的頂端。你的手必須像黑曜石刀一樣穩，你的心必須像黃金一樣純粹。現在，重新開始。用你自己的羽毛練習，直到你不配浪費國庫的貢品為止。' }
            ]
          },
          {
            location: '特拉特洛爾科（Tlatelolco）大市場',
            dialogue: [
              { speaker: '旁白', text: '我帶著妻子希洛（Xiloxoch）穿過市場。一個扛著陶罐的平民撞到了我的肩膀。' },
              { speaker: '平民', text: '啊！請原諒，尊貴的大人！我沒看見您……' },
              { speaker: '波波卡', text: '你當然看不見。你的眼睛只盯著你腳下的泥土。而我，我仰望太陽。管好你的罐子，平民。別讓你的粗俗玷汙了獻給祭司的布料。' },
              { speaker: '希洛', text: '波波卡，算了。人太多了。' },
              { speaker: '波波卡', text: '這就是秩序。神在天上，皇帝在宮殿，我在工坊，而他在泥地裡。這就是世界應有的樣子。聽說最近有『凶兆』？無稽之談。只要太陽還在升起，我們的世界就堅不可摧。', type: 'thought' }
            ]
          }
        ]
      },
      {
        title: '第二幕：世界崩塌 (c. 1520-1521)',
        scenes: [
          {
            location: '被圍困的城市，我的工坊',
            dialogue: [
              { speaker: '波波卡', text: '秩序……秩序在哪裡？Huey Cocoliztli……天花。這座城市正在腐爛。我的工坊，我神聖的工坊，現在充滿了死亡的惡臭。', type: 'thought' },
              { speaker: '旁白', text: '我跪在草蓆旁。希洛，我的妻子，她美麗的臉龐已經被膿皰（Pustules）毀掉。她高燒不退，囈語著。' },
              { speaker: '希洛', text: '水……波波卡……好痛……', emotion: '虛弱' },
              { speaker: '旁白', text: '我抓起一把最珍貴的、為戰神準備的蜂鳥羽毛，貼在她的額頭上。' },
              { speaker: '波波卡', text: 'Xiuhtecuhtli（火神），工藝之主……看看我的奉獻……救救她……', emotion: '低語' },
              { speaker: '旁白', text: '羽毛滑落了。什麼也沒發生。在角落裡，我的兒子科約特，那個我曾寄予厚望的男孩，也在蜷縮著。他已經停止了呻吟。' },
              { speaker: '波波卡', text: '我向戰神祈禱。我向雨神祈禱。沒有回應。我的手……這雙曾讓羽毛飛翔的手，現在只能用來擦拭死亡的冷汗。我的技藝有什麼用？它不能退燒。它不能阻止膿皰。', type: 'thought' },
              { speaker: '旁白', text: '堤道方向傳來雷鳴般的巨響——那是 Teules 的『火蛇』在噴吐死亡，身旁跟著特拉斯卡拉的戰吼與無數曾向我們納貢的叛徒。瑪琳切的舌頭，成了插進我們心臟的矛。水道被屍體堵塞，鷹與美洲豹戰士的喊殺聲越來越弱……特諾奇提特蘭，正在沉入湖底。' },
              { speaker: '波波卡', text: '我看著我那佈滿灰塵的傑作。一文不值。我的神沉默了。或者，他們已經被這些外來者的神殺死了。', type: 'thought' },
              { speaker: '旁白', text: '希洛的呼吸停止了。' },
              { speaker: '波波卡', text: '科約特也走了。我獨自一人。我的高傲、我的技藝、我的神……都是謊言。', type: 'thought' }
            ]
          }
        ]
      }
    ],
    choices: [
      {
        id: 1,
        title: '抉擇一：轉變（戰士）',
        actTitle: '第三幕：最後的抵抗 (1521)',
        content: [
          { speaker: '波波卡', text: '我的神死了。我的家人死了。我的手藝，我一生的驕傲，只是一堆漂亮的垃圾。高傲？地位？那都是健康者的遊戲。現在，只剩下石頭、水，和這些入侵者。我不再是Amanteca。我什麼都不是。但如果我注定要死，我將作為一個特諾奇提特蘭人（Tenochca）死去。', type: 'thought' },
          { speaker: '波波卡', text: '拿起它，波波卡。' },
          { speaker: '旁白', text: '我走出工坊。我撿起一把掉落的Macuahuitl（黑曜石鋸劍）。它好重。我從未殺過生。' },
          { speaker: '旁白', text: '我加入了最後一批保衛堤道的戰士。我對著那些穿著金屬的Teules（惡魔）衝鋒。我不知道如何格擋。我只知道如何向前。' },
          { speaker: '旁白', text: '我看到一個圓形的金屬管對準了我。我聽到了比眾神發怒還要響亮的雷聲。' },
          { speaker: '波波卡', text: '至少，我不再需要擔心羽毛的光澤了……', type: 'final' }
        ]
      },
      {
        id: 2,
        title: '抉擇二：逃離（倖存者）',
        actTitle: '第三幕：最後的抵抗 (1521)',
        content: [
          { speaker: '波波卡', text: '他們死了。我的希洛，我的科約特。我吻了他們冰冷的額頭。我必須活下去。如果我死了，誰還會記得他們的臉？誰還會記得羽毛工匠波波卡？', type: 'thought' },
          { speaker: '旁白', text: '我想起了那個我曾為他製作過一套美洲虎武士服的貴族……他欠我人情。他曾說過，他們在特拉科潘（Tlacopan）堤道下藏了一艘獨木舟。' },
          { speaker: '波波卡', text: '原諒我……', emotion: '對著屍體低語' },
          { speaker: '旁白', text: '我在夜色和煙霧的掩護下，爬過了成堆的屍體。我找到了那個貴族。' },
          { speaker: '貴族', text: '快！沒有時間了！' },
          { speaker: '旁白', text: '我們在惡臭的運河水中潛行。頭頂上是西班牙人的戰船（Brigantines）和盟友（特拉斯卡拉人）的箭矢。當我們終於爬上湖對岸的泥濘陸地時，我回頭望去。特諾奇提特蘭——世界的中心——正在燃燒。' },
          { speaker: '波波卡', text: '我成功了。我想，這也許是我那些沉默的舊神……對我的最後一次幫助。他們沒有拯救我的城市，沒有拯救我的家人。但他們讓我這個工匠活了下來。為什麼？是為了讓我記住這一切嗎？', type: 'final' }
        ]
      },
      {
        id: 3,
        title: '抉擇三：倖存（奴工）',
        actTitle: '第三幕：活着的死亡 (1521-1525)',
        content: [
          { speaker: '波波卡', text: '我不能離開他們。我坐在希洛和科約特的屍體旁，等待著終結。', type: 'thought' },
          { speaker: '旁白', text: '門被踢開了。是(西班牙人)Teules和他們的特拉斯卡拉盟友(阿茲特克敵國)。他們看到了我，舉起了劍。他們看到了我身上的病疤（天花後遺症），露出了厭惡的表情。' },
          { speaker: '波波卡', text: '我不想死。我不知道為什麼，但我不想死。', type: 'thought' },
          { speaker: '旁白', text: '他們把我拖走，和其他倖存者一起關進奴隸營。日復一日，我在碎石與灰燼中勞作，重建這座被他們稱為『墨西哥城』的廢墟。' },
          { speaker: '波波卡', text: '一年過去了。他們在我們神廟的遺址上，蓋起了一座冰冷的石頭教堂。', type: 'thought' },
          { speaker: '旁白', text: '一個穿著棕色長袍、沒有武器的西班牙人（方濟會修士）走進了營地。他不像其他人那樣佩劍或攜帶鞭子。他在觀察我們，像是在尋找什麼。' },
          { speaker: '旁白', text: '他停在了我面前。我正在用一塊碎石，無意識地在泥地上劃出一隻格查爾鳥的輪廓。這是我僅存的習慣。' },
          { speaker: '修士', text: '...你。你的手。', emotion: '生硬的納瓦特爾語' },
          { speaker: '旁白', text: '他蹲下來，看著那隻鳥的圖案。他的手指觸碰了我的手腕——那雙曾為皇帝服務、如今佈滿瘡疤和污垢的手。' },
          { speaker: '修士', text: '你造過神像？' },
          { speaker: '波波卡', text: '...', action: '我點了點頭。' },
          { speaker: '修士', text: '很好。你的手藝不屬於魔鬼。它屬於 Dios（上帝）。你將為一個新的神服務。一個真正的神。', action: '他拉起了我。' },
          { speaker: '旁白', text: '我活了下來。我現在坐在一個冰冷的石頭房間裡。這是一座新蓋的『教堂』。我的手，那雙曾為阿茲特克皇帝服務的手，正在製作一件新的披風。不是為戰神，而是為他們釘在木架上的那個『神之子』的母親（聖母瑪利亞）。他們稱讚我的技藝，說這是『上帝的禮物』。我只是點頭。' },
          { speaker: '波波卡', text: '我的技藝還在，但我的靈魂已經死了。我的驕傲、我的家人、我的神，都和特諾奇提特蘭一起被埋葬了。我是一個活著的死人。', type: 'final' }
        ]
      }
    ]
  },
  
  kallpa: {
    acts: [
      {
        title: '第一幕：世界的秩序 (c. 1526)',
        scenes: [
          {
            location: '梯田 (Andenes) 上的勞作',
            dialogue: [
              { speaker: 'Kallpa', text: '我叫Kallpa。我的世界就是這座山。我能聞到藜麥（Quinoa）煮熟的香氣，和駱馬（Llama）糞便燃燒時的煙味。' },
              { speaker: '旁白', text: '我和Pacha正在修復一堵被山洪沖垮的梯田石牆。' },
              { speaker: 'Pacha', text: '看，Kallpa。石頭和人一樣，都有自己的位置。放對了，Pachamama（大地母親）就會安穩。放錯了，一切都會崩塌。', action: '輕鬆地舉起一塊我搬不動的石頭，嵌入牆中' },
              { speaker: 'Kallpa', text: '你的位置就是在這指揮我們，是嗎？' },
              { speaker: 'Pacha', text: '我的位置，就是在你偷懶去追逐羊駝（Alpaca）的時候，把你的工作也做完。快點，日落前我們必須完成，Ayni（互惠）可不是嘴上說說。', action: '笑著，用他沾滿泥土的手弄亂了我的頭髮' },
              { speaker: '旁白', text: '傍晚，Kuraka（村莊領袖）來了。' },
              { speaker: 'Kuraka', text: 'Pacha。你已經成年，身體強壯。輪到你了。薩帕·印加（Sapa Inca）——偉大的瓦伊納·卡帕克（Huayna Capac）——正在北方（基多）修建 neuen 宮殿。你的Mit\'a（國家勞役）就是去那裡。' },
              { speaker: 'Kallpa', text: '我的心沉了一下。基多？那太遠了。', type: 'thought' },
              { speaker: 'Kallpa', text: 'Pacha……' },
              { speaker: 'Pacha', text: '嘿，Kallpa。這是榮耀。我們為太陽之子工作，他才能命令太陽（Inti）升起，賜予我們馬鈴薯。這就是宇宙的法則。', action: '用力地摟住我的肩膀' },
              { speaker: 'Kallpa', text: '但……那要多久？' },
              { speaker: 'Pacha', text: '幾次收割而已。等我回來，我會給你講北方的故事。而且，等你長到我這麼高，你的Mit\'a可能就是去庫斯科（Cusco）的太陽神殿，到時候，我們就在帝國的中心相遇！' },
              { speaker: 'Kallpa', text: '我看著他隔天離開，背影消失在山口。我點點頭。Pacha說的對。這就是秩序。我無法想像，這會是我最後一次……看到他那樣對我笑。', type: 'thought' }
            ]
          }
        ]
      },
      {
        title: '第二幕：世界的裂痕 (c. 1527-1532)',
        scenes: [
          {
            location: '瘟疫與內戰',
            dialogue: [
              { speaker: 'Kallpa', text: 'Pacha離開後的第二個收穫季，「痘病」（天花）降臨了。這不是我們認識的任何疾病。它從北方傳來，就是Pacha去的那個方向。我的小妹妹只發了三天燒，就走了。', type: 'thought' },
              { speaker: '旁白', text: '接著，最可怕的消息沿著路網傳來：偉大的薩帕·印加，瓦伊納·卡帕克，也死於這種怪病。' },
              { speaker: 'Kallpa', text: '太陽之子……死了？神……怎麼會生病？如果他連自己的身體都保護不了，他如何掌控太陽？Pacha的犧牲，又是為了什麼？這是我第一次對宇宙的法則產生了懷疑。', type: 'thought' }
            ]
          },
          {
            location: 'Ayllu（村社）邊境的山谷',
            dialogue: [
              { speaker: 'Kallpa', text: '世界徹底失控了。皇帝的兩個兒子——瓦斯卡爾和阿塔瓦爾帕——都宣稱自己是新的太陽之子。內戰爆發了。', type: 'thought' },
              { speaker: 'Kuraka', text: '我們的 Ayllu 效忠庫斯科的瓦斯卡爾！守住山口！阿塔瓦爾帕的北方軍隊正在靠近！' },
              { speaker: '旁白', text: '我在恐懼中握緊了投石索。當那支軍隊出現時，我看到了他們。他們穿著北方的軍裝。走在最前面的那個斥候...' },
              { speaker: 'Kallpa', text: 'Pacha...?', emotion: '難以置信' },
              { speaker: '旁白', text: '他看起來更黑、更精瘦，眼神冰冷。他看到了我，舉起了長矛。' },
              { speaker: 'Pacha', text: '滾開，Kallpa。你可以選擇現在立刻離開或者死。太陽在基多（阿塔瓦爾帕的陣營）。' },
              { speaker: 'Kallpa', text: 'Pacha！是我！你教我如何堆砌石頭！Ayni...', emotion: '顫抖' },
              { speaker: 'Pacha', text: 'Ayni 已經死了。現在只有戰爭。', action: '他沒有猶豫，長矛指向了我們的 Kuraka。' },
              { speaker: 'Kallpa', text: '那一刻，我感覺Pachamama（大地母親）在我腳下裂開了。Pacha 教會我的一切...被他親手打碎了。帝國？太陽的法則？這一切都是個殘酷的謊言。', type: 'thought' }
            ]
          },
          {
            location: '卡哈馬卡（Cajamarca）的陰影',
            dialogue: [
              { speaker: 'Kallpa', text: '阿塔瓦爾帕（Pacha所在的一方）贏了。但勝利的消息剛到，更瘋狂的傳言就緊隨其後：新的太陽之子，在卡哈馬卡，被一百多個「長著鬍子、皮膚是金屬」的怪人俘虜了。', type: 'thought' },
              { speaker: 'Kallpa', text: '俘虜了？神...怎麼會被俘虜？', type: 'thought' }
            ]
          },
          {
            location: 'Ayllu（村社）的集會',
            dialogue: [
              { speaker: '旁白', text: '幾個月過去了。整個帝國都在瘋狂地收集黃金和白銀。' },
              { speaker: 'Kuraka', text: '聽著！Viracochas（西班牙人）答應了！只要我們用黃金填滿一個房間，用白銀填滿兩個房間，他們就釋放薩帕·印加！', emotion: '聲音顫抖但抱有希望' },
              { speaker: 'Kallpa', text: '我們交出了神殿的飾品，融化了祖先的面具。我們的人民日夜不停地搬運財寶去卡哈馬卡。這是一種...贖金。我們在...贖回我們的神。Pacha，你到底在哪裡...', type: 'thought' }
            ]
          },
          {
            location: '最終的審判',
            dialogue: [
              { speaker: '旁白', text: '贖金...幾乎付清了。今天，Kuraka 再次召集了所有人。他的臉色如死灰一般。' },
              { speaker: 'Kuraka', text: '他們...他們撒謊了。', emotion: '徹底崩潰' },
              { speaker: 'Kuraka', text: 'Viracochas（西班牙人）……他們拿走了黃金……然後……他們處決了阿塔瓦爾帕。他們用繩子勒死了他。像對待一個盜賊一樣。' },
              { speaker: 'Kallpa', text: '寂靜。神，被贖回，然後被殺死。被凡人殺死了。Pacha為之戰鬥的「神」，被一百多個外來者隨意地處決了。而太陽……第二天依然升起。一切都是假的。Pacha的犧牲毫無意義。我的信仰，我所知道的世界，在那一刻，徹底死亡了。', type: 'thought' }
            ]
          }
        ]
      }
    ],
    choices: [
      {
        id: 1,
        title: '抉擇一：服從（銀礦勞役）',
        actTitle: '第三幕：新世界的奴役 (1533-1537)',
        content: [
          { speaker: 'Kallpa', text: '我被抓走了。Pacha為了一個假神而死，而我，為了一種白色的金屬（白銀）而活。我被送到了波帕揚Popayán，那座會吞噬人的銀山。', type: 'thought' },
          { speaker: 'Kallpa', text: '在這裡，沒有Ayni。你旁邊的人倒下了，你不能停，否則監工的鞭子會抽裂你的皮膚。我成了一個機器。每天，我背著沉重的礦石，在黑暗、寒冷、充滿水銀毒氣的礦道裡爬行。', type: 'thought' },
          { speaker: 'Kallpa', text: 'Pacha曾教我如何堆石頭。現在，我只知道如何敲碎石頭。我的信仰早就死了。我的身體也快了。我咳出了血。至少……我不用再看到明天的太陽了。那個騙了我們所有人的太陽。', type: 'final' }
        ]
      },
      {
        id: 2,
        title: '抉擇二：反抗（為家人而戰）',
        actTitle: '第三幕：新世界的奴役 (1533-1537)',
        content: [
          { speaker: 'Kallpa', text: '信仰崩潰了。但我的妻子奇姆普還在。我的小兒子還在。', type: 'thought' },
          { speaker: '旁白', text: '當西班牙士兵試圖強行帶走奇姆普時，我心中的某個東西……斷裂了。' },
          { speaker: 'Kallpa', text: 'Pacha為一個謊言而死。我不能讓我的家人為另一個謊言而死。沒有神。沒有印加。只有我的Ayllu。', type: 'thought' },
          { speaker: 'Kallpa', text: '拿上孩子。快。', emotion: '對妻子低語' },
          { speaker: 'Kallpa', text: '那天晚上，我用我的chaquitaclla（安第斯鋤頭）殺死了那個士兵。我們逃進了高山。聽說，一位印加王子（曼科·印加Manco Inca）在維爾卡班巴（Vilcabamba）的叢林裡組織了反抗軍。我加入了他們。', type: 'thought' },
          { speaker: 'Kallpa', text: '我不再為太陽或神靈戰鬥。我為奇姆普的呼吸、為我兒子的未來而戰。我心中的信仰已經死了。但正因為如此，我才真正開始為活著的人而戰。', type: 'final' }
        ]
      },
      {
        id: 3,
        title: '抉擇三：適應（莊園工頭）',
        actTitle: '第三幕：新世界的奴役 (1533-1537)',
        content: [
          { speaker: 'Kallpa', text: '神是假的。反抗是徒勞的。我親眼看到他們那會噴火的Illapa（雷電，指火槍）。我只想讓我的家人活下去。', type: 'thought' },
          { speaker: '旁白', text: '我向新的莊園主（Encomendero）展示了我對羊駝的了解。' },
          { speaker: 'Kallpa', text: '那隻懷孕了。這隻生病了。', action: '指著一隻羊駝' },
          { speaker: 'Kallpa', text: '他留下了我，讓我成了他的牧民工頭。我保護了我的家人。我們有食物。代價是……我必須用鞭子抽打我自己的族人，逼迫他們為西班牙人勞動。', type: 'thought' },
          { speaker: 'Kallpa', text: 'Pacha曾是Ayni的榜樣。而我，成了Ayni的叛徒。但我告訴自己，這是值得的。', type: 'thought' },
          { speaker: '旁白', text: '直到新的瘟疫（可能是麻疹）再次襲來。莊園裡的集中營式管理讓疾病傳播得更快。我的妻子和兒子，在我「保護」下的家人，相繼病倒。昨天，我抱著兒子冰冷的屍體。今天早上，我發燒了。我顫抖著脫下上衣。' },
          { speaker: 'Kallpa', text: '我的胸口上，出現了第一批紅色的斑點。我看著自己出賣一切換來的『安全』，笑了。原來，我只是選擇了一條比較慢的死路。', type: 'final' }
        ]
      }
    ]
  },

  guani: {
    acts: [
      {
        title: '第一幕：世界如常 (c. 1492)',
        scenes: [
          {
            location: '村莊 (Yucayeque) 的 Conuco（農田）',
            dialogue: [
              { speaker: 'Guani', text: '我叫Guani。我的世界是海洋的蔚藍與叢林的深綠。我的身份是食物的創造者。' },
              { speaker: '旁白', text: '我從土裡挖出木薯（Yuca）的根莖。我的兒子，Anani（阿納尼），在我身邊玩耍。' },
              { speaker: 'Guani', text: '我觸摸著這根莖。Atabey賜予了它生命，但也藏入了死亡。我的工作，就是馴服死亡。', type: 'thought' },
              { speaker: 'Guani', text: '看，Anani。這毒汁（氰化物）足以讓一個孩子停止呼吸。但經過媽媽的手……' },
              { speaker: '旁白', text: '我將木薯漿填入Cibucán（編織擠壓管），用力拉扯，看著乳白色的毒汁流出。' },
              { speaker: 'Guani', text: '它就變成了生命。這就是Atabey教導我們的平衡。', action: '微笑著，將無毒的木薯粉烤成Casabe餅' },
              { speaker: '旁白', text: '三座漂浮的「巨山」（帆船）到來了。' },
              { speaker: '兄弟 (Cacique)', text: 'Guani，帶Anani躲起來。他們可能是Maboya（惡靈）。', action: '握緊木矛' },
              { speaker: 'Guani', text: '等等……你看他們。他們看起來很渴，很累。' },
              { speaker: 'Guani', text: '作為食物的提供者，我的仁慈壓倒了恐懼。我捧著淡水和Casabe走上前。領頭的那個「怪人」（哥倫布）接過了我的食物。然後，他的目光越過我，看到了我兄弟脖子上戴的小金飾（Guanín）。他的眼睛亮了起來。', type: 'thought' },
              { speaker: 'Guani', text: '那一刻，我犯了一個錯誤。我以為他們是人。我以為他們也懂『互惠』。我用食物歡迎了他們，而他們看到的，卻是黃金。', type: 'thought' }
            ]
          }
        ]
      },
      {
        title: '第二幕：世界崩潰 (c. 1493 - 1508)',
        scenes: [
          {
            location: 'Encomienda（監護征賦制）下的地獄',
            dialogue: [
              { speaker: 'Guani', text: 'Cristianos（西班牙人）回來了。我的兄弟……他們因為黃金不夠，吊死了他。', type: 'thought' },
              { speaker: 'Guani', text: '我的族人開始生一種怪病。', type: 'thought' },
              { speaker: '旁白', text: '我跪在Zemí（神靈）雕像前，Anani躲在我身後。' },
              { speaker: 'Guani', text: 'Atabey！看看你的子民！這是一場考驗，對嗎？是Maboya在作祟！請降下神蹟！驅逐他們！', emotion: '瘋狂地祈禱' },
              { speaker: 'Guani', text: '我堅信。我身為酋長的妹妹，是神聖的食物創造者。Atabey不會拋棄我。', type: 'thought' },
              { speaker: 'Guani', text: '那天晚上，監護主（Encomendero）喝醉了。他闖進了我的小屋。（……）幾個月後，我生下了第二個孩子。一個混血的男嬰。', type: 'thought' },
              { speaker: 'Guani', text: '我憎恨他。我憎恨這個孽種。他是我的恥辱。我給他取名叫Mateo，那是西班牙人強加的名字。我所有的仁慈，我所有的愛，都只給了Anani。Anani是我的過去，我的希望。Mateo是我的創傷，是必須被淨化的污點。', type: 'thought' },
              { speaker: 'Guani', text: '疾病大流行。我的Anani……我純潔的、真正的兒子……開始發高燒。', type: 'thought' },
              { speaker: 'Guani', text: 'Atabey！救救他！求求你！', emotion: '抱著Anani' },
              { speaker: 'Guani', text: '我瘋狂地祈禱。但Anani的病情迅速惡化。與此同時，那個我憎恨的、幾乎沒有照料的混血兒Mateo竟在高燒後奇蹟般康復……而我的 Anani，我日夜呵護的兒子，卻即將被死神帶走。Atabey 的意志，我再也無法理解。', type: 'thought' },
              { speaker: 'Guani', text: 'Atabey……你為什麼救了那個孽種，卻不救我的Anani？', type: 'thought' }
            ]
          }
        ]
      }
    ],
    choices: [
      {
        id: 1,
        title: '抉擇一：逃往深山（破碎的信仰）',
        actTitle: '第三幕：崩潰與選擇 (1508-1510)',
        content: [
          { speaker: 'Guani', text: '不行！我不能讓他死！Cristianos的惡靈污染了海岸！我必須帶Anani去Bahoruco山區！', action: '看著病重的Anani' },
          { speaker: '老婦人', text: 'Guani，那Mateo呢？' },
          { speaker: 'Guani', text: '他不是我的孩子！他是西班牙人的種！把他留給他的父親！我的仁慈，只屬於我真正的血脈！Atabey會在山上治癒Anani的！', emotion: '憎恨地看著那個混血兒' },
          { speaker: 'Guani', text: '我帶著Anani逃進了深山，加入了其他逃亡的泰諾倖存者。我在山洞裡日夜祈禱。但Atabey始終沉默。在山區寒冷的空氣中，Anani的呼吸停止了。', type: 'thought' },
          { speaker: 'Guani', text: '我的神死了。我看著周圍，我們帶來的倖存族人，也在一個接一個地死於他們從定居點帶來的傳染病。我逃離了西班牙人，卻沒能逃離他們的疾病。', type: 'final' }
        ]
      },
      {
        id: 2,
        title: '抉擇二：同化（矛盾的母愛）',
        actTitle: '第三幕：崩潰與選擇 (1508-1510)',
        content: [
          { speaker: 'Guani', text: '我的Anani……死了。我用盡了所有草藥，向Atabey獻出了我最後的眼淚。她沒有救他。我的神死了。', type: 'thought' },
          { speaker: 'Guani', text: '而那個孩子……那個我憎恨的孩子，Mateo……他活了下來。我憎恨他。我憎恨他身上的血，那血殺死了我的兄弟，殺死了我的Anani。', type: 'thought' },
          { speaker: 'Guani', text: '但……當我昨晚看著他時，他握住了我的手指。他有我的眼睛。……他是我的孩子。我最後的孩子。', emotion: '哭泣' },
          { speaker: 'Guani', text: '我的信仰崩潰了。取而代之的是一種扭曲、痛苦的現實主義。', type: 'thought' },
          { speaker: 'Guani', text: '主人，我會說你們的語言。我會管理你的莊園。我會……接受洗禮。', emotion: '對西班牙監護主' },
          { speaker: 'Guani', text: '我變得冷酷，只為保護這個我既愛又恨的矛盾體。我會讓他活下去。這是我作為一個母親，最後的工作。', type: 'final' }
        ]
      },
      {
        id: 3,
        title: '抉擇三：航向未知（被詛咒的技藝）',
        actTitle: '第三幕：崩潰與選擇 (1508-1510)',
        content: [
          { speaker: 'Guani', text: '不行！Atabey已經拋棄了這座島！我們必須離開！', emotion: '抱著瀕死的Anani' },
          { speaker: '兄弟Arima', text: 'Guani，我藏了一艘船。你的技藝是神聖的。製作Casabe的能力，是Atabey賜予我們的。我們必須把這份技藝帶到新的土地上發揚光大！' },
          { speaker: 'Guani', text: '帶上Anani！快！' },
          { speaker: 'Arima', text: '那Mateo呢？' },
          { speaker: 'Guani', text: '……他是這片詛咒之地的產物。讓他留下。我們走！', action: '看了一眼那個混血兒' },
          { speaker: 'Guani', text: '我們在海上漂流。Anani的病情時好時壞。我們最終登陸在一片未知的海岸——這裡是加勒比人（Carib）的領地，我曾經最害怕的敵人。但他們沒有攻擊我們。他們和我們一樣，臉上帶著病容和恐懼。', type: 'thought' },
          { speaker: 'Guani', text: '我低頭看著Anani。他不僅在發燒，身上也開始出現了……膿皰。我終於明白。疾病跟著我們來了。我試圖發揚光大的『神聖技藝』，卻伴隨著我無法擺脫的『詛詛』，一同抵達了這個新世界。Atabey，你根本沒有拋棄我們。你只是在用一種我們無法理解的方式，來平衡這個世界...', type: 'final' }
        ]
      }
    ]
  },

  balam: {
    acts: [
      {
        title: '第一幕：世界如常 (c. 1542)',
        scenes: [
          {
            location: '馬尼（Maní）城邦的市場 - Xiu 家族的領地',
            dialogue: [
              { speaker: "B'alam", text: "我叫B'alam。我的神是Ek' Chuah，商人之神——一個連祭司都快忘記的名字。而他的第一條戒律，就是「別做虧本生意」。" },
              { speaker: "B'alam", text: '我的世界是破碎的，分為16個城邦。但對我來說，這不是16個國家，這是16個市場。我的貨物是可可豆、蜂蜜和蠟。而我的真正商品，是信任。', type: 'thought' },
              { speaker: "B'alam", text: '今天，我在馬尼，Xiu家族的地盤。他們是「新貴」，推翻了舊霸權，總喜歡談論「智慧」和「正統」。', type: 'thought' },
              { speaker: 'Xiu 貴族', text: "……B'alam，你的蠟一如既往的純淨。這將在羽蛇神（Kukulkan）的祭壇上完美燃燒。", action: '檢查著我的蜂蠟' },
              { speaker: "B'alam", text: '大人，您過獎了。能為『真正』的馬雅繼承者服務，是我的榮幸。Kukulkan賜予Xiu家族智慧，而我只是提供了光。願您的家族如金字塔般永恆。', action: '謙卑地鞠躬，雙手合十' },
              { speaker: 'Xiu 貴族', text: '說得好，商人。這是你的可可豆。下次帶些沿海的鹽來。', emotion: '滿意地點頭' },
              { speaker: "B'alam", text: 'Kukulkan...一條長著羽毛的蛇。我只見過死蛇。但如果讚美一條蛇能讓我的蜂蠟多賣10%的價錢，我會為它寫一首史詩。這個Xiu貴族和他的可可豆一樣容易腐爛。', type: 'thought' }
            ]
          },
          {
            location: '索圖塔（Sotuta）城邦的領主大廳 - Cocom 家族的領地',
            dialogue: [
              { speaker: "B'alam", text: '三天後，我抵達了索圖塔。這裡是Cocom家族的地盤。「舊霸主」。他們的心和他們的蜂蜜酒一樣苦。他們只關心復仇和他們古老的Kukulkan。', type: 'thought' },
              { speaker: 'Cocom 領主', text: "你身上有馬尼(Maní）的臭味，B'alam。你是不是又去親吻Xiu家族的腳了？", emotion: '粗魯地' },
              { speaker: "B'alam", text: '大人，這只是生意。我必須餵飽我的腳夫。但我的心，永遠和『真正』的古神在一起。', action: '立刻壓低聲音，表情變得沉痛' },
              { speaker: "B'alam", text: '這是我在路上特意為您保留的。我經過您祖父的聖地時，曾向Kukulkan唯一的繼承人祈求，祈求它們早日懲罰那些背信棄義的Xiu叛徒。', action: '從袋中取出一小瓶蜜酒' },
              { speaker: 'Cocom 領主', text: "……哼。至少你還記得誰才是這片土地的主人。你的可可豆呢？拿來。別讓那些Xiu懦夫以為你忘了他們的罪行。", action: '咕噥了一聲，喝下蜜酒' },
              { speaker: "B'alam", text: '這些Cocom家族的人，沉迷於過去，就像蒼蠅沉迷於腐肉。他們的仇恨...是多麼穩定可靠的「需求」。只要我迎合他們的仇恨，我的可可豆就能暢通無阻。', type: 'thought' },
              { speaker: "B'alam", text: '我以為這種遊戲會永遠持續下去。Xiu的「智慧」，Cocom的「仇恨」。這都是我的資產。', type: 'thought' },
              { speaker: '旁白', text: '直到消息傳來。Dzules（外來者）。鋼鐵。火炮。騎著「巨型野鹿」（馬）的怪物。祭司們在尖叫：「預言成真了！K\'atun 13 Ajaw的末日到了！」' },
              { speaker: "B'alam", text: '我站在市場中央，手裡的計算工具（一堆可可豆）掉在了地上。我不是在敬畏。我是在恐慌。那些老神棍...那些我嘲笑了一輩子的傢伙...他們居然說對了？！這不是神蹟。這不是預言。這是一場惡意的市場收購。一個全新的、殘酷的「主要玩家」登場了。我所有的「客戶關係」、我所有的「貿易路線」……一夜之間，可能全都要作廢。B\'alam...你必須立刻選擇。這將是你一生中最大的一筆投資。押錯了，你就破產了。', type: 'thought' }
            ]
          }
        ]
      },
      {
        title: '第二幕：市場的重置 (c. 1543)',
        scenes: [
          {
            location: '坎佩切（Campeche）的貿易站',
            dialogue: [
              { speaker: "B'alam", text: "我躲在我的倉庫裡，空氣中滿是可可豆的香氣和恐懼的酸臭味。市場已經癱瘓了三天。Dzules（外來者）和他們的Xiu盟友正在橫掃西部。", "type": "thought" },
              { speaker: "受傷的商人", text: "B'alam！快跑！他們在Sotuta（索圖塔）殺人！Cocom領主正在集結所有人...這是一場聖戰！", "action": "闖進來，一隻眼睛受了傷" },
              { speaker: "B'alam", text: "『聖戰』？", "emotion": "冷靜地" },
              { speaker: "受傷的商人", text: "你不懂嗎？這是末日！" },
              { speaker: "B'alam", text: "我懂。我懂『成本』。你說的『聖戰』，成本太高了。你流的血，就是Cocom的『虧損』。那你呢？", "action": "轉向另一位躲在角落的商人" },
              { speaker: "馬尼來的商人", text: "我...我聽說...Xiu家族活得很好。Dzules...西班牙人...他們帶來了一個新的神。他們在馬尼建了石頭房子...他們需要...補給...", "emotion": "顫抖" },
              { speaker: "B'alam", text: "補給...", "type": "thought" },
              { speaker: "旁白", "text": "我讓他們都離開了。我關上門，點燃了一支蜂蠟燭。我看著燭光。末日？不。聖戰？不。這是一場『資產重組』。" },
              { speaker: "B'alam", text: "資產清算開始。選項一：投資Cocom。高風險，本土市場，但正在虧損。選項二：投資Xiu-西班牙聯盟。高回報，壟斷潛力，但要成為走狗。選項三：還有那些穿長袍的人（修士）。他們不要可可，他們要『知識』和『靈魂』。這是最奇怪的商品，但可能是最長期的生意。", "type": "thought" },
              { speaker: "B'alam", text: "Ek' Chuah（商人之神）教導我，別做虧本生意。現在，是時候下注了。", "type": "thought" }
            ]
          }
        ]
      }
    ],
    choices: [
      {
        id: 1,
        title: '抉擇一：利用世仇（投資勝利者 - Xiu/西班牙 聯盟）',
        actTitle: '第三幕：聯盟與背叛 (c. 1543-1562)',
        content: [
          { speaker: "B'alam", text: '這是一筆很簡單的帳。資產負債表：Cocom家族有「驕傲」和「傳統」。Xiu家族有「地盤」和「怨恨」。而Dzules（西班牙人）有鋼鐵、馬匹和火炮。這不是一場公平的戰爭，這是一場收購。Cocom家族註定要破產。', type: 'thought' },
          { speaker: "B'alam", text: 'Xiu家族雖然愚蠢地相信他們能控制西班牙人，但他們是即將獲勝的團隊。我的策略：我將前往馬尼，向Tutul Xiu（Xiu領主）和蒙特霍（Montejo）獻上我的忠誠——以及我最有價值的資產：我的路線圖。我會告訴他們Cocom家族所有的秘密補給路線和隱藏的水源地（Cenote）。', type: 'thought' },
          { speaker: "B'alam", text: '我的回報：在這場「新秩序」中，我，B\'alam，將成為新西班牙（Nueva España）猶加敦行省的首席供應商和皇家貿易壟斷者。至於洗禮？我崇拜過Chaac、Kukulkan和Ek\' Chuah。多一個「Dios」和他的木製十字架，又有什麼區別？只要他能帶來利潤。', type: 'thought' },
          { speaker: "B'alam", text: '尊貴的領主們！古老的預言已經應驗！Kukulkan顯然是和您的上帝站在同一邊的！我，B\'alam，只是一個卑微的商人，但我一生都在等待這個時刻。我願意獻上我所知道的每一條秘密小徑，引導您去『淨化』那些背棄了神靈和正統的Cocom叛徒。這不是戰爭，大人，這是天命！', action: '深深鞠躬，眼中充滿『敬畏』', emotion: '對蒙特霍和Xiu領袖' },
          { speaker: '旁白', text: '你的投資成功了。憑藉你提供的地圖和水源地（Cenote）情報，西班牙-Xiu聯軍繞開了陷阱，精準地打擊了Cocom聯盟的要害。索圖塔（Sotuta）陷落了。' },
          { speaker: '旁白', text: '正如你所願，你成為了新秩序的既得利益者。你獲得了在新首府梅里達（Mérida）的壟斷貿易權。你擁有了一座用馬雅神廟石塊建造的、宏偉的西班牙式宅邸。你受了洗，取名「迪亞哥·巴拉姆」（Diego B\'alam）。' },
          { speaker: "B'alam", text: '你非常富有，但也非常孤獨。西班牙人把你當作一個有用的「印第安人」，但從不真正信任你。而倖存的馬雅人——無論是Cocom還是Xiu——都在背後詛咒你，稱你為Ah-Nakom（叛徒）。你贏得了這場「生意」，卻失去了一個商人最寶貴的資產——市場。你最終在你的豪宅中孤獨地死去，手中緊握著的，不是可可豆，而是一把冰冷的西班牙金幣。', type: 'final' }
        ]
      },
      {
        id: 2,
        title: '抉擇二：叢林抵抗（投資本土市場 - Cocom 聯盟）',
        actTitle: '第三幕：叢林抵抗 (c. 1543)',
        content: [
          { speaker: "B'alam", text: '這些Dzules（西班牙人）根本不懂我們的「市場」。他們是掠奪者，不是生意夥伴。他們要的不是可可豆，他們要的是黃金和奴隸。他們會摧毀整個貿易體系，包括我。我已經看他們失敗兩次了。他們的鋼鐵會生鏽，他們的馬匹會被美洲豹吃掉，他們在叢林裡會渴死。', type: 'thought' },
          { speaker: "B'alam", text: '我的策略：這是一場高風險、高回報的投資。Xiu家族為了短期的復仇，正在出賣我們所有人的未來。我將前往索圖塔，找到Nachi Cocom（Cocom領主）。他需要一個後勤總管（Quartermaster）。我的商隊網絡將成為Cocom的軍事補給線。我對水源地（Cenote）的了解，將成為困死西班牙人的武器。', type: 'thought' },
          { speaker: "B'alam", text: '我的回報：如果我們能讓他們流足夠的血，讓他們意識到這場「收購」的成本太高，他們就會離開。而我，B\'alam，將成為驅逐入侵者的英雄，並獨佔整個猶加敦的貿易路線。這才是最划算的買賣。', type: 'thought' },
          { speaker: "B'alam", text: 'Nachi Cocom大人！Xiu家族的背叛，連Kukulkan都在哭泣！您才是馬雅真正的血液！那些外來者和他們的Xiu走狗又能怎樣？他們不認識叢林。而我，B\'alam，我就是叢林的血脈！我的神Ek\' Chuah掌管著道路。只要您一聲令下，所有的道路都將對他們關閉，所有的水井（Cenote）都將對他們隱藏。我將用我的可可豆和蜂蜜，資助您的聖戰...當然，戰後，索圖塔的貿易專營權...我想您會做出明智的安排。', emotion: '莊嚴且憤慨地', action: '微笑' },
          { speaker: '旁白', text: '你的高風險投資失敗了。你驚人的後勤網絡——利用秘密小徑運送食物和武器，並切斷西班牙人的水源——讓Nachi Cocom的抵抗軍多堅持了數年。你給蒙特霍（Montejo）和Xiu叛徒造成了慘重的損失。' },
          { speaker: '旁白', text: '但你低估了兩件事：西班牙人的增援，以及Xiu家族對Cocom家族刻骨的仇恨。在一次毀滅性的圍剿中，你的主要補給基地（一個隱藏的Cenote）被Xiu家族的斥候發現。你的商隊被摧毀。你被俘虜了。' },
          { speaker: '旁白', text: '在索圖塔（Sotuta）的廣場上，你昔日的「商業夥伴」——Xiu貴族——指認了你。西班牙指揮官宣布你為「叛軍頭目與間諜」。你被公開絞死。' },
          { speaker: "B'alam", text: '你作為一個現實主義者，一生都在避免風險和選邊站，但你最終的结局，卻是為了一場你本不相信的「聖戰」而死。你的資產被沒收，你的名字在歷史上沒有留下任何痕跡。', type: 'final' }
        ]
      },
      {
        id: 3,
        title: '抉擇三：宗教融合（投資新知識 - Landa 路線）',
        actTitle: '第三幕：宗教融合 (c. 1543-1562)',
        content: [
          { speaker: "B'alam", text: 'Xiu和Cocom都在打一場舊戰爭。他們都沒看清局勢。真正的力量，不在於蒙特霍（Montejo）的士兵，而在於那些穿著棕色長袍、手無寸鐵的傳教士（方濟會）。士兵會離開，但這些人是來重塑市場規則的。', type: 'thought' },
          { speaker: "B'alam", text: '舊神（Chaac, Ek\' Chuah）的「市場份額」已經崩潰了。這個新的「Dios」和他的「Cristo」正在壟斷一切。我的策略：這是一場長期投資。我不會押注在任何一個馬雅城邦上。我將押注在知識上。', type: 'thought' },
          { speaker: "B'alam", text: '我將主動接近那個叫迪亞哥·德·蘭達（Diego de Landa）的修士。他似乎對我們的「舊習俗」充滿了好奇。我將成為他的首席線人和文化翻譯。我將用我所知道的舊神話、預言和儀式，來交換我在這個新信仰體系中的地位。我的回報：我將成為教會的「中間人」，一個不可或缺的「文化掮客」。', type: 'thought' },
          { speaker: "B'alam", text: '聖父！我一生都在黑暗中行走，崇拜著Ek\' Chuah這樣的假神，追逐著可可豆的虛幻財富。但您的話語，就像一道光，照亮了我！我明白了！古老的預言...它們不是在說末日，它們是在預言您的到來！是在預言真理的降臨！我過去是個罪人，聖父。但我想贖罪。我了解那些舊神的所有秘密，所有儀式，所有隱藏的偶像（idols)。請讓您...將這些魔鬼的根源，從我的同胞心中徹底挖出來，帶領他們走向您唯一的光！', action: '跪下，眼中充滿『頓悟』的淚水', emotion: '顫抖、虔誠地' },
          { speaker: '旁白', text: '你的長期投資...迎來了最大的成功。在接下來的幾年裡，你成了迪亞哥·德·蘭達（Diego de Landa）最信任的「文化掮客」。你幫助他記錄馬雅曆法（同時也向他匯報哪些祭司仍在秘密活動）。你揭發了數十個隱藏的Chaac 雨神石雕（偶像），你的「虔誠」讓你成為了教會在馬尼（Maní）的重要人物。你太成功了。' },
          { speaker: '旁白', text: '1562年，蘭達修士聽聞有馬雅貴族（甚至是你曾經的盟友Xiu家族）在「回歸」舊神。他陷入了偏執的狂怒。他認為這一切都是一場巨大的陰謀。而你，B\'alam，這個最了解舊神、又最快接受新神的「完美皈依者」，顯然就是幕後的魔鬼。你被捕了。' },
          { speaker: 'Landa', text: '交代吧！B\'alam！你這個猶大！你是不是一直在用你的花言巧語，假裝皈依，實則在暗中嘲笑我們的上帝！', emotion: '狂怒' },
          { speaker: '旁白', text: '你一生油滑的辯詞，在宗教法庭的酷刑面前毫無用處。你被迫「懺悔」。你被帶到馬尼的廣場上，看著蘭達點燃了巨大的火焰。你的財產、你的商隊，以及所有倖存的馬雅古抄本（Codices）——那些你曾用來學習和交易的知識——全部被扔進了火裡。' },
          { speaker: "B'alam", text: '你被當眾鞭笞，然後扔進了監獄。你，一個終極的現實主義者，最終的結局，是為了一場你根本不相信的「信仰」而身敗名裂。', type: 'final' }
        ]
      }
    ]
  }
};

