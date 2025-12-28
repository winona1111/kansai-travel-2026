import React, { useState } from 'react';
import { TRIP_DATA } from './itineraryData';
import { RESTAURANT_DATA } from './RestaurantBucketList';
import { MapPin, Navigation, Sun, Cloud, Clock, Utensils, Train, ShoppingBag, Camera, Info, Home, FileText, ChevronRight, Star, ExternalLink, X, Globe, Map as MapIcon, Footprints, Bus, Split } from 'lucide-react';

// --- Helper: 標題淨化 (移除 "午餐：" 等前綴，讓 Google Maps 搜尋更準) ---
const cleanTitle = (title) => {
  if (!title) return "";
  return title.replace(/^(午餐|晚餐|早午餐|備案|下午茶|前往|移動至)：/, "").split('(')[0].trim();
};

// --- Helper: 產生 Google Maps 導航連結 (A -> B) ---
const getNavUrl = (origin, destination) => {
  const cleanOrigin = cleanTitle(origin);
  const cleanDest = cleanTitle(destination);
  
  // 如果沒有起點 (例如第一天剛下飛機)，就只搜尋終點
  if (!cleanOrigin) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cleanDest)}`;
  }
  
  // 產生 A -> B 路線規劃連結 (大眾運輸模式)
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(cleanOrigin)}&destination=${encodeURIComponent(cleanDest)}&travelmode=transit`;
};

// --- 元件: 交通路線圖 (TransportTimeline) ---
const TransportTimeline = ({ steps }) => {
  return (
    <div className="pl-2 relative space-y-0">
      {steps.map((step, i) => {
        const isLast = i === steps.length - 1;
        let Icon = Footprints; 
        let iconBg = "#A8A29E"; // Stone 400
        
        if (step.type === 'train') { Icon = Train; iconBg = step.color || "#0072BC"; }
        if (step.type === 'bus') { Icon = Bus; iconBg = step.color || "#F6AE00"; }
        if (step.type === 'taxi') { Icon = Train; iconBg = "#292524"; }
        if (step.type === 'stop') { Icon = MapPin; iconBg = "#A8A29E"; } 

        return (
          <div key={i} className="flex gap-4 relative pb-8 last:pb-0">
            <div className="flex flex-col items-center w-8 flex-shrink-0 relative">
               <div 
                 className="w-8 h-8 rounded-full flex items-center justify-center text-white z-10 shadow-sm transition-transform hover:scale-110" 
                 style={{ backgroundColor: iconBg }}
               >
                  <Icon size={14} />
               </div>
               {!isLast && (
                 <div 
                   className="w-[2px] absolute top-2 bottom-0 left-1/2 -translate-x-1/2 z-0" 
                   style={{ 
                     backgroundColor: (step.type === 'train' || step.type === 'bus') ? (step.color || '#E7E5E4') : '#E7E5E4' 
                   }}
                 ></div>
               )}
            </div>
            <div className="flex-1 pt-1">
              {(step.type === 'train' || step.type === 'bus') ? (
                <div className="bg-stone-50 p-3 rounded-lg border border-stone-200 -mt-1 shadow-sm">
                  <div className="flex justify-between items-start mb-1">
                     <span className="font-bold text-stone-800 text-sm">{step.line}</span>
                     {step.time && <span className="text-[10px] font-bold text-white px-2 py-0.5 rounded-full shadow-sm" style={{ backgroundColor: step.color }}>{step.time}</span>}
                  </div>
                  <div className="flex justify-between items-center text-xs text-stone-500">
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-stone-700 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone-300"></span>
                        {step.from}
                      </span>
                      {step.dir && <span className="text-[10px] text-stone-400 pl-2.5">↓ {step.dir}</span>}
                      {step.to && <span className="font-bold text-stone-700 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone-300"></span>
                        {step.to}
                      </span>}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="pt-1">
                   <div className="font-bold text-stone-700 text-sm flex items-center gap-2">{step.text}</div>
                   {step.time && <div className="text-xs text-stone-400 mt-0.5 font-mono">{step.time}</div>}
                   {step.desc && <div className="text-xs text-orange-500 mt-1 bg-orange-50 inline-block px-2 py-1 rounded">{step.desc}</div>}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

// --- 元件: 行程分支切換器 (BranchSection) ---
const BranchSection = ({ branchData, onSelectActivity, prevLocation }) => {
  const [selectedOptionId, setSelectedOptionId] = useState(branchData.options[0].id);
  const selectedOption = branchData.options.find(opt => opt.id === selectedOptionId);

  return (
    <div className="mb-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-center gap-2 mb-4 px-1">
        <Split size={18} className="text-stone-400" />
        <h3 className="font-bold text-stone-700">{branchData.title}</h3>
        <span className="text-xs text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full">{branchData.desc}</span>
      </div>

      <div className="flex bg-stone-200 p-1 rounded-xl mb-6 shadow-inner">
        {branchData.options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => setSelectedOptionId(opt.id)}
            className={`flex-1 py-3 text-xs sm:text-sm font-bold rounded-lg transition-all duration-300 flex flex-col items-center gap-1 ${
              selectedOptionId === opt.id 
                ? 'bg-white text-stone-800 shadow-md transform scale-[1.02]' 
                : 'text-stone-500 hover:text-stone-600'
            }`}
          >
            <span>{opt.label}</span>
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {selectedOption.activities.map((item, index) => {
          // 這裡計算分支內的上一站
          // 如果是分支內的第一個，上一站就是「分支前」的那個點 (prevLocation)
          // 否則就是分支內的上一個點
          const innerPrevLocation = index === 0 
            ? prevLocation 
            : (selectedOption.activities[index - 1].details?.address || selectedOption.activities[index - 1].title);

          return (
            <TimelineItem 
              key={`${selectedOptionId}-${index}`} 
              item={item} 
              isLast={index === selectedOption.activities.length - 1} 
              onSelect={(item, p) => onSelectActivity(item, p)} 
              prevLocation={innerPrevLocation} 
            />
          );
        })}
      </div>
    </div>
  );
};

// --- Modal 元件 ---
const ActivityModal = ({ item, prevLocation, onClose }) => {
  if (!item || !item.details) return null;
  const { details } = item;

  const headerStyle = item.type === 'food' ? 'bg-[#E07A5F] text-white' : 'bg-[#5F8D77] text-white';
  const typeLabel = item.type === 'food' ? 'DINING • 美食' : 'SIGHTSEEING • 景點';
  
  // ✨ 優先使用地址作為導航終點，沒有地址才用標題
  const destination = details.address || item.title;
  const googleMapsUrl = getNavUrl(prevLocation, destination);

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center pointer-events-none">
      <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm transition-opacity pointer-events-auto" onClick={onClose}></div>
      <div className="bg-[#F8F7F4] w-full max-w-md sm:rounded-3xl rounded-t-3xl shadow-2xl transform transition-transform duration-300 pointer-events-auto max-h-[90vh] overflow-y-auto no-scrollbar flex flex-col">
        <div className={`sticky top-0 z-50 px-6 py-5 flex justify-between items-center shadow-sm ${headerStyle}`}>
          <div className="flex items-center gap-2">
            {item.type === 'food' ? <Utensils size={16} /> : (item.type === 'transport' ? <Train size={16}/> : <Camera size={16} />)}
            <span className="text-xs font-bold tracking-[0.15em] uppercase">{typeLabel}</span>
          </div>
          <button onClick={onClose} className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors backdrop-blur-md">
            <X size={18} className="text-white" />
          </button>
        </div>
        <div className="p-6 pb-10">
          <h2 className="text-2xl font-serif font-bold text-stone-800 mb-2">{item.title}</h2>
          {details.address && (
            <div className="flex items-start gap-1 text-xs text-stone-500 mb-6">
              <MapPin size={12} className="mt-0.5 text-rose-500" />
              <span className="underline decoration-stone-300 underline-offset-4">{details.address}</span>
            </div>
          )}
          
          {/* ✨ 顯示導航資訊：從哪裡來 */}
          {prevLocation && (
             <div className="mb-4 text-[10px] text-stone-400 bg-stone-100 px-3 py-1.5 rounded-lg inline-flex items-center gap-1">
                <Footprints size={10} /> 導航起點：{cleanTitle(prevLocation)}
             </div>
          )}

          {details.tips && <div className="mb-6 bg-red-50 border border-red-100 p-3 rounded-lg text-xs text-red-600 font-bold flex items-start gap-2"><Info size={14} className="mt-0.5"/><div>{details.tips}</div></div>}
          {details.transport && (
            <div className="mb-8">
              <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-4 flex items-center gap-2"><Train size={14} /> 交通攻略</h3>
              <div className="bg-white p-5 rounded-2xl border border-stone-100 shadow-sm"><TransportTimeline steps={details.transport} /></div>
            </div>
          )}
          {details.route && (
            <div className="mb-8">
              <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-4 flex items-center gap-2"><MapIcon size={14} /> 推薦順序</h3>
              <div className="space-y-0 pl-2">
                {details.route.map((spot, i) => (
                  <div key={i} className="relative pl-8 pb-6 border-l-2 border-stone-200 last:border-0 last:pb-0">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-[#5F8D77]"></div>
                    <div><h4 className="font-bold text-stone-800 text-base mb-1 leading-none pt-0.5">{spot.name}</h4><p className="text-xs text-stone-500 leading-relaxed mt-1">{spot.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {item.type === 'food' && details.menu && (
            <div className="mb-8">
              <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-3 flex items-center gap-2"><Utensils size={14} /> 推薦菜單</h3>
              <div className="space-y-3">
                {details.menu.map((m, i) => (
                  <div key={i} className="bg-white p-3 rounded-xl border border-stone-200 shadow-sm flex justify-between items-center">
                    <div><div className="font-bold text-lg text-stone-800">{m.jp}</div><div className="text-xs text-stone-500 font-medium">{m.cn}</div>{m.romaji && <div className="text-[10px] text-orange-400 mt-1 font-mono">{m.romaji}</div>}</div>{m.desc && <div className="text-xs text-stone-400 text-right max-w-[40%]">{m.desc}</div>}
                  </div>
                ))}
              </div>
            </div>
          )}
          {details.story && <div className="mb-8 relative pl-4 border-l-2 border-stone-300"><h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-2">關於此處</h3><p className="text-sm text-stone-600 leading-7 whitespace-pre-line">{details.story}</p></div>}
          
          <div className="grid gap-3">
            <a 
              href={googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 bg-[#3A4D39] text-white py-3 rounded-xl font-bold shadow-lg active:scale-[0.98] transition-transform"
            >
              <Navigation size={18} /> Google Maps 路線導航
            </a>
            {details.website && <a href={details.website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-stone-800 text-white py-3 rounded-xl font-bold shadow-lg active:scale-[0.98] transition-transform"><Globe size={18} /> 官方網站</a>}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Weather Widget ---
const WeatherWidget = ({ weather }) => (
  <div className="bg-white/60 backdrop-blur-md rounded-3xl p-5 mb-6 shadow-sm border border-white/50">
    <div className="flex justify-between items-end mb-4">
      <div><h3 className="text-stone-500 text-xs font-bold tracking-widest mb-1">目前天氣</h3><div className="flex items-center gap-2"><span className="text-4xl font-light text-stone-800">{weather.current}</span><span className="text-sm text-stone-600 font-medium bg-white px-2 py-1 rounded-full shadow-sm">{weather.desc}</span></div></div><div className="text-[10px] text-stone-400 bg-stone-100 px-2 py-1 rounded">Open-Meteo</div>
    </div>
    <div className="flex justify-between items-center text-stone-600 overflow-x-auto no-scrollbar gap-4">
      {weather.hourly.map((temp, index) => (
        <div key={index} className="flex flex-col items-center gap-2 min-w-[40px]"><span className="text-[10px] text-stone-400">{index + 9}:00</span>{index % 2 === 0 ? <Sun size={18} className="text-orange-400" /> : <Cloud size={18} className="text-stone-400" />}<span className="text-sm font-bold">{temp}</span></div>
      ))}
    </div>
  </div>
);

// --- Timeline Card ---
const TimelineItem = ({ item, isLast, onSelect, prevLocation }) => {
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
  const hasDetails = !!item.details;
  
  const handleClick = () => { 
    if (hasDetails) {
        onSelect(item, prevLocation); 
    } else {
        // 如果沒有詳情，直接用 Google Search 找這個點
        window.open(getNavUrl(null, item.title), '_blank'); 
    }
  };

  return (
    <div className="flex gap-4 relative">
      <div className="flex flex-col items-center w-12 flex-shrink-0">
         <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 mb-1 z-10 border border-stone-200">{getIcon(item.type)}</div>
         {!isLast && <div className="w-[2px] flex-1 bg-stone-200 my-1"></div>}
      </div>
      <div onClick={handleClick} className={`flex-1 bg-white rounded-2xl p-4 mb-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-stone-50 transition-all ${hasDetails ? 'cursor-pointer active:scale-[0.98] hover:border-stone-200' : ''}`}>
        <div className="flex justify-between items-start mb-2"><div className="text-2xl font-light text-stone-800 tracking-tighter">{item.time}</div>{item.tag && <span className="text-[10px] font-bold text-white bg-stone-800 px-2 py-1 rounded-full">{item.tag}</span>}</div>
        <h3 className="text-lg font-bold text-stone-800 mb-1 leading-tight">{item.title}</h3>
        <p className="text-xs text-stone-500 leading-relaxed line-clamp-2">{item.desc}</p>
        {hasDetails ? <div className="mt-3 pt-3 border-t border-stone-50 flex items-center justify-between text-[10px] text-stone-400 font-bold"><span className="flex items-center gap-1 text-blue-500"><Info size={12} /> 查看攻略與菜單</span><ChevronRight size={12} /></div> : <div className="mt-3 pt-3 border-t border-stone-50 flex items-center gap-1 text-[10px] text-stone-300 font-bold"><Navigation size={10} /> 導航</div>}
      </div>
    </div>
  );
};

// --- VIEW 1: Home (行程主頁) ---
const HomeView = ({ onSelectActivity }) => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const currentDay = TRIP_DATA.days[selectedDayIndex];
  
  // 決定當天的預設起點 (飯店)
  const currentCityHotel = currentDay.location.includes("大阪") ? "ホテルヴィスキオ大阪 (Hotel Vischio Osaka)" : "ホテルヴィスキオ京都 (Hotel Vischio Kyoto)";

  return (
    <div className="animate-in fade-in duration-500">
      <div className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-40 pt-12 pb-4 border-b border-stone-100 max-w-md mx-auto">
        <div className="text-center mb-4"><h1 className="text-xs font-bold tracking-[0.2em] text-stone-400 uppercase">{TRIP_DATA.meta.title}</h1></div>
        <div className="flex overflow-x-auto no-scrollbar px-6 gap-6 pb-2 snap-x">
          {TRIP_DATA.days.map((day, idx) => (
            <button key={idx} onClick={() => setSelectedDayIndex(idx)} className={`flex flex-col items-center flex-shrink-0 min-w-[3rem] transition-all snap-center ${selectedDayIndex === idx ? 'opacity-100 scale-110' : 'opacity-40 scale-100'}`}>
              <span className="text-[10px] font-bold text-stone-400 uppercase mb-1">DAY {day.day}</span><span className={`text-xl font-serif font-bold ${selectedDayIndex === idx ? 'text-stone-800' : 'text-stone-400'}`}>{day.date}</span>{selectedDayIndex === idx && <div className="w-1 h-1 bg-stone-800 rounded-full mt-1"></div>}
            </button>
          ))}
        </div>
      </div>
      <div className="h-[160px]"></div>
      <div className="px-5 pb-24 key={selectedDayIndex}">
        <div className="relative rounded-[32px] overflow-hidden aspect-[4/3] shadow-xl mb-8 group">
          <img src={currentDay.heroImage} alt={currentDay.location} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white"><div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest bg-white/20 backdrop-blur px-2 py-1 rounded-lg w-fit mb-2"><MapPin size={10} /> {currentDay.location}</div><h2 className="text-2xl font-bold leading-tight shadow-black drop-shadow-lg">{currentDay.heroTitle}</h2><p className="text-xs text-white/80 mt-1 font-medium">{currentDay.fullDate}</p></div>
        </div>
        <WeatherWidget weather={currentDay.weather} />
        <div className="mt-2">
          {currentDay.activities.map((item, index) => {
            // ✨ 計算上一站邏輯 (升級版)
            // 優先抓取上一站的 address (如果有的話)，沒有才抓 title
            let prevLocation = index === 0 
                ? currentCityHotel 
                : (currentDay.activities[index - 1].details?.address || currentDay.activities[index - 1].title);
            
            // 例外處理：如果上一站是 Branch，則回溯到更前一站
            if (prevLocation === "下午行程選擇" && index >= 2) {
                const twoStepsBack = currentDay.activities[index - 2];
                prevLocation = twoStepsBack.details?.address || twoStepsBack.title;
            }

            if (item.type === 'branch') {
              return <BranchSection key={index} branchData={item} onSelectActivity={onSelectActivity} prevLocation={prevLocation} />;
            }
            return <TimelineItem key={index} item={item} isLast={index === currentDay.activities.length - 1} onSelect={(item, prev) => onSelectActivity(item, prev)} prevLocation={prevLocation} />;
          })}
        </div>
      </div>
    </div>
  );
};

// --- VIEW 2: Restaurant (餐廳清單) ---
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

// --- VIEW 3: Info (旅程資訊) ---
const InfoView = () => {
  const openMap = (keyword) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(keyword)}`, '_blank');
  };

  return (
    <div className="pt-16 px-5 pb-24 min-h-screen animate-in fade-in slide-in-from-right-4 duration-300">
      <h2 className="text-2xl font-serif font-bold text-stone-800 mb-6 flex items-center gap-2">
        <FileText className="text-blue-500" /> 旅程資訊
      </h2>

      {/* Flights */}
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

      {/* Hotels */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100 mb-6">
        <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-4 flex items-center gap-2">
          <Home size={14} /> 住宿資訊
        </h3>
        {TRIP_DATA.info.hotels.map((h, i) => (
          <div 
            key={i} 
            onClick={() => openMap(h.name)} 
            className="mb-4 last:mb-0 border-b last:border-0 border-stone-50 pb-3 last:pb-0 cursor-pointer hover:bg-stone-50 transition-colors rounded-lg p-2 -mx-2 active:scale-[0.98]"
          >
            <div className="flex justify-between items-start">
              <div className="font-bold text-stone-800 text-lg">{h.name}</div>
              <ExternalLink size={12} className="text-stone-300 mt-1" /> 
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

      {/* Reservations Placeholder */}
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

// --- Main App ---
export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedActivityState, setSelectedActivityState] = useState(null);

  const handleSelectActivity = (item, prevLocation) => {
      setSelectedActivityState({ item, prevLocation });
  };

  return (
    <div className="min-h-screen bg-[#F8F7F4] font-sans max-w-md mx-auto relative overflow-hidden text-stone-800">
      {selectedActivityState && (
        <ActivityModal 
            item={selectedActivityState.item} 
            prevLocation={selectedActivityState.prevLocation}
            onClose={() => setSelectedActivityState(null)} 
        />
      )}
      
      {activeTab === 'restaurant' && <RestaurantView />}
      {activeTab === 'home' && <HomeView onSelectActivity={handleSelectActivity} />}
      {activeTab === 'info' && <InfoView />}

      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-stone-200 px-6 py-2 pb-5 z-50 max-w-md mx-auto flex justify-around items-end shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]">
        <button onClick={() => setActiveTab('restaurant')} className={`flex flex-col items-center gap-1 p-2 transition-all duration-300 ${activeTab === 'restaurant' ? 'text-orange-500 -translate-y-1' : 'text-stone-300 hover:text-stone-400'}`}>
          <Utensils size={24} strokeWidth={activeTab === 'restaurant' ? 2.5 : 2} />
          <span className="text-[10px] font-bold tracking-widest">餐廳</span>
        </button>
        <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center gap-1 p-2 transition-all duration-300 ${activeTab === 'home' ? 'text-stone-800 -translate-y-2 scale-110' : 'text-stone-300 hover:text-stone-400'}`}>
          <div className={`p-3 rounded-full ${activeTab === 'home' ? 'bg-stone-800 text-white shadow-lg' : ''}`}>
             <Home size={24} strokeWidth={activeTab === 'home' ? 2.5 : 2} />
          </div>
          {activeTab !== 'home' && <span className="text-[10px] font-bold tracking-widest">主頁</span>}
        </button>
        <button onClick={() => setActiveTab('info')} className={`flex flex-col items-center gap-1 p-2 transition-all duration-300 ${activeTab === 'info' ? 'text-blue-500 -translate-y-1' : 'text-stone-300 hover:text-stone-400'}`}>
          <FileText size={24} strokeWidth={activeTab === 'info' ? 2.5 : 2} />
          <span className="text-[10px] font-bold tracking-widest">資訊</span>
        </button>
      </div>
    </div>
  );
}