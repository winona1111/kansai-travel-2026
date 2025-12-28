export const TRIP_DATA = {
  meta: {
    title: "關西家族旅行",
    year: "2026",
    dates: "3月7日 - 3月15日",
  },
  info: {
    flights: [
      { type: "去程", code: "JX822", time: "12:50 抵達 KIX", date: "07 (六)", note: "TPE -> KIX" },
      { type: "回程", code: "JX823", time: "20:35 起飛", date: "15 (日)", note: "KIX -> TPE" }
    ],
    hotels: [
      { name: "ホテルヴィスキオ京都 (Hotel Vischio Kyoto)", city: "京都", dates: "07 - 11", address: "京都駅八条口", note: "大浴場" },
      { name: "ホテルヴィスキオ大阪 (Hotel Vischio Osaka)", city: "大阪", dates: "11 - 15", address: "大阪駅北側", note: "走路5分鐘" }
    ]
  },
  days: [
    {
      day: 1,
      date: "07",
      fullDate: "3月7日 (六)",
      location: "京都 (Kyoto)",
      heroImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop",
      heroTitle: "初抵京都：稻荷 vs 本願寺",
      weather: { current: "12°", desc: "晴時多雲", hourly: ["12°", "11°", "10°", "9°", "8°"] },
      activities: [
        { time: "12:50", title: "関西空港 (KIX)", desc: "航班 JX822。出關約需 60 分鐘。", type: "transport" },
        { 
          time: "13:30", title: "特急はるか (Haruka)", desc: "直達京都車站 (約 80 分)。", type: "transport",
          details: {
            address: "関西空港駅",
            story: "Hello Kitty 彩繪列車是關西之旅的起點。",
            transport: [
              { type: "train", line: "JR 特急はるか", color: "#0072BC", from: "関西空港駅", to: "京都駅", dir: "往 京都", time: "80 min" }
            ]
          }
        },
        { 
          time: "15:00", title: "ホテルヴィスキオ京都", desc: "Check-in 或寄放行李。", type: "hotel",
          details: {
            address: "京都府京都市南区東九条上殿田町44-1",
            story: "這間飯店以「大浴場」聞名，就在車站八條口對面。",
            transport: [{ type: "walk", text: "京都駅 八条口 過馬路即達", time: "3 min" }],
            website: "https://www.hotelvischio-kyoto.com/"
          }
        },
        // ... (Day 1 下午 Branch 保持不變) ...
        {
          type: "branch",
          title: "下午行程選擇",
          desc: "請選擇想走的路線：",
          options: [
            {
              id: "A",
              label: "方案 A：伏見稻荷 (經典)",
              tag: "必拍千本鳥居",
              activities: [
                { 
                  time: "16:00", title: "伏見稲荷大社", desc: "拍攝千本鳥居夕陽。", type: "sight", tag: "必拍",
                  details: {
                    address: "京都市伏見区深草藪之内町68",
                    story: "年輕人最愛的打卡點，雖然人多但非常壯觀。",
                    transport: [
                      { type: "train", line: "JR 奈良線", color: "#985628", from: "京都駅", to: "稲荷駅", dir: "往 奈良", time: "5 min" },
                      { type: "walk", text: "出口直結 (對面即是鳥居)" }
                    ],
                    route: [
                      { name: "千本鳥居", desc: "整排朱紅色鳥居形成的隧道。" },
                      { name: "奧社奉拜所", desc: "試試「重輕石」許願。" }
                    ],
                    website: "http://inari.jp/"
                  }
                },
                { 
                  time: "18:00", title: "晚餐：わらじや (鰻魚雜炊)", desc: "400年老店。", type: "food", tag: "需預約",
                  details: {
                    address: "京都市東山区七条通本町東入西之門町555",
                    transport: [
                      { type: "walk", text: "從伏見稻荷搭京阪電車", time: "10 min" }
                    ],
                    menu: [
                      { jp: "うぞふすい", cn: "鰻魚雜炊", romaji: "Uzofusui", desc: "招牌：烤鰻魚麻糬鍋" }
                    ],
                    website: "https://warajiya.kyoto.jp/"
                  }
                }
              ]
            },
            {
              id: "B",
              label: "方案 B：東西本願寺 (歷史)",
              tag: "爸爸推薦",
              activities: [
                {
                  time: "16:00", title: "東本願寺 & 西本願寺", desc: "世界遺產巨大的木造建築。", type: "sight",
                  details: {
                    address: "京都市下京区",
                    story: "離京都車站步行僅 10-15 分鐘。這裡遊客較少，建築非常宏偉，適合喜歡安靜看古蹟的人。",
                    transport: [{ type: "walk", text: "從飯店步行前往", time: "10 min" }],
                    route: [
                       { name: "西本願寺", desc: "看唐門 (國寶) 與大銀杏。" },
                       { name: "東本願寺", desc: "世界最大級的木造建築御影堂。" }
                    ],
                    website: "https://www.hongwanji.kyoto/"
                  }
                },
                {
                  time: "18:00", title: "晚餐：京都伊勢丹 11F", desc: "敘敘苑燒肉 或 和幸豬排。", type: "food",
                  details: {
                    address: "京都駅大樓",
                    story: "就在車站樓上，吃完可以直接回飯店休息，不用跑遠。",
                    menu: [
                        { jp: "叙々苑游玄亭", cn: "敘敘苑燒肉", romaji: "Jojoen", desc: "景觀燒肉" },
                        { jp: "とんかつ和幸", cn: "和幸豬排", romaji: "Tonkatsu Wako", desc: "炸豬排定食" }
                    ]
                  }
                }
              ]
            }
          ]
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
        { time: "09:00", title: "レンタル着物 (和服租借)", desc: "預約店家 (如:岡本/夢館)。", type: "sight", details: { address: "清水五条 / 祇園 周邊" } },
        { 
          time: "10:00", title: "清水寺 (Kiyomizu-dera)", desc: "必訪清水舞台。", type: "sight", tag: "世界遺產",
          details: {
            address: "京都市東山区清水1丁目294",
            story: "京都最著名的古剎，全木造的清水舞台未用一根釘子。",
            transport: [
               { type: "taxi", text: "建議搭計程車直達", time: "15 min" }
            ],
            route: [
              { name: "仁王門", desc: "氣勢宏偉的朱紅色大門。" },
              { name: "清水舞台", desc: "眺望京都市景絕佳點。" },
              { name: "音羽の滝", desc: "學業/戀愛/長壽 三選一喝。" }
            ],
            website: "https://www.kiyomizudera.or.jp/"
          }
        },
        { 
          time: "12:30", title: "午餐：京都勝牛", desc: "炸牛排專賣。", type: "food", tag: "排隊名店",
          details: {
            address: "清水五条坂店",
            menu: [{ jp: "牛ロースカツ膳", cn: "炸牛里肌定食", romaji: "Gyu-rosu katsu zen" }]
          }
        },
        // ✨ NEW: 填補下午空檔
        {
          time: "14:30", title: "高台寺 & 祇園散策", desc: "石板小路與茶屋。", type: "sight",
          details: {
            address: "京都市東山区高台寺下河原町526",
            story: "吃飽後沿著二三年坂往下走，這一段是京都最美的散步路線。高台寺有漂亮的竹林和庭園。",
            transport: [{ type: "walk", text: "沿二三年坂往下走", time: "15 min" }],
            route: [
               { name: "二年坂/三年坂", desc: "小心別跌倒(傳說)。" },
               { name: "高台寺", desc: "豐臣秀吉夫人寧寧的寺院。" },
               { name: "八坂神社", desc: "祇園的守護神社。" },
               { name: "花見小路", desc: "運氣好會看到藝妓。" }
            ]
          }
        },
        { time: "18:00", title: "晚餐：う桶や う (U-oke-ya U)", desc: "桶裝鰻魚飯 (米其林)。", type: "food", tag: "需預約",
          details: {
             address: "京都市東山区祇園町南側570-120",
             story: "在花見小路巷弄內，非常隱密。",
             transport: [{ type: "walk", text: "花見小路 步行", time: "5 min" }],
             menu: [{ jp: "う桶 (3人前)", cn: "桶裝鰻魚飯 (3人份)", romaji: "U-oke" }]
          }
        }
      ]
    },
    // ... Day 3, 4, 5, 6 保持不變 (請複製原本內容) ...
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
            transport: [
               { type: "train", line: "JR 嵯峨野線", color: "#800080", from: "京都駅", to: "嵯峨嵐山駅", time: "17 min" }
            ]
          }
        },
        { 
          time: "10:00", title: "嵐山散策", desc: "竹林 -> 天龍寺 -> 渡月橋。", type: "sight", tag: "自然絕景",
          details: {
            address: "嵐山エリア",
            route: [
              { name: "竹林の小径", desc: "聽風吹竹葉的聲音。" },
              { name: "天龍寺", desc: "曹源池庭園是世界遺產。" },
              { name: "渡月橋", desc: "嵐山的地標。" }
            ]
          } 
        },
        { 
          time: "12:30", title: "午餐：鯛匠 HANANA", desc: "鯛魚茶泡飯。", type: "food", tag: "超熱門",
          details: {
            address: "京都市右京区嵯峨天龍寺瀬戸川町26-1",
            menu: [
              { jp: "鯛茶漬け御膳", cn: "鯛魚茶泡飯定食", romaji: "Tai-chazuke Gozen" }
            ]
          }
        },
        { time: "16:00", title: "返回京都駅", desc: "若有體力可逛 AEON MALL。", type: "transport", details: { address: "京都駅", transport: [{type: "train", text: "JR 嵯峨野線 返回"}] } }
      ]
    },
    {
      day: 4,
      date: "10",
      fullDate: "3月10日 (二)",
      location: "京都 (Kyoto)",
      heroImage: "https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?q=80&w=800&auto=format&fit=crop",
      heroTitle: "金閣寺與歷史/逛街分歧",
      weather: { current: "13°", desc: "晴朗", hourly: ["11°", "13°", "14°", "12°", "10°"] },
      activities: [
        { 
          time: "09:00", title: "金閣寺 (Kinkaku-ji)", desc: "鹿苑寺。", type: "sight", tag: "必拍",
          details: {
            address: "京都市北区金閣寺町1",
            transport: [
               { type: "bus", line: "市巴士 205號", color: "#00B0F0", from: "京都駅前", to: "金閣寺道", time: "40 min" }
            ],
            route: [
              { name: "鏡湖池", desc: "拍金閣寺倒影最佳點。" },
              { name: "金閣", desc: "金碧輝煌的舍利殿。" }
            ],
            website: "https://www.shokoku-ji.jp/kinkakuji/"
          }
        },
        { time: "12:00", title: "午餐：西源院", desc: "庭園湯豆腐。", type: "food", tag: "素雅", details: { address: "龍安寺境內" } },
        
        {
          type: "branch",
          title: "下午行程選擇",
          desc: "吃完午餐後兵分兩路：",
          options: [
            {
              id: "A",
              label: "方案 A：錦市場 (逛街)",
              tag: "購物美食",
              activities: [
                {
                  time: "14:00", title: "錦市場 (Nishiki Market)", type: "shopping", desc: "京都的廚房。",
                  details: {
                    address: "京都市中京区",
                    story: "適合喜歡吃小東西、買伴手禮的人。逛完可以去隔壁大丸百貨吹冷氣。",
                    transport: [
                      { type: "taxi", text: "從龍安寺搭計程車直達", time: "25 min", desc: "約 ¥2500，推薦多人共乘" },
                      { type: "walk", text: "錦天滿宮 / 錦市場入口" }
                    ],
                    route: [
                       { name: "史努比茶屋", desc: "錦市場內。" },
                       { name: "大丸百貨", desc: "地下街伴手禮超多。" }
                    ]
                  }
                }
              ]
            },
            {
              id: "B",
              label: "方案 B：天滿宮+二條城",
              tag: "歷史巡禮",
              activities: [
                {
                  time: "13:30", title: "北野天滿宮", type: "sight", desc: "學問之神。",
                  details: {
                    address: "京都市上京区",
                    story: "離龍安寺很近，順路去拜學問之神。",
                    transport: [{ type: "bus", line: "巴士 50/55號", time: "10 min" }]
                  }
                },
                {
                  time: "15:00", title: "二條城 (Nijo Castle)", type: "sight", tag: "德川家康",
                  details: {
                    address: "京都市中京区二条通",
                    story: "大政奉還的歷史舞台。務必注意：16:00 停止售票，17:00 閉城，時間要抓準。",
                    tips: "⚠️ 警告：時間非常緊迫！強烈建議從天滿宮直接搭計程車過來 (約10分)，不然會來不及進場。",
                    transport: [{ type: "taxi", text: "從天滿宮搭車", time: "10 min", desc: "¥1200" }],
                    route: [
                       { name: "二之丸御殿", desc: "國寶，走在上面會有黃鶯叫聲(防刺客)。" },
                       { name: "二之丸庭園", desc: "特別名勝。" }
                    ],
                    website: "https://nijo-jocastle.city.kyoto.lg.jp/"
                  }
                }
              ]
            }
          ]
        },
        { time: "18:00", title: "晚餐會合：四条河原町", desc: "弘燒肉 / 溫野菜。", type: "food", details: { address: "四条河原町" } }
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
        { time: "10:00", title: "移動至大阪", desc: "JR 京都線新快速 -> 大阪站。", type: "transport", details: { address: "大阪駅", transport: [{type: "train", line: "JR 京都線", from: "京都駅", to: "大阪駅"}] } },
        { time: "12:00", title: "午餐：本町製麵所", desc: "藥膳湯頭，排隊名店。", type: "food", details: { address: "本町駅", menu: [{jp: "薬膳うどん", cn: "藥膳烏龍", romaji: "Yakuzen Udon"}] } },
        { time: "13:30", title: "橘子街 (Orange Street)", desc: "潮牌、古著。", type: "shopping", details: { address: "堀江", transport: [{type: "walk", text: "從本町走過去"}] } },
        { time: "18:30", title: "晚餐：味乃家", desc: "大阪燒。", type: "food", tag: "必比登", details: { address: "難波", menu: [{jp: "ミックス", cn: "綜合燒", romaji: "Mix"}] } }
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
        { time: "08:00", title: "Universal Studios Japan", desc: "全天行程。", type: "sight", tag: "重點行程", details: { address: "大阪市此花区", transport: [{type: "train", text: "JR 夢咲線 櫻島行"}] } },
        { time: "20:00", title: "晚餐：梅田周邊", desc: "隨意吃居酒屋或拉麵。", type: "food", details: { address: "梅田", story: "玩了一整天很累，建議在飯店附近隨便吃。" } }
      ]
    },
    // ✨ NEW: Day 7, 8, 9 補齊細節
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
            story: "世界最大的木造建築與神的使者(鹿)。",
            transport: [
               { type: "train", line: "JR 大和路快速", color: "#985628", from: "大阪駅", to: "奈良駅", dir: "奈良/加茂 行", time: "50 min" },
               { type: "bus", line: "市内循環バス", color: "#F6AE00", from: "JR 奈良駅 (東口)", to: "東大寺大仏殿", time: "10 min" }
            ],
            route: [
              { name: "奈良公園", desc: "小心餵鹿。" },
              { name: "南大門", desc: "金剛力士像。" },
              { name: "東大寺大仏殿", desc: "鑽柱子洞保平安。" },
              { name: "二月堂", desc: "俯瞰奈良市景。" }
            ]
          }
        },
        { 
          time: "12:00", title: "午餐：志津香 (釜飯)", desc: "排隊名店。", type: "food",
          details: {
             address: "奈良市登大路町59-11 (公園店)",
             story: "現點現做的傳統鍋飯，有鍋巴。",
             transport: [{type: "walk", text: "就在國立博物館對面", time: "3 min"}],
             menu: [
                { jp: "奈良七種釜めし", cn: "奈良七種釜飯", romaji: "Nara Nanasu Kamameshi", desc: "招牌：蝦/蟹/雞/菜" }
             ]
          }
        },
        {
          time: "14:00", title: "春日大社", desc: "千燈籠的神社。", type: "sight",
          details: {
             address: "奈良市春日野町160",
             story: "森林裡的紅色神社，氣氛非常神聖。",
             transport: [{type: "walk", text: "從東大寺沿著森林步道走", time: "15 min"}]
          }
        },
        { 
          time: "16:00", title: "中谷堂", desc: "艾草麻糬。", type: "food", tag: "必吃",
          details: {
             address: "奈良市橋本町29",
             story: "神速搗麻糬表演。",
             transport: [{type: "walk", text: "步行至近鐵奈良車站旁商店街", time: "15 min"}],
             menu: [{ jp: "よもぎ餅", cn: "艾草紅豆麻糬", romaji: "Yomogi Mochi", desc: "現吃最好吃" }]
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
             story: "求勝運非常靈驗，到處都是不倒翁。",
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
             transport: [{type: "train", text: "原路返回至 中崎町駅/梅田" }],
             menu: [{jp: "鮭すじこ", cn: "鮭魚筋子", romaji: "Sake Sujiko", desc: "人氣No.1"}]
          }
        },
        { time: "15:00", title: "中崎町 & 梅田百貨", desc: "LUCUA, 大丸。", type: "shopping", details: { address: "梅田", story: "最後購物衝刺，大丸有任天堂中心。" } },
        { time: "19:00", title: "晚餐：亀すし (Kamesushi)", desc: "老牌壽司。", type: "food",
           details: {
              address: "梅田曾根崎",
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
              transport: [
                 { type: "train", line: "御堂筋線", color: "#E5171F", from: "梅田駅", to: "動物園前駅", dir: "天王寺 行", time: "13 min" }
              ]
           }
        },
        { time: "12:30", title: "早午餐：達摩炸串", desc: "禁止二次沾醬。", type: "food", tag: "經典",
           details: {
              address: "新世界総本店",
              menu: [{ jp: "元祖串かつ", cn: "元祖炸牛串", romaji: "Ganso Kushikatsu" }]
           }
        },
        { time: "17:20", title: "利木津巴士", desc: "前往關西機場。", type: "transport",
           details: {
              address: "新阪急ホテル (Hotel New Hankyu)",
              transport: [
                 { type: "walk", text: "飯店門口搭車", time: "0 min" },
                 { type: "bus", line: "空港リムジンバス", color: "#0072BC", from: "新阪急ホテル", to: "関西空港 T1", time: "50 min" }
              ]
           }
        },
        { time: "20:35", title: "航班 JX823", desc: "飛往台北 (TPE)。", type: "transport", details: { address: "関西空港 T1" } }
      ]
    }
  ]
};