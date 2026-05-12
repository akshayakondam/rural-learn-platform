
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserProfile, Lesson, ClassLevel, HouseName } from '../types';
import { HOUSES, HOGWARTS_MAP_STRUCTURE, SYLLABUS } from '../constants';
import { Header, Button, Card, ScreenContainer } from './UI';
import { Star, Lock, CheckCircle2, Trophy, Play, ArrowLeft } from 'lucide-react';

export const HogwartsMap: React.FC<{ onLocationClick: (loc: string, subject?: string) => void, profile: UserProfile | null, onReload: () => void, onSwitchClass: () => void, onHome: () => void, onBack: () => void, onSocial: () => void }> = ({ onLocationClick, profile, onReload, onSwitchClass, onHome, onBack, onSocial }) => {
  if (!profile) return null;
  const house = HOUSES[profile.house || ''];
  const classLevel = profile.classLevel;

  return (
    <ScreenContainer>
      <Header title="Hogwarts Castle" onBack={onBack} onHome={onHome} onReload={onReload} onSwitchClass={onSwitchClass} onSocial={onSocial} />
      
      <div className="z-10 text-center my-8 md:my-12 px-4 w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 bg-black/60 backdrop-blur-xl px-6 md:px-10 py-4 rounded-3xl md:rounded-full border-4 border-amber-500/30 max-w-fit mx-auto shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <span className="text-amber-400 font-black bangers tracking-widest uppercase text-xl md:text-3xl">{profile.studentName}</span>
          <span className="hidden md:block text-white/20 text-3xl">|</span>
          <span className="text-white font-black bangers tracking-widest uppercase text-xl md:text-3xl">{profile.classLevel}</span>
          <span className="hidden md:block text-white/20 text-3xl">|</span>
          <span className={`bg-gradient-to-r ${house?.color} bg-clip-text text-transparent font-black bangers tracking-widest uppercase text-xl md:text-3xl`}>{profile.house}</span>
        </div>
      </div>
      
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 pb-32 z-10 px-6">
        {HOGWARTS_MAP_STRUCTURE.filter(loc => !loc.classes || loc.classes.includes(classLevel)).map(loc => (
          <Card
            key={loc.id}
            type="parchment"
            onClick={() => onLocationClick('subject_path', loc.subject)}
            className="p-8 md:p-12 flex flex-col items-center justify-center text-center cursor-pointer group relative overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-7xl md:text-[8rem] lg:text-[10rem] mb-6 md:mb-8 drop-shadow-2xl group-hover:scale-110 transition-transform duration-500">{loc.icon}</span>
            <span className="font-black bangers tracking-widest text-2xl md:text-4xl lg:text-5xl uppercase text-indigo-950 mb-1 md:mb-2">{loc.name}</span>
            <span className="text-xs md:text-base uppercase tracking-[0.4em] text-amber-700 font-black">{loc.subject}</span>
          </Card>
        ))}
        
        

        {/* Chatbot Tower */}
        <Card
          type="parchment"
          onClick={() => onLocationClick('chatbot_tower')}
          className="p-8 md:p-12 flex flex-col items-center justify-center text-center cursor-pointer group relative overflow-hidden"
        >
          <span className="text-7xl md:text-[8rem] lg:text-[10rem] mb-6 md:mb-8 drop-shadow-2xl group-hover:scale-110 transition-transform duration-500">🦉</span>
          <span className="font-black bangers tracking-widest text-2xl md:text-4xl lg:text-5xl uppercase text-indigo-950 mb-1 md:mb-2">Help Hollow</span>
          <span className="text-xs md:text-base uppercase tracking-[0.4em] text-amber-700 font-black">Ask Sparky</span>
        </Card>
      </div>
    </ScreenContainer>
  );
};

export const SubjectPath: React.FC<{ subject: string, profile: UserProfile | null, onLessonSelect: (l: Lesson) => void, onBack: () => void }> = ({ subject, profile, onLessonSelect, onBack }) => {
  if (!profile) return null;
  const classLevel = profile.classLevel;
  const board = profile.board || 'CBSE';
  const house = HOUSES[profile.house || ''];
  
  let displaySubject = subject;
  let lessons: Lesson[] = [];
  
  if (subject === 'Language') {
    const hindiLessons = SYLLABUS[classLevel]?.[board]?.['Hindi'] || [];
    const teluguLessons = SYLLABUS[classLevel]?.[board]?.['Telugu'] || [];
    lessons = [...hindiLessons, ...teluguLessons];
    displaySubject = 'Hindi & Telugu';
  } else {
    lessons = SYLLABUS[classLevel]?.[board]?.[subject] || [];
  }

  const completedLessons = profile.progress.lessonsCompleted;

  return (
    <ScreenContainer>
      <Header title={`${displaySubject} Path`} onBack={onBack} onHome={onBack} />
      
      <div className="flex-1 overflow-y-auto relative py-16 md:py-32 px-4 md:px-6 w-full">
        <div className="max-w-2xl mx-auto relative flex flex-col items-center">
          {/* Path Line */}
          <div className="absolute top-0 bottom-0 w-4 md:w-8 bg-white/10 rounded-full border-4 border-dashed border-amber-500/20"></div>

          {lessons.length > 0 ? (
            lessons.map((lesson, index) => {
              const isCompleted = completedLessons.includes(lesson.id);
              const unlockedLessons = profile.progress.unlockedLessons || [];
              const isUnlocked = unlockedLessons.includes(lesson.id);
              const isPrevCompleted = index === 0 || completedLessons.includes(lessons[index-1].id);
              const isLocked = !isCompleted && !isUnlocked && !isPrevCompleted;
              const stars = profile.progress.lessonStars?.[lesson.id] || 0;
              
              // Responsive offset
              const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
              const offset = isMobile ? (index % 2 === 0 ? 40 : -40) : (index % 2 === 0 ? 100 : -100);

              return (
                <motion.div
                  key={lesson.id}
                  initial={{ opacity: 0, x: offset * 1.5 }}
                  whileInView={{ opacity: 1, x: offset }}
                  viewport={{ once: true }}
                  className="relative flex flex-col items-center my-8 md:my-16 w-full"
                >
                  <motion.div
                    whileHover={!isLocked ? { scale: 1.2, rotate: 5 } : {}}
                    whileTap={!isLocked ? { scale: 0.9 } : {}}
                    onClick={() => !isLocked && onLessonSelect(lesson)}
                    className={`w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col items-center justify-center cursor-pointer transition-all border-b-[8px] md:border-b-[12px] active:border-b-0 active:translate-y-2 z-10 relative ${
                      isLocked 
                        ? 'bg-slate-800 border-slate-900 opacity-60 grayscale' 
                        : isCompleted 
                          ? 'bg-emerald-500 border-emerald-700 text-white' 
                          : `bg-gradient-to-br ${house?.color || 'from-indigo-600 to-purple-700'} border-white/20 text-white shadow-[0_0_40px_rgba(255,255,255,0.2)]`
                    }`}
                  >
                    <span className="text-4xl md:text-8xl">
                      {isCompleted ? '⭐' : isLocked ? '🔒' : '📖'}
                    </span>
                    
                    {isCompleted && (
                      <div className="absolute -top-3 -right-3 md:-top-6 md:-right-6 flex bg-amber-400 rounded-full p-1 md:p-2 border-2 md:border-4 border-white shadow-2xl">
                        <Trophy className="text-indigo-900 w-4 h-4 md:w-8 md:h-8" />
                      </div>
                    )}
                  </motion.div>

                  <div className={`mt-4 md:mt-6 bg-black/70 backdrop-blur-xl px-4 md:px-10 py-2 md:py-3 rounded-2xl md:rounded-3xl border-2 md:border-4 ${isLocked ? 'border-white/10' : 'border-amber-500/40'} shadow-2xl max-w-[180px] md:max-w-none text-center`}>
                    <span className={`font-black bangers tracking-widest uppercase text-sm md:text-3xl ${isLocked ? 'text-white/40' : 'text-amber-400'} line-clamp-2 md:line-clamp-none`}>
                      {lesson.title}
                    </span>
                  </div>

                  {isCompleted && (
                    <div className="flex gap-1 md:gap-2 mt-2 md:mt-4">
                      {[1, 2, 3].map(s => (
                        <Star key={s} size={isMobile ? 16 : 24} fill={s <= stars ? "#F59E0B" : "transparent"} className={s <= stars ? "text-amber-500" : "text-white/10"} />
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })
          ) : (
            <Card type="parchment" className="p-10 md:p-20 text-center max-w-xl mx-4">
              <p className="text-2xl md:text-4xl font-black bangers tracking-widest text-indigo-950 uppercase mb-4">No magic lessons found here yet!</p>
              <p className="text-amber-800 text-lg md:text-xl font-bold">Check back later for new spells.</p>
            </Card>
          )}
        </div>
      </div>
    </ScreenContainer>
  );
};
