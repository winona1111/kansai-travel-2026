export const TRIP_DATA = {
  meta: {
    title: "關西旅行",
    year: "2026",
    dates: "3月7日 - 3月15日",
  },
  info: {
    flights: [
      { type: "去程", code: "JX822", time: "12:50 抵達 KIX", date: "07 (六)", note: "TPE -> KIX" },
      { type: "回程", code: "JX823", time: "20:35 起飛", date: "15 (日)", note: "KIX -> TPE" }
    ],
    hotels: [
      { name: "ホテルヴィスキオ京都 (Hotel Vischio Kyoto)", city: "京都", dates: "07 - 11", address: "京都駅八条口", note: "大浴場 / 車站南側" },
      { name: "ホテルヴィスキオ大阪 (Hotel Vischio Osaka)", city: "大阪", dates: "11 - 15", address: "大阪駅北側", note: "走路5分鐘 / 梅田商圈" }
    ]
  },
  days: [
    {
      day: 1,
      date: "07",
      fullDate: "3月7日 (六)",
      location: "京都 (Kyoto)",
      heroImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop",
      heroTitle: "伏見稻荷與千本鳥居",
      weather: { current: "12°", desc: "晴時多雲", hourly: ["12°", "11°", "10°", "9°", "8°"] },
      activities: [
        { time: "12:50", title: "関西空港 (KIX)", desc: "航班 JX822。出關約需 60 分鐘。", type: "transport" },
        { 
          time: "13:30", title: "特急はるか (Haruka)", desc: "直達京都車站 (約 80 分)。", type: "transport",
          details: {
            address: "関西空港駅",
            story: "Hello Kitty 彩繪列車是關西之旅的起點。車內有專門放行李的區域。",
            transport: [
              { type: "walk", text: "入境大廳步行至 2F 鐵道站" },
              { type: "train", line: "JR 特急はるか", color: "#0072BC", from: "関西空港駅", to: "京都駅", dir: "往 京都", time: "80 min" },
              { type: "walk", text: "中央口 / 西口 出站" }
            ]
          }
        },
        { 
          time: "15:00", title: "ホテルヴィスキオ京都", desc: "Check-in 或寄放行李。", type: "hotel",
          details: {
            address: "京都府京都市南区東九条上殿田町44-1",
            story: "這間飯店以「大浴場」聞名，就在車站八條口對面，非常方便。",
            transport: [
              { type: "walk", text: "京都駅 八条口 (Hachijo Exit)", time: "2 min" },
              { type: "walk", text: "過馬路即達飯店", time: "1 min" }
            ],
            website: "https://www.hotelvischio-kyoto.com/"
          }
        },
        { 
          time: "16:00", title: "伏見稲荷大社", desc: "拍攝千本鳥居夕陽。", type: "sight", tag: "必拍",
          details: {
            address: "京都市伏見区深草藪之内町68",
            story: "稻荷大神是掌管五穀豐收與生意興隆的神。下午人潮較少，光線適合拍照。",
            transport: [
              { type: "walk", text: "從飯店步行至車站", time: "5 min" },
              { type: "train", line: "JR 奈良線", color: "#985628", from: "京都駅", to: "稲荷駅", dir: "往 奈良 (普通車)", time: "5 min" },
              { type: "walk", text: "出口直結 (對面即是鳥居)", time: "1 min" }
            ],
            route: [
              { name: "楼門 (Romon Gate)", desc: "入口處巨大的紅色建築。" },
              { name: "本殿 (Honden)", desc: "先在這裡搖鈴祈福。" },
              { name: "千本鳥居 (Senbon Torii)", desc: "整排朱紅色鳥居形成的隧道。" },
              { name: "奥社奉拝所", desc: "折返點，若體力好可繼續往上，但建議保留體力。" }
            ],
            website: "http://inari.jp/"
          }
        },
        { 
          time: "18:00", title: "晚餐：わらじや (鰻魚雜炊)", desc: "400年老店。", type: "food", tag: "需預約",
          details: {
            address: "京都市東山区七条通本町東入西之門町555",
            story: "傳說豐臣秀吉曾在此脫下草鞋 (Waraji) 休息，這也是店名的由來。",
            transport: [
              { type: "walk", text: "從伏見稻荷大社步行", time: "5 min" },
              { type: "train", line: "京阪本線", color: "#E5171F", from: "伏見稲荷駅", to: "七条駅", dir: "往 出町柳", time: "6 min" },
              { type: "walk", text: "6號出口 步行", time: "3 min" }
            ],
            menu: [
              { jp: "うぞふすい", cn: "鰻魚雜炊", romaji: "Uzofusui", desc: "招牌：烤鰻魚麻糬鍋" },
              { jp: "うな伯", cn: "鰻魚箱壽司", romaji: "Unahaku", desc: "關西特有押壽司" }
            ],
            website: "https://warajiya.kyoto.jp/"
          }
        },
        {
          time: "20:00", title: "京都駅周邊散策", desc: "便利商店與夜景。", type: "shopping",
          details: {
            address: "京都駅",
            story: "第一天不宜太累，可以逛逛車站內的便利商店買明天的水，或去空中徑路看夜景。",
            route: [
              { name: "7-11 / Lawson", desc: "購買宵夜、水。" },
              { name: "京都塔", desc: "就在車站對面，晚上會打燈。" }
            ]
          }
        }
      ]
    },
    {
      day: 2,
      date: "08",
      fullDate: "3月8日 (日)",
      location: "京都 (Kyoto)",
      heroImage: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=800&auto=format&fit=crop",
      heroTitle: "和服體驗與清水舞台",
      weather: { current: "14°", desc: "多雲", hourly: ["13°", "14°", "14°", "12°", "10°"] },
      activities: [
        { time: "09:00", title: "レンタル着物 (和服租借)", desc: "預約店家 (如:岡本/夢館)。", type: "sight", 
          details: { 
            address: "清水五条 / 祇園 周邊", 
            story: "換上和服漫步京都，是此行最美的回憶。",
            transport: [
              { type: "taxi", text: "從飯店搭計程車", time: "15 min", desc: "建議直接搭車最省力，約 ¥1500" },
              { type: "stop", text: "抵達預約店家" }
            ]
          } 
        },
        { 
          time: "10:00", title: "清水寺與二年坂", desc: "世界遺產與老街。", type: "sight", tag: "世界遺產",
          details: {
            address: "京都市東山区清水1丁目294",
            story: "參拜完清水舞台後，沿著商店街一路往下逛，不用走回頭路。",
            transport: [
               { type: "walk", text: "換完和服後步行", time: "10-15 min" },
               { type: "stop", text: "沿著清水坂 (松原通) 上坡" }
            ],
            route: [
              { name: "清水舞台", desc: "必拍經典。" },
              { name: "地主神社", desc: "戀愛占卜石。" },
              { name: "音羽の滝", desc: "排隊喝水祈福。" },
              { name: "三年坂 & 二年坂", desc: "石板路老街，很多伴手禮店 (七味粉、扇子)。" },
              { name: "星巴克 二寧坂茶屋店", desc: "百年町家改建，榻榻米座位。" }
            ],
            website: "https://www.kiyomizudera.or.jp/"
          }
        },
        { 
          time: "13:00", title: "午餐：京都勝牛", desc: "炸牛排專賣。", type: "food", tag: "排隊名店",
          details: {
            address: "京都市東山区五条橋東6-583-114 (清水五条坂店)",
            story: "只炸 60 秒的牛排，外酥內嫩。午餐時間可能會排隊，建議稍作避開或耐心等待。",
            transport: [
               { type: "walk", text: "從二年坂慢慢逛下來", time: "10 min" }
            ],
            menu: [
              { jp: "牛ロースカツ膳", cn: "炸牛里肌定食", romaji: "Gyu-rosu katsu zen", desc: "經典部位" },
              { jp: "京玉", cn: "溫泉蛋沾醬", romaji: "Kyotama", desc: "沾著吃超讚" }
            ],
            website: "https://gyukatsu-kyotokatsugyu.com/"
          }
        },
        {
          time: "14:30", title: "八坂神社與祇園購物", desc: "河原町商圈。", type: "shopping", tag: "逛街精華",
          details: {
            address: "四条河原町區域",
            story: "下午時間如果不走景點，這裡是京都最好逛的地方。如果不喜歡逛街，可去「高台寺」。",
            route: [
              { name: "八坂神社", desc: "朱紅樓門，就在大馬路底端。" },
              { name: "四条通", desc: "主要的商店街。" },
              { name: "Disney Store", desc: "四条河原町店。" },
              { name: "京都高島屋 S.C.", desc: "老牌百貨，B1伴手禮很強 (小倉山莊)。" },
              { name: "GOOD NATURE STATION", desc: "質感選物與有機超市。" }
            ]
          }
        },
        { time: "18:00", title: "晚餐：う桶や う (U-oke-ya U)", desc: "桶裝鰻魚飯。", type: "food", tag: "米其林",
          details: {
             address: "京都市東山区祇園町南側570-120",
             story: "逛完街剛好走去花見小路用餐。",
             transport: [
                { type: "walk", text: "從河原町步行過橋至祇園", time: "10 min" }
             ],
             menu: [
                { jp: "う桶 (3人前)", cn: "桶裝鰻魚飯 (3人份)", romaji: "U-oke", desc: "必點招牌" },
                { jp: "うまき", cn: "鰻魚玉子燒", romaji: "Umaki", desc: "蛋嫩魚香" }
             ]
          }
        }
      ]
    },
    {
      day: 3,
      date: "09",
      fullDate: "3月9日 (一)",
      location: "嵐山 (Arashiyama)",
      heroImage: "/images/Arashiyama.webp",
      heroTitle: "嵐山竹林與天龍寺",
      weather: { current: "10°", desc: "微雨", hourly: ["10°", "10°", "9°", "9°", "8°"] },
      activities: [
        { 
          time: "09:00", title: "前往嵐山", desc: "JR 嵯峨野線。", type: "transport",
          details: {
            address: "JR 嵯峨嵐山駅",
            story: "搭乘火車前往京都的後花園。",
            transport: [
               { type: "walk", text: "飯店步行至京都駅", time: "5 min" },
               { type: "train", line: "JR 嵯峨野線", color: "#800080", from: "京都駅", to: "嵯峨嵐山駅", dir: "往 亀岡/園部", time: "17 min" },
               { type: "walk", text: "南口出站 跟著人群走", time: "10 min" }
            ]
          }
        },
        { 
          time: "10:00", title: "嵐山散策", desc: "竹林 -> 天龍寺 -> 渡月橋。", type: "sight", tag: "自然絕景",
          details: {
            address: "嵐山エリア",
            story: "平安時代貴族的度假勝地。建議路線：車站 -> 竹林 -> 天龍寺北門進 -> 正門出 -> 大街。",
            route: [
              { name: "竹林の小径", desc: "聽風吹竹葉的聲音。" },
              { name: "野宮神社", desc: "日本唯一的黑色鳥居，求姻緣。" },
              { name: "天龍寺", desc: "曹源池庭園是世界遺產。" },
              { name: "渡月橋", desc: "嵐山的地標。" }
            ]
          } 
        },
        { 
          time: "12:30", title: "午餐：鯛匠 HANANA", desc: "鯛魚茶泡飯。", type: "food", tag: "超熱門",
          details: {
            address: "京都市右京区嵯峨天龍寺瀬戸川町26-1",
            story: "只賣一種定食的自信。",
            transport: [
               { type: "walk", text: "位於嵐山大街 (竹林入口旁)" }
            ],
            menu: [
              { jp: "鯛茶漬け御膳", cn: "鯛魚茶泡飯定食", romaji: "Tai-chazuke Gozen", desc: "三吃：生魚片、配飯、茶泡飯" }
            ],
            website: "http://hanana-kyoto.com/"
          }
        },
        { time: "14:00", title: "% Arabica 京都嵐山", desc: "渡月橋旁網紅咖啡。", type: "cafe", tag: "網紅店",
           details: {
              address: "渡月橋北側",
              story: "純白極簡設計，排隊名店。",
              transport: [{type: "walk", text: "沿著河岸走", time: "5 min"}],
              menu: [{jp: "京都ラテ", cn: "京都拿鐵", romaji: "Kyoto Latte", desc: "煉乳風味較濃郁"}]
           }
        },
        {
          time: "15:30", title: "嵐山大街 / 返回京都", desc: "伴手禮或京都車站購物。", type: "shopping",
          details: {
            address: "嵐山 or 京都駅",
            story: "嵐山店家約 17:00 關門。建議逛完嵐山大街後，返回京都車站逛伊勢丹 (Isetan) 或地下街 (Porta)。",
            route: [
              { name: "嵐山 Rilakkuma 茶房", desc: "拉拉熊主題店。" },
              { name: "嵐電 嵐山站", desc: "和服之森 (京友禪光林)，很美。" },
              { name: "京都駅 Isetan", desc: "B1 買蛋糕、伴手禮非常齊全。" },
              { name: "京都 Porta", desc: "地下街，有許多服飾和雜貨。" }
            ]
          }
        }
      ]
    },
    {
      day: 4,
      date: "10",
      fullDate: "3月10日 (二)",
      location: "京都 (Kyoto)",
      heroImage: "https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?q=80&w=800&auto=format&fit=crop",
      heroTitle: "金閣寺與北野天滿宮",
      weather: { current: "13°", desc: "晴朗", hourly: ["11°", "13°", "14°", "12°", "10°"] },
      activities: [
        { 
          time: "09:00", title: "金閣寺 (Kinkaku-ji)", desc: "鹿苑寺。", type: "sight", tag: "必拍",
          details: {
            address: "京都市北区金閣寺町1",
            story: "一休和尚裡的將軍府，貼滿金箔的舍利殿。",
            transport: [
               { type: "walk", text: "飯店至京都駅", time: "5 min" },
               { type: "bus", line: "市巴士 205號", color: "#00B0F0", from: "京都駅前 (B3)", to: "金閣寺道", dir: "西大路通 金閣寺行", time: "40 min" },
               { type: "walk", text: "步行至入口", time: "3 min" }
            ],
            route: [
              { name: "鏡湖池", desc: "拍金閣寺倒影最佳點。" },
              { name: "金閣 (舍利殿)", desc: "遠觀金碧輝煌。" },
              { name: "抹茶席", desc: "出口處可享用抹茶與和菓子。" }
            ],
            website: "https://www.shokoku-ji.jp/kinkakuji/"
          }
        },
        { time: "12:00", title: "午餐：西源院 (Seigenin)", desc: "庭園湯豆腐。", type: "food", tag: "素雅",
          details: {
             address: "龍安寺境內",
             story: "邊看枯山水邊吃豆腐，非常有京都味。",
             transport: [
                { type: "bus", line: "巴士 59號", color: "#F6AE00", from: "金閣寺前", to: "竜安寺前", time: "5 min" }
             ],
             menu: [
                { jp: "七草湯豆腐", cn: "七草湯豆腐", romaji: "Nanakusa Yudofu", desc: "清淡高雅" }
             ]
          }
        },
        {
          time: "14:00", title: "北野天滿宮 / 錦市場", desc: "學問之神或京都廚房。", type: "sight",
          details: {
            address: "北野天滿宮 or 錦市場",
            story: "二選一：若想求學業去天滿宮；若想逛街吃東西去錦市場（需注意17:00收攤）。",
            transport: [
              { type: "bus", text: "從龍安寺搭巴士前往" }
            ],
            route: [
              { name: "北野天滿宮", desc: "有很多牛的雕像，摸牛頭變聰明。" },
              { name: "錦市場", desc: "充滿漬物、玉子燒、炸物的商店街。" },
              { name: "大丸京都店", desc: "錦市場旁的大型百貨。" }
            ]
          }
        },
        {
          time: "17:00", title: "Pokemon Center Kyoto", desc: "寶可夢中心。", type: "shopping", tag: "粉絲必去",
          details: {
            address: "SUINA室町 2F",
            story: "如果是寶可夢粉絲，這裡有藝妓皮卡丘限定版。",
            transport: [
              { type: "walk", text: "四条烏丸附近" }
            ]
          }
        }
      ]
    },
    {
      day: 5,
      date: "11",
      fullDate: "3月11日 (三)",
      location: "大阪 (Osaka)",
      heroImage: "/images/orange-street-in-osaka.jpeg",
      heroTitle: "移動日與南大阪潮流",
      weather: { current: "15°", desc: "多雲", hourly: ["14°", "15°", "15°", "14°", "13°"] },
      activities: [
        { time: "10:00", title: "大阪へ移動 (Move to Osaka)", desc: "前往大阪。", type: "transport",
          details: {
             address: "大阪駅",
             story: "告別古都，前往繁華的大阪。",
             transport: [
                { type: "train", line: "JR 京都線 (新快速)", color: "#0072BC", from: "京都駅", to: "大阪駅", dir: "姫路/播州赤穂 行", time: "29 min" }
             ]
          } 
        },
        { time: "11:00", title: "ホテルヴィスキオ大阪", desc: "寄放行李。", type: "hotel",
           details: {
              address: "大阪市北区芝田2-4-10",
              story: "位於梅田，交通購物的中心。",
              transport: [
                 { type: "walk", text: "JR 大阪駅 中央北口", time: "5 min" },
                 { type: "walk", text: "沿著 Grand Front 大阪 旁走" }
              ],
              website: "https://www.hotelvischio-osaka.jp/"
           }
        },
        { time: "12:00", title: "午餐：本町製麺所", desc: "藥膳烏龍麵。", type: "food",
           details: {
              address: "大阪市中央区北久宝寺町2-6-13",
              transport: [
                 { type: "walk", text: "步行至 梅田駅 (御堂筋線)", time: "8 min" },
                 { type: "train", line: "御堂筋線", color: "#E5171F", from: "梅田駅", to: "本町駅", dir: "天王寺/なかもず 行", time: "4 min" },
                 { type: "walk", text: "11號出口 步行", time: "5 min" }
              ],
              menu: [
                 { jp: "薬膳天ぷらうどん", cn: "藥膳天婦羅烏龍麵", romaji: "Yakuzen Tempura Udon" }
              ]
           }
        },
        {
          time: "14:00", title: "心齋橋 & 道頓堀", desc: "大阪最精華購物區。", type: "shopping", tag: "一級戰區",
          details: {
            address: "心齋橋筋商店街",
            story: "吃飽後剛好散步逛街。從本町可以直接沿著商店街走到心齋橋，再走到道頓堀。",
            transport: [
               { type: "walk", text: "從本町沿著心齋橋筋商店街往南走", time: "15-20 min" }
            ],
            route: [
              { name: "心齋橋 PARCO", desc: "6F 動漫層 (吉卜力、卡普空)。" },
              { name: "大丸心齋橋店", desc: "本館建築很美，精品多。" },
              { name: "Uniqlo / GU", desc: "旗艦店，款式最齊。" },
              { name: "固力果跑跑人", desc: "戎橋上必拍地標。" }
            ]
          }
        },
        { time: "18:30", title: "晚餐：味乃家 (Ajinoya)", desc: "大阪燒。", type: "food", tag: "必比登",
           details: {
              address: "難波 (Namba)",
              story: "就在道頓堀/難波附近，逛完剛好去吃。",
              transport: [
                 { type: "walk", text: "從固力果看板步行", time: "5 min" }
              ],
              menu: [
                 { jp: "味乃家ミックス", cn: "味乃家綜合燒", romaji: "Ajinoya Mix", desc: "豬肉/花枝/蝦仁" },
                 { jp: "焼きそば", cn: "炒麵", romaji: "Yakisoba", desc: "醬汁濃郁" }
              ]
           }
        }
      ]
    },
    {
      day: 6,
      date: "12",
      fullDate: "3月12日 (四)",
      location: "USJ",
      heroImage: "/images/super-nintendo-world.jpg",
      heroTitle: "環球影城 全日遊",
      weather: { current: "16°", desc: "晴時多雲", hourly: ["15°", "16°", "16°", "14°", "12°"] },
      activities: [
        { 
          time: "08:00", title: "ユニバーサル・スタジオ・ジャパン", desc: "USJ 全日遊。", type: "sight", tag: "重點行程",
          details: {
            address: "大阪市此花区桜島2丁目1-33",
            story: "建議購買 Express Pass 以節省排隊時間。入園第一件事：抽任天堂整理券(如果沒買Pass)。",
            transport: [
               { type: "walk", text: "飯店至 JR 大阪駅", time: "5 min" },
               { type: "train", line: "JR 大阪環状線", color: "#F4260D", from: "大阪駅", to: "西九条駅", dir: "內回 (西九条方面)", time: "6 min" },
               { type: "train", line: "JR ゆめ咲線", color: "#202F55", from: "西九条駅", to: "ユニバーサルシティ駅", dir: "桜島 行", time: "5 min" },
               { type: "walk", text: "跟著人群走", time: "5 min" }
            ],
            route: [
              { name: "スーパー・ニンテンドー・ワールド", desc: "必玩：瑪利歐賽車、耀西冒險。" },
              { name: "ウィザーディング・ワールド", desc: "必玩：哈利波特禁忌之旅。" },
              { name: "NO LIMIT! パレード", desc: "下午的花車遊行。" }
            ],
            website: "https://www.usj.co.jp/"
          }
        },
        { 
          time: "20:00", title: "晚餐：Universal City Walk", desc: "園區外商店街。", type: "food",
          details: {
            address: "USJ 出口外",
            story: "玩累了直接在外面吃，選擇很多。",
            route: [
               { name: "SHAKE SHACK", desc: "美式漢堡，戶外座位氣氛好。" },
               { name: "風神雷神 RA-MEN", desc: "拉麵，快速解決晚餐。" },
               { name: "551 Horai", desc: "買肉包回飯店當宵夜。" }
            ]
          }
        }
      ]
    },
    {
      day: 7,
      date: "13",
      fullDate: "3月13日 (五)",
      location: "奈良 (Nara)",
      heroImage: "https://images.unsplash.com/photo-1558862107-d49ef2a04d72?q=80&w=800&auto=format&fit=crop",
      heroTitle: "古都奈良與小鹿",
      weather: { current: "14°", desc: "晴朗", hourly: ["12°", "14°", "14°", "13°", "11°"] },
      activities: [
        { 
          time: "10:00", title: "奈良公園 & 東大寺", desc: "餵鹿與大佛。", type: "sight",
          details: {
            address: "奈良市雑司町406-1",
            story: "注意：鹿看到鹿仙貝會很激動，請小心隨身物品。",
            transport: [
               { type: "train", line: "JR 大和路快速", color: "#985628", from: "大阪駅", to: "奈良駅", dir: "奈良/加茂 行", time: "50 min" },
               { type: "bus", line: "市内循環バス", color: "#F6AE00", from: "JR 奈良駅 (東口)", to: "東大寺大仏殿", time: "10 min" }
            ],
            route: [
              { name: "東大寺大仏殿", desc: "世界最大木造建築，鑽柱子洞保平安。" },
              { name: "奈良公園", desc: "到處都是鹿。" }
            ]
          }
        },
        { 
          time: "12:00", title: "午餐：志津香 (Shizuka)", desc: "釜飯 (Kamameshi)。", type: "food",
          details: {
             address: "奈良市登大路町59-11 (公園店)",
             story: "現點現做的傳統鍋飯，有鍋巴。若排隊太長，可改去「春日荷茶屋」吃萬葉粥。",
             transport: [{type: "walk", text: "就在國立博物館對面", time: "3 min"}],
             menu: [
                { jp: "奈良七種釜めし", cn: "奈良七種釜飯", romaji: "Nara Nanasu Kamameshi", desc: "招牌：蝦/蟹/雞/菜" }
             ]
          }
        },
        {
          time: "14:00", title: "春日大社 & 興福寺", desc: "原始森林與五重塔。", type: "sight",
          details: {
            address: "春日大社",
            story: "吃飽後散步到春日大社，沿途石燈籠非常多。",
            transport: [
              { type: "walk", text: "從志津香步行", time: "15 min" }
            ],
            route: [
              { name: "春日大社", desc: "充滿靈氣的原始森林與朱紅迴廊。" },
              { name: "興福寺", desc: "回程往車站方向會經過，看五重塔。" }
            ]
          }
        },
        { 
          time: "16:00", title: "中谷堂 & 東向商店街", desc: "艾草麻糬與伴手禮。", type: "shopping", tag: "必吃",
          details: {
             address: "近鐵奈良站旁",
             story: "看完搗麻糬表演後，逛逛旁邊的商店街再回大阪。",
             transport: [{type: "walk", text: "從興福寺步行", time: "5 min"}],
             menu: [{ jp: "よもぎ餅", cn: "艾草紅豆麻糬", romaji: "Yomogi Mochi", desc: "現吃最好吃" }],
             route: [
               { name: "中谷堂", desc: "高速搗麻糬。" },
               { name: "東向商店街", desc: "有大創、藥妝店、奈良漬物。" }
             ]
          }
        }
      ]
    },
    {
      day: 8,
      date: "14",
      fullDate: "3月14日 (六)",
      location: "大阪 (Osaka)",
      heroImage: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=800&auto=format&fit=crop",
      heroTitle: "勝運達摩與梅田購物",
      weather: { current: "13°", desc: "多雲", hourly: ["12°", "13°", "13°", "12°", "10°"] },
      activities: [
        { 
          time: "10:00", title: "勝尾寺 (Katsuoji)", desc: "滿山遍野的達摩。", type: "sight", tag: "特殊景點",
          details: {
             address: "大阪府箕面市勝尾寺",
             story: "求勝運非常靈驗，到處都是不倒翁。適合拍照。",
             transport: [
                { type: "train", line: "御堂筋線/北大阪急行", color: "#E5171F", from: "梅田駅", to: "箕面萱野駅", dir: "箕面萱野 行", time: "25 min" },
                { type: "bus", line: "巴士 29號", color: "#FFA500", from: "箕面萱野駅", to: "勝尾寺", time: "20 min" }
             ]
          }
        },
        { 
          time: "13:30", title: "午餐：おにぎりごりちゃん", desc: "飯糰專賣。", type: "food",
          details: {
             address: "中崎町",
             story: "回到市區簡單吃，保留時間逛街。",
             transport: [{type: "train", text: "原路返回至 中崎町駅 (近梅田)" }],
             menu: [{jp: "鮭すじこ", cn: "鮭魚筋子", romaji: "Sake Sujiko", desc: "人氣No.1"}]
          }
        },
        {
          time: "15:00", title: "梅田大迷宮購物", desc: "大阪最強百貨激戰區。", type: "shopping", tag: "最後衝刺",
          details: {
            address: "JR 大阪駅周邊",
            story: "回國前的最後採買。這裡什麼都有，但容易迷路，建議鎖定目標。",
            route: [
              { name: "LUCUA / LUCUA 1100", desc: "年輕時尚，衣服雜貨好買 (3F-7F)。" },
              { name: "Grand Front Osaka", desc: "空間寬敞，有很多設計品牌。" },
              { name: "Yodobashi Camera", desc: "電器、扭蛋機 (B1/L5)。" },
              { name: "阪急百貨", desc: "B1 甜點激戰區，買伴手禮必去。" }
            ]
          }
        },
        { time: "19:00", title: "晚餐：亀すし (Kamesushi)", desc: "老牌壽司。", type: "food",
           details: {
              address: "梅田曾根崎",
              story: "就在飯店附近，充滿在地人情味的壽司店。",
              menu: [{jp: "まぐろ", cn: "鮪魚", romaji: "Maguro"}, {jp: "うに", cn: "海膽", romaji: "Uni"}]
           }
        }
      ]
    },
    {
      day: 9,
      date: "15",
      fullDate: "3月15日 (日)",
      location: "大阪 -> 台北",
      heroImage: "/images/Tsutenkaku.webp",
      heroTitle: "新世界與返程",
      weather: { current: "14°", desc: "晴朗", hourly: ["13°", "14°", "14°", "13°", "12°"] },
      activities: [
        { time: "10:00", title: "新世界 & 通天閣", desc: "昭和復古大阪。", type: "sight",
           details: {
              address: "大阪市浪速区恵美須東",
              story: "感受濃濃的舊大阪風情。",
              transport: [
                 { type: "train", line: "御堂筋線", color: "#E5171F", from: "梅田駅", to: "動物園前駅", dir: "天王寺 行", time: "13 min" },
                 { type: "walk", text: "1號出口 步行", time: "5 min" }
              ]
           }
        },
        { time: "11:30", title: "MEGA 唐吉訶德", desc: "新世界店。", type: "shopping",
           details: {
             address: "新世界",
             story: "最後補貨機會，這間很大很好逛。",
             transport: [{ type: "walk", text: "通天閣附近" }]
           }
        },
        { time: "12:30", title: "串カツだるま (Daruma)", desc: "炸串始祖。", type: "food", tag: "經典",
           details: {
              address: "新世界総本店",
              story: "禁止沾兩次醬！",
              menu: [
                 { jp: "元祖串かつ", cn: "元祖炸牛串", romaji: "Ganso Kushikatsu" },
                 { jp: "どて焼き", cn: "味噌燉牛筋", romaji: "Doteyaki", desc: "必點配菜" }
              ]
           }
        },
        { time: "17:20", title: "利木津バス (Limousine Bus)", desc: "前往關西機場。", type: "transport",
           details: {
              address: "新阪急ホテル (Hotel New Hankyu)",
              story: "雖然有電車，但回程行李多，搭巴士直達最輕鬆。記得先買票。",
              transport: [
                 { type: "walk", text: "飯店門口搭車", time: "0 min" },
                 { type: "bus", line: "空港リムジンバス", color: "#0072BC", from: "新阪急ホテル", to: "関西空港 T1", time: "50 min" }
              ]
           }
        },
        { time: "20:35", title: "JX823 便", desc: "飛往台北 (TPE)。", type: "transport" }
      ]
    }
  ]
};