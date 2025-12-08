import React, { useState } from 'react';
import { TRIP_DATA } from './itineraryData';
import { RESTAURANT_DATA } from './RestaurantBucketList'; // 匯入新的餐廳資料
import { MapPin, Navigation, Sun, Cloud, Clock, Utensils, Train, ShoppingBag, Camera, Info, Home, FileText, ChevronRight, Star, ExternalLink, X, Globe, Map as MapIcon } from 'lucide-react';

// --- Components (共用) ---
// --- ✨ NEW: 詳細資訊彈窗 (Modal) ---
const ActivityModal = ({ item, onClose }) => {
  if (!item || !item.details) return null;
  const { details } = item;

  // 定義頂部顏色與標籤文字
  const headerStyle = item.type === 'food' 
    ? 'bg-[#E07A5F] text-white'  // Food: 溫暖赤陶色
    : 'bg-[#5F8D77] text-white'; // Sightseeing: 抹茶綠
  
  const typeLabel = item.type === 'food' ? 'DINING • 美食' : 'SIGHTSEEING • 景點';

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center pointer-events-none">
      {/* 背景遮罩 */}
      <div 
        className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm transition-opacity pointer-events-auto" 
        onClick={onClose}
      ></div>

      {/* 卡片本體 */}
      <div className="bg-[#F8F7F4] w-full max-w-md sm:rounded-3xl rounded-t-3xl shadow-2xl transform transition-transform duration-300 pointer-events-auto max-h-[90vh] overflow-y-auto no-scrollbar flex flex-col">
        
        {/* ✨ 頂部滿版色塊 (取代原本的白色 Header) */}
        <div className={`sticky top-0 z-10 px-6 py-5 flex justify-between items-center shadow-sm ${headerStyle}`}>
          <div className="flex items-center gap-2">
            {/* 根據類型顯示不同 ICON */}
            {item.type === 'food' ? <Utensils size={16} /> : <Camera size={16} />}
            <span className="text-xs font-bold tracking-[0.15em] uppercase">
              {typeLabel}
            </span>
          </div>
          
          {/* 關閉按鈕 (白色半透明，融入背景) */}
          <button 
            onClick={onClose} 
            className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors backdrop-blur-md"
          >
            <X size={18} className="text-white" />
          </button>
        </div>

        <div className="p-6 pb-10">
          {/* 標題與地址 */}
          <h2 className="text-2xl font-serif font-bold text-stone-800 mb-2">{item.title}</h2>
          <div className="flex items-start gap-1 text-xs text-stone-500 mb-6">
            <MapPin size={12} className="mt-0.5 text-rose-500" />
            <span className="underline decoration-stone-300 underline-offset-4">{details.address}</span>
          </div>

          {/* 🚃 交通攻略 */}
          {details.transportGuide && (
            <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm mb-6">
              <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                <Train size={12} /> 交通攻略
              </h3>
              <p className="text-sm font-medium text-stone-700 leading-relaxed">
                {details.transportGuide}
              </p>
            </div>
          )}

          {details.route && (
            <div className="mb-8">
              <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <MapIcon size={14} /> 推薦走訪順序 (Route)
              </h3>
              <div className="space-y-0 pl-2">
                {details.route.map((spot, i) => (
                  <div key={i} className="relative pl-8 pb-6 border-l-2 border-stone-200 last:border-0 last:pb-0">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-[#5F8D77]"></div>
                    
                    {/* Content */}
                    <div>
                      <h4 className="font-bold text-stone-800 text-base mb-1 leading-none pt-0.5">
                        {spot.name}
                      </h4>
                      <p className="text-xs text-stone-500 leading-relaxed mt-1">
                        {spot.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 🗣️ 指差確認 / 推薦菜單區 (如果是餐廳) */}
          {item.type === 'food' && details.menu && (
            <div className="mb-8">
              <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Utensils size={14} /> 推薦菜單 (Point & Speak)
              </h3>
              <div className="space-y-3">
                {details.menu.map((m, i) => (
                  <div key={i} className="bg-white p-3 rounded-xl border border-stone-200 shadow-sm flex justify-between items-center">
                    <div>
                      <div className="font-bold text-lg text-stone-800">{m.cn}</div>
                      <div className="text-xs text-stone-400">{m.desc}</div>
                    </div>
                    <div className="text-right">
                       <div className="font-serif text-sm font-bold text-stone-600 bg-stone-100 px-2 py-1 rounded">{m.jp}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 📖 關於此處 (故事與介紹) */}
          <div className="mb-8 relative pl-4 border-l-2 border-stone-300">
            <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-2">關於此處 (About)</h3>
            <p className="text-sm text-stone-600 leading-7 whitespace-pre-line">
              {details.story}
            </p>
            {details.tips && (
              <div className="mt-4 bg-orange-50 p-3 rounded-lg text-xs text-orange-700 border border-orange-100">
                <span className="font-bold">💡 貼心提醒：</span> {details.tips}
              </div>
            )}
          </div>

          {/* 🔗 底部按鈕區 */}
          <div className="grid gap-3">
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.title + " " + details.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#3A4D39] text-white py-3 rounded-xl font-bold shadow-lg active:scale-[0.98] transition-transform"
            >
              <Navigation size={18} /> Google Maps 導航
            </a>
            
            {details.website && (
              <a 
                href={details.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-stone-800 text-white py-3 rounded-xl font-bold shadow-lg active:scale-[0.98] transition-transform"
              >
                <Globe size={18} /> 官方網站
              </a>
            )}
          </div>
          
          <div className="text-center mt-6">
             <span className="text-[10px] text-stone-300 tracking-widest uppercase">wino x Gemini3</span>
          </div>

        </div>
      </div>
    </div>
  );
};

const WeatherWidget = ({ weather }) => (
  <div className="bg-white/60 backdrop-blur-md rounded-3xl p-5 mb-6 shadow-sm border border-white/50">
    <div className="flex justify-between items-end mb-4">
      <div>
        <h3 className="text-stone-500 text-xs font-bold tracking-widest mb-1">目前天氣</h3>
        <div className="flex items-center gap-2">
          <span className="text-4xl font-light text-stone-800">{weather.current}</span>
          <span className="text-sm text-stone-600 font-medium bg-white px-2 py-1 rounded-full shadow-sm">{weather.desc}</span>
        </div>
      </div>
      <div className="text-[10px] text-stone-400 bg-stone-100 px-2 py-1 rounded">Open-Meteo</div>
    </div>
    <div className="flex justify-between items-center text-stone-600 overflow-x-auto no-scrollbar gap-4">
      {weather.hourly.map((temp, index) => (
        <div key={index} className="flex flex-col items-center gap-2 min-w-[40px]">
          <span className="text-[10px] text-stone-400">{index + 9}:00</span>
          {index % 2 === 0 ? <Sun size={18} className="text-orange-400" /> : <Cloud size={18} className="text-stone-400" />}
          <span className="text-sm font-bold">{temp}</span>
        </div>
      ))}
    </div>
  </div>
);

const TimelineItem = ({ item, isLast, onSelect }) => {
  const getIcon = (type) => {
    switch(type) {
      case 'food': return <Utensils size={14} className="text-orange-500" />;
      case 'transport': return <Train size={14} className="text-blue-500" />;
      case 'sight': return <Camera size={14} className="text-emerald-500" />;
      case 'shopping': return <ShoppingBag size={14} className="text-rose-500" />;
      case 'hotel': return <Home size={14} className="text-indigo-500" />;
      default: return <Info size={14} className="text-stone-400" />;
    }
  };

  // 如果有 details 屬性，則顯示可點擊的樣式，否則為一般顯示
  const hasDetails = !!item.details;

  const handleClick = () => {
    if (hasDetails) {
      onSelect(item);
    } else {
      // 如果沒有詳細資料，舊行為：直接開地圖
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.title)}`, '_blank');
    }
  };

  return (
    <div className="flex gap-4 relative">
      <div className="flex flex-col items-center w-12 flex-shrink-0">
         <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 mb-1 z-10 border border-stone-200">
            {getIcon(item.type)}
         </div>
         {!isLast && <div className="w-[2px] flex-1 bg-stone-200 my-1"></div>}
      </div>
      <div 
        onClick={handleClick}
        className={`flex-1 bg-white rounded-2xl p-4 mb-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-stone-50 transition-all ${hasDetails ? 'cursor-pointer active:scale-[0.98] hover:border-stone-200' : ''}`}
      >
        <div className="flex justify-between items-start mb-2">
          <div className="text-2xl font-light text-stone-800 tracking-tighter">{item.time}</div>
          {item.tag && <span className="text-[10px] font-bold text-white bg-stone-800 px-2 py-1 rounded-full">{item.tag}</span>}
        </div>
        <h3 className="text-lg font-bold text-stone-800 mb-1 leading-tight">{item.title}</h3>
        <p className="text-xs text-stone-500 leading-relaxed line-clamp-2">{item.desc}</p>
        
        {hasDetails ? (
          <div className="mt-3 pt-3 border-t border-stone-50 flex items-center justify-between text-[10px] text-stone-400 font-bold">
            <span className="flex items-center gap-1 text-blue-500"><Info size={12} /> 查看攻略與菜單</span>
            <ChevronRight size={12} />
          </div>
        ) : (
          <div className="mt-3 pt-3 border-t border-stone-50 flex items-center gap-1 text-[10px] text-stone-300 font-bold">
            <Navigation size={10} /> 導航
          </div>
        )}
      </div>
    </div>
  );
};

// --- VIEW 1: 主頁 (HomeView) ---
const HomeView = ({ onSelectActivity }) => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const currentDay = TRIP_DATA.days[selectedDayIndex];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-40 pt-12 pb-4 border-b border-stone-100 max-w-md mx-auto">
        <div className="text-center mb-4">
          <h1 className="text-xs font-bold tracking-[0.2em] text-stone-400 uppercase">{TRIP_DATA.meta.title}</h1>
        </div>
        <div className="flex overflow-x-auto no-scrollbar px-6 gap-6 pb-2 snap-x">
          {TRIP_DATA.days.map((day, idx) => (
            <button key={idx} onClick={() => setSelectedDayIndex(idx)} className={`flex flex-col items-center flex-shrink-0 min-w-[3rem] transition-all snap-center ${selectedDayIndex === idx ? 'opacity-100 scale-110' : 'opacity-40 scale-100'}`}>
              <span className="text-[10px] font-bold text-stone-400 uppercase mb-1">DAY {day.day}</span>
              <span className={`text-xl font-serif font-bold ${selectedDayIndex === idx ? 'text-stone-800' : 'text-stone-400'}`}>{day.date}</span>
              {selectedDayIndex === idx && <div className="w-1 h-1 bg-stone-800 rounded-full mt-1"></div>}
            </button>
          ))}
        </div>
      </div>

      <div className="h-[160px]"></div>
      
      <div className="px-5 pb-24 key={selectedDayIndex}">
        <div className="relative rounded-[32px] overflow-hidden aspect-[4/3] shadow-xl mb-8 group">
          <img src={currentDay.heroImage} alt={currentDay.location} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest bg-white/20 backdrop-blur px-2 py-1 rounded-lg w-fit mb-2">
              <MapPin size={10} /> {currentDay.location}
            </div>
            <h2 className="text-2xl font-bold leading-tight shadow-black drop-shadow-lg">{currentDay.heroTitle}</h2>
            <p className="text-xs text-white/80 mt-1 font-medium">{currentDay.fullDate}</p>
          </div>
        </div>

        <WeatherWidget weather={currentDay.weather} />

        <div className="mt-2">
          {currentDay.activities.map((item, index) => (
            <TimelineItem 
              key={index} 
              item={item} 
              isLast={index === currentDay.activities.length - 1} 
              onSelect={onSelectActivity} // 傳遞點擊事件
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// --- VIEW 2: 餐廳 (RestaurantView) ---
const RestaurantView = () => {
  const [city, setCity] = useState("京都");
  const cities = Object.keys(RESTAURANT_DATA);

  return (
    <div className="pt-16 px-5 pb-24 min-h-screen animate-in fade-in slide-in-from-right-4 duration-300">
      <h2 className="text-2xl font-serif font-bold text-stone-800 mb-6 flex items-center gap-2">
        <Utensils className="text-orange-500" /> 美食清單
      </h2>

      {/* City Switcher */}
      <div className="flex bg-stone-200 p-1 rounded-xl mb-6">
        {cities.map((c) => (
          <button 
            key={c} 
            onClick={() => setCity(c)}
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${city === c ? 'bg-white text-stone-800 shadow-sm' : 'text-stone-500'}`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Categories & Cards */}
      <div className="space-y-8">
        {RESTAURANT_DATA[city].map((cat, idx) => (
          <div key={idx}>
            <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-3 border-l-4 border-orange-300 pl-2">
              {cat.category}
            </h3>
            {cat.desc && <p className="text-xs text-stone-500 mb-3 italic">{cat.desc}</p>}
            
            <div className="grid gap-4">
              {cat.items.map((item, i) => (
                <div 
                  key={i} 
                  onClick={() => window.open(item.link, '_blank')}
                  className="bg-white p-4 rounded-xl border border-stone-100 shadow-sm active:scale-[0.98] transition-transform cursor-pointer relative overflow-hidden"
                >
                  {item.isStar && <div className="absolute top-0 right-0 bg-orange-100 text-orange-600 px-2 py-1 rounded-bl-xl text-[10px] font-bold flex items-center gap-1"><Star size={10} fill="currentColor"/> 推薦</div>}
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-stone-800 text-lg">{item.name}</h4>
                  </div>
                  <div className="text-xs text-orange-500 font-medium mb-2 bg-orange-50 inline-block px-2 py-0.5 rounded-md">{item.type} • {item.price}</div>
                  <p className="text-xs text-stone-500 leading-relaxed mb-2">{item.feature}</p>
                  <div className="text-[10px] text-stone-400 flex items-center gap-1">
                    <MapPin size={10} /> {item.address}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- VIEW 3: 資訊 (InfoView) ---
const InfoView = () => {
  // 增加導航功能 helper
  const openMap = (keyword) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(keyword)}`, '_blank');
  };

  return (
    <div className="pt-16 px-5 pb-24 min-h-screen animate-in fade-in slide-in-from-right-4 duration-300">
      <h2 className="text-2xl font-serif font-bold text-stone-800 mb-6 flex items-center gap-2">
        <FileText className="text-blue-500" /> 旅程資訊
      </h2>

      {/* Flights (航班資訊 - 維持原樣) */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100 mb-6">
        <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-4 flex items-center gap-2">
          <Train size={14} /> 航班資訊
        </h3>
        {TRIP_DATA.info.flights.map((f, i) => (
          <div key={i} className="mb-4 last:mb-0 border-b last:border-0 border-stone-50 pb-3 last:pb-0">
            <div className="flex justify-between font-bold text-stone-800">
              <span>{f.type} ({f.code})</span>
              <span>{f.date}</span>
            </div>
            <div className="text-sm text-stone-600 mt-1">{f.time}</div>
            <div className="text-xs text-stone-400 mt-1">{f.note}</div>
          </div>
        ))}
      </div>

      {/* Hotels (住宿資訊 - ✨ 已升級可點擊導航) */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100 mb-6">
        <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-4 flex items-center gap-2">
          <Home size={14} /> 住宿資訊
        </h3>
        {TRIP_DATA.info.hotels.map((h, i) => (
          <div 
            key={i} 
            onClick={() => openMap(h.name)} // 點擊觸發導航
            className="mb-4 last:mb-0 border-b last:border-0 border-stone-50 pb-3 last:pb-0 cursor-pointer hover:bg-stone-50 transition-colors rounded-lg p-2 -mx-2 active:scale-[0.98]"
          >
            <div className="flex justify-between items-start">
              <div className="font-bold text-stone-800 text-lg">{h.name}</div>
              <ExternalLink size={12} className="text-stone-300 mt-1" /> {/* 加入小圖示提示可點擊 */}
            </div>
            <div className="flex justify-between text-xs text-stone-500 mt-1 font-medium">
              <span className="bg-stone-100 px-2 py-0.5 rounded">{h.city}</span>
              <span>{h.dates}</span>
            </div>
            <div className="text-xs text-stone-400 mt-2 flex items-center gap-1">
               <MapPin size={10} className="text-rose-400"/> {h.address}
            </div>
            <div className="text-[10px] text-blue-400 mt-2 font-bold flex items-center gap-1 opacity-0 hover:opacity-100 transition-opacity">
              <Navigation size={10} /> 點擊導航
            </div>
          </div>
        ))}
      </div>

      {/* Reservations Placeholder (預留空間) */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100 border-dashed">
        <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-2 flex items-center gap-2">
          <Utensils size={14} /> 餐廳預約確認
        </h3>
        <p className="text-xs text-stone-400 leading-relaxed text-center py-4">
          尚未加入預約代號<br/>(可日後編輯新增)
        </p>
      </div>
    </div>
  );
};

// --- Main App Component ---
export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedActivity, setSelectedActivity] = useState(null);

  return (
    <div className="min-h-screen bg-[#F8F7F4] font-sans max-w-md mx-auto relative overflow-hidden text-stone-800">
      
      {selectedActivity && (
        <ActivityModal 
          item={selectedActivity} 
          onClose={() => setSelectedActivity(null)} 
        />
      )}

      {/* Content Area */}
      {activeTab === 'restaurant' && <RestaurantView />}
      {activeTab === 'home' && (
        <HomeView onSelectActivity={setSelectedActivity} />
      )}
      {activeTab === 'info' && <InfoView />}

      {/* Bottom Navigation Toolbar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-stone-200 px-6 py-2 pb-5 z-50 max-w-md mx-auto flex justify-around items-end shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]">
        
        <button 
          onClick={() => setActiveTab('restaurant')}
          className={`flex flex-col items-center gap-1 p-2 transition-all duration-300 ${activeTab === 'restaurant' ? 'text-orange-500 -translate-y-1' : 'text-stone-300 hover:text-stone-400'}`}
        >
          <Utensils size={24} strokeWidth={activeTab === 'restaurant' ? 2.5 : 2} />
          <span className="text-[10px] font-bold tracking-widest">餐廳</span>
        </button>

        <button 
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center gap-1 p-2 transition-all duration-300 ${activeTab === 'home' ? 'text-stone-800 -translate-y-2 scale-110' : 'text-stone-300 hover:text-stone-400'}`}
        >
          <div className={`p-3 rounded-full ${activeTab === 'home' ? 'bg-stone-800 text-white shadow-lg' : ''}`}>
             <Home size={24} strokeWidth={activeTab === 'home' ? 2.5 : 2} />
          </div>
          {activeTab !== 'home' && <span className="text-[10px] font-bold tracking-widest">主頁</span>}
        </button>

        <button 
          onClick={() => setActiveTab('info')}
          className={`flex flex-col items-center gap-1 p-2 transition-all duration-300 ${activeTab === 'info' ? 'text-blue-500 -translate-y-1' : 'text-stone-300 hover:text-stone-400'}`}
        >
          <FileText size={24} strokeWidth={activeTab === 'info' ? 2.5 : 2} />
          <span className="text-[10px] font-bold tracking-widest">資訊</span>
        </button>

      </div>
    </div>
  );
}