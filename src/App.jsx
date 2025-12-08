import React, { useState } from 'react';
import { TRIP_DATA } from './itineraryData';
import { RESTAURANT_DATA } from './RestaurantBucketList'; // 匯入新的餐廳資料
import { MapPin, Navigation, Sun, Cloud, Clock, Utensils, Train, ShoppingBag, Camera, Info, Home, FileText, ChevronRight, Star, ExternalLink } from 'lucide-react';

// --- Components (共用) ---

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

const TimelineItem = ({ item, isLast }) => {
  const getIcon = (type) => {
    switch(type) {
      case 'food': return <Utensils size={14} className="text-orange-500" />;
      case 'transport': return <Train size={14} className="text-blue-500" />;
      case 'sight': return <Camera size={14} className="text-emerald-500" />;
      case 'shopping': return <ShoppingBag size={14} className="text-rose-500" />;
      default: return <Info size={14} className="text-stone-400" />;
    }
  };
  const openGoogleMaps = () => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.title)}`, '_blank');

  return (
    <div className="flex gap-4 relative">
      <div className="flex flex-col items-center w-12 flex-shrink-0">
         <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 mb-1 z-10 border border-stone-200">
            {getIcon(item.type)}
         </div>
         {!isLast && <div className="w-[2px] flex-1 bg-stone-200 my-1"></div>}
      </div>
      <div onClick={openGoogleMaps} className="flex-1 bg-white rounded-2xl p-4 mb-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-stone-50 active:scale-[0.98] transition-transform cursor-pointer">
        <div className="flex justify-between items-start mb-2">
          <div className="text-2xl font-light text-stone-800 tracking-tighter">{item.time}</div>
          {item.tag && <span className="text-[10px] font-bold text-white bg-stone-800 px-2 py-1 rounded-full">{item.tag}</span>}
        </div>
        <h3 className="text-lg font-bold text-stone-800 mb-1 leading-tight">{item.title}</h3>
        <p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p>
      </div>
    </div>
  );
};

// --- VIEW 1: 主頁 (HomeView) ---
const HomeView = () => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const currentDay = TRIP_DATA.days[selectedDayIndex];

  return (
    <div className="animate-in fade-in duration-500">
      {/* Date Scroller */}
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
            <TimelineItem key={index} item={item} isLast={index === currentDay.activities.length - 1} />
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

  return (
    <div className="min-h-screen bg-[#F8F7F4] font-sans max-w-md mx-auto relative overflow-hidden text-stone-800">
      
      {/* Content Area */}
      {activeTab === 'restaurant' && <RestaurantView />}
      {activeTab === 'home' && <HomeView />}
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