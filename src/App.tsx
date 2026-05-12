
import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  auth, db, signInWithPopup, googleProvider, onAuthStateChanged, signOut, 
  doc, getDoc, setDoc, updateDoc, handleFirestoreError, OperationType,
  signInWithEmailAndPassword, createUserWithEmailAndPassword,
  collection, addDoc, query, where, onSnapshot, orderBy, limit, getDocs, serverTimestamp
} from './firebase';
import { UserProfile, UserProgress, Role, Language, ClassLevel, Board, HouseName, Lesson, Avatar, AvatarCategory, Message } from './types';
import { SYLLABUS, HOUSES, PRESCHOOL_AVATARS, CLASS_1_5_AVATARS, MOCK_STUDENTS, PRESCHOOL_MAP_STRUCTURE, HOGWARTS_MAP_STRUCTURE } from './constants';
import { Button, Card, Header, AudioPlayer, ProgressBar, ScreenContainer } from './components/UI';
import { VideoPlayer } from './components/VideoPlayer';
import { HogwartsMap, SubjectPath } from './components/Hogwarts';
import { askMentor } from './services/geminiService';
import { Star, Lock, CheckCircle2, Trophy, Play, ArrowLeft, Home, MessageCircle, Search, UserPlus, UserCheck, Send, UserMinus, Users, Check, X, Sparkles, Loader2, Clock } from 'lucide-react';

const App: React.FC = () => {
  const [screen, setScreen] = useState<string>('splash');
  const [history, setHistory] = useState<string[]>(['splash']);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [currentUnit, setCurrentUnit] = useState<any | null>(null);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [currentSubject, setCurrentSubject] = useState<string | null>(null);
  const [chatHistory, setChatHistory] = useState<{ role: string, text: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFriend, setSelectedFriend] = useState<UserProfile | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            const p = userDoc.data() as UserProfile;
            setProfile(p);
            setSelectedRole(p.role);
            
            // Only auto-navigate if we're not in the middle of registration
            setScreen(prev => {
              if (prev === 'register') return prev;
              
              if (p.role === 'Teacher') return 'teacher_dashboard';
              if (p.role === 'Parent') return 'parent_dashboard';
              
              // Onboarding flow for Students
              if (!p.language) return 'language_selection';
              if (!p.classLevel) return 'class_selection';
              
              if (p.classLevel === 'Preschool') {
                if (!p.progress.currentAvatar) return 'preschool_avatar_selection';
                return 'preschool_map';
              } else {
                // Class 1-5 flow
                if (!p.board) return 'board_selection';
                if (!p.house) return 'sorting_ceremony';
                if (!p.progress.currentAvatar) return 'class_avatar_selection';
                return 'hogwarts_map';
              }
            });
          } else {
            // New user from Google Login
            setProfile(p => p ? { ...p, uid: user.uid, id: user.uid } as UserProfile : { uid: user.uid, id: user.uid } as unknown as UserProfile);
            setScreen(prev => {
              if (prev === 'register') return prev;
              if (!selectedRole) return 'role_selection';
              return prev;
            });
          }
        } catch (error) {
          console.error("Error fetching user profile:", error);
        }
      } else {
        setProfile(null);
        setScreen(prev => {
          if (prev === 'login' || prev === 'register' || prev === 'role_selection' || prev === 'splash') return prev;
          return 'splash';
        });
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [selectedRole]);

  useEffect(() => {
    if (!profile?.uid) return;
    const updateLastSeen = () => {
      updateDoc(doc(db, 'users', profile.uid), { lastSeen: new Date().toISOString() });
    };
    updateLastSeen();
    const interval = setInterval(updateLastSeen, 60000);
    return () => clearInterval(interval);
  }, [profile?.uid]);

  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!profile?.uid) return;
    try {
      const newProfile = { ...profile, ...updates };
      setProfile(newProfile);
      await updateDoc(doc(db, 'users', profile.uid), updates);
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `users/${profile.uid}`);
    }
  };

  const saveProfile = async (newProfile: UserProfile) => {
    try {
      setProfile(newProfile);
      await setDoc(doc(db, 'users', newProfile.uid), newProfile);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, `users/${newProfile.uid}`);
    }
  };

  const navigateTo = (newScreen: string) => {
    setHistory(prev => [...prev, screen]);
    setScreen(newScreen);
  };
  
  // Expose navigateTo to window for sub-components
  useEffect(() => {
    (window as any).navigateTo = navigateTo;
  }, [screen]);

  const goBack = () => {
    if (history.length > 1) {
      const last = history[history.length - 1];
      setHistory(prev => prev.slice(0, -1));
      setScreen(last);
    }
  };

  const goHome = () => {
    if (profile?.classLevel === 'Preschool') setScreen('preschool_map');
    else setScreen('hogwarts_map');
    setHistory(['splash']);
  };

  const handleReload = () => {
    signOut(auth).then(() => {
      window.location.href = '/';
    });
  };

  const handleSwitchClass = () => {
    navigateTo('class_selection');
  };

  const handleSocial = () => {
    navigateTo('social');
  };

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center magic-bg text-white">
        <div className="text-4xl animate-pulse bangers tracking-widest">Loading Magic...</div>
      </div>
    );
  }

  // --- Screens ---

  if (screen === 'splash') {
    return (
      <ScreenContainer>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="min-h-screen flex flex-col items-center justify-center text-white p-6 md:p-10 text-center cursor-pointer w-full" 
          onClick={() => navigateTo('role_selection')}
        >
          <motion.div 
            animate={{ 
              y: [0, -40, 0],
              rotate: [0, 5, -5, 0],
              filter: ["brightness(1) drop-shadow(0 0 20px rgba(255,255,255,0.3))", "brightness(1.5) drop-shadow(0 0 50px rgba(255,255,255,0.6))", "brightness(1) drop-shadow(0 0 20px rgba(255,255,255,0.3))"]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-[12rem] md:text-[18rem] mb-12"
          >
            🎒
          </motion.div>
          <h1 className="bangers text-8xl md:text-[12rem] mb-8 tracking-[0.2em] text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.5)] uppercase">Rural Learn</h1>
          <motion.p 
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-3xl md:text-5xl font-magic tracking-[0.4em] uppercase text-amber-400 drop-shadow-lg"
          >
            Tap to Awaken the Magic
          </motion.p>
        </motion.div>
      </ScreenContainer>
    );
  }

  if (screen === 'role_selection') {
    return (
      <ScreenContainer bgClass="magic-bg">
        <div className="absolute top-6 left-6 z-20">
          <Button variant="secondary" onClick={() => navigateTo('splash')} className="flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" /> Back
          </Button>
        </div>
        <h2 className="text-5xl md:text-8xl font-magic text-white text-center mt-12 mb-16 uppercase tracking-[0.2em] drop-shadow-[0_0_15px_white] bangers">Identify Yourself</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl mb-20">
          <Card type="parchment" className="p-12 text-center cursor-pointer" onClick={() => { setSelectedRole('Student'); navigateTo('login'); }}>
            <div className="text-8xl mb-6">🧒</div>
            <h3 className="text-4xl font-black bangers uppercase tracking-widest">Student</h3>
          </Card>
          <Card type="parchment" className="p-12 text-center cursor-pointer" onClick={() => { setSelectedRole('Teacher'); navigateTo('login'); }}>
            <div className="text-8xl mb-6">👩‍🏫</div>
            <h3 className="text-4xl font-black bangers uppercase tracking-widest">Teacher</h3>
          </Card>
          <Card type="parchment" className="p-12 text-center cursor-pointer" onClick={() => { setSelectedRole('Parent'); navigateTo('login'); }}>
            <div className="text-8xl mb-6">👨‍👩‍👧</div>
            <h3 className="text-4xl font-black bangers uppercase tracking-widest">Parent</h3>
          </Card>
        </div>
      </ScreenContainer>
    );
  }

  if (screen === 'login') {
    return <LoginScreen selectedRole={selectedRole} onRegister={() => navigateTo('register')} onComplete={() => {}} />;
  }

  if (screen === 'register') {
    return <RegisterScreen 
      selectedRole={selectedRole} 
      onBack={() => navigateTo('login')} 
      onComplete={(p) => {
        setProfile(p);
        // Automatic navigation based on role and onboarding status
        if (p.role === 'Teacher') setScreen('teacher_dashboard');
        else if (p.role === 'Parent') setScreen('parent_dashboard');
        else navigateTo('language_selection');
      }} 
    />;
  }

  if (screen === 'teacher_dashboard') {
    return <TeacherDashboard profile={profile} onLogout={() => signOut(auth)} onReload={handleReload} onSwitchClass={handleSwitchClass} onHome={goHome} onBack={goBack} />;
  }

  if (screen === 'parent_dashboard') {
    return <ParentDashboard profile={profile} onLogout={() => signOut(auth)} onReload={handleReload} onSwitchClass={handleSwitchClass} onHome={goHome} onBack={goBack} />;
  }

  if (screen === 'language_selection') {
    return (
      <ScreenContainer>
        <div className="absolute top-6 left-6 z-20">
          <Button variant="secondary" onClick={() => signOut(auth)} className="flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" /> Logout
          </Button>
        </div>
        <h2 className="text-5xl md:text-8xl font-magic text-white text-center mt-12 mb-16 uppercase tracking-[0.2em] drop-shadow-[0_0_15px_white] bangers">Choose Your Language</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl mb-20">
          <Card type="parchment" className="p-12 text-center cursor-pointer" onClick={async () => { await updateProfile({ language: 'English' }); navigateTo('class_selection'); }}>
            <div className="text-8xl mb-6">🇬🇧</div>
            <h3 className="text-4xl font-black bangers uppercase tracking-widest">English</h3>
          </Card>
          <Card type="parchment" className="p-12 text-center cursor-pointer" onClick={async () => { await updateProfile({ language: 'Hindi' }); navigateTo('class_selection'); }}>
            <div className="text-8xl mb-6">🇮🇳</div>
            <h3 className="text-4xl font-black bangers uppercase tracking-widest">हिन्दी</h3>
          </Card>
          <Card type="parchment" className="p-12 text-center cursor-pointer" onClick={async () => { await updateProfile({ language: 'Telugu' }); navigateTo('class_selection'); }}>
            <div className="text-8xl mb-6">🇮🇳</div>
            <h3 className="text-4xl font-black bangers uppercase tracking-widest">తెలుగు</h3>
          </Card>
        </div>
      </ScreenContainer>
    );
  }

  if (screen === 'class_selection') {
    return <ClassSelectionScreen onSelect={async (lvl) => {
      if (!profile) return;
      const board = profile.board || 'Common';
      const syllabus = SYLLABUS[lvl]?.[board];
      const initialUnlocked: string[] = [];
      if (syllabus) {
        if (lvl === 'Preschool') {
          const firstUnit = Array.isArray(syllabus) ? syllabus[0] : null;
          if (firstUnit?.lessons?.[0]) initialUnlocked.push(firstUnit.lessons[0].id);
        } else {
          Object.values(syllabus).forEach((lessons: any) => {
            if (Array.isArray(lessons) && lessons[0]?.id) {
              initialUnlocked.push(lessons[0].id);
            }
          });
        }
      }
      
      const updates = { 
        classLevel: lvl, 
        progress: { 
          ...profile.progress, 
          unlockedLessons: initialUnlocked 
        } 
      };
      
      await updateProfile(updates);
      
      if (lvl === 'Preschool') navigateTo('preschool_avatar_selection');
      else navigateTo('board_selection');
    }} />;
  }

  if (screen === 'preschool_avatar_selection') {
    return <AvatarSelectionScreen pool={PRESCHOOL_AVATARS} onSelect={async (id) => {
      if (!profile) return;
      await updateProfile({ 
        progress: { 
          ...profile.progress, 
          currentAvatar: id, 
          unlockedAvatars: [...(profile.progress.unlockedAvatars || []), id] 
        } 
      });
      navigateTo('preschool_map');
    }} profile={profile!} isPreschool={true} onBack={goBack} />;
  }

  if (screen === 'board_selection') {
    return (
      <ScreenContainer>
        <h2 className="text-5xl md:text-8xl font-magic text-white text-center mt-12 mb-16 uppercase tracking-[0.2em] drop-shadow-[0_0_15px_white] bangers">Select Your Syllabus</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl mb-20">
          <Card type="parchment" className="p-12 text-center cursor-pointer" onClick={async () => { await updateProfile({ board: 'CBSE' }); navigateTo('sorting_ceremony'); }}>
            <div className="text-8xl mb-6">📜</div>
            <h3 className="text-4xl font-black bangers uppercase tracking-widest">CBSE</h3>
          </Card>
          <Card type="parchment" className="p-12 text-center cursor-pointer" onClick={async () => { await updateProfile({ board: 'Telangana State Board' }); navigateTo('sorting_ceremony'); }}>
            <div className="text-8xl mb-6">🏺</div>
            <h3 className="text-4xl font-black bangers uppercase tracking-widest">Telangana State</h3>
          </Card>
        </div>
      </ScreenContainer>
    );
  }

  if (screen === 'sorting_ceremony') {
    return <SortingCeremony language={profile?.language || 'English'} onComplete={async (house) => {
      await updateProfile({ house });
      navigateTo('class_avatar_selection');
    }} onBack={() => navigateTo('class_selection')} />;
  }

  if (screen === 'class_avatar_selection') {
    return <AvatarSelectionScreen pool={CLASS_1_5_AVATARS} onSelect={async (id) => {
      if (!profile) return;
      await updateProfile({ 
        progress: { 
          ...profile.progress, 
          currentAvatar: id, 
          unlockedAvatars: [...(profile.progress.unlockedAvatars || []), id] 
        } 
      });
      navigateTo('hogwarts_map');
    }} profile={profile!} isPreschool={false} onBack={goBack} />;
  }

  if (screen === 'preschool_map') {
    return <PreschoolMap onUnitClick={(unit) => { setCurrentUnit(unit); navigateTo('unit_detail'); }} onGateClick={() => navigateTo('candy_gate_intro')} profile={profile} onAvatarClick={() => navigateTo('student_dashboard')} onReload={handleReload} onSwitchClass={handleSwitchClass} onHome={goHome} onBack={goBack} onSocial={handleSocial} />;
  }

  if (screen === 'candy_gate_intro') {
    return (
      <ScreenContainer isPreschool={true}>
        <div className="flex flex-col items-center justify-center p-6 md:p-10 text-center w-full min-h-screen">
          <motion.div animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="text-[8rem] md:text-[12rem] mb-8 md:mb-12 drop-shadow-2xl">🍭</motion.div>
          <h2 className="text-4xl md:text-8xl font-black bangers tracking-widest text-pink-600 mb-6 md:mb-8 uppercase drop-shadow-lg">Welcome to Candyland!</h2>
          <p className="text-2xl md:text-4xl text-pink-500 mb-12 md:mb-16 font-bold max-w-2xl">Get ready for a magical learning adventure full of sweets and fun!</p>
          <Button variant="magical" className="px-12 md:px-20 py-6 md:py-10 text-2xl md:text-4xl uppercase bangers shadow-2xl" onClick={() => {
            const firstUnit = SYLLABUS['Preschool']?.['Common']?.[0];
            setCurrentUnit(firstUnit);
            navigateTo('unit_detail');
          }}>Let's Go! ✨</Button>
        </div>
      </ScreenContainer>
    );
  }

  if (screen === 'unit_detail') {
    return <UnitDetailScreen unit={currentUnit} onLessonSelect={(lesson) => { setCurrentLesson(lesson); navigateTo('story_intro'); }} onBack={goBack} profile={profile} onReload={handleReload} onSwitchClass={handleSwitchClass} />;
  }

  if (screen === 'story_intro') {
    return <StoryScreen lesson={currentLesson} onComplete={() => navigateTo('lesson_player')} onBack={goBack} profile={profile} />;
  }

  if (screen === 'hogwarts_map') return <HogwartsMap onLocationClick={(loc, sub) => { if (sub) setCurrentSubject(sub); navigateTo(loc); }} profile={profile} onReload={handleReload} onSwitchClass={handleSwitchClass} onHome={goHome} onBack={goBack} onSocial={handleSocial} />;

  if (screen === 'subject_path') {
    return <SubjectPath subject={currentSubject || ''} profile={profile} onLessonSelect={(l) => { setCurrentLesson(l); navigateTo('lesson_player'); }} onBack={goBack} />;
  }

  if (screen === 'library') {
    const classLevel = profile?.classLevel || 'Class 1';
    const boardKey = profile?.board || 'Common';
    const subjects = SYLLABUS[classLevel]?.[boardKey] || {};
    
    return (
      <div className="h-full magic-bg p-0 text-white flex flex-col">
        <Header title="Storybook Spire" onBack={goBack} onHome={goHome} onReload={handleReload} onSwitchClass={handleSwitchClass} />
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
            {Object.entries(subjects).length > 0 ? (
              Object.entries(subjects).map(([subject, lessons]) => (
                <div key={subject} className="bg-white/5 p-6 rounded-3xl border border-white/10 h-fit">
                  <h3 className="text-3xl font-bold text-yellow-400 mb-6 bangers tracking-widest uppercase">{subject}</h3>
                  <div className="space-y-4">
                    {(lessons as Lesson[]).map(l => (
                      <div key={l.id} className="p-4 bg-white/10 rounded-2xl cursor-pointer hover:bg-white/20 transition-colors flex justify-between items-center" onClick={() => { setCurrentLesson(l); navigateTo('lesson_player'); }}>
                        <span className="text-xl font-medium">{l.title}</span>
                        {profile?.progress?.lessonsCompleted?.includes(l.id) && <span className="text-2xl">✅</span>}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center p-10">
                <p className="text-2xl opacity-60">No magic stories found yet!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'lesson_player') {
    if (profile?.classLevel === 'Preschool') {
      return (
        <LessonScreen 
          lesson={currentLesson} 
          profile={profile} 
          updateProfile={updateProfile}
          onBack={goBack} 
          onHome={goHome} 
          onNextLesson={(next) => setCurrentLesson(next)}
          onReload={handleReload}
          onSwitchClass={handleSwitchClass}
        />
      );
    }
    return <LessonPlayer lesson={currentLesson} onComplete={() => navigateTo('quiz')} onBack={goBack} onHome={goHome} profile={profile} onReload={handleReload} onSwitchClass={handleSwitchClass} />;
  }

  if (screen === 'quiz') {
    return <QuizScreen lessonId={currentLesson?.id || ''} onComplete={async (score) => {
      if (!profile || !currentLesson) return;
      
      const alreadyCompleted = profile.progress.lessonsCompleted.includes(currentLesson.id);
      const updatedLessons = alreadyCompleted 
        ? profile.progress.lessonsCompleted 
        : [...profile.progress.lessonsCompleted, currentLesson.id];
      
      const updatedQuizzes = profile.progress.quizzesCompleted.includes(currentLesson.id)
        ? profile.progress.quizzesCompleted
        : [...profile.progress.quizzesCompleted, currentLesson.id];

      await updateProfile({
        progress: { 
          ...profile.progress, 
          lessonsCompleted: updatedLessons,
          quizzesCompleted: updatedQuizzes,
          starsEarned: profile.progress.starsEarned + score, 
          housePoints: profile.progress.housePoints + (score * 10) 
        }
      });

      if (currentLesson?.miniGame) navigateTo('mini_game');
      else navigateTo('game');
    }} onBack={goBack} onHome={goHome} profile={profile} onReload={handleReload} onSwitchClass={handleSwitchClass} />;
  }

  const getNextLesson = (current: Lesson, prof: UserProfile) => {
    const classLevel = prof.classLevel;
    const board = prof.board || 'Common';
    const syllabus = SYLLABUS[classLevel]?.[board];
    if (!syllabus) return null;

    const allLessons: Lesson[] = [];
    if (classLevel === 'Preschool') {
      // In preschool, just collect all lessons in order
      const units = syllabus as any[];
      units.forEach(unit => {
        if (unit.lessons) allLessons.push(...unit.lessons);
        if (unit.reviewGame) allLessons.push(unit.reviewGame);
      });
    } else {
      // For Class 1-5, stick to the subject
      const subjectLessons = syllabus[current.subject];
      if (Array.isArray(subjectLessons)) {
        allLessons.push(...(subjectLessons as Lesson[]));
      }
    }

    const currentIndex = allLessons.findIndex(l => l.id === current.id);
    if (currentIndex !== -1 && currentIndex < allLessons.length - 1) {
      return allLessons[currentIndex + 1];
    }
    return null;
  };

  const handleGameComplete = async () => {
    if (!profile || !currentLesson) return;
    const alreadyPlayed = profile.progress.gamesPlayed.includes(currentLesson.id);
    const updatedGames = alreadyPlayed ? profile.progress.gamesPlayed : [...profile.progress.gamesPlayed, currentLesson.id];
    
    const lessonStars = { ...profile.progress.lessonStars, [currentLesson.id]: 3 };
    const starsEarned = profile.progress.starsEarned + 3;
    const alreadyCompleted = profile.progress.lessonsCompleted.includes(currentLesson.id);
    const updatedCompleted = alreadyCompleted ? profile.progress.lessonsCompleted : [...profile.progress.lessonsCompleted, currentLesson.id];

    // Unlock next lesson
    let updatedUnlocked = profile.progress.unlockedLessons || [];
    const next = getNextLesson(currentLesson, profile);
    if (next && !updatedUnlocked.includes(next.id)) {
      updatedUnlocked = [...updatedUnlocked, next.id];
    }

    await updateProfile({ 
      progress: { 
        ...profile.progress, 
        gamesPlayed: updatedGames, 
        lessonsCompleted: updatedCompleted,
        lessonStars,
        starsEarned,
        xp: profile.progress.xp + 100,
        unlockedLessons: updatedUnlocked
      } 
    });
    setScreen('reward');
  };

  if (screen === 'mini_game') {
    return <MiniGame lesson={currentLesson} onComplete={handleGameComplete} onBack={goBack} profile={profile} />;
  }

  if (screen === 'reward') {
    const next = currentLesson ? getNextLesson(currentLesson, profile!) : null;
    return (
      <RewardScreen 
        lesson={currentLesson} 
        profile={profile} 
        onComplete={() => {
          if (next) {
            setCurrentLesson(next);
            navigateTo('lesson_player');
          } else {
            goHome();
          }
        }} 
        nextLessonTitle={next?.title}
      />
    );
  }

  if (screen === 'game') {
    return (
      <div className="min-h-screen magic-bg flex flex-col items-center justify-center p-6 text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-8 md:mb-10 bangers tracking-widest uppercase text-center">The Magic Play-Park!</h2>
        <Card className="max-w-md w-full p-8 md:p-10 bg-indigo-900 border-yellow-400 shadow-2xl">
          <div className="text-6xl md:text-8xl mb-6 md:mb-8 float">🎮</div>
          <p className="text-xl md:text-2xl mb-8 md:mb-10 text-white font-medium">Win the magic challenge for {currentLesson?.title}!</p>
          <Button variant="magical" onClick={async () => {
            if (!profile || !currentLesson) return;
            const alreadyPlayed = profile.progress.gamesPlayed.includes(currentLesson.id);
            const updatedGames = alreadyPlayed ? profile.progress.gamesPlayed : [...profile.progress.gamesPlayed, currentLesson.id];
            await updateProfile({
              progress: { ...profile.progress, gamesPlayed: updatedGames, xp: profile.progress.xp + 100 }
            });
            goHome();
          }}>Play & Win!</Button>
        </Card>
      </div>
    );
  }

  if (screen === 'student_dashboard') {
    return <StudentDashboard profile={profile} onBack={goBack} onHome={goHome} onLogout={() => signOut(auth)} onFriendsClick={() => navigateTo('friends_zone')} onLeaderboardClick={() => navigateTo('leaderboard')} onNavigate={navigateTo} onReload={handleReload} onSwitchClass={handleSwitchClass} setCurrentLesson={setCurrentLesson} />;
  }

  if (screen === 'friends_zone') {
    return <FriendsZone profile={profile} onBack={goBack} onHome={goHome} onReload={handleReload} onSwitchClass={handleSwitchClass} />;
  }

  if (screen === 'leaderboard') {
    return <Leaderboard profile={profile} onBack={goBack} onHome={goHome} onReload={handleReload} onSwitchClass={handleSwitchClass} />;
  }

  if (screen === 'chatbot_tower') return <ChatbotScreen chatHistory={chatHistory} setChatHistory={setChatHistory} language={profile?.language || 'English'} onBack={goBack} onHome={goHome} onReload={handleReload} onSwitchClass={handleSwitchClass} profile={profile!} />;

  if (screen === 'social') {
    return (
      <SocialScreen 
        profile={profile!} 
        onBack={goBack} 
        onHome={goHome} 
        onReload={handleReload} 
        onSwitchClass={handleSwitchClass} 
        onChat={(friend) => {
          setSelectedFriend(friend);
          navigateTo('chat');
        }}
      />
    );
  }

  if (screen === 'chat') {
    return (
      <ChatScreen 
        profile={profile!} 
        friend={selectedFriend!} 
        onBack={goBack} 
        onHome={goHome} 
        onReload={handleReload} 
        onSwitchClass={handleSwitchClass} 
      />
    );
  }

  return <div className="h-full magic-bg flex items-center justify-center text-white bangers text-4xl">Loading the Magic...</div>;
};

// --- SUB-COMPONENTS ---

const RoleCard: React.FC<{ role: string, icon: string, color: string, onClick: () => void }> = ({ role, icon, color, onClick }) => (
  <motion.div 
    whileHover={{ scale: 1.05, rotate: 2 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick} 
    className={`${color} p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center cursor-pointer transition-all border-4 border-white/40 h-full relative overflow-hidden group`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    <span className="text-8xl md:text-[10rem] mb-6 drop-shadow-2xl z-10">{icon}</span>
    <span className="text-3xl md:text-5xl font-black bangers tracking-widest uppercase text-white drop-shadow-md z-10">{role}</span>
  </motion.div>
);

const LoginScreen: React.FC<{ selectedRole: Role | null, onRegister: () => void, onComplete: () => void }> = ({ selectedRole, onRegister, onComplete }) => {
  const [formData, setFormData] = useState({ studentName: '', password: '', schoolName: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      // onAuthStateChanged will handle navigation
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Validation
    if (!/^[a-zA-Z\s]+$/.test(formData.studentName)) {
      setError('Name should only contain letters and spaces.');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters.');
      setLoading(false);
      return;
    }

    try {
      let email = formData.studentName;
      if (!email.includes('@')) {
        const school = selectedRole === 'Parent' ? 'parent' : formData.schoolName.replace(/\s+/g, '').toLowerCase();
        email = `${formData.studentName.replace(/\s+/g, '').toLowerCase()}.${school}@rurallearn.com`;
      }
      await signInWithEmailAndPassword(auth, email, formData.password);
      onComplete();
    } catch (err: any) {
      if (err.code === 'auth/operation-not-allowed') {
        setError('Email/Password login is not enabled. Please contact the administrator or use Google Login.');
      } else if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        setError('Invalid credentials. Please check your details or register.');
      } else if (err.code === 'auth/network-request-failed') {
        setError('Network error: Please check your internet connection or try in a new tab. This can happen in some browser environments.');
      } else {
        setError('Login failed. Please check your details or register.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(val)) {
      setFormData({...formData, studentName: val});
    }
  };

  return (
    <div className="h-full magic-bg flex flex-col items-center justify-center p-4 md:p-8 text-white overflow-y-auto">
      <div className="w-full max-w-xl bg-slate-900 border-4 border-yellow-400 rounded-[3rem] p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 bangers text-yellow-400 uppercase tracking-widest leading-tight">
          {selectedRole || 'Student'} Login
        </h2>
        {error && <div className="bg-red-500/20 border-2 border-red-500 p-4 rounded-2xl mb-6 text-center text-red-200 font-bold">{error}</div>}
        
        <div className="space-y-6">
          <Button 
            variant="secondary" 
            onClick={handleGoogleLogin} 
            disabled={loading}
            className="w-full flex items-center justify-center gap-4 py-4 bg-white text-slate-900 hover:bg-slate-100"
          >
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6" />
            <span className="font-bold">Login with Google</span>
          </Button>

          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-white/20"></div>
            <span className="text-white/40 uppercase text-xs font-bold">OR</span>
            <div className="flex-1 h-px bg-white/20"></div>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-yellow-200 font-bold uppercase tracking-widest text-sm block">Magic ID / Full Name</label>
              <input required type="text" placeholder="Enter Your Name or Magic ID" className="w-full p-5 bg-white/5 border-2 border-white/20 rounded-2xl text-xl text-white placeholder:text-white/20 outline-none focus:border-yellow-400 focus:bg-white/10 transition-all" value={formData.studentName} onChange={handleNameChange} />
            </div>
            {selectedRole !== 'Parent' && !formData.studentName.includes('@') && (
              <div className="space-y-2">
                <label className="text-yellow-200 font-bold uppercase tracking-widest text-sm block">School Name</label>
                <input required type="text" placeholder="Enter School Name" className="w-full p-5 bg-white/5 border-2 border-white/20 rounded-2xl text-xl text-white placeholder:text-white/20 outline-none focus:border-yellow-400 focus:bg-white/10 transition-all" value={formData.schoolName} onChange={e => setFormData({...formData, schoolName: e.target.value})} />
              </div>
            )}
            <div className="space-y-2">
              <label className="text-yellow-200 font-bold uppercase tracking-widest text-sm block">Password</label>
              <input required type="password" placeholder="Enter Password" className="w-full p-5 bg-white/5 border-2 border-white/20 rounded-2xl text-xl text-white placeholder:text-white/20 outline-none focus:border-yellow-400 focus:bg-white/10 transition-all" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} />
            </div>
            <Button variant="magical" disabled={loading} type="submit" className="w-full mt-6 py-6 text-2xl uppercase bangers">
              {loading ? 'Logging in...' : 'Login ✨'}
            </Button>
            <div className="text-center mt-6">
              <p className="opacity-60 mb-2">Don't have an account?</p>
              <button type="button" onClick={onRegister} className="text-yellow-400 font-bold hover:underline">Register as {selectedRole}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const RegisterScreen: React.FC<{ selectedRole: Role | null, onBack: () => void, onComplete: (profile: UserProfile) => void }> = ({ selectedRole, onBack, onComplete }) => {
  const [formData, setFormData] = useState({ 
    schoolName: '', 
    classLevel: 'Class 1' as ClassLevel, 
    studentName: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(val)) {
      setFormData({...formData, studentName: val});
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validation
    if (!/^[a-zA-Z\s]+$/.test(formData.studentName)) {
      setError('Name should only contain letters and spaces.');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters.');
      setLoading(false);
      return;
    }

    try {
      const school = selectedRole === 'Parent' ? 'parent' : formData.schoolName.replace(/\s+/g, '').toLowerCase();
      const email = `${formData.studentName.replace(/\s+/g, '').toLowerCase()}.${school}@rurallearn.com`;
      const userCredential = await createUserWithEmailAndPassword(auth, email, formData.password);
      const user = userCredential.user;

      const newProfile: UserProfile = { 
        id: user.uid,
        uid: user.uid,
        studentName: formData.studentName,
        email: email,
        schoolName: formData.schoolName,
        role: selectedRole || 'Student', 
        classLevel: formData.classLevel || 'Class 1', 
        language: '' as any,
        board: null,
        house: null,
        createdAt: new Date().toISOString(),
        progress: { 
          lessonsCompleted: [], 
          quizzesCompleted: [], 
          gamesPlayed: [], 
          starsEarned: 0, 
          xp: 0, 
          housePoints: 0, 
          unlockedAvatars: [], 
          currentAvatar: '',
          lessonStars: {},
          unlockedLessons: [],
          timeSpent: 0,
          quizScores: {},
          subjectTimeSpent: {}
        } 
      };
      
      await setDoc(doc(db, 'users', user.uid), newProfile);
      onComplete(newProfile);
    } catch (err: any) {
      if (err.code === 'auth/operation-not-allowed') {
        setError('Email/Password registration is not enabled. Please contact the administrator or use Google Login.');
      } else if (err.code === 'auth/email-already-in-use') {
        setError('This name and school combination is already registered.');
      } else if (err.code === 'auth/network-request-failed') {
        setError('Network error: Please check your internet connection or try in a new tab. This can happen in some browser environments.');
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full magic-bg flex flex-col items-center justify-center p-4 md:p-8 text-white overflow-y-auto w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xl bg-slate-900 border-4 border-yellow-400 rounded-[3rem] p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] my-8"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 bangers text-yellow-400 uppercase tracking-widest leading-tight">
          {selectedRole || 'Student'} Registration
        </h2>
        {error && <div className="bg-red-500/20 border-2 border-red-500 p-4 rounded-2xl mb-6 text-center text-red-200 font-bold">{error}</div>}
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-2">
            <label className="text-yellow-200 font-bold uppercase tracking-widest text-sm block">Full Name (Letters Only)</label>
            <input required type="text" placeholder="Enter Your Name" className="w-full p-5 bg-white/5 border-2 border-white/20 rounded-2xl text-xl text-white placeholder:text-white/20 outline-none focus:border-yellow-400 focus:bg-white/10 transition-all" value={formData.studentName} onChange={handleNameChange} />
          </div>
          {selectedRole === 'Student' && (
            <div className="space-y-2">
              <label className="text-yellow-200 font-bold uppercase tracking-widest text-sm block">Select Grade</label>
              <div className="relative">
                <select 
                  required 
                  className="w-full p-5 bg-white/10 border-2 border-white/20 rounded-2xl text-xl text-white outline-none focus:border-yellow-400 focus:bg-white/20 transition-all appearance-none cursor-pointer"
                  value={formData.classLevel}
                  onChange={e => setFormData({...formData, classLevel: e.target.value as ClassLevel})}
                >
                  <option value="Preschool" className="bg-slate-900">Preschool</option>
                  <option value="Class 1" className="bg-slate-900">Class 1</option>
                  <option value="Class 2" className="bg-slate-900">Class 2</option>
                  <option value="Class 3" className="bg-slate-900">Class 3</option>
                  <option value="Class 4" className="bg-slate-900">Class 4</option>
                  <option value="Class 5" className="bg-slate-900">Class 5</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">▼</div>
              </div>
            </div>
          )}
          {selectedRole !== 'Parent' && (
            <div className="space-y-2">
              <label className="text-yellow-200 font-bold uppercase tracking-widest text-sm block">School Name</label>
              <input required type="text" placeholder="Enter School Name" className="w-full p-5 bg-white/5 border-2 border-white/20 rounded-2xl text-xl text-white placeholder:text-white/20 outline-none focus:border-yellow-400 focus:bg-white/10 transition-all" value={formData.schoolName} onChange={e => setFormData({...formData, schoolName: e.target.value})} />
            </div>
          )}
          <div className="space-y-2">
            <label className="text-yellow-200 font-bold uppercase tracking-widest text-sm block">Password (Min 6 chars)</label>
            <input required type="password" placeholder="Create Password" className="w-full p-5 bg-white/5 border-2 border-white/20 rounded-2xl text-xl text-white placeholder:text-white/20 outline-none focus:border-yellow-400 focus:bg-white/10 transition-all" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} />
          </div>
          <Button variant="magical" disabled={loading} type="submit" className="w-full mt-6 py-6 text-2xl uppercase bangers">
            {loading ? 'Registering...' : 'Register ✨'}
          </Button>
          <div className="text-center mt-6">
            <button type="button" onClick={onBack} className="text-yellow-400 font-bold hover:underline">Back to Login</button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

const ClassSelectionScreen: React.FC<{ onSelect: (lvl: ClassLevel) => void }> = ({ onSelect }) => (
  <ScreenContainer>
    <h2 className="text-5xl md:text-8xl font-magic text-white text-center mt-12 mb-16 uppercase tracking-[0.2em] drop-shadow-[0_0_15px_white] bangers">Select Your Grade</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full max-w-6xl mb-20">
      {['Preschool', 'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'].map(lvl => (
        <Card key={lvl} type="parchment" className="p-12 md:p-20 text-center cursor-pointer group" onClick={() => onSelect(lvl as ClassLevel)}>
          <div className="text-6xl md:text-8xl mb-6 group-hover:scale-125 transition-transform">
            {lvl === 'Preschool' ? '🍭' : lvl === 'Class 1' ? '🌱' : lvl === 'Class 2' ? '🌿' : lvl === 'Class 3' ? '🌳' : lvl === 'Class 4' ? '🏰' : '🧙‍♂️'}
          </div>
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-widest bangers">{lvl}</h3>
        </Card>
      ))}
    </div>
  </ScreenContainer>
);

const SortingCeremony: React.FC<{ onComplete: (h: HouseName) => void, language: string, onBack: () => void }> = ({ onComplete, language, onBack }) => {
  const [phase, setPhase] = useState<'ATTRACTION' | 'PATH' | 'CONFIRMATION' | 'REVEAL'>('ATTRACTION');
  const [selectedHouse, setSelectedHouse] = useState<HouseName>(null);

  const candles = useMemo(() => [...Array(15)].map((_, i) => ({
    id: i,
    left: Math.random() * 90 + 5 + '%',
    top: Math.random() * 40 + 5 + '%',
    delay: Math.random() * 5
  })), []);

  const speak = (text: string) => {
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.lang = language === 'Telugu' ? 'te-IN' : 'en-US';
    window.speechSynthesis.speak(msg);
  };

  const objects = [
    { type: 'Aetherion' as HouseName, icon: '📘', glow: 'shadow-[0_0_30px_rgba(37,99,235,0.6)]', auraColor: 'rgba(37,99,235,0.6)' },
    { type: 'Ignivar' as HouseName, icon: '🔥', glow: 'shadow-[0_0_30px_rgba(220,38,38,0.6)]', auraColor: 'rgba(220,38,38,0.6)' },
    { type: 'Verdantis' as HouseName, icon: '🧩', glow: 'shadow-[0_0_30px_rgba(5,150,105,0.6)]', auraColor: 'rgba(5,150,105,0.6)' },
    { type: 'Lunaris' as HouseName, icon: '🌙', glow: 'shadow-[0_0_30px_rgba(147,51,234,0.6)]', auraColor: 'rgba(147,51,234,0.6)' }
  ];

  if (phase === 'REVEAL') {
    const myHouse = HOUSES[selectedHouse!];
    return (
      <ScreenContainer bgClass="magic-bg">
        <div className="flex flex-col items-center justify-center h-full text-center relative w-full overflow-hidden">
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
            {[...Array(30)].map((_, i) => (
              <motion.div 
                key={i}
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{ 
                  scale: [0, 2, 0], 
                  x: (Math.random() - 0.5) * 1200, 
                  y: (Math.random() - 0.5) * 1200,
                  rotate: Math.random() * 360
                }}
                transition={{ duration: 5, repeat: Infinity, delay: i * 0.1 }}
                className={`w-5 h-5 absolute opacity-60 filter blur-sm bg-gradient-to-r ${myHouse.color}`}
              />
            ))}
          </div>

          <motion.div 
            initial={{ y: -2000, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ type: 'spring', damping: 10, stiffness: 40, delay: 0.8 }}
            className={`w-full max-w-3xl aspect-[2/3] bg-gradient-to-b ${myHouse.color} border-[20px] border-amber-500 rounded-b-[15rem] flex flex-col items-center pt-32 shadow-[0_80px_150px_rgba(0,0,0,1)] relative z-10`}
          >
            <div className="absolute top-0 inset-x-0 h-32 bg-black/40 border-b-8 border-amber-500/20" />
            <motion.div initial={{ scale: 0, rotateY: 180 }} animate={{ scale: 1, rotateY: 0 }} transition={{ delay: 1.8, type: 'spring' }} className="text-[15rem] md:text-[25rem] drop-shadow-[0_0_120px_rgba(255,255,255,0.9)] mb-16">{myHouse.symbol}</motion.div>
            <h2 className="text-6xl md:text-8xl font-magic text-white uppercase tracking-[0.25em] mb-6 drop-shadow-2xl bangers">HOUSE</h2>
            <h3 className="text-8xl md:text-[12rem] font-magic uppercase tracking-widest text-white mb-10 drop-shadow-[0_15px_40px_rgba(0,0,0,0.6)] bangers">{myHouse.name}</h3>
            <p className="text-3xl md:text-5xl text-white/95 italic mb-16 px-12 md:px-24 leading-snug">"{myHouse.motto}"</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.5 }} className="mt-24 z-20">
            <Button onClick={() => onComplete(selectedHouse!)} className="px-24 md:px-48 py-8 md:py-16 text-4xl md:text-7xl shadow-[0_0_60px_rgba(255,215,0,0.4)] uppercase bangers">ENTER ACADEMY</Button>
          </motion.div>
        </div>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <div className="absolute inset-0 pointer-events-none z-0">
          {candles.map(c => (
            <div key={c.id} className="absolute text-3xl floating-candle opacity-60" style={{ left: c.left, top: c.top, animationDelay: `${c.delay}s` }}>🕯️</div>
          ))}
      </div>

      <div className="flex flex-col items-center justify-center h-full w-full relative z-10 overflow-hidden">
        <AnimatePresence mode="wait">
          {phase === 'ATTRACTION' && (
            <motion.div key="attraction" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center">
              <div className="mb-12 md:mb-24 flex flex-col items-center">
                <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="text-[8rem] md:text-[12rem] mb-6 drop-shadow-[0_0_50px_rgba(255,255,255,0.4)]">🧞‍♂️</motion.div>
                <h2 className="text-4xl md:text-5xl font-magic text-amber-400 uppercase tracking-[0.4em] text-center drop-shadow-lg bangers">Select Your destiny</h2>
              </div>
              <div className="grid grid-cols-2 gap-10 md:gap-40">
                {objects.map((obj, i) => (
                  <motion.div 
                    key={obj.type} 
                    initial={{ scale: 0, opacity: 0, rotate: -20 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ delay: i * 0.2, type: 'spring' }}
                    whileHover={{ scale: 1.25, rotate: 5 }} 
                    onClick={() => {
                      setSelectedHouse(obj.type);
                      setPhase('PATH');
                      speak(language === 'Telugu' ? "మ్యాజిక్ దారిని అనుసరించండి." : "Follow the magic path.");
                    }}
                    className={`w-32 h-32 md:w-64 md:h-64 rounded-full bg-black/50 border-4 border-white/30 flex items-center justify-center text-5xl md:text-[10rem] cursor-pointer ${obj.glow} hover:border-white transition-all`}
                  >
                    <motion.span animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 3 + i }}>{obj.icon}</motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {phase === 'PATH' && (
            <motion.div key="path" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center w-full">
              <div className="w-full max-w-2xl h-[70vh] relative flex justify-center items-end bg-black/40 rounded-t-[15rem] border-x-[12px] border-t-[12px] border-white/5 overflow-hidden">
                <motion.div 
                  initial={{ height: 0 }} 
                  animate={{ height: '100%' }} 
                  transition={{ duration: 5, ease: 'easeOut' }}
                  className={`absolute bottom-0 w-48 md:w-72 bg-gradient-to-t ${HOUSES[selectedHouse!].color} opacity-50 blur-[80px]`}
                />
                
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
                  className="relative z-10 mb-24 flex flex-col items-center"
                >
                   <motion.div animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="text-[10rem] md:text-[14rem] mb-12 drop-shadow-[0_0_50px_white]">🐾</motion.div>
                   <motion.div 
                    initial={{ scale: 0, rotate: 180 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 4, type: 'spring' }}
                    onClick={() => {
                      setPhase('CONFIRMATION');
                      speak(language === 'Telugu' ? "మ్యాజిక్ స్పెల్ను సిద్ధం చేయండి!" : "Prepare your magic spell!");
                    }}
                    className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center text-6xl md:text-8xl cursor-pointer shadow-[0_0_100px_white] hover:scale-110 active:scale-90 transition-all border-4 border-amber-400"
                   >
                     🪄
                   </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {phase === 'CONFIRMATION' && (
            <motion.div key="confirmation" initial={{ opacity: 0, scale: 0.3 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center">
              <div className="relative mb-24">
                <motion.div 
                  animate={{ 
                    scale: [1, 1.4, 1],
                    rotate: [0, 8, -8, 0],
                    filter: ["brightness(1) blur(0px) contrast(1)", "brightness(2) blur(15px) contrast(1.2)", "brightness(1) blur(0px) contrast(1)"]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  onClick={() => {
                    setPhase('REVEAL');
                    speak(language === 'Telugu' ? `${HOUSES[selectedHouse!].name} హౌస్కు స్వాగతం!` : `Welcome to House ${HOUSES[selectedHouse!].name}!`);
                  }}
                  className="text-[15rem] md:text-[22rem] cursor-pointer drop-shadow-[0_0_120px_white] relative z-20"
                >
                  {HOUSES[selectedHouse!].symbol}
                </motion.div>
                <div className={`absolute inset-0 bg-gradient-to-r ${HOUSES[selectedHouse!].color} rounded-full blur-[150px] opacity-40 animate-pulse`} />
              </div>
              <p className="text-4xl md:text-6xl font-magic text-white mt-12 uppercase tracking-[0.6em] animate-pulse drop-shadow-[0_0_20px_gold] bangers">Cast Magic</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScreenContainer>
  );
};

const AvatarSelectionScreen: React.FC<{ pool: Avatar[], onSelect: (id: string) => void, profile: UserProfile, isPreschool: boolean, onBack: () => void }> = ({ pool, onSelect, profile, isPreschool, onBack }) => {
  const house = HOUSES[profile.house || ''];
  
  return (
    <ScreenContainer isPreschool={isPreschool} bgClass="magic-bg">
      <div className="w-full flex justify-start mt-6">
        <Button variant="secondary" onClick={onBack} className="py-2 px-4">⬅️ Back</Button>
      </div>
      <h2 className={`text-5xl md:text-8xl text-center mt-12 mb-16 uppercase tracking-widest ${isPreschool ? 'font-preschool text-pink-600 drop-shadow-lg bangers' : 'font-magic text-white drop-shadow-[0_0_15px_white] bangers'}`}>Choose Your Ally</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full max-w-7xl mb-20">
        {pool.filter(a => a.isStarter || profile.progress?.unlockedAvatars?.includes(a.id)).map(av => (
          <Card key={av.id} type={isPreschool ? 'preschool' : 'parchment'} className="p-8 md:p-12 text-center cursor-pointer relative" onClick={() => onSelect(av.id)}>
            <div className="text-[12rem] md:text-[18rem] mb-6 drop-shadow-2xl">{av.emoji}</div>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-widest bangers">{av.name}</h3>
            {!isPreschool && house && (
              <div className={`absolute top-4 right-4 w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-white bg-gradient-to-r ${house.color} flex items-center justify-center text-xl md:text-2xl shadow-lg`}>
                {house.symbol}
              </div>
            )}
          </Card>
        ))}
      </div>
    </ScreenContainer>
  );
};

const PreschoolMap: React.FC<{ onUnitClick: (u: any) => void, onGateClick: () => void, profile: any, onAvatarClick: () => void, onReload: () => void, onSwitchClass: () => void, onHome: () => void, onBack: () => void, onSocial: () => void }> = ({ onUnitClick, onGateClick, profile, onAvatarClick, onReload, onSwitchClass, onHome, onBack, onSocial }) => {
  const classLevel = profile?.classLevel || 'Preschool';
  const boardKey = 'Common';
  const units = SYLLABUS[classLevel]?.[boardKey] || [];
  const avatarId = profile?.progress?.currentAvatar;
  const avatar = PRESCHOOL_AVATARS.find(a => a.id === avatarId) || PRESCHOOL_AVATARS[0];

  const totalLessons = units.reduce((acc: number, u: any) => acc + u.lessons.length, 0);
  const completedLessons = profile?.progress?.lessonsCompleted?.length || 0;
  const progressPercent = (completedLessons / totalLessons) * 100;

  useEffect(() => {
    const msg = new SpeechSynthesisUtterance();
    const lang = profile?.language || 'English';
    if (lang === 'Telugu') msg.text = "మ్యాప్‌లో యూనిట్‌ను ఎంచుకోండి";
    else if (lang === 'Hindi') msg.text = "नक्शे पर एक यूनिट चुनें";
    else msg.text = "Choose a unit on the map!";
    
    msg.lang = lang === 'Telugu' ? 'te-IN' : lang === 'Hindi' ? 'hi-IN' : 'en-US';
    window.speechSynthesis.speak(msg);
  }, []);

  return (
    <ScreenContainer isPreschool={true}>
      <Header title="Preschool World" onBack={onBack} onHome={onHome} onReload={onReload} onSwitchClass={onSwitchClass} onSocial={onSocial} />
      
      {/* Top Progress Bar */}
      <div className="w-full bg-white/90 backdrop-blur-md p-4 md:p-6 border-b-4 md:border-b-8 border-pink-200 flex items-center gap-4 md:gap-6 z-20">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 md:border-4 border-pink-400 flex items-center justify-center bg-white cursor-pointer text-2xl md:text-4xl shadow-lg" onClick={onAvatarClick}>
          {avatar.emoji}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1 md:mb-2">
            <span className="text-pink-600 font-black bangers tracking-widest text-lg md:text-xl uppercase">Magic Progress</span>
            <span className="text-pink-600 font-black bangers tracking-widest text-lg md:text-xl">{Math.round(progressPercent)}%</span>
          </div>
          <ProgressBar progress={progressPercent} color="bg-pink-500" />
        </div>
        <div className="flex items-center gap-2 bg-yellow-100 px-3 md:px-4 py-1 md:py-2 rounded-full border-2 md:border-4 border-yellow-400 shadow-md">
          <Star size={24} fill="#EAB308" className="text-yellow-500" />
          <span className="font-black text-xl md:text-2xl text-yellow-700 bangers">{profile?.progress?.starsEarned || 0}</span>
        </div>
      </div>
      
      <div className="w-full max-w-2xl flex flex-col items-center py-12 md:py-24 px-4 relative z-10">
        <h2 className="text-5xl md:text-8xl font-black text-pink-600 text-center mb-12 md:mb-24 bangers tracking-widest drop-shadow-lg uppercase">Preschool World</h2>
        
        <div className="fixed bottom-10 right-10 z-50 flex flex-col gap-4">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onUnitClick({ id: 'chatbot', name: 'Sparky Chat', lessons: [] })}
            className="w-24 h-24 bg-pink-500 rounded-full shadow-[0_10px_30px_rgba(236,72,153,0.5)] flex items-center justify-center text-5xl border-4 border-white text-white"
          >
            💬
          </motion.button>
        </div>

        <div className="relative w-full flex flex-col items-center">
          <div className="absolute top-0 bottom-0 w-8 bg-white/30 rounded-full border-4 border-dashed border-pink-300"></div>

          {PRESCHOOL_MAP_STRUCTURE.map((node, index) => {
            const unit = units.find((u: any) => u.id === node.id);
            const isGate = node.type === 'gate';
            
            const prevNode = index > 0 ? PRESCHOOL_MAP_STRUCTURE[index-1] : null;
            const isPrevFinished = !prevNode || prevNode.type === 'gate' || (units.find((u: any) => u.id === prevNode.id)?.reviewGame && profile?.progress?.lessonsCompleted?.includes(units.find((u: any) => u.id === prevNode.id).reviewGame.id));
            
            const isCompleted = !isGate && unit?.reviewGame && profile?.progress?.lessonsCompleted?.includes(unit.reviewGame.id);
            const isCurrent = !isCompleted && isPrevFinished;
            const isLocked = !isGate && !isCompleted && !isCurrent;
            
            const offset = (index % 2 === 0 ? 80 : -80);

            return (
              <motion.div 
                key={node.id} 
                initial={{ opacity: 0, x: offset * 2 }}
                whileInView={{ opacity: 1, x: offset }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center my-12 w-full"
              >
                <motion.div 
                  whileHover={!isLocked ? { scale: 1.2, rotate: 5 } : {}}
                  whileTap={!isLocked ? { scale: 0.9 } : {}}
                  onClick={() => {
                    if (isGate) onGateClick();
                    else if (!isLocked && unit) onUnitClick(unit);
                  }}
                  className={`w-32 h-32 md:w-40 md:h-40 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.2)] flex flex-col items-center justify-center cursor-pointer transition-all border-b-[12px] active:border-b-0 active:translate-y-2 z-10 ${isLocked ? 'bg-slate-200 border-slate-300 opacity-60 grayscale' : isCompleted ? 'bg-green-400 border-green-600 text-white' : 'bg-white border-pink-400 text-pink-500'}`}
                >
                  <span className="text-6xl md:text-8xl mb-1">{node.icon}</span>
                </motion.div>
                <div className={`mt-4 px-6 py-2 rounded-2xl font-black text-xl md:text-2xl uppercase tracking-widest bangers shadow-md ${isLocked ? 'bg-slate-300 text-slate-500' : isCompleted ? 'bg-green-500 text-white' : 'bg-white text-pink-600 border-2 border-pink-200'}`}>
                  {node.name}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </ScreenContainer>
  );
};

const UnitDetailScreen: React.FC<{ unit: any, onLessonSelect: (l: Lesson) => void, onBack: () => void, profile: any, onReload: () => void, onSwitchClass: () => void }> = ({ unit, onLessonSelect, onBack, profile, onReload, onSwitchClass }) => {
  if (!unit) return null;

  return (
    <ScreenContainer isPreschool={true}>
      <Header title={unit.name} onBack={onBack} onHome={onBack} onReload={onReload} onSwitchClass={onSwitchClass} />
      
      <div className="flex-1 overflow-y-auto p-8 flex flex-col items-center w-full">
        <div className="w-full max-w-2xl space-y-12 py-16">
          <div className="text-center mb-16">
            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 4 }} className="text-[10rem] mb-8 drop-shadow-2xl">{unit.icon}</motion.div>
            <h3 className="text-5xl md:text-7xl font-black text-pink-600 bangers tracking-widest uppercase mb-4 drop-shadow-md">{unit.name}</h3>
            <p className="text-2xl md:text-3xl text-pink-500 font-bold max-w-xl mx-auto">{unit.description}</p>
          </div>

          <div className="space-y-8">
            {(unit.lessons || []).map((lesson: Lesson, index: number) => {
              const isCompleted = profile?.progress?.lessonsCompleted?.includes(lesson.id);
              const unlockedLessons = profile?.progress?.unlockedLessons || [];
              const isUnlocked = unlockedLessons.includes(lesson.id);
              const isPrevCompleted = index === 0 || profile?.progress?.lessonsCompleted?.includes(unit.lessons[index-1].id);
              const isLocked = !isCompleted && !isUnlocked && !isPrevCompleted;
              const stars = profile?.progress?.lessonStars?.[lesson.id] || 0;

              return (
                <Card 
                  key={lesson.id}
                  type="preschool"
                  onClick={() => !isLocked && onLessonSelect(lesson)}
                  className={`p-8 flex items-center gap-8 cursor-pointer relative overflow-hidden ${isLocked ? 'opacity-60 grayscale' : 'hover:scale-102 transition-transform'}`}
                >
                  <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-4xl md:text-5xl font-black shadow-inner ${isLocked ? 'bg-slate-200 text-slate-400' : isCompleted ? 'bg-green-400 text-white' : 'bg-pink-400 text-white'}`}>
                    {isCompleted ? <CheckCircle2 size={48} /> : index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className={`text-2xl md:text-4xl font-black bangers tracking-widest uppercase ${isLocked ? 'text-slate-400' : 'text-pink-600'}`}>{lesson.title}</h4>
                    <p className={`text-lg md:text-xl font-bold ${isLocked ? 'text-slate-400' : 'text-pink-400'}`}>{lesson.description}</p>
                    {isCompleted && (
                      <div className="flex gap-2 mt-3">
                        {[1, 2, 3].map(s => (
                          <Star key={s} size={24} fill={s <= stars ? "#F59E0B" : "transparent"} className={s <= stars ? "text-amber-500" : "text-slate-300"} />
                        ))}
                      </div>
                    )}
                  </div>
                  {isLocked && <Lock className="text-slate-400 w-10 h-10" />}
                </Card>
              );
            })}

            {/* Review Game Node */}
            {unit.reviewGame && (
              <Card 
                type="preschool"
                onClick={() => {
                  const allLessonsDone = unit.lessons.every((l: Lesson) => profile?.progress?.lessonsCompleted?.includes(l.id));
                  if (allLessonsDone) onLessonSelect(unit.reviewGame);
                }}
                className={`p-12 flex flex-col items-center text-center gap-6 cursor-pointer relative overflow-hidden ${!unit.lessons.every((l: Lesson) => profile?.progress?.lessonsCompleted?.includes(l.id)) ? 'opacity-60 grayscale' : 'bg-gradient-to-br from-amber-400 to-orange-500 border-amber-600 shadow-2xl'}`}
              >
                <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-8xl">🏆</motion.div>
                <div>
                  <h4 className={`text-4xl md:text-6xl font-black bangers tracking-widest uppercase ${unit.lessons.every((l: Lesson) => profile?.progress?.lessonsCompleted?.includes(l.id)) ? 'text-white' : 'text-slate-500'}`}>Review Game</h4>
                  <p className={`text-xl md:text-2xl font-bold ${unit.lessons.every((l: Lesson) => profile?.progress?.lessonsCompleted?.includes(l.id)) ? 'text-white/80' : 'text-slate-400'}`}>{unit.reviewGame.title}</p>
                </div>
                {profile?.progress?.lessonsCompleted?.includes(unit.reviewGame.id) && (
                  <div className="flex gap-2">
                    <Star size={40} fill="#F59E0B" className="text-amber-500" />
                    <Star size={40} fill="#F59E0B" className="text-amber-500" />
                    <Star size={40} fill="#F59E0B" className="text-amber-500" />
                  </div>
                )}
              </Card>
            )}
          </div>
        </div>
      </div>
    </ScreenContainer>
  );
};

const LessonScreen: React.FC<{
  lesson: Lesson | null,
  onBack: () => void,
  onHome: () => void,
  profile: any,
  updateProfile: (updates: any) => Promise<void>,
  onNextLesson: (next: Lesson) => void,
  onReload: () => void,
  onSwitchClass: () => void
}> = ({ lesson, onBack, onHome, profile, updateProfile, onNextLesson, onReload, onSwitchClass }) => {
  const [stage, setStage] = useState<'video' | 'explanation' | 'quiz' | 'game' | 'reward'>('video');

  useEffect(() => {
    setStage('video');
  }, [lesson?.id]);

  if (!lesson) return null;

  const handleVideoEnd = () => {
    setStage('explanation');
  };

  const handleExplanationComplete = () => {
    setStage('quiz');
  };

  const handleQuizComplete = async (score: number) => {
    if (!profile) return;
    const updatedQuizzes = profile.progress.quizzesCompleted.includes(lesson.id)
      ? profile.progress.quizzesCompleted
      : [...profile.progress.quizzesCompleted, lesson.id];
    
    await updateProfile({
      progress: {
        ...profile.progress,
        quizzesCompleted: updatedQuizzes,
        starsEarned: profile.progress.starsEarned + score,
        housePoints: profile.progress.housePoints + (score * 10)
      }
    });
    setStage('game');
  };

  const handleGameComplete = async () => {
    if (!profile) return;
    const alreadyPlayed = profile.progress.gamesPlayed.includes(lesson.id);
    const updatedGames = alreadyPlayed ? profile.progress.gamesPlayed : [...profile.progress.gamesPlayed, lesson.id];
    
    const lessonStars = { ...profile.progress.lessonStars, [lesson.id]: 3 };
    const starsEarned = profile.progress.starsEarned + 3;
    const alreadyCompleted = profile.progress.lessonsCompleted.includes(lesson.id);
    const updatedCompleted = alreadyCompleted ? profile.progress.lessonsCompleted : [...profile.progress.lessonsCompleted, lesson.id];

    // Unlock next lesson
    let updatedUnlocked = profile.progress.unlockedLessons || [];
    const next = getNext();
    if (next && !updatedUnlocked.includes(next.id)) {
      updatedUnlocked = [...updatedUnlocked, next.id];
    }

    await updateProfile({ 
      progress: { 
        ...profile.progress, 
        gamesPlayed: updatedGames, 
        lessonsCompleted: updatedCompleted,
        lessonStars,
        starsEarned,
        xp: profile.progress.xp + 100,
        unlockedLessons: updatedUnlocked
      } 
    });
    setStage('reward');
  };

  const getNext = () => {
    const classLevel = profile.classLevel;
    const board = profile.board || 'Common';
    const syllabus = SYLLABUS[classLevel]?.[board];
    if (!syllabus) return null;

    const allLessons: Lesson[] = [];
    if (classLevel === 'Preschool') {
      const units = syllabus as any[];
      units.forEach(unit => {
        if (unit.lessons) allLessons.push(...unit.lessons);
        if (unit.reviewGame) allLessons.push(unit.reviewGame);
      });
    } else {
      const subjectLessons = syllabus[lesson.subject];
      if (Array.isArray(subjectLessons)) {
        allLessons.push(...(subjectLessons as Lesson[]));
      }
    }

    const currentIndex = allLessons.findIndex(l => l.id === lesson.id);
    if (currentIndex !== -1 && currentIndex < allLessons.length - 1) {
      return allLessons[currentIndex + 1];
    }
    return null;
  };

  const nextLesson = getNext();

  return (
    <div className="min-h-screen">
      {stage === 'video' && (
        <LessonPlayer 
          lesson={lesson} 
          profile={profile} 
          onBack={onBack} 
          onHome={onHome} 
          onComplete={handleVideoEnd} 
          onReload={onReload}
          onSwitchClass={onSwitchClass}
        />
      )}
      {stage === 'explanation' && (
        <ExplanationScreen
          lesson={lesson}
          profile={profile}
          onBack={() => setStage('video')}
          onHome={onHome}
          onComplete={handleExplanationComplete}
          onReload={onReload}
          onSwitchClass={onSwitchClass}
        />
      )}
      {stage === 'quiz' && (
        <QuizScreen 
          lessonId={lesson.id} 
          profile={profile} 
          onBack={() => setStage('video')} 
          onHome={onHome} 
          onComplete={handleQuizComplete} 
          onReload={onReload}
          onSwitchClass={onSwitchClass}
        />
      )}
      {stage === 'game' && (
        <MiniGame 
          lesson={lesson} 
          profile={profile} 
          onBack={() => setStage('quiz')} 
          onComplete={handleGameComplete} 
        />
      )}
      {stage === 'reward' && (
        <RewardScreen 
          lesson={lesson} 
          profile={profile} 
          onComplete={() => {
            if (nextLesson) onNextLesson(nextLesson);
            else onHome();
          }} 
          nextLessonTitle={nextLesson?.title}
        />
      )}
    </div>
  );
};

const LessonPlayer: React.FC<{ lesson: Lesson | null, onComplete: () => void, onBack: () => void, onHome: () => void, profile: any, onReload: () => void, onSwitchClass: () => void }> = ({ lesson, onComplete, onBack, onHome, profile, onReload, onSwitchClass }) => {
  if (!lesson) return null;
  const lang = profile?.language || 'English';
  const isPreschool = profile?.classLevel === 'Preschool';
  const [showChat, setShowChat] = useState(false);
  const voiceText = lang === 'Telugu' ? lesson.voiceOverTe : lang === 'Hindi' ? lesson.voiceOverHi : lesson.voiceOverEn;
  const videoUrl = (lang === 'Telugu' && lesson.videoUrlTe) 
    ? lesson.videoUrlTe 
    : (lang === 'Hindi' && lesson.videoUrlHi) 
      ? lesson.videoUrlHi 
      : lesson.videoUrl;
  const isLocalVideo = videoUrl.startsWith('/assets/');

  useEffect(() => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = voiceText;
    msg.lang = lang === 'Telugu' ? 'te-IN' : lang === 'Hindi' ? 'hi-IN' : 'en-US';
    window.speechSynthesis.speak(msg);
  }, [lesson]);

  if (showChat) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header title={`Talk to Sparky about ${lesson.title}`} onBack={() => setShowChat(false)} onHome={onHome} onReload={onReload} onSwitchClass={onSwitchClass} />
        <ChatbotScreen 
          chatHistory={[{ role: 'mentor', text: lang === 'Telugu' ? `మీకు ${lesson.title} గురించి ఏవైనా ప్రశ్నలు ఉన్నాయా?` : lang === 'Hindi' ? `क्या आपके पास ${lesson.title} के बारे में कोई प्रश्न हैं?` : `Do you have any questions about ${lesson.title}?` }]} 
          setChatHistory={() => {}} 
          language={profile?.language || 'English'} 
          onBack={() => setShowChat(false)} 
          onHome={onHome} 
          embedded={true}
          lesson={lesson}
          onReload={onReload}
          onSwitchClass={onSwitchClass}
          profile={profile}
        />
        <div className="p-6 bg-slate-900 border-t-4 border-yellow-400">
          <Button variant="magical" className="w-full py-4 text-2xl uppercase bangers" onClick={onComplete}>Ready for Quiz! ✨</Button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isPreschool ? 'candy-bg' : 'magic-bg'} text-white flex flex-col`}>
      <Header title={lesson.title} onBack={onBack} onHome={onHome} onReload={onReload} onSwitchClass={onSwitchClass} />
      <div className="flex-1 overflow-y-auto p-4 md:p-8 max-w-4xl mx-auto w-full">
        <div className={`bg-black/90 aspect-video rounded-[2.5rem] border-4 ${isPreschool ? 'border-pink-400' : 'border-yellow-400/40'} overflow-hidden shadow-2xl relative mb-8`}>
          <VideoPlayer 
            url={videoUrl} 
            title={lesson.title} 
            isPreschool={isPreschool}
            onEnded={onComplete} 
          />
        </div>

        <div className={`${isPreschool ? 'bg-white/90 border-pink-400 text-pink-600' : 'bg-slate-900 border-yellow-400 text-white'} border-4 rounded-[2.5rem] p-8 md:p-12 shadow-2xl mb-12`}>
          <div className="flex justify-between items-center mb-10">
            <h3 className={`text-3xl md:text-5xl font-bold bangers tracking-widest uppercase leading-tight ${isPreschool ? 'text-pink-600' : 'text-yellow-400'}`}>
              {lang === 'Telugu' ? 'నేర్చుకుందాం రండి' : lang === 'Hindi' ? 'चलो सीखते हैं' : 'Magic Lesson'}
            </h3>
            <AudioPlayer text={voiceText} lang={lang === 'Telugu' ? 'te-IN' : lang === 'Hindi' ? 'hi-IN' : 'en-US'} />
          </div>
          
          <div className="space-y-10">
            {!isPreschool && (
              <>
                <section className="space-y-4">
                  <h4 className="text-lg md:text-xl font-bold text-yellow-300 uppercase tracking-widest border-b border-yellow-300/20 pb-2">Introduction</h4>
                  <p className="text-2xl md:text-3xl leading-relaxed italic opacity-95 text-white font-medium">"{lesson.storyIntro}"</p>
                </section>
                
                <section className="space-y-4">
                  <h4 className="text-lg md:text-xl font-bold text-yellow-300 uppercase tracking-widest border-b border-yellow-300/20 pb-2">Magical Examples</h4>
                  <p className="text-2xl md:text-3xl leading-relaxed opacity-95 text-white font-medium">{lesson.visualExamples}</p>
                </section>
              </>
            )}

            <div className={`${isPreschool ? 'bg-pink-50 border-pink-200' : 'bg-white/10 border-yellow-400'} p-8 rounded-3xl border-l-8 shadow-inner`}>
              <span className={`font-bold text-xl uppercase tracking-widest block mb-4 ${isPreschool ? 'text-pink-500' : 'text-yellow-400'}`}>🏠 Local Connection</span>
              <span className={`text-2xl font-medium ${isPreschool ? 'text-pink-600' : 'text-white'}`}>{lesson.ruralExample}</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 mb-20">
          <Button variant="secondary" className="flex-1 py-6 text-2xl uppercase bangers" onClick={() => setShowChat(true)}>💬 Ask Sparky</Button>
          <Button variant={isPreschool ? "magical" : "magical"} className={`flex-1 py-6 text-2xl uppercase bangers shadow-2xl ${isPreschool ? 'bg-pink-500 hover:bg-pink-600' : ''}`} onClick={onComplete}>Start Quiz! ✨</Button>
        </div>
      </div>
    </div>
  );
};

const QuizScreen: React.FC<{ lessonId: string, onComplete: (score: number) => void, onBack: () => void, onHome: () => void, profile: any, onReload: () => void, onSwitchClass: () => void }> = ({ lessonId, onComplete, onBack, onHome, profile, onReload, onSwitchClass }) => {
  const [q, setQ] = useState(0);
  const [score, setScore] = useState(0);
  const isPreschool = profile?.classLevel === 'Preschool';
  const lang = profile?.language || 'English';

  // Find the lesson to get its quiz
  const board = profile?.board || 'Common';
  const classLevel = profile?.classLevel || 'Preschool';
  const syllabus = SYLLABUS[classLevel]?.[board] || {};
  let lesson: Lesson | null = null;
  const findInSyllabus = (s: any) => {
    if (!s) return;
    if (Array.isArray(s)) {
      s.forEach((unit: any) => {
        if (unit.lessons) {
          const found = unit.lessons.find((l: any) => l.id === lessonId);
          if (found) lesson = found;
        }
        if (unit.reviewGame?.id === lessonId) lesson = unit.reviewGame;
      });
    } else {
      Object.values(s).forEach((val: any) => {
        if (Array.isArray(val)) {
          const found = val.find((l: any) => l && typeof l === 'object' && l.id === lessonId);
          if (found) lesson = found;
        } else if (typeof val === 'object' && val !== null) {
          findInSyllabus(val);
        }
      });
    }
  };
  findInSyllabus(syllabus);

  const defaultQuestions = isPreschool ? [
    { text: lang === 'Hindi' ? "इनमें से कौन सा सेब है?" : lang === 'Telugu' ? "వీటిలో ఆపిల్ ఏది?" : "Which one is an Apple?", options: ["🍎", "🍌", "🥕", "🥔"], correct: 0, audioEn: "Which one is an Apple?", audioTe: "వీటిలో ఆపిల్ ఏది?", audioHi: "इनमें से कौन सा सेब है?" },
    { text: lang === 'Hindi' ? "लाल रंग कौन सा है?" : lang === 'Telugu' ? "ఎరుపు రంగు ఏది?" : "Which one is Red?", options: ["🔴", "🟡", "🔵", "🟢"], correct: 0, audioEn: "Which one is Red?", audioTe: "ఎరుపు రంగు ఏది?", audioHi: "लाल रंग कौन सा है?" },
    { text: lang === 'Hindi' ? "गाय को पहचानें" : lang === 'Telugu' ? "ఆవును గుర్తించండి" : "Find the Cow", options: ["🐶", "🐱", "🐮", "🦁"], correct: 2, audioEn: "Find the Cow", audioTe: "ఆవును గుర్తించండి", audioHi: "गाय को पहचानें" }
  ] : [
    { text: "What is the color of a ripe mango?", options: ["Blue", "Yellow", "Pink"], correct: 1, audioEn: "What is the color of a ripe mango?", audioTe: "పండిన మామిడి పండు రంగు ఏమిటి?" },
    { text: "Which animal gives us milk?", options: ["Cow", "Lion", "Snake"], correct: 0, audioEn: "Which animal gives us milk?", audioTe: "ఏ జంతువు మనకు పాలు ఇస్తుంది?" }
  ];

  const questions = lesson?.quiz || defaultQuestions;

  useEffect(() => {
    const msg = new SpeechSynthesisUtterance();
    const currentQ = questions[q] as any;
    msg.text = lang === 'Telugu' ? currentQ.audioTe : lang === 'Hindi' ? currentQ.audioHi : currentQ.audioEn;
    msg.lang = lang === 'Telugu' ? 'te-IN' : lang === 'Hindi' ? 'hi-IN' : 'en-US';
    window.speechSynthesis.speak(msg);
  }, [q, questions]);

  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

  const handleAnswer = (i: number) => {
    const isCorrect = i === questions[q].correct;
    setFeedback(isCorrect ? 'correct' : 'wrong');
    
    if (isCorrect) setScore(s => s + 1);

    setTimeout(() => {
      setFeedback(null);
      if (q < questions.length - 1) setQ(q + 1);
      else onComplete(score + (isCorrect ? 1 : 0));
    }, 1000);
  };

  return (
    <div className={`min-h-screen ${isPreschool ? 'candy-bg' : 'magic-bg'} text-white flex flex-col relative`}>
      {feedback && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="animate-bounce-slow flex flex-col items-center">
            <span className="text-9xl mb-4">{feedback === 'correct' ? '🌟' : '❌'}</span>
            <span className={`text-6xl font-bold bangers tracking-widest uppercase ${feedback === 'correct' ? 'text-green-400' : 'text-red-400'}`}>
              {feedback === 'correct' ? 'AMAZING!' : 'TRY AGAIN!'}
            </span>
          </div>
        </div>
      )}
      <Header title="The Puzzle Pad" onBack={onBack} onHome={onHome} onReload={onReload} onSwitchClass={onSwitchClass} />
      <div className="flex-1 overflow-y-auto p-6 md:p-12">
        <div className="max-w-3xl mx-auto w-full">
          <div className="text-center my-10">
            <div className="flex justify-center items-center gap-4 mb-8">
              <span className={`text-3xl font-bold bangers tracking-widest uppercase ${isPreschool ? 'text-pink-600' : 'text-yellow-400'}`}>Puzzle {q + 1} of {questions.length}</span>
              <AudioPlayer text={lang === 'Telugu' ? (questions[q] as any).audioTe : lang === 'Hindi' ? (questions[q] as any).audioHi : questions[q].audioEn} lang={lang === 'Telugu' ? 'te-IN' : lang === 'Hindi' ? 'hi-IN' : 'en-US'} />
            </div>
            <div className={`w-full bg-white/10 h-8 rounded-full border-2 border-white/20 overflow-hidden shadow-inner`}>
              <div className={`${isPreschool ? 'bg-pink-500' : 'bg-yellow-400'} h-full transition-all duration-700 shadow-[0_0_20px_rgba(255,255,255,0.5)]`} style={{width: `${((q+1)/questions.length)*100}%`}}></div>
            </div>
          </div>
          <div className={`${isPreschool ? 'bg-white/90 border-pink-400' : 'bg-slate-900 border-yellow-400'} border-4 p-10 md:p-16 text-center rounded-[3rem] shadow-[0_0_60px_rgba(0,0,0,0.6)]`}>
            <h3 className={`text-3xl md:text-5xl font-bold mb-16 leading-snug drop-shadow-lg ${isPreschool ? 'text-pink-600' : 'text-white'}`}>{questions[q].text}</h3>
            <div className={`grid ${isPreschool ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1'} gap-8`}>
              {questions[q].options.map((opt, i) => (
                <button 
                  key={i} 
                  onClick={() => handleAnswer(i)} 
                  className={`w-full p-8 border-4 border-white/20 rounded-[2rem] transition-all font-bold shadow-xl active:scale-95 group ${isPreschool ? 'bg-pink-100 text-pink-600 hover:bg-pink-500 hover:text-white border-pink-200 text-6xl' : 'bg-white/5 text-white hover:bg-yellow-400 hover:text-indigo-950 hover:border-white text-2xl md:text-4xl'}`}
                >
                  <span className={`${!isPreschool ? 'group-hover:text-indigo-950' : ''}`}>{opt}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialScreen: React.FC<{ profile: UserProfile, onBack: () => void, onChat: (friend: UserProfile) => void, onHome: () => void, onReload: () => void, onSwitchClass: () => void }> = ({ profile, onBack, onChat, onHome, onReload, onSwitchClass }) => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState<UserProfile[]>([]);
  const [friends, setFriends] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(false);
  const isPreschool = profile.classLevel === 'Preschool';

  useEffect(() => {
    if (!profile.friends || profile.friends.length === 0) {
      setFriends([]);
      return;
    }

    const q = query(collection(db, 'users'), where('uid', 'in', profile.friends));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const friendList = snapshot.docs.map(doc => doc.data() as UserProfile);
      setFriends(friendList);
    });

    return () => unsubscribe();
  }, [profile.friends]);

  const handleSearch = async () => {
    if (!search.trim()) return;
    setLoading(true);
    try {
      const q = query(
        collection(db, 'users'), 
        where('studentName', '>=', search),
        where('studentName', '<=', search + '\uf8ff'),
        limit(10)
      );
      const snapshot = await getDocs(q);
      const results = snapshot.docs
        .map(doc => doc.data() as UserProfile)
        .filter(u => u.uid !== profile.uid && !(profile.friends || []).includes(u.uid));
      setSearchResults(results);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  const sendRequest = async (targetUser: UserProfile) => {
    if (!profile.uid) return;
    const request = {
      uid: profile.uid,
      name: profile.studentName,
      avatarEmoji: profile.progress.currentAvatar ? (PRESCHOOL_AVATARS.find(a => a.id === profile.progress.currentAvatar)?.emoji || CLASS_1_5_AVATARS.find(a => a.id === profile.progress.currentAvatar)?.emoji || '🧙‍♂️') : '🧙‍♂️',
      timestamp: new Date().toISOString()
    };

    const targetRequests = targetUser.friendRequests || [];
    if (targetRequests.some(r => r.uid === profile.uid)) return;

    try {
      await updateDoc(doc(db, 'users', targetUser.uid), {
        friendRequests: [...targetRequests, request]
      });
    } catch (e) {
      console.error(e);
    }
  };

  const acceptRequest = async (request: any) => {
    try {
      const newFriends = [...(profile.friends || []), request.uid];
      const newRequests = (profile.friendRequests || []).filter(r => r.uid !== request.uid);
      
      // Update current user
      await updateDoc(doc(db, 'users', profile.uid), {
        friends: newFriends,
        friendRequests: newRequests
      });

      // Update friend user
      const friendDoc = await getDoc(doc(db, 'users', request.uid));
      if (friendDoc.exists()) {
        const friendData = friendDoc.data() as UserProfile;
        await updateDoc(doc(db, 'users', request.uid), {
          friends: [...(friendData.friends || []), profile.uid]
        });
      }

      // Initialize Chat Document to satisfy security rules (participants key)
      const chatId = [profile.uid, request.uid].sort().join('_');
      await setDoc(doc(db, 'chats', chatId), {
        participants: [profile.uid, request.uid],
        updatedAt: serverTimestamp(),
        lastMessage: {
          text: "Wizards connected! ✨",
          senderId: 'system',
          timestamp: new Date().toISOString()
        }
      }, { merge: true });

    } catch (e) {
      console.error("Accept error:", e);
    }
  };

  return (
    <ScreenContainer isPreschool={isPreschool}>
      <Header title="Wizards Zone" onBack={onBack} onHome={onHome} onReload={onReload} onSwitchClass={onSwitchClass} />
      
      <div className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col gap-8 md:gap-12 w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          
          {/* Left Column: Search & Discovery */}
          <div className="lg:col-span-1 space-y-8">
            <Card type={isPreschool ? 'preschool' : 'parchment'} className="p-8 shadow-xl border-4 border-white/50">
              <h3 className={`text-4xl font-black bangers mb-6 uppercase tracking-widest ${isPreschool ? 'text-pink-600' : 'text-amber-500'}`}>Find Allies</h3>
              <div className="space-y-4">
                <div className="relative group">
                  <Search className={`absolute left-4 top-1/2 -translate-y-1/2 p-1 rounded-lg ${isPreschool ? 'bg-pink-100 text-pink-500' : 'bg-slate-100 text-slate-400'}`} />
                  <input 
                    type="text" 
                    placeholder="Friend's Name..." 
                    className={`w-full pl-14 pr-4 py-6 rounded-3xl font-black bangers text-2xl uppercase tracking-widest focus:outline-none transition-all shadow-inner ${
                      isPreschool 
                      ? 'bg-pink-50 border-4 border-pink-100 text-pink-600 placeholder:text-pink-300 focus:border-pink-400' 
                      : 'bg-slate-50 border-4 border-slate-200 text-slate-900 placeholder:text-slate-300 focus:border-amber-400'
                    }`}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                  {loading && <Loader2 className="absolute right-4 top-1/2 -translate-y-1/2 animate-spin text-amber-500" />}
                </div>
                <Button variant={isPreschool ? 'preschool' : 'magical'} className="w-full py-6 text-2xl uppercase bangers shadow-[0_8px_0_rgb(217,119,6)] active:translate-y-2 active:shadow-none transition-all" onClick={handleSearch}>
                  Search
                </Button>
              </div>

              {searchResults.length > 0 && (
                <div className="mt-8 space-y-4 animate-in fade-in slide-in-from-top-4">
                  <p className="text-sm font-bold opacity-50 uppercase tracking-[0.2em] mb-4">Found Wizards</p>
                  {searchResults.map(user => (
                    <div key={user.uid} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border-2 border-slate-100 group hover:border-amber-400 transition-all">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl filter drop-shadow hover:scale-110 transition-transform">
                          {user.progress.currentAvatar ? (PRESCHOOL_AVATARS.find(a => a.id === user.progress.currentAvatar)?.emoji || CLASS_1_5_AVATARS.find(a => a.id === user.progress.currentAvatar)?.emoji || '🧙‍♂️') : '🧙‍♂️'}
                        </span>
                        <div>
                          <p className="text-xl font-black bangers text-slate-900 leading-tight">{user.studentName}</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => sendRequest(user)}
                        disabled={user.friendRequests?.some(r => r.uid === profile.uid)}
                        className={`p-3 rounded-xl transition-all ${
                          user.friendRequests?.some(r => r.uid === profile.uid)
                          ? 'bg-emerald-100 text-emerald-500 cursor-not-allowed'
                          : 'bg-indigo-500 text-white hover:scale-110 active:scale-95 shadow-md flex items-center justify-center'
                        }`}
                      >
                        {user.friendRequests?.some(r => r.uid === profile.uid) ? <UserCheck size={20} /> : <UserPlus size={20} />}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          </div>

          {/* Center & Right Column: Guild & Tasks */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Pending Invites */}
            {profile.friendRequests && profile.friendRequests.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-pink-500 rounded-xl flex items-center justify-center text-white shadow-lg animate-bounce">
                    <Star className="w-6 h-6 fill-current" />
                  </div>
                  <h3 className={`text-4xl font-black bangers uppercase tracking-widest ${isPreschool ? 'text-pink-600' : 'text-white'}`}>Summoning Scrolls</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {profile.friendRequests.map(req => (
                    <Card key={req.uid} type={isPreschool ? 'preschool' : 'parchment'} className="p-6 flex items-center justify-between animate-in zoom-in-95">
                      <div className="flex items-center gap-4">
                        <span className="text-6xl animate-pulse">{req.avatarEmoji}</span>
                        <div>
                          <p className="text-2xl font-black bangers text-slate-900">{req.name}</p>
                          <p className="text-sm font-bold opacity-50 uppercase">Requests Alignment</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => acceptRequest(req)} className="p-4 bg-emerald-500 text-white rounded-2xl hover:scale-110 active:scale-95 shadow-lg transition-all">
                          <Check size={24} />
                        </button>
                        <button 
                          onClick={async () => {
                            const newRequests = (profile.friendRequests || []).filter(r => r.uid !== req.uid);
                            await updateDoc(doc(db, 'users', profile.uid), { friendRequests: newRequests });
                          }}
                          className="p-4 bg-pink-500 text-white rounded-2xl hover:scale-110 active:scale-95 shadow-lg transition-all"
                        >
                          <X size={24} />
                        </button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Guild Members (Friends) */}
            <div className="space-y-8">
              <div className="flex items-end justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className={`text-4xl font-black bangers uppercase tracking-widest ${isPreschool ? 'text-pink-600' : 'text-white'}`}>Wizards Guild</h3>
                </div>
                <p className="text-sm font-bold opacity-50 uppercase tracking-widest">{friends.length} Allies Connected</p>
              </div>

              {friends.length === 0 ? (
                <div className="py-24 flex flex-col items-center justify-center text-center gap-6 bg-white/5 rounded-[4rem] border-4 border-dashed border-white/10 opacity-40">
                  <span className="text-9xl">🧙‍♂️</span>
                  <div>
                    <h4 className="text-3xl font-black bangers uppercase tracking-widest text-white mb-2">Guild is Empty</h4>
                    <p className="text-xl font-bold uppercase text-white/60">Invite fellow wizards to start your collection!</p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {friends.sort((a, b) => (b.lastSeen ? new Date(b.lastSeen).getTime() : 0) - (a.lastSeen ? new Date(a.lastSeen).getTime() : 0)).map(friend => {
                    const isOnline = friend.lastSeen && (new Date().getTime() - new Date(friend.lastSeen).getTime() < 300000);
                    return (
                      <Card 
                        key={friend.uid} 
                        type={isPreschool ? 'preschool' : 'parchment'} 
                        className="p-6 flex items-center gap-6 cursor-pointer hover:scale-105 transition-all group relative overflow-hidden active:scale-95" 
                        onClick={() => onChat(friend)}
                      >
                        <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-20 transition-opacity">
                           <Sparkles className="w-12 h-12 text-amber-500" />
                        </div>
                        <div className="relative">
                          <div className={`w-20 h-20 rounded-full border-4 flex items-center justify-center text-6xl shadow-xl transition-all ${isOnline ? 'border-emerald-400 bg-emerald-50' : 'border-slate-200 bg-slate-50 grayscale-[0.5]'}`}>
                            {friend.progress.currentAvatar ? (PRESCHOOL_AVATARS.find(a => a.id === friend.progress.currentAvatar)?.emoji || CLASS_1_5_AVATARS.find(a => a.id === friend.progress.currentAvatar)?.emoji || '🧙‍♂️') : '🧙‍♂️'}
                          </div>
                          {isOnline && (
                             <motion.div 
                               animate={{ scale: [1, 1.2, 1] }} 
                               transition={{ repeat: Infinity, duration: 2 }}
                               className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-4 border-white shadow-lg" 
                             />
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-3xl font-black bangers text-slate-900 tracking-tight leading-none uppercase mb-1">{friend.studentName}</h4>
                          <div className="flex items-center gap-2">
                             <span className="px-2 py-0.5 bg-indigo-100 text-indigo-600 rounded-md text-[10px] font-black uppercase tracking-widest">{friend.house || 'Wizard'}</span>
                             <p className="text-xs font-bold opacity-40 uppercase">{isOnline ? 'Active Now' : 'Asleep'}</p>
                          </div>
                        </div>
                        <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform">
                          <MessageCircle className="w-6 h-6" />
                        </div>
                      </Card>
                    );
                  })}
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </ScreenContainer>
  );
};

const ChatScreen: React.FC<{ profile: UserProfile, friend: UserProfile, onBack: () => void, onHome: () => void, onReload: () => void, onSwitchClass: () => void }> = ({ profile, friend, onBack, onHome, onReload, onSwitchClass }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPreschool = profile.classLevel === 'Preschool';

  useEffect(() => {
    const chatId = [profile.uid, friend.uid].sort().join('_');
    const q = query(
      collection(db, 'chats', chatId, 'messages'),
      orderBy('timestamp', 'asc'),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Message));
      setMessages(msgs);
      setTimeout(() => scrollRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    });

    return () => unsubscribe();
  }, [friend.uid]);

  const handleSend = async () => {
    if (!input.trim() || sending) return;
    setSending(true);
    const chatId = [profile.uid, friend.uid].sort().join('_');
    const msg = {
      senderId: profile.uid,
      senderName: profile.studentName,
      receiverId: friend.uid,
      text: input,
      timestamp: new Date().toISOString(),
      read: false
    };

    setInput('');
    try {
      await addDoc(collection(db, 'chats', chatId, 'messages'), msg);
      await updateDoc(doc(db, 'chats', chatId), {
        lastMessage: msg,
        updatedAt: serverTimestamp()
      });
    } catch (e) {
      console.error("Send error:", e);
    } finally {
      setSending(false);
    }
  };

  return (
    <ScreenContainer isPreschool={isPreschool}>
      <Header 
        title={`Magic Chat: ${friend.studentName}`} 
        onBack={onBack} 
        onHome={onHome} 
        onReload={onReload} 
        onSwitchClass={onSwitchClass} 
      />
      
      <div className={`flex-1 flex flex-col overflow-hidden w-full max-w-4xl mx-auto backdrop-blur-md rounded-t-[3rem] mt-6 border-x-4 border-t-4 ${isPreschool ? 'bg-pink-50/80 border-pink-200' : 'bg-slate-900/40 border-white/10'}`}>
        {/* Friend Info Mini Bar */}
        <div className={`p-4 border-b-2 flex items-center gap-4 ${isPreschool ? 'bg-pink-100 border-pink-200' : 'bg-black/20 border-white/5'}`}>
           <span className="text-4xl drop-shadow-md">
             {friend.progress.currentAvatar ? (PRESCHOOL_AVATARS.find(a => a.id === friend.progress.currentAvatar)?.emoji || CLASS_1_5_AVATARS.find(a => a.id === friend.progress.currentAvatar)?.emoji || '🧙‍♂️') : '🧙‍♂️'}
           </span>
           <div>
             <p className={`font-black bangers tracking-widest uppercase ${isPreschool ? 'text-pink-600 text-2xl' : 'text-amber-400 text-xl'}`}>{friend.studentName}</p>
             <p className="text-xs font-bold opacity-60 uppercase">{friend.house || 'Wizard'}</p>
           </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full opacity-30 grayscale italic text-center gap-4 p-8">
               <span className="text-8xl">✨</span>
               <p className="text-xl font-bold uppercase tracking-widest">Share some magic! Cast a message below.</p>
            </div>
          )}
          {messages.map((msg, i) => {
            const isMe = msg.senderId === profile.uid;
            return (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                key={msg.id || i} 
                className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`
                  max-w-[85%] p-5 rounded-3xl shadow-xl relative
                  ${isMe 
                    ? 'bg-gradient-to-br from-amber-400 to-orange-500 text-white rounded-br-none' 
                    : isPreschool ? 'bg-white text-pink-600 border-2 border-pink-100 rounded-bl-none' : 'bg-slate-800 text-white border border-white/10 rounded-bl-none'
                  }
                `}>
                  <p className="text-xl font-bold leading-tight">{msg.text}</p>
                  <p className={`text-[10px] mt-2 font-bold opacity-60 tracking-wider flex items-center gap-1 ${isMe ? 'justify-end' : 'justify-start'}`}>
                    <Clock size={10} />
                    {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </motion.div>
            );
          })}
          <div ref={scrollRef} />
        </div>

        {/* Quick Spells Section */}
        <div className={`p-4 border-t-2 ${isPreschool ? 'bg-pink-100 border-pink-200' : 'bg-black/30 border-white/10'}`}>
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {[
              { emoji: '✨', text: 'Cast Sparkles!', color: 'from-yellow-400 to-amber-500' },
              { emoji: '🔥', text: 'Incendio!', color: 'from-orange-500 to-red-600' },
              { emoji: '💧', text: 'Aguamenti!', color: 'from-blue-400 to-indigo-500' },
              { emoji: '🦋', text: 'Wingardium!', color: 'from-pink-400 to-purple-500' }
            ].map(spell => (
              <button
                key={spell.text}
                onClick={async () => {
                  if (sending) return;
                  setSending(true);
                  const chatId = [profile.uid, friend.uid].sort().join('_');
                  const msg = {
                    senderId: profile.uid,
                    senderName: profile.studentName,
                    receiverId: friend.uid,
                    text: `${spell.emoji} ${spell.text}`,
                    timestamp: new Date().toISOString(),
                    read: false,
                    isSpell: true
                  };
                  try {
                    await addDoc(collection(db, 'chats', chatId, 'messages'), msg);
                  } catch (e) {
                    console.error("Spell error:", e);
                  } finally {
                    setSending(false);
                  }
                }}
                className={`flex-none px-4 py-2 rounded-xl bg-gradient-to-br ${spell.color} text-white font-black bangers uppercase tracking-widest text-xs flex items-center gap-2 shadow-lg hover:scale-105 active:scale-95 transition-all`}
              >
                <span>{spell.emoji}</span> {spell.text}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Emojis Section */}
        <div className={`p-3 flex gap-2 overflow-x-auto border-t-2 ${isPreschool ? 'bg-pink-50/50 border-pink-100' : 'bg-black/10 border-white/5'}`}>
          {['✨', '🔮', '🧙‍♂️', '🪄', '🐲', '🏰', '🧹', '🦉', '🦁', '🌟'].map(emoji => (
            <button 
              key={emoji}
              onClick={() => setInput(prev => prev + emoji)}
              className="text-3xl hover:scale-125 transition-transform active:scale-95 bg-white/10 p-2 rounded-xl"
            >
              {emoji}
            </button>
          ))}
        </div>

        <div className={`p-6 border-t-4 flex gap-4 ${isPreschool ? 'bg-white border-pink-200' : 'bg-white/10 border-white/10'}`}>
          <input 
            type="text" 
            placeholder={isPreschool ? "Send a magical message..." : "Cast a communication spell..."} 
            className={`flex-1 rounded-2xl px-6 py-4 font-bold focus:outline-none transition-all ${
              isPreschool 
                ? 'bg-pink-50 border-2 border-pink-100 text-pink-600 placeholder:text-pink-300 focus:border-pink-400' 
                : 'bg-black/20 border-2 border-white/10 text-white placeholder:text-white/20 focus:border-amber-400'
            }`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={sending}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button 
            onClick={handleSend} 
            disabled={!input.trim() || sending}
            className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-xl transition-all ${
              !input.trim() || sending ? 'opacity-50 grayscale cursor-not-allowed' : 'bg-amber-500 hover:scale-110 active:scale-95 hover:bg-amber-400'
            }`}
          >
            {sending ? <Loader2 className="w-8 h-8 animate-spin" /> : <Send size={28} />}
          </button>
        </div>
      </div>
    </ScreenContainer>
  );
};

const ChatbotScreen: React.FC<{ chatHistory: any, setChatHistory: any, language: string, onBack: () => void, onHome: () => void, embedded?: boolean, lesson?: Lesson, onReload: () => void, onSwitchClass: () => void, profile: UserProfile }> = ({ chatHistory, setChatHistory, language, onBack, onHome, embedded = false, lesson, onReload, onSwitchClass, profile }) => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [localHistory, setLocalHistory] = useState(chatHistory);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const playAudio = (base64: string) => {
    if (!base64) return;
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    const blob = new Blob([bytes], { type: 'audio/wav' });
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    audio.play().catch(e => {
      console.warn("Audio playback failed, possibly due to user interaction requirements:", e);
      // Fallback: the text is already visible in chat
    });
  };

  const speak = (text: string, langCode: string) => {
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.lang = langCode;
    window.speechSynthesis.speak(msg);
  };

  useEffect(() => { 
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' }); 
    // Play audio for the last mentor message if it exists
    const lastMsg = localHistory[localHistory.length - 1];
    if (lastMsg && lastMsg.role === 'mentor') {
      const audioKey = `audio${language}` as keyof typeof lastMsg;
      if (lastMsg[audioKey]) {
        playAudio(lastMsg[audioKey] as string);
      } else {
        const langCode = language === 'Telugu' ? 'te-IN' : language === 'Hindi' ? 'hi-IN' : 'en-US';
        speak(lastMsg.text, langCode);
      }
    }
  }, [localHistory]);
  
  const handleSend = async () => {
    if (!input.trim()) return;
    const currentInput = input;
    const newHistory = [...localHistory, { role: 'user', text: currentInput }];
    setLocalHistory(newHistory);
    if (!embedded) setChatHistory(newHistory);
    setInput('');
    setLoading(true);

    // Build context from lesson if available
    let context = "";
    if (lesson) {
      context = `Current Lesson: ${lesson.title}. 
      Subject: ${lesson.subject}. 
      Description: ${lesson.description}. 
      Explanation: ${lesson.explanation || ''}. 
      Rural Example: ${lesson.ruralExample}. 
      Visual Examples: ${lesson.visualExamples || ''}.
      Quiz Questions and Answers: ${lesson.quiz?.map(q => `Q: ${q.text}, Options: ${q.options.join('/')}, Correct: ${q.options[q.correct]}`).join(' | ') || 'None'}`;
    } else {
      const classLevel = profile.classLevel;
      const board = profile.board || 'Common';
      const syllabus = SYLLABUS[classLevel]?.[board];
      if (syllabus) {
        let summary = `Student Class: ${classLevel}. Syllabus: `;
        if (Array.isArray(syllabus)) {
          summary += syllabus.map(u => `${u.name}: ${u.lessons.map((l: any) => l.title).join(', ')}`).join(' | ');
        } else {
          summary += Object.entries(syllabus).map(([sub, lessons]) => `${sub}: ${(lessons as any[]).map(l => l.title).join(', ')}`).join(' | ');
        }
        context = summary.substring(0, 3000);
      }
    }

    const response = await askMentor(currentInput, language as any, context);
    const finalHistory = [...newHistory, { 
      role: 'mentor', 
      text: response[language.toLowerCase() as keyof typeof response] as string || response.english,
      english: response.english,
      hindi: response.hindi,
      telugu: response.telugu,
      audioEnglish: response.audioEnglish,
      audioHindi: response.audioHindi,
      audioTelugu: response.audioTelugu
    }];
    setLocalHistory(finalHistory);
    if (!embedded) setChatHistory(finalHistory);
    setLoading(false);
  };

  return (
    <div className={`${embedded ? 'h-full bg-slate-900' : 'min-h-screen magic-bg'} flex flex-col text-white overflow-hidden`}>
      {!embedded && <Header title="Help-Hollow" onBack={onBack} onHome={onHome} onReload={onReload} onSwitchClass={onSwitchClass} />}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {localHistory.map((msg: any, i: number) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[90%] p-6 rounded-[2.5rem] text-xl shadow-2xl leading-relaxed ${msg.role === 'user' ? 'bg-indigo-600 rounded-br-none border-2 border-white/20 text-white shadow-[0_0_15px_rgba(79,70,229,0.3)]' : 'bg-white text-indigo-950 rounded-bl-none font-medium shadow-[0_0_15px_rgba(255,255,255,0.2)]'}`}>
              {msg.role === 'user' ? msg.text : (
                <div className="space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-4 flex-1">
                      <div className="p-4 bg-indigo-50 rounded-2xl border-l-4 border-indigo-500">
                        <p className="text-sm font-bold uppercase tracking-widest text-indigo-400 mb-1">English</p>
                        <p className="text-xl text-indigo-900">{msg.english}</p>
                      </div>
                      <div className="p-4 bg-orange-50 rounded-2xl border-l-4 border-orange-500">
                        <p className="text-sm font-bold uppercase tracking-widest text-orange-400 mb-1">Hindi</p>
                        <p className="text-xl text-indigo-900">{msg.hindi}</p>
                      </div>
                      <div className="p-4 bg-emerald-50 rounded-2xl border-l-4 border-emerald-500">
                        <p className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-1">Telugu</p>
                        <p className="text-xl text-indigo-900">{msg.telugu}</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      {msg.audioEnglish && (
                        <button onClick={() => playAudio(msg.audioEnglish)} className="p-3 bg-indigo-100 rounded-full hover:bg-indigo-200 transition-all hover:scale-110 shadow-md" title="Play English">
                          🇬🇧 🔊
                        </button>
                      )}
                      {msg.audioHindi && (
                        <button onClick={() => playAudio(msg.audioHindi)} className="p-3 bg-orange-100 rounded-full hover:bg-orange-200 transition-all hover:scale-110 shadow-md" title="Play Hindi">
                          🇮🇳 🔊
                        </button>
                      )}
                      {msg.audioTelugu && (
                        <button onClick={() => playAudio(msg.audioTelugu)} className="p-3 bg-emerald-100 rounded-full hover:bg-emerald-200 transition-all hover:scale-110 shadow-md" title="Play Telugu">
                          🇮🇳 🔊
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-indigo-100 space-y-2 opacity-60 text-sm italic">
                    <p>English: {msg.english}</p>
                    <p>Hindi: {msg.hindi}</p>
                    <p>Telugu: {msg.telugu}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        {loading && <div className="text-yellow-400 italic animate-pulse p-6 bangers tracking-widest uppercase text-2xl text-center">Sparky is summoning knowledge...</div>}
        <div ref={scrollRef} />
      </div>
      <div className={`p-6 ${embedded ? 'bg-slate-800' : 'bg-slate-900/90'} backdrop-blur-md border-t-4 border-yellow-400 flex gap-4`}>
        <input value={input} onChange={e => setInput(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSend()} placeholder="Ask your Magical Mentor..." className="flex-1 p-6 bg-white/5 border-2 border-white/20 rounded-3xl text-2xl text-white outline-none focus:border-yellow-400 shadow-inner placeholder:text-white/20" />
        <Button onClick={handleSend} className="px-10 py-6 text-3xl">✨</Button>
      </div>
    </div>
  );
};

const StudentDashboard: React.FC<{ profile: any | null, onBack: () => void, onHome: () => void, onLogout: () => void, onFriendsClick: () => void, onLeaderboardClick: () => void, onNavigate: (screen: string) => void, onReload: () => void, onSwitchClass: () => void, setCurrentLesson: (lesson: any) => void }> = ({ profile, onBack, onHome, onLogout, onFriendsClick, onLeaderboardClick, onNavigate, onReload, onSwitchClass, setCurrentLesson }) => {
  if (!profile) return null;
  const isPreschool = profile.classLevel === 'Preschool';
  const avatarPool = isPreschool ? PRESCHOOL_AVATARS : CLASS_1_5_AVATARS;
  const avatarId = profile.progress.currentAvatar;
  const avatarImg = avatarPool.find(a => a.id === avatarId)?.image || avatarPool[0].image;
  const house = HOUSES.find(h => h.name === profile.house);

  return (
    <div className={`min-h-screen ${isPreschool ? 'candy-bg' : 'magic-bg'} text-white flex flex-col`}>
      <Header title={isPreschool ? "My Magic Room" : "Magic Profile"} onBack={onBack} onHome={onHome} onReload={onReload} onSwitchClass={onSwitchClass} />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-2xl mx-auto w-full space-y-10 py-10">
          <div className={`${isPreschool ? 'bg-white/90 border-pink-400' : 'bg-slate-900 border-yellow-400'} border-4 p-10 md:p-14 text-center rounded-[4rem] shadow-2xl relative overflow-hidden`}>
            {!isPreschool && <div className="absolute -top-10 -right-10 text-9xl opacity-10 rotate-12 pointer-events-none">🪄</div>}
            <div className={`w-40 h-40 md:w-52 md:h-52 rounded-full border-8 mb-10 overflow-hidden mx-auto shadow-[0_0_30px_rgba(255,255,255,0.2)] relative ${isPreschool ? 'border-pink-400' : (house?.accent.replace('border-', 'border-') || 'border-yellow-400')}`}>
              <img src={avatarImg} className="w-full h-full object-cover" alt="Profile" />
              {!isPreschool && house && (
                   <div className={`absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-white ${house.color} flex items-center justify-center text-2xl md:text-3xl shadow-lg`}>
                     {house.icon}
                   </div>
              )}
            </div>
            <h2 className={`text-5xl md:text-6xl font-bold bangers tracking-[0.1em] mb-4 uppercase leading-tight drop-shadow-md ${isPreschool ? 'text-pink-600' : 'text-yellow-400'}`}>{profile.studentName}</h2>
            <p className={`text-2xl md:text-3xl opacity-90 mb-10 uppercase tracking-widest font-bold ${isPreschool ? 'text-pink-400' : 'text-white/80'}`}>Grade {profile.classLevel}</p>
            {!isPreschool && profile.house && (
              <div className={`px-12 py-4 rounded-full font-bold bangers text-2xl md:text-3xl tracking-[0.2em] inline-block shadow-2xl border-4 border-white/20 ${house?.color || 'bg-gray-700'}`}>House {profile.house}</div>
            )}
          </div>
          
          <div className="grid grid-cols-2 gap-6 md:gap-10">
            <StatCard icon="✨" label="Experience" value={profile.progress.xp.toString()} isPreschool={isPreschool} />
            <StatCard icon="⭐" label="Magic Stars" value={profile.progress.starsEarned.toString()} isPreschool={isPreschool} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Button variant="magical" className="py-6 text-2xl uppercase bangers flex items-center justify-center gap-4" onClick={() => onNavigate('language_selection')}>
              <span>🌐</span> Language
            </Button>
            <Button variant="magical" className="py-6 text-2xl uppercase bangers flex items-center justify-center gap-4" onClick={() => onNavigate('class_selection')}>
              <span>🏫</span> Class
            </Button>
            <Button variant="magical" className="py-6 text-2xl uppercase bangers flex items-center justify-center gap-4" onClick={onFriendsClick}>
              <span>🤝</span> Friends
            </Button>
            <Button variant="magical" className="py-6 text-2xl uppercase bangers flex items-center justify-center gap-4" onClick={onLeaderboardClick}>
              <span>🏆</span> Leaders
            </Button>
          </div>

          <div className={`${isPreschool ? 'bg-white/90 border-pink-400' : 'bg-white/5 border-white/10'} p-10 rounded-[3rem] border-4 shadow-2xl text-center backdrop-blur-sm`}>
            <h4 className={`text-2xl md:text-3xl font-bold bangers tracking-widest mb-8 uppercase border-b-2 border-white/10 pb-4 ${isPreschool ? 'text-pink-600' : 'text-yellow-400'}`}>Your Magic Journey</h4>
            <div className="grid grid-cols-3 gap-8">
              <div className="space-y-2">
                <span className={`block text-4xl md:text-5xl font-bold ${isPreschool ? 'text-pink-500' : 'text-white'}`}>{profile.progress.lessonsCompleted.length}</span>
                <span className={`text-sm md:text-base uppercase opacity-70 tracking-widest font-bold ${isPreschool ? 'text-pink-400' : 'text-white'}`}>Lessons</span>
              </div>
              <div className="space-y-2">
                <span className={`block text-4xl md:text-5xl font-bold ${isPreschool ? 'text-pink-500' : 'text-white'}`}>{profile.progress.quizzesCompleted.length}</span>
                <span className={`text-sm md:text-base uppercase opacity-70 tracking-widest font-bold ${isPreschool ? 'text-pink-400' : 'text-white'}`}>Quizzes</span>
              </div>
              <div className="space-y-2">
                <span className={`block text-4xl md:text-5xl font-bold ${isPreschool ? 'text-pink-500' : 'text-white'}`}>{profile.progress.gamesPlayed.length}</span>
                <span className={`text-sm md:text-base uppercase opacity-70 tracking-widest font-bold ${isPreschool ? 'text-pink-400' : 'text-white'}`}>Games</span>
              </div>
            </div>
          </div>

          {profile.assignedLessons && profile.assignedLessons.length > 0 && (
            <div className={`${isPreschool ? 'bg-white/90 border-pink-400' : 'bg-white/5 border-white/10'} p-10 rounded-[3rem] border-4 shadow-2xl backdrop-blur-sm`}>
              <h4 className={`text-2xl md:text-3xl font-bold bangers tracking-widest mb-8 uppercase border-b-2 border-white/10 pb-4 text-center ${isPreschool ? 'text-pink-600' : 'text-yellow-400'}`}>Assigned by Teacher</h4>
              <div className="grid grid-cols-1 gap-4">
                {profile.assignedLessons.map((lessonId: string) => {
                  const lesson = (Object.values(SYLLABUS[profile.classLevel]?.[profile.board || 'Common'] || {}) as any[]).flat().find((l: any) => l.id === lessonId);
                  return (
                    <div key={lessonId} className={`flex items-center justify-between p-6 rounded-2xl border-2 ${isPreschool ? 'bg-pink-50 border-pink-200 text-pink-700' : 'bg-slate-900/50 border-white/10 text-white'}`}>
                      <div className="flex items-center gap-4">
                        <span className="text-3xl">📚</span>
                        <span className="text-xl font-bold">{lesson?.title || lessonId}</span>
                      </div>
                      <Button variant="magical" onClick={() => {
                        if (lesson) {
                          setCurrentLesson(lesson);
                          onNavigate('story_intro');
                        }
                      }}>Start</Button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <Button variant={isPreschool ? "danger" : "magical"} className="w-full py-6 text-3xl uppercase bangers tracking-[0.1em] shadow-2xl" onClick={onLogout}>Exit Magic World</Button>
        </div>
      </div>
    </div>
  );
};

const StatCard: React.FC<{ icon: string, label: string, value: string, isPreschool?: boolean }> = ({ icon, label, value, isPreschool }) => (
  <div className={`${isPreschool ? 'bg-white/90 border-pink-400' : 'bg-slate-900 border-white/10'} border-4 p-8 md:p-10 rounded-[2.5rem] flex flex-col items-center justify-center text-center shadow-2xl flex-1`}>
    <span className="text-6xl md:text-7xl mb-4 float drop-shadow-lg">{icon}</span>
    <span className={`text-sm md:text-base opacity-90 uppercase font-bold tracking-[0.2em] mb-2 ${isPreschool ? 'text-pink-400' : 'text-yellow-200'}`}>{label}</span>
    <span className={`text-5xl md:text-6xl font-bold bangers uppercase tracking-widest drop-shadow-md ${isPreschool ? 'text-pink-600' : 'text-white'}`}>{value}</span>
  </div>
);

const StoryScreen: React.FC<{ lesson: Lesson | null, onComplete: () => void, onBack: () => void, profile: any }> = ({ lesson, onComplete, onBack, profile }) => {
  if (!lesson) return null;
  const lang = profile?.language || 'English';

  useEffect(() => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = lesson.storyIntro;
    msg.lang = lang === 'Telugu' ? 'te-IN' : lang === 'Hindi' ? 'hi-IN' : 'en-US';
    window.speechSynthesis.speak(msg);
  }, [lesson]);

  return (
    <ScreenContainer isPreschool={true}>
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center w-full">
        <Card type="preschool" className="max-w-3xl w-full p-16 md:p-24 shadow-[0_30px_100px_rgba(236,72,153,0.3)] relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-r from-transparent via-pink-400/30 to-transparent" />
          <motion.div animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="text-[10rem] md:text-[14rem] mb-12 drop-shadow-2xl">📖</motion.div>
          <h2 className="text-6xl md:text-8xl font-black bangers text-pink-600 mb-10 uppercase tracking-widest drop-shadow-md">Story Time!</h2>
          <p className="text-3xl md:text-5xl font-bold text-pink-500 mb-16 leading-relaxed italic drop-shadow-sm">"{lesson.storyIntro}"</p>
          <div className="flex flex-col md:flex-row gap-8 w-full">
            <Button variant="secondary" onClick={onBack} className="flex-1 py-10 text-3xl md:text-4xl uppercase bangers shadow-xl">Back</Button>
            <Button variant="magical" onClick={onComplete} className="flex-1 py-10 text-3xl md:text-4xl uppercase bangers shadow-2xl bg-pink-500 hover:bg-pink-600">Let's Watch! 🎥</Button>
          </div>
        </Card>
      </div>
    </ScreenContainer>
  );
};

const ExplanationScreen: React.FC<{
  lesson: Lesson,
  profile: any,
  onBack: () => void,
  onHome: () => void,
  onComplete: () => void,
  onReload: () => void,
  onSwitchClass: () => void
}> = ({ lesson, profile, onBack, onHome, onComplete, onReload, onSwitchClass }) => {
  const isPreschool = profile?.classLevel === 'Preschool';
  const lang = profile?.language || 'English';
  
  useEffect(() => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = lesson.explanation || lesson.description;
    msg.lang = lang === 'Telugu' ? 'te-IN' : lang === 'Hindi' ? 'hi-IN' : 'en-US';
    window.speechSynthesis.speak(msg);
  }, [lesson]);

  return (
    <ScreenContainer isPreschool={isPreschool}>
      <Header title="Magical Wisdom" onBack={onBack} onHome={onHome} onReload={onReload} onSwitchClass={onSwitchClass} />
      <div className="flex-1 overflow-y-auto p-8 md:p-16 flex flex-col items-center justify-center w-full">
        <Card type={isPreschool ? 'preschool' : 'parchment'} className="max-w-4xl w-full p-16 md:p-24 shadow-[0_40px_120px_rgba(0,0,0,0.3)] relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            <motion.div
              animate={{ y: [0, -30, 0], rotate: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-[10rem] md:text-[12rem] drop-shadow-2xl"
            >
              ✨
            </motion.div>
            <div className="text-center md:text-left">
              <h2 className={`text-5xl md:text-8xl font-black bangers tracking-widest uppercase mb-4 drop-shadow-md ${isPreschool ? 'text-pink-600' : 'text-indigo-950'}`}>Sparky's Secret</h2>
              <p className={`text-2xl md:text-3xl font-black italic uppercase tracking-widest ${isPreschool ? 'text-pink-400' : 'text-amber-700'}`}>Listen closely to the magic!</p>
            </div>
          </div>

          <div className={`rounded-[3rem] p-12 mb-16 border-4 shadow-inner ${isPreschool ? 'bg-pink-50 border-pink-200' : 'bg-amber-50/50 border-amber-200'}`}>
            <p className={`text-3xl md:text-5xl leading-relaxed font-black bangers tracking-wider ${isPreschool ? 'text-pink-600' : 'text-indigo-950'}`}>
              "{lesson.explanation || lesson.description}"
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 w-full">
            <Button variant="secondary" onClick={onBack} className="flex-1 py-10 text-3xl md:text-4xl uppercase bangers shadow-xl">
              Watch Again 🎥
            </Button>
            <Button variant="magical" onClick={onComplete} className="flex-1 py-10 text-3xl md:text-4xl uppercase bangers shadow-2xl">
              Start Quiz! ⚡
            </Button>
          </div>
        </Card>

        {/* Sparky Avatar */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed bottom-10 right-10 w-48 h-48 md:w-64 md:h-64 pointer-events-none z-20"
        >
          <img 
            src={PRESCHOOL_AVATARS[0].image} 
            alt="Sparky" 
            className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.6)]" 
          />
        </motion.div>
      </div>
    </ScreenContainer>
  );
};

const MiniGame: React.FC<{ lesson: Lesson | null, onComplete: () => void, onBack: () => void, profile: any }> = ({ lesson, onComplete, onBack, profile }) => {
  if (!lesson || !lesson.miniGame) return null;
  const [won, setWon] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const lang = profile?.language || 'English';
  const isPreschool = profile?.classLevel === 'Preschool';
  const game = lesson.miniGame;

  const getInstruction = () => {
    const type = game.type;
    const isHindi = lang === 'Hindi';
    const isTelugu = lang === 'Telugu';

    if (isTelugu) {
      if (type === 'sorting_hat') return "నామవాచకాలను మ్యాజిక్ చెస్ట్‌లోకి లాగండి!";
      if (type === 'owl_match') return "పదాలను సరైన చిత్రాలతో జతపరచండి!";
      if (type === 'dragon_eggs') return "డ్రాగన్ గుడ్లను లెక్కించండి!";
      if (type === 'magic_mirror') return "మెరిసే శరీర భాగాలను తాకండి!";
      if (type === 'sentence_builder') return "మ్యాజిక్ స్పెల్ చేయడానికి పదాలను అమర్చండి!";
      if (type === 'spell_word') return "మ్యాజిక్ పదాన్ని స్పెల్లింగ్ చేయండి!";
      if (type === 'forbidden_forest_hunt') return "అడవిలో దాగి ఉన్న నామవాచకాలను కనుగొనండి!";
      if (type === 'shape_spell') return "మ్యాజిక్ ఆకారాలను గుర్తించండి!";
      if (type === 'magic_number_line') return "మిస్సింగ్ నంబర్లను కనుగొనండి!";
      if (type === 'day_night_spell') return "పగలా లేక రాత్రా? స్పెల్ వేయండి!";
      if (type === 'coin_treasure') return "విజార్డ్ నాణేలను సేకరించండి!";
      if (type === 'potion_addition') return "పానీయంలో పదార్థాలను కలపండి!";
      if (type === 'family_castle') return "కుటుంబ సభ్యులను గదులతో జతపరచండి!";
      if (type === 'healthy_potion') return "ఆరోగ్యకరమైన ఆహారాన్ని ఎంచుకోండి!";
      if (type === 'wizard_garden') return "మ్యాజిక్ గార్డెన్‌లోని మొక్కలను అమర్చండి!";
      if (type === 'magic_forest_animals') return "అడవిలోని జంతువులను కనుగొనండి!";
      if (type === 'owl_alphabet') return "అక్షరాలను అమర్చడంలో గుడ్లగూబకు సహాయం చేయండి!";
      if (type === 'letter_magic') return "అక్షరాలను మ్యాజిక్ వస్తువులతో జతపరచండి!";
      if (type === 'hindi_word_treasure') return "నిధిలోని పదాలను కనుగొనండి!";
      if (type === 'missing_letter') return "మిస్సింగ్ మ్యాజిక్ లెటర్‌ను కనుగొనండి!";
      
      if (type === 'drag_drop') return "వస్తువును సరైన చోటికి లాగండి";
      if (type === 'color_pop') return "రంగు బుడగలను పగలగొట్టండి";
      if (type === 'puzzle') return "పజిల్‌ను పూర్తి చేయండి";
      if (type === 'wave') return "హలో చెప్పడానికి చేయి ఊపండి!";
      if (type === 'follow_action') return "చెప్పిన పనిని చేయండి!";
      if (type === 'count') return "సంఖ్యలను లెక్కించండి!";
      if (type === 'match') return "జతపరచండి!";
      if (type === 'tap') return "సరైన పదాన్ని నొక్కండి";
      if (type === 'word_builder') return "పదాలను అమర్చండి";
      return "ఆట ఆడదాం రండి!";
    }
    if (isHindi) {
      if (type === 'sorting_hat') return "संज्ञा शब्दों को जादुई संदूक में डालें!";
      if (type === 'owl_match') return "शब्दों को सही चित्रों से मिलाएं!";
      if (type === 'dragon_eggs') return "ड्रैगन के अंडों को गिनें!";
      if (type === 'magic_mirror') return "चमकने वाले शरीर के अंगों को छुएं!";
      if (type === 'sentence_builder') return "जादुई मंत्र बनाने के लिए शब्दों को व्यवस्थित करें!";
      if (type === 'spell_word') return "जादुई शब्द की स्पेलिंग लिखें!";
      if (type === 'forbidden_forest_hunt') return "जंगल में छिपी संज्ञाओं को खोजें!";
      if (type === 'shape_spell') return "जादुई आकृतियों को पहचानें!";
      if (type === 'magic_number_line') return "गायब नंबरों को खोजें!";
      if (type === 'day_night_spell') return "दिन है या रात? मंत्र बोलें!";
      if (type === 'coin_treasure') return "जादुई सिक्के जमा करें!";
      if (type === 'potion_addition') return "पोटशन में सामग्री डालें!";
      if (type === 'family_castle') return "परिवार के सदस्यों को कमरों से मिलाएं!";
      if (type === 'healthy_potion') return "स्वस्थ भोजन चुनें!";
      if (type === 'wizard_garden') return "जादुई बगीचे में पौधों को छाँटें!";
      if (type === 'magic_forest_animals') return "जंगल के जानवरों को खोजें!";
      if (type === 'owl_alphabet') return "अक्षरों को छाँटने में उल्लू की मदद करें!";
      if (type === 'letter_magic') return "अक्षरों को जादुई वस्तुओं से मिलाएं!";
      if (type === 'hindi_word_treasure') return "खजाने में शब्द खोजें!";
      if (type === 'missing_letter') return "गायब जादुई अक्षर खोजें!";

      if (type === 'drag_drop') return "वस्तु को सही जगह पर खींचें";
      if (type === 'color_pop') return "रंगीन गुब्बारों को फोड़ें";
      if (type === 'puzzle') return "पहेली को पूरा करें";
      if (type === 'wave') return "नमस्ते कहने के लिए हाथ हिलाएं!";
      if (type === 'follow_action') return "दी गई क्रिया का पालन करें!";
      if (type === 'count') return "संख्याओं को गिनें!";
      if (type === 'match') return "मिलान करें!";
      if (type === 'tap') return "सही शब्द पर टैप करें";
      if (type === 'word_builder') return "वाक्य बनाएं";
      return "चलो खेल खेलते हैं!";
    }
    
    if (type === 'sorting_hat') return "Drag the nouns into the magic chest!";
    if (type === 'owl_match') return "Match the words with the right pictures!";
    if (type === 'dragon_eggs') return "Count the dragon eggs!";
    if (type === 'magic_mirror') return "Tap the body parts that glow!";
    if (type === 'magic_picture_match') return "Match the letters with magical objects!";
    if (type === 'sentence_builder') return "Arrange the words to make a magic spell!";
    if (type === 'spell_word') return "Spell the magic word!";
    if (type === 'forbidden_forest_hunt') return "Find the hidden nouns in the forest!";
    if (type === 'shape_spell') return "Identify the magic shapes!";
    if (type === 'magic_number_line') return "Find the missing numbers on the broomstick!";
    if (type === 'day_night_spell') return "Is it Day or Night? Cast the spell!";
    if (type === 'coin_treasure') return "Collect the wizard coins!";
    if (type === 'potion_addition') return "Add the ingredients to the potion!";
    if (type === 'family_castle') return "Match family members to the castle rooms!";
    if (type === 'healthy_potion') return "Pick healthy food for the potion!";
    if (type === 'wizard_garden') return "Sort the plants in the magic garden!";
    if (type === 'magic_forest_animals') return "Find the animals in the Forbidden Forest!";
    if (type === 'owl_alphabet') return "Help the owl sort the letters!";
    if (type === 'letter_magic') return "Match the letters to their magic objects!";
    if (type === 'hindi_word_treasure') return "Find the hidden words in the treasure!";
    if (type === 'missing_letter') return "Find the missing magic letter!";

    if (type === 'drag_drop') return "Drag the item to the right place!";
    if (type === 'color_pop') return "Pop the colorful balloons!";
    if (type === 'puzzle') return "Complete the puzzle!";
    if (type === 'wave') return "Wave hello to your friends!";
    if (type === 'follow_action') return "Follow the action!";
    if (type === 'count') return "Count the numbers!";
    if (type === 'match') return "Match the pairs!";
    if (type === 'tap') return "Tap the right word!";
    if (type === 'word_builder') return "Build the sentence!";
    return "Let's play!";
  };

  useEffect(() => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = getInstruction();
    msg.lang = lang === 'Telugu' ? 'te-IN' : lang === 'Hindi' ? 'hi-IN' : 'en-US';
    window.speechSynthesis.speak(msg);
  }, []);

  const handleWin = () => {
    setWon(true);
    const msg = new SpeechSynthesisUtterance();
    msg.text = lang === 'Telugu' ? "మీరు గెలిచారు! అద్భుతం!" : lang === 'Hindi' ? "आप जीत गए! बहुत बढ़िया!" : "You won! Great job!";
    msg.lang = lang === 'Telugu' ? 'te-IN' : lang === 'Hindi' ? 'hi-IN' : 'en-US';
    window.speechSynthesis.speak(msg);
  };

  return (
    <div className={`min-h-screen ${isPreschool ? 'candy-bg' : 'magic-bg'} flex flex-col items-center justify-center p-6 text-center`}>
      <div className={`max-w-2xl w-full ${isPreschool ? 'bg-white/90 border-pink-400' : 'bg-slate-900 border-yellow-400'} border-4 rounded-[3rem] p-10 shadow-2xl`}>
        <h2 className={`text-4xl font-bold bangers ${isPreschool ? 'text-pink-600' : 'text-yellow-400'} mb-6 uppercase tracking-widest`}>{isPreschool ? 'Magic Game' : 'Wizard Challenge'}</h2>
        <p className={`text-2xl font-bold ${isPreschool ? 'text-pink-500' : 'text-white'} mb-10`}>{getInstruction()}</p>
        
        <div className={`h-80 ${isPreschool ? 'bg-pink-50 border-pink-200' : 'bg-white/5 border-yellow-400/20'} rounded-3xl border-4 border-dashed flex items-center justify-center relative mb-10 overflow-hidden`}>
          {!won ? (
            <div className="w-full h-full flex items-center justify-center p-4">
              {/* Harry Potter Themed Games */}
              {game.type === 'sorting_hat' && (
                <div className="flex flex-col items-center gap-6">
                  <div className="flex flex-wrap justify-center gap-4">
                    {game.config.items.map((item: any, i: number) => (
                      <motion.div 
                        key={i}
                        drag
                        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 500 }}
                        onDragEnd={(_, info) => {
                          // Check if dropped near the chest (bottom area)
                          if (info.offset.y > 100 && (item.category === 'noun' || item.isNoun)) {
                            setScore(s => s + 1);
                            const targetScore = game.config.items.filter((it: any) => it.category === 'noun' || it.isNoun).length;
                            if (score + 1 >= targetScore) handleWin();
                          }
                        }}
                        className="p-4 bg-white/10 rounded-xl cursor-grab active:cursor-grabbing text-2xl font-bold border-2 border-yellow-400/30"
                      >
                        {item.text || item.word}
                      </motion.div>
                    ))}
                  </div>
                  <div className="text-8xl mt-10">🧳</div>
                  <p className="text-sm text-yellow-400/60">Drag Nouns to the Chest!</p>
                </div>
              )}

              {game.type === 'owl_match' && (
                <div className="grid grid-cols-2 gap-8">
                  {game.config.pairs.map((pair: any, i: number) => (
                    <div key={i} className="flex items-center gap-4">
                      <button 
                        onClick={() => {
                          if (score === i * 2) setScore(s => s + 1);
                        }} 
                        className={`p-4 bg-white/10 border-2 rounded-xl text-xl transition-all ${score > i * 2 ? 'border-green-500 bg-green-500/20' : 'border-yellow-400'}`}
                      >
                        🦉 {pair[0]}
                      </button>
                      <button 
                        onClick={() => { 
                          if (score === i * 2 + 1) {
                            setScore(s => s + 1);
                            if (i === game.config.pairs.length - 1) handleWin();
                          }
                        }} 
                        className={`p-4 bg-white/10 border-2 rounded-xl text-4xl transition-all ${score > i * 2 + 1 ? 'border-green-500 bg-green-500/20' : 'border-yellow-400'}`}
                      >
                        {pair[1]}
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {game.type === 'spell_word' && (
                <div className="flex flex-col items-center gap-8">
                  <div className="text-8xl mb-4">{game.config.image || '✨'}</div>
                  <div className="flex gap-2">
                    {game.config.word.split('').map((char: string, i: number) => (
                      <div key={i} className={`w-12 h-16 border-b-4 flex items-center justify-center text-4xl font-bold ${score > i ? 'text-green-400 border-green-500' : 'text-white border-yellow-400'}`}>
                        {score > i ? char : '_'}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2 flex-wrap justify-center">
                    {game.config.word.split('').sort().map((char: string, i: number) => (
                      <button 
                        key={i} 
                        onClick={() => {
                          if (char === game.config.word[score]) {
                            setScore(s => s + 1);
                            if (score + 1 >= game.config.word.length) handleWin();
                          }
                        }}
                        className="w-14 h-14 bg-white/10 border-2 border-yellow-400 rounded-xl text-2xl font-bold hover:bg-yellow-400 hover:text-indigo-950 transition-all"
                      >
                        {char}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {game.type === 'forbidden_forest_hunt' && (
                <div className="grid grid-cols-3 gap-6">
                  {game.config.items.map((item: any, i: number) => (
                    <motion.button
                      key={i}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => {
                        if (item.category === 'noun' || item.isNoun) {
                          setScore(s => s + 1);
                          const targetScore = game.config.items.filter((it: any) => it.category === 'noun' || it.isNoun).length;
                          if (score + 1 >= targetScore) handleWin();
                        }
                      }}
                      className={`p-6 bg-white/5 border-2 border-yellow-400/20 rounded-2xl text-2xl font-bold hover:border-yellow-400 transition-all ${score > 0 && (item.category === 'noun' || item.isNoun) ? 'opacity-50' : ''}`}
                    >
                      {item.text || item.word}
                    </motion.button>
                  ))}
                </div>
              )}

              {game.type === 'dragon_eggs' && (
                <div className="flex flex-col items-center gap-8">
                  <div className="flex gap-4 text-6xl">
                    {[...Array(game.config.eggCount)].map((_, i) => <motion.span key={i} animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, delay: i * 0.2 }}>🥚</motion.span>)}
                  </div>
                  <div className="flex gap-4">
                    {game.config.options.map((opt: number) => (
                      <button key={opt} onClick={() => { if (opt === game.config.eggCount) handleWin(); }} className="w-16 h-16 bg-yellow-400 text-indigo-950 rounded-full text-2xl font-bold hover:scale-110 transition-transform">{opt}</button>
                    ))}
                  </div>
                </div>
              )}

              {game.type === 'sentence_builder' && (
                <div className="flex flex-col items-center gap-8">
                  <div className="flex gap-4 flex-wrap justify-center">
                    {game.config.words.map((word: string, i: number) => (
                      <button 
                        key={i} 
                        onClick={() => {
                          if (word === game.config.correctOrder[score]) {
                            setScore(s => s + 1);
                            if (score + 1 >= game.config.correctOrder.length) handleWin();
                          }
                        }}
                        className={`p-4 rounded-xl font-bold text-xl border-2 ${score > i ? 'bg-green-500 border-green-600' : 'bg-white/10 border-yellow-400'}`}
                      >
                        {word}
                      </button>
                    ))}
                  </div>
                  <div className="text-4xl text-yellow-400">🪄</div>
                </div>
              )}

              {game.type === 'brush' && (
                <div onClick={handleWin} className="flex flex-col items-center gap-8">
                  <div className="text-9xl animate-bounce">🪥</div>
                  <div className="text-8xl">🦷</div>
                  <p className="text-xl font-bold text-pink-400 uppercase tracking-widest">Tap to brush!</p>
                </div>
              )}
              {game.type === 'feed' && (
                <div className="flex gap-20 items-center">
                  <div draggable onDragEnd={handleWin} className="text-9xl cursor-grab active:cursor-grabbing hover:scale-110 transition-transform">
                    {game.config.food === 'grass' ? '🌿' : '🍎'}
                  </div>
                  <div className="text-9xl">
                    {game.config.animal === 'cow' ? '🐄' : '🐘'}
                  </div>
                </div>
              )}
              {game.type === 'find' && (
                <div className="grid grid-cols-3 gap-6">
                  {[...Array(9)].map((_, i) => (
                    <button 
                      key={i} 
                      onClick={() => {
                        if (i < (game.config.count || 3)) {
                          setScore(s => s + 1);
                          if (score + 1 >= (game.config.count || 3)) handleWin();
                        }
                      }}
                      className={`p-6 bg-white/5 border-2 border-yellow-400/20 rounded-2xl text-4xl hover:border-yellow-400 transition-all ${score > i ? 'opacity-30' : ''}`}
                    >
                      {i < (game.config.count || 3) ? (game.config.item === 'dino_egg' ? '🥚' : '✨') : '🌳'}
                    </button>
                  ))}
                </div>
              )}
              {game.type === 'drive' && (
                <div onClick={handleWin} className="flex flex-col items-center gap-8">
                  <div className="text-9xl animate-pulse">
                    {game.config.vehicle === 'bus' ? '🚌' : '🚗'}
                  </div>
                  <div className="w-full h-4 bg-slate-700 rounded-full relative overflow-hidden">
                    <motion.div 
                      animate={{ x: ['0%', '100%'] }} 
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      className="absolute top-0 bottom-0 w-20 bg-yellow-400"
                    />
                  </div>
                  <p className="text-xl font-bold text-yellow-400 uppercase tracking-widest">Tap to drive!</p>
                </div>
              )}
              {game.type === 'build' && (
                <div className="flex flex-col items-center gap-8">
                  <div className="flex gap-2">
                    {[...Array(7)].map((_, i) => (
                      <div key={i} className={`w-12 h-12 rounded-full ${score > i ? 'bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500' : 'bg-white/10 border-2 border-dashed border-white/20'}`} />
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {['🔴', '🟠', '🟡', '🟢', '🔵', '🟣'].map((c, i) => (
                      <button key={i} onClick={() => { setScore(s => s + 1); if (score >= 6) handleWin(); }} className="text-4xl hover:scale-125 transition-transform">{c}</button>
                    ))}
                  </div>
                </div>
              )}
              {game.type === 'drag_drop' && (
                <div className="flex gap-20 items-center">
                  <div draggable onDragEnd={handleWin} className="text-9xl cursor-grab active:cursor-grabbing hover:scale-110 transition-transform">
                    {game.config.item === 'apple' ? '🍎' : game.config.item === 'face_part' ? '👀' : game.config.item === 'bed' ? '🛏️' : '🎁'}
                  </div>
                  <div className="text-9xl opacity-30 border-4 border-dashed border-pink-300 rounded-3xl p-4">
                    {game.config.target === 'basket' ? '🧺' : game.config.target === 'face' ? '👤' : game.config.target === 'bedroom' ? '🏠' : '📥'}
                  </div>
                </div>
              )}
              {game.type === 'color_pop' && (
                <div className="grid grid-cols-3 gap-8">
                  {[1, 2, 3, 4, 5, 6].map(i => (
                    <button key={i} onClick={() => { setScore(s => s + 1); if (score >= 5) handleWin(); }} className="text-6xl hover:scale-125 transition-transform animate-bounce" style={{animationDelay: `${i * 0.2}s`}}>
                      🎈
                    </button>
                  ))}
                </div>
              )}
              {game.type === 'match' && (
                <div className="grid grid-cols-2 gap-8 w-full max-w-md">
                  {game.config.pairs.map((pair: any, i: number) => (
                    <React.Fragment key={i}>
                      <button onClick={() => setScore(s => s + 1)} className={`p-6 bg-white border-4 ${isPreschool ? 'border-pink-200' : 'border-yellow-400'} rounded-2xl text-4xl hover:bg-pink-100 transition-colors`}>
                        {pair[0]}
                      </button>
                      <button onClick={() => { if (score >= game.config.pairs.length - 1) handleWin(); }} className={`p-6 bg-white border-4 ${isPreschool ? 'border-pink-200' : 'border-yellow-400'} rounded-2xl text-4xl hover:bg-pink-100 transition-colors`}>
                        {pair[1]}
                      </button>
                    </React.Fragment>
                  ))}
                </div>
              )}
              {game.type === 'word_builder' && (
                <div className="flex flex-col items-center gap-8">
                  <div className="flex gap-4">
                    {(game.config.sentence || game.config.word || '').split(' ').map((word: string, i: number) => (
                      <div key={i} className={`min-w-[5rem] h-16 border-b-4 ${isPreschool ? 'border-pink-400' : 'border-yellow-400'} flex items-center justify-center text-2xl font-bold ${isPreschool ? 'text-pink-600' : 'text-white'}`}>
                        {score > i ? word : ''}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-4 flex-wrap justify-center">
                    {(game.config.sentence || game.config.word || '').split(' ').sort().map((word: string, i: number) => (
                      <button 
                        key={i} 
                        onClick={() => { 
                          const words = (game.config.sentence || game.config.word || '').split(' ');
                          if (word === words[score]) {
                            setScore(s => s + 1); 
                            if (score + 1 >= words.length) handleWin(); 
                          }
                        }} 
                        className={`p-4 bg-white border-2 ${isPreschool ? 'border-pink-200' : 'border-yellow-400'} rounded-xl text-xl font-bold ${isPreschool ? 'text-pink-500' : 'text-indigo-950'} hover:bg-pink-50 transition-colors`}
                      >
                        {word}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {game.type === 'tap' && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {(game.config.actions || game.config.letters || game.config.symbols || ['Tap Me!']).map((item: string, i: number) => (
                    <button key={i} onClick={() => { setScore(s => s + 1); if (score >= 2) handleWin(); }} className={`p-8 bg-white border-4 ${isPreschool ? 'border-pink-200' : 'border-yellow-400'} rounded-3xl text-4xl hover:scale-110 transition-transform shadow-lg ${isPreschool ? 'text-pink-600' : 'text-indigo-950'} font-bold`}>
                      {item}
                    </button>
                  ))}
                </div>
              )}
              {game.type === 'count' && (
                <div className="flex flex-col items-center gap-8">
                  <div className="flex flex-wrap justify-center gap-4">
                    {[...Array(game.config.max || 5)].map((_, i) => (
                      <div key={i} className="text-6xl animate-pulse">⭐</div>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map(n => (
                      <button key={n} onClick={() => { if (n === (game.config.max || 5)) handleWin(); }} className={`w-16 h-16 bg-white border-2 ${isPreschool ? 'border-pink-200' : 'border-yellow-400'} rounded-full text-2xl font-bold ${isPreschool ? 'text-pink-600' : 'text-indigo-950'} hover:bg-pink-50`}>
                        {n}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {game.type === 'wave' && (
                <div onClick={() => { setScore(s => s + 1); if (score >= 2) handleWin(); }} className="text-9xl cursor-pointer hover:rotate-12 transition-transform animate-pulse">
                  👋
                </div>
              )}
              {game.type === 'puzzle' && (
                <div className="flex gap-4">
                  {['S', 'P', 'A', 'R', 'K', 'Y'].map((l, i) => (
                    <div key={i} onClick={() => { if (i === score) setScore(s => s + 1); if (score >= 5) handleWin(); }} className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl font-bold border-4 ${score > i ? 'bg-green-400 border-green-500 text-white' : 'bg-white border-pink-300 text-pink-500'}`}>
                      {l}
                    </div>
                  ))}
                </div>
              )}
              {game.type === 'follow_action' && (
                <div onClick={handleWin} className="flex flex-col items-center gap-4">
                  <div className="text-9xl animate-bounce">
                    {game.config.actions?.includes('jump') ? '🏃' : '👏'}
                  </div>
                  <p className={`text-xl font-bold ${isPreschool ? 'text-pink-400' : 'text-yellow-400'} uppercase tracking-widest`}>Tap to perform!</p>
                </div>
              )}
              {game.type === 'magic_mirror' && (
                <div className="flex flex-col items-center gap-8">
                  <div className="text-9xl animate-pulse">🪞</div>
                  <div className="grid grid-cols-3 gap-4">
                    {game.config.options.map((opt: string) => (
                      <button key={opt} onClick={() => { if (opt === game.config.part) handleWin(); }} className="p-4 bg-white/10 border-2 border-yellow-400 rounded-xl text-xl hover:bg-yellow-400 hover:text-indigo-950 transition-all uppercase font-bold">{opt}</button>
                    ))}
                  </div>
                </div>
              )}

              {game.type === 'magic_number_line' && (
                <div className="flex flex-col items-center gap-8 w-full">
                  <div className="flex items-center justify-between w-full px-10 relative h-20">
                    <div className="absolute top-1/2 left-0 right-0 h-2 bg-white/20 -translate-y-1/2"></div>
                    {game.config.numbers.map((n: number | null, i: number) => (
                      <div key={i} className="relative z-10 flex flex-col items-center">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${n === null ? 'bg-yellow-400/20 border-2 border-dashed border-yellow-400 animate-pulse' : 'bg-white text-indigo-950'}`}>
                          {n === null ? '?' : n}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {[1, 2, 3, 4, 5].map(n => (
                      <button key={n} onClick={() => { if (n === game.config.correctAnswer) handleWin(); }} className="w-14 h-14 bg-yellow-400 text-indigo-950 rounded-full text-2xl font-bold hover:scale-110 transition-transform">{n}</button>
                    ))}
                  </div>
                </div>
              )}

              {game.type === 'day_night_spell' && (
                <div className="flex flex-col items-center gap-8">
                  <div className={`w-64 h-40 rounded-3xl border-4 border-dashed flex items-center justify-center text-8xl ${game.config.skyType === 'day' ? 'bg-sky-400/20 border-sky-400' : 'bg-indigo-950/40 border-indigo-400'}`}>
                    {won ? game.config.correctAnswer : '?'}
                  </div>
                  <div className="flex gap-8">
                    {game.config.options.map((opt: string) => (
                      <button key={opt} onClick={() => { if (opt === game.config.correctAnswer) handleWin(); }} className="text-7xl hover:scale-125 transition-transform">{opt}</button>
                    ))}
                  </div>
                </div>
              )}

              {game.type === 'potion_addition' && (
                <div className="flex flex-col items-center gap-8">
                  <div className="text-6xl mb-4">🧪 {game.config.problem} = ?</div>
                  <div className="flex gap-4">
                    {[3, 4, 5, 6, 7].map(n => (
                      <button key={n} onClick={() => { if (n === game.config.answer) handleWin(); }} className="w-16 h-16 bg-purple-500 text-white rounded-full text-2xl font-bold hover:bg-purple-600 transition-colors shadow-lg">{n}</button>
                    ))}
                  </div>
                </div>
              )}

              {game.type === 'coin_treasure' && (
                <div className="flex flex-col items-center gap-8">
                  <div className="flex gap-4 text-6xl">
                    {game.config.coins.map((c: string, i: number) => <span key={i} className="animate-bounce" style={{animationDelay: `${i*0.1}s`}}>🪙</span>)}
                  </div>
                  <p className="text-xl text-yellow-400">How many coins?</p>
                  <div className="flex gap-4">
                    {[1, 2, 3, 4, 5].map(n => (
                      <button key={n} onClick={() => { if (n === game.config.answer) handleWin(); }} className="w-14 h-14 bg-yellow-400 text-indigo-950 rounded-full text-2xl font-bold hover:scale-110 transition-transform">{n}</button>
                    ))}
                  </div>
                </div>
              )}

              {game.type === 'missing_letter' && (
                <div className="flex flex-col items-center gap-8">
                  <div className="text-6xl font-bold tracking-widest text-white">
                    {game.config.word.split('').map((c: string, i: number) => (
                      <span key={i} className={c === '_' ? 'text-yellow-400 animate-pulse underline' : ''}>
                        {c === '_' && won ? game.config.correct : c}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {game.config.options.map((opt: string) => (
                      <button key={opt} onClick={() => { if (opt === game.config.correct) handleWin(); }} className="w-16 h-16 bg-white/10 border-2 border-yellow-400 rounded-xl text-3xl font-bold hover:bg-yellow-400 hover:text-indigo-950 transition-all">{opt}</button>
                    ))}
                  </div>
                </div>
              )}

              {game.type === 'shape_spell' && (
                <div className="flex flex-col items-center gap-8">
                  <div className="text-9xl mb-4">{game.config.shape}</div>
                  <div className="flex gap-4">
                    {game.config.options.map((opt: string) => (
                      <button key={opt} onClick={() => { if (opt === game.config.correct) handleWin(); }} className="p-4 bg-white/10 border-2 border-yellow-400 rounded-xl text-2xl font-bold hover:bg-yellow-400 hover:text-indigo-950 transition-all uppercase">{opt}</button>
                    ))}
                  </div>
                </div>
              )}

              {game.type === 'hindi_word_treasure' && (
                <div className="flex flex-col items-center gap-8">
                  <div className="text-9xl mb-4">{game.config.image}</div>
                  <div className="grid grid-cols-3 gap-4">
                    {game.config.options.map((opt: string) => (
                      <button key={opt} onClick={() => { if (opt === game.config.correctAnswer) handleWin(); }} className="p-4 bg-white/10 border-2 border-yellow-400 rounded-xl text-2xl font-bold hover:bg-yellow-400 hover:text-indigo-950 transition-all">{opt}</button>
                    ))}
                  </div>
                </div>
              )}
              {![ 'drag_drop', 'color_pop', 'match', 'word_builder', 'tap', 'count', 'wave', 'puzzle', 'follow_action', 'sorting_hat', 'owl_match', 'dragon_eggs', 'sentence_builder', 'spell_word', 'forbidden_forest_hunt', 'magic_mirror', 'magic_number_line', 'day_night_spell', 'potion_addition', 'coin_treasure', 'missing_letter', 'hindi_word_treasure', 'shape_spell'].includes(game.type) && (
                <div onClick={handleWin} className="text-9xl cursor-pointer hover:scale-110 transition-transform">
                  {game.type.includes('mirror') ? '🪞' : game.type.includes('forest') ? '🌲' : game.type.includes('spell') ? '🪄' : game.type.includes('potion') ? '🧪' : '🎮'}
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="text-9xl animate-bounce mb-4">🎉</div>
              <p className={`text-3xl font-bold ${isPreschool ? 'text-green-500' : 'text-yellow-400'} bangers tracking-widest`}>AMAZING!</p>
            </div>
          )}
        </div>

        {won && (
          <Button variant="magical" onClick={onComplete} className={`w-full py-6 text-3xl bangers ${isPreschool ? 'bg-pink-500 hover:bg-pink-600' : ''}`}>I Finished! ✨</Button>
        )}
        {!won && (
           <Button variant="secondary" onClick={onBack} className="mt-4 opacity-50">Skip Game</Button>
        )}
      </div>
    </div>
  );
};

const RewardScreen: React.FC<{ lesson: Lesson | null, onComplete: () => void, profile: any, nextLessonTitle?: string }> = ({ lesson, onComplete, profile, nextLessonTitle }) => {
  const lang = profile?.language || 'English';
  const isPreschool = profile?.classLevel === 'Preschool';
  const stars = 3; // For now fixed 3 stars for completion
  const rewardText = lesson?.miniGame?.config?.reward || (lang === 'Telugu' ? "అద్భుతం! మీరు 3 నక్షత్రాలను గెలుచుకున్నారు!" : lang === 'Hindi' ? "बहुत बढ़िया! आपने 3 सितारे जीते हैं!" : "Great job! You earned 3 stars!");

  useEffect(() => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = rewardText;
    msg.lang = lang === 'Telugu' ? 'te-IN' : lang === 'Hindi' ? 'hi-IN' : 'en-US';
    window.speechSynthesis.speak(msg);
  }, []);

  return (
    <div className={`h-full ${isPreschool ? 'candy-bg' : 'magic-bg'} flex flex-col items-center justify-center p-6 text-center`}>
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={`max-w-2xl w-full ${isPreschool ? 'bg-white/90 border-pink-400' : 'bg-slate-900 border-yellow-400'} border-4 rounded-[4rem] p-12 shadow-2xl relative overflow-hidden`}
      >
        {!isPreschool && (
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
            <div className="absolute top-10 left-10 text-6xl rotate-12">📜</div>
            <div className="absolute bottom-10 right-10 text-6xl -rotate-12">🪄</div>
            <div className="absolute top-1/2 left-1/4 text-4xl">✨</div>
            <div className="absolute bottom-1/4 right-1/3 text-4xl">✨</div>
          </div>
        )}

        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-9xl mb-8"
        >
          {isPreschool ? '🎉' : '🏆'}
        </motion.div>

        <h2 className={`text-5xl md:text-6xl font-bold bangers ${isPreschool ? 'text-pink-600' : 'text-yellow-400'} mb-6 uppercase tracking-widest leading-tight`}>
          {isPreschool ? 'Great Job!' : 'Mischief Managed!'}
        </h2>
        
        <p className={`text-2xl font-bold ${isPreschool ? 'text-pink-400' : 'text-white'} mb-10 uppercase tracking-widest`}>
          {rewardText}
        </p>
        
        <div className="flex justify-center gap-4 mb-12">
          {[...Array(stars)].map((_, i) => (
            <motion.span 
              key={i} 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.2, type: 'spring' }}
              className="text-7xl"
            >
              ⭐
            </motion.span>
          ))}
        </div>

        <div className={`${isPreschool ? 'bg-pink-50 border-pink-200' : 'bg-white/5 border-yellow-400/20'} p-6 rounded-3xl border-2 mb-10`}>
          <p className={`text-xl font-bold ${isPreschool ? 'text-pink-600' : 'text-yellow-400'} uppercase tracking-widest mb-2`}>
            {isPreschool ? 'Next Adventure Unlocked!' : 'New Magic Unlocked!'}
          </p>
          <p className={`text-2xl font-bold ${isPreschool ? 'text-pink-500' : 'text-white'}`}>
            {isPreschool ? 'Keep going to unlock new buddies! 🐾' : 'Your magical journey continues! 🚂'}
          </p>
        </div>

        <div className="space-y-4">
          <Button 
            variant="magical" 
            onClick={onComplete} 
            className={`w-full py-6 text-3xl bangers ${isPreschool ? 'bg-pink-500 hover:bg-pink-600' : ''} shadow-xl flex items-center justify-center gap-4`}
          >
            {nextLessonTitle ? (
              <>
                {isPreschool ? 'Next Lesson' : 'Board the Express'} 
                <span className="text-4xl">{isPreschool ? '➡️' : '🚂'}</span>
              </>
            ) : (
              <>
                Back to Map 
                <span className="text-4xl">🗺️</span>
              </>
            )}
          </Button>
          
          {nextLessonTitle && (
            <p className={`text-lg font-bold ${isPreschool ? 'text-pink-400' : 'text-yellow-400/60'} uppercase tracking-widest`}>
              Next: {nextLessonTitle}
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
};
const FriendsZone: React.FC<{ profile: any, onBack: () => void, onHome: () => void, onReload: () => void, onSwitchClass: () => void }> = ({ profile, onBack, onHome, onReload, onSwitchClass }) => {
  const [requests, setRequests] = useState([
    { id: 'r1', name: 'Arjun Reddy', avatar: CLASS_1_5_AVATARS[0].image, house: 'Ignivar' },
    { id: 'r2', name: 'Sita Devi', avatar: CLASS_1_5_AVATARS[1].image, house: 'Verdantis' }
  ]);

  const [friends, setFriends] = useState([
    { id: 'f1', name: 'Rahul Kumar', avatar: CLASS_1_5_AVATARS[2].image, house: 'Aetherion', status: 'Online' },
    { id: 'f2', name: 'Priya Sharma', avatar: CLASS_1_5_AVATARS[3].image, house: 'Lunaris', status: 'In Class' }
  ]);

  const acceptRequest = (id: string) => {
    const req = requests.find(r => r.id === id);
    if (req) {
      setFriends([...friends, { ...req, status: 'Online' }]);
      setRequests(requests.filter(r => r.id !== id));
    }
  };

  return (
    <div className="h-full magic-bg text-white flex flex-col">
      <Header title="Friends Request Zone" onBack={onBack} onHome={onHome} onReload={onReload} onSwitchClass={onSwitchClass} />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-4xl mx-auto w-full space-y-10">
          <section>
            <h3 className="text-3xl font-bold bangers tracking-widest text-yellow-400 mb-6 uppercase">New Requests ✨</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requests.map(req => (
                <div key={req.id} className="bg-slate-900 border-2 border-yellow-400/30 p-6 rounded-3xl flex items-center gap-6">
                  <img src={req.avatar} className="w-16 h-16 rounded-full border-2 border-yellow-400" alt={req.name} />
                  <div className="flex-1">
                    <p className="text-xl font-bold">{req.name}</p>
                    <p className="text-sm text-yellow-400/60 uppercase font-bold tracking-widest">{req.house}</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => acceptRequest(req.id)} className="bg-emerald-500 p-3 rounded-full hover:bg-emerald-600 transition-colors">✅</button>
                    <button onClick={() => setRequests(requests.filter(r => r.id !== req.id))} className="bg-red-500 p-3 rounded-full hover:bg-red-600 transition-colors">❌</button>
                  </div>
                </div>
              ))}
              {requests.length === 0 && <p className="text-white/40 italic">No new requests...</p>}
            </div>
          </section>

          <section>
            <h3 className="text-3xl font-bold bangers tracking-widest text-yellow-400 mb-6 uppercase">My Magic Circle 🤝</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {friends.map(friend => (
                <div key={friend.id} className="bg-white/5 border-2 border-white/10 p-6 rounded-3xl flex items-center gap-6">
                  <img src={friend.avatar} className="w-16 h-16 rounded-full border-2 border-white/20" alt={friend.name} />
                  <div className="flex-1">
                    <p className="text-xl font-bold">{friend.name}</p>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${friend.status === 'Online' ? 'bg-emerald-500' : 'bg-yellow-500'}`}></div>
                      <p className="text-xs uppercase font-bold tracking-widest opacity-60">{friend.status}</p>
                    </div>
                  </div>
                  <Button variant="secondary" className="text-xs py-2" onClick={() => {}}>Message</Button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const Leaderboard: React.FC<{ profile: any, onBack: () => void, onHome: () => void, onReload: () => void, onSwitchClass: () => void }> = ({ profile, onBack, onHome, onReload, onSwitchClass }) => {
  const leaders = [
    { id: 'l1', name: 'Rahul Kumar', xp: 12500, house: 'Aetherion', rank: 1, avatar: CLASS_1_5_AVATARS[0].image },
    { id: 'l2', name: 'Priya Sharma', xp: 11200, house: 'Lunaris', rank: 2, avatar: CLASS_1_5_AVATARS[1].image },
    { id: 'l3', name: 'Arjun Reddy', xp: 10800, house: 'Ignivar', rank: 3, avatar: CLASS_1_5_AVATARS[2].image },
    { id: 'l4', name: 'Sita Devi', xp: 9500, house: 'Verdantis', rank: 4, avatar: CLASS_1_5_AVATARS[3].image },
    { id: 'l5', name: profile?.studentName || 'You', xp: profile?.progress?.xp || 0, house: profile?.house || 'Aetherion', rank: 5, avatar: CLASS_1_5_AVATARS[4].image, isYou: true }
  ].sort((a, b) => b.xp - a.xp).map((l, i) => ({ ...l, rank: i + 1 }));

  return (
    <div className="h-full magic-bg text-white flex flex-col">
      <Header title="Leadership Board" onBack={onBack} onHome={onHome} onReload={onReload} onSwitchClass={onSwitchClass} />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-3xl mx-auto w-full space-y-8">
          <div className="text-center mb-12">
            <div className="text-8xl mb-4">🏆</div>
            <h3 className="text-4xl font-bold bangers tracking-widest text-yellow-400 uppercase">School Legends</h3>
            <p className="text-indigo-200 italic">Only the most dedicated wizards reach the top!</p>
          </div>

          <div className="space-y-4">
            {leaders.map(leader => (
              <div key={leader.id} className={`p-6 rounded-3xl flex items-center gap-6 border-2 transition-all ${leader.isYou ? 'bg-yellow-400/20 border-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.3)]' : 'bg-slate-900 border-white/10'}`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold bangers text-2xl ${leader.rank === 1 ? 'bg-yellow-400 text-indigo-950' : leader.rank === 2 ? 'bg-slate-300 text-indigo-950' : leader.rank === 3 ? 'bg-orange-400 text-indigo-950' : 'bg-white/10 text-white'}`}>
                  {leader.rank}
                </div>
                <img src={leader.avatar} className="w-16 h-16 rounded-full border-2 border-white/20" alt={leader.name} />
                <div className="flex-1">
                  <p className="text-xl font-bold">{leader.name} {leader.isYou && <span className="text-xs bg-yellow-400 text-indigo-950 px-2 py-0.5 rounded-full ml-2">YOU</span>}</p>
                  <p className="text-xs uppercase font-bold tracking-widest opacity-60">{leader.house}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold bangers text-yellow-400">{leader.xp.toLocaleString()}</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest opacity-40">XP POINTS</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TeacherDashboard: React.FC<{ profile: UserProfile | null, onLogout: () => void, onReload: () => void, onSwitchClass: () => void, onHome: () => void, onBack: () => void }> = ({ profile, onLogout, onReload, onSwitchClass, onHome, onBack }) => {
  const [activeTab, setActiveTab] = useState<'progress' | 'assign' | 'upload' | 'messages'>('progress');
  const [students, setStudents] = useState<UserProfile[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [replyText, setReplyText] = useState<string>('');
  const [selectedParentId, setSelectedParentId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showAddStudent, setShowAddStudent] = useState(false);
  const [studentEmailToLink, setStudentEmailToLink] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<UserProfile | null>(null);
  const [customLessons, setCustomLessons] = useState<Lesson[]>([]);
  const [uploadData, setUploadData] = useState({
    title: '',
    youtubeUrl: '',
    description: '',
    grade: 'Class 1' as ClassLevel,
    subject: 'English',
    quizQuestion: '',
    quizOptions: ['', '', '', ''],
    quizAnswer: 0
  });

  const [mockStudents, setMockStudents] = useState<UserProfile[]>([
    {
      uid: 'mock_1',
      id: 'mock_1',
      studentName: 'Harry Potter (Mock)',
      classLevel: 'Class 1',
      progress: { 
        timeSpent: 120, 
        lessonsCompleted: ['c1_cbse_eng_1'], 
        quizScores: { 'c1_cbse_eng_1': 90 }, 
        starsEarned: 15, 
        quizzesCompleted: [],
        gamesPlayed: [],
        lessonStars: {},
        xp: 150,
        housePoints: 150,
        unlockedAvatars: [],
        currentAvatar: 'lion',
        unlockedLessons: [],
        subjectTimeSpent: {}
      },
      role: 'Student',
      email: 'harry@mock.com',
      schoolName: 'Hogwarts',
      createdAt: '',
      teacherId: profile?.uid || '',
      assignedLessons: [],
      language: 'English',
      board: 'CBSE',
      house: 'Ignivar'
    },
    {
      uid: 'mock_2',
      id: 'mock_2',
      studentName: 'Hermione Granger (Mock)',
      classLevel: 'Class 1',
      progress: { 
        timeSpent: 300, 
        lessonsCompleted: ['c1_cbse_eng_1', 'c1_cbse_math_1'], 
        quizScores: { 'c1_cbse_eng_1': 100, 'c1_cbse_math_1': 100 }, 
        starsEarned: 50, 
        quizzesCompleted: [],
        gamesPlayed: [],
        lessonStars: {},
        xp: 500,
        housePoints: 500,
        unlockedAvatars: [],
        currentAvatar: 'owl',
        unlockedLessons: [],
        subjectTimeSpent: {}
      },
      role: 'Student',
      email: 'hermione@mock.com',
      schoolName: 'Hogwarts',
      createdAt: '',
      teacherId: profile?.uid || '',
      assignedLessons: [],
      language: 'English',
      board: 'CBSE',
      house: 'Aetherion'
    }
  ]);

  useEffect(() => {
    if (!profile?.uid) return;
    
    // Fetch students assigned to this teacher
    const q = query(collection(db, 'users'), where('teacherId', '==', profile.uid));
    const unsubscribeStudents = onSnapshot(q, (snapshot) => {
      const sList = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as UserProfile));
      setStudents(sList);
    });

    // Fetch custom lessons uploaded by this teacher
    const lq = query(collection(db, 'lessons'), where('teacherId', '==', profile.uid));
    const unsubscribeLessons = onSnapshot(lq, (snapshot) => {
      setCustomLessons(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as Lesson)));
    });

    // Fetch messages for this teacher
    const mq = query(collection(db, 'messages'), where('receiverId', '==', profile.uid), orderBy('timestamp', 'desc'));
    const unsubscribeMessages = onSnapshot(mq, (snapshot) => {
      const mList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Message));
      setMessages(mList);
    });

    return () => {
      unsubscribeStudents();
      unsubscribeLessons();
      unsubscribeMessages();
    };
  }, [profile?.uid]);

  const handleAssignLesson = async (studentId: string, lessonId: string) => {
    if (studentId.startsWith('mock_')) {
      setMockStudents(prev => prev.map(s => {
        if (s.uid === studentId || s.id === studentId) {
          const assigned = s.assignedLessons || [];
          if (!assigned.includes(lessonId)) {
            return { ...s, assignedLessons: [...assigned, lessonId] };
          }
        }
        return s;
      }));
      alert('Lesson assigned to Mock Student! Check their progress update.');
      return;
    }
    try {
      const studentDoc = await getDoc(doc(db, 'users', studentId));
      if (studentDoc.exists()) {
        const studentData = studentDoc.data() as UserProfile;
        const assigned = studentData.assignedLessons || [];
        if (!assigned.includes(lessonId)) {
          // Real assignment in assignments collection for tracking
          await addDoc(collection(db, 'assignments'), {
            studentId,
            lessonId,
            teacherId: profile.uid,
            assignedAt: new Date().toISOString(),
            status: 'assigned'
          });
          
          // Also update user doc for legacy compatibility
          await updateDoc(doc(db, 'users', studentId), {
            assignedLessons: [...assigned, lessonId]
          });
          
          alert('Lesson assigned successfully! ✨');
        } else {
          alert('Lesson already assigned.');
        }
      }
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `users/${studentId}`);
    }
  };

  const handleSendReply = async () => {
    if (!replyText || !selectedParentId || !profile) return;
    try {
      await addDoc(collection(db, 'messages'), {
        senderId: profile.uid,
        senderName: profile.studentName || 'Teacher',
        receiverId: selectedParentId,
        text: replyText,
        timestamp: new Date().toISOString(),
        read: false
      });
      setReplyText('');
      alert('Reply sent!');
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, 'messages');
    }
  };

  const handlePublish = async () => {
    if (!uploadData.title || !uploadData.youtubeUrl) {
      alert('Please fill in title and YouTube URL');
      return;
    }

    setLoading(true);
    try {
      const lessonId = `custom_${Date.now()}`;
      const newLesson: Lesson = {
        id: lessonId,
        title: uploadData.title,
        videoUrl: uploadData.youtubeUrl,
        description: uploadData.description || 'Custom lesson uploaded by teacher.',
        class: uploadData.grade,
        subject: uploadData.subject,
        storyIntro: uploadData.description || uploadData.title,
        explanation: uploadData.description,
        teacherId: profile.uid,
        createdAt: new Date().toISOString(),
        videoStyle: 'Teacher Upload',
        type: 'video',
        visualExamples: '',
        ruralExample: '',
        voiceOverEn: uploadData.description || '',
        voiceOverTe: '',
        voiceOverHi: '',
        quiz: uploadData.quizQuestion ? [
          {
            text: uploadData.quizQuestion,
            options: uploadData.quizOptions.filter(o => o.trim() !== ''),
            correct: uploadData.quizAnswer,
            audioEn: '',
            audioTe: '',
            audioHi: ''
          }
        ] : []
      };

      await setDoc(doc(db, 'lessons', lessonId), newLesson);
      alert('Lesson Published Successfully! ✨');
      setUploadData({ 
        title: '', 
        youtubeUrl: '', 
        description: '', 
        grade: 'Class 1', 
        subject: 'English',
        quizQuestion: '',
        quizOptions: ['', '', '', ''],
        quizAnswer: 0 
      });
    } catch (error) {
      console.error('Error publishing lesson:', error);
      alert('Failed to publish. Check permissions.');
    } finally {
      setLoading(false);
    }
  };

  const handleLinkStudent = async () => {
    if (!studentEmailToLink || !profile) return;
    try {
      const q = query(collection(db, 'users'), where('email', '==', studentEmailToLink.toLowerCase()));
      const snapshot = await getDocs(q);
      if (snapshot.empty) {
        alert('Student not found with this email.');
        return;
      }
      const studentDoc = snapshot.docs[0];
      await updateDoc(doc(db, 'users', studentDoc.id), {
        teacherId: profile.uid
      });
      alert('Student linked successfully! ✨');
      setStudentEmailToLink('');
      setShowAddStudent(false);
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, 'users');
    }
  };

  const allStudents = [...students, ...mockStudents];

  return (
    <div className="min-h-screen magic-bg text-white flex flex-col overflow-hidden">
      <Header title="Teacher Portal" onBack={onBack} onHome={onHome} onReload={onReload} onSwitchClass={onSwitchClass} />
      
      <div className="flex-1 overflow-y-auto p-4 md:p-8">
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2 no-scrollbar sticky top-0 bg-slate-950/80 backdrop-blur-md z-20 p-2 rounded-2xl">
          <Button variant={activeTab === 'progress' ? 'primary' : 'secondary'} onClick={() => setActiveTab('progress')}>Student Progress</Button>
          <Button variant={activeTab === 'assign' ? 'primary' : 'secondary'} onClick={() => setActiveTab('assign')}>Assign Work</Button>
          <Button variant={activeTab === 'upload' ? 'primary' : 'secondary'} onClick={() => setActiveTab('upload')}>Upload Content</Button>
          <Button variant={activeTab === 'messages' ? 'primary' : 'secondary'} onClick={() => setActiveTab('messages')}>Messages</Button>
        </div>

        {activeTab === 'progress' && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-auto">
                <div className="bg-slate-900 p-6 rounded-3xl border-2 border-emerald-500/30">
                  <p className="text-emerald-400 font-bold uppercase text-xs mb-1">Total Students</p>
                  <p className="text-4xl font-bold bangers">{allStudents.length}</p>
                </div>
              </div>
              <Button variant="magical" onClick={() => setShowAddStudent(true)}>+ Link Real Student</Button>
            </div>

            {showAddStudent && (
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="bg-slate-900 p-6 rounded-3xl border-2 border-emerald-500/50 mb-6">
                <h4 className="text-lg font-bold mb-4">Link Student by Email</h4>
                <div className="flex flex-col md:flex-row gap-2">
                  <input 
                    type="email" 
                    placeholder="student@rurallearn.com"
                    className="flex-1 bg-white/5 border-2 border-white/20 rounded-xl p-3 text-white outline-none focus:border-emerald-500"
                    value={studentEmailToLink}
                    onChange={e => setStudentEmailToLink(e.target.value)}
                  />
                  <div className="flex gap-2">
                    <Button onClick={handleLinkStudent}>Link</Button>
                    <Button variant="secondary" onClick={() => setShowAddStudent(false)}>Cancel</Button>
                  </div>
                </div>
              </motion.div>
            )}

            <div className="bg-slate-900 rounded-3xl border-2 border-white/10 overflow-x-auto">
              <table className="w-full text-left min-w-[600px]">
                <thead className="bg-white/5 text-emerald-400 uppercase text-xs font-bold">
                  <tr>
                    <th className="p-4">Student</th>
                    <th className="p-4">Grade</th>
                    <th className="p-4">Time Spent</th>
                    <th className="p-4">Lessons</th>
                    <th className="p-4">Avg Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {allStudents.map((s: any) => (
                    <tr key={s.uid || s.id} className="hover:bg-white/5 transition-colors">
                      <td className="p-4 font-bold">{s.studentName}</td>
                      <td className="p-4 opacity-70">{s.classLevel}</td>
                      <td className="p-4">{s.progress?.timeSpent || 0}m</td>
                      <td className="p-4">{s.progress?.lessonsCompleted?.length || 0}</td>
                      <td className="p-4 text-emerald-400 font-bold">
                        {Object.values(s.progress?.quizScores || {}).length > 0 
                          ? Math.round((Object.values(s.progress?.quizScores || {}) as number[]).reduce((a: number, b: number) => a + b, 0) / Object.values(s.progress?.quizScores || {}).length) 
                          : 0}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'assign' && (
          <div className="bg-slate-900 p-4 md:p-8 rounded-[2rem] md:rounded-[3rem] border-4 border-emerald-500/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold bangers text-emerald-400 mb-6 uppercase">Assign Magic Work</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h4 className="text-lg font-bold text-emerald-400">1. Select Student</h4>
                <div className="grid grid-cols-1 gap-3 max-h-[400px] overflow-y-auto pr-2 no-scrollbar">
                  {allStudents.map(student => (
                    <button 
                      key={student.uid || student.id}
                      onClick={() => setSelectedStudent(student)}
                      className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${selectedStudent?.uid === student.uid ? 'bg-emerald-500/20 border-emerald-500' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
                    >
                      <div className="text-left">
                        <p className="font-bold">{student.studentName}</p>
                        <p className="text-xs opacity-60">{student.classLevel}</p>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedStudent?.uid === student.uid ? 'bg-emerald-500 border-emerald-500' : 'border-white/20'}`}>
                        {selectedStudent?.uid === student.uid && <CheckCircle2 className="w-4 h-4 text-white" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-lg font-bold text-emerald-400">2. Choose Magic Lesson</h4>
                {selectedStudent ? (
                  <div className="space-y-6">
                    {customLessons.length > 0 && (
                      <div className="space-y-3">
                        <p className="text-xs font-bold uppercase tracking-widest text-white/40">My Uploads</p>
                        {customLessons.map(l => (
                          <div key={l.id} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border-2 border-white/10">
                            <span className="font-medium text-sm">{l.title}</span>
                            <Button variant="magical" onClick={() => handleAssignLesson(selectedStudent.uid || selectedStudent.id, l.id)}>Assign</Button>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="space-y-3">
                      <p className="text-xs font-bold uppercase tracking-widest text-white/40">Magic Syllabus ({selectedStudent.classLevel})</p>
                      <div className="max-h-[300px] overflow-y-auto space-y-2 pr-2 no-scrollbar">
                        {Object.values(SYLLABUS[selectedStudent.classLevel]?.[selectedStudent.board || 'Common'] || {}).flat().map((l: any) => (
                          <div key={l.id} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border-2 border-white/10">
                            <span className="font-medium text-sm">{l.title}</span>
                            <Button onClick={() => handleAssignLesson(selectedStudent.uid || selectedStudent.id, l.id)}>Assign</Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white/5 border-2 border-dashed border-white/10 rounded-3xl p-12 text-center text-white/40">
                    <p>Please select a student first</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'upload' && (
          <div className="bg-slate-900 p-8 rounded-[3rem] border-4 border-emerald-500/30 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold bangers text-emerald-400 mb-6 uppercase">Upload Magic Content</h3>
            <div className="space-y-4">
              <input 
                placeholder="Lesson Title" 
                className="w-full p-4 bg-white/5 border-2 border-white/20 rounded-2xl text-white outline-none focus:border-emerald-500" 
                value={uploadData.title}
                onChange={e => setUploadData({...uploadData, title: e.target.value})}
              />
              <input 
                placeholder="YouTube URL" 
                className="w-full p-4 bg-white/5 border-2 border-white/20 rounded-2xl text-white outline-none focus:border-emerald-500" 
                value={uploadData.youtubeUrl}
                onChange={e => setUploadData({...uploadData, youtubeUrl: e.target.value})}
              />
              <div className="grid grid-cols-2 gap-4">
                <select 
                  className="w-full p-4 bg-white/5 border-2 border-white/20 rounded-2xl text-white outline-none focus:border-emerald-500"
                  value={uploadData.grade}
                  onChange={e => setUploadData({...uploadData, grade: e.target.value as ClassLevel})}
                >
                  <option value="Preschool">Preschool</option>
                  <option value="Class 1">Class 1</option>
                  <option value="Class 2">Class 2</option>
                  <option value="Class 3">Class 3</option>
                  <option value="Class 4">Class 4</option>
                  <option value="Class 5">Class 5</option>
                </select>
                <select 
                  className="w-full p-4 bg-white/5 border-2 border-white/20 rounded-2xl text-white outline-none focus:border-emerald-500"
                  value={uploadData.subject}
                  onChange={e => setUploadData({...uploadData, subject: e.target.value})}
                >
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Telugu">Telugu</option>
                  <option value="Hindi">Hindi</option>
                  <option value="EVS">EVS</option>
                </select>
              </div>
              <textarea 
                placeholder="Story Introduction / Description" 
                className="w-full p-4 bg-white/5 border-2 border-white/20 rounded-2xl text-white outline-none focus:border-emerald-500 h-32" 
                value={uploadData.description}
                onChange={e => setUploadData({...uploadData, description: e.target.value})}
              />
              
              <div className="bg-white/5 p-6 rounded-3xl border-2 border-white/10 space-y-4">
                <h4 className="text-emerald-400 font-black uppercase tracking-widest text-sm">Magic Quiz (Optional)</h4>
                <input 
                  placeholder="Quiz Question" 
                  className="w-full p-4 bg-black/20 border-2 border-white/10 rounded-xl text-white outline-none focus:border-emerald-500" 
                  value={uploadData.quizQuestion}
                  onChange={e => setUploadData({...uploadData, quizQuestion: e.target.value})}
                />
                <div className="grid grid-cols-2 gap-3">
                  {uploadData.quizOptions.map((opt, idx) => (
                    <input 
                      key={idx}
                      placeholder={`Option ${idx + 1}`} 
                      className="p-3 bg-black/20 border-2 border-white/10 rounded-xl text-white outline-none focus:border-emerald-500 text-sm" 
                      value={opt}
                      onChange={e => {
                        const newOpts = [...uploadData.quizOptions];
                        newOpts[idx] = e.target.value;
                        setUploadData({...uploadData, quizOptions: newOpts});
                      }}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold opacity-50 uppercase">Correct Option:</span>
                  <select 
                    className="bg-black/20 border-2 border-white/10 rounded-lg p-2 text-white outline-none"
                    value={uploadData.quizAnswer}
                    onChange={e => setUploadData({...uploadData, quizAnswer: parseInt(e.target.value)})}
                  >
                    {[0, 1, 2, 3].map(i => <option key={i} value={i}>Option {i+1}</option>)}
                  </select>
                </div>
              </div>

              <Button 
                variant="magical" 
                className="w-full py-4 text-xl bangers uppercase" 
                onClick={handlePublish}
                disabled={loading}
              >
                {loading ? 'Publishing...' : 'Publish Lesson ✨'}
              </Button>
            </div>
          </div>
        )}

        {activeTab === 'messages' && (
          <div className="bg-slate-900 p-4 md:p-8 rounded-[2rem] md:rounded-[3rem] border-4 border-emerald-500/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold bangers text-emerald-400 mb-6 uppercase">Communication Hub</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 space-y-4">
                <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest">Active Chats</h4>
                <div className="space-y-2 overflow-y-auto max-h-[400px] pr-2 no-scrollbar">
                  {Array.from(new Set(messages.map(m => m.senderId === profile?.uid ? m.receiverId : m.senderId))).map(pId => {
                    const lastMsg = messages.find(m => m.senderId === pId || m.receiverId === pId);
                    return (
                      <button 
                        key={pId}
                        onClick={() => setSelectedParentId(pId)}
                        className={`w-full p-4 rounded-2xl border-2 text-left transition-all ${selectedParentId === pId ? 'bg-emerald-500/20 border-emerald-500' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
                      >
                        <p className="font-bold text-sm truncate">{lastMsg?.senderName || 'Parent'}</p>
                        <p className="text-[10px] opacity-40 truncate">{lastMsg?.text}</p>
                      </button>
                    );
                  })}
                  {messages.length === 0 && <p className="text-xs text-white/20 italic">No messages found.</p>}
                </div>
              </div>

              <div className="lg:col-span-2 flex flex-col h-[600px] bg-slate-950/40 rounded-[2rem] border-2 border-white/10 overflow-hidden shadow-2xl">
                {selectedParentId ? (
                  <>
                    <div className="p-4 bg-white/5 border-b border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-xl">👤</div>
                         <div>
                            <p className="font-bold text-emerald-400">{messages.find(m => m.senderId === selectedParentId || m.receiverId === selectedParentId)?.senderName || 'Parent'}</p>
                            <p className="text-[10px] opacity-40 uppercase tracking-widest font-black">Direct Communication</p>
                         </div>
                      </div>
                    </div>
                    <div className="flex-1 overflow-y-auto space-y-4 p-6 no-scrollbar">
                      {messages.filter(m => m.senderId === selectedParentId || m.receiverId === selectedParentId).reverse().map(m => (
                        <div key={m.id} className={`flex ${m.senderId === profile?.uid ? 'justify-end' : 'justify-start'}`}>
                          <div className={`p-4 rounded-2xl border-2 ${m.senderId === profile?.uid ? 'bg-emerald-500 text-white border-emerald-400/50 ml-auto rounded-br-none' : 'bg-white/10 border-white/10 mr-auto rounded-bl-none'} max-w-[85%]`}>
                            <p className="text-sm font-bold leading-snug">{m.text}</p>
                            <p className={`text-[8px] mt-2 opacity-50 font-black ${m.senderId === profile?.uid ? 'text-right' : 'text-left'}`}>{new Date(m.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 bg-white/5 border-t border-white/10 flex gap-2">
                      <input 
                        type="text" 
                        className="flex-1 bg-black/40 border-2 border-white/10 rounded-xl p-4 text-white outline-none text-sm focus:border-emerald-500 transition-all font-bold"
                        placeholder="Type your response..."
                        value={replyText}
                        onChange={e => setReplyText(e.target.value)}
                        onKeyPress={e => e.key === 'Enter' && handleSendReply()}
                      />
                      <button onClick={handleSendReply} className="px-6 bg-emerald-500 rounded-xl text-white font-black uppercase bangers tracking-widest hover:scale-105 active:scale-95 transition-all">Send</button>
                    </div>
                  </>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-center opacity-40 p-12">
                    <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
                      <MessageCircle className="w-24 h-24 mb-6 text-emerald-400" />
                    </motion.div>
                    <h4 className="text-2xl font-black bangers uppercase tracking-widest text-emerald-400 mb-2">Communication Hub</h4>
                    <p className="font-bold text-white/60">Select a parent from the left to start a magic consultation session.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ParentDashboard: React.FC<{ profile: UserProfile | null, onLogout: () => void, onReload: () => void, onSwitchClass: () => void, onHome: () => void, onBack: () => void }> = ({ profile, onLogout, onReload, onSwitchClass, onHome, onBack }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'messages' | 'teachers'>('overview');
  const [messageText, setMessageText] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [childProfile, setChildProfile] = useState<UserProfile | null>(null);
  const [allTeachers, setAllTeachers] = useState<UserProfile[]>([]);
  const [customLessons, setCustomLessons] = useState<Lesson[]>([]);
  const [selectedTeacherId, setSelectedTeacherId] = useState<string>('');

  useEffect(() => {
    if (!profile?.uid) return;

    // Fetch child's profile
    const q = query(collection(db, 'users'), where('parentId', '==', profile.uid));
    const unsubscribeChild = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        setChildProfile(snapshot.docs[0].data() as UserProfile);
      }
    });

    // Fetch all teachers
    const tq = query(collection(db, 'users'), where('role', '==', 'Teacher'));
    const unsubscribeTeachers = onSnapshot(tq, (snapshot) => {
      setAllTeachers(snapshot.docs.map(doc => doc.data() as UserProfile));
    });

    // Fetch all custom lessons (to show titles of assigned custom lessons)
    const lq = query(collection(db, 'lessons'));
    const unsubscribeLessons = onSnapshot(lq, (snapshot) => {
      setCustomLessons(snapshot.docs.map(doc => doc.data() as Lesson));
    });

    // Fetch messages for this parent
    const mq = query(collection(db, 'messages'), where('receiverId', '==', profile.uid), orderBy('timestamp', 'desc'));
    const unsubscribeMessages = onSnapshot(mq, (snapshot) => {
      const mList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Message));
      setMessages(prev => {
        const combined = [...prev, ...mList].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
        return combined.filter((v, i, a) => a.findIndex(t => t.id === v.id) === i);
      });
    });

    // Fetch messages sent by this parent
    const sq = query(collection(db, 'messages'), where('senderId', '==', profile.uid), orderBy('timestamp', 'desc'));
    const unsubscribeSent = onSnapshot(sq, (snapshot) => {
      const sList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Message));
      setMessages(prev => {
        const combined = [...prev, ...sList].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
        return combined.filter((v, i, a) => a.findIndex(t => t.id === v.id) === i);
      });
    });

    return () => {
      unsubscribeChild();
      unsubscribeTeachers();
      unsubscribeLessons();
      unsubscribeMessages();
      unsubscribeSent();
    };
  }, [profile?.uid]);

  useEffect(() => {
    if (childProfile?.teacherId && !selectedTeacherId) {
      setSelectedTeacherId(childProfile.teacherId);
    }
  }, [childProfile?.teacherId]);

  const handleSendMessage = async () => {
    if (!messageText || !profile || !selectedTeacherId) {
      alert('Please select a teacher and type a message.');
      return;
    }
    try {
      await addDoc(collection(db, 'messages'), {
        senderId: profile.uid,
        senderName: profile.studentName || 'Parent',
        receiverId: selectedTeacherId,
        text: messageText,
        timestamp: new Date().toISOString(),
        read: false
      });
      setMessageText('');
      alert('Message sent successfully! ✨');
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, 'messages');
    }
  };

  const stats = childProfile?.progress || {
    timeSpent: 0,
    lessonsCompleted: [],
    quizScores: {},
    starsEarned: 0,
    quizzesCompleted: []
  };

  const avgScore = Object.values(stats.quizScores).length > 0
    ? Math.round(Object.values(stats.quizScores).reduce((a: any, b: any) => a + b, 0) / Object.values(stats.quizScores).length)
    : 0;

  return (
    <div className="min-h-screen magic-bg text-white flex flex-col overflow-hidden">
      <Header title="Parent Portal" onBack={onBack} onHome={onHome} onReload={onReload} onSwitchClass={onSwitchClass} />
      
      <div className="flex-1 overflow-y-auto p-4 md:p-8">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-center bg-indigo-900/50 p-4 rounded-2xl border-2 border-purple-500/20 gap-4">
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 no-scrollbar">
              <Button variant={activeTab === 'overview' ? 'primary' : 'secondary'} className="flex-none" onClick={() => setActiveTab('overview')}>Overview</Button>
              <Button variant={activeTab === 'teachers' ? 'primary' : 'secondary'} className="flex-none" onClick={() => setActiveTab('teachers')}>School Staff</Button>
              <Button variant={activeTab === 'messages' ? 'primary' : 'secondary'} className="flex-none" onClick={() => setActiveTab('messages')}>Direct Message</Button>
            </div>
            <Button variant="danger" className="w-full md:w-auto" onClick={onLogout}>Logout</Button>
          </div>

          {activeTab === 'overview' ? (
            <div className="space-y-6 md:space-y-8 pb-12">
              <div className="bg-indigo-900 p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] border-4 border-purple-500/30 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 flex items-center justify-center text-4xl md:text-5xl">🧒</div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold bangers text-white uppercase">{childProfile?.studentName || 'Your Child'}</h3>
                  <p className="text-purple-300 font-bold uppercase tracking-widest text-sm md:text-base">Grade: {childProfile?.classLevel || 'N/A'}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                <div className="bg-indigo-900 p-4 md:p-6 rounded-3xl border-2 border-purple-500/30 text-center">
                  <p className="text-purple-400 font-bold uppercase text-[10px] md:text-xs mb-1">Time Spent</p>
                  <p className="text-3xl md:text-4xl font-bold bangers">{stats.timeSpent}m</p>
                </div>
                <div className="bg-indigo-900 p-4 md:p-6 rounded-3xl border-2 border-purple-500/30 text-center">
                  <p className="text-purple-400 font-bold uppercase text-[10px] md:text-xs mb-1">Lessons Done</p>
                  <p className="text-3xl md:text-4xl font-bold bangers">{stats.lessonsCompleted.length}</p>
                </div>
                <div className="bg-indigo-900 p-4 md:p-6 rounded-3xl border-2 border-purple-500/30 text-center">
                  <p className="text-purple-400 font-bold uppercase text-[10px] md:text-xs mb-1">Quiz Average</p>
                  <p className="text-3xl md:text-4xl font-bold bangers">{avgScore}%</p>
                </div>
              </div>

              <div className="bg-indigo-900 rounded-[2rem] md:rounded-[3rem] border-2 border-white/10 p-6 md:p-8">
                <h4 className="text-xl md:text-2xl font-bold bangers text-purple-400 mb-6 uppercase">Subject Progress</h4>
                <div className="space-y-6">
                  {Object.keys(SYLLABUS[childProfile?.classLevel || 'Class 1']?.[childProfile?.board || 'Common'] || {}).map(sub => {
                    const subjectLessons = Object.values(SYLLABUS[childProfile?.classLevel || 'Class 1']?.[childProfile?.board || 'Common']?.[sub] || {}).flat();
                    const completed = subjectLessons.filter((l: any) => stats.lessonsCompleted.includes(l.id)).length;
                    const total = subjectLessons.length || 1;
                    const percent = Math.round((completed / total) * 100);
                    return (
                      <div key={sub} className="space-y-2">
                        <div className="flex justify-between font-bold uppercase tracking-widest text-xs md:text-sm">
                          <span>{sub}</span>
                          <span>{percent}%</span>
                        </div>
                        <div className="w-full bg-white/10 h-3 md:h-4 rounded-full overflow-hidden">
                          <div className="bg-purple-500 h-full transition-all duration-1000" style={{ width: `${percent}%` }}></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {childProfile?.assignedLessons && childProfile.assignedLessons.length > 0 && (
                <div className="bg-indigo-900 rounded-[2rem] md:rounded-[3rem] border-2 border-white/10 p-6 md:p-8">
                  <h4 className="text-xl md:text-2xl font-bold bangers text-purple-400 mb-6 uppercase">Assigned by Magic Mentor</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {childProfile.assignedLessons.map(lessonId => {
                      // Check custom first, then syllabus
                      const lesson = customLessons.find(l => l.id === lessonId) || 
                                     (Object.values(SYLLABUS[childProfile.classLevel]?.[childProfile.board || 'Common'] || {}) as any[]).flat().find((l: any) => l.id === lessonId);
                      return (
                        <div key={lessonId} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border-2 border-white/10">
                          <span className="font-bold text-sm md:text-base">{lesson?.title || lessonId}</span>
                          {stats.lessonsCompleted.includes(lessonId) ? <CheckCircle2 className="text-green-400 w-5 h-5 md:w-6 md:h-6" /> : <Lock className="text-slate-500 w-5 h-5 md:w-6 md:h-6" />}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ) : activeTab === 'teachers' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
              {allTeachers.map(t => (
                <Card key={t.uid} className="p-8 border-4 border-slate-900 bg-indigo-900 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-4xl mb-4">
                    👨‍🏫
                  </div>
                  <h4 className="text-xl font-bold">{t.studentName}</h4>
                  <p className="text-purple-300 font-bold uppercase tracking-widest text-xs mb-6 truncate w-full">{t.schoolName || 'Hogwarts Mentor'}</p>
                  <Button className="w-full" onClick={() => {
                    setSelectedTeacherId(t.uid);
                    setActiveTab('messages');
                  }}>Send Message</Button>
                </Card>
              ))}
            </div>
          ) : (
            <div className="bg-indigo-900/80 p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] border-4 border-purple-500/30 overflow-hidden shadow-2xl flex flex-col h-[700px]">
              <div className="mb-6 flex flex-col md:flex-row items-center justify-between gap-4 border-b-2 border-white/10 pb-6">
                <h3 className="text-2xl md:text-3xl font-black bangers text-purple-400 uppercase tracking-widest">
                  {selectedTeacherId ? `Chat with ${allTeachers.find(t => t.uid === selectedTeacherId)?.studentName}` : 'Magic Consultation'}
                </h3>
                <select 
                  className="w-full md:w-auto p-3 bg-black/40 border-2 border-purple-500/30 rounded-xl text-white outline-none focus:border-purple-500 font-bold text-sm"
                  value={selectedTeacherId}
                  onChange={e => setSelectedTeacherId(e.target.value)}
                >
                  <option value="">-- Select Mentor --</option>
                  {allTeachers.map(t => (
                    <option key={t.uid} value={t.uid}>{t.studentName}</option>
                  ))}
                </select>
              </div>

              <div className="flex-1 overflow-y-auto space-y-4 mb-6 p-2 md:p-4 no-scrollbar">
                {selectedTeacherId ? (
                   messages.filter(m => m.senderId === selectedTeacherId || m.receiverId === selectedTeacherId).length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full opacity-30 text-center gap-4">
                       <MessageCircle size={64} />
                       <p className="text-xl font-bold uppercase tracking-widest">No magic scrolls exchanged yet.</p>
                    </div>
                  ) : (
                    messages.filter(m => m.senderId === selectedTeacherId || m.receiverId === selectedTeacherId).reverse().map(m => (
                      <div key={m.id} className={`flex ${m.senderId === profile?.uid ? 'justify-end' : 'justify-start'}`}>
                        <div className={`p-4 rounded-2xl border-2 ${m.senderId === profile?.uid ? 'bg-purple-600 text-white border-purple-400 ml-auto rounded-br-none shadow-lg' : 'bg-white/10 border-white/10 mr-auto rounded-bl-none'} max-w-[85%]`}>
                          <p className="text-sm font-bold leading-snug">{m.text}</p>
                          <div className={`flex items-center gap-2 mt-2 opacity-50 font-black text-[8px] ${m.senderId === profile?.uid ? 'justify-end' : 'justify-start'}`}>
                             <span>{new Date(m.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                          </div>
                        </div>
                      </div>
                    ))
                  )
                ) : (
                  <div className="flex flex-col items-center justify-center h-full opacity-30 text-center gap-4">
                     <span className="text-8xl">🔮</span>
                     <p className="text-xl font-bold uppercase tracking-widest">Gaze into the crystal ball... and choose a teacher.</p>
                  </div>
                )}
              </div>

              {selectedTeacherId && (
                <div className="flex gap-2 bg-black/40 p-2 rounded-2xl border-2 border-purple-500/30">
                  <input 
                    type="text" 
                    className="flex-1 bg-transparent p-4 text-white outline-none text-sm md:text-base font-bold placeholder:text-white/20"
                    placeholder="Send a magic query..."
                    value={messageText}
                    onChange={e => setMessageText(e.target.value)}
                    onKeyPress={e => e.key === 'Enter' && handleSendMessage()}
                  />
                  <button onClick={handleSendMessage} className="px-8 py-3 bg-purple-600 rounded-xl text-white font-black bangers uppercase tracking-widest hover:bg-purple-500 transition-all shadow-xl active:scale-95">Send</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
