
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const ScreenContainer: React.FC<{ children: React.ReactNode; bgClass?: string; isPreschool?: boolean; className?: string }> = ({ children, bgClass = "bg-slate-950", isPreschool, className = "" }) => {
  const stars = useMemo(() => [...Array(45)].map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    top: Math.random() * 100 + '%',
    left: Math.random() * 100 + '%',
    duration: Math.random() * 4 + 2,
    delay: Math.random() * 5
  })), []);

  const clouds = useMemo(() => [...Array(6)].map((_, i) => ({
    id: i,
    top: (Math.random() * 50) + 5 + '%',
    duration: (Math.random() * 80) + 60,
    delay: -(Math.random() * 100),
    scale: 0.6 + Math.random()
  })), []);

  return (
    <div className={`relative min-h-screen w-full flex flex-col items-center p-0 ${isPreschool ? 'preschool-bg' : bgClass} ${className}`}>
      {/* Dynamic Decor Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {!isPreschool ? (
          stars.map(star => (
            <div 
              key={star.id} 
              className="sparkle-node absolute rounded-full bg-amber-100/30"
              style={{
                width: star.size + 'px',
                height: star.size + 'px',
                top: star.top,
                left: star.left,
                animationDuration: star.duration + 's',
                animationDelay: star.delay + 's'
              }}
            />
          ))
        ) : (
          clouds.map(cloud => (
            <div 
              key={cloud.id} 
              className="cloud-drift opacity-25 text-[15rem]"
              style={{
                top: cloud.top,
                animationDuration: cloud.duration + 's',
                animationDelay: cloud.delay + 's',
                transform: `scale(${cloud.scale})`
              }}
            >
              ☁️
            </div>
          ))
        )}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col px-4 md:px-6">
        {children}
      </div>
    </div>
  );
};

export const Button: React.FC<{ 
  onClick?: () => void; 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'house' | 'danger' | 'preschool' | 'magical';
  className?: string;
  houseColor?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}> = ({ onClick, children, variant = 'primary', className = '', houseColor, disabled = false, type = 'button' }) => {
  const variants = {
    primary: 'bg-gradient-to-b from-amber-400 to-amber-700 text-amber-950 border-2 border-amber-300 shadow-[0_6px_0_#92400e] active:shadow-none active:translate-y-1.5 font-magic rounded-2xl',
    secondary: 'bg-white/10 backdrop-blur-lg text-amber-100 border border-amber-400/40 hover:bg-white/20 font-magic rounded-2xl',
    house: houseColor || 'bg-blue-600 text-white font-magic rounded-2xl',
    danger: 'bg-red-800 text-white border-2 border-red-500 font-magic rounded-2xl',
    preschool: 'bg-gradient-to-b from-pink-400 to-pink-600 text-white rounded-[2rem] border-4 border-white shadow-[0_8px_0_#be185d] active:shadow-none active:translate-y-2 font-preschool text-2xl',
    magical: 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-500 hover:to-indigo-500 font-magic rounded-2xl shadow-lg',
  };

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.06, y: -3 } : {}}
      whileTap={!disabled ? { scale: 0.94 } : {}}
      type={type}
      disabled={disabled}
      onClick={(e) => {
        if (disabled) return;
        e.stopPropagation();
        onClick?.();
      }}
      className={`px-10 py-4 font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant as keyof typeof variants]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export const Card: React.FC<{ children: React.ReactNode; className?: string; type?: 'default' | 'parchment' | 'preschool'; onClick?: () => void }> = ({ children, className = '', type = 'default', onClick }) => {
  if (type === 'parchment') {
    return (
      <motion.div 
        onClick={onClick}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={onClick ? { scale: 1.03, y: -8, rotate: 1, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)" } : {}}
        className={`parchment border-[6px] md:border-[10px] border-[#433422] rounded-xl p-6 md:p-8 shadow-2xl relative ${onClick ? 'cursor-pointer' : ''} ${className}`}
      >
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/old-map.png')]" />
        {children}
      </motion.div>
    );
  }

  if (type === 'preschool') {
    return (
      <motion.div
        onClick={onClick}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={onClick ? { scale: 1.07, rotate: -1.5, y: -10 } : {}}
        className={`bg-white/98 backdrop-blur-xl border-[8px] md:border-[12px] border-blue-100 rounded-[2rem] md:rounded-[4rem] p-6 md:p-10 shadow-[0_15px_0_rgba(191,219,254,0.3)] md:shadow-[0_30px_0_rgba(191,219,254,0.3)] ${onClick ? 'cursor-pointer' : ''} ${className}`}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div 
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-slate-900/90 backdrop-blur-3xl border-2 border-amber-400/20 rounded-[2rem] md:rounded-[3rem] p-6 md:p-8 shadow-2xl ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const CharacterGuide: React.FC<{ guide: any; isPreschool?: boolean }> = ({ guide, isPreschool }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ x: 300, opacity: 0, scale: 0.4 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{ type: "spring", damping: 10, stiffness: 60 }}
          className="fixed bottom-12 right-12 z-[150] flex items-end gap-10 max-w-[400px] pointer-events-none"
        >
          <div className={`${isPreschool ? 'bg-white border-blue-400 text-blue-900 rounded-[3rem] p-8 shadow-[0_20px_0_#dbeafe]' : 'bg-slate-900/98 border-amber-600 text-amber-50 rounded-3xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.9)]'} backdrop-blur-2xl border-4 pointer-events-auto relative`}>
            {/* Balloon Tail */}
            <div className={`absolute bottom-10 -right-4 w-8 h-8 transform rotate-45 border-r-4 border-b-4 ${isPreschool ? 'bg-white border-blue-400' : 'bg-slate-900 border-amber-600'}`}></div>
            
            <h4 className={`${isPreschool ? 'font-preschool text-2xl mb-2 text-blue-600' : 'font-magic text-base font-bold text-amber-400 mb-2 uppercase tracking-[0.2em]'}`}>{guide.name}</h4>
            <p className={`${isPreschool ? 'font-preschool text-3xl leading-tight' : 'font-medieval text-lg italic leading-relaxed text-white/90'}`}>"{guide.tip}"</p>
          </div>
          <motion.div 
            animate={{ y: [0, -25, 0], rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="text-[12rem] pointer-events-auto drop-shadow-[0_20px_50px_rgba(0,0,0,1)] hover:scale-125 transition-transform cursor-pointer"
          >
            {guide.emoji}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const Header: React.FC<{ 
  title: string; 
  onBack: () => void; 
  onHome: () => void; 
  onReload?: () => void; 
  onSwitchClass?: () => void;
  onSocial?: () => void;
  isPreschool?: boolean;
}> = ({ title, onBack, onHome, onReload, onSwitchClass, onSocial, isPreschool }) => (
  <div className={`flex items-center justify-between px-3 md:px-6 py-3 ${isPreschool ? 'bg-white/90 border-pink-200' : 'bg-slate-900/90 border-amber-500/30'} backdrop-blur-md border-b-4 shadow-xl rounded-b-[1.5rem] md:rounded-b-[2rem] sticky top-0 z-50 w-full gap-2`}>
    <div className="flex items-center gap-1 md:gap-3 flex-shrink-0">
      <button onClick={onBack} className="p-2 md:p-3 text-2xl md:text-3xl hover:scale-125 transition-transform active:scale-90 touch-none" title="Go Back">⬅️</button>
      {onReload && <button onClick={onReload} className="p-2 md:p-3 text-2xl md:text-3xl hover:scale-125 transition-transform active:scale-90 touch-none" title="Reload App">🔄</button>}
    </div>
    <h1 className={`text-base md:text-3xl font-black truncate px-1 bangers tracking-widest uppercase flex-1 text-center ${isPreschool ? 'text-pink-600' : 'text-amber-400 drop-shadow-md'}`}>{title}</h1>
    <div className="flex items-center gap-1 md:gap-3 flex-shrink-0">
      {onSocial && <button onClick={onSocial} className="p-2 md:p-3 text-2xl md:text-3xl hover:scale-125 transition-transform active:scale-90 touch-none" title="Friends">👥</button>}
      {onSwitchClass && <button onClick={onSwitchClass} className="p-2 md:p-3 text-2xl md:text-3xl hover:scale-125 transition-transform active:scale-90 touch-none" title="Switch Class">🏫</button>}
      <button onClick={onHome} className="p-2 md:p-3 text-2xl md:text-3xl hover:scale-125 transition-transform active:scale-90 touch-none" title="Go Home">🏠</button>
    </div>
  </div>
);

export const AudioPlayer: React.FC<{ text: string; lang: 'en-US' | 'te-IN' | 'hi-IN' }> = ({ text, lang }) => {
  const play = () => {
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.lang = lang;
    window.speechSynthesis.speak(msg);
  };

  return (
    <button onClick={play} className="p-3 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors shadow-sm">
      🔊
    </button>
  );
};

export const ProgressBar: React.FC<{ progress: number; color?: string; className?: string }> = ({ progress, color = 'bg-green-500', className = '' }) => (
  <div className={`w-full h-4 bg-gray-200 rounded-full overflow-hidden ${className}`}>
    <div 
      className={`h-full ${color} transition-all duration-500 ease-out`} 
      style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
    />
  </div>
);
