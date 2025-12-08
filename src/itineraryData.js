export const TRIP_DATA = {
  meta: {
    title: "關西家族旅行",
    year: "2026",
    dates: "3月7日 - 3月15日",
  },
  info: {
    flights: [
      { type: "去程", code: "JX822", time: "12:50 抵達 KIX", date: "3/7 (六)", note: "TPE -> KIX" },
      { type: "回程", code: "JX823", time: "20:35 起飛", date: "3/15 (日)", note: "KIX -> TPE" }
    ],
    hotels: [
      { name: "Hotel Vischio Kyoto", city: "京都", dates: "3/7 - 3/11 (4晚)", address: "京都車站八條口", note: "大浴場" },
      { name: "Hotel Vischio Osaka", city: "大阪", dates: "3/11 - 3/15 (4晚)", address: "梅田站北側", note: "走路5分鐘" }
    ]
  },
  days: [
    {
      day: 1,
      date: "07",
      fullDate: "3月7日 (六)",
      location: "京都 (Kyoto)",
      heroImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop", // 伏見稻荷
      heroTitle: "伏見稻荷與千本鳥居",
      weather: { current: "12°", desc: "晴時多雲", hourly: ["12°", "11°", "10°", "9°", "8°"] },
      activities: [
        { time: "12:50", title: "抵達關西機場 (KIX)", desc: "航班 JX822。出關約需 60 分鐘。", type: "transport" },
        { time: "13:30", title: "HARUKA 特急列車", desc: "直達京都車站 (約 80 分)。", type: "transport" },
        { time: "15:00", title: "Hotel Vischio Kyoto", desc: "Check-in 或寄放行李。位置：京都車站八條口。", type: "hotel" },
        { time: "16:00", title: "伏見稲荷大社", desc: "拍攝千本鳥居夕陽。必去：奥社奉拜所「重輕石」。", type: "sight", tag: "必拍" },
        { time: "18:00", title: "晚餐：わらじや (鰻魚雜炊)", desc: "400年老店，豐臣秀吉傳說之地。", type: "food", tag: "需預約" },
        { time: "20:00", title: "備案晚餐：京都翔龍 (拉麵)", desc: "如果鰻魚沒訂到，這家豚骨醬油拉麵在附近。", type: "food" }
      ]
    },
    {
      day: 2,
      date: "08",
      fullDate: "3月8日 (日)",
      location: "京都 (Kyoto)",
      heroImage: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=800&auto=format&fit=crop", // 清水寺
      heroTitle: "和服體驗與清水舞台",
      weather: { current: "14°", desc: "多雲", hourly: ["13°", "14°", "14°", "12°", "10°"] },
      activities: [
        { time: "09:00", title: "和服租借", desc: "建議預約清水五條或祇園附近店家。", type: "sight" },
        { time: "10:00", title: "清水寺 (Kiyomizu-dera)", desc: "仁王門 -> 清水舞台 -> 音羽瀑布 -> 地主神社。", type: "sight", tag: "世界遺產" },
        { time: "11:30", title: "二三年坂散策", desc: "拍攝八坂塔經典視角。推薦：星巴克京都二寧坂雅祥茶屋。", type: "sight" },
        { time: "12:30", title: "午餐：牛カツ京都勝牛 (炸牛排)", desc: "清水五条坂店。外酥內嫩，遊客最愛。", type: "food", tag: "排隊名店" },
        { time: "16:00", title: "八坂神社 & 祇園", desc: "歸還和服後逛花見小路。", type: "sight" },
        { time: "18:00", title: "晚餐：う桶や う (桶裝鰻魚飯)", desc: "米其林推薦，杉木桶裝鰻魚飯。務必提前一個月預約。", type: "food", tag: "米其林" }
      ]
    },
    {
      day: 3,
      date: "09",
      fullDate: "3月9日 (一)",
      location: "嵐山 (Arashiyama)",
      heroImage: "/images/Arashiyama.webp", // 嵐山
      heroTitle: "嵐山竹林與天龍寺",
      weather: { current: "10°", desc: "微雨", hourly: ["10°", "10°", "9°", "9°", "8°"] },
      activities: [
        { time: "09:00", title: "前往嵐山", desc: "JR 嵯峨野線 (京都站 -> 嵯峨嵐山站)。", type: "transport" },
        { time: "10:00", title: "竹林小徑 & 天龍寺", desc: "野宮神社求姻緣。天龍寺曹源池庭園。", type: "sight" },
        { time: "12:30", title: "午餐：鯛匠 HANANA (鯛魚茶泡飯)", desc: "嵐山午餐首選。三種吃法：生魚片、配飯、茶泡飯。建議 10:30 先去拿號碼牌。", type: "food", tag: "超熱門" },
        { time: "14:00", title: "下午茶：% Arabica (嵐山店)", desc: "渡月橋旁純白咖啡店，必點拿鐵。", type: "cafe", tag: "網紅店" }
      ]
    },
    {
      day: 4,
      date: "10",
      fullDate: "3月10日 (二)",
      location: "京都 (Kyoto)",
      heroImage: "https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?q=80&w=800&auto=format&fit=crop", // 金閣寺
      heroTitle: "金閣寺與北野天滿宮",
      weather: { current: "13°", desc: "晴朗", hourly: ["11°", "13°", "14°", "12°", "10°"] },
      activities: [
        { time: "09:00", title: "金閣寺 (鹿苑寺)", desc: "一早去避開人潮，陽光照射最美。", type: "sight", tag: "必拍" },
        { time: "10:30", title: "龍安寺 (Ryoanji)", desc: "枯山水石庭，英國女王讚嘆之地。", type: "sight" },
        { time: "12:00", title: "午餐：西源院 (湯豆腐)", desc: "位於龍安寺境內，邊看庭園邊吃七草湯豆腐。", type: "food", tag: "素雅" },
        { time: "13:30", title: "北野天滿宮", desc: "摸牛頭變聰明。對面必吃：粟餅所 澤屋 (Sawaya)。", type: "sight" },
        { time: "16:30", title: "錦市場 & 河原町", desc: "晚餐可去先斗町覓食。", type: "sight" }
      ]
    },
    {
      day: 5,
      date: "11",
      fullDate: "3月11日 (三)",
      location: "大阪 (Osaka)",
      heroImage: "/images/orange-street-in-osaka.jpeg", // 道頓堀
      heroTitle: "移動日與南大阪潮流",
      weather: { current: "15°", desc: "多雲", hourly: ["14°", "15°", "15°", "14°", "13°"] },
      activities: [
        { time: "10:00", title: "移動至大阪", desc: "JR 京都線新快速 -> 大阪站。", type: "transport" },
        { time: "11:00", title: "Hotel Vischio Osaka", desc: "寄放行李。位於梅田。", type: "hotel" },
        { time: "12:00", title: "午餐：本町製麵所 (烏龍麵)", desc: "藥膳湯頭，排隊名店。", type: "food" },
        { time: "13:30", title: "橘子街 (Orange Street)", desc: "Supreme, Carhartt, 古著店。", type: "shopping" },
        { time: "18:30", title: "晚餐：味乃家 或 美津の", desc: "大阪燒名店。推薦山藥燒。", type: "food", tag: "必比登" }
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
        { time: "08:00", title: "Universal Studios Japan", desc: "全天行程。記得購買快速通關 (Express Pass)。", type: "sight", tag: "重點行程" },
        { time: "12:00", title: "午餐：園區內", desc: "哈利波特三根掃帚 或 瑪利歐咖啡廳。", type: "food" },
        { time: "20:00", title: "晚餐：回到梅田", desc: "隨意吃居酒屋或拉麵。", type: "food" }
      ]
    },
    {
      day: 7,
      date: "13",
      fullDate: "3月13日 (五)",
      location: "奈良 (Nara)",
      heroImage: "https://images.unsplash.com/photo-1558862107-d49ef2a04d72?q=80&w=800&auto=format&fit=crop", // 奈良鹿
      heroTitle: "古都奈良與小鹿",
      weather: { current: "14°", desc: "晴朗", hourly: ["12°", "14°", "14°", "13°", "11°"] },
      activities: [
        { time: "09:00", title: "前往奈良", desc: "JR 大和路快速 -> JR 奈良站。", type: "transport" },
        { time: "10:00", title: "奈良公園 & 東大寺", desc: "餵鹿注意：鹿仙貝不要一次秀出來。必看：東大寺大佛。", type: "sight" },
        { time: "12:00", title: "午餐：志津香 (釜飯)", desc: "排隊大魔王。如果太多人，改吃「水谷茶屋」或「頑固豬排」。", type: "food" },
        { time: "13:30", title: "春日大社 & 水谷茶屋", desc: "森林中的茅草屋茶屋，氣氛絕佳。", type: "sight" },
        { time: "16:00", title: "下午茶：中谷堂 (艾草麻糬)", desc: "高速搗麻糬表演。現吃熱熱軟軟。", type: "food", tag: "必吃" }
      ]
    },
    {
      day: 8,
      date: "14",
      fullDate: "3月14日 (六)",
      location: "大阪 (Osaka)",
      heroImage: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=800&auto=format&fit=crop", // 達摩
      heroTitle: "勝運達摩與梅田購物",
      weather: { current: "13°", desc: "多雲", hourly: ["12°", "13°", "13°", "12°", "10°"] },
      activities: [
        { time: "09:00", title: "前往勝尾寺", desc: "地鐵至箕面萱野站 -> 轉巴士 29 號。", type: "transport" },
        { time: "10:00", title: "勝尾寺 (Katsuoji)", desc: "滿山遍野的達摩，求勝運非常靈驗。", type: "sight", tag: "特殊景點" },
        { time: "13:30", title: "午餐：Onigiri Gorichan (飯糰)", desc: "位於中崎町，最後可做茶泡飯。", type: "food" },
        { time: "15:00", title: "中崎町 & 梅田百貨", desc: "LUCUA, 大丸 (寶可夢中心/任天堂)。", type: "shopping" },
        { time: "19:00", title: "晚餐：亀すし (龜壽司)", desc: "梅田老牌壽司店，CP 值高。", type: "food" }
      ]
    },
    {
      day: 9,
      date: "15",
      fullDate: "3月15日 (日)",
      location: "大阪 -> 台北",
      heroImage: "/images/Tsutenkaku.webp", // 通天閣
      heroTitle: "新世界與返程",
      weather: { current: "14°", desc: "晴朗", hourly: ["13°", "14°", "14°", "13°", "12°"] },
      activities: [
        { time: "10:00", title: "新世界 & 通天閣", desc: "感受昭和復古大阪氛圍。", type: "sight" },
        { time: "12:30", title: "早午餐：達摩炸串 (Kushikatsu Daruma)", desc: "新世界總本店。注意：禁止二次沾醬。", type: "food", tag: "經典" },
        { time: "15:00", title: "梅田最後補貨", desc: "阪急百貨買伴手禮。", type: "shopping" },
        { time: "17:20", title: "利木津巴士", desc: "新阪急酒店門口搭車 -> 關西機場。", type: "transport" },
        { time: "20:35", title: "航班 JX823", desc: "飛往台北 (TPE)。", type: "transport" }
      ]
    }
  ]
};