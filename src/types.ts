
export type Role = 'Student' | 'Teacher' | 'Parent';
export type Language = 'English' | 'Telugu' | 'Hindi';
export type ClassLevel = 'Preschool' | 'Class 1' | 'Class 2' | 'Class 3' | 'Class 4' | 'Class 5';
export type Board = 'CBSE' | 'Telangana State Board' | 'Common' | null;
export type HouseName = 'Aetherion' | 'Ignivar' | 'Verdantis' | 'Lunaris' | null;

export type AvatarCategory = 'Cartoon' | 'Animal' | 'Fantasy' | 'Vehicle';

export interface Avatar {
  id: string;
  name: string;
  image: string;
  emoji?: string;
  category: AvatarCategory;
  isStarter: boolean;
  unlockRequirement?: {
    type: 'lessons' | 'quizzes' | 'points' | 'level';
    value: number;
    description: string;
  };
}

export interface UserProgress {
  lessonsCompleted: string[];
  quizzesCompleted: string[];
  gamesPlayed: string[];
  starsEarned: number;
  lessonStars: Record<string, number>; // lessonId -> stars (0-3)
  xp: number;
  housePoints: number;
  unlockedAvatars: string[]; // List of avatar IDs
  currentAvatar: string;
  timeSpent: number; // in minutes
  quizScores: Record<string, number>; // lessonId -> score
  subjectTimeSpent: Record<string, number>; // subject -> minutes
  unlockedLessons: string[]; // List of lesson IDs that are unlocked
}

export interface UserProfile {
  id: string;
  uid: string; // Firebase UID
  schoolName: string;
  classLevel: ClassLevel;
  studentName: string;
  email: string;
  role: Role;
  language: Language;
  board: Board;
  house: HouseName;
  progress: UserProgress;
  createdAt: string;
  assignedLessons?: string[]; // For students, assigned by teacher
  parentId?: string;
  teacherId?: string;
  password?: string; // For mock auth
  friends?: string[]; // List of friend UIDs
  friendRequests?: {
    uid: string;
    name: string;
    avatarEmoji: string;
    timestamp: string;
  }[];
  lastSeen?: string;
}

export interface TeacherProfile {
  id: string;
  name: string;
  schoolName: string;
  role: 'Teacher';
  assignedClasses: ClassLevel[];
  students: string[]; // Student IDs
}

export interface ParentProfile {
  id: string;
  name: string;
  role: 'Parent';
  children: string[]; // Student IDs
}

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  receiverId: string;
  text: string;
  timestamp: string;
  read: boolean;
}

export interface QuizQuestion {
  text: string;
  options: string[];
  correct: number;
  audioEn: string;
  audioTe: string;
  audioHi: string;
}

export interface Unit {
  id: string;
  name: string;
  description: string;
  icon: string;
  lessons: Lesson[];
  reviewGame: Lesson;
}

export interface Lesson {
  id: string;
  class: ClassLevel;
  title: string;
  subject: string;
  description: string;
  storyIntro: string;
  videoStyle: string;
  videoUrl: string;
  videoUrlTe?: string;
  videoUrlHi?: string;
  visualExamples: string;
  explanation?: string;
  ruralExample: string;
  voiceOverEn: string;
  voiceOverTe: string;
  voiceOverHi: string;
  type: 'video' | 'interactive' | 'rhyme' | 'theme_lesson';
  teacherId?: string;
  createdAt?: string;
  miniGame?: {
    type: 'drag_drop' | 'match' | 'catch' | 'sound_match' | 'puzzle' | 'follow_action' | 'color_pop' | 'paint' | 'sort' | 'clean' | 'count' | 'bounce' | 'grow' | 'wave' | 'family_tree' | 'arrange' | 'slide' | 'word_builder' | 'tap' | 'sorting_hat' | 'owl_match' | 'dragon_eggs' | 'magic_mirror' | 'magic_picture_match' | 'sentence_builder' | 'spell_word' | 'forbidden_forest_hunt' | 'shape_spell' | 'magic_number_line' | 'day_night_spell' | 'coin_treasure' | 'potion_addition' | 'family_castle' | 'healthy_potion' | 'wizard_garden' | 'magic_forest_animals' | 'owl_alphabet' | 'letter_magic' | 'hindi_word_treasure' | 'missing_letter' | 'brush' | 'feed' | 'find' | 'drive' | 'build';
    config: any;
  };
  quiz?: QuizQuestion[];
}
