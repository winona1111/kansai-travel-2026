export const RESTAURANT_DATA = {
  "京都": [
    {
      category: "🍱 京料理與特色美食 (豆腐、鰻魚、懷石)",
      desc: "體驗京都最道地的傳統風味，適合安排為正餐。",
      items: [
        { name: "鯛匠 HANANA", address: "26-1 Sagatenryūji Setogawachō, Ukyo Ward, Kyoto", type: "鯛魚茶泡飯", price: "¥3,000 - ¥4,000", feature: "嵐山午餐首選。獨創吃法三部曲。", link: "https://maps.app.goo.gl/4QoCmxv2vXv9fQTk6", isStar: true },
        { name: "天ぷら圓堂 八坂本店", address: "566 Komatsucho, Higashiyama Ward, Kyoto", type: "頂級天婦羅懷石", price: "午¥6k+ / 晚¥15k+", feature: "京都天婦羅天花板，玉米天婦羅必吃。", link: "https://maps.app.goo.gl/z3v9sbggQLArWCMB6", isStar: true },
        { name: "Warajiya (わらじや)", address: "555 Nishinomoncho, Higashiyama Ward, Kyoto", type: "鰻魚雜炊", price: "¥4,000 - ¥7,000", feature: "400年老店，豐臣秀吉傳說之地。", link: "https://maps.app.goo.gl/QCDaWQKvdeeyzjYA9", isStar: true },
        { name: "京都市うなぎいっせい", address: "59 Matsuokinosocho, Nishikyo Ward, Kyoto", type: "關西風炭烤鰻魚", price: "¥3,000 - ¥5,000", feature: "米其林必比登推薦，腹開直接烤。", link: "https://maps.app.goo.gl/qvrAPbug2T4axQUB8" },
        { name: "う桶や う (U-oke-ya U)", address: "570-120 Gionmachi Minamigawa", type: "桶裝鰻魚飯", price: "¥4,000 - ¥6,000", feature: "杉木桶裝，視覺效果極佳，難訂位。", link: "https://maps.app.goo.gl/iKYNh2ebUPmnoR7g7" },
        { name: "西源院 湯豆腐", address: "Ryoanji Goryonoshitacho, Ukyo Ward", type: "精進料理", price: "¥1,500 - ¥3,500", feature: "位於龍安寺境內，邊看庭園邊吃。", link: "https://maps.app.goo.gl/RKDw3veEacR7VVmW7" },
        { name: "水源の森 天山", address: "18-2 Kuramakibunecho, Sakyo Ward", type: "川床料理/流水麵", price: "¥1,500+", feature: "貴船避暑勝地，河床上用餐。", link: "https://maps.app.goo.gl/5cuzskhyzYxdJZ6j7" },
        { name: "志野松門", address: "109 Oharashorinincho, Sakyo Ward", type: "大原鄉土料理", price: "¥2,000 - ¥3,000", feature: "大原三千院旁，自家製京漬物。", link: "https://maps.app.goo.gl/kf7dtsk36hG9SQTD6", isStar: true },
      ]
    },
    {
      category: "🥩 肉食與飽足系",
      desc: "走路一整天後補充體力的最佳選擇。",
      items: [
        { name: "京都勝牛 (清水寺/祇園店)", address: "6 Chome-583 Gojobashihigashi", type: "炸牛排", price: "¥1,500 - ¥2,500", feature: "年輕人超愛，外酥內嫩。", link: "https://maps.app.goo.gl/NuhgxctwBmrcMoRY9", isStar: true },
        { name: "京都勝牛 (伏見稻荷店)", address: "38-13 Fukakusa Ichinotsubocho", type: "炸牛排", price: "¥1,500 - ¥2,500", feature: "伏見稻荷逛完補充體力首選。", link: "https://maps.app.goo.gl/DifV6mHL1KEF8ewH9", isStar: true },
      ]
    },
    {
      category: "🍜 麵食 (蕎麥麵、拉麵)",
      desc: "經典的日式舒適食物，快速又美味。",
      items: [
        { name: "京都翔龍拉麵", address: "27-17 Fukakusa Ichinotsubocho", type: "豚骨醬油拉麵", price: "¥900 - ¥1,500", feature: "適合台灣口味，在地評價不錯。", link: "https://maps.app.goo.gl/kuGcGD4gSgc5ed5U7" },
        { name: "芹生茶屋", address: "28 Oharashorinincho, Sakyo Ward", type: "手打蕎麥麵", price: "¥1,000 - ¥1,800", feature: "大原古樸氣氛，紅傘下吃麵。", link: "https://maps.app.goo.gl/GvaurnurefcN9kzz5" },
        { name: "花巻屋", address: "17-2 Kinugasa Goshonouchicho", type: "蕎麥麵/丼飯", price: "¥1,000 - ¥1,500", feature: "金閣寺旁在地老店，份量實在。", link: "https://maps.app.goo.gl/QoM467hqWvfapKKc6" },
        { name: "麺処 美松", address: "1038-27 Kamiyagawacho", type: "烏龍麵", price: "¥800 - ¥1,200", feature: "在地食堂，咖哩烏龍麵有名。", link: "https://maps.app.goo.gl/a73j5Ji7j5C8eAti6" },
      ]
    },
    {
      category: "☕️ 咖啡廳、甜點與輕食",
      desc: "適合拍照打卡與休息的「網紅」店鋪。",
      items: [
        { name: "% Arabica (嵐山店)", address: "3-47 Sagatenryuji", type: "義式咖啡", price: "¥500 - ¥800", feature: "全球網紅店，渡月橋旁純白設計。", link: "https://maps.app.goo.gl/thgYCcoG91ci4wZEA", isStar: true },
        { name: "Café Andante", address: "2-6 Matsumurojikecho", type: "家庭式咖啡廳", price: "¥1,000 - ¥1,500", feature: "松尾大社旁，溫馨安靜。", link: "https://maps.app.goo.gl/uj7fDc5cNZH6tMcq9", isStar: true },
        { name: "粟餅所 澤屋", address: "838-7 Kamiyagawacho", type: "日式傳統粟餅", price: "¥600 - ¥1,000", feature: "現點現做，口感極致軟糯。", link: "https://maps.app.goo.gl/L26PWWybgqnDgMUv7" },
        { name: "市川屋珈琲", address: "396-2 Kaneicho", type: "京町家咖啡廳", price: "¥1,000 - ¥2,000", feature: "清水燒杯子，水果三明治必點。", link: "https://maps.app.goo.gl/j76XX9AR4MaXK9iEA" },
        { name: "Bamboo Coffee", address: "51 Matsuomangokucho", type: "現代風咖啡廳", price: "¥1,000 - ¥1,500", feature: "竹炭烘焙咖啡，竹子元素裝潢。", link: "https://maps.app.goo.gl/MPnvdo7bFxUXjaoV8" },
        { name: "兵衛cafe", address: "101 Kuramakibunecho", type: "貴船川床咖啡", price: "¥800 - ¥1,200", feature: "便宜體驗川床的好選擇。", link: "https://maps.app.goo.gl/pcvGmu378WdNvXkJ8" },
      ]
    },
    {
      category: "🍵 茶屋與休閒食堂",
      items: [
        { name: "万常", address: "祇園區域", type: "食堂", price: "¥1,000–2,000", feature: "祇園方便用餐處。", link: "https://maps.app.goo.gl/d2jwZpojuV8BEB7w9" },
        { name: "おぐら茶屋", address: "嵐山龜山公園內", type: "關東煮", price: "¥500 - ¥1,000", feature: "展望台旁，適合爬山後休息。", link: "https://maps.app.goo.gl/ejyRxSq4mhngCTz26" },
        { name: "五木茶屋 嵐山本店", address: "嵐山渡月橋旁", type: "五穀豐收丼飯", price: "¥3,500+", feature: "網紅爆款，五種迷你丼。", link: "https://maps.app.goo.gl/f7GUhHS4Sh5cQMXY6" },
      ]
    }
  ],
  "大阪": [
    {
      category: "☕️ 咖啡與輕食",
      items: [
        { name: "Mel Coffee Roasters", address: "西區新町", type: "手沖咖啡", price: "¥600+", feature: "世界50佳，拿鐵控必去。", link: "https://maps.app.goo.gl/nec6LC2RgRwpwuzf8", isStar: true },
        { name: "LiLo Coffee Roasters", address: "美國村", type: "自家烘焙", price: "¥600+", feature: "亞洲50佳，包裝很潮。", link: "https://maps.app.goo.gl/LPMwpVt9bqBccay18", isStar: true },
        { name: "Onigiri Gorichan", address: "中崎町", type: "飯糰", price: "¥300+", feature: "最後可做茶泡飯，非常療癒。", link: "https://maps.app.goo.gl/J8SgAhH3UeAegUZv9", isStar: true },
        { name: "9 Borden Coffee", address: "天保山", type: "海邊咖啡", price: "¥500+", feature: "海遊館旁，看海好去處。", link: "https://maps.app.goo.gl/TJRFgXqtS31T82gb7", isStar: true },
      ]
    },
    {
      category: "🍜 麵食",
      items: [
        { name: "守破離 谷町店", address: "谷町", type: "十割蕎麥麵", price: "¥1,000+", feature: "米其林推薦，環境高雅。", link: "https://maps.app.goo.gl/coz8dtLXYgq9VzNT6", isStar: true },
        { name: "本町製麺所 本店", address: "本町", type: "烏龍麵", price: "¥800+", feature: "藥膳湯頭，排隊名店。", link: "https://maps.app.goo.gl/Jznq7Dec3z4z1c9YA", isStar: true },
      ]
    },
    {
      category: "🥩 肉食與飽足系",
      items: [
        { name: "Gyukatsu Motomura", address: "LUCUA 10F", type: "炸牛排", price: "¥1,500+", feature: "飯店旁！位置無敵方便。", link: "https://maps.app.goo.gl/XiZ4djY59nopS35r9", isStar: true },
        { name: "BOTANI:CURRY", address: "梅田", type: "香料咖哩", price: "¥1,000+", feature: "大阪必吃，需整理券。", link: "https://maps.app.goo.gl/fyKsE7FB9uL2iYoR9", isStar: true },
        { name: "亀すし 総本店", address: "曾根崎", type: "壽司", price: "¥3,000+", feature: "豪爽大阪風，食材大塊。", link: "https://maps.app.goo.gl/cB9Fs9n3iPryzPzH9", isStar: true },
        { name: "牛の福", address: "海遊館旁", type: "牛排丼", price: "¥1,500+", feature: "肉量滿滿。", link: "https://maps.app.goo.gl/32fAy3BLSKZQ9Ton7", isStar: true },
        { name: "味乃家 本店", address: "難波", type: "大阪燒", price: "¥1,500+", feature: "米其林必比登，口感鬆軟。", link: "https://maps.app.goo.gl/bk1792soRtq52J9x5" },
        { name: "美津の", address: "道頓堀", type: "山藥燒", price: "¥1,500+", feature: "100%山藥泥，口感綿密。", link: "https://maps.app.goo.gl/pc4gniGcBQ99dv4L8" },
      ]
    },
    {
      category: "🍵 抹茶與甜點",
      items: [
        { name: "水滴々", address: "美國村", type: "文藝茶咖", price: "¥1,200+", feature: "抹茶啤酒、抹茶刨冰。", link: "https://maps.app.goo.gl/vktmqw8Qk68EDEff7", isStar: true },
        { name: "宇治園 心斎橋本店", address: "心齋橋", type: "百年老舖", price: "¥800+", feature: "抹茶蒙布朗。", link: "https://maps.app.goo.gl/dUPBZQfUJBXYmpCXA", isStar: true },
        { name: "浅草茶屋たばねのし", address: "心齋橋", type: "可麗餅", price: "¥900+", feature: "視覺系甜點，抹茶提拉米蘇內餡。", link: "https://maps.app.goo.gl/tUGRoiKDSjPYkL1E7", isStar: true },
        { name: "茶寮都路里", address: "大丸心齋橋", type: "抹茶聖代", price: "¥1,200+", feature: "京都抹茶王者，奢華享受。", link: "https://maps.app.goo.gl/yE8Vn3K7mhBj8MWaA", isStar: true },
        { name: "OBRA", address: "難波", type: "可露麗/拿鐵", price: "¥600+", feature: "流心抹茶可露麗。", link: "https://maps.app.goo.gl/2KA9FhFCawyFX9Mw9", isStar: true },
        { name: "CHANIWA", address: "南堀江", type: "寺廟茶屋", price: "¥1,000+", feature: "超級隱密，寺廟內喝茶。", link: "https://maps.app.goo.gl/B5ZJSdbG9jMBEFva8", isStar: true },
      ]
    }
  ],
  "奈良": [
    {
      category: "🍵 輕食、甜點與咖啡",
      items: [
        { name: "Rokumei Coffee", address: "近鐵奈良旁", type: "精品咖啡", price: "¥600+", feature: "烘焙冠軍，可頌超好吃。", link: "https://maps.app.goo.gl/T5YpeyL5aEL4eKDa7", isStar: true },
        { name: "水谷茶屋", address: "春日大社旁", type: "茶屋", price: "¥800+", feature: "茅草屋頂，像宮崎駿場景。", link: "https://maps.app.goo.gl/buePCnGWz3jWghif7", isStar: true },
        { name: "中谷堂", address: "商店街", type: "艾草麻糬", price: "¥150", feature: "神速搗麻糬表演，必吃。", link: "https://maps.app.goo.gl/UQdsUjxF4TJBDzzYA", isStar: true },
      ]
    },
    {
      category: "🍱 正餐",
      items: [
        { name: "志津香 公園店", address: "奈良公園", type: "釜飯", price: "¥1,500+", feature: "排隊大魔王，有鍋巴。", link: "https://maps.app.goo.gl/oqJvmp9FQm48w2Ks5", isStar: true },
        { name: "菊水樓", address: "春日大社一之鳥居", type: "鰻魚/懷石", price: "¥4,000+", feature: "百年文化財，環境優雅。", link: "https://maps.app.goo.gl/HD6WgaADk5hSqXMF7", isStar: true },
        { name: "頑固豬排", address: "東向商店街", type: "炸豬排", price: "¥1,500+", feature: "釜飯排太久的備案。", link: "https://maps.app.goo.gl/cPJTWfYgRYYN1GR3A", isStar: true },
      ]
    }
  ]
};