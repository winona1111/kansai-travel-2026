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
    ],
    // Useful links related to the trip
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
        { time: "12:50", title: "抵達關西機場 (KIX)", desc: "航班 JX822。出關約需 60 分鐘。", type: "transport" },
        { 
          time: "13:30", title: "HARUKA 特急列車", desc: "直達京都車站 (約 80 分)。", type: "transport",
          details: {
            address: "關西機場站 JR 改札口",
            transportGuide: "使用 QR Code 直接入站，尋找 HARUKA 專用月台 (通常是 4 號)。",
            story: "Hello Kitty 彩繪列車是關西之旅的起點。車內有專門放行李的區域，記得坐在指定席。",
            tags: ["交通", "需劃位"]
          }
        },
        { 
          time: "15:00", title: "Hotel Vischio Kyoto", desc: "Check-in 或寄放行李。位置：京都車站八條口。", type: "hotel",
          details: {
            address: "京都府京都市南區東九條上殿田町44-1",
            transportGuide: "JR 京都站「八條口」出站，過馬路正對面即達。不用拖行李走很遠。",
            story: "這間飯店以「大浴場」聞名，雖然我們才剛到，但如果你想先洗個澡放鬆一下也完全沒問題。",
            website: "https://www.hotelvischio-kyoto.com/",
          }
        },
        { 
          time: "16:00", title: "伏見稲荷大社", desc: "拍攝千本鳥居夕陽。", type: "sight", tag: "必拍",
          details: {
            address: "京都市伏見區深草藪之內町68",
            transportGuide: "從京都站搭乘【JR 奈良線】(往奈良方向)，於「稻荷站」下車，出站即達。(車程 5 分鐘)。",
            story: "稻荷大神是掌管五穀豐收與生意興隆的神，是全日本 3 萬座稻荷神社的總本宮。",
            // ✨ 伏見稻荷 參拜路線
            route: [
              { name: "樓門 (Romon Gate)", desc: "入口處巨大的紅色建築，由豐臣秀吉捐贈，非常壯觀。" },
              { name: "本殿 (Main Hall)", desc: "先在這裡搖鈴祈福。記得「二禮、二拍手、一禮」的參拜禮儀。" },
              { name: "千本鳥居 (Senbon Torii)", desc: "整排朱紅色鳥居形成的隧道。剛進入時分為兩條路，通常走右邊，是拍照的黃金地點。" },
              { name: "奧社奉拜所 (Okusha)", desc: "這裡有著名的「重輕石」。許願後舉起石頭，如果比想像中輕，願望就會實現。" }
            ],
            tips: "剛入口人最多，建議往上走 10 分鐘，人潮會少很多，能拍到空景。",
            website: "http://inari.jp/"
          }
        },
        { 
          time: "18:00", title: "晚餐：わらじや (鰻魚雜炊)", desc: "400年老店，豐臣秀吉傳說之地。", type: "food", tag: "需預約",
          details: {
            address: "京都市東山區七條通本町東入西之門町555",
            transportGuide: "從伏見稻荷搭京阪電車至「七條站」，步行 5 分鐘。",
            story: "【歷史傳說】這家店已有 400 年歷史。傳說豐臣秀吉曾在此脫下草鞋 (Waraji) 休息，這也是店名的由來。",
            menu: [
              { jp: "うぞふすい", cn: "鰻魚雜炊 (招牌)", desc: "將烤過的鰻魚、麻糬、蔬菜一起燉煮的鍋物" },
              { jp: "うな伯", cn: "鰻魚箱壽司", desc: "關西特有的押壽司" }
            ],
            website: "https://warajiya.kyoto.jp/"
          }
        },
        { time: "20:00", title: "備案晚餐：京都翔龍 (拉麵)", desc: "如果鰻魚沒訂到，這家豚骨醬油拉麵在附近。", type: "food" }
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
        { time: "09:00", title: "和服租借", desc: "建議預約清水五條或祇園附近店家。", type: "sight", 
          details: { 
            address: "依預約店家而定", 
            story: "建議選「小紋」或「蕾絲」款式，拍照效果最好。記得租借髮型服務。" 
          } 
        },
        { 
          time: "10:00", title: "清水寺 (Kiyomizu-dera)", desc: "仁王門 -> 清水舞台 -> 音羽瀑布。", type: "sight", tag: "世界遺產",
          details: {
            address: "京都市東山區清水1丁目294",
            transportGuide: "沿著清水坂（松原通）一路上坡，看到紅色的仁王門即抵達。",
            // ✨ 清水寺 參拜路線
            route: [
              { name: "仁王門 (Nio-mon)", desc: "氣勢宏偉的朱紅色大門，是清水寺的正門。兩側有高大的「金剛力士」守護，是拍團體照的最佳地點。" },
              { name: "隨求堂 (Zuigu-do)", desc: "這裡有一個著名的體驗「胎內巡遊」(需額外付費)，在完全漆黑的地下室行走，象徵在菩薩的胎內重生。" },
              { name: "清水舞台 (The Stage)", desc: "國寶本堂。完全沒用一根釘子，全靠 139 根巨大櫸木支撐的懸造式建築。" },
              { name: "地主神社 (Jishu Shrine)", desc: "求姻緣超靈驗！閉著眼睛從這顆「戀愛占卜石」走到對面那顆，如果成功，戀情就會順利。" },
              { name: "音羽瀑布 (Otowa Waterfall)", desc: "排隊名所。三道泉水分別代表「學業」、「戀愛」、「長壽」。注意：只能選一道喝！" }
            ],
            story: "清水寺建於西元 778 年，比京都建都還早。這裡供奉的是「千手觀音」。",
            website: "https://www.kiyomizudera.or.jp/"
          }
        },
        { time: "11:30", title: "二三年坂散策", desc: "拍攝八坂塔經典視角。", type: "sight", 
          details: {
             address: "京都市東山區清水",
             story: "充滿京都風情的石板坡道，傳說在三年坂跌倒會倒楣三年，所以走路要小心喔！(其實是提醒大家這裡坡陡路滑)。",
             route: [
                { name: "三年坂 (Sannenzaka)", desc: "又稱產寧坂，兩旁滿滿的伴手禮店。" },
                { name: "八坂塔 (Yasaka Pagoda)", desc: "法觀寺的五重塔，從巷弄間拍過去是最經典的京都明信片角度。" },
                { name: "星巴克 二寧坂茶屋店", desc: "全球唯一有塌塌米座位的星巴克，設於百年町家老宅內。" }
             ]
          }
        },
        { 
          time: "12:30", title: "午餐：牛カツ京都勝牛", desc: "清水五条坂店。炸牛排。", type: "food", tag: "排隊名店",
          details: {
            address: "京都市東山區五条橋東6-583-114",
            transportGuide: "從清水寺步行約 10 分鐘，沿著五條坂往下走。",
            story: "【名物炸牛排】只炸 60 秒的牛排，外層酥脆，內裡還是粉紅色的三分熟。敢吃生蛋的話，一定要點「京玉」沾醬。",
            menu: [
              { jp: "牛ロースカツ膳", cn: "炸牛里肌定食", desc: "最經典的部位，油脂適中" },
              { jp: "京玉", cn: "溫泉蛋沾醬", desc: "將炸牛排沾著蛋液吃" }
            ],
            website: "https://gyukatsu-kyotokatsugyu.com/"
          }
        },
        { time: "16:00", title: "八坂神社 & 祇園", desc: "歸還和服後逛花見小路。", type: "sight" },
        { time: "18:00", title: "晚餐：う桶や う (桶裝鰻魚飯)", desc: "米其林推薦，杉木桶裝鰻魚飯。", type: "food", tag: "米其林" }
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
          time: "09:00", title: "前往嵐山", desc: "JR 嵯峨野線 (京都站 -> 嵯峨嵐山站)。", type: "transport",
          details: {
            address: "JR 京都站 32/33 月台",
            transportGuide: "搭乘 JR 嵯峨野線 (山陰本線)，約 15 分鐘抵達「嵯峨嵐山站」。出站後跟著人群走約 10 分鐘即達竹林入口。",
            story: "這條鐵路沿線風景優美，如果幸運搭到靠近車頭的位置，可以看到保津峽的景色。"
          }
        },
        { 
          time: "10:00", title: "嵐山散策 (Arashiyama)", desc: "竹林小徑 -> 天龍寺 -> 渡月橋。", type: "sight", tag: "自然絕景",
          details: {
            address: "京都市右京區嵯峨天龍寺芒ノ馬場町",
            transportGuide: "建議從竹林小徑開始逛，一路往下走到渡月橋，比較順路。",
            story: "嵐山是平安時代貴族的度假勝地。這裡的景色四季分明，竹林與渡月橋是兩大象徵。",
            // ✨ 嵐山 散步路線
            route: [
              { name: "竹林小徑 (Bamboo Grove)", desc: "整片高聳入雲的竹林，清幽而神秘。聽到風吹過竹葉的沙沙聲是「日本百大音風景」之一。" },
              { name: "野宮神社 (Nonomiya Shrine)", desc: "藏在竹林裡的小神社，求姻緣和學業非常靈驗。記得摸摸那顆「神石」。" },
              { name: "天龍寺 (Tenryu-ji)", desc: "世界遺產。必看「曹源池庭園」，借景嵐山，無論哪個角度看都像一幅畫。" },
              { name: "嵐山大街 (Main Street)", desc: "熱鬧的商店街，可以在這裡買到好吃的豆乳冰淇淋和伴手禮。" },
              { name: "渡月橋 (Togetsukyo Bridge)", desc: "橫跨桂川的木造橋樑。站在橋上看山景非常美。據說情侶走過橋時不能回頭，否則會分手喔！" },
              { name: "京友禪光林 (Kimono Forest)", desc: "位於嵐電嵐山站內，用 600 根京友禪布料做成的柱子，拍照超美。" }
            ],
            website: "https://www.tenryuji.com/"
          } 
        },
        { 
          time: "12:30", title: "午餐：鯛匠 HANANA", desc: "嵐山午餐首選。鯛魚茶泡飯。", type: "food", tag: "超熱門",
          details: {
            address: "京都市右京區嵯峨天龍寺瀨戶川町26-1",
            transportGuide: "位於嵐山大街上，竹林入口附近。",
            story: "這裡只賣一種定食，但這就夠了。鯛魚非常新鮮，切得很薄，配上特製胡麻醬汁簡直絕配。",
            menu: [
              { jp: "鯛茶漬け御膳", cn: "鯛魚茶泡飯定食", desc: "三吃：1.沾醬吃生魚片 2.配飯吃 3.淋上熱茶做茶泡飯" }
            ],
            tips: "這家店非常熱門且不接受預約，強烈建議 10:30 就先去抽號碼牌或排隊。",
            website: "http://hanana-kyoto.com/"
          }
        },
        { time: "14:00", title: "下午茶：% Arabica", desc: "渡月橋旁純白咖啡店，必點拿鐵。", type: "cafe", tag: "網紅店" }
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
          time: "09:00", title: "金閣寺 (Kinkaku-ji)", desc: "正式名稱為鹿苑寺。一早去避開人潮。", type: "sight", tag: "必拍",
          details: {
            address: "京都市北區金閣寺町1",
            transportGuide: "搭乘京都市巴士 (12, 59, 205號) 到「金閣寺道」站下車，步行 3 分鐘。",
            story: "這座貼滿金箔的舍利殿是室町幕府將軍足利義滿的別墅。卡通《一休和尚》裡的將軍府就是這裡！",
            // ✨ 金閣寺 參拜路線
            route: [
              { name: "總門 (Black Gate)", desc: "入口處。買完票會拿到一張像「符咒」一樣的門票，非常特別，可以貼在家裡保平安。" },
              { name: "鏡湖池 (Kyoko-chi)", desc: "這裡是拍攝金閣寺倒影的最佳位置！風平浪靜時，金色的倒影映在水面上，美得令人屏息。" },
              { name: "金閣 (The Golden Pavilion)", desc: "只能遠觀不能進去。第一層是貴族風，第二層是武士風，第三層是中國禪宗風，頂端有一隻金鳳凰。" },
              { name: "龍門瀑布 (Ryu-mon-taki)", desc: "瀑布下有一塊「鯉魚石」，象徵鯉魚躍龍門。" },
              { name: "夕佳亭 (Sekkatei)", desc: "出口前的古老茶室，因為從這裡看夕陽下的金閣寺很美而得名。" }
            ],
            tips: "早上 9:00 開門，建議一開門就進去，這時候陽光剛好照射在金閣上，且團客還沒到。",
            website: "https://www.shokoku-ji.jp/kinkakuji/"
          }
        },
        { time: "10:30", title: "龍安寺 (Ryoanji)", desc: "枯山水石庭，英國女王讚嘆之地。", type: "sight" },
        { time: "12:00", title: "午餐：西源院 (湯豆腐)", desc: "位於龍安寺境內，邊看庭園邊吃七草湯豆腐。", type: "food", tag: "素雅" },
        { time: "13:30", title: "北野天滿宮", desc: "摸牛頭變聰明。對面必吃：粟餅所 澤屋。", type: "sight" },
        { time: "16:30", title: "錦市場 & 河原町", desc: "晚餐可去先斗町覓食。", type: "sight" }
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
        { time: "10:00", title: "移動至大阪", desc: "JR 京都線新快速 -> 大阪站。", type: "transport" },
        { time: "11:00", title: "Hotel Vischio Osaka", desc: "寄放行李。位於梅田。", type: "hotel" },
        { time: "12:00", title: "午餐：本町製麵所", desc: "藥膳湯頭，排隊名店。", type: "food" },
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
        { 
          time: "08:00", title: "Universal Studios Japan", desc: "全天行程。記得購買快速通關 (Express Pass)。", type: "sight", tag: "重點行程",
          details: {
            address: "大阪市此花區櫻島2丁目1-33",
            transportGuide: "搭乘 JR 夢咲線 (Yumesaki Line) 到「Universal City」站下車，跟著人群走就到了。",
            story: "關西最強遊樂園！建議入園第一件事就是打開 App 抽「任天堂世界」的整理券 (如果有買快速通關則按通關時間入場)。",
            // ✨ USJ 建議遊玩順序
            route: [
              { name: "超級任天堂世界 (Super Nintendo World)", desc: "必玩：瑪利歐賽車。戴上能量手環去敲磚塊吧！建議一開園就衝這裡。" },
              { name: "哈利波特魔法世界 (Wizarding World)", desc: "必玩：禁忌之旅。喝一杯奶油啤酒，在活米村拍照。這裡的還原度是世界級的。" },
              { name: "小小兵樂園 (Minion Park)", desc: "必玩：小小兵瘋狂乘車遊。氣氛超歡樂，到處都是搗蛋的小小兵。" },
              { name: "侏羅紀公園 (Jurassic Park)", desc: "必玩：飛天翼龍 (The Flying Dinosaur)。被抓在恐龍爪子上飛行的雲霄飛車，超刺激！" },
              { name: "水世界 (WaterWorld)", desc: "震撼的特技表演秀，爆破場面非常真實。不想濕身的話不要坐前排藍色椅子喔！" },
              { name: "NO LIMIT! 遊行", desc: "下午的花車遊行，所有角色都會出來，氣氛嗨到最高點。" }
            ],
            tips: "如果沒有買快速通關，建議下載 USJ 官方 App 隨時查看排隊時間。想省錢午餐可以出園去 CityWalk 吃。",
            website: "https://www.usj.co.jp/"
          }
        },
        { time: "12:00", title: "午餐：園區內", desc: "哈利波特三根掃帚 或 瑪利歐咖啡廳。", type: "food" },
        { time: "20:00", title: "晚餐：回到梅田", desc: "隨意吃居酒屋或拉麵。", type: "food" }
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
        { time: "09:00", title: "前往奈良", desc: "JR 大和路快速 -> JR 奈良站。", type: "transport" },
        { 
          time: "10:00", title: "奈良公園 & 東大寺", desc: "餵鹿注意：鹿仙貝不要一次秀出來。", type: "sight",
          details: {
            address: "奈良市雜司町406-1",
            transportGuide: "從 JR 奈良站轉乘市內循環巴士，在「東大寺大佛殿」站下車。",
            story: "奈良公園有 1200 多隻野生鹿，牠們被視為神的使者。東大寺則是世界最大的木造建築，裡面的大佛非常震撼。",
            // ✨ 奈良 散步路線
            route: [
              { name: "奈良公園 (Nara Park)", desc: "小心！這裡的鹿很聰明。買了鹿仙貝要趕快餵，不然會被圍攻。建議往公園深處走，那裡的鹿比較溫馴。" },
              { name: "南大門 (Nandaimon)", desc: "東大寺的正門，仰望兩尊巨大的金剛力士木雕，充滿歷史的魄力。" },
              { name: "東大寺大佛殿 (Todai-ji)", desc: "殿內供奉 15 公尺高的盧舍那佛。必試：鑽過大佛右後方柱子的洞，據說能保佑無病消災 (洞的大小跟大佛鼻孔一樣)。" },
              { name: "二月堂 (Nigatsu-do)", desc: "位於高處，可以俯瞰整個奈良市景，遊客較少，非常寧靜舒服。" },
              { name: "春日大社 (Kasuga Taisha)", desc: "參道兩旁有 3000 多個石燈籠，充滿神秘感。" }
            ],
            website: "https://www.todaiji.or.jp/"
          }
        },
        { time: "12:00", title: "午餐：志津香 (釜飯)", desc: "排隊大魔王。如果太多人，改吃「水谷茶屋」。", type: "food" },
        { time: "13:30", title: "春日大社 & 水谷茶屋", desc: "森林中的茅草屋茶屋，氣氛絕佳。", type: "sight" },
        { 
          time: "16:00", title: "下午茶：中谷堂", desc: "高速搗麻糬表演。", type: "food", tag: "必吃",
          details: {
             address: "奈良市橋本町29",
             story: "這家店上過無數次電視，師傅搗麻糬的速度快到看不見手！",
             menu: [{ jp: "よもぎ餅", cn: "艾草紅豆麻糬", desc: "剛搗好的麻糬熱熱軟軟，外皮有艾草香，紅豆餡不甜膩。" }]
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
        { time: "09:00", title: "前往勝尾寺", desc: "地鐵至箕面萱野站 -> 轉巴士 29 號。", type: "transport" },
        { time: "10:00", title: "勝尾寺 (Katsuoji)", desc: "滿山遍野的達摩，求勝運非常靈驗。", type: "sight", tag: "特殊景點" },
        { time: "13:30", title: "午餐：Onigiri Gorichan", desc: "位於中崎町，最後可做茶泡飯。", type: "food" },
        { time: "15:00", title: "中崎町 & 梅田百貨", desc: "LUCUA, 大丸。", type: "shopping" },
        { time: "19:00", title: "晚餐：亀すし (龜壽司)", desc: "梅田老牌壽司店，CP 值高。", type: "food" }
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
        { time: "10:00", title: "新世界 & 通天閣", desc: "感受昭和復古大阪氛圍。", type: "sight" },
        { time: "12:30", title: "早午餐：達摩炸串", desc: "新世界總本店。注意：禁止二次沾醬。", type: "food", tag: "經典" },
        { time: "15:00", title: "梅田最後補貨", desc: "阪急百貨買伴手禮。", type: "shopping" },
        { time: "17:20", title: "利木津巴士", desc: "新阪急酒店門口搭車 -> 關西機場。", type: "transport" },
        { time: "20:35", title: "航班 JX823", desc: "飛往台北 (TPE)。", type: "transport" }
      ]
    }
  ]
};