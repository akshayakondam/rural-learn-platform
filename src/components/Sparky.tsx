import React from 'react';
import { motion } from 'motion/react';

interface SparkyProps {
  message?: string;
  emotion?: 'happy' | 'thinking' | 'excited' | 'sad';
  size?: 'sm' | 'md' | 'lg';
}

export const Sparky: React.FC<SparkyProps> = ({ message, emotion = 'happy', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-48 h-48',
    lg: 'w-64 h-64'
  };

  const getEmotionColor = () => {
    switch (emotion) {
      case 'excited': return '#FFD700';
      case 'thinking': return '#4169E1';
      case 'sad': return '#A9A9A9';
      default: return '#FFD700';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center relative">
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="absolute -top-20 bg-white p-4 rounded-2xl shadow-xl border-2 border-yellow-400 max-w-xs text-center z-10"
        >
          <p className="text-sm font-medium text-gray-800">{message}</p>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b-2 border-r-2 border-yellow-400 rotate-45" />
        </motion.div>
      )}
      
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: emotion === 'excited' ? [0, 5, -5, 0] : 0
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={`${sizeClasses[size]} relative`}
      >
        {/* Robot Body */}
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
          {/* Antenna */}
          <motion.line
            x1="100" y1="40" x2="100" y2="20"
            stroke="#333" strokeWidth="4"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <motion.circle
            cx="100" cy="15" r="8"
            fill={getEmotionColor()}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />

          {/* Head */}
          <rect x="50" y="40" width="100" height="80" rx="20" fill="#E5E7EB" stroke="#333" strokeWidth="4" />
          
          {/* Eyes */}
          <motion.circle
            cx="80" cy="75" r="10"
            fill="#333"
            animate={emotion === 'happy' ? { scaleY: [1, 0.1, 1] } : {}}
            transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
          />
          <motion.circle
            cx="120" cy="75" r="10"
            fill="#333"
            animate={emotion === 'happy' ? { scaleY: [1, 0.1, 1] } : {}}
            transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
          />

          {/* Mouth */}
          {emotion === 'happy' || emotion === 'excited' ? (
            <path d="M 80 100 Q 100 115 120 100" fill="none" stroke="#333" strokeWidth="4" strokeLinecap="round" />
          ) : emotion === 'thinking' ? (
            <line x1="85" y1="105" x2="115" y2="105" stroke="#333" strokeWidth="4" strokeLinecap="round" />
          ) : (
            <path d="M 80 110 Q 100 95 120 110" fill="none" stroke="#333" strokeWidth="4" strokeLinecap="round" />
          )}

          {/* Body */}
          <rect x="60" y="125" width="80" height="60" rx="15" fill="#D1D5DB" stroke="#333" strokeWidth="4" />
          
          {/* Screen on Chest */}
          <rect x="75" y="140" width="50" height="30" rx="5" fill="#9CA3AF" />
          <motion.circle
            cx="100" cy="155" r="5"
            fill={getEmotionColor()}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>
      </motion.div>
    </div>
  );
};
