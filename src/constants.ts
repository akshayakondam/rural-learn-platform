import { HouseName, ClassLevel, Lesson, Avatar, Board } from './types';

export const HOUSES: Record<string, any> = {
  Ignivar: { 
    id: 'Ignivar', 
    name: 'Ignivar', 
    symbol: '🦁', 
    motto: 'Brave hearts lead the way', 
    color: 'from-red-600 to-amber-600', 
    accent: 'border-red-400', 
    description: 'Bravery and Leadership',
    icon: '🦁'
  },
  Aetherion: { 
    id: 'Aetherion', 
    name: 'Aetherion', 
    symbol: '🦅', 
    motto: 'Wisdom lights the dark', 
    color: 'from-blue-700 to-slate-400', 
    accent: 'border-blue-400', 
    description: 'Curiosity and Thinking',
    icon: '🦅'
  },
  Verdantis: { 
    id: 'Verdantis', 
    name: 'Verdantis', 
    symbol: '🐍', 
    motto: 'Plan deep, grow strong', 
    color: 'from-emerald-700 to-orange-800', 
    accent: 'border-emerald-400', 
    description: 'Strategy and Growth',
    icon: '🐍'
  },
  Lunaris: { 
    id: 'Lunaris', 
    name: 'Lunaris', 
    symbol: '🦉', 
    motto: 'Dreams create the world', 
    color: 'from-purple-700 to-slate-300', 
    accent: 'border-purple-400', 
    description: 'Creativity and Empathy',
    icon: '🦉'
  }
};

export const PRESCHOOL_AVATARS: Avatar[] = [
  { id: 'mickey', name: 'Mickey', emoji: '🐭', image: '', category: 'Cartoon', isStarter: true },
  { id: 'minnie', name: 'Minnie', emoji: '🎀', image: '', category: 'Cartoon', isStarter: true },
  { id: 'donald', name: 'Donald', emoji: '🦆', image: '', category: 'Cartoon', isStarter: true },
  { id: 'goofy', name: 'Goofy', emoji: '🐶', image: '', category: 'Cartoon', isStarter: true },
  { id: 'elsa', name: 'Elsa', emoji: '❄️', image: '', category: 'Fantasy', isStarter: true },
  { id: 'olaf', name: 'Olaf', emoji: '⛄', image: '', category: 'Fantasy', isStarter: true },
  { id: 'simba', name: 'Simba', emoji: '🦁', image: '', category: 'Animal', isStarter: true },
  { id: 'nemo', name: 'Nemo', emoji: '🐠', image: '', category: 'Animal', isStarter: true },
];

export const CLASS_1_5_AVATARS: Avatar[] = [
  { id: 'harry', name: 'Harry', emoji: '⚡', image: '', category: 'Fantasy', isStarter: true },
  { id: 'hermione', name: 'Hermione', emoji: '📚', image: '', category: 'Fantasy', isStarter: true },
  { id: 'ron', name: 'Ron', emoji: '🐀', image: '', category: 'Fantasy', isStarter: true },
  { id: 'dumbledore', name: 'Albus', emoji: '🧙‍♂️', image: '', category: 'Fantasy', isStarter: true },
  { id: 'hedwig', name: 'Hedwig', emoji: '🦉', image: '', category: 'Animal', isStarter: true },
  { id: 'dobbie', name: 'Dobby', emoji: '🧦', image: '', category: 'Fantasy', isStarter: true },
  { id: 'hagrid', name: 'Hagrid', emoji: '🧔', image: '', category: 'Fantasy', isStarter: true },
  { id: 'draco', name: 'Draco', emoji: '🐍', image: '', category: 'Fantasy', isStarter: true },
];

export const PRESCHOOL_MAP_STRUCTURE = [
  { id: 'candy_gate', name: 'Candy Gate', icon: '🍭', type: 'gate' },
  { id: 'unit_1', name: 'Hello Song', icon: '👋', type: 'unit' },
  { id: 'unit_2', name: 'Body Parts', icon: '👀', type: 'unit' },
  { id: 'unit_3', name: 'Colors', icon: '🔴', type: 'unit' },
  { id: 'unit_4', name: 'Shapes', icon: '🔺', type: 'unit' },
  { id: 'unit_5', name: 'Numbers', icon: '🔢', type: 'unit' },
  { id: 'unit_6', name: 'ABC Song', icon: '🔤', type: 'unit' },
  { id: 'unit_7', name: 'Animals', icon: '🐶', type: 'unit' },
  { id: 'unit_8', name: 'Fruits', icon: '🍎', type: 'unit' },
  { id: 'unit_9', name: 'Brush Teeth', icon: '🪥', type: 'unit' },
  { id: 'unit_10', name: 'Weather', icon: '🌞', type: 'unit' },
  { id: 'unit_11', name: 'Farm Animals', icon: '🐄', type: 'unit' },
  { id: 'unit_12', name: 'Dinosaur Song', icon: '🦖', type: 'unit' },
  { id: 'unit_13', name: 'Wheels on Bus', icon: '🚌', type: 'unit' },
  { id: 'unit_14', name: 'Counting Animals', icon: '🔢', type: 'unit' },
  { id: 'unit_15', name: 'Rainbow Colors', icon: '🌈', type: 'unit' },
  { id: 'unit_16', name: 'Five Ducks', icon: '🦆', type: 'unit' },
  { id: 'unit_17', name: 'Baby Shark', icon: '🦈', type: 'unit' },
  { id: 'unit_18', name: 'Animal Sounds', icon: '🔊', type: 'unit' },
  { id: 'unit_19', name: 'Fruits & Veg', icon: '🥦', type: 'unit' },
  { id: 'unit_20', name: 'Review Game', icon: '🏆', type: 'unit' },
];

export const HOGWARTS_MAP_STRUCTURE = [
  { id: 'reading_tower', name: 'Reading Tower', icon: '🏰', subject: 'English', color: 'bg-red-900/80' },
  { id: 'math_castle', name: 'Math Castle', icon: '🏰', subject: 'Mathematics', color: 'bg-amber-800/80' },
  { id: 'nature_garden', name: 'Nature Garden', icon: '🌿', subject: 'EVS', color: 'bg-emerald-900/80', classes: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'] },
  { id: 'language_hall', name: 'Language Hall', icon: '🗣️', subject: 'Language', color: 'bg-purple-900/80' },
];

export const SYLLABUS: Record<string, any> = {
  'Preschool': {
    'Common': [
      {
        id: 'unit_1',
        name: 'Hello Song',
        description: 'Learn to greet friends!',
        icon: '👋',
        lessons: [
          {
            id: 'p_l1',
            class: 'Preschool',
            title: 'Hello Song',
            subject: 'Greetings',
            description: 'Say hello and wave!',
            storyIntro: 'Sparky wants to say hello!',
            videoUrl: 'https://www.youtube.com/watch?v=tVlcKp3bWH8',
            visualExamples: '👋 🙂',
            ruralExample: 'Waving to neighbors.',
            voiceOverEn: 'Say hello!',
            voiceOverTe: 'హలో చెప్పండి!',
            voiceOverHi: 'नमस्ते कहें!',
            type: 'theme_lesson',
            miniGame: { type: 'wave', config: { count: 3 } },
            quiz: [
              { text: 'Who says hello?', options: ['👋', '🐶', '🚗'], correct: 0, audioEn: 'Who says hello?', audioTe: 'హలో ఎవరు చెప్తున్నారు?', audioHi: 'नमस्ते कौन कह रहा है?' },
              { text: 'Greeting action?', options: ['👋', '😴', '🏃'], correct: 0, audioEn: 'Greeting action?', audioTe: 'పలకరించేటప్పుడు ఏమి చేస్తాం?', audioHi: 'अभिवादन क्रिया?' },
              { text: 'Friend greeting?', options: ['👦👋👧', '😡', '😭'], correct: 0, audioEn: 'Friend greeting?', audioTe: 'స్నేహితులు ఎలా పలకరించుకుంటారు?', audioHi: 'दोस्त का अभिवादन?' },
              { text: 'Happy greeting?', options: ['🙂👋', '😢', '😴'], correct: 0, audioEn: 'Happy greeting?', audioTe: 'సంతోషంగా పలకరించడం ఏది?', audioHi: 'खुश अभिवादन?' },
              { text: 'Hello means?', options: ['👋', '❌', '🚫'], correct: 0, audioEn: 'Hello means?', audioTe: 'హలో అంటే ఏమిటి?', audioHi: 'नमस्ते का मतलब?' }
            ]
          }
        ]
      },
      {
        id: 'unit_2',
        name: 'Body Parts',
        description: 'Head, Shoulders, Knees & Toes!',
        icon: '👀',
        lessons: [
          {
            id: 'p_l2',
            title: 'Body Parts',
            subject: 'Body',
            description: 'Learn your body parts!',
            storyIntro: 'Let us find our eyes and nose!',
            videoUrl: 'https://www.youtube.com/watch?v=h4eueDYPTIg',
            visualExamples: '👀 👃 👂',
            ruralExample: 'Wash your face.',
            voiceOverEn: 'Where is your nose?',
            voiceOverTe: 'నీ ముక్కు ఎక్కడ ఉంది?',
            voiceOverHi: 'आपकी नाक कहाँ है?',
            type: 'theme_lesson',
            miniGame: { type: 'drag_drop', config: { item: 'face_part', target: 'face' } },
            quiz: [
              { text: 'Eyes?', options: ['👀', '👂', '👃'], correct: 0, audioEn: 'Eyes?', audioTe: 'కళ్ళు ఏవి?', audioHi: 'आँखें?' },
              { text: 'Nose?', options: ['👃', '👀', '🦶'], correct: 0, audioEn: 'Nose?', audioTe: 'ముక్కు ఏది?', audioHi: 'नाक?' },
              { text: 'Hands?', options: ['✋', '👂', '👀'], correct: 0, audioEn: 'Hands?', audioTe: 'చేతులు ఏవి?', audioHi: 'हाथ?' },
              { text: 'Feet?', options: ['🦶', '👀', '👃'], correct: 0, audioEn: 'Feet?', audioTe: 'కాళ్ళు ఏవి?', audioHi: 'पैर?' },
              { text: 'Clap with?', options: ['👏', '👀', '👃'], correct: 0, audioEn: 'Clap with?', audioTe: 'దేనితో చప్పట్లు కొడతాం?', audioHi: 'किससे ताली बजाते हैं?' }
            ]
          }
        ]
      },
      {
        id: 'unit_3',
        name: 'Colors Song',
        description: 'Rainbow of colors!',
        icon: '🔴',
        lessons: [
          {
            id: 'p_l3',
            title: 'Colors Song',
            subject: 'Colors',
            description: 'Identify colors!',
            storyIntro: 'Look at the colorful balloons!',
            videoUrl: 'https://www.youtube.com/watch?v=SLZcWGQQsmg',
            visualExamples: '🔴 🔵 🟡',
            ruralExample: 'Colors in the market.',
            voiceOverEn: 'Pop the red balloon!',
            voiceOverTe: 'ఎరుపు బెలూన్ ను పేల్చండి!',
            voiceOverHi: 'लाल गुब्बारा फोड़ें!',
            type: 'theme_lesson',
            miniGame: { type: 'color_pop', config: { color: 'red' } },
            quiz: [
              { text: 'Red object', options: ['🍎', '🍌', '🥦'], correct: 0, audioEn: 'Red object', audioTe: 'ఎరుపు వస్తువు ఏది?', audioHi: 'लाल वस्तु' },
              { text: 'Blue object', options: ['🌊', '🍎', '🍊'], correct: 0, audioEn: 'Blue object', audioTe: 'నీలం వస్తువు ఏది?', audioHi: 'नीली वस्तु' },
              { text: 'Yellow object', options: ['🌞', '🍎', '🥬'], correct: 0, audioEn: 'Yellow object', audioTe: 'పసుపు వస్తువు ఏది?', audioHi: 'पीली वस्तु' },
              { text: 'Green object', options: ['🍃', '🍎', '🥕'], correct: 0, audioEn: 'Green object', audioTe: 'ఆకుపచ్చ వస్తువు ఏది?', audioHi: 'हरी वस्तु' },
              { text: 'Sky color', options: ['☁️🔵', '🍎', '🍌'], correct: 0, audioEn: 'Sky color', audioTe: 'ఆకాశం రంగు ఏది?', audioHi: 'आसमान का रंग' }
            ]
          }
        ]
      },
      {
        id: 'unit_4',
        name: 'Shapes Song',
        description: 'Shapes are everywhere!',
        icon: '🔺',
        lessons: [
          {
            id: 'p_l4',
            title: 'Shapes Song',
            subject: 'Shapes',
            description: 'Learn shapes!',
            storyIntro: 'Circles, squares, and triangles!',
            videoUrl: 'https://www.youtube.com/watch?v=OEbRDtCAFdU',
            visualExamples: '⚪ ⬜ 🔺',
            ruralExample: 'Shapes in your home.',
            voiceOverEn: 'Find the circle!',
            voiceOverTe: 'వృత్తాన్ని కనుగొనండి!',
            voiceOverHi: 'वृत्त ढूंढें!',
            type: 'theme_lesson',
            miniGame: { type: 'match', config: { type: 'shapes' } },
            quiz: [
              { text: 'Circle', options: ['⚪', '⬜', '🔺'], correct: 0, audioEn: 'Circle', audioTe: 'వృత్తం ఏది?', audioHi: 'वृत्त' },
              { text: 'Square', options: ['⬜', '⚪', '🔺'], correct: 0, audioEn: 'Square', audioTe: 'చతురస్రం ఏది?', audioHi: 'वर्ग' },
              { text: 'Triangle', options: ['🔺', '⚪', '⬜'], correct: 0, audioEn: 'Triangle', audioTe: 'త్రికోణం ఏది?', audioHi: 'त्रिकोण' },
              { text: 'Ball shape', options: ['⚪', '🔺', '⬜'], correct: 0, audioEn: 'Ball shape', audioTe: 'బంతి ఆకారం ఏది?', audioHi: 'गेंद का आकार' },
              { text: 'Window shape', options: ['⬜', '⚪', '🔺'], correct: 0, audioEn: 'Window shape', audioTe: 'కిటికీ ఆకారం ఏది?', audioHi: 'खिड़की का आकार' }
            ]
          }
        ]
      },
      {
        id: 'unit_5',
        name: 'Numbers Song',
        description: 'Let us count!',
        icon: '🔢',
        lessons: [
          {
            id: 'p_l5',
            title: 'Numbers Song',
            subject: 'Numbers',
            description: 'Count 1 to 10!',
            storyIntro: 'How many apples do you see?',
            videoUrl: 'https://www.youtube.com/watch?v=DR-cfDsHCGA',
            visualExamples: '1️⃣ 2️⃣ 3️⃣',
            ruralExample: 'Counting stones.',
            voiceOverEn: 'Count the fruits!',
            voiceOverTe: 'పండ్లను లెక్కించండి!',
            voiceOverHi: 'फलों को गिनें!',
            type: 'theme_lesson',
            miniGame: { type: 'count', config: { max: 5 } },
            quiz: [
              { text: 'Count apples', options: ['🍎🍎', '1️⃣', '2️⃣'], correct: 2, audioEn: 'Count apples', audioTe: 'ఆపిల్లను లెక్కించండి', audioHi: 'सेब गिनें' },
              { text: 'Count bananas', options: ['🍌🍌🍌', '3️⃣', '5️⃣'], correct: 1, audioEn: 'Count bananas', audioTe: 'అరటిపండ్లను లెక్కించండి', audioHi: 'केले गिनें' },
              { text: 'Next after 1', options: ['2️⃣', '4️⃣'], correct: 0, audioEn: 'Next after 1', audioTe: '1 తర్వాత వచ్చేది ఏది?', audioHi: '1 के बाद अगला' },
              { text: 'Biggest number', options: ['1️⃣', '9️⃣'], correct: 1, audioEn: 'Biggest number', audioTe: 'పెద్ద సంఖ్య ఏది?', audioHi: 'सबसे बड़ी संख्या' },
              { text: 'Smallest', options: ['1️⃣', '8️⃣'], correct: 0, audioEn: 'Smallest', audioTe: 'చిన్న సంఖ్య ఏది?', audioHi: 'सबसे छोटा' }
            ]
          }
        ]
      },
      {
        id: 'unit_6',
        name: 'ABC Song',
        description: 'ABC Time!',
        icon: '🔤',
        lessons: [
          {
            id: 'p_l6',
            title: 'ABC Song',
            subject: 'Alphabet',
            description: 'Learn the ABCs!',
            storyIntro: 'Sing the alphabet song!',
            videoUrl: 'https://www.youtube.com/watch?v=75p-N9YKqNo',
            visualExamples: '🅰️ 🅱️ 🅲',
            ruralExample: 'Letters on the wall.',
            voiceOverEn: 'Find letter A!',
            voiceOverTe: 'A అక్షరాన్ని కనుగొనండి!',
            voiceOverHi: 'अक्षर A ढूंढें!',
            type: 'theme_lesson',
            miniGame: { type: 'puzzle', config: { type: 'alphabet' } },
            quiz: [
              { text: 'Apple letter', options: ['🅰️', '🅱️'], correct: 0, audioEn: 'Apple letter', audioTe: 'ఆపిల్ అక్షరం ఏది?', audioHi: 'सेब का अक्षर' },
              { text: 'Ball letter', options: ['🅱️', '🅰️'], correct: 0, audioEn: 'Ball letter', audioTe: 'బంతి అక్షరం ఏది?', audioHi: 'गेंद का अक्षर' },
              { text: 'Cat letter', options: ['🅲', '🅳'], correct: 0, audioEn: 'Cat letter', audioTe: 'పిల్లి అక్షరం ఏది?', audioHi: 'बिल्ली का अक्षर' },
              { text: 'First alphabet', options: ['🅰️', '🆉'], correct: 0, audioEn: 'First alphabet', audioTe: 'మొదటి అక్షరం ఏది?', audioHi: 'पहला वर्णमाला' },
              { text: 'Last alphabet', options: ['🆉', '🅰️'], correct: 0, audioEn: 'Last alphabet', audioTe: 'చివరి అక్షరం ఏది?', audioHi: 'अंतिम वर्णमाला' }
            ]
          }
        ]
      },
      {
        id: 'unit_7',
        name: 'Animals Song',
        description: 'Animal friends!',
        icon: '🐶',
        lessons: [
          {
            id: 'p_l7',
            title: 'Animals Song',
            subject: 'Animals',
            description: 'Learn animal sounds!',
            storyIntro: 'What does the dog say?',
            videoUrl: 'https://www.youtube.com/watch?v=t99ULJjCsaM',
            visualExamples: '🐶 🐱 🐄',
            ruralExample: 'Animals in the farm.',
            voiceOverEn: 'Which animal says woof?',
            voiceOverTe: 'భౌ భౌ అని ఏ జంతువు అంటుంది?',
            voiceOverHi: 'कौन सा जानवर वूफ़ कहता है?',
            type: 'theme_lesson',
            miniGame: { type: 'match', config: { type: 'animal_sounds' } },
            quiz: [
              { text: 'Bark animal', options: ['🐶', '🐱'], correct: 0, audioEn: 'Bark animal', audioTe: 'మొరిగే జంతువు ఏది?', audioHi: 'भोंकने वाला जानवर' },
              { text: 'Meow animal', options: ['🐱', '🐶'], correct: 0, audioEn: 'Meow animal', audioTe: 'మ్యావ్ అనే జంతువు ఏది?', audioHi: 'म्याऊँ जानवर' },
              { text: 'Roar animal', options: ['🦁', '🐰'], correct: 0, audioEn: 'Roar animal', audioTe: 'గర్జించే జంతువు ఏది?', audioHi: 'दहाड़ने वाला जानवर' },
              { text: 'Milk animal', options: ['🐄', '🐯'], correct: 0, audioEn: 'Milk animal', audioTe: 'పాలు ఇచ్చే జంతువు ఏది?', audioHi: 'दूध देने वाला जानवर' },
              { text: 'Fly animal', options: ['🐦', '🐶'], correct: 0, audioEn: 'Fly animal', audioTe: 'ఎగిరే జంతువు ఏది?', audioHi: 'उड़ने वाला जानवर' }
            ]
          }
        ]
      },
      {
        id: 'unit_8',
        name: 'Fruits Song',
        description: 'Healthy fruits!',
        icon: '🍎',
        lessons: [
          {
            id: 'p_l8',
            title: 'Fruits Song',
            subject: 'Fruits',
            description: 'Learn about fruits!',
            storyIntro: 'Yummy fruits for you!',
            videoUrl: 'https://www.youtube.com/watch?v=BELlZKpi1Zs',
            visualExamples: '🍎 🍌 🥭',
            ruralExample: 'Fruits from trees.',
            voiceOverEn: 'Find the apple!',
            voiceOverTe: 'ఆపిల్ ను కనుగొనండి!',
            voiceOverHi: 'सेब ढूंढें!',
            type: 'theme_lesson',
            miniGame: { type: 'drag_drop', config: { item: 'fruit', target: 'basket' } },
            quiz: [
              { text: 'Apple', options: ['🍎', '🍌'], correct: 0, audioEn: 'Apple', audioTe: 'ఆపిల్ ఏది?', audioHi: 'సేబ్' },
              { text: 'Banana', options: ['🍌', '🍎'], correct: 0, audioEn: 'Banana', audioTe: 'అరటిపండు ఏది?', audioHi: 'కేలా' },
              { text: 'Mango', options: ['🥭', '🍇'], correct: 0, audioEn: 'Mango', audioTe: 'మామిడిపండు ఏది?', audioHi: 'ఆమ్' },
              { text: 'Orange', options: ['🍊', '🍎'], correct: 0, audioEn: 'Orange', audioTe: 'నారింజపండు ఏది?', audioHi: 'సంతరా' },
              { text: 'Fruit basket', options: ['🍎🍌🍊', '🥕🥦'], correct: 0, audioEn: 'Fruit basket', audioTe: 'పండ్ల బుట్ట ఏది?', audioHi: 'ఫలోం కీ టోకరీ' }
            ]
          }
        ]
      },
      {
        id: 'unit_9',
        name: 'Brush Teeth',
        description: 'Keep teeth clean!',
        icon: '🪥',
        lessons: [
          {
            id: 'p_l9',
            title: 'Brush Teeth',
            subject: 'Habits',
            description: 'Brush your teeth!',
            storyIntro: 'Sparky brushes his teeth!',
            videoUrl: 'https://www.youtube.com/watch?v=wxMrtK-kYnE',
            visualExamples: '🪥 😁',
            ruralExample: 'Brushing in the morning.',
            voiceOverEn: 'Brush your teeth!',
            voiceOverTe: 'నీ పళ్లను తోముకోండి!',
            voiceOverHi: 'अपने दाँत ब्रश करें!',
            type: 'theme_lesson',
            miniGame: { type: 'brush', config: { type: 'teeth' } },
            quiz: [
              { text: 'Toothbrush', options: ['🪥', '✏️'], correct: 0, audioEn: 'Toothbrush', audioTe: 'టూత్ బ్రష్ ఏది?', audioHi: 'टूथब्रश' },
              { text: 'Teeth', options: ['😁', '👀'], correct: 0, audioEn: 'Teeth', audioTe: 'పళ్ళు ఏవి?', audioHi: 'దాంత్' }
            ]
          }
        ]
      },
      {
        id: 'unit_10',
        name: 'Weather Song',
        description: 'Sun and Rain!',
        icon: '🌞',
        lessons: [
          {
            id: 'p_l10',
            title: 'Weather Song',
            subject: 'Nature',
            description: 'Learn about weather!',
            storyIntro: 'Is it sunny or rainy today?',
            videoUrl: 'https://www.youtube.com/watch?v=KsUKMsx2hA8',
            visualExamples: '🌞 🌧️ ☁️',
            ruralExample: 'Rain in the fields.',
            voiceOverEn: 'Find the sun!',
            voiceOverTe: 'సూర్యుడిని కనుగొనండి!',
            voiceOverHi: 'सूरज ढूंढें!',
            type: 'theme_lesson',
            miniGame: { type: 'match', config: { type: 'weather' } },
            quiz: [
              { text: 'Sun', options: ['🌞', '🌙'], correct: 0, audioEn: 'Sun', audioTe: 'సూర్యుడు ఏది?', audioHi: 'सूरज' },
              { text: 'Rain', options: ['🌧️', '🔥'], correct: 0, audioEn: 'Rain', audioTe: 'వర్షం ఏది?', audioHi: 'बारिश' }
            ]
          }
        ]
      },
      {
        id: 'unit_11',
        name: 'Farm Animals',
        description: 'Meet the farm animals!',
        icon: '🐄',
        lessons: [
          {
            id: 'p_l11',
            title: 'Farm Animals',
            subject: 'Animals',
            description: 'Identify farm animals!',
            storyIntro: 'Let us visit the farm!',
            videoUrl: 'https://www.youtube.com/watch?v=5oYKonYBujg',
            visualExamples: '🐄 🐖 🐎',
            ruralExample: 'Animals in your village.',
            voiceOverEn: 'Feed the cow!',
            voiceOverTe: 'ఆవుకు మేత వేయండి!',
            voiceOverHi: 'गाय को खाना खिलाएं!',
            type: 'theme_lesson',
            miniGame: { type: 'feed', config: { animal: 'cow', food: 'grass' } },
            quiz: [
              { text: 'Cow?', options: ['🐄', '🐘'], correct: 0, audioEn: 'Cow?', audioTe: 'ఆవు ఏది?', audioHi: 'गाय?' },
              { text: 'Pig?', options: ['🐖', '🐱'], correct: 0, audioEn: 'Pig?', audioTe: 'పంది ఏది?', audioHi: 'सुअर?' }
            ]
          }
        ]
      },
      {
        id: 'unit_12',
        name: 'Dinosaur Song',
        description: 'Roar like a dinosaur!',
        icon: '🦖',
        lessons: [
          {
            id: 'p_l12',
            title: 'Dinosaur Song',
            subject: 'Animals',
            description: 'Learn about dinosaurs!',
            storyIntro: 'Dinosaurs lived long ago!',
            videoUrl: 'https://www.youtube.com/watch?v=vPrmY7labLA',
            visualExamples: '🦖 🦕 🌋',
            ruralExample: 'Big animals from stories.',
            voiceOverEn: 'Find the dinosaur eggs!',
            voiceOverTe: 'డైనోసార్ గుడ్లను కనుగొనండి!',
            voiceOverHi: 'डायनासोर के अंडे ढूंढें!',
            type: 'theme_lesson',
            miniGame: { type: 'find', config: { item: 'dino_egg', count: 3 } },
            quiz: [
              { text: 'Dinosaur?', options: ['🦖', '🐶'], correct: 0, audioEn: 'Dinosaur?', audioTe: 'డైనోసార్ ఏది?', audioHi: 'डायनासोर?' },
              { text: 'Big animal?', options: ['🦖', '🐭'], correct: 0, audioEn: 'Big animal?', audioTe: 'పెద్ద జంతువు ఏది?', audioHi: 'बड़ा जानवर?' }
            ]
          }
        ]
      },
      {
        id: 'unit_13',
        name: 'Wheels on Bus',
        description: 'Round and round!',
        icon: '🚌',
        lessons: [
          {
            id: 'p_l13',
            title: 'Wheels on Bus',
            subject: 'Transport',
            description: 'Sing along on the bus!',
            storyIntro: 'The wheels on the bus go round and round!',
            videoUrl: 'https://www.youtube.com/watch?v=e_04ZrNroTo',
            visualExamples: '🚌 🛑 🛣️',
            ruralExample: 'The bus that goes to the city.',
            voiceOverEn: 'Drive the bus!',
            voiceOverTe: 'బస్సును నడపండి!',
            voiceOverHi: 'बस चलाएं!',
            type: 'theme_lesson',
            miniGame: { type: 'drive', config: { vehicle: 'bus' } },
            quiz: [
              { text: 'Bus?', options: ['🚌', '🚗'], correct: 0, audioEn: 'Bus?', audioTe: 'బస్సు ఏది?', audioHi: 'बस?' },
              { text: 'Wheels?', options: ['⭕', '⬜'], correct: 0, audioEn: 'Wheels?', audioTe: 'చక్రాలు ఏవి?', audioHi: 'पहिए?' }
            ]
          }
        ]
      },
      {
        id: 'unit_14',
        name: 'Counting Animals',
        description: 'Count the animals!',
        icon: '🔢',
        lessons: [
          {
            id: 'p_l14',
            title: 'Counting Animals',
            subject: 'Numbers',
            description: 'Count the animals!',
            storyIntro: 'How many animals can you see?',
            videoUrl: 'https://www.youtube.com/watch?v=0TgLtF3PMOc',
            visualExamples: '1️⃣ 2️⃣ 3️⃣',
            ruralExample: 'Counting goats.',
            voiceOverEn: 'Count the animals!',
            voiceOverTe: 'జంతువులను లెక్కించండి!',
            voiceOverHi: 'जानवरों को गिनें!',
            type: 'theme_lesson',
            miniGame: { type: 'count', config: { max: 5 } },
            quiz: [
              { text: 'Count ducks', options: ['🦆🦆', '2️⃣', '3️⃣'], correct: 1, audioEn: 'Count ducks', audioTe: 'బాతులను లెక్కించండి', audioHi: 'बत्तखें गिनें' }
            ]
          }
        ]
      },
      {
        id: 'unit_15',
        name: 'Rainbow Colors',
        description: 'Beautiful rainbow!',
        icon: '🌈',
        lessons: [
          {
            id: 'p_l15',
            title: 'Rainbow Colors',
            subject: 'Colors',
            description: 'Learn rainbow colors!',
            storyIntro: 'Seven colors in the sky!',
            videoUrl: 'https://www.youtube.com/watch?v=Fj0pS6R4S7A',
            visualExamples: '🌈 🔴 🟠 🟡 🟢 🔵 🟣',
            ruralExample: 'Rainbow after rain.',
            voiceOverEn: 'Build the rainbow!',
            voiceOverTe: 'ఇంద్రధనస్సును నిర్మించండి!',
            voiceOverHi: 'इंद्रधनुष बनाएं!',
            type: 'theme_lesson',
            miniGame: { type: 'build', config: { type: 'rainbow' } },
            quiz: [
              { text: 'Rainbow?', options: ['🌈', '☁️'], correct: 0, audioEn: 'Rainbow?', audioTe: 'ఇంద్రధనస్సు ఏది?', audioHi: 'इंद्रधनुष?' }
            ]
          }
        ]
      },
      {
        id: 'unit_16',
        name: 'Five Ducks',
        description: 'Five little ducks went out one day!',
        icon: '🦆',
        lessons: [
          {
            id: 'p_l16',
            title: 'Five Little Ducks',
            subject: 'Numbers',
            description: 'Count the ducks!',
            storyIntro: 'Quack quack quack quack!',
            videoUrl: 'https://www.youtube.com/watch?v=pZw9veQ76fo',
            visualExamples: '🦆 🦆 🦆 🦆 🦆',
            ruralExample: 'Ducks in the pond.',
            voiceOverEn: 'Tap the ducks!',
            voiceOverTe: 'బాతులను నొక్కండి!',
            voiceOverHi: 'बत्तखों पर टैप करें!',
            type: 'theme_lesson',
            miniGame: { type: 'count', config: { max: 5 } },
            quiz: [
              { text: 'How many ducks?', options: ['5️⃣', '3️⃣', '1️⃣'], correct: 0, audioEn: 'How many ducks?', audioTe: 'ఎన్ని బాతులు ఉన్నాయి?', audioHi: 'कितनी बत्तखें हैं?' },
              { text: 'Duck sound?', options: ['🦆🔊', '🐶🔊', '🐱🔊'], correct: 0, audioEn: 'Duck sound?', audioTe: 'బాతు శబ్దం ఏది?', audioHi: 'बत्तఖ की आवाज़?' }
            ]
        },
        ]
      }
    ]
  },
  'Class 1': {
    'CBSE': {
      'English': [
        {
          id: 'c1_cbse_eng_1',
          class: 'Class 1',
          title: 'Naming Words (Nouns)',
          subject: 'English',
          description: 'Nouns are names of people, places, animals, and things.',
          storyIntro: 'Sparky is visiting a magical garden and wants to name everything he sees!',
          videoStyle: 'Sparky pointing at objects and labels appearing.',
          videoUrl: 'https://www.youtube.com/watch?v=JCHeHSeyUwU',
          visualExamples: '🍎 Apple, 🐶 Dog, 🏫 School, 👦 Boy',
          ruralExample: 'The name of your village is a Naming Word.',
          explanation: 'Nouns are special words that we use to name people like "Boy", places like "School", animals like "Dog", and things like "Apple". Everything in the world has a name!',
          voiceOverEn: 'Everything has a name. Let us learn about Nouns!',
          voiceOverTe: 'ప్రతిదానికి ఒక పేరు ఉంటుంది. వాటిని నౌన్స్ అంటారు!',
          voiceOverHi: 'हर चीज़ का एक नाम होता है। आइए संज्ञा के बारे में जानें!',
          type: 'video',
          miniGame: { 
            type: 'sorting_hat', 
            config: { 
              title: 'Magic Word Sorting',
              description: 'Drag nouns into the magic chest!',
              items: [
                { text: 'cat', category: 'noun' },
                { text: 'run', category: 'verb' },
                { text: 'tree', category: 'noun' },
                { text: 'jump', category: 'verb' },
                { text: 'dog', category: 'noun' }
              ],
              reward: '✨ The Sorting Hat is impressed! +10 House Points'
            } 
          },
          quiz: [
            { text: 'Which one is a person?', options: ['👦 Boy', '🍎 Apple', '🚗 Car', '🌳 Tree'], correct: 0, audioEn: 'Which one is a person?', audioTe: 'వీటిలో మనిషి ఎవరు?', audioHi: 'इनमें से व्यक्ति कौन है?' },
            { text: 'Which one is an animal?', options: ['🏠 House', '🐶 Dog', '📖 Book', '✏️ Pencil'], correct: 1, audioEn: 'Which one is an animal?', audioTe: 'వీటిలో జంతువు ఏది?', audioHi: 'इनमें से जानवर कौन सा है?' }
          ]
        },
        {
          id: 'c1_cbse_eng_2',
          class: 'Class 1',
          title: 'Action Words (Verbs)',
          subject: 'English',
          description: 'Verbs tell us what someone is doing.',
          storyIntro: 'Sparky is playing in the park! What is he doing?',
          explanation: 'Action words or Verbs tell us about the things we do. Like jumping, eating, or playing!',
          videoUrl: 'https://www.youtube.com/watch?v=4c6FyuetSVo',
          visualExamples: '🏃 Run, 💃 Dance, 🍎 Eat',
          ruralExample: 'Birds flying in the sky.',
          voiceOverEn: 'Let us learn about action words!',
          voiceOverTe: 'పనిని తెలిపే పదాల గురించి తెలుసుకుందాం!',
          voiceOverHi: 'आइए क्रिया शब्दों के बारे में जानें!',
          type: 'video',
          miniGame: { 
            type: 'owl_match', 
            config: { 
              title: 'Owl Mail Word Match',
              description: 'Match word to picture!',
              pairs: [['dog', '🐶'], ['apple', '🍎'], ['ball', '⚽']],
              reward: '✨ The owl flies away happily! +10 House Points'
            } 
          },
          quiz: [
            { text: 'Which one is an action?', options: ['Run', 'Tree', 'Apple'], correct: 0, audioEn: 'Which one is an action?', audioTe: 'పనిని తెలిపే పదం ఏది?', audioHi: 'इनमें से क्रिया कौन सी है?' }
          ]
        },
        { id: 'c1_cbse_eng_3', class: 'Class 1', title: 'One and Many', subject: 'English', description: 'Singular and Plural nouns.', storyIntro: 'Sparky has one apple, but his friend has many!', explanation: 'When we have one thing, we say its name. When we have more than one, we usually add "s" at the end. Like "Apple" becomes "Apples".', videoUrl: 'https://www.youtube.com/watch?v=lD1OaD4FBqM', visualExamples: '🍎 -> 🍎🍎', ruralExample: 'One cow, many cows.', voiceOverEn: 'One and many. Let us learn!', type: 'video', miniGame: { 
            type: 'spell_word', 
            config: { 
              title: 'Spell the Word',
              description: 'Arrange the floating letters to spell the word!',
              image: '🍎',
              letters: ['a', 'p', 'p', 'l', 'e'],
              reward: '✨ The magic board sparkles! +10 House Points'
            } 
          }, quiz: [{ text: 'Plural of "Boy"?', options: ['Boys', 'Boyes'], correct: 0 }] },
        { id: 'c1_cbse_eng_4', class: 'Class 1', title: 'A and An', subject: 'English', description: 'Using articles A and An.', storyIntro: 'Sparky is picking fruits. An apple and a banana!', explanation: 'We use "An" before words that start with a, e, i, o, u. For others, we use "A".', videoUrl: 'https://www.youtube.com/watch?v=v_V6p_S8Y9Y', visualExamples: 'An Apple, A Ball', ruralExample: 'An ox, A tractor.', voiceOverEn: 'A or An? Let us see!', type: 'video', miniGame: { 
            type: 'forbidden_forest_hunt', 
            config: { 
              title: 'Forbidden Forest Word Hunt',
              description: 'Click only the nouns hiding behind the trees!',
              words: [
                { text: 'wand', isCorrect: true },
                { text: 'fly', isCorrect: false },
                { text: 'castle', isCorrect: true },
                { text: 'sing', isCorrect: false },
                { text: 'owl', isCorrect: true }
              ],
              reward: '✨ You survived the forest! +10 House Points'
            } 
          }, quiz: [{ text: '___ Elephant', options: ['A', 'An'], correct: 1 }] },
        { id: 'c1_cbse_eng_5', class: 'Class 1', title: 'He and She', subject: 'English', description: 'Gender pronouns.', storyIntro: 'Sparky meets a boy and a girl!', explanation: 'We use "He" for boys and men. We use "She" for girls and women.', videoUrl: 'https://www.youtube.com/watch?v=ZADSyQG_8-o', visualExamples: '👦 He, 👧 She', ruralExample: 'Grandfather is He, Grandmother is She.', voiceOverEn: 'He and She pronouns.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Father', 'He'], ['Mother', 'She']] } }, quiz: [{ text: 'Pronoun for Sister?', options: ['He', 'She'], correct: 1 }] },
        { id: 'c1_cbse_eng_6', class: 'Class 1', title: 'This and That', subject: 'English', description: 'Demonstrative pronouns.', storyIntro: 'Sparky points at things near and far!', explanation: 'We use "This" for things near us. We use "That" for things far away.', videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o', visualExamples: 'This 🍎, That ☁️', ruralExample: 'This is my slate, That is the sun.', voiceOverEn: 'This and That.', type: 'video', miniGame: { type: 'tap', config: { items: ['near', 'far'] } }, quiz: [{ text: 'For something far away?', options: ['This', 'That'], correct: 1 }] },
        { id: 'c1_cbse_eng_7', class: 'Class 1', title: 'Describing Words', subject: 'English', description: 'Adjectives.', storyIntro: 'Sparky sees a big elephant!', explanation: 'Describing words tell us more about nouns. Like "Big", "Small", "Red", "Happy".', videoUrl: 'https://www.youtube.com/watch?v=zPSzKp6yY8Q', visualExamples: 'Big 🐘, Small 🐭', ruralExample: 'The green field.', voiceOverEn: 'Describing words.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Big', '🐘'], ['Small', '🐭']] } }, quiz: [{ text: 'Which is a color?', options: ['Red', 'Run'], correct: 0 }] },
        { id: 'c1_cbse_eng_8', class: 'Class 1', title: 'In, On, Under', subject: 'English', description: 'Prepositions of place.', storyIntro: 'Where is Sparky hiding?', explanation: 'Words like "In", "On", and "Under" tell us where something is.', videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o', visualExamples: 'In 📦, On 🪑, Under 🌳', ruralExample: 'The bird is on the branch.', voiceOverEn: 'In, On, Under.', type: 'video', miniGame: { type: 'drag_drop', config: { items: ['ball'], targets: ['box'] } }, quiz: [{ text: 'The cat is ___ the mat.', options: ['on', 'in'], correct: 0 }] },
        { id: 'c1_cbse_eng_9', class: 'Class 1', title: 'Opposite Words', subject: 'English', description: 'Antonyms.', storyIntro: 'Sparky is happy, then he is sad!', explanation: 'Opposite words have different meanings. Like Hot and Cold, Big and Small.', videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o', visualExamples: 'Happy 😀 / Sad 😢', ruralExample: 'Day and Night.', voiceOverEn: 'Opposite words.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Hot', 'Cold'], ['Up', 'Down']] } }, quiz: [{ text: 'Opposite of Big?', options: ['Small', 'Fast'], correct: 0 }] },
        { id: 'c1_cbse_eng_10', class: 'Class 1', title: 'Magic Sentences', subject: 'English', description: 'Simple sentence structure.', storyIntro: 'Sparky builds his first sentence!', explanation: 'A sentence starts with a capital letter and ends with a full stop. It tells a complete thought.', videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o', visualExamples: 'The cat is black.', ruralExample: 'I love my school.', voiceOverEn: 'Making sentences.', type: 'video', miniGame: { type: 'sentence_builder', config: { title: 'Magic Sentence Builder', words: ['I', 'have', 'a', 'cat'], reward: '✨ Magic wand sparkles! +10 House Points' } }, quiz: [{ text: 'Sentence ends with?', options: ['Full stop', 'Comma'], correct: 0 }] }
      ],
      'Mathematics': [
        {
          id: 'c1_cbse_math_1',
          class: 'Class 1',
          title: 'Numbers 1 to 20',
          subject: 'Mathematics',
          description: 'Learn to count and write numbers up to 20.',
          storyIntro: 'Help Sparky count the magical stars in the sky!',
          videoStyle: 'Stars appearing one by one with numbers.',
          videoUrl: 'https://www.youtube.com/watch?v=D0Ajq682yrA',
          visualExamples: '1, 2, 3, 4, 5...',
          ruralExample: 'Counting the number of cows in the shed.',
          explanation: 'Counting is fun! We use numbers to tell how many things are there. Let us count from 1 to 20 together. 1, 2, 3... all the way to 20!',
          voiceOverEn: 'Let us count from one to twenty!',
          voiceOverTe: 'ఒకటి నుండి ఇరవై వరకు లెక్కపెడదాం!',
          voiceOverHi: 'आइए एक से बीस तक गिनें!',
          type: 'video',
          miniGame: { 
            type: 'dragon_eggs', 
            config: { 
              title: 'Dragon Egg Counting',
              description: 'Count the eggs in the nest!',
              eggs: 4,
              options: [2, 3, 4, 5],
              reward: '✨ The Dragon is happy! +10 House Points'
            } 
          },
          quiz: [
            { text: 'What comes after 5?', options: ['4', '6', '7', '3'], correct: 1, audioEn: 'What comes after 5?', audioTe: '5 తర్వాత వచ్చే సంఖ్య ఏది?', audioHi: '5 के बाद क्या आता है?' },
            { text: 'Count the stars: ⭐⭐⭐', options: ['2', '3', '4', '5'], correct: 1, audioEn: 'Count the stars.', audioTe: 'నక్షత్రాలను లెక్కించండి.', audioHi: 'सितारों को गिनें।' }
          ]
        },
        {
          id: 'c1_cbse_math_2',
          class: 'Class 1',
          title: 'Basic Shapes',
          subject: 'Mathematics',
          description: 'Learn about Circle, Square, and Triangle.',
          storyIntro: 'Sparky finds magical shapes in the castle!',
          explanation: 'Shapes are everywhere! A ball is a Circle, a box is a Square, and a slice of pizza is a Triangle.',
          videoUrl: 'https://www.youtube.com/watch?v=OEbRDtCAFdU',
          visualExamples: '⭕ Circle, 🟦 Square, 🔺 Triangle',
          ruralExample: 'A wheel is a circle.',
          voiceOverEn: 'Let us learn about shapes!',
          voiceOverTe: 'ఆకారాల గురించి తెలుసుకుందాం!',
          voiceOverHi: 'आइए आकारों के बारे में जानें!',
          type: 'video',
          miniGame: { 
            type: 'shape_spell', 
            config: { 
              title: 'Shape Spell',
              description: 'Identify the shapes to light the castle!',
              shapes: ['circle', 'square', 'triangle'],
              reward: '✨ Castle is glowing! +10 House Points'
            } 
          },
          quiz: [
            { text: 'Which shape is like a ball?', options: ['Circle', 'Square', 'Triangle'], correct: 0, audioEn: 'Which shape is like a ball?', audioTe: 'బంతి లాంటి ఆకారం ఏది?', audioHi: 'कौन सा आकार गेंद जैसा है?' }
          ]
        },
        { id: 'c1_cbse_math_3', class: 'Class 1', title: 'Big and Small', subject: 'Mathematics', description: 'Comparing sizes.', storyIntro: 'Sparky finds a big pumpkin and a small tomato!', explanation: 'We use words like "Big" and "Small" to compare the size of things.', videoUrl: 'https://www.youtube.com/watch?v=OEbRDtCAFdU', visualExamples: '🐘 Big, 🐭 Small', ruralExample: 'A big tractor and a small cycle.', voiceOverEn: 'Big and Small.', type: 'video', miniGame: { 
            type: 'magic_number_line', 
            config: { 
              title: 'Magic Number Line',
              description: 'A broomstick flies over a number line. Click the missing number!',
              numbers: [1, 2, null, 4, 5],
              correctAnswer: 3,
              reward: '✨ The broomstick zooms ahead! +10 House Points'
            } 
          }, quiz: [{ text: 'Which is bigger?', options: ['Elephant', 'Mouse'], correct: 0 }] },
        { id: 'c1_cbse_math_4', class: 'Class 1', title: 'Tall and Short', subject: 'Mathematics', description: 'Comparing heights.', storyIntro: 'Sparky looks at a tall coconut tree!', explanation: 'We use "Tall" for things that go high up and "Short" for things that are low.', videoUrl: 'https://www.youtube.com/watch?v=OEbRDtCAFdU', visualExamples: '🌴 Tall, 🪴 Short', ruralExample: 'A tall tree and a short bush.', voiceOverEn: 'Tall and Short.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Tall', '🌴'], ['Short', '🪴']] } }, quiz: [{ text: 'Which is taller?', options: ['Tree', 'Grass'], correct: 0 }] },
        { id: 'c1_cbse_math_5', class: 'Class 1', title: 'More and Less', subject: 'Mathematics', description: 'Comparing quantities.', storyIntro: 'Sparky has more marbles than his friend!', explanation: 'We use "More" when there is a larger amount and "Less" for a smaller amount.', videoUrl: 'https://www.youtube.com/watch?v=OEbRDtCAFdU', visualExamples: '🍎🍎🍎 More, 🍎 Less', ruralExample: 'More water in the pond, less in the bucket.', voiceOverEn: 'More and Less.', type: 'video', miniGame: { type: 'count', config: { target: 5 } }, quiz: [{ text: 'Which group has more?', options: ['5 apples', '2 apples'], correct: 0 }] },
        { id: 'c1_cbse_math_6', class: 'Class 1', title: 'Addition up to 10', subject: 'Mathematics', description: 'Adding small numbers.', storyIntro: 'Sparky adds magical stones together!', explanation: 'Addition means putting things together. 2 plus 3 makes 5!', videoUrl: 'https://www.youtube.com/watch?v=uRoJ5E-x97I', visualExamples: '2 + 2 = 4', ruralExample: '2 goats and 1 more goat makes 3 goats.', voiceOverEn: 'Let us add!', type: 'video', miniGame: { type: 'potion_addition', config: { title: 'Potion Addition', problem: '3 + 2', answer: 5, reward: '✨ Potion explodes with sparkles! +10 House Points' } }, quiz: [{ text: '2 + 3 = ?', options: ['4', '5', '6'], correct: 1 }] },
        { id: 'c1_cbse_math_7', class: 'Class 1', title: 'Subtraction up to 10', subject: 'Mathematics', description: 'Taking away numbers.', storyIntro: 'Sparky gives away some of his magic seeds!', explanation: 'Subtraction means taking away. If you have 5 and take away 2, you have 3 left.', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: '5 - 2 = 3', ruralExample: '5 birds on a tree, 2 fly away. How many left?', voiceOverEn: 'Let us subtract!', type: 'video', miniGame: { type: 'count', config: { target: 3 } }, quiz: [{ text: '4 - 1 = ?', options: ['3', '2', '5'], correct: 0 }] },
        { id: 'c1_cbse_math_8', class: 'Class 1', title: 'Patterns', subject: 'Mathematics', description: 'Identifying and completing patterns.', storyIntro: 'Sparky sees a pattern in the castle floor!', explanation: 'A pattern is something that repeats. Like Red, Blue, Red, Blue.', videoUrl: 'https://www.youtube.com/watch?v=OEbRDtCAFdU', visualExamples: '🍎🍌🍎🍌...', ruralExample: 'Patterns on a saree or a wall.', voiceOverEn: 'Magic patterns.', type: 'video', miniGame: { type: 'match', config: { pairs: [['🍎', '🍌'], ['🍎', '🍌']] } }, quiz: [{ text: 'What comes next? 🔴🔵🔴...', options: ['🔵', '🔴'], correct: 0 }] },
        { id: 'c1_cbse_math_9', class: 'Class 1', title: 'Money Basics', subject: 'Mathematics', description: 'Introduction to coins and notes.', storyIntro: 'Sparky goes to the village market!', explanation: 'We use money to buy things. Coins and notes have different values.', videoUrl: 'https://www.youtube.com/watch?v=OEbRDtCAFdU', visualExamples: '1 Rupee, 2 Rupees', ruralExample: 'Buying a pencil at the shop.', voiceOverEn: 'Learning about money.', type: 'video', miniGame: { type: 'coin_treasure', config: { title: 'Coin Treasure Game', coins: ['₹1', '₹1', '₹1'], answer: 3, reward: '✨ Treasure chest is yours! +10 House Points' } }, quiz: [{ text: 'Which is money?', options: ['Coin', 'Stone'], correct: 0 }] },
        { id: 'c1_cbse_math_10', class: 'Class 1', title: 'Time (Day and Night)', subject: 'Mathematics', description: 'Understanding day and night.', storyIntro: 'Sparky wakes up when the sun rises!', explanation: 'The sun shines during the Day. The moon and stars appear at Night.', videoUrl: 'https://www.youtube.com/watch?v=OEbRDtCAFdU', visualExamples: '☀️ Day, 🌙 Night', ruralExample: 'Rooster crows in the morning.', voiceOverEn: 'Day and Night.', type: 'video', miniGame: { 
            type: 'day_night_spell', 
            config: { 
              title: 'Day vs Night Spell',
              description: 'Drag the Sun or Moon to the sky!',
              skyType: 'day',
              options: ['☀️', '🌙'],
              correctAnswer: '☀️',
              reward: '✨ The sky is perfect! +10 House Points'
            } 
          }, quiz: [{ text: 'When do we sleep?', options: ['Day', 'Night'], correct: 1 }] }
      ],
      'EVS': [
        {
          id: 'c1_cbse_evs_1',
          class: 'Class 1',
          title: 'My Body',
          subject: 'EVS',
          description: 'Learn about different parts of our body.',
          storyIntro: 'Sparky is looking in the mirror and learning about his body parts!',
          videoUrl: 'https://www.youtube.com/watch?v=OngEPzfKZAE',
          videoStyle: 'Animated character pointing to body parts.',
          visualExamples: '👀 Eyes, 👂 Ears, 👃 Nose, 👄 Mouth',
          ruralExample: 'Using our hands to help in the farm.',
          explanation: 'Our body has many parts. We use eyes to see, ears to hear, nose to smell, and mouth to eat. Each part is very important!',
          voiceOverEn: 'Our body is amazing. Let us learn its parts!',
          voiceOverTe: 'మన శరీరం అద్భుతమైనది. దాని భాగాల గురించి తెలుసుకుందాం!',
          voiceOverHi: 'हमारा शरीर अद्भुत है। आइए इसके अंगों के बारे में जानें!',
          type: 'video',
                    miniGame: { 
            type: 'magic_mirror', 
            config: { 
              title: 'Magic Mirror',
              description: 'Click the right name for the glowing body part!',
              part: 'eyes',
              options: ['eyes', 'ears', 'nose'],
              reward: '✨ The mirror reflects your wisdom! +10 House Points'
            } 
          },
          quiz: [
            { text: 'What do we use to see?', options: ['👂 Ears', '👀 Eyes', '👃 Nose', '👄 Mouth'], correct: 1, audioEn: 'What do we use to see?', audioTe: 'మనం చూడటానికి వేటిని ఉపయోగిస్తాము?', audioHi: 'हम देखने के लिए किसका उपयोग करते हैं?' },
            { text: 'How many ears do we have?', options: ['1', '2', '3', '4'], correct: 1, audioEn: 'How many ears do we have?', audioTe: 'మనకు ఎన్ని చెవులు ఉన్నాయి?', audioHi: 'हमारे कितने कान हैं?' }
          ]
        },
        {
          id: 'c1_cbse_evs_2',
          class: 'Class 1',
          title: 'My Sense Organs',
          subject: 'EVS',
          description: 'Learn about the five sense organs.',
          storyIntro: 'Sparky uses his senses to explore the world!',
          explanation: 'We have five sense organs: Eyes, Ears, Nose, Tongue, and Skin. They help us see, hear, smell, taste, and feel.',
          videoUrl: 'https://www.youtube.com/watch?v=q1xNuU7gaAQ',
          visualExamples: '👁️ See, 👂 Hear, 👃 Smell, 👅 Taste, ✋ Touch',
          ruralExample: 'Smelling the scent of wet mud after rain.',
          voiceOverEn: 'Our senses help us know the world!',
          voiceOverTe: 'జ్ఞానేంద్రియాలు ప్రపంచాన్ని తెలుసుకోవడానికి సహాయపడతాయి!',
          voiceOverHi: 'हमारी इंद्रियां हमें दुनिया को जानने में मदद करती हैं!',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Eyes', '👁️'], ['Ears', '👂'], ['Nose', '👃']] } },
          quiz: [
            { text: 'Which organ helps us to taste?', options: ['Nose', 'Tongue', 'Skin'], correct: 1, audioEn: 'Which organ helps us to taste?', audioTe: 'రుచి చూడటానికి ఏ అవయవం సహాయపడుతుంది?', audioHi: 'कौन सा अंग हमें स्वाद लेने में मदद करता है?' }
          ]
        },
        {
          id: 'c1_cbse_evs_3',
          class: 'Class 1',
          title: 'My Family',
          subject: 'EVS',
          description: 'Understanding family members.',
          storyIntro: 'Sparky meets his family!',
          explanation: 'A family is a group of people who live together. We have parents, brothers, and sisters.',
          videoUrl: 'https://www.youtube.com/watch?v=d_WQEw13TCo',
          visualExamples: '👨 Father, 👩 Mother',
          ruralExample: 'Helping grandparents in the garden.',
          voiceOverEn: 'My family.',
          type: 'video',
          miniGame: { 
            type: 'family_castle', 
            config: { 
              title: 'My Family Castle',
              description: 'Match family members to rooms!',
              members: ['mother', 'father', 'grandmother'],
              reward: '✨ The castle is full of love! +10 House Points'
            } 
          },
          quiz: [{ text: 'Who is your father\'s wife?', options: ['Mother', 'Aunt'], correct: 0 }]
        },
        { id: 'c1_cbse_evs_4', class: 'Class 1', title: 'My Home', subject: 'EVS', description: 'Different rooms in a house.', storyIntro: 'Sparky shows his magical house!', explanation: 'A house has different rooms like Kitchen, Bedroom, and Bathroom.', videoUrl: 'https://www.youtube.com/watch?v=h4eueDYPTIg', visualExamples: '🍳 Kitchen, 🛌 Bedroom', ruralExample: 'The courtyard where we play.', voiceOverEn: 'My home.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Bed', 'Bedroom'], ['Stove', 'Kitchen']] } }, quiz: [{ text: 'Where do we sleep?', options: ['Bedroom', 'Kitchen'], correct: 0 }] },
        { id: 'c1_cbse_evs_5', class: 'Class 1', title: 'My School', subject: 'EVS', description: 'Learning about school.', storyIntro: 'Sparky goes to magic school!', explanation: 'School is where we learn to read, write, and play with friends.', videoUrl: 'https://www.youtube.com/watch?v=h4eueDYPTIg', visualExamples: '🏫 School, 👩🏫 Teacher', ruralExample: 'The big banyan tree in our school yard.', voiceOverEn: 'My school.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Teacher', '👩🏫'], ['Book', '📖']] } }, quiz: [{ text: 'Who teaches us?', options: ['Teacher', 'Doctor'], correct: 0 }] },
        { id: 'c1_cbse_evs_6', class: 'Class 1', title: 'Food We Eat', subject: 'EVS', description: 'Healthy food habits.', storyIntro: 'Sparky loves healthy food!', explanation: 'Food gives us energy to grow and play. We should eat fruits and vegetables.', videoUrl: 'https://www.youtube.com/watch?v=h4eueDYPTIg', visualExamples: '🍎 Fruit, 🥦 Vegetable', ruralExample: 'Fresh milk from the cow.', voiceOverEn: 'Healthy food.', type: 'video', miniGame: { type: 'healthy_potion', config: { title: 'Healthy Food Potion', items: [{ name: 'apple', healthy: true }, { name: 'chips', healthy: false }, { name: 'milk', healthy: true }], reward: '✨ Potion is ready! +10 House Points' } }, quiz: [{ text: 'Which is healthy?', options: ['Apple', 'Candy'], correct: 0 }] },
        { id: 'c1_cbse_evs_7', class: 'Class 1', title: 'Water', subject: 'EVS', description: 'Uses of water.', storyIntro: 'Sparky drinks magic water!', explanation: 'We need water for drinking, bathing, and washing.', videoUrl: 'https://www.youtube.com/watch?v=h4eueDYPTIg', visualExamples: '🚰 Drinking, 🛁 Bathing', ruralExample: 'Drawing water from the well.', voiceOverEn: 'Water is life.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Drink', '🥛'], ['Wash', '🧼']] } }, quiz: [{ text: 'Do plants need water?', options: ['Yes', 'No'], correct: 0 }] },
        { id: 'c1_cbse_evs_8', class: 'Class 1', title: 'Plants Around Us', subject: 'EVS', description: 'Types of plants.', storyIntro: 'Sparky visits a magical forest!', explanation: 'Plants are living things. Some are big trees and some are small bushes.', videoUrl: 'https://www.youtube.com/watch?v=h4eueDYPTIg', visualExamples: '🌳 Tree, 🪴 Plant', ruralExample: 'The mango tree in the farm.', voiceOverEn: 'Green plants.', type: 'video', miniGame: { type: 'wizard_garden', config: { title: 'Wizard Garden', categories: ['tree', 'flower', 'plant'], reward: '✨ The garden is blooming! +10 House Points' } }, quiz: [{ text: 'Which is a tree?', options: ['Mango', 'Rose'], correct: 0 }] },
        { id: 'c1_cbse_evs_9', class: 'Class 1', title: 'Animals Around Us', subject: 'EVS', description: 'Domestic and wild animals.', storyIntro: 'Sparky meets his animal friends!', explanation: 'Some animals live with us (Domestic) and some live in the forest (Wild).', videoUrl: 'https://www.youtube.com/watch?v=h4eueDYPTIg', visualExamples: '🐶 Dog, 🦁 Lion', ruralExample: 'The buffaloes in the village.', voiceOverEn: 'Animal world.', type: 'video', miniGame: { type: 'magic_forest_animals', config: { title: 'Magic Forest Animals', animals: [{ icon: '🐘', options: ['elephant', 'dog', 'cat'], correct: 0 }], reward: '✨ The forest is safe! +10 House Points' } }, quiz: [{ text: 'Which is a wild animal?', options: ['Tiger', 'Cow'], correct: 0 }] },
        { id: 'c1_cbse_evs_10', class: 'Class 1', title: 'Means of Transport', subject: 'EVS', description: 'How we travel.', storyIntro: 'Sparky travels on a magic carpet!', explanation: 'We use vehicles like cycles, buses, and trains to go from one place to another.', videoUrl: 'https://www.youtube.com/watch?v=h4eueDYPTIg', visualExamples: '🚲 Cycle, 🚌 Bus', ruralExample: 'The bullock cart in the village.', voiceOverEn: 'Let us travel.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Road', '🚗'], ['Track', '🚂']] } }, quiz: [{ text: 'Which has wings?', options: ['Aeroplane', 'Car'], correct: 0 }] }
      ],
      'Hindi': [
        {
          id: 'c1_cbse_hin_1',
          class: 'Class 1',
          title: 'Swar (Vowels)',
          subject: 'Hindi',
          description: 'Learn Hindi vowels (अ, आ, इ, ई...).',
          storyIntro: 'Sparky is learning the magical sounds of Hindi!',
          videoUrl: 'https://www.youtube.com/watch?v=qzszbus30UQ',
          videoStyle: 'Letters appearing with sounds.',
          visualExamples: 'अ, आ, इ, ई',
          ruralExample: 'The sound of "अ" in "अमरूद" (Guava).',
          voiceOverEn: 'Let us learn Hindi vowels!',
          voiceOverTe: 'హిందీ అచ్చులను నేర్చుకుందాం!',
          voiceOverHi: 'आइए हिंदी स्वर सीखें!',
          type: 'video',
          miniGame: { 
            type: 'owl_alphabet', 
            config: { 
              title: 'Owl Alphabet Flight',
              description: 'Place Hindi letters in correct order!',
              letters: ['अ', 'आ', 'इ', 'ई'],
              reward: '✨ The owl delivers the letters! +10 House Points'
            } 
          },
          quiz: [
            { text: 'Which letter is "अ"?', options: ['अ', 'आ', 'इ'], correct: 0, audioEn: 'Which letter is A?', audioTe: '"అ" అక్షరం ఏది?', audioHi: '"अ" अक्षर कौन सा है?' }
          ]
        },
        { id: 'c1_cbse_hin_2', class: 'Class 1', title: 'Vyanjan (Consonants) - Part 1', subject: 'Hindi', description: 'Learn Hindi consonants (क, ख, ग, घ...).', storyIntro: 'Sparky learns more Hindi letters!', explanation: 'Consonants are sounds like Ka, Kha, Ga.', videoUrl: 'https://www.youtube.com/watch?v=_lEsrNatDaE', visualExamples: 'क, ख, ग', ruralExample: 'क for कमल (Lotus).', voiceOverEn: 'Hindi consonants.', type: 'video', miniGame: { type: 'letter_magic', config: { title: 'अक्षर जादू (Letter Magic)', pairs: [['क', 'कमल'], ['ग', 'गमला'], ['म', 'मछली']], reward: '✨ Magic wand sparkles! +10 House Points' } }, quiz: [{ text: 'Which is क?', options: ['क', 'ख'], correct: 0 }] },
        { id: 'c1_cbse_hin_3', class: 'Class 1', title: 'Vyanjan (Consonants) - Part 2', subject: 'Hindi', description: 'Learn Hindi consonants (च, छ, ज, झ...).', storyIntro: 'Sparky is doing great!', explanation: 'More consonants like Cha, Chha, Ja.', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'च, छ, ज', ruralExample: 'च for चरखा (Spinning wheel).', voiceOverEn: 'More consonants.', type: 'video', miniGame: { 
            type: 'magic_picture_match', 
            config: { 
              title: 'Magic Picture Match',
              description: 'Match the Hindi letter to the magical object!',
              pairs: [['च', '🎡'], ['छ', '☂️']],
              reward: '✨ Spell Completed! +10 House Points'
            } 
          }, quiz: [{ text: 'Which is च?', options: ['च', 'छ'], correct: 0 }] },
        { id: 'c1_cbse_hin_4', class: 'Class 1', title: 'Two Letter Words', subject: 'Hindi', description: 'Combining two letters.', storyIntro: 'Sparky makes words!', explanation: 'When we join two letters, we get a word. Like क + ल = कल.', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'घर, फल, जल', ruralExample: 'घर (Home).', voiceOverEn: 'Two letter words.', type: 'video', miniGame: { 
            type: 'hindi_word_treasure', 
            config: { 
              title: 'Hindi Word Treasure',
              description: 'Pick the right word for the picture to open the chest!',
              image: '🏠',
              options: ['घर', 'फल', 'जल'],
              correctAnswer: 'घर',
              reward: '✨ Treasure chest is yours! +10 House Points'
            } 
          }, quiz: [{ text: 'घ + र = ?', options: ['घर', 'फल'], correct: 0 }] },
        { id: 'c1_cbse_hin_5', class: 'Class 1', title: 'Three Letter Words', subject: 'Hindi', description: 'Combining three letters.', storyIntro: 'Sparky is a word wizard!', explanation: 'Joining three letters. Like क + म + ल = कमल.', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'कमल, मटर, बटन', ruralExample: 'मटर (Peas).', voiceOverEn: 'Three letter words.', type: 'video', miniGame: { type: 'missing_letter', config: { title: 'Missing Letter Spell', word: 'क_ल', options: ['म', 'ल', 'क'], correct: 'म', reward: '✨ Spell Completed! +10 House Points' } }, quiz: [{ text: 'क + म + ल = ?', options: ['कमल', 'मटर'], correct: 0 }] },
        { id: 'c1_cbse_hin_6', class: 'Class 1', title: 'Matra - Aa', subject: 'Hindi', description: 'Learning Aa matra.', storyIntro: 'Sparky adds a magic stick!', explanation: 'Aa matra (ा) makes the sound long. Like क + ा = का.', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'आम, काला, माला', ruralExample: 'आम (Mango).', voiceOverEn: 'Aa matra.', type: 'video', miniGame: { type: 'match', config: { pairs: [['आ', 'ा'], ['म', 'मा']] } }, quiz: [{ text: 'Which has Aa matra?', options: ['आम', 'कल'], correct: 0 }] },
        { id: 'c1_cbse_hin_7', class: 'Class 1', title: 'Matra - Ee', subject: 'Hindi', description: 'Learning Ee matra.', storyIntro: 'Sparky learns Ee matra!', explanation: 'Ee matra (ि) makes the sound short i. Like क + ि = कि.', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'दिन, सिर, चित्र', ruralExample: 'दिन (Day).', voiceOverEn: 'Ee matra.', type: 'video', miniGame: { type: 'match', config: { pairs: [['इ', 'ि'], ['द', 'दि']] } }, quiz: [{ text: 'Which has Ee matra?', options: ['दिन', 'दाम'], correct: 0 }] },
        { id: 'c1_cbse_hin_8', class: 'Class 1', title: 'Numbers in Hindi (1-10)', subject: 'Hindi', description: 'Counting in Hindi.', storyIntro: 'Sparky counts in Hindi!', explanation: 'एक, दो, तीन... let us count to ten.', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: '१, २, ३', ruralExample: 'Counting goats in Hindi.', voiceOverEn: 'Hindi numbers.', type: 'video', miniGame: { type: 'count', config: { target: 5 } }, quiz: [{ text: 'What is 2 in Hindi?', options: ['दो', 'तीन'], correct: 0 }] },
        { id: 'c1_cbse_hin_9', class: 'Class 1', title: 'Colors in Hindi', subject: 'Hindi', description: 'Names of colors.', storyIntro: 'Sparky sees a colorful world!', explanation: 'लाल (Red), नीला (Blue), हरा (Green).', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'लाल 🔴, नीला 🔵', ruralExample: 'The green (हरा) grass.', voiceOverEn: 'Hindi colors.', type: 'video', miniGame: { type: 'match', config: { pairs: [['लाल', '🔴'], ['नीला', '🔵']] } }, quiz: [{ text: 'Which is Red?', options: ['लाल', 'हरा'], correct: 0 }] },
        { id: 'c1_cbse_hin_10', class: 'Class 1', title: 'Fruits in Hindi', subject: 'Hindi', description: 'Names of fruits.', storyIntro: 'Sparky eats Hindi fruits!', explanation: 'आम (Mango), केला (Banana), सेब (Apple).', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'आम 🥭, केला 🍌', ruralExample: 'आम from the tree.', voiceOverEn: 'Hindi fruits.', type: 'video', miniGame: { type: 'match', config: { pairs: [['आम', '🥭'], ['केला', '🍌']] } }, quiz: [{ text: 'Which is Mango?', options: ['आम', 'सेब'], correct: 0 }] }
      ],
      'Telugu': [
        {
          id: 'c1_cbse_tel_1',
          class: 'Class 1',
          title: 'Achulu (Vowels)',
          subject: 'Telugu',
          description: 'Learn Telugu vowels (అ, ఆ, ఇ, ఈ...).',
          storyIntro: 'Sparky is learning the beautiful letters of Telugu!',
          videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4',
          videoStyle: 'Letters appearing with sounds.',
          visualExamples: 'అ, ఆ, ఇ, ఈ',
          ruralExample: 'The sound of "అ" in "అమ్మ" (Mother).',
          voiceOverEn: 'Let us learn Telugu vowels!',
          voiceOverTe: 'తెలుగు అచ్చులను నేర్చుకుందాం!',
          voiceOverHi: 'आइए तेलुगु स्वर सीखें!',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['అ', '👩'], ['ఆ', '🐢']] } },
          quiz: [
            { text: 'Which letter is "అ"?', options: ['అ', 'ఆ', 'ఇ'], correct: 0, audioEn: 'Which letter is A?', audioTe: '"అ" అక్షరం ఏది?', audioHi: '"अ" अक्षर कौन सा है?' }
          ]
        },
        { id: 'c1_cbse_tel_2', class: 'Class 1', title: 'Hallulu (Consonants) - Part 1', subject: 'Telugu', description: 'Learn Telugu consonants (క, ఖ, గ, ఘ...).', storyIntro: 'Sparky learns more Telugu letters!', explanation: 'Consonants are sounds like Ka, Kha, Ga.', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'క, ఖ, గ', ruralExample: 'క for కమలం (Lotus).', voiceOverEn: 'Telugu consonants.', type: 'video', miniGame: { type: 'match', config: { pairs: [['క', '🪷'], ['ఖ', '🐰']] } }, quiz: [{ text: 'Which is క?', options: ['క', 'ఖ'], correct: 0 }] },
        { id: 'c1_cbse_tel_3', class: 'Class 1', title: 'Hallulu (Consonants) - Part 2', subject: 'Telugu', description: 'Learn Telugu consonants (చ, ఛ, జ, ఝ...).', storyIntro: 'Sparky is doing great!', explanation: 'More consonants like Cha, Chha, Ja.', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'చ, ఛ, జ', ruralExample: 'చ for చక్రం (Wheel).', voiceOverEn: 'More consonants.', type: 'video', miniGame: { type: 'match', config: { pairs: [['చ', '🎡'], ['ఛ', '☂️']] } }, quiz: [{ text: 'Which is చ?', options: ['చ', 'ఛ'], correct: 0 }] },
        { id: 'c1_cbse_tel_4', class: 'Class 1', title: 'Simple Words', subject: 'Telugu', description: 'Combining letters.', storyIntro: 'Sparky makes Telugu words!', explanation: 'Joining letters to make words. Like అ + మ = అమ్మ.', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'అమ్మ, ఆవు, ఇల్లు', ruralExample: 'అమ్మ (Mother).', voiceOverEn: 'Simple words.', type: 'video', miniGame: { type: 'word_builder', config: { word: 'అమ్మ' } }, quiz: [{ text: 'అ + మ = ?', options: ['అమ్మ', 'ఆవు'], correct: 0 }] },
        { id: 'c1_cbse_tel_5', class: 'Class 1', title: 'Guninthalu - Aa', subject: 'Telugu', description: 'Learning Aa gunintham.', storyIntro: 'Sparky adds a magic sign!', explanation: 'Aa sign (ా) makes the sound long. Like క + ా = కా.', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'కాకర, గాలి', ruralExample: 'గాలి (Wind).', voiceOverEn: 'Aa sign.', type: 'video', miniGame: { type: 'match', config: { pairs: [['ఆ', 'ా'], ['క', 'కా']] } }, quiz: [{ text: 'Which has Aa sign?', options: ['కాకర', 'కల'], correct: 0 }] },
        { id: 'c1_cbse_tel_6', class: 'Class 1', title: 'Guninthalu - Ee', subject: 'Telugu', description: 'Learning Ee gunintham.', storyIntro: 'Sparky learns Ee sign!', explanation: 'Ee sign (ి) makes the sound i. Like క + ి = కి.', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'కిటికి, గిన్నె', ruralExample: 'కిటికి (Window).', voiceOverEn: 'Ee sign.', type: 'video', miniGame: { type: 'match', config: { pairs: [['ఇ', 'ి'], ['క', 'కి']] } }, quiz: [{ text: 'Which has Ee sign?', options: ['కిటికి', 'కాకర'], correct: 0 }] },
        { id: 'c1_cbse_tel_7', class: 'Class 1', title: 'Numbers in Telugu (1-10)', subject: 'Telugu', description: 'Counting in Telugu.', storyIntro: 'Sparky counts in Telugu!', explanation: 'ఒకటి, రెండు, మూడు... let us count to ten.', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: '౧, ౨, ౩', ruralExample: 'Counting cows in Telugu.', voiceOverEn: 'Telugu numbers.', type: 'video', miniGame: { type: 'count', config: { target: 5 } }, quiz: [{ text: 'What is 2 in Telugu?', options: ['రెండు', 'మూడు'], correct: 0 }] },
        { id: 'c1_cbse_tel_8', class: 'Class 1', title: 'Colors in Telugu', subject: 'Telugu', description: 'Names of colors.', storyIntro: 'Sparky sees a colorful world!', explanation: 'ఎరుపు (Red), నీలం (Blue), ఆకుపచ్చ (Green).', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'ఎరుపు 🔴, నీలం 🔵', ruralExample: 'The green (ఆకుపచ్చ) grass.', voiceOverEn: 'Telugu colors.', type: 'video', miniGame: { type: 'match', config: { pairs: [['ఎరుపు', '🔴'], ['నీలం', '🔵']] } }, quiz: [{ text: 'Which is Red?', options: ['ఎరుపు', 'నీలం'], correct: 0 }] },
        { id: 'c1_cbse_tel_9', class: 'Class 1', title: 'Fruits in Telugu', subject: 'Telugu', description: 'Names of fruits.', storyIntro: 'Sparky eats Telugu fruits!', explanation: 'మామిడి (Mango), అరటి (Banana), ఆపిల్ (Apple).', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'మామిడి 🥭, అరటి 🍌', ruralExample: 'మామిడి from the tree.', voiceOverEn: 'Telugu fruits.', type: 'video', miniGame: { type: 'match', config: { pairs: [['మామిడి', '🥭'], ['అరటి', '🍌']] } }, quiz: [{ text: 'Which is Mango?', options: ['మామిడి', 'ఆపిల్'], correct: 0 }] },
        { id: 'c1_cbse_tel_10', class: 'Class 1', title: 'Animals in Telugu', subject: 'Telugu', description: 'Names of animals.', storyIntro: 'Sparky meets Telugu animals!', explanation: 'కుక్క (Dog), సింహం (Lion), ఏనుగు (Elephant).', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'కుక్క 🐶, ఏనుగు 🐘', ruralExample: 'ఏనుగు in the forest.', voiceOverEn: 'Telugu animals.', type: 'video', miniGame: { type: 'match', config: { pairs: [['కుక్క', '🐶'], ['ఏనుగు', '🐘']] } }, quiz: [{ text: 'Which is Elephant?', options: ['ఏనుగు', 'కుక్క'], correct: 0 }] }
      ]
    },
    'Telangana State Board': {
      'English': [
        {
          id: 'c1_tel_eng_1',
          class: 'Class 1',
          title: 'Alphabet Fun',
          subject: 'English',
          description: 'Learn A to Z with fun sounds.',
          storyIntro: 'Sparky is finding letters in the Telangana fields!',
          videoUrl: 'https://www.youtube.com/watch?v=75p-N9YKqNo',
          visualExamples: 'A, B, C, D',
          ruralExample: 'A for Agriculture.',
          voiceOverEn: 'Let us learn the alphabet.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['A', '🍎'], ['B', '🐝']] } },
          quiz: [{ text: 'What comes after A?', options: ['B', 'C'], correct: 0 }]
        },
        { id: 'c1_tel_eng_2', class: 'Class 1', title: 'Vowels and Consonants', subject: 'English', description: 'A, E, I, O, U.', storyIntro: 'Sparky finds special letters!', videoUrl: 'https://www.youtube.com/watch?v=75p-N9YKqNo', visualExamples: 'A, E, I, O, U', ruralExample: 'U for Umbrella in the rain.', voiceOverEn: 'Vowels are special.', type: 'video', miniGame: { type: 'match', config: { pairs: [['A', 'Vowel'], ['B', 'Consonant']] } }, quiz: [{ text: 'Is E a vowel?', options: ['Yes', 'No'], correct: 0 }] },
        { id: 'c1_tel_eng_3', class: 'Class 1', title: 'Naming Words', subject: 'English', description: 'Names of things.', storyIntro: 'Sparky names everything!', videoUrl: 'https://www.youtube.com/watch?v=75p-N9YKqNo', visualExamples: 'Cow, Tree, Well', ruralExample: 'Well is a naming word.', voiceOverEn: 'Everything has a name.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Cow', '🐄'], ['Tree', '🌳']] } }, quiz: [{ text: 'Which is a thing?', options: ['Pen', 'Run'], correct: 0 }] },
        { id: 'c1_tel_eng_4', class: 'Class 1', title: 'Action Words', subject: 'English', description: 'Doing words.', storyIntro: 'Sparky is busy!', videoUrl: 'https://www.youtube.com/watch?v=75p-N9YKqNo', visualExamples: 'Run, Jump, Play', ruralExample: 'Farmers work in the field.', voiceOverEn: 'Actions are fun.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Run', '🏃'], ['Jump', '🦘']] } }, quiz: [{ text: 'Which is an action?', options: ['Jump', 'Apple'], correct: 0 }] },
        { id: 'c1_tel_eng_5', class: 'Class 1', title: 'One and Many', subject: 'English', description: 'Singular and Plural.', storyIntro: 'Sparky sees more than one!', videoUrl: 'https://www.youtube.com/watch?v=75p-N9YKqNo', visualExamples: 'Cat -> Cats', ruralExample: 'One goat, many goats.', voiceOverEn: 'One and many.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Cat', 'Cats'], ['Dog', 'Dogs']] } }, quiz: [{ text: 'Plural of Boy?', options: ['Boys', 'Boyes'], correct: 0 }] },
        { id: 'c1_tel_eng_6', class: 'Class 1', title: 'Describing Words', subject: 'English', description: 'Adjectives.', storyIntro: 'Sparky describes his friends!', videoUrl: 'https://www.youtube.com/watch?v=75p-N9YKqNo', visualExamples: 'Big, Small, Red', ruralExample: 'The big banyan tree.', voiceOverEn: 'Describing words.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Big', '🐘'], ['Small', '🐭']] } }, quiz: [{ text: 'Which is a color?', options: ['Red', 'Run'], correct: 0 }] },
        { id: 'c1_tel_eng_7', class: 'Class 1', title: 'This and That', subject: 'English', description: 'Pointing to things.', storyIntro: 'Sparky points to things!', videoUrl: 'https://www.youtube.com/watch?v=75p-N9YKqNo', visualExamples: 'This is a book.', ruralExample: 'This is my house.', voiceOverEn: 'This and That.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Near', 'This'], ['Far', 'That']] } }, quiz: [{ text: 'Point to near thing?', options: ['This', 'That'], correct: 0 }] },
        { id: 'c1_tel_eng_8', class: 'Class 1', title: 'In, On, Under', subject: 'English', description: 'Prepositions.', storyIntro: 'Sparky hides!', videoUrl: 'https://www.youtube.com/watch?v=75p-N9YKqNo', visualExamples: 'In the box.', ruralExample: 'The bird is on the tree.', voiceOverEn: 'Where is it?', type: 'video', miniGame: { type: 'match', config: { pairs: [['In', '📥'], ['On', '🔝']] } }, quiz: [{ text: 'Bird is ___ the tree.', options: ['On', 'Under'], correct: 0 }] },
        { id: 'c1_tel_eng_9', class: 'Class 1', title: 'He, She, It', subject: 'English', description: 'Pronouns.', storyIntro: 'Sparky uses pronouns!', videoUrl: 'https://www.youtube.com/watch?v=75p-N9YKqNo', visualExamples: 'He is a boy.', ruralExample: 'He is a farmer.', voiceOverEn: 'He, She, It.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Boy', 'He'], ['Girl', 'She']] } }, quiz: [{ text: 'For a girl?', options: ['She', 'He'], correct: 0 }] },
        { id: 'c1_tel_eng_10', class: 'Class 1', title: 'Magic Words', subject: 'English', description: 'Polite words.', storyIntro: 'Sparky is polite!', videoUrl: 'https://www.youtube.com/watch?v=75p-N9YKqNo', visualExamples: 'Please, Thank you', ruralExample: 'Saying thank you to the helper.', voiceOverEn: 'Be polite.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Gift', 'Thank you'], ['Help', 'Please']] } }, quiz: [{ text: 'When you get a gift?', options: ['Thank you', 'Sorry'], correct: 0 }] }
      ],
      'Mathematics': [
        {
          id: 'c1_tel_math_1',
          class: 'Class 1',
          title: 'Pre-Number Concepts',
          subject: 'Mathematics',
          description: 'Big/Small, Top/Bottom.',
          storyIntro: 'Sparky compares things!',
          videoUrl: 'https://www.youtube.com/watch?v=D0Ajq682yrA',
          visualExamples: 'Big Elephant, Small Ant',
          ruralExample: 'The big hill and small stone.',
          voiceOverEn: 'Let us compare.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Big', '🐘'], ['Small', '🐜']] } },
          quiz: [{ text: 'Which is big?', options: ['Elephant', 'Ant'], correct: 0 }]
        },
        { id: 'c1_tel_math_2', class: 'Class 1', title: 'Numbers 1 to 5', subject: 'Mathematics', description: 'Counting up to 5.', storyIntro: 'Sparky counts stars!', videoUrl: 'https://www.youtube.com/watch?v=D0Ajq682yrA', visualExamples: '1, 2, 3, 4, 5', ruralExample: 'Counting 5 cows.', voiceOverEn: 'Count to five.', type: 'video', miniGame: { type: 'count', config: { target: 5 } }, quiz: [{ text: 'What is after 2?', options: ['3', '1'], correct: 0 }] },
        { id: 'c1_tel_math_3', class: 'Class 1', title: 'Numbers 6 to 10', subject: 'Mathematics', description: 'Counting up to 10.', storyIntro: 'Sparky counts more!', videoUrl: 'https://www.youtube.com/watch?v=D0Ajq682yrA', visualExamples: '6, 7, 8, 9, 10', ruralExample: 'Counting 10 trees.', voiceOverEn: 'Count to ten.', type: 'video', miniGame: { type: 'count', config: { target: 10 } }, quiz: [{ text: 'What is after 9?', options: ['10', '8'], correct: 0 }] },
        { id: 'c1_tel_math_4', class: 'Class 1', title: 'Zero Concept', subject: 'Mathematics', description: 'Understanding nothing.', storyIntro: 'Sparky has no more laddoos!', videoUrl: 'https://www.youtube.com/watch?v=D0Ajq682yrA', visualExamples: '0 means nothing.', ruralExample: 'Empty basket has zero fruits.', voiceOverEn: 'Zero is nothing.', type: 'video', miniGame: { type: 'count', config: { target: 0 } }, quiz: [{ text: 'What means nothing?', options: ['0', '1'], correct: 0 }] },
        { id: 'c1_tel_math_5', class: 'Class 1', title: 'Before, After, Between', subject: 'Mathematics', description: 'Number positions.', storyIntro: 'Sparky finds the missing number!', videoUrl: 'https://www.youtube.com/watch?v=D0Ajq682yrA', visualExamples: '1, _, 3', ruralExample: 'Houses in a row.', voiceOverEn: 'Where is the number?', type: 'video', miniGame: { type: 'match', config: { pairs: [['Before 2', '1'], ['After 2', '3']] } }, quiz: [{ text: 'What is between 1 and 3?', options: ['2', '4'], correct: 0 }] },
        { id: 'c1_tel_math_6', class: 'Class 1', title: 'Addition (1-9)', subject: 'Mathematics', description: 'Adding numbers.', storyIntro: 'Sparky adds magic stones!', videoUrl: 'https://www.youtube.com/watch?v=D0Ajq682yrA', visualExamples: '2 + 1 = 3', ruralExample: 'Adding 2 sheep and 1 sheep.', voiceOverEn: 'Let us add.', type: 'video', miniGame: { type: 'count', config: { target: 5 } }, quiz: [{ text: '2 + 2 = ?', options: ['4', '5'], correct: 0 }] },
        { id: 'c1_tel_math_7', class: 'Class 1', title: 'Subtraction (1-9)', subject: 'Mathematics', description: 'Taking away.', storyIntro: 'Sparky gives away stones!', videoUrl: 'https://www.youtube.com/watch?v=D0Ajq682yrA', visualExamples: '3 - 1 = 2', ruralExample: '3 birds on a tree, 1 flies away.', voiceOverEn: 'Let us subtract.', type: 'video', miniGame: { type: 'count', config: { target: 2 } }, quiz: [{ text: '5 - 1 = ?', options: ['4', '6'], correct: 0 }] },
        { id: 'c1_tel_math_8', class: 'Class 1', title: 'Numbers 11 to 20', subject: 'Mathematics', description: 'Counting up to 20.', storyIntro: 'Sparky counts even more!', videoUrl: 'https://www.youtube.com/watch?v=D0Ajq682yrA', visualExamples: '11, 12, ..., 20', ruralExample: 'Counting 20 bags of rice.', voiceOverEn: 'Count to twenty.', type: 'video', miniGame: { type: 'count', config: { target: 20 } }, quiz: [{ text: 'What is 10 + 1?', options: ['11', '12'], correct: 0 }] },
        { id: 'c1_tel_math_9', class: 'Class 1', title: 'Shapes Around Us', subject: 'Mathematics', description: 'Circle, Square, Triangle.', storyIntro: 'Sparky sees shapes!', videoUrl: 'https://www.youtube.com/watch?v=D0Ajq682yrA', visualExamples: '⭕ Circle, 🟦 Square', ruralExample: 'The round sun and square field.', voiceOverEn: 'Shapes are everywhere.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Circle', '⭕'], ['Square', '🟦']] } }, quiz: [{ text: 'Which is round?', options: ['Circle', 'Square'], correct: 0 }] },
        { id: 'c1_tel_math_10', class: 'Class 1', title: 'Money Basics', subject: 'Mathematics', description: 'Coins and Notes.', storyIntro: 'Sparky goes to the village fair!', videoUrl: 'https://www.youtube.com/watch?v=D0Ajq682yrA', visualExamples: '1 Rupee, 2 Rupees', ruralExample: 'Buying a toy at the fair.', voiceOverEn: 'Let us learn about money.', type: 'video', miniGame: { type: 'match', config: { pairs: [['1', '🪙'], ['2', '🪙']] } }, quiz: [{ text: 'What do we use to buy?', options: ['Money', 'Stone'], correct: 0 }] }
      ],
      'EVS': [
        {
          id: 'c1_tel_evs_1',
          class: 'Class 1',
          title: 'About Me',
          subject: 'EVS',
          description: 'Introduction to self.',
          storyIntro: 'Sparky introduces himself!',
          videoUrl: 'https://www.youtube.com/watch?v=h4eueDYPTIg',
          visualExamples: 'Name, Age, School',
          ruralExample: 'I live in a beautiful village.',
          voiceOverEn: 'Tell me about yourself.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Boy', '👦'], ['Girl', '👧']] } },
          quiz: [{ text: 'What is your name?', options: ['Name', 'Age'], correct: 0 }]
        },
        { id: 'c1_tel_evs_2', class: 'Class 1', title: 'My Body Parts', subject: 'EVS', description: 'Eyes, Ears, Nose.', storyIntro: 'Sparky learns about his body!', videoUrl: 'https://www.youtube.com/watch?v=h4eueDYPTIg', visualExamples: '👀 Eyes, 👂 Ears', ruralExample: 'Using hands to plant seeds.', voiceOverEn: 'Our body is special.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Eyes', '👀'], ['Ears', '👂']] } }, quiz: [{ text: 'What do we see with?', options: ['Eyes', 'Ears'], correct: 0 }] },
        { id: 'c1_tel_evs_3', class: 'Class 1', title: 'My Family', subject: 'EVS', description: 'Parents and siblings.', storyIntro: 'Sparky loves his family!', videoUrl: 'https://www.youtube.com/watch?v=h4eueDYPTIg', visualExamples: '👨 Father, 👩 Mother', ruralExample: 'Helping mother in the kitchen.', voiceOverEn: 'Family is love.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Father', '👨'], ['Mother', '👩']] } }, quiz: [{ text: 'Who is your mother\'s husband?', options: ['Father', 'Uncle'], correct: 0 }] },
        { id: 'c1_tel_evs_4', class: 'Class 1', title: 'My Home', subject: 'EVS', description: 'Types of houses.', storyIntro: 'Sparky shows his home!', videoUrl: 'https://www.youtube.com/watch?v=h4eueDYPTIg', visualExamples: '🏠 House, 🛖 Hut', ruralExample: 'The thatched hut in the farm.', voiceOverEn: 'Home sweet home.', type: 'video', miniGame: { type: 'match', config: { pairs: [['House', '🏠'], ['Hut', '🛖']] } }, quiz: [{ text: 'Where do we live?', options: ['Home', 'Park'], correct: 0 }] },
        { id: 'c1_tel_evs_5', class: 'Class 1', title: 'My School', subject: 'EVS', description: 'Learning and playing.', storyIntro: 'Sparky goes to school!', videoUrl: 'https://www.youtube.com/watch?v=h4eueDYPTIg', visualExamples: '🏫 School, 👩🏫 Teacher', ruralExample: 'Playing under the school tree.', voiceOverEn: 'School is fun.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Teacher', '👩🏫'], ['Student', '👦']] } }, quiz: [{ text: 'Who teaches us?', options: ['Teacher', 'Doctor'], correct: 0 }] },
        { id: 'c1_tel_evs_6', class: 'Class 1', title: 'Food We Eat', subject: 'EVS', description: 'Healthy food.', storyIntro: 'Sparky eats healthy!', videoUrl: 'https://www.youtube.com/watch?v=h4eueDYPTIg', visualExamples: '🍎 Fruit, 🥦 Vegetable', ruralExample: 'Fresh vegetables from the garden.', voiceOverEn: 'Eat healthy.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Fruit', '🍎'], ['Vegetable', '🥦']] } }, quiz: [{ text: 'Which is healthy?', options: ['Apple', 'Candy'], correct: 0 }] },
        { id: 'c1_tel_evs_7', class: 'Class 1', title: 'Water', subject: 'EVS', description: 'Uses of water.', storyIntro: 'Sparky drinks water!', videoUrl: 'https://www.youtube.com/watch?v=h4eueDYPTIg', visualExamples: '🚰 Drinking, 🛁 Bathing', ruralExample: 'Fetching water from the river.', voiceOverEn: 'Water is precious.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Drink', '🥛'], ['Wash', '🧼']] } }, quiz: [{ text: 'Do we need water?', options: ['Yes', 'No'], correct: 0 }] },
        { id: 'c1_tel_evs_8', class: 'Class 1', title: 'Plants', subject: 'EVS', description: 'Green world.', storyIntro: 'Sparky loves plants!', videoUrl: 'https://www.youtube.com/watch?v=h4eueDYPTIg', visualExamples: '🌳 Tree, 🪴 Plant', ruralExample: 'The neem tree in the village.', voiceOverEn: 'Plants give us air.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Tree', '🌳'], ['Flower', '🌸']] } }, quiz: [{ text: 'Which is a tree?', options: ['Neem', 'Rose'], correct: 0 }] },
        { id: 'c1_tel_evs_9', class: 'Class 1', title: 'Animals', subject: 'EVS', description: 'Animal friends.', storyIntro: 'Sparky meets animals!', videoUrl: 'https://www.youtube.com/watch?v=h4eueDYPTIg', visualExamples: '🐶 Dog, 🦁 Lion', ruralExample: 'The cow that gives us milk.', voiceOverEn: 'Animals are our friends.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Dog', 'Domestic'], ['Lion', 'Wild']] } }, quiz: [{ text: 'Which gives milk?', options: ['Cow', 'Tiger'], correct: 0 }] },
        { id: 'c1_tel_evs_10', class: 'Class 1', title: 'Safety Rules', subject: 'EVS', description: 'Being safe.', storyIntro: 'Sparky stays safe!', videoUrl: 'https://www.youtube.com/watch?v=h4eueDYPTIg', visualExamples: '🚦 Traffic light, 🚶 Walk on path', ruralExample: 'Walking carefully on the village road.', voiceOverEn: 'Stay safe.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Red', 'Stop'], ['Green', 'Go']] } }, quiz: [{ text: 'Red light means?', options: ['Stop', 'Go'], correct: 0 }] }
      ],
      'Hindi': [
        {
          id: 'c1_tel_hin_1',
          class: 'Class 1',
          title: 'Hindi Swar',
          subject: 'Hindi',
          description: 'Vowels (अ, आ...).',
          storyIntro: 'Sparky learns Hindi sounds!',
          videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q',
          visualExamples: 'अ, आ, ఇ, ई',
          ruralExample: 'अ for अनार.',
          voiceOverEn: 'Hindi vowels.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['अ', '🍎'], ['आ', '🥭']] } },
          quiz: [{ text: 'Which is अ?', options: ['अ', 'आ'], correct: 0 }]
        },
        { id: 'c1_tel_hin_2', class: 'Class 1', title: 'Hindi Vyanjan 1', subject: 'Hindi', description: 'Consonants (क, ख...).', storyIntro: 'Sparky learns letters!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'क, ख, గ', ruralExample: 'क for कमल.', voiceOverEn: 'Hindi consonants.', type: 'video', miniGame: { type: 'match', config: { pairs: [['क', '🪷'], ['ख', '🐰']] } }, quiz: [{ text: 'Which is क?', options: ['क', 'ख'], correct: 0 }] },
        { id: 'c1_tel_hin_3', class: 'Class 1', title: 'Hindi Vyanjan 2', subject: 'Hindi', description: 'Consonants (च, छ...).', storyIntro: 'Sparky learns more!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'च, छ, జ', ruralExample: 'च for चरखा.', voiceOverEn: 'More consonants.', type: 'video', miniGame: { type: 'match', config: { pairs: [['च', '🎡'], ['छ', '☂️']] } }, quiz: [{ text: 'Which is च?', options: ['च', 'छ'], correct: 0 }] },
        { id: 'c1_tel_hin_4', class: 'Class 1', title: 'Hindi Vyanjan 3', subject: 'Hindi', description: 'Consonants (ट, ठ...).', storyIntro: 'Sparky is learning fast!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'ट, ठ, డ', ruralExample: 'ट for टमाटर.', voiceOverEn: 'Consonants Part 3.', type: 'video', miniGame: { type: 'match', config: { pairs: [['ट', '🍅'], ['ठ', '🔨']] } }, quiz: [{ text: 'Which is ट?', options: ['ट', 'ठ'], correct: 0 }] },
        { id: 'c1_tel_hin_5', class: 'Class 1', title: 'Two Letter Words', subject: 'Hindi', description: 'Simple words.', storyIntro: 'Sparky makes words!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'घर, फल', ruralExample: 'घर (Home).', voiceOverEn: 'Simple words.', type: 'video', miniGame: { type: 'match', config: { pairs: [['घ+ర', 'घर'], ['ఫ+ల', 'फल']] } }, quiz: [{ text: 'घ + ర = ?', options: ['घर', 'फल'], correct: 0 }] },
        { id: 'c1_tel_hin_6', class: 'Class 1', title: 'Three Letter Words', subject: 'Hindi', description: 'More words.', storyIntro: 'Sparky is a pro!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'कमल, मटर', ruralExample: 'मटर (Peas).', voiceOverEn: 'Three letter words.', type: 'video', miniGame: { type: 'match', config: { pairs: [['క+మ+ల', 'कमल'], ['మ+ట+ర', 'मटर']] } }, quiz: [{ text: 'క + మ + ల = ?', options: ['कमल', 'मटर'], correct: 0 }] },
        { id: 'c1_tel_hin_7', class: 'Class 1', title: 'Hindi Numbers', subject: 'Hindi', description: 'Counting (1-10).', storyIntro: 'Sparky counts!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: '१, २, ३', ruralExample: 'Counting 5 goats in Hindi.', voiceOverEn: 'Hindi numbers.', type: 'video', miniGame: { type: 'count', config: { target: 5 } }, quiz: [{ text: 'What is 1 in Hindi?', options: ['एक', 'दो'], correct: 0 }] },
        { id: 'c1_tel_hin_8', class: 'Class 1', title: 'Hindi Colors', subject: 'Hindi', description: 'Names of colors.', storyIntro: 'Sparky sees colors!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'लाल, नीला', ruralExample: 'लाल (Red) flower.', voiceOverEn: 'Hindi colors.', type: 'video', miniGame: { type: 'match', config: { pairs: [['लाल', '🔴'], ['नीలా', '🔵']] } }, quiz: [{ text: 'Which is Red?', options: ['लाल', 'नीला'], correct: 0 }] },
        { id: 'c1_tel_hin_9', class: 'Class 1', title: 'Hindi Fruits', subject: 'Hindi', description: 'Names of fruits.', storyIntro: 'Sparky eats fruits!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'आम, केला', ruralExample: 'आम (Mango) from tree.', voiceOverEn: 'Hindi fruits.', type: 'video', miniGame: { type: 'match', config: { pairs: [['आम', '🥭'], ['కేలా', '🍌']] } }, quiz: [{ text: 'Which is Mango?', options: ['आम', 'కేలా'], correct: 0 }] },
        { id: 'c1_tel_hin_10', class: 'Class 1', title: 'Hindi Animals', subject: 'Hindi', description: 'Names of animals.', storyIntro: 'Sparky meets animals!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'కుత్తా, హాథీ', ruralExample: 'హాథీ (Elephant) in forest.', voiceOverEn: 'Hindi animals.', type: 'video', miniGame: { type: 'match', config: { pairs: [['కుత్తా', '🐶'], ['హాథీ', '🐘']] } }, quiz: [{ text: 'Which is Elephant?', options: ['హాథీ', 'కుత్తా'], correct: 0 }] }
      ],
      'Telugu': [
        {
          id: 'c1_tel_tel_1',
          class: 'Class 1',
          title: 'Telugu Achulu',
          subject: 'Telugu',
          description: 'Vowels (అ, ఆ...).',
          storyIntro: 'Sparky learns Telugu sounds!',
          videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4',
          visualExamples: 'అ, ఆ, ఇ, ఈ',
          ruralExample: 'అ for అమ్మ.',
          voiceOverEn: 'Telugu vowels.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['అ', '👩'], ['ఆ', '🐢']] } },
          quiz: [{ text: 'Which is అ?', options: ['అ', 'ఆ'], correct: 0 }]
        },
        { id: 'c1_tel_tel_2', class: 'Class 1', title: 'Telugu Hallulu 1', subject: 'Telugu', description: 'Consonants (క, ఖ...).', storyIntro: 'Sparky learns letters!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'క, ఖ, గ', ruralExample: 'క for కమలం.', voiceOverEn: 'Telugu consonants.', type: 'video', miniGame: { type: 'match', config: { pairs: [['క', '🪷'], ['ఖ', '🐰']] } }, quiz: [{ text: 'Which is క?', options: ['క', 'ఖ'], correct: 0 }] },
        { id: 'c1_tel_tel_3', class: 'Class 1', title: 'Telugu Hallulu 2', subject: 'Telugu', description: 'Consonants (చ, ఛ...).', storyIntro: 'Sparky learns more!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'చ, ఛ, జ', ruralExample: 'చ for చక్రం.', voiceOverEn: 'More consonants.', type: 'video', miniGame: { type: 'match', config: { pairs: [['చ', '🎡'], ['ఛ', '☂️']] } }, quiz: [{ text: 'Which is చ?', options: ['చ', 'ఛ'], correct: 0 }] },
        { id: 'c1_tel_tel_4', class: 'Class 1', title: 'Telugu Hallulu 3', subject: 'Telugu', description: 'Consonants (ట, ట...).', storyIntro: 'Sparky is learning fast!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'ట, ట, డ', ruralExample: 'ట for టమాటా.', voiceOverEn: 'Consonants Part 3.', type: 'video', miniGame: { type: 'match', config: { pairs: [['ట', '🍅'], ['ఠ', '🔨']] } }, quiz: [{ text: 'Which is ట?', options: ['ట', 'ఠ'], correct: 0 }] },
        { id: 'c1_tel_tel_5', class: 'Class 1', title: 'Simple Telugu Words', subject: 'Telugu', description: 'Simple words.', storyIntro: 'Sparky makes words!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'అమ్మ, ఆవు', ruralExample: 'అమ్మ (Mother).', voiceOverEn: 'Simple words.', type: 'video', miniGame: { type: 'match', config: { pairs: [['అ+మ', 'అమ్మ'], ['ఆ+వు', 'ఆవు']] } }, quiz: [{ text: 'అ + మ = ?', options: ['అమ్మ', 'ఆవు'], correct: 0 }] },
        { id: 'c1_tel_tel_6', class: 'Class 1', title: 'Telugu Guninthalu 1', subject: 'Telugu', description: 'Aa sign.', storyIntro: 'Sparky learns signs!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'కా, గా, చా', ruralExample: 'కా for కాకర.', voiceOverEn: 'Telugu signs.', type: 'video', miniGame: { type: 'match', config: { pairs: [['క+ా', 'కా'], ['గ+ా', 'గా']] } }, quiz: [{ text: 'Which is కా?', options: ['కా', 'క'], correct: 0 }] },
        { id: 'c1_tel_tel_7', class: 'Class 1', title: 'Telugu Numbers', subject: 'Telugu', description: 'Counting (1-10).', storyIntro: 'Sparky counts!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: '౧, ౨, ౩', ruralExample: 'Counting 5 cows in Telugu.', voiceOverEn: 'Telugu numbers.', type: 'video', miniGame: { type: 'count', config: { target: 5 } }, quiz: [{ text: 'What is 1 in Telugu?', options: ['ఒకటి', 'రెండు'], correct: 0 }] },
        { id: 'c1_tel_tel_8', class: 'Class 1', title: 'Telugu Colors', subject: 'Telugu', description: 'Names of colors.', storyIntro: 'Sparky sees colors!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'ఎరుపు, నీలం', ruralExample: 'ఎరుపు (Red) flower.', voiceOverEn: 'Telugu colors.', type: 'video', miniGame: { type: 'match', config: { pairs: [['ఎరుపు', '🔴'], ['నీలం', '🔵']] } }, quiz: [{ text: 'Which is Red?', options: ['ఎరుపు', 'నీలం'], correct: 0 }] },
        { id: 'c1_tel_tel_9', class: 'Class 1', title: 'Telugu Fruits', subject: 'Telugu', description: 'Names of fruits.', storyIntro: 'Sparky eats fruits!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'మామిడి, అరటి', ruralExample: 'మామిడి (Mango) from tree.', voiceOverEn: 'Telugu fruits.', type: 'video', miniGame: { type: 'match', config: { pairs: [['మామిడి', '🥭'], ['అరటి', '🍌']] } }, quiz: [{ text: 'Which is Mango?', options: ['మామిడి', 'అరటి'], correct: 0 }] },
        { id: 'c1_tel_tel_10', class: 'Class 1', title: 'Telugu Animals', subject: 'Telugu', description: 'Names of animals.', storyIntro: 'Sparky meets animals!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'కుక్క, ఏనుగు', ruralExample: 'ఏనుగు (Elephant) in forest.', voiceOverEn: 'Telugu animals.', type: 'video', miniGame: { type: 'match', config: { pairs: [['కుక్క', '🐶'], ['ఏనుగు', '🐘']] } }, quiz: [{ text: 'Which is Elephant?', options: ['ఏనుగు', 'కుక్క'], correct: 0 }] }
      ]
    }
  },
  'Class 2': {
    'CBSE': {
      'English': [
        {
          id: 'c2_eng_1',
          class: 'Class 2',
          title: 'First Day at School 🎒',
          subject: 'English',
          description: 'A poem about a child\'s first day at school.',
          storyIntro: '✨ Sparky is nervous but excited for his first day at school!',
          explanation: 'Going to school is fun! We meet new friends and teachers. We carry books, pencils, and erasers in our bags.',
          videoUrl: 'https://www.youtube.com/embed/l5T1CgowkFI',
          visualExamples: 'School, Teacher, Friends',
          ruralExample: 'Walking to the village school with a new bag.',
          voiceOverEn: 'My first day at school.',
          type: 'video',
          miniGame: { 
            type: 'drag_drop', 
            config: { 
              title: 'Magic Backpack Sorting',
              description: 'Drag school items into the wizard bag!',
              items: [
                { id: 'book', text: 'Book', icon: '📚', isCorrect: true },
                { id: 'wand', text: 'Wand', icon: '🪄', isCorrect: true },
                { id: 'banana', text: 'Banana', icon: '🍌', isCorrect: false },
                { id: 'pencil', text: 'Pencil', icon: '✏️', isCorrect: true }
              ],
              reward: '✨ Backpack is ready! +10 House Points'
            } 
          },
          quiz: [
            { text: 'Where do children go to learn?', options: ['School', 'Park', 'Shop'], correct: 0, audioEn: 'Where do children go to learn?', audioTe: 'పిల్లలు చదువుకోవడానికి ఎక్కడికి వెళతారు?', audioHi: 'बच्चे सीखने के लिए कहाँ जाते हैं?' },
            { text: 'What do we carry to school?', options: ['Books', 'Plates', 'Pillows'], correct: 0, audioEn: 'What do we carry to school?', audioTe: 'మనం పాఠశాలకు ఏమి తీసుకెళ్తాము?', audioHi: 'हम स्कूल क्या ले जाते हैं?' },
            { text: 'Who teaches students?', options: ['Teacher', 'Driver', 'Farmer'], correct: 0, audioEn: 'Who teaches students?', audioTe: 'విద్యార్థులకు ఎవరు బోధిస్తారు?', audioHi: 'छात्रों को कौन पढ़ाता है?' }
          ]
        },
        {
          id: 'c2_eng_2',
          class: 'Class 2',
          title: "Haldi's Adventure 🦒",
          subject: 'English',
          description: 'Haldi meets a giraffe on her way to school.',
          storyIntro: 'Sparky meets a tall friend on the way!',
          explanation: 'Haldi met a giraffe named Smiley. The giraffe wore glasses and held a book!',
          videoUrl: 'https://www.youtube.com/embed/xJxj3HywP_M',
          visualExamples: 'Giraffe, Adventure, Glasses',
          ruralExample: 'Meeting a tall camel in the desert.',
          voiceOverEn: 'Haldi met a giraffe.',
          type: 'video',
          miniGame: { 
            type: 'tap', 
            config: { 
              title: 'Wizard Path Adventure',
              description: 'Help Haldi reach the castle by tapping the path!',
              actions: ['walk', 'run', 'jump'],
              reward: '✨ Haldi reached the castle! +10 House Points'
            } 
          },
          quiz: [
            { text: 'Who is Haldi?', options: ['A girl', 'A bear', 'A cat'], correct: 0, audioEn: 'Who is Haldi?', audioTe: 'హల్దీ ఎవరు?', audioHi: 'हल्दी कौन है?' },
            { text: 'Where did Haldi go?', options: ['Forest', 'Ocean', 'School'], correct: 2, audioEn: 'Where did Haldi go?', audioTe: 'హల్దీ ఎక్కడికి వెళ్ళింది?', audioHi: 'हल्दी कहाँ गई?' },
            { text: 'What did Haldi see?', options: ['A giraffe', 'Tiger', 'Shark'], correct: 0, audioEn: 'What did Haldi see?', audioTe: 'హల్దీ ఏమి చూసింది?', audioHi: 'हल्दी ने क्या देखा?' }
          ]
        },
        {
          id: 'c2_eng_3',
          class: 'Class 2',
          title: 'I Am Lucky (Poem) 🦋',
          subject: 'English',
          description: 'A poem about being thankful for who we are.',
          storyIntro: 'Sparky feels very lucky today!',
          explanation: 'We should be happy for what we have. A butterfly is lucky it can fly, a fish is lucky it can swim!',
          videoUrl: 'https://www.youtube.com/embed/epAJUuTBC_A',
          visualExamples: 'Butterfly, Fish, Elephant',
          ruralExample: 'Being lucky to have fresh air and green fields.',
          voiceOverEn: 'I am lucky to be me.',
          type: 'video',
          miniGame: { 
            type: 'tap', 
            config: { 
              title: 'Lucky Star Collector',
              description: 'Tap the glowing stars to collect luck!',
              reward: '✨ You are lucky! +10 House Points'
            } 
          },
          quiz: [
            { text: 'The poem talks about feeling...', options: ['Lucky', 'Angry', 'Tired'], correct: 0, audioEn: 'The poem talks about feeling...', audioTe: 'పద్యం దేని గురించి చెబుతుంది?', audioHi: 'कविता किसके बारे में बात करती है?' },
            { text: 'Lucky means...', options: ['Fortunate', 'Sleepy', 'Weak'], correct: 0, audioEn: 'Lucky means...', audioTe: 'లక్కీ అంటే ఏమిటి?', audioHi: 'लकी का मतलब क्या है?' },
            { text: 'What shines in the sky?', options: ['Sun', 'Chair', 'Pencil'], correct: 0, audioEn: 'What shines in the sky?', audioTe: 'ఆకాశంలో ఏమి ప్రకాశిస్తుంది?', audioHi: 'आकाश में क्या चमकता है?' }
          ]
        },
        {
          id: 'c2_eng_4',
          class: 'Class 2',
          title: 'A Smile 😊',
          subject: 'English',
          description: 'A poem about the magic of a smile.',
          storyIntro: 'Sparky spreads happiness with a smile!',
          explanation: 'A smile is a funny thing, it wrinkles up your face! When you smile at someone, they smile back at you.',
          videoUrl: 'https://www.youtube.com/embed/9zyJ0lzTn6A',
          visualExamples: 'Smile, Happy Face, Kindness',
          ruralExample: 'Smiling at a neighbor in the village.',
          voiceOverEn: 'A smile makes everyone happy.',
          type: 'video',
          miniGame: { 
            type: 'tap', 
            config: { 
              title: 'Happiness Potion',
              description: 'Tap the happy faces to make a potion!',
              reward: '✨ Potion of Joy created! +10 House Points'
            } 
          },
          quiz: [
            { text: 'A smile makes people feel...', options: ['Happy', 'Sad', 'Sleepy'], correct: 0, audioEn: 'A smile makes people feel...', audioTe: 'నవ్వు మనుషులను ఎలా అనిపిస్తుంది?', audioHi: 'एक मुस्कान लोगों को कैसा महसूस कराती है?' },
            { text: 'We smile when we feel...', options: ['Happy', 'Angry', 'Hungry'], correct: 0, audioEn: 'We smile when we feel...', audioTe: 'మనం ఎప్పుడు నవ్వుతాము?', audioHi: 'हम कब मुस्कुराते हैं?' },
            { text: 'A smile spreads...', options: ['Kindness', 'Noise', 'Dust'], correct: 0, audioEn: 'A smile spreads...', audioTe: 'నవ్వు ఏమి పంచుతుంది?', audioHi: 'एक मुस्कान क्या फैलाती है?' }
          ]
        },
        {
          id: 'c2_eng_5',
          class: 'Class 2',
          title: 'The Wind and the Sun 🌬️☀️',
          subject: 'English',
          description: 'A story about a competition between the wind and the sun.',
          storyIntro: 'Sparky watches a weather battle!',
          explanation: 'The wind and the sun had a bet to see who could make a man take off his coat. The sun won by being warm!',
          videoUrl: 'https://www.youtube.com/embed/EbusoxCSjs4',
          visualExamples: 'Wind, Sun, Coat',
          ruralExample: 'Feeling the hot sun in the fields.',
          voiceOverEn: 'The sun is stronger than the wind.',
          type: 'video',
          miniGame: { 
            type: 'tap', 
            config: { 
              title: 'Weather Spell Battle',
              description: 'Choose the Sun spell to win!',
              options: ['Wind', 'Sun'],
              correct: 'Sun',
              reward: '✨ Sun Spell Wins! +10 House Points'
            } 
          },
          quiz: [
            { text: 'Who competed in the story?', options: ['Wind and Sun', 'Moon and Star', 'Cloud and Rain'], correct: 0, audioEn: 'Who competed?', audioTe: 'కథలో ఎవరు పోటీ పడ్డారు?', audioHi: 'कहानी में किसने प्रतियोगिता की?' },
            { text: 'What did they try to remove?', options: ['Coat', 'Hat', 'Shoes'], correct: 0, audioEn: 'What did they try to remove?', audioTe: 'వారు ఏమి తొలగించడానికి ప్రయత్నించారు?', audioHi: 'उन्होंने क्या निकालने की कोशिश की?' },
            { text: 'Who won finally?', options: ['Sun', 'Wind', 'Cloud'], correct: 0, audioEn: 'Who won finally?', audioTe: 'చివరికి ఎవరు గెలిచారు?', audioHi: 'अंत में कौन जीता?' }
          ]
        }
      ],
      'Mathematics': [
        {
          id: 'c2_math_1',
          class: 'Class 2',
          title: 'What is Long What is Round 📏⚽',
          subject: 'Mathematics',
          description: 'Learning about shapes and objects.',
          storyIntro: '✨ Sparky is sorting magical objects by shape!',
          explanation: 'Some things are long like a pencil, and some are round like a ball. Long things can slide, and round things can roll!',
          videoUrl: 'https://www.youtube.com/embed/MN_YGekyPMs',
          visualExamples: 'Bat (Long), Ball (Round)',
          ruralExample: 'A stick is long, a lemon is round.',
          voiceOverEn: 'Long things slide, round things roll.',
          type: 'video',
          miniGame: { 
            type: 'tap', 
            config: { 
              title: 'Shape Spell Sorting',
              description: 'Tap the round objects to roll them!',
              reward: '✨ Shapes sorted! +10 House Points'
            } 
          },
          quiz: [
            { text: 'Which of these is round?', options: ['Ball', 'Pencil', 'Bat'], correct: 0, audioEn: 'Which is of these is round?', audioTe: 'వీటిలో ఏది గుండ్రంగా ఉంటుంది?', audioHi: 'इनमें से कौन सा गोल है?' },
            { text: 'Which of these is long?', options: ['Stick', 'Orange', 'Marble'], correct: 0, audioEn: 'Which is of these is long?', audioTe: 'వీటిలో ఏది పొడవుగా ఉంటుంది?', audioHi: 'इनमें से कौन सा लंबा है?' },
            { text: 'A wheel is...', options: ['Round', 'Long', 'Square'], correct: 0, audioEn: 'A wheel is...', audioTe: 'చక్రం ఎలా ఉంటుంది?', audioHi: 'एक पहिया कैसा होता है?' }
          ]
        },
        {
          id: 'c2_math_2',
          class: 'Class 2',
          title: 'Counting in Groups 🔢',
          subject: 'Mathematics',
          description: 'Learning to count objects in groups.',
          storyIntro: 'Sparky counts magical gems in groups!',
          explanation: 'Counting in groups is faster! We can count in 2s, 5s, or 10s. It helps us find the total quickly.',
          videoUrl: 'https://www.youtube.com/embed/G0Di8DP9f8w',
          visualExamples: 'Pairs of shoes, Bunches of grapes',
          ruralExample: 'Counting bundles of sticks.',
          voiceOverEn: 'Counting in groups is easy.',
          type: 'video',
          miniGame: { 
            type: 'count', 
            config: { 
              title: 'Wizard Basket Counting',
              description: 'Count the pairs of magic socks!',
              count: 6,
              reward: '✨ Great counting! +10 House Points'
            } 
          },
          quiz: [
            { text: 'How many in a pair?', options: ['2', '5', '1'], correct: 0, audioEn: 'How many in a pair?', audioTe: 'ఒక జతలో ఎన్ని ఉంటాయి?', audioHi: 'एक जोड़ी में कितने होते हैं?' },
            { text: 'Counting in groups is...', options: ['Faster', 'Slower', 'Harder'], correct: 0, audioEn: 'Counting in groups is...', audioTe: 'గుంపులుగా లెక్కించడం ఎలా ఉంటుంది?', audioHi: 'समूहों में गिनना कैसा होता है?' },
            { text: '3 groups of 2 is...', options: ['6', '5', '4'], correct: 0, audioEn: '3 groups of 2 is...', audioTe: '2 చొప్పున 3 గుంపులు అంటే ఎంత?', audioHi: '2 के 3 समूह कितने होते हैं?' }
          ]
        },
        {
          id: 'c2_math_3',
          class: 'Class 2',
          title: 'Addition and Subtraction Basics ➕➖',
          subject: 'Mathematics',
          description: 'Learning simple addition and subtraction.',
          storyIntro: 'Sparky adds and subtracts ingredients for a potion!',
          explanation: 'Addition means putting things together (+). Subtraction means taking away (-).',
          videoUrl: 'https://www.youtube.com/embed/OpS553sie0E',
          visualExamples: '3 + 2 = 5, 5 - 2 = 3',
          ruralExample: 'Adding and taking away mangoes from a basket.',
          voiceOverEn: 'Addition adds, subtraction takes away.',
          type: 'video',
          miniGame: { 
            type: 'count', 
            config: { 
              title: 'Potion Ingredient Mix',
              description: 'Add 4 blue berries and 4 red berries!',
              count: 8,
              reward: '✨ Potion mixed! +10 House Points'
            } 
          },
          quiz: [
            { text: '4 + 4 = ?', options: ['8', '7', '9'], correct: 0, audioEn: '4 plus 4 equals?', audioTe: '4 ప్లస్ 4 ఎంత?', audioHi: '4 जमा 4 कितना होता है?' },
            { text: '10 - 5 = ?', options: ['5', '6', '4'], correct: 0, audioEn: '10 minus 5 equals?', audioTe: '10 మైనస్ 5 ఎంత?', audioHi: '10 घटा 5 कितना होता है?' },
            { text: 'If you have 6 and get 2 more, you have...', options: ['8', '4', '10'], correct: 0, audioEn: 'If you have 6 and get 2 more...', audioTe: 'మీ దగ్గర 6 ఉండి ఇంకో 2 వస్తే ఎంత?', audioHi: 'यदि आपके पास 6 हैं और 2 और मिल जाएं...' }
          ]
        },
        {
          id: 'c2_math_4',
          class: 'Class 2',
          title: 'Numbers up to 100 🔢',
          subject: 'Mathematics',
          description: 'Counting and understanding numbers up to 100.',
          storyIntro: 'Sparky counts all the stars in the magic sky!',
          explanation: 'Numbers help us count things. We can count from 1 to 100. Each number has a place value.',
          videoUrl: 'https://www.youtube.com/embed/WWS0JcaRWqY',
          visualExamples: '10, 20, 30... 100',
          ruralExample: 'Counting sheep in a farm.',
          voiceOverEn: 'Let\'s count to 100.',
          type: 'video',
          miniGame: { 
            type: 'count', 
            config: { 
              title: 'Star Counting',
              description: 'Count the magical stars!',
              count: 10,
              reward: '✨ 100 Stars found! +10 House Points'
            } 
          },
          quiz: [
            { text: 'What comes after 19?', options: ['20', '18', '21'], correct: 0, audioEn: 'What comes after 19?', audioTe: '19 తర్వాత ఏమి వస్తుంది?', audioHi: '19 के बाद क्या आता है?' },
            { text: 'Which is bigger?', options: ['45', '54', '40'], correct: 1, audioEn: 'Which is bigger?', audioTe: 'ఏది పెద్దది?', audioHi: 'कौन सा बड़ा है?' },
            { text: 'Number name for 50?', options: ['Fifty', 'Fifteen', 'Five'], correct: 0, audioEn: 'Number name for 50?', audioTe: '50 సంఖ్య పేరు ఏమిటి?', audioHi: '50 का संख्या नाम?' }
          ]
        },
        {
          id: 'c2_math_5',
          class: 'Class 2',
          title: 'Measurement (Long / Short) 📏',
          subject: 'Mathematics',
          description: 'Comparing lengths of objects.',
          storyIntro: 'Sparky measures magic wands!',
          explanation: 'We use a ruler or handspan to measure how long or short something is. We compare two things to see which is longer.',
          videoUrl: 'https://www.youtube.com/embed/e__6sAXAaCY',
          visualExamples: 'Long Pencil, Short Eraser',
          ruralExample: 'Comparing the length of two sticks.',
          voiceOverEn: 'Measure to find long and short.',
          type: 'video',
          miniGame: { 
            type: 'match', 
            config: { 
              title: 'Magic Ruler',
              description: 'Match the long objects with the long ruler!',
              pairs: [['Long Wand', '📏'], ['Short Wand', '📍']],
              reward: '✨ Measured perfectly! +10 House Points'
            } 
          },
          quiz: [
            { text: 'Which is longer?', options: ['Pencil', 'Eraser', 'Sharpener'], correct: 0, audioEn: 'Which is longer?', audioTe: 'వీటిలో ఏది పొడవుగా ఉంటుంది?', audioHi: 'इनमें से कौन सा लंबा है?' },
            { text: 'Which is shorter?', options: ['Ant', 'Cat', 'Dog'], correct: 0, audioEn: 'Which is shorter?', audioTe: 'వీటిలో ఏది చిన్నది?', audioHi: 'इनमें से कौन सा छोटा है?' },
            { text: 'What do we use to measure length?', options: ['Ruler', 'Spoon', 'Cup'], correct: 0, audioEn: 'What do we use to measure length?', audioTe: 'పొడవును కొలవడానికి ఏమి ఉపయోగిస్తాము?', audioHi: 'लंबाई मापने के लिए हम क्या उपयोग करते हैं?' }
          ]
        }
      ],
      'EVS': [
        {
          id: 'c2_evs_1',
          class: 'Class 2',
          title: 'My Family 👨👩👧',
          subject: 'EVS',
          description: 'Learning about family members and relationships.',
          storyIntro: '🏡 Sparky meets his loving family!',
          explanation: 'A family is a group of people who live together and care for each other. We have parents, siblings, and grandparents.',
          videoUrl: 'https://www.youtube.com/embed/EnM7X7CP3jA',
          visualExamples: '👩 Mother, 👨 Father, 👧 Sister',
          ruralExample: 'Joint families living in villages.',
          voiceOverEn: 'Family members care for each other.',
          type: 'video',
          miniGame: { 
            type: 'match', 
            config: { 
              title: 'Family Tree Match',
              description: 'Match the family members with their icons!',
              pairs: [['Mother', '👩'], ['Father', '👨'], ['Sister', '👧']],
              reward: '✨ Family tree complete! +10 House Points'
            } 
          },
          quiz: [
            { text: 'Who is father?', options: ['👨', '👩', '👧'], correct: 0, audioEn: 'Who is father?', audioTe: 'నాన్న ఎవరు?', audioHi: 'पिता कौन है?' },
            { text: 'Family lives in?', options: ['Home', 'Market', 'Park'], correct: 0, audioEn: 'Family lives in?', audioTe: 'కుటుంబం ఎక్కడ నివసిస్తుంది?', audioHi: 'परिवार कहाँ रहता है?' },
            { text: 'Mother\'s mother is...', options: ['Grandmother', 'Aunt', 'Sister'], correct: 0, audioEn: 'Mother\'s mother?', audioTe: 'అమ్మ వాళ్ళ అమ్మను ఏమంటారు?', audioHi: 'माँ की माँ?' }
          ]
        },
        {
          id: 'c2_evs_2',
          class: 'Class 2',
          title: 'Our Body 🦷👀',
          subject: 'EVS',
          description: 'Learning about internal and external organs.',
          storyIntro: 'Sparky explores the human body!',
          explanation: 'Our body has external parts we can see like eyes and hands, and internal parts like heart and lungs.',
          videoUrl: 'https://www.youtube.com/embed/DHGQ3elHDIE',
          visualExamples: '🫀 Heart, 🧠 Brain, 👀 Eyes',
          ruralExample: 'Using our muscles to lift water.',
          voiceOverEn: 'Our body is a machine.',
          type: 'video',
          miniGame: { 
            type: 'match', 
            config: { 
              title: 'Body Part Match',
              description: 'Match the organs with their names!',
              pairs: [['Heart', '🫀'], ['Brain', '🧠'], ['Eyes', '👀']],
              reward: '✨ You know your body! +10 House Points'
            } 
          },
          quiz: [
            { text: 'Which is internal?', options: ['Heart', 'Hand', 'Leg'], correct: 0, audioEn: 'Which is internal?', audioTe: 'లోపలి అవయవం ఏది?', audioHi: 'कौन सा आंतरिक है?' },
            { text: 'We see with our...', options: ['Eyes', 'Ears', 'Nose'], correct: 0, audioEn: 'We see with our...', audioTe: 'మనం దేనితో చూస్తాము?', audioHi: 'हम किससे देखते हैं?' },
            { text: 'The brain helps us...', options: ['Think', 'Walk', 'Eat'], correct: 0, audioEn: 'The brain helps us...', audioTe: 'మెదడు మనకు ఎలా సహాయపడుతుంది?', audioHi: 'मस्तिष्क हमें क्या करने में मदद करता है?' }
          ]
        },
        {
          id: 'c2_evs_3',
          class: 'Class 2',
          title: 'Food for Health 🍎🥛',
          subject: 'EVS',
          description: 'Learning about types of food and healthy eating.',
          storyIntro: 'Sparky learns about energy food!',
          explanation: 'We need energy-giving, body-building, and protective foods to stay healthy and strong.',
          videoUrl: 'https://www.youtube.com/embed/h4eueDYPTIg',
          visualExamples: '🍚 Rice, 🥚 Egg, 🍎 Fruit',
          ruralExample: 'Eating fresh ragi mudde.',
          voiceOverEn: 'Eat a balanced diet.',
          type: 'video',
          miniGame: { 
            type: 'match', 
            config: { 
              title: 'Healthy Food Sort',
              description: 'Match the food with its type!',
              pairs: [['Energy', '🍚'], ['Body Building', '🥚'], ['Protective', '🍎']],
              reward: '✨ Healthy choices! +10 House Points'
            } 
          },
          quiz: [
            { text: 'Which gives energy?', options: ['Rice', 'Apple', 'Water'], correct: 0, audioEn: 'Which gives energy?', audioTe: 'శక్తిని ఇచ్చే ఆహారం ఏది?', audioHi: 'कौन सा ऊर्जा देता है?' },
            { text: 'Fruits are...', options: ['Protective', 'Body Building', 'Energy'], correct: 0, audioEn: 'Fruits are...', audioTe: 'పండ్లు ఏ రకమైన ఆహారం?', audioHi: 'फल क्या हैं?' },
            { text: 'Milk makes bones...', options: ['Strong', 'Weak', 'Soft'], correct: 0, audioEn: 'Milk makes bones...', audioTe: 'పాలు ఎముకలను ఎలా చేస్తాయి?', audioHi: 'दूध हड्डियों को कैसा बनाता है?' }
          ]
        },
        {
          id: 'c2_evs_4',
          class: 'Class 2',
          title: 'Clothes We Wear 👕🧥',
          subject: 'EVS',
          description: 'Learning about seasonal clothing.',
          storyIntro: 'Sparky dresses up for the weather!',
          explanation: 'We wear cotton in summer, wool in winter, and raincoats in rain to protect ourselves.',
          videoUrl: 'https://www.youtube.com/embed/h4eueDYPTIg',
          visualExamples: '👕 Cotton, 🧥 Woolen, 🧥 Raincoat',
          ruralExample: 'Wearing a dhoti in the village.',
          voiceOverEn: 'Dress for the season.',
          type: 'video',
          miniGame: { 
            type: 'match', 
            config: { 
              title: 'Season Dress Up',
              description: 'Match the clothes with the season!',
              pairs: [['Summer', '👕'], ['Winter', '🧥'], ['Rainy', '🧥']],
              reward: '✨ Perfect outfit! +10 House Points'
            } 
          },
          quiz: [
            { text: 'When to wear wool?', options: ['Winter', 'Summer', 'Rainy'], correct: 0, audioEn: 'When to wear wool?', audioTe: 'ఉన్ని దుస్తులు ఎప్పుడు ధరించాలి?', audioHi: 'ऊनी कपड़े कब पहनने चाहिए?' },
            { text: 'Cotton keeps us...', options: ['Cool', 'Warm', 'Wet'], correct: 0, audioEn: 'Cotton keeps us...', audioTe: 'పత్తి దుస్తులు మనల్ని ఎలా ఉంచుతాయి?', audioHi: 'सूती कपड़े हमें कैसा रखते हैं?' },
            { text: 'Raincoat protects from...', options: ['Rain', 'Sun', 'Wind'], correct: 0, audioEn: 'Raincoat protects from...', audioTe: 'రెయిన్ కోట్ దేని నుండి రక్షిస్తుంది?', audioHi: 'रेनकोट किससे बचाता है?' }
          ]
        },
        {
          id: 'c2_evs_5',
          class: 'Class 2',
          title: 'Types of Houses 🛖🏢',
          subject: 'EVS',
          description: 'Learning about Kutcha and Pucca houses.',
          storyIntro: 'Sparky visits different homes!',
          explanation: 'Kutcha houses are made of mud and straw. Pucca houses are made of bricks and cement.',
          videoUrl: 'https://www.youtube.com/embed/h4eueDYPTIg',
          visualExamples: '🛖 Kutcha House, 🏢 Pucca House',
          ruralExample: 'The mud houses in the old village.',
          voiceOverEn: 'Houses protect us.',
          type: 'video',
          miniGame: { 
            type: 'match', 
            config: { 
              title: 'House Builder',
              description: 'Match the material with the house type!',
              pairs: [['Mud', 'Kutcha'], ['Brick', 'Pucca']],
              reward: '✨ Houses built! +10 House Points'
            } 
          },
          quiz: [
            { text: 'Which is stronger?', options: ['Pucca', 'Kutcha', 'Tent'], correct: 0, audioEn: 'Which is stronger?', audioTe: 'ఏది బలంగా ఉంటుంది?', audioHi: 'कौन सा मजबूत है?' },
            { text: 'Kutcha house is made of...', options: ['Mud', 'Cement', 'Iron'], correct: 0, audioEn: 'Kutcha house is made of...', audioTe: 'కచ్చా ఇల్లు దేనితో తయారవుతుంది?', audioHi: 'कच्चा घर किससे बना होता है?' },
            { text: 'Pucca house is made of...', options: ['Bricks', 'Straw', 'Leaves'], correct: 0, audioEn: 'Pucca house is made of...', audioTe: 'పక్కా ఇల్లు దేనితో తయారవుతుంది?', audioHi: 'पक्का घर किससे बना होता है?' }
          ]
        }
      ],
      'Hindi': [
        {
          id: 'c2_cbse_hin_1',
          class: 'Class 2',
          title: 'ऊँट चला (कविता) 🐪',
          subject: 'Hindi',
          description: 'A fun poem about a camel walking.',
          storyIntro: 'Sparky meets a tall camel in the desert!',
          explanation: 'This poem describes how a camel walks with its high hump and long legs. "ऊँट चला भाई ऊँट चला, हिलता डुलता ऊँट चला।',
          videoUrl: 'https://www.youtube.com/embed/DrayDye-2aU',
          ruralExample: 'Camels carrying loads in the village fair.',
          voiceOverEn: 'The camel is walking.',
          type: 'video',
          miniGame: { 
            type: 'match', 
            config: { 
              title: 'Camel Match',
              description: 'Match the words with pictures!',
              pairs: [['ऊँट', '🐪'], ['गर्दन', '🦒'], ['पीठ', '🐫']],
              reward: '✨ Shabaash! You know the camel! +10 House Points'
            } 
          },
          quiz: [
            { text: 'ऊँट कैसा जानवर है?', options: ['ऊँचा', 'छोटा', 'पतला'], correct: 0, audioEn: 'How is the camel?', audioTe: 'ఒంటె ఎలా ఉంటుంది?', audioHi: 'ऊँट कैसा है?' },
            { text: 'ऊँट कहाँ चलता है?', options: ['रेगिस्तान', 'पानी', 'आसमान'], correct: 0, audioEn: 'Where does the camel walk?', audioTe: 'ఒంటె ఎక్కడ నడుస్తుంది?', audioHi: 'ऊँट कहाँ चलता है?' },
            { text: 'ऊँट की क्या ऊँची होती है?', options: ['पीठ', 'पूँछ', 'कान'], correct: 0, audioEn: 'What is high on a camel?', audioTe: 'ఒంటెకు ఏది ఎత్తుగా ఉంటుంది?', audioHi: 'ऊँट की क्या ऊँची होती है?' }
          ]
        },
        {
          id: 'c2_cbse_hin_2',
          class: 'Class 2',
          title: 'भालू ने खेली फुटबॉल 🐻⚽',
          subject: 'Hindi',
          description: 'A story about a bear who mistook a lion cub for a football.',
          storyIntro: 'Sparky sees a bear playing with a lion!',
          explanation: 'A bear finds a sleeping lion cub and thinks it is a football. He kicks it, and the cub climbs a tree!',
          videoUrl: 'https://www.youtube.com/embed/kFUL9-8Fnig',
          ruralExample: 'Playing football in the village ground.',
          voiceOverEn: 'The bear plays football.',
          type: 'video',
          miniGame: { 
            type: 'tap', 
            config: { 
              title: 'Bear Football',
              description: 'Tap the bear to kick the ball!',
              target: '🐻',
              reward: '✨ Goal! +10 House Points'
            } 
          },
          quiz: [
            { text: 'भालू ने किसे फुटबॉल समझा?', options: ['शेर के बच्चे को', 'पत्थर को', 'गेंद को'], correct: 0, audioEn: 'What did the bear think was a football?', audioTe: 'ఎలుగుబంటి దేనిని ఫుట్‌బాల్ అనుకుంది?', audioHi: 'भालू ने किसे फुटबॉल समझा?' }
          ]
        },
        {
          id: 'c2_cbse_hin_3',
          class: 'Class 2',
          title: 'म्याऊँ, म्याऊँ! (कविता) 🐱',
          subject: 'Hindi',
          description: 'A poem about a girl and a mouse.',
          storyIntro: 'A little mouse is bothering a girl at night!',
          explanation: 'This poem describes how a girl gets scared of a mouse and then finds a way to scare it back by saying "Meow, Meow!".',
          videoUrl: 'https://www.youtube.com/embed/epAJUuTBC_A',
          visualExamples: 'Girl, Mouse, Night scene',
          ruralExample: 'Mice are often found in village granaries.',
          voiceOverEn: 'The girl scared the mouse.',
          type: 'video',
          miniGame: { 
            type: 'tap', 
            config: { 
              title: 'Meow Tap',
              description: 'Tap the cat to scare the mouse!',
              target: '🐱',
              reward: '✨ Meow! The mouse ran away! +10 House Points'
            } 
          },
          quiz: [
            { text: 'लड़की किससे डर गई थी?', options: ['चूहिया से', 'बिल्ली से', 'कुत्ते से'], correct: 0, audioEn: 'Who was the girl afraid of?', audioTe: 'అమ్మాయి దేనికి భయపడింది?', audioHi: 'लड़की किससे डर गई थी?' },
            { text: 'लड़की ने चूहिया को कैसे डराया?', options: ['म्याऊँ बोलकर', 'डंडा दिखाकर', 'ताली बजाकर'], correct: 0, audioEn: 'How did the girl scare the mouse?', audioTe: 'అమ్మాయి చుంచును ఎలా భయపెట్టింది?', audioHi: 'लड़की ने चूहिया को कैसे डराया?' },
            { text: 'चूहिया ने लड़की को कहाँ काटा था?', options: ['नाक पर', 'कान पर', 'हाथ पर'], correct: 0, audioEn: 'Where did the mouse bite the girl?', audioTe: 'చుంచు అమ్మాయిని ఎక్కడ కరిచింది?', audioHi: 'चूहिया ने लड़की को कहाँ काटा था?' }
          ]
        },
        {
          id: 'c2_cbse_hin_4',
          class: 'Class 2',
          title: 'अधिक बलवान कौन? ☀️💨',
          subject: 'Hindi',
          description: 'A story about the Sun and the Wind.',
          storyIntro: 'The Sun and the Wind are having an argument about who is stronger!',
          explanation: 'The Wind tries to blow a man\'s coat off with force, but the Sun makes the man feel hot, so he takes it off himself. Kindness and warmth are often stronger than force.',
          videoUrl: 'https://www.youtube.com/embed/EbusoxCSjs4',
          visualExamples: 'Sun, Wind, Man with a coat',
          ruralExample: 'Feeling the strong wind in open fields.',
          voiceOverEn: 'The Sun proved to be stronger.',
          type: 'video',
          miniGame: { 
            type: 'tap', 
            config: { 
              title: 'Sun Power',
              description: 'Tap the sun to make it shine brighter!',
              target: '☀️',
              reward: '✨ The sun is shining! +10 House Points'
            } 
          },
          quiz: [
            { text: 'हवा और सूरज में क्या छिड़ गई थी?', options: ['बहस', 'दोस्ती', 'लड़ाई'], correct: 0, audioEn: 'What happened between the wind and the sun?', audioTe: 'గాలికి और సూర్యుడికి మధ్య ఏమి జరిగింది?', audioHi: 'हवा और सूरज में क्या छिड़ गई थी?' },
            { text: 'अंत में कौन जीता?', options: ['सूरज', 'हवा', 'आदमी'], correct: 0, audioEn: 'Who won in the end?', audioTe: 'చివరికి ఎవరు గెలిచారు?', audioHi: 'अंत में कौन जीता?' },
            { text: 'आदमी ने क्या उतार दिया?', options: ['कोट', 'टोपी', 'जूते'], correct: 0, audioEn: 'What did the man take off?', audioTe: 'మనిషి ఏమి విప్పాడు?', audioHi: 'आदमी ने क्या उतार दिया?' }
          ]
        },
        {
          id: 'c2_cbse_hin_5',
          class: 'Class 2',
          title: 'दोस्त की मदद 🐢🦊',
          subject: 'Hindi',
          description: 'A story about a fox helping a tortoise.',
          storyIntro: 'A leopard catches a tortoise, but his friend the fox has a plan!',
          explanation: 'The fox cleverly tells the leopard to throw the tortoise in the water to soften its shell. The leopard does so, and the tortoise escapes.',
          videoUrl: 'https://www.youtube.com/embed/EbusoxCSjs4',
          visualExamples: 'Tortoise, Fox, Leopard, Pond',
          ruralExample: 'Seeing tortoises in village ponds.',
          voiceOverEn: 'The fox saved the tortoise.',
          type: 'video',
          miniGame: { 
            type: 'tap', 
            config: { 
              title: 'Pond Jump',
              description: 'Tap the tortoise to help it jump into the pond!',
              target: '🐢',
              reward: '✨ Splash! The tortoise is safe! +10 House Points'
            } 
          },
          quiz: [
            { text: 'कछुए का दोस्त कौन था?', options: ['लोमड़ी', 'तेंदुआ', 'शेर'], correct: 0, audioEn: 'Who was the tortoise\'s friend?', audioTe: 'తాబేలు స్నేహితుడు ఎవరు?', audioHi: 'कछुए का दोस्त कौन था?' },
            { text: 'कछुए को किसने पकड़ा?', options: ['तेंदुए ने', 'लोमड़ी ने', 'भालू ने'], correct: 0, audioEn: 'Who caught the tortoise?', audioTe: 'తాबेले को किसने पकड़ा?', audioHi: 'कछुए को किसने पकड़ा?' },
            { text: 'लोमड़ी ने कछुए को बचाने के लिए क्या उपाय बताया?', options: ['पानी में फेंकने का', 'पेड़ पर चढ़ने का', 'भाग जाने का'], correct: 0, audioEn: 'What plan did the fox suggest?', audioTe: 'తాబేలును రక్షించడానికి నక్క ఏ ఉపాయం చెప్పింది?', audioHi: 'लोमड़ी ने कछुए को बचाने के लिए क्या उपाय बताया?' }
          ]
        }
      ],
      'Telugu': [
        {
          id: 'c2_cbse_tel_1',
          class: 'Class 2',
          title: 'వాన (పాట) 🌧️',
          subject: 'Telugu',
          description: 'A beautiful song about rain.',
          storyIntro: 'The clouds are dark and it is starting to rain!',
          explanation: 'This lesson introduces a rhythmic song about rain, how it brings joy to children, and how nature turns green.',
          videoUrl: 'https://www.youtube.com/embed/2l2F2QKjQf4',
          visualExamples: 'Raindrops, Paper boats, Green trees',
          ruralExample: 'Children playing in rain puddles in the village.',
          voiceOverEn: 'Rain brings joy.',
          type: 'video',
          miniGame: { 
            type: 'tap', 
            config: { 
              title: 'Raindrop Tap',
              description: 'Tap the raindrops to make them fall!',
              target: '💧',
              reward: '✨ Pitter-patter! +10 House Points'
            } 
          },
          quiz: [
            { text: 'వాన కురిసినప్పుడు పిల్లలు ఏమి చేస్తారు?', options: ['ఆడుకుంటారు', 'నిద్రపోతారు', 'ఏడుస్తారు'], correct: 0, audioEn: 'What do children do when it rains?', audioTe: 'వాన కురిసినప్పుడు పిల్లలు ఏమి చేస్తారు?', audioHi: 'बारिश होने पर बच्चे क्या करते हैं?' },
            { text: 'వాన ఎక్కడి నుండి వస్తుంది?', options: ['ఆకాశం', 'నేల', 'సముద్రం'], correct: 0, audioEn: 'Where does rain come from?', audioTe: 'వాన ఎక్కడి నుండి వస్తుంది?', audioHi: 'बारिश कहाँ से आती है?' },
            { text: 'కాగితపు పడవలను ఎక్కడ వదులుతారు?', options: ['నీటిలో', 'గాలిలో', 'ఇసుకలో'], correct: 0, audioEn: 'Where are paper boats floated?', audioTe: 'కాగితపు పడవలను ఎక్కడ వదులుతారు?', audioHi: 'कागज की नावें कहाँ तैरती हैं?' }
          ]
        },
        {
          id: 'c2_cbse_tel_2',
          class: 'Class 2',
          title: 'చిలకలారా! చిలకలారా! 🦜',
          subject: 'Telugu',
          description: 'A song about colorful parrots.',
          storyIntro: 'Look at the beautiful parrots on the guava tree!',
          explanation: 'This lesson is a fun song about parrots, their green color, red beaks, and their love for fruits.',
          videoUrl: 'https://www.youtube.com/embed/2l2F2QKjQf4',
          visualExamples: 'Green parrots, Red beaks, Guava tree',
          ruralExample: 'Parrots visiting guava orchards in the village.',
          voiceOverEn: 'Parrots are beautiful birds.',
          type: 'video',
          miniGame: { 
            type: 'tap', 
            config: { 
              title: 'Parrot Tap',
              description: 'Tap the parrot to hear it chirp!',
              target: '🦜',
              reward: '✨ Mithu-Mithu! +10 House Points'
            } 
          },
          quiz: [
            { text: 'చిలక ఏ రంగులో ఉంటుంది?', options: ['ఆకుపచ్చ', 'ఎరుపు', 'నీలం'], correct: 0, audioEn: 'What color is the parrot?', audioTe: 'చిలక ఏ రంగులో ఉంటుంది?', audioHi: 'तोता किस रंग का होता है?' },
            { text: 'చిలక ముక్కు ఏ రంగులో ఉంటుంది?', options: ['ఎరుపు', 'నలుపు', 'పసుపు'], correct: 0, audioEn: 'What color is the parrot\'s beak?', audioTe: 'చిలక ముక్కు ఏ రంగులో ఉంటుంది?', audioHi: 'तोते की चोंच किस रंग की होती है?' },
            { text: 'చిలకలకు ఏ పండు అంటే ఇష్టం?', options: ['జామపండు', 'నిమ్మపండు', 'చింతపండు'], correct: 0, audioEn: 'Which fruit do parrots like?', audioTe: 'చిలకలకు ఏ పండు అంటే ఇష్టం?', audioHi: 'तोतों को कौन सा फल पसंद है?' }
          ]
        },
        {
          id: 'c2_cbse_tel_3',
          class: 'Class 2',
          title: 'అమ్మ (పాట) 👩‍👦',
          subject: 'Telugu',
          description: 'A song expressing love for mother.',
          storyIntro: 'Mother is our first teacher and best friend!',
          explanation: 'This lesson is a touching song about the importance of a mother, her love, care, and the lessons she teaches us.',
          videoUrl: 'https://www.youtube.com/embed/2l2F2QKjQf4',
          visualExamples: 'Mother hugging child, Mother feeding child',
          ruralExample: 'Mother telling stories under the village tree.',
          voiceOverEn: 'Mother\'s love is unconditional.',
          type: 'video',
          miniGame: { 
            type: 'tap', 
            config: { 
              title: 'Heart Tap',
              description: 'Tap the heart to show love for mother!',
              target: '❤️',
              reward: '✨ Love you, Amma! +10 House Points'
            } 
          },
          quiz: [
            { text: 'మన మొదటి గురువు ఎవరు?', options: ['అమ్మ', 'నాన్న', 'టీచర్'], correct: 0, audioEn: 'Who is our first teacher?', audioTe: 'మన మొదటి గురువు ఎవరు?', audioHi: 'हमारा पहला शिक्षक कौन है?' },
            { text: 'అమ్మ మనకు ఏమి నేర్పిస్తుంది?', options: ['మంచి మాటలు', 'అల్లరి', 'కోపం'], correct: 0, audioEn: 'What does mother teach us?', audioTe: 'అమ్మ మనకు ఏమి నేర్పిస్తుంది?', audioHi: 'माँ हमें क्या सिखाती है?' },
            { text: 'అమ్మ ప్రేమ ఎలాంటిది?', options: ['అపారమైనది', 'తక్కువైనది', 'చెడ్డది'], correct: 0, audioEn: 'How is mother\'s love?', audioTe: 'అమ్మ ప్రేమ ఎలాంటిది?', audioHi: 'माँ का प्यार कैसा होता है?' }
          ]
        },
        {
          id: 'c2_cbse_tel_4',
          class: 'Class 2',
          title: 'బాలభీముడు 💪',
          subject: 'Telugu',
          description: 'The story of young Bhima\'s strength.',
          storyIntro: 'Even as a baby, Bhima was very strong!',
          explanation: 'This story tells us about the childhood of Bhima from Mahabharata, highlighting his immense physical strength and his kind heart.',
          videoUrl: 'https://www.youtube.com/embed/2l2F2QKjQf4',
          visualExamples: 'Baby Bhima, Large rocks, Strong muscles',
          ruralExample: 'Hearing stories of strength from village elders.',
          voiceOverEn: 'Bhima was very strong.',
          type: 'video',
          miniGame: { 
            type: 'tap', 
            config: { 
              title: 'Strength Tap',
              description: 'Tap the rock to help Bhima lift it!',
              target: '🪨',
              reward: '✨ So strong! +10 House Points'
            } 
          },
          quiz: [
            { text: 'బాలభీముడు ఎవరి కుమారుడు?', options: ['కుంతీ దేవి', 'గాంధారి', 'సీతమ్మ'], correct: 0, audioEn: 'Whose son was young Bhima?', audioTe: 'బాలభీముడు ఎవరి కుమారుడు?', audioHi: 'बाल भीम किसके पुत्र थे?' },
            { text: 'భీముడు దేనికి ప్రసిద్ధి?', options: ['బలం', 'వేగం', 'తెలివి'], correct: 0, audioEn: 'What was Bhima famous for?', audioTe: 'భీముడు దేనికి ప్రసిద్ధి?', audioHi: 'भीम किसके लिए प्रसिद्ध थे?' },
            { text: 'బాలభీముడు దేనిని పగలగొట్టాడు?', options: ['పెద్ద రాయిని', 'చిన్న కర్రను', 'కుండను'], correct: 0, audioEn: 'What did young Bhima break?', audioTe: 'బాలభీముడు దేనిని పగలగొట్టాడు?', audioHi: 'बाल भीम ने क्या तोड़ा?' }
          ]
        },
        {
          id: 'c2_cbse_tel_5',
          class: 'Class 2',
          title: 'కొత్త బట్టలు 👗',
          subject: 'Telugu',
          description: 'A story about getting new clothes for a festival.',
          storyIntro: 'It is festival time and everyone is getting new clothes!',
          explanation: 'This lesson describes the excitement of children during festivals, visiting the tailor, and wearing new, colorful clothes.',
          videoUrl: 'https://www.youtube.com/embed/2l2F2QKjQf4',
          visualExamples: 'Tailor shop, Colorful dresses, Festival decorations',
          ruralExample: 'Wearing new clothes for Sankranti in the village.',
          voiceOverEn: 'New clothes for the festival.',
          type: 'video',
          miniGame: { 
            type: 'match', 
            config: { 
              title: 'Dress Match',
              description: 'Match the clothes with names!',
              pairs: [['చొక్కా', '👕'], ['గౌను', '👗'], ['టోపీ', '🧢']],
              reward: '✨ Looking good! +10 House Points'
            } 
          },
          quiz: [
            { text: 'కొత్త బట్టలు ఎప్పుడు కొంటారు?', options: ['పండుగలకు', 'ప్రతిరోజూ', 'నిద్రపోయేటప్పుడు'], correct: 0, audioEn: 'When do we buy new clothes?', audioTe: 'కొత్త బట్టలు ఎప్పుడు కొంటారు?', audioHi: 'हम नए कपड़े कब खरीदते हैं?' },
            { text: 'పండుగ రోజు అందరూ ఎలా ఉంటారు?', options: ['సంతోషంగా', 'విచారంగా', 'కోపంగా'], correct: 0, audioEn: 'How is everyone on festival day?', audioTe: 'పండుగ రోజు అందరూ ఎలా ఉంటారు?', audioHi: 'त्योहार के दिन सब कैसे होते हैं?' },
            { text: 'బట్టలు ఎక్కడ కుట్టిస్తారు?', options: ['దర్జీ దగ్గర', 'డాక్టర్ దగ్గర', 'టీచర్ దగ్గర'], correct: 0, audioEn: 'Where are clothes stitched?', audioTe: 'బట్టలు ఎక్కడ కుట్టిస్తారు?', audioHi: 'कपड़े कहाँ सिले जाते हैं?' }
          ]
        }
      ]
    },
    'Telangana State Board': {
      'English': [
        {
          id: 'c2_tel_eng_1',
          class: 'Class 2',
          title: 'Naming Words (Nouns) 🏷️',
          subject: 'English',
          description: 'Learning about names of people, places, and things.',
          storyIntro: 'Sparky is naming everything in the Telangana fields!',
          explanation: 'Everything around us has a name. Words that name people, places, animals, or things are called Naming Words or Nouns.',
          videoUrl: 'https://www.youtube.com/embed/8-6X9A9iS7o',
          visualExamples: '👨🌾 Farmer, 🏡 Village, 🐄 Cow, 🍎 Fruit',
          ruralExample: 'The word "Farmer" is a naming word for a person.',
          voiceOverEn: 'Nouns are naming words.',
          type: 'video',
          miniGame: { 
            type: 'match', 
            config: { 
              title: 'Noun Match',
              description: 'Match the words with pictures!',
              pairs: [['Farmer', '👨🌾'], ['Cow', '🐄'], ['Village', '🏡']],
              reward: '✨ Great naming! +10 House Points'
            } 
          },
          quiz: [
            { text: 'Which is a naming word for a place?', options: ['School', 'Run', 'Happy'], correct: 0, audioEn: 'Which is a place?', audioTe: 'స్థలం పేరు ఏది?', audioHi: 'जगह का नाम कौन सा है?' },
            { text: 'Which is a naming word for an animal?', options: ['Jump', 'Goat', 'Big'], correct: 1, audioEn: 'Which is an animal?', audioTe: 'జంతువు పేరు ఏది?', audioHi: 'जानवर का नाम कौन सा है?' },
            { text: 'Is "Apple" a naming word?', options: ['Yes', 'No'], correct: 0, audioEn: 'Is Apple a noun?', audioTe: 'ఆపిల్ నామవాచకమా?', audioHi: 'क्या सेब एक संज्ञा है?' }
          ]
        },
        {
          id: 'c2_tel_eng_2',
          class: 'Class 2',
          title: 'Action Words (Verbs) 🏃',
          subject: 'English',
          description: 'Learning about words that show action.',
          storyIntro: 'Sparky is very active today!',
          explanation: 'Words that tell us what someone or something is doing are called Action Words or Verbs.',
          videoUrl: 'https://www.youtube.com/embed/3G2dvo4L8N0',
          visualExamples: '🏃 Run, 🍎 Eat, 😴 Sleep, 📖 Read',
          ruralExample: 'Farmers "plow" the fields. Plow is an action word.',
          voiceOverEn: 'Verbs are action words.',
          type: 'video',
          miniGame: { 
            type: 'tap', 
            config: { 
              title: 'Action Tap',
              description: 'Tap the action words!',
              target: '🏃',
              reward: '✨ You are active! +10 House Points'
            } 
          },
          quiz: [
            { text: 'Which word shows action?', options: ['Eat', 'Table', 'Blue'], correct: 0, audioEn: 'Which is action?', audioTe: 'పనిని తెలిపే పదం ఏది?', audioHi: 'कौन सा शब्द क्रिया दिखाता है?' },
            { text: 'What is the bird doing?', options: ['Flying', 'Stone', 'Green'], correct: 0, audioEn: 'What is the bird doing?', audioTe: 'పక్షి ఏమి చేస్తోంది?', audioHi: 'पक्षी क्या कर रहा है?' },
            { text: 'Which is NOT an action word?', options: ['Run', 'Jump', 'Book'], correct: 2, audioEn: 'Which is NOT action?', audioTe: 'పనిని తెలపని పదం ఏది?', audioHi: 'कौन सा क्रिया शब्द नहीं है?' }
          ]
        },
        {
          id: 'c2_tel_eng_3',
          class: 'Class 2',
          title: 'Describing Words (Adjectives) 🎨',
          subject: 'English',
          description: 'Learning about words that describe nouns.',
          storyIntro: 'Sparky describes the beautiful village!',
          explanation: 'Words that tell us more about a naming word (noun) are called Describing Words or Adjectives.',
          videoUrl: 'https://www.youtube.com/embed/zPSzKp6yY8Q',
          visualExamples: '🐘 Big Elephant, 🔴 Red Ball, 🌳 Tall Tree',
          ruralExample: 'The "green" field. Green describes the field.',
          voiceOverEn: 'Adjectives describe things.',
          type: 'video',
          miniGame: { 
            type: 'match', 
            config: { 
              title: 'Describe Match',
              description: 'Match the describing word with the picture!',
              pairs: [['Big', '🐘'], ['Small', '🐭'], ['Yellow', '🍋']],
              reward: '✨ Perfect description! +10 House Points'
            } 
          },
          quiz: [
            { text: 'Which word describes the sun?', options: ['Hot', 'Cold', 'Blue'], correct: 0, audioEn: 'Describe the sun.', audioTe: 'సూర్యుడిని వివరించే పదం ఏది?', audioHi: 'सूरज का वर्णन करें।' },
            { text: 'In "Sweet Mango", which is the describing word?', options: ['Mango', 'Sweet'], correct: 1, audioEn: 'Which describes mango?', audioTe: 'మామిడి పండును వివరించే పదం ఏది?', audioHi: 'आम का वर्णन कौन सा शब्द करता है?' },
            { text: 'Which is a color word?', options: ['Blue', 'Run', 'Table'], correct: 0, audioEn: 'Which is a color?', audioTe: 'రంగును తెలిపే పదం ఏది?', audioHi: 'रंग वाला शब्द कौन सा है?' }
          ]
        },
        {
          id: 'c2_tel_eng_4',
          class: 'Class 2',
          title: 'One and Many (Plurals) 🍎🍎🍎',
          subject: 'English',
          description: 'Learning about singular and plural nouns.',
          storyIntro: 'Sparky counts many things in the village!',
          explanation: 'When we talk about one thing, it is singular. When we talk about more than one, it is plural. We usually add "s" or "es".',
          videoUrl: 'https://www.youtube.com/embed/OpS553sie0E',
          visualExamples: '🍎 Apple -> 🍎🍎 Apples, 🐱 Cat -> 🐱🐱 Cats',
          ruralExample: 'One cow, many cows.',
          voiceOverEn: 'One and many.',
          type: 'video',
          miniGame: { 
            type: 'count', 
            config: { 
              title: 'Plural Count',
              description: 'Count the plural objects!',
              reward: '✨ You are a plural pro! +10 House Points'
            } 
          },
          quiz: [
            { text: 'Plural of Cat?', options: ['Cats', 'Cates', 'Caties'], correct: 0, audioEn: 'Plural of Cat?', audioTe: 'పిల్లికి బహువచనం ఏమిటి?', audioHi: 'बिल्ली का बहुवचन क्या है?' },
            { text: 'One pen, two...', options: ['Pens', 'Penes', 'Penies'], correct: 0, audioEn: 'One pen, two...', audioTe: 'ఒక పెన్ను, రెండు...', audioHi: 'एक पेन, दो...' },
            { text: 'Many cows are in the...', options: ['Field', 'Sky', 'Water'], correct: 0, audioEn: 'Cows in the?', audioTe: 'ఆవులు ఎక్కడ ఉన్నాయి?', audioHi: 'गायें कहाँ हैं?' }
          ]
        }
      ],
      'Hindi': [
        {
          id: 'c2_tel_hin_1',
          class: 'Class 2',
          title: 'वर्णमाला की दुनिया (World of Alphabets) 🅰️',
          subject: 'Hindi',
          description: 'Learning Hindi vowels and consonants with fun examples.',
          storyIntro: 'Sparky is discovering the magic of Hindi letters!',
          explanation: 'Hindi has Swar (Vowels) like अ, आ and Vyanjan (Consonants) like क, ख. Let\'s learn them together!',
          videoUrl: 'https://www.youtube.com/embed/6U1V9G5lL2Q',
          visualExamples: 'अ से अनार, क से कमल',
          ruralExample: 'Seeing "अनार" (Pomegranate) in the village market.',
          voiceOverEn: 'Let\'s learn Hindi alphabets.',
          type: 'video',
          miniGame: { 
            type: 'match', 
            config: { 
              title: 'Alphabet Match',
              description: 'Match the letter with the picture!',
              pairs: [['अ', '🍎'], ['क', '🪷'], ['म', '🐟']],
              reward: '✨ Shabaash! You know your letters! +10 House Points'
            } 
          },
          quiz: [
            { text: 'अ से क्या होता है?', options: ['अनार', 'कमल', 'घर'], correct: 0, audioEn: 'What starts with A?', audioTe: 'అ తో మొదలయ్యేది ఏది?', audioHi: 'अ से क्या होता है?' },
            { text: 'क से क्या होता है?', options: ['कमल', 'आम', 'इमली'], correct: 0, audioEn: 'What starts with Ka?', audioTe: 'క తో మొదలయ్యేది ఏది?', audioHi: 'क से क्या होता है?' },
            { text: 'Hindi vowels are called...', options: ['Swar', 'Vyanjan', 'Matra'], correct: 0, audioEn: 'Hindi vowels are called?', audioTe: 'హిందీ అచ్చులను ఏమంటారు?', audioHi: 'हिन्दी स्वरों को क्या कहते हैं?' }
          ]
        },
        {
          id: 'c2_tel_hin_2',
          class: 'Class 2',
          title: 'मेरा प्यारा घर (My Lovely Home) 🏠',
          subject: 'Hindi',
          description: 'Learning names of family members and household items in Hindi.',
          storyIntro: 'Sparky visits a happy home in Telangana!',
          explanation: 'We live with our family. In Hindi, we call Father "पिताजी" and Mother "माताजी".',
          videoUrl: 'https://www.youtube.com/embed/6U1V9G5lL2Q',
          visualExamples: 'माताजी, पिताजी, घर',
          ruralExample: 'Helping grandparents in the village home.',
          voiceOverEn: 'This is my family.',
          type: 'video',
          miniGame: { 
            type: 'match', 
            config: { 
              title: 'Family Match',
              description: 'Match the Hindi names with pictures!',
              pairs: [['माताजी', '👩'], ['पिताजी', '👨'], ['घर', '🏠']],
              reward: '✨ Bahut achhe! +10 House Points'
            } 
          },
          quiz: [
            { text: 'घर को अंग्रेजी में क्या कहते हैं?', options: ['House', 'School', 'Park'], correct: 0, audioEn: 'What is Ghar in English?', audioTe: 'ఘర్ ని ఇంగ్లీష్ లో ఏమంటారు?', audioHi: 'घर को अंग्रेजी में क्या कहते हैं?' },
            { text: 'माताजी कौन हैं?', options: ['Mother', 'Father', 'Brother'], correct: 0, audioEn: 'Who is Mataji?', audioTe: 'మాతాజీ అంటే ఎవరు?', audioHi: 'माताजी कौन हैं?' },
            { text: 'हम कहाँ रहते हैं?', options: ['घर में', 'जंगल में', 'आसमान में'], correct: 0, audioEn: 'Where do we live?', audioTe: 'మనం ఎక్కడ నివసిస్తాము?', audioHi: 'हम कहाँ रहते हैं?' }
          ]
        },
        {
          id: 'c2_tel_hin_3',
          class: 'Class 2',
          title: 'रंग-बिरंगे फल (Colorful Fruits) 🍎🍌',
          subject: 'Hindi',
          description: 'Learning names of fruits and colors in Hindi.',
          storyIntro: 'Sparky finds a basket of colorful fruits!',
          explanation: 'Fruits are healthy! Let\'s learn their names: सेब (Apple), आम (Mango), केला (Banana).',
          videoUrl: 'https://www.youtube.com/embed/6U1V9G5lL2Q',
          visualExamples: 'लाल सेब, पीला आम',
          ruralExample: 'Picking fresh mangoes from the orchard.',
          voiceOverEn: 'Fruits are colorful and tasty.',
          type: 'video',
          miniGame: { 
            type: 'match', 
            config: { 
              title: 'Fruit Color Match',
              description: 'Match the fruit with its color!',
              pairs: [['सेब', 'लाल'], ['आम', 'पीला'], ['अंगूर', 'हरा']],
              reward: '✨ Swadisht! +10 House Points'
            } 
          },
          quiz: [
            { text: 'सेब का रंग क्या है?', options: ['लाल', 'नीला', 'काला'], correct: 0, audioEn: 'What is the color of apple?', audioTe: 'ఆపిల్ రంగు ఏమిటి?', audioHi: 'सेब का रंग क्या है?' },
            { text: 'फलों का राजा कौन है?', options: ['आम', 'केला', 'अंगूर'], correct: 0, audioEn: 'Who is the king of fruits?', audioTe: 'పండ్లలో రాజు ఎవరు?', audioHi: 'फलों का राजा कौन है?' },
            { text: 'केला किस रंग का होता है?', options: ['पीला', 'लाल', 'हरा'], correct: 0, audioEn: 'What color is a banana?', audioTe: 'అరటిపండు ఏ రంగులో ఉంటుంది?', audioHi: 'केला किस रंग का होता है?' }
          ]
        },
        {
          id: 'c2_tel_hin_4',
          class: 'Class 2',
          title: 'गिनती का खेल (Counting Game) 🔢',
          subject: 'Hindi',
          description: 'Learning Hindi numbers from 1 to 20.',
          storyIntro: 'Sparky counts magical stones!',
          explanation: 'Let\'s count in Hindi: एक, दो, तीन... up to बीस (20).',
          videoUrl: 'https://www.youtube.com/embed/6U1V9G5lL2Q',
          visualExamples: '१, २, ३, ४, ५',
          ruralExample: 'Counting the number of trees in the backyard.',
          voiceOverEn: 'Let\'s count in Hindi.',
          type: 'video',
          miniGame: { 
            type: 'count', 
            config: { 
              title: 'Hindi Count',
              description: 'Count the objects in Hindi!',
              target: 10,
              reward: '✨ Wah! You can count! +10 House Points'
            } 
          },
          quiz: [
            { text: '५ को हिंदी में क्या कहते हैं?', options: ['पाँच', 'चार', 'छह'], correct: 0, audioEn: 'What is 5 in Hindi?', audioTe: '5 ని హిందీలో ఏమంటారు?', audioHi: '५ को हिंदी में क्या कहते हैं?' },
            { text: '१० के बाद क्या आता है?', options: ['ग्यारह', 'नौ', 'आठ'], correct: 0, audioEn: 'What comes after 10?', audioTe: '10 తర్వాత ఏమి వస్తుంది?', audioHi: '१० के बाद क्या आता है?' },
            { text: 'दो और दो कितने होते हैं?', options: ['चार', 'तीन', 'पाँच'], correct: 0, audioEn: 'What is 2 plus 2?', audioTe: '2 ప్లస్ 2 ఎంత?', audioHi: 'दो और दो कितने होते हैं?' }
          ]
        },
        {
          id: 'c2_tel_hin_5',
          class: 'Class 2',
          title: 'प्यारे जानवर (Lovely Animals) 🐕🐈',
          subject: 'Hindi',
          description: 'Learning names of animals in Hindi.',
          storyIntro: 'Sparky meets animals in the village!',
          explanation: 'Animals are our friends. Let\'s learn their names: कुत्ता (Dog), बिल्ली (Cat), गाय (Cow).',
          videoUrl: 'https://www.youtube.com/embed/6U1V9G5lL2Q',
          visualExamples: 'सफेद गाय, काला कुत्ता',
          ruralExample: 'Watching cows graze in the fields.',
          voiceOverEn: 'Animals are lovely.',
          type: 'video',
          miniGame: { 
            type: 'match', 
            config: { 
              title: 'Animal Match',
              description: 'Match the Hindi name with the animal!',
              pairs: [['गाय', '🐄'], ['कुत्ता', '🐶'], ['बिल्ली', '🐱']],
              reward: '✨ Shabaash! +10 House Points'
            } 
          },
          quiz: [
            { text: 'दूध कौन देती है?', options: ['गाय', 'कुत्ता', 'बिल्ली'], correct: 0, audioEn: 'Who gives milk?', audioTe: 'పాలు ఇచ్చేది ఎవరు?', audioHi: 'दूध कौन देती है?' },
            { text: 'जंगल का राजा कौन है?', options: ['शेर', 'हाथी', 'भालू'], correct: 0, audioEn: 'Who is the king of the jungle?', audioTe: 'అడవికి రాజు ఎవరు?', audioHi: 'जंगल का राजा कौन है?' },
            { text: 'कुत्ता कैसे बोलता है?', options: ['भौ-भौ', 'म्याऊँ', 'चूँ-चूँ'], correct: 0, audioEn: 'How does a dog bark?', audioTe: 'కుక్క ఎలా అరుస్తుంది?', audioHi: 'कुत्ता कैसे बोलता है?' }
          ]
        }
      ],
      'Telugu': [
        {
          id: 'c2_tel_tel_1',
          class: 'Class 2',
          title: 'Unit 1 పద్యాలు',
          subject: 'Telugu',
          description: 'Learning Telugu poems with fun visuals.',
          storyIntro: 'Sparky is learning beautiful Telugu poems!',
          explanation: 'Telugu has many beautiful poems. Let\'s learn them together!',
          videoUrl: 'https://youtu.be/giVecL2ANv8?si=Bn9YVGg-Q1A2M9TY',
          visualExamples: 'అ - అమ్మ, ఆ - ఆవు',
          ruralExample: 'Calling "అమ్మ" (Mother) in the village home.',
          voiceOverEn: 'Let\'s learn Telugu poems.',
          type: 'video',
          miniGame: { 
            type: 'match', 
            config: { 
              title: 'Alphabet Match',
              description: 'Match the letter with the picture!',
              pairs: [['అ', '👩'], ['ఆ', '🐄'], ['క', '🪷']],
              reward: '✨ Shabaash! You know your letters! +10 House Points'
            } 
          },
          quiz: [
            { text: 'అ తో మొదలయ్యే పదం ఏది?', options: ['అమ్మ', 'ఆవు', 'ఇల్లు'], correct: 0, audioEn: 'What starts with A?', audioTe: 'అ తో మొదలయ్యే పదం ఏది?', audioHi: 'अ से क्या शुरू होता है?' },
            { text: 'క తో మొదలయ్యే పదం ఏది?', options: ['కమలం', 'ఆకు', 'ఈగ'], correct: 0, audioEn: 'What starts with Ka?', audioTe: 'క తో మొదలయ్యే పదం ఏది?', audioHi: 'क से क्या शुरू होता है?' },
            { text: 'తెలుగు అచ్చులను ఏమంటారు?', options: ['అచ్చులు', 'హల్లులు', 'గుణింతాలు'], correct: 0, audioEn: 'Telugu vowels are called?', audioTe: 'తెలుగు అచ్చులను ఏమంటారు?', audioHi: 'तेलुगु स्वरों को क्या कहते हैं?' }
          ]
        },
        {
          id: 'c2_tel_tel_2',
          class: 'Class 2',
          title: 'Unit 2 చిన్న కథలు',
          subject: 'Telugu',
          description: 'Learning basic stories in Telugu.',
          storyIntro: 'Sparky is listening to new stories!',
          explanation: 'Stories are fun to listen to. Let\'s hear some Telugu stories.',
          videoUrl: 'https://youtu.be/VQO-ebUocfY?si=jDQyRAn5fm_zVhV7',
          visualExamples: 'కాకర, కిటికి',
          ruralExample: 'Reading signs on village shop boards.',
          voiceOverEn: 'Let\'s listen to Telugu stories.',
          type: 'video',
          miniGame: { 
            type: 'match', 
            config: { 
              title: 'Sign Match',
              description: 'Match the sign with the word!',
              pairs: [['కా', 'కాకర'], ['కి', 'కిటికి'], ['కు', 'కుక్క']],
              reward: '✨ Adbhutham! +10 House Points'
            } 
          },
          quiz: [
            { text: '"కాకర" లో ఏ గుర్తు ఉంది?', options: ['దీర్ఘం (ా)', 'గుడి (ి)', 'కొమ్ము (ు)'], correct: 0, audioEn: 'Which sign is in Kakara?', audioTe: '"కాకర" లో ఏ గుర్తు ఉంది?', audioHi: '"काकरा" में कौन सा चिन्ह है?' },
            { text: '"కిటికి" లో ఏ గుర్తు ఉంది?', options: ['గుడి (ి)', 'దీర్ఘం (ా)', 'కొమ్ము (ు)'], correct: 0, audioEn: 'Which sign is in Kitiki?', audioTe: '"కిటికి" లో ఏ గుర్తు ఉంది?', audioHi: '"किटिकि" में कौन सा चिन्ह है?' },
            { text: 'క కి కొమ్ము ఇస్తే ఏమవుతుంది?', options: ['కు', 'కా', 'కి'], correct: 0, audioEn: 'Ka plus U sign is?', audioTe: 'క కి కొమ్ము ఇస్తే ఏమవుతుంది?', audioHi: 'क और उ का चिन्ह क्या होता है?' }
          ]
        },
        {
          id: 'c2_tel_tel_3',
          class: 'Class 2',
          title: 'మన చుట్టూ ఉన్న పండ్లు (Fruits Around Us) 🍎🥭',
          subject: 'Telugu',
          description: 'Learning names of fruits in Telugu.',
          storyIntro: 'Sparky finds sweet fruits in the garden!',
          explanation: 'Fruits are good for health. Let\'s learn their names: మామిడి (Mango), అరటి (Banana), జామ (Guava).',
          videoUrl: 'https://www.youtube.com/embed/2l2F2QKjQf4',
          visualExamples: 'మామిడి పండు, అరటి పండు',
          ruralExample: 'Eating fresh guavas from the tree.',
          voiceOverEn: 'Fruits are tasty.',
          type: 'video',
          miniGame: { 
            type: 'match', 
            config: { 
              title: 'Fruit Match',
              description: 'Match the Telugu name with the fruit!',
              pairs: [['మామిడి', '🥭'], ['అరటి', '🍌'], ['జామ', '🍐']],
              reward: '✨ Chala bagundi! +10 House Points'
            } 
          },
          quiz: [
            { text: 'పండ్లలో రాజు ఎవరు?', options: ['మామిడి', 'అరటి', 'ఆపిల్'], correct: 0, audioEn: 'Who is the king of fruits?', audioTe: 'పండ్లలో రాజు ఎవరు?', audioHi: 'फलों का राजा कौन है?' },
            { text: 'అరటి పండు ఏ రంగులో ఉంటుంది?', options: ['పసుపు', 'ఎరుపు', 'నీలం'], correct: 0, audioEn: 'What color is a banana?', audioTe: 'అరటి పండు ఏ రంగులో ఉంటుంది?', audioHi: 'केला किस रंग का होता है?' },
            { text: 'కోతికి ఏ పండు అంటే ఇష్టం?', options: ['అరటి', 'మామిడి', 'ద్రాక్ష'], correct: 0, audioEn: 'Which fruit does monkey like?', audioTe: 'కోతికి ఏ పండు అంటే ఇష్టం?', audioHi: 'बंदर को कौन सा फल पसंद है?' }
          ]
        },
        {
          id: 'c2_tel_tel_4',
          class: 'Class 2',
          title: 'జంతువుల ప్రపంచం (World of Animals) 🐘🐅',
          subject: 'Telugu',
          description: 'Learning names of animals and their sounds in Telugu.',
          storyIntro: 'Sparky meets animals in the Telangana forest!',
          explanation: 'Let\'s learn animal names: ఏనుగు (Elephant), పులి (Tiger), ఆవు (Cow).',
          videoUrl: 'https://www.youtube.com/embed/2l2F2QKjQf4',
          visualExamples: 'పెద్ద ఏనుగు, క్రూరమైన పులి',
          ruralExample: 'Seeing cows and buffaloes in the village.',
          voiceOverEn: 'Animals are interesting.',
          type: 'video',
          miniGame: { 
            type: 'match', 
            config: { 
              title: 'Animal Match',
              description: 'Match the Telugu name with the animal!',
              pairs: [['ఏనుగు', '🐘'], ['పులి', '🐅'], ['ఆవు', '🐄']],
              reward: '✨ Sabhash! +10 House Points'
            } 
          },
          quiz: [
            { text: 'మన జాతీయ జంతువు ఏది?', options: ['పులి', 'సింహం', 'ఏనుగు'], correct: 0, audioEn: 'What is our national animal?', audioTe: 'మన జాతీయ జంతువు ఏది?', audioHi: 'हमारा राष्ट्रीय जानवर कौन सा है?' },
            { text: 'పెద్ద తుండం ఉన్న జంతువు ఏది?', options: ['ఏనుగు', 'జిరాఫీ', 'ఒంటె'], correct: 0, audioEn: 'Which animal has a big trunk?', audioTe: 'పెద్ద తుండం ఉన్న జంతువు ఏది?', audioHi: 'किस जानवर की बड़ी सूंड होती है?' },
            { text: 'ఆవు మనకు ఏమి ఇస్తుంది?', options: ['పాలు', 'గుడ్లు', 'తేనె'], correct: 0, audioEn: 'What does cow give us?', audioTe: 'ఆవు మనకు ఏమి ఇస్తుంది?', audioHi: 'गाय हमें क्या देती है?' }
          ]
        },
        {
          id: 'c2_tel_tel_5',
          class: 'Class 2',
          title: 'చిన్న చిన్న పద్యాలు (Small Poems) 📜',
          subject: 'Telugu',
          description: 'Learning simple moral poems in Telugu.',
          storyIntro: 'Sparky recites beautiful poems!',
          explanation: 'Telugu has many moral poems called Vemana Padyalu. They teach us good values.',
          videoUrl: 'https://www.youtube.com/embed/2l2F2QKjQf4',
          visualExamples: 'వేమన పద్యం, మంచి మాటలు',
          ruralExample: 'Listening to poems from grandparents.',
          voiceOverEn: 'Poems teach us good things.',
          type: 'video',
          miniGame: { 
            type: 'tap', 
            config: { 
              title: 'Poem Tap',
              description: 'Tap the scroll to hear a poem!',
              target: '📜',
              reward: '✨ Great listening! +10 House Points'
            } 
          },
          quiz: [
            { text: 'పద్యాలు మనకు ఏమి నేర్పుతాయి?', options: ['మంచి బుద్ధి', 'ఆటలు', 'నిద్ర'], correct: 0, audioEn: 'What do poems teach us?', audioTe: 'పద్యాలు మనకు ఏమి నేర్పుతాయి?', audioHi: 'कविताएँ हमें क्या सिखाती हैं?' },
            { text: 'వేమన పద్యాలు ఏ భాషలో ఉన్నాయి?', options: ['తెలుగు', 'హిందీ', 'ఇంగ్లీష్'], correct: 0, audioEn: 'In which language are Vemana poems?', audioTe: 'వేమన పద్యాలు ఏ భాషలో ఉన్నాయి?', audioHi: 'वेमना कविताएँ किस भाषा में हैं?' },
            { text: 'మంచి బాలుడు ఎలా ఉంటాడు?', options: ['వినయంగా', 'కోపంగా', 'అల్లరిగా'], correct: 0, audioEn: 'How is a good boy?', audioTe: 'మంచి బాలుడు ఎలా ఉంటాడు?', audioHi: 'एक अच्छा लड़का कैसा होता है?' }
          ]
        }
      ],
      'Mathematics': [
        {
          id: 'c2_tel_math_1',
          class: 'Class 2',
          title: 'What is Long, What is Round? 📏⚽',
          subject: 'Mathematics',
          description: 'Learning about shapes and objects.',
          storyIntro: 'Sparky is sorting objects by shape in the village!',
          explanation: 'Some things are long like a stick, and some are round like a lemon. Long things can slide, and round things can roll!',
          videoUrl: 'https://www.youtube.com/embed/MN_YGekyPMs',
          visualExamples: 'Stick (Long), Lemon (Round)',
          ruralExample: 'A stick is long, a lemon is round.',
          voiceOverEn: 'Long things slide, round things roll.',
          type: 'video',
          miniGame: { 
            type: 'tap', 
            config: { 
              title: 'Shape Sorting',
              description: 'Tap the round objects!',
              reward: '✨ Shapes sorted! +10 House Points'
            } 
          },
          quiz: [
            { text: 'Which is round?', options: ['Ball', 'Pencil', 'Bat'], correct: 0, audioEn: 'Which is round?', audioTe: 'ఏది గుండ్రంగా ఉంటుంది?', audioHi: 'कौन सा गोल है?' },
            { text: 'Which is long?', options: ['Stick', 'Orange', 'Marble'], correct: 0, audioEn: 'Which is long?', audioTe: 'ఏది పొడవుగా ఉంటుంది?', audioHi: 'कौन सा लंबा है?' },
            { text: 'A wheel is...', options: ['Round', 'Long', 'Square'], correct: 0, audioEn: 'A wheel is...', audioTe: 'చక్రం ఎలా ఉంటుంది?', audioHi: 'एक पहिया कैसा होता है?' }
          ]
        },
        {
          id: 'c2_tel_math_2',
          class: 'Class 2',
          title: 'Counting in Groups 🔢',
          subject: 'Mathematics',
          description: 'Learning to count objects in groups.',
          storyIntro: 'Sparky counts bundles of sticks!',
          explanation: 'Counting in groups is faster! We can count in 2s, 5s, or 10s.',
          videoUrl: 'https://www.youtube.com/embed/G0Di8DP9f8w',
          visualExamples: 'Pairs of shoes, Bunches of grapes',
          ruralExample: 'Counting bundles of sticks.',
          voiceOverEn: 'Counting in groups is easy.',
          type: 'video',
          miniGame: { 
            type: 'count', 
            config: { 
              title: 'Group Counting',
              description: 'Count the pairs!',
              count: 5,
              reward: '✨ Great counting! +10 House Points'
            } 
          },
          quiz: [
            { text: 'How many in a pair?', options: ['2', '5', '1'], correct: 0, audioEn: 'How many in a pair?', audioTe: 'ఒక జతలో ఎన్ని ఉంటాయి?', audioHi: 'एक जोड़ी में कितने होते हैं?' },
            { text: 'Counting in groups is...', options: ['Faster', 'Slower', 'Harder'], correct: 0, audioEn: 'Counting in groups is...', audioTe: 'గుంపులుగా లెక్కించడం ఎలా ఉంటుంది?', audioHi: 'समूहों में गिनना कैसा होता है?' },
            { text: '2 groups of 5 is...', options: ['10', '5', '7'], correct: 0, audioEn: '2 groups of 5?', audioTe: '5 చొప్పున 2 గుంపులు ఎంత?', audioHi: '5 के 2 समूह कितने होते हैं?' }
          ]
        },
        {
          id: 'c2_tel_math_3',
          class: 'Class 2',
          title: 'Addition Basics ➕',
          subject: 'Mathematics',
          description: 'Learning simple addition.',
          storyIntro: 'Sparky adds mangoes to his basket!',
          explanation: 'Addition means putting things together. We use the plus (+) sign.',
          videoUrl: 'https://www.youtube.com/embed/OpS553sie0E',
          visualExamples: '2 + 3 = 5',
          ruralExample: 'Adding 2 cows and 3 cows.',
          voiceOverEn: 'Let us add.',
          type: 'video',
          miniGame: { 
            type: 'count', 
            config: { 
              title: 'Mango Addition',
              description: 'Add the mangoes!',
              target: 5,
              reward: '✨ Yummy addition! +10 House Points'
            } 
          },
          quiz: [
            { text: '5 + 2 = ?', options: ['7', '5', '2'], correct: 0, audioEn: '5 plus 2?', audioTe: '5 ప్లస్ 2 ఎంత?', audioHi: '5 जमा 2?' },
            { text: 'What is 3 + 3?', options: ['6', '3', '9'], correct: 0, audioEn: '3 plus 3?', audioTe: '3 ప్లస్ 3 ఎంత?', audioHi: '3 जमा 3?' },
            { text: 'If you have 4 and get 1 more...', options: ['5', '4', '1'], correct: 0, audioEn: '4 plus 1?', audioTe: '4 ప్లస్ 1 ఎంత?', audioHi: '4 जमा 1?' }
          ]
        },
        {
          id: 'c2_tel_math_4',
          class: 'Class 2',
          title: 'Subtraction Basics ➖',
          subject: 'Mathematics',
          description: 'Learning simple subtraction.',
          storyIntro: 'Sparky shares his berries!',
          explanation: 'Subtraction means taking away. We use the minus (-) sign.',
          videoUrl: 'https://www.youtube.com/embed/OpS553sie0E',
          visualExamples: '5 - 2 = 3',
          ruralExample: '5 birds fly away from a tree of 10.',
          voiceOverEn: 'Let us subtract.',
          type: 'video',
          miniGame: { 
            type: 'count', 
            config: { 
              title: 'Mango Takeaway',
              description: 'Subtract the mangoes!',
              target: 5,
              reward: '✨ Great sharing! +10 House Points'
            } 
          },
          quiz: [
            { text: '10 - 3 = ?', options: ['7', '13', '3'], correct: 0, audioEn: '10 minus 3?', audioTe: '10 మైనస్ 3 ఎంత?', audioHi: '10 में से 3 गए?' },
            { text: 'What is 15 - 5?', options: ['10', '5', '20'], correct: 0, audioEn: '15 minus 5?', audioTe: '15 మైనస్ 5 ఎంత?', audioHi: '15 में से 5 गए?' },
            { text: 'If you have 8 and give 2...', options: ['6', '10', '2'], correct: 0, audioEn: '8 minus 2?', audioTe: '8 మైనస్ 2 ఎంత?', audioHi: '8 में से 2 गए?' }
          ]
        },
        {
          id: 'c2_tel_math_5',
          class: 'Class 2',
          title: 'Measurement (Length) 📏',
          subject: 'Mathematics',
          description: 'Comparing long and short objects.',
          storyIntro: 'Sparky measures the village path!',
          explanation: 'We can compare objects by their length. Some are long, some are short. We can use handspans or rulers to measure.',
          videoUrl: 'https://www.youtube.com/embed/e__6sAXAaCY',
          visualExamples: '📏 Ruler, 🖐️ Handspan',
          ruralExample: 'Measuring the length of a cot.',
          voiceOverEn: 'How long is it?',
          type: 'video',
          miniGame: { 
            type: 'match', 
            config: { 
              title: 'Length Match',
              description: 'Match the long and short objects!',
              pairs: [['Long', '🐍'], ['Short', '🐛'], ['Long', '📏'], ['Short', '✏️']],
              reward: '✨ Measurement Master! +10 House Points'
            } 
          },
          quiz: [
            { text: 'Which is longer?', options: ['Bus', 'Cycle', 'Car'], correct: 0, audioEn: 'Which is longer?', audioTe: 'ఏది పొడవుగా ఉంటుంది?', audioHi: 'कौन सा लंबा है?' },
            { text: 'We can measure with our...', options: ['Handspan', 'Eyes', 'Ears'], correct: 0, audioEn: 'Measure with?', audioTe: 'మనం దేనితో కొలవవచ్చు?', audioHi: 'हम किससे माप सकते हैं?' },
            { text: 'A pencil is ___ than a pen.', options: ['Shorter', 'Longer'], correct: 0, audioEn: 'Pencil vs Pen?', audioTe: 'పెన్సిల్ పెన్ కంటే ___ ఉంటుంది.', audioHi: 'పెంసిల్ పెన్ కంటే ___ ఉంటుంది.' }
          ]
        }
      ],
      'EVS': [
        {
          id: 'c2_tel_evs_1',
          class: 'Class 2',
          title: 'My Family 👨👩👧',
          subject: 'EVS',
          description: 'Learning about family members and relationships.',
          storyIntro: '🏡 Sparky meets his loving family!',
          explanation: 'A family is a group of people who live together and care for each other. We have parents, siblings, and grandparents.',
          videoUrl: 'https://www.youtube.com/embed/EnM7X7CP3jA',
          visualExamples: '👩 Mother, 👨 Father, 👧 Sister',
          ruralExample: 'Joint families living in villages.',
          voiceOverEn: 'Family members care for each other.',
          type: 'video',
          miniGame: { 
            type: 'match', 
            config: { 
              title: 'Family Tree Match',
              description: 'Match the family members with their icons!',
              pairs: [['Mother', '👩'], ['Father', '👨'], ['Sister', '👧']],
              reward: '✨ Family tree complete! +10 House Points'
            } 
          },
          quiz: [
            { text: 'Who is father?', options: ['👨', '👩', '👧'], correct: 0, audioEn: 'Who is father?', audioTe: 'నాన్న ఎవరు?', audioHi: 'पिता कौन है?' },
            { text: 'Family lives in?', options: ['Home', 'Market', 'Park'], correct: 0, audioEn: 'Family lives in?', audioTe: 'కుటుంబం ఎక్కడ నివసిస్తుంది?', audioHi: 'परिवार कहाँ रहता है?' },
            { text: 'Mother\'s mother is...', options: ['Grandmother', 'Aunt', 'Sister'], correct: 0, audioEn: 'Mother\'s mother?', audioTe: 'అమ్మ వాళ్ళ అమ్మను ఏమంటారు?', audioHi: 'माँ की माँ?' }
          ]
        },
        {
          id: 'c2_tel_evs_2',
          class: 'Class 2',
          title: 'Our Body 🦷👀',
          subject: 'EVS',
          description: 'Learning about internal and external organs.',
          storyIntro: 'Sparky explores the human body!',
          explanation: 'Our body has external parts we can see like eyes and hands, and internal parts like heart and lungs.',
          videoUrl: 'https://www.youtube.com/embed/DHGQ3elHDIE',
          visualExamples: '🫀 Heart, 🧠 Brain, 👀 Eyes',
          ruralExample: 'Using our muscles to lift water.',
          voiceOverEn: 'Our body is a machine.',
          type: 'video',
          miniGame: { 
            type: 'match', 
            config: { 
              title: 'Body Part Match',
              description: 'Match the organs with their names!',
              pairs: [['Heart', '🫀'], ['Brain', '🧠'], ['Eyes', '👀']],
              reward: '✨ You know your body! +10 House Points'
            } 
          },
          quiz: [
            { text: 'Which is internal?', options: ['Heart', 'Hand', 'Leg'], correct: 0, audioEn: 'Which is internal?', audioTe: 'లోపలి అవయవం ఏది?', audioHi: 'कौन सा आंतरिक है?' },
            { text: 'We see with our...', options: ['Eyes', 'Ears', 'Nose'], correct: 0, audioEn: 'We see with our...', audioTe: 'మనం దేనితో చూస్తాము?', audioHi: 'हम किससे देखते हैं?' },
            { text: 'The brain helps us...', options: ['Think', 'Walk', 'Eat'], correct: 0, audioEn: 'The brain helps us...', audioTe: 'మెదడు మనకు ఎలా సహాయపడుతుంది?', audioHi: 'मस्तिष्क हमें क्या करने में मदद करता है?' }
          ]
        },
        {
          id: 'c2_tel_evs_3',
          class: 'Class 2',
          title: 'Food for Health 🍎🥛',
          subject: 'EVS',
          description: 'Learning about types of food and healthy eating.',
          storyIntro: 'Sparky learns about energy food!',
          explanation: 'We need energy-giving, body-building, and protective foods to stay healthy and strong.',
          videoUrl: 'https://www.youtube.com/embed/h4eueDYPTIg',
          visualExamples: '🍚 Rice, 🥚 Egg, 🍎 Fruit',
          ruralExample: 'Eating fresh ragi mudde.',
          voiceOverEn: 'Eat a balanced diet.',
          type: 'video',
          miniGame: { 
            type: 'match', 
            config: { 
              title: 'Healthy Food Sort',
              description: 'Match the food with its type!',
              pairs: [['Energy', '🍚'], ['Body Building', '🥚'], ['Protective', '🍎']],
              reward: '✨ Healthy choices! +10 House Points'
            } 
          },
          quiz: [
            { text: 'Which gives energy?', options: ['Rice', 'Apple', 'Water'], correct: 0, audioEn: 'Which gives energy?', audioTe: 'శక్తిని ఇచ్చే ఆహారం ఏది?', audioHi: 'कौन सा ऊर्जा देता है?' },
            { text: 'Fruits are...', options: ['Protective', 'Body Building', 'Energy'], correct: 0, audioEn: 'Fruits are...', audioTe: 'పండ్లు ఏ రకమైన ఆహారం?', audioHi: 'फल क्या हैं?' },
            { text: 'Milk makes bones...', options: ['Strong', 'Weak', 'Soft'], correct: 0, audioEn: 'Milk makes bones...', audioTe: 'పాలు ఎముకలను ఎలా చేస్తాయి?', audioHi: 'दूध हड्डियों को कैसा बनाता है?' }
          ]
        },
        {
          id: 'c2_tel_evs_4',
          class: 'Class 2',
          title: 'Clothes We Wear 👕🧥',
          subject: 'EVS',
          description: 'Learning about seasonal clothing.',
          storyIntro: 'Sparky dresses up for the weather!',
          explanation: 'We wear cotton in summer, wool in winter, and raincoats in rain to protect ourselves.',
          videoUrl: 'https://www.youtube.com/embed/h4eueDYPTIg',
          visualExamples: '👕 Cotton, 🧥 Woolen, 🧥 Raincoat',
          ruralExample: 'Wearing a dhoti in the village.',
          voiceOverEn: 'Dress for the season.',
          type: 'video',
          miniGame: { 
            type: 'match', 
            config: { 
              title: 'Season Dress Up',
              description: 'Match the clothes with the season!',
              pairs: [['Summer', '👕'], ['Winter', '🧥'], ['Rainy', '🧥']],
              reward: '✨ Perfect outfit! +10 House Points'
            } 
          },
          quiz: [
            { text: 'When to wear wool?', options: ['Winter', 'Summer', 'Rainy'], correct: 0, audioEn: 'When to wear wool?', audioTe: 'ఉన్ని దుస్తులు ఎప్పుడు ధరించాలి?', audioHi: 'ऊनी कपड़े कब पहनने चाहिए?' },
            { text: 'Cotton keeps us...', options: ['Cool', 'Warm', 'Wet'], correct: 0, audioEn: 'Cotton keeps us...', audioTe: 'పత్తి దుస్తులు మనల్ని ఎలా ఉంచుతాయి?', audioHi: 'सूती कपड़े हमें कैसा रखते हैं?' },
            { text: 'Raincoat protects from...', options: ['Rain', 'Sun', 'Wind'], correct: 0, audioEn: 'Raincoat protects from...', audioTe: 'రెయిన్ కోట్ దేని నుండి రక్షిస్తుంది?', audioHi: 'रेनकोट किससे बचाता है?' }
          ]
        },
        {
          id: 'c2_tel_evs_5',
          class: 'Class 2',
          title: 'Types of Houses 🛖🏢',
          subject: 'EVS',
          description: 'Learning about Kutcha and Pucca houses.',
          storyIntro: 'Sparky visits different homes!',
          explanation: 'Kutcha houses are made of mud and straw. Pucca houses are made of bricks and cement.',
          videoUrl: 'https://www.youtube.com/embed/h4eueDYPTIg',
          visualExamples: '🛖 Kutcha House, 🏢 Pucca House',
          ruralExample: 'The mud houses in the old village.',
          voiceOverEn: 'Houses protect us.',
          type: 'video',
          miniGame: { 
            type: 'match', 
            config: { 
              title: 'House Builder',
              description: 'Match the material with the house type!',
              pairs: [['Mud', 'Kutcha'], ['Brick', 'Pucca']],
              reward: '✨ Houses built! +10 House Points'
            } 
          },
          quiz: [
            { text: 'Which is stronger?', options: ['Pucca', 'Kutcha', 'Tent'], correct: 0, audioEn: 'Which is stronger?', audioTe: 'ఏది బలంగా ఉంటుంది?', audioHi: 'कौन सा मजबूत है?' },
            { text: 'Kutcha house is made of...', options: ['Mud', 'Cement', 'Iron'], correct: 0, audioEn: 'Kutcha house is made of...', audioTe: 'కచ్చా ఇల్లు దేనితో తయారవుతుంది?', audioHi: 'कच्चा घर किससे बना होता है?' },
            { text: 'Pucca house is made of...', options: ['Bricks', 'Straw', 'Leaves'], correct: 0, audioEn: 'Pucca house is made of...', audioTe: 'పక్కా ఇల్లు దేనితో తయారవుతుంది?', audioHi: 'పక్కా ఇల్లు దేనితో తయారవుతుంది?' }
          ]
        }
      ]
    },
  },
  'Class 3': {
    'CBSE': {
      'English': [
        {
          id: 'c3_cbse_eng_1',
          class: 'Class 3',
          title: 'Fun with Friends',
          subject: 'English',
          description: 'A story about the joy of playing and learning with friends.',
          storyIntro: 'Sparky joins his friends for a day of fun and games!',
          videoUrl: 'https://youtu.be/cs2FqNFsSBA?si=axR7Gzcm1WyGDZLe',
          visualExamples: 'Friends playing together, sharing toys',
          ruralExample: 'Children playing traditional games in the village.',
          voiceOverEn: 'Friends make everything more fun!',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Friend', '🤝'], ['Play', '🏃']] } },
          quiz: [{ text: 'What is the story about?', options: ['Friends', 'Solitude'], correct: 0 }]
        },
        {
          id: 'c3_cbse_eng_2',
          class: 'Class 3',
          title: 'Badal and Moti',
          subject: 'English',
          description: 'The adventures of Badal and Moti.',
          storyIntro: 'Sparky meets two special friends, Badal and Moti!',
          videoUrl: 'https://youtu.be/ikID9NfhwMM?si=IbK9nANfwHAh9uBS',
          visualExamples: 'Badal and Moti in their adventures',
          ruralExample: 'Stories of loyal animals in the village.',
          voiceOverEn: 'Badal and Moti are great companions.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Badal', '☁️'], ['Moti', '💎']] } },
          quiz: [{ text: 'Who are Badal and Moti?', options: ['Friends', 'Enemies'], correct: 0 }]
        },
        {
          id: 'c3_cbse_eng_3',
          class: 'Class 3',
          title: 'Toys and Games',
          subject: 'English',
          description: 'Exploring different types of toys and games we love to play.',
          storyIntro: 'Sparky explores a world full of toys and exciting games!',
          videoUrl: 'https://youtu.be/jaNSVR6gaqI?feature=shared',
          visualExamples: 'Dolls, Cars, Board games',
          ruralExample: 'Playing with handmade toys in the village.',
          voiceOverEn: 'Let us see what toys we have today!',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Toy', '🧸'], ['Game', '🎲']] } },
          quiz: [{ text: 'Which of these is a toy?', options: ['Doll', 'Stone'], correct: 0 }]
        }
      ],
      'Mathematics': [
        {
          id: 'c3_cbse_math_1',
          class: 'Class 3',
          title: "What's in a name?",
          subject: 'Mathematics',
          description: 'Understanding names and numbers.',
          storyIntro: 'Sparky learns how names and numbers are connected!',
          videoUrl: 'https://youtu.be/2OoG63UhLvg?si=Bxl4d47usxuh4eqQ',
          visualExamples: 'Names written with numbers',
          ruralExample: 'Counting names in a village register.',
          voiceOverEn: 'Every name has a story, and every number has a place.',
          type: 'video',
          miniGame: { type: 'count', config: { target: 10 } },
          quiz: [{ text: 'Can numbers be part of names?', options: ['Yes', 'No'], correct: 0 }]
        },
        {
          id: 'c3_cbse_math_2',
          class: 'Class 3',
          title: 'Toy Joy',
          subject: 'Mathematics',
          description: 'Learning math through toys.',
          storyIntro: 'Sparky uses his favorite toys to learn math!',
          videoUrl: 'https://youtu.be/_Pcqe6uMxLo?feature=shared',
          visualExamples: 'Counting toys, adding them up',
          ruralExample: 'Counting pebbles or seeds as toys.',
          voiceOverEn: 'Math is fun when we play with toys!',
          type: 'video',
          miniGame: { type: 'count', config: { target: 20 } },
          quiz: [{ text: 'If you have 2 toys and get 1 more, how many do you have?', options: ['3', '2'], correct: 0 }]
        },
        {
          id: 'c3_cbse_math_3',
          class: 'Class 3',
          title: 'Double Century',
          subject: 'Mathematics',
          description: 'Understanding the concept of 200 and beyond.',
          storyIntro: 'Sparky reaches a big milestone - the Double Century!',
          videoUrl: 'https://youtu.be/YA67j32JX8s?si=r_n9enuP3Pg_wfht',
          visualExamples: '200 runs in cricket, 200 items',
          ruralExample: 'Counting 200 bags of harvest.',
          voiceOverEn: 'A double century means two hundred.',
          type: 'video',
          miniGame: { type: 'count', config: { target: 200 } },
          quiz: [{ text: 'How much is a double century?', options: ['200', '100'], correct: 0 }]
        }
      ],
      'EVS': [
        {
          id: 'c3_cbse_evs_1',
          class: 'Class 3',
          title: 'Lesson 1',
          subject: 'EVS',
          description: 'EVS Lesson 1 for Class 3.',
          storyIntro: 'Sparky starts his first EVS lesson in Class 3!',
          videoUrl: 'https://www.youtube.com/watch?v=h4eueDYPTIg',
          visualExamples: 'Nature, environment',
          ruralExample: 'Observing nature in the village.',
          voiceOverEn: 'Welcome to your first EVS lesson.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Tree', '🌳'], ['Sun', '☀️']] } },
          quiz: [{ text: 'Is this Lesson 1?', options: ['Yes', 'No'], correct: 0 }]
        },
        {
          id: 'c3_cbse_evs_2',
          class: 'Class 3',
          title: 'Lesson 2',
          subject: 'EVS',
          description: 'EVS Lesson 2 for Class 3.',
          storyIntro: 'Sparky continues his EVS journey!',
          videoUrl: 'https://www.youtube.com/watch?v=h4eueDYPTIg',
          visualExamples: 'Animals, plants',
          ruralExample: 'Looking at animals in the village.',
          voiceOverEn: 'Let us learn more about our environment.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Cow', '🐄'], ['Plant', '🌱']] } },
          quiz: [{ text: 'Is this Lesson 2?', options: ['Yes', 'No'], correct: 0 }]
        }
      ],
      'Hindi': [
        {
          id: 'c3_cbse_hin_1',
          class: 'Class 3',
          title: 'Lesson 1',
          subject: 'Hindi',
          description: 'Hindi Lesson 1 for Class 3.',
          storyIntro: 'Sparky starts his first Hindi lesson in Class 3!',
          videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q',
          visualExamples: 'Hindi alphabet, basic words',
          ruralExample: 'Learning Hindi in the village school.',
          voiceOverEn: 'Welcome to your first Hindi lesson.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['अ', '🍎'], ['आ', '🐢']] } },
          quiz: [{ text: 'Is this Lesson 1?', options: ['Yes', 'No'], correct: 0 }]
        },
        {
          id: 'c3_cbse_hin_2',
          class: 'Class 3',
          title: 'Lesson 2',
          subject: 'Hindi',
          description: 'Hindi Lesson 2 for Class 3.',
          storyIntro: 'Sparky continues his Hindi journey!',
          videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q',
          visualExamples: 'Sentences, conversation',
          ruralExample: 'Talking to friends in Hindi.',
          voiceOverEn: 'Let us learn more Hindi words.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['नमस्ते', '🙏'], ['दोస్త', '🤝']] } },
          quiz: [{ text: 'Is this Lesson 2?', options: ['Yes', 'No'], correct: 0 }]
        }
      ],
      'Telugu': [
        {
          id: 'c3_cbse_tel_1',
          class: 'Class 3',
          title: 'Telugu Varnamala Revision',
          subject: 'Telugu',
          description: 'Revision of Telugu alphabet.',
          storyIntro: 'Sparky revisits the Telugu letters!',
          videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4',
          visualExamples: 'అ to ఱ',
          ruralExample: 'Reading signs in the village.',
          voiceOverEn: 'Let us revise the alphabet.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['అ', 'Achulu'], ['క', 'Hallulu']] } },
          quiz: [{ text: 'Which is a vowel?', options: ['అ', 'క'], correct: 0 }]
        },
        { id: 'c3_cbse_tel_2', class: 'Class 3', title: 'Guninthalu - All Signs', subject: 'Telugu', description: 'Learning all vowel signs.', storyIntro: 'Sparky masters the signs!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'కా, కి, కు, కే', ruralExample: 'Writing names in Telugu.', voiceOverEn: 'Signs change the sound.', type: 'video', miniGame: { type: 'match', config: { pairs: [['క+ి', 'కి'], ['క+ు', 'కు']] } }, quiz: [{ text: 'Which is "Ki"?', options: ['కి', 'కు'], correct: 0 }] },
        { id: 'c3_cbse_tel_3', class: 'Class 3', title: 'Vatthulu - Ka to Na', subject: 'Telugu', description: 'Consonant clusters.', storyIntro: 'Sparky learns to double the sounds!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'క్క, గ్గ, చ్చ', ruralExample: 'అక్క (Sister).', voiceOverEn: 'Vatthulu add stress.', type: 'video', miniGame: { type: 'match', config: { pairs: [['క', 'క్క'], ['గ', 'గ్గ']] } }, quiz: [{ text: 'Which has "Ka" vatthu?', options: ['అక్క', 'అమ్మ'], correct: 0 }] },
        { id: 'c3_cbse_tel_4', class: 'Class 3', title: 'Vatthulu - Pa to Rra', subject: 'Telugu', description: 'More consonant clusters.', storyIntro: 'Sparky learns more stress sounds!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'ప్ప, బ్బ, మ్మ', ruralExample: 'అమ్మ (Mother).', voiceOverEn: 'More vatthulu.', type: 'video', miniGame: { type: 'match', config: { pairs: [['మ', 'మ్మ'], ['ప', 'ప్ప']] } }, quiz: [{ text: 'Which has "Ma" vatthu?', options: ['అమ్మ', 'అప్ప'], correct: 0 }] },
        { id: 'c3_cbse_tel_5', class: 'Class 3', title: 'Simple Sentences', subject: 'Telugu', description: 'Reading small sentences.', storyIntro: 'Sparky reads his first Telugu story!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'అది ఒక ఆవు.', ruralExample: 'Farmer is in the field.', voiceOverEn: 'Let us read sentences.', type: 'video', miniGame: { type: 'match', config: { pairs: [['అది', 'That'], ['ఇది', 'This']] } }, quiz: [{ text: 'What is "Cow"?', options: ['ఆవు', 'పులి'], correct: 0 }] },
        { id: 'c3_cbse_tel_6', class: 'Class 3', title: 'Naming Words in Telugu', subject: 'Telugu', description: 'Nouns in Telugu.', storyIntro: 'Sparky names things in Telugu!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'పేరు, ఊరు, జంతువు', ruralExample: 'Village name.', voiceOverEn: 'Nouns are names.', type: 'video', miniGame: { type: 'match', config: { pairs: [['రాము', 'Person'], ['హైదరాబాద్', 'Place']] } }, quiz: [{ text: 'Which is a place?', options: ['ఊరు', 'పని'], correct: 0 }] },
        { id: 'c3_cbse_tel_7', class: 'Class 3', title: 'Action Words in Telugu', subject: 'Telugu', description: 'Verbs in Telugu.', storyIntro: 'Sparky is doing things!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'తిను, పాడు, ఆడు', ruralExample: 'Working in the farm.', voiceOverEn: 'Verbs show action.', type: 'video', miniGame: { type: 'match', config: { pairs: [['తిను', 'Eat'], ['ఆడు', 'Play']] } }, quiz: [{ text: 'Which is "Play"?', options: ['ఆడు', 'తిను'], correct: 0 }] },
        { id: 'c3_cbse_tel_8', class: 'Class 3', title: 'Opposites in Telugu', subject: 'Telugu', description: 'Antonyms.', storyIntro: 'Sparky finds opposites!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'పగలు/రాత్రి, మంచి/చెడు', ruralExample: 'Day and night.', voiceOverEn: 'Opposites are different.', type: 'video', miniGame: { type: 'match', config: { pairs: [['పగలు', 'రాత్రి'], ['పెద్ద', 'చిన్న']] } }, quiz: [{ text: 'Opposite of "Big"?', options: ['చిన్న', 'పెద్ద'], correct: 0 }] },
        { id: 'c3_cbse_tel_9', class: 'Class 3', title: 'Numbers 21-50 in Telugu', subject: 'Telugu', description: 'Counting higher.', storyIntro: 'Sparky counts more treasures!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: '౨౧, ౩౦, ౫౦', ruralExample: 'Counting 50 bags of rice.', voiceOverEn: 'Let us count to 50.', type: 'video', miniGame: { type: 'count', config: { target: 30 } }, quiz: [{ text: 'What is 30?', options: ['ముప్పై', 'ఇరవై'], correct: 0 }] },
        { id: 'c3_cbse_tel_10', class: 'Class 3', title: 'Telugu Rhymes', subject: 'Telugu', description: 'Fun poems.', storyIntro: 'Sparky sings along!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'Rhyme characters', ruralExample: 'Village songs.', voiceOverEn: 'Let us sing rhymes.', type: 'video', miniGame: { type: 'match', config: { pairs: [['చందమామ', '🌙'], ['చుక్కలు', '⭐']] } }, quiz: [{ text: 'Who is "Chandamama"?', options: ['Moon', 'Sun'], correct: 0 }] }
      ],
      'Arts': [
        {
          id: 'c3_cbse_arts_1',
          class: 'Class 3',
          title: 'Plants in Art',
          subject: 'Arts',
          description: 'How plants are depicted in various art forms.',
          storyIntro: 'Sparky discovers how artists use plants to create beautiful masterpieces!',
          videoUrl: 'https://youtu.be/sKNgq9RIgVc?si=ibY4hsQVjmKXSy4V',
          visualExamples: 'Leaf paintings, Floral patterns',
          ruralExample: 'Traditional rangoli with flower petals.',
          voiceOverEn: 'Plants are a great source of inspiration for artists.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Leaf', '🌿'], ['Flower', '🌸']] } },
          quiz: [{ text: 'Can plants be art?', options: ['Yes', 'No'], correct: 0 }]
        },
        {
          id: 'c3_cbse_arts_2',
          class: 'Class 3',
          title: 'Festivals, Occasions and Celebration',
          subject: 'Arts',
          description: 'Art related to festivals and celebrations.',
          storyIntro: 'Sparky celebrates with art! Let us see how different festivals are decorated.',
          videoUrl: 'https://youtu.be/Qr6n82qco2g?si=SeEZrqBENvTrApks',
          visualExamples: 'Festival decorations, traditional art',
          ruralExample: 'Decorating the village for a local festival.',
          voiceOverEn: 'Art makes our celebrations even more special.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Festival', '🎉'], ['Art', '🎨']] } },
          quiz: [{ text: 'Do we use art in festivals?', options: ['Yes', 'No'], correct: 0 }]
        },
        {
          id: 'c3_cbse_arts_3',
          class: 'Class 3',
          title: 'Integration all art forms',
          subject: 'Arts',
          description: 'Combining different art forms together.',
          storyIntro: 'Sparky learns how to combine music, dance, and painting into one big art form!',
          videoUrl: 'https://youtu.be/7-l1BkHInPI?feature=shared',
          visualExamples: 'Dance with music, painting with storytelling',
          ruralExample: 'Village folk performances combining dance and song.',
          voiceOverEn: 'All art forms can work together beautifully.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Music', '🎵'], ['Dance', '💃'], ['Painting', '🎨']] } },
          quiz: [{ text: 'Can we combine different art forms?', options: ['Yes', 'No'], correct: 0 }]
        }
      ]
    },
    'Telangana State Board': {
      'English': [
        {
          id: 'c3_tel_eng_1',
          class: 'Class 3',
          title: 'The Loyal Mongoose',
          subject: 'English',
          description: 'Story about loyalty and quick decisions.',
          storyIntro: 'Sparky hears a story about a brave mongoose!',
          videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o',
          visualExamples: 'Mongoose, Baby, Snake',
          ruralExample: 'Animals protecting the house.',
          voiceOverEn: 'Loyalty is a great virtue.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Mongoose', 'Loyal'], ['Snake', 'Enemy']] } },
          quiz: [{ text: 'Who was loyal?', options: ['Mongoose', 'Snake'], correct: 0 }]
        },
        { id: 'c3_tel_eng_2', class: 'Class 3', title: 'The Little Birdie', subject: 'English', description: 'Poem about a bird.', storyIntro: 'Sparky watches a little bird!', videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o', visualExamples: 'Bird, Nest, Wings', ruralExample: 'Birds in the village trees.', voiceOverEn: 'Birds are beautiful.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Bird', 'Fly'], ['Nest', 'Home']] } }, quiz: [{ text: 'What do birds use to fly?', options: ['Wings', 'Legs'], correct: 0 }] },
        { id: 'c3_tel_eng_3', class: 'Class 3', title: 'The Clever Rabbit', subject: 'English', description: 'Story of wit over strength.', storyIntro: 'Sparky meets a clever rabbit!', videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o', visualExamples: 'Rabbit, Lion, Well', ruralExample: 'Clever animals in folk tales.', voiceOverEn: 'Wit is stronger than strength.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Rabbit', 'Clever'], ['Lion', 'Strong']] } }, quiz: [{ text: 'Who was clever?', options: ['Rabbit', 'Lion'], correct: 0 }] },
        { id: 'c3_tel_eng_4', class: 'Class 3', title: 'My Family', subject: 'English', description: 'Talking about family members.', storyIntro: 'Sparky introduces his family!', videoUrl: 'https://www.youtube.com/watch?v=d_WQEw13TCo', visualExamples: 'Grandparents, Parents, Siblings', ruralExample: 'Joint families in villages.', voiceOverEn: 'I love my family.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Father', '👨'], ['Mother', '👩']] } }, quiz: [{ text: 'Father’s father is?', options: ['Grandfather', 'Uncle'], correct: 0 }] },
        { id: 'c3_tel_eng_5', class: 'Class 3', title: 'The Magic Pot', subject: 'English', description: 'Story about greed.', storyIntro: 'Sparky finds a magic pot!', videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o', visualExamples: 'Pot, Gold, Farmer', ruralExample: 'Old stories told by grandmothers.', voiceOverEn: 'Greed leads to trouble.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Pot', 'Magic'], ['Farmer', 'Hardworking']] } }, quiz: [{ text: 'What was in the pot?', options: ['Gold', 'Water'], correct: 0 }] },
        { id: 'c3_tel_eng_6', class: 'Class 3', title: 'Action Words', subject: 'English', description: 'Learning verbs.', storyIntro: 'Sparky is very active!', videoUrl: 'https://www.youtube.com/watch?v=3G2dvo4L8N0', visualExamples: 'Jump, Sing, Dance', ruralExample: 'Children playing in the fields.', voiceOverEn: 'Action words are verbs.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Sing', '🎤'], ['Dance', '💃']] } }, quiz: [{ text: 'Which is an action?', options: ['Jump', 'Stone'], correct: 0 }] },
        { id: 'c3_tel_eng_7', class: 'Class 3', title: 'Describing Words', subject: 'English', description: 'Learning adjectives.', storyIntro: 'Sparky describes his world!', videoUrl: 'https://www.youtube.com/watch?v=zPSzKp6yY8Q', visualExamples: 'Big, Small, Blue, Red', ruralExample: 'The green grass.', voiceOverEn: 'Adjectives describe things.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Sky', 'Blue'], ['Grass', 'Green']] } }, quiz: [{ text: 'Which is a color?', options: ['Red', 'Box'], correct: 0 }] },
        { id: 'c3_tel_eng_8', class: 'Class 3', title: 'Naming Words', subject: 'English', description: 'Learning nouns.', storyIntro: 'Sparky names his friends!', videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o', visualExamples: 'Rahul, Hyderabad, Dog, Pen', ruralExample: 'Names of village animals.', voiceOverEn: 'Nouns are names.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Dog', 'Animal'], ['Pen', 'Thing']] } }, quiz: [{ text: 'Which is a person?', options: ['Boy', 'City'], correct: 0 }] },
        { id: 'c3_tel_eng_9', class: 'Class 3', title: 'Prepositions', subject: 'English', description: 'In, On, Under.', storyIntro: 'Where is Sparky?', videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o', visualExamples: 'In the box, On the chair', ruralExample: 'The cat is on the wall.', voiceOverEn: 'Prepositions show place.', type: 'video', miniGame: { type: 'match', config: { pairs: [['On', 'Top'], ['Under', 'Bottom']] } }, quiz: [{ text: 'The ball is ___ the box.', options: ['in', 'at'], correct: 0 }] },
        { id: 'c3_tel_eng_10', class: 'Class 3', title: 'Conjunctions', subject: 'English', description: 'And, But.', storyIntro: 'Sparky joins his words!', videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o', visualExamples: 'Apple and Banana', ruralExample: 'Rice and Dal.', voiceOverEn: 'Conjunctions join words.', type: 'video', miniGame: { type: 'match', config: { pairs: [['And', 'Join'], ['But', 'Contrast']] } }, quiz: [{ text: 'I like tea ___ coffee.', options: ['and', 'but'], correct: 0 }] }
      ],
      'Mathematics': [
        {
          id: 'c3_tel_math_1',
          class: 'Class 3',
          title: 'Numbers 1-1000',
          subject: 'Mathematics',
          description: 'Understanding 3-digit numbers.',
          storyIntro: 'Sparky counts his magic seeds!',
          videoUrl: 'https://www.youtube.com/watch?v=D0Ajq682yrA',
          visualExamples: '100, 500, 999',
          ruralExample: 'Counting sheep in the flock.',
          voiceOverEn: 'Let us learn big numbers.',
          type: 'video',
          miniGame: { type: 'count', config: { target: 100 } },
          quiz: [{ text: 'What is 100 + 1?', options: ['101', '110'], correct: 0 }]
        },
        { id: 'c3_tel_math_2', class: 'Class 3', title: 'Place Value', subject: 'Mathematics', description: 'Ones, Tens, Hundreds.', storyIntro: 'Sparky puts numbers in their homes!', videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y', visualExamples: '234 = 2H 3T 4O', ruralExample: 'Bundles of sticks.', voiceOverEn: 'Place value is important.', type: 'video', miniGame: { type: 'match', config: { pairs: [['200', '2 Hundreds'], ['30', '3 Tens']] } }, quiz: [{ text: 'In 123, what is 1?', options: ['Hundreds', 'Ones'], correct: 0 }] },
        { id: 'c3_tel_math_3', class: 'Class 3', title: 'Addition', subject: 'Mathematics', description: 'Adding numbers.', storyIntro: 'Sparky adds his treasures!', videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y', visualExamples: '120 + 30 = 150', ruralExample: 'Adding bags of grain.', voiceOverEn: 'Addition is putting together.', type: 'video', miniGame: { type: 'count', config: { target: 50 } }, quiz: [{ text: '50 + 50 = ?', options: ['100', '90'], correct: 0 }] },
        { id: 'c3_tel_math_4', class: 'Class 3', title: 'Subtraction', subject: 'Mathematics', description: 'Subtracting numbers.', storyIntro: 'Sparky shares his seeds!', videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y', visualExamples: '100 - 20 = 80', ruralExample: 'Selling eggs from the farm.', voiceOverEn: 'Subtraction is taking away.', type: 'video', miniGame: { type: 'count', config: { target: 20 } }, quiz: [{ text: '80 - 10 = ?', options: ['70', '90'], correct: 0 }] },
        { id: 'c3_tel_math_5', class: 'Class 3', title: 'Multiplication', subject: 'Mathematics', description: 'Repeated addition.', storyIntro: 'Sparky multiplies his magic!', videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y', visualExamples: '2 x 3 = 6', ruralExample: 'Counting legs of 3 goats.', voiceOverEn: 'Multiplication is fast addition.', type: 'video', miniGame: { type: 'count', config: { target: 10 } }, quiz: [{ text: '4 x 2 = ?', options: ['8', '6'], correct: 0 }] },
        { id: 'c3_tel_math_6', class: 'Class 3', title: 'Division', subject: 'Mathematics', description: 'Equal sharing.', storyIntro: 'Sparky shares equally!', videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y', visualExamples: '10 / 2 = 5', ruralExample: 'Sharing fruits among friends.', voiceOverEn: 'Division is sharing.', type: 'video', miniGame: { type: 'count', config: { target: 5 } }, quiz: [{ text: '6 / 3 = ?', options: ['2', '3'], correct: 0 }] },
        { id: 'c3_tel_math_7', class: 'Class 3', title: 'Measurement', subject: 'Mathematics', description: 'Length and Weight.', storyIntro: 'Sparky measures his wand!', videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y', visualExamples: 'Meter, Kilogram', ruralExample: 'Measuring cloth.', voiceOverEn: 'We measure things.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Meter', 'Length'], ['Kilogram', 'Weight']] } }, quiz: [{ text: 'What measures weight?', options: ['Kilogram', 'Meter'], correct: 0 }] },
        { id: 'c3_tel_math_8', class: 'Class 3', title: 'Time', subject: 'Mathematics', description: 'Reading the clock.', storyIntro: 'Sparky knows the time!', videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y', visualExamples: 'Clock, Hours, Minutes', ruralExample: 'Time for school.', voiceOverEn: 'Time is precious.', type: 'video', miniGame: { type: 'match', config: { pairs: [['12:00', 'Noon'], ['6:00', 'Morning']] } }, quiz: [{ text: 'How many hours in a day?', options: ['24', '12'], correct: 0 }] },
        { id: 'c3_tel_math_9', class: 'Class 3', title: 'Shapes', subject: 'Mathematics', description: 'Identifying shapes.', storyIntro: 'Sparky finds shapes!', videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y', visualExamples: 'Circle, Square, Triangle', ruralExample: 'Round wheels.', voiceOverEn: 'Shapes are everywhere.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Circle', '⭕'], ['Square', '⬜']] } }, quiz: [{ text: 'Which is round?', options: ['Circle', 'Square'], correct: 0 }] },
        { id: 'c3_tel_math_10', class: 'Class 3', title: 'Patterns', subject: 'Mathematics', description: 'Repeating sequences.', storyIntro: 'Sparky sees patterns!', videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y', visualExamples: '1, 2, 1, 2', ruralExample: 'Patterns on sarees.', voiceOverEn: 'Patterns repeat.', type: 'video', miniGame: { type: 'match', config: { pairs: [['1, 2', '1, 2'], ['A, B', 'A, B']] } }, quiz: [{ text: 'What comes after A, B, A?', options: ['B', 'A'], correct: 0 }] }
      ],
      'EVS': [
        {
          id: 'c3_tel_evs_1',
          class: 'Class 3',
          title: 'Our Surroundings',
          subject: 'EVS',
          description: 'Living and non-living things.',
          storyIntro: 'Sparky explores his village!',
          videoUrl: 'https://www.youtube.com/watch?v=h4eueDYPTIg',
          visualExamples: 'Plants, Animals, Stones',
          ruralExample: 'The village pond.',
          voiceOverEn: 'Our surroundings are beautiful.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Plant', 'Living'], ['Stone', 'Non-living']] } },
          quiz: [{ text: 'Which is living?', options: ['Plant', 'Stone'], correct: 0 }]
        },
        { id: 'c3_tel_evs_2', class: 'Class 3', title: 'Plants Around Us', subject: 'EVS', description: 'Types of plants.', storyIntro: 'Sparky loves plants!', videoUrl: 'https://www.youtube.com/watch?v=h4eueDYPTIg', visualExamples: 'Trees, Shrubs, Herbs', ruralExample: 'Neem tree.', voiceOverEn: 'Plants give us oxygen.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Neem', 'Tree'], ['Tulsi', 'Herb']] } }, quiz: [{ text: 'Which is a big plant?', options: ['Tree', 'Herb'], correct: 0 }] },
        { id: 'c3_tel_evs_3', class: 'Class 3', title: 'Animals Around Us', subject: 'EVS', description: 'Domestic and wild animals.', storyIntro: 'Sparky meets animals!', videoUrl: 'https://www.youtube.com/watch?v=h4eueDYPTIg', visualExamples: 'Cow, Lion, Dog', ruralExample: 'Cows in the shed.', voiceOverEn: 'Animals are our friends.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Cow', 'Domestic'], ['Lion', 'Wild']] } }, quiz: [{ text: 'Which is domestic?', options: ['Cow', 'Lion'], correct: 0 }] },
        { id: 'c3_tel_evs_4', class: 'Class 3', title: 'Water', subject: 'EVS', description: 'Importance of water.', storyIntro: 'Sparky drinks water!', videoUrl: 'https://www.youtube.com/watch?v=h4eueDYPTIg', visualExamples: 'Rain, Well, River', ruralExample: 'Village well.', voiceOverEn: 'Water is life.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Rain', 'Source'], ['Drinking', 'Use']] } }, quiz: [{ text: 'Should we waste water?', options: ['No', 'Yes'], correct: 0 }] },
        { id: 'c3_tel_evs_5', class: 'Class 3', title: 'Food', subject: 'EVS', description: 'Healthy eating habits.', storyIntro: 'Sparky eats healthy!', videoUrl: 'https://www.youtube.com/watch?v=h4eueDYPTIg', visualExamples: 'Fruits, Vegetables, Milk', ruralExample: 'Fresh farm food.', voiceOverEn: 'Eat healthy food.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Apple', 'Fruit'], ['Carrot', 'Vegetable']] } }, quiz: [{ text: 'Which is healthy?', options: ['Fruit', 'Candy'], correct: 0 }] },
        { id: 'c3_tel_evs_6', class: 'Class 3', title: 'Our House', subject: 'EVS', description: 'Types of houses.', storyIntro: 'Sparky visits houses!', videoUrl: 'https://www.youtube.com/watch?v=h4eueDYPTIg', visualExamples: 'Kutcha, Pucca houses', ruralExample: 'Thatched roof house.', voiceOverEn: 'A house protects us.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Pucca', 'Brick'], ['Kutcha', 'Mud']] } }, quiz: [{ text: 'Which is stronger?', options: ['Pucca', 'Kutcha'], correct: 0 }] },
        { id: 'c3_tel_evs_7', class: 'Class 3', title: 'Our Clothes', subject: 'EVS', description: 'Types of clothes.', storyIntro: 'Sparky wears clothes!', videoUrl: 'https://www.youtube.com/watch?v=h4eueDYPTIg', visualExamples: 'Cotton, Woolen clothes', ruralExample: 'Cotton clothes in summer.', voiceOverEn: 'Clothes cover our body.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Summer', 'Cotton'], ['Winter', 'Woolen']] } }, quiz: [{ text: 'What to wear in winter?', options: ['Woolen', 'Cotton'], correct: 0 }] },
        { id: 'c3_tel_evs_8', class: 'Class 3', title: 'Cleanliness', subject: 'EVS', description: 'Personal hygiene.', storyIntro: 'Sparky stays clean!', videoUrl: 'https://www.youtube.com/watch?v=h4eueDYPTIg', visualExamples: 'Brushing, Bathing', ruralExample: 'Washing hands before food.', voiceOverEn: 'Cleanliness is godliness.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Brush', 'Teeth'], ['Bath', 'Body']] } }, quiz: [{ text: 'Should we brush daily?', options: ['Yes', 'No'], correct: 0 }] },
        { id: 'c3_tel_evs_9', class: 'Class 3', title: 'Safety Rules', subject: 'EVS', description: 'Staying safe.', storyIntro: 'Sparky stays safe!', videoUrl: 'https://www.youtube.com/watch?v=h4eueDYPTIg', visualExamples: 'Road safety, Home safety', ruralExample: 'Walking on the side of the road.', voiceOverEn: 'Safety first.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Road', 'Left side'], ['Fire', 'Danger']] } }, quiz: [{ text: 'Should we play with fire?', options: ['No', 'Yes'], correct: 0 }] },
        { id: 'c3_tel_evs_10', class: 'Class 3', title: 'Festivals', subject: 'EVS', description: 'Celebrating together.', storyIntro: 'Sparky celebrates!', videoUrl: 'https://www.youtube.com/watch?v=h4eueDYPTIg', visualExamples: 'Diwali, Eid, Christmas', ruralExample: 'Village fair.', voiceOverEn: 'Festivals are fun.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Diwali', 'Lights'], ['Eid', 'Sweets']] } }, quiz: [{ text: 'Which is festival of lights?', options: ['Diwali', 'Eid'], correct: 0 }] }
      ],
      'Hindi': [
        {
          id: 'c3_tel_hin_1',
          class: 'Class 3',
          title: 'Hindi Varnamala',
          subject: 'Hindi',
          description: 'Learning Hindi alphabet.',
          storyIntro: 'Sparky learns Hindi!',
          videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q',
          visualExamples: 'अ, आ, क, ख',
          ruralExample: 'Hindi signs.',
          voiceOverEn: 'Hindi is our national language.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['अ', 'Vowel'], ['क', 'Consonant']] } },
          quiz: [{ text: 'Which is "A"?', options: ['अ', 'क'], correct: 0 }]
        },
        { id: 'c3_tel_hin_2', class: 'Class 3', title: 'Two Letter Words', subject: 'Hindi', description: 'Reading small words.', storyIntro: 'Sparky reads Hindi!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'घर, फल, जल', ruralExample: 'घर (Home).', voiceOverEn: 'Let us read words.', type: 'video', miniGame: { type: 'match', config: { pairs: [['घ+र', 'घर'], ['फ+ल', 'फल']] } }, quiz: [{ text: 'घ + र = ?', options: ['घर', 'फल'], correct: 0 }] },
        { id: 'c3_tel_hin_3', class: 'Class 3', title: 'Three Letter Words', subject: 'Hindi', description: 'Reading more words.', storyIntro: 'Sparky reads more!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'कमल, मटर, बटन', ruralExample: 'कमल (Lotus).', voiceOverEn: 'More words to read.', type: 'video', miniGame: { type: 'match', config: { pairs: [['क+म+ल', 'कमल'], ['म+ट+ర', 'मटर']] } }, quiz: [{ text: 'क + మ + ల = ?', options: ['कमल', 'मटर'], correct: 0 }] },
        { id: 'c3_tel_hin_4', class: 'Class 3', title: 'Matrayen - Aa', subject: 'Hindi', description: 'Aa sign.', storyIntro: 'Sparky learns signs!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'आम, काम, नाम', ruralExample: 'आम (Mango).', voiceOverEn: 'Aa sign adds sound.', type: 'video', miniGame: { type: 'match', config: { pairs: [['क+ा', 'का'], ['म+ा', 'मा']] } }, quiz: [{ text: 'Which is "Ka"?', options: ['का', 'क'], correct: 0 }] },
        { id: 'c3_tel_hin_5', class: 'Class 3', title: 'Matrayen - Ee', subject: 'Hindi', description: 'Ee sign.', storyIntro: 'Sparky learns more signs!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'दिन, मिल, सिर', ruralExample: 'दिन (Day).', voiceOverEn: 'Ee sign adds sound.', type: 'video', miniGame: { type: 'match', config: { pairs: [['द+ि', 'दि'], ['म+ि', 'मि']] } }, quiz: [{ text: 'Which is "Di"?', options: ['दि', 'द'], correct: 0 }] },
        { id: 'c3_tel_hin_6', class: 'Class 3', title: 'Numbers 1-10', subject: 'Hindi', description: 'Counting in Hindi.', storyIntro: 'Sparky counts in Hindi!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'एक, दो, तीन', ruralExample: 'Counting fruits.', voiceOverEn: 'Let us count.', type: 'video', miniGame: { type: 'count', config: { target: 5 } }, quiz: [{ text: 'What is 1?', options: ['एक', 'दो'], correct: 0 }] },
        { id: 'c3_tel_hin_7', class: 'Class 3', title: 'Colors', subject: 'Hindi', description: 'Names of colors.', storyIntro: 'Sparky sees colors!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'लाल, नीला, हरा', ruralExample: 'लाल (Red) flower.', voiceOverEn: 'Colors are beautiful.', type: 'video', miniGame: { type: 'match', config: { pairs: [['लाल', '🔴'], ['నీలా', '🔵']] } }, quiz: [{ text: 'Which is Red?', options: ['लाल', 'नीला'], correct: 0 }] },
        { id: 'c3_tel_hin_8', class: 'Class 3', title: 'Fruits', subject: 'Hindi', description: 'Names of fruits.', storyIntro: 'Sparky eats fruits!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'आम, केला, अंगूर', ruralExample: 'आम (Mango).', voiceOverEn: 'Fruits are healthy.', type: 'video', miniGame: { type: 'match', config: { pairs: [['आम', '🥭'], ['కేలా', '🍌']] } }, quiz: [{ text: 'Which is Mango?', options: ['आम', 'केला'], correct: 0 }] },
        { id: 'c3_tel_hin_9', class: 'Class 3', title: 'Animals', subject: 'Hindi', description: 'Names of animals.', storyIntro: 'Sparky meets animals!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'गाय, कुत्ता, बिल्ली', ruralExample: 'गाय (Cow).', voiceOverEn: 'Animals are friends.', type: 'video', miniGame: { type: 'match', config: { pairs: [['गाय', '🐄'], ['కుత్తా', '🐶']] } }, quiz: [{ text: 'Which is Cow?', options: ['गाय', 'शेर'], correct: 0 }] },
        { id: 'c3_tel_hin_10', class: 'Class 3', title: 'Hindi Rhymes', subject: 'Hindi', description: 'Fun poems.', storyIntro: 'Sparky sings!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'Rhyme characters', ruralExample: 'Village songs.', voiceOverEn: 'Let us sing.', type: 'video', miniGame: { type: 'match', config: { pairs: [['మఛలీ', '🐟'], ['పానీ', '🌊']] } }, quiz: [{ text: 'Who is "Machli"?', options: ['Fish', 'Bird'], correct: 0 }] }
      ],
      'Telugu': [
        {
          id: 'c3_tel_tel_1',
          class: 'Class 3',
          title: 'Telugu Lessons Intro',
          subject: 'Telugu',
          description: 'Introduction to Class 3 Telugu.',
          storyIntro: 'Sparky starts his Telugu journey!',
          videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4',
          visualExamples: 'Telugu textbook',
          ruralExample: 'Village school.',
          voiceOverEn: 'Welcome to Telugu class.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Telugu', 'Language'], ['Class 3', 'Level']] } },
          quiz: [{ text: 'Is this Telugu class?', options: ['Yes', 'No'], correct: 0 }]
        },
        { id: 'c3_tel_tel_2', class: 'Class 3', title: 'Varnamala Mastery', subject: 'Telugu', description: 'Perfecting alphabet.', storyIntro: 'Sparky knows all letters!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'అ to ఱ', ruralExample: 'Reading village signs.', voiceOverEn: 'Alphabet is the base.', type: 'video', miniGame: { type: 'match', config: { pairs: [['అ', 'First'], ['ఱ', 'Last']] } }, quiz: [{ text: 'First letter?', options: ['అ', 'ఆ'], correct: 0 }] },
        { id: 'c3_tel_tel_3', class: 'Class 3', title: 'Guninthalu - Part 1', subject: 'Telugu', description: 'Vowel signs A to U.', storyIntro: 'Sparky adds signs!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'కా, కి, కు', ruralExample: 'Writing names.', voiceOverEn: 'Signs are important.', type: 'video', miniGame: { type: 'match', config: { pairs: [['క+ి', 'కి'], ['క+ు', 'కు']] } }, quiz: [{ text: 'Which is "Ki"?', options: ['కి', 'కు'], correct: 0 }] },
        { id: 'c3_tel_tel_4', class: 'Class 3', title: 'Guninthalu - Part 2', subject: 'Telugu', description: 'Vowel signs E to O.', storyIntro: 'Sparky adds more signs!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'కే, కై, కొ', ruralExample: 'More names.', voiceOverEn: 'More signs to learn.', type: 'video', miniGame: { type: 'match', config: { pairs: [['క+ే', 'కే'], ['క+ొ', 'కొ']] } }, quiz: [{ text: 'Which is "Ke"?', options: ['కే', 'కొ'], correct: 0 }] },
        { id: 'c3_tel_tel_5', class: 'Class 3', title: 'Vatthulu - Part 1', subject: 'Telugu', description: 'Consonant signs.', storyIntro: 'Sparky doubles sounds!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'క్క, గ్గ', ruralExample: 'అక్క.', voiceOverEn: 'Vatthulu add stress.', type: 'video', miniGame: { type: 'match', config: { pairs: [['క', 'క్క'], ['గ', 'గ్గ']] } }, quiz: [{ text: 'Which has "Ka" vatthu?', options: ['అక్క', 'అమ్మ'], correct: 0 }] },
        { id: 'c3_tel_tel_6', class: 'Class 3', title: 'Vatthulu - Part 2', subject: 'Telugu', description: 'More consonant signs.', storyIntro: 'Sparky doubles more!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'చ్చ, జ్జ', ruralExample: 'మజ్జిగ.', voiceOverEn: 'More stress sounds.', type: 'video', miniGame: { type: 'match', config: { pairs: [['చ', 'చ్చ'], ['జ', 'జ్జ']] } }, quiz: [{ text: 'Which has "Cha" vatthu?', options: ['పిచ్చుక', 'అక్క'], correct: 0 }] },
        { id: 'c3_tel_tel_7', class: 'Class 3', title: 'Telugu Stories', subject: 'Telugu', description: 'Reading stories.', storyIntro: 'Sparky reads stories!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'Story characters', ruralExample: 'Grandma stories.', voiceOverEn: 'Stories are fun.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Story', 'కథ'], ['Book', 'పుస్తకం']] } }, quiz: [{ text: 'What is "Story"?', options: ['కథ', 'పాట'], correct: 0 }] },
        { id: 'c3_tel_tel_8', class: 'Class 3', title: 'Telugu Poems', subject: 'Telugu', description: 'Learning poems.', storyIntro: 'Sparky recites poems!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'Poem lines', ruralExample: 'Village songs.', voiceOverEn: 'Poems are musical.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Poem', 'పద్యం'], ['Song', 'పాట']] } }, quiz: [{ text: 'What is "Poem"?', options: ['పద్యం', 'కథ'], correct: 0 }] },
        { id: 'c3_tel_tel_9', class: 'Class 3', title: 'Telugu Grammar', subject: 'Telugu', description: 'Basic grammar.', storyIntro: 'Sparky learns rules!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'Nouns, Verbs', ruralExample: 'Correct speaking.', voiceOverEn: 'Grammar is important.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Noun', 'నామవాచకం'], ['Verb', 'క్రియ']] } }, quiz: [{ text: 'What is Noun?', options: ['నామవాచకం', 'క్రియ'], correct: 0 }] },
        { id: 'c3_tel_tel_10', class: 'Class 3', title: 'Telugu Culture', subject: 'Telugu', description: 'Learning traditions.', storyIntro: 'Sparky learns culture!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'Festivals, Food', ruralExample: 'Village traditions.', voiceOverEn: 'Our culture is great.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Festival', 'పండుగ'], ['Food', 'ఆహారం']] } }, quiz: [{ text: 'What is "Festival"?', options: ['పండుగ', 'పని'], correct: 0 }] }
      ]
    },
  },
  'Class 4': {
    'CBSE': {
      'English': [
        {
          id: 'c4_cbse_eng_1',
          class: 'Class 4',
          title: 'Nouns - Abstract and Collective',
          subject: 'English',
          description: 'Learning about feelings and groups.',
          storyIntro: 'Sparky learns about things he can feel but not touch!',
          videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o',
          visualExamples: 'Happiness (Abstract), A flock of birds (Collective)',
          ruralExample: 'A herd of cattle.',
          voiceOverEn: 'Abstract nouns are feelings, collective nouns are groups.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Happiness', 'Abstract'], ['Herd', 'Collective']] } },
          quiz: [{ text: 'Which is a collective noun?', options: ['Team', 'Sadness'], correct: 0 }]
        },
        { id: 'c4_cbse_eng_2', class: 'Class 4', title: 'Pronouns - Possessive', subject: 'English', description: 'Mine, Yours, His, Hers.', storyIntro: 'Sparky finds out who owns what!', videoUrl: 'https://www.youtube.com/watch?v=ZADSyQG_8-o', visualExamples: 'This book is mine.', ruralExample: 'This field is ours.', voiceOverEn: 'Possessive pronouns show ownership.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Mine', 'I'], ['Yours', 'You']] } }, quiz: [{ text: 'Which shows ownership?', options: ['His', 'He'], correct: 0 }] },
        { id: 'c4_cbse_eng_3', class: 'Class 4', title: 'Adjectives - Degree of Comparison', subject: 'English', description: 'Positive, Comparative, Superlative.', storyIntro: 'Sparky compares his magic stones!', videoUrl: 'https://www.youtube.com/watch?v=zPSzKp6yY8Q', visualExamples: 'Big, Bigger, Biggest', ruralExample: 'Tall, Taller, Tallest trees.', voiceOverEn: 'We use degrees to compare things.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Big', 'Positive'], ['Bigger', 'Comparative']] } }, quiz: [{ text: 'Superlative of Small?', options: ['Smallest', 'Smaller'], correct: 0 }] },
        { id: 'c4_cbse_eng_4', class: 'Class 4', title: 'Verbs - Tenses (Present and Past)', subject: 'English', description: 'Simple Present and Simple Past.', storyIntro: 'Sparky talks about today and yesterday!', videoUrl: 'https://www.youtube.com/watch?v=3G2dvo4L8N0', visualExamples: 'Eat/Ate, Play/Played', ruralExample: 'I walk to school. I walked to school.', voiceOverEn: 'Tenses tell us when things happen.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Today', 'Present'], ['Yesterday', 'Past']] } }, quiz: [{ text: 'Past tense of "Go"?', options: ['Went', 'Goes'], correct: 0 }] },
        { id: 'c4_cbse_eng_5', class: 'Class 4', title: 'Adverbs - Manner', subject: 'English', description: 'How an action is done.', storyIntro: 'Sparky does things carefully!', videoUrl: 'https://www.youtube.com/watch?v=3G2dvo4L8N0', visualExamples: 'Quickly, Slowly, Happily', ruralExample: 'The farmer works hard.', voiceOverEn: 'Adverbs describe verbs.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Quickly', 'Fast'], ['Slowly', 'Not fast']] } }, quiz: [{ text: 'Which is an adverb?', options: ['Quickly', 'Quick'], correct: 0 }] },
        { id: 'c4_cbse_eng_6', class: 'Class 4', title: 'Prepositions - Direction', subject: 'English', description: 'To, Into, Towards.', storyIntro: 'Sparky goes into the magic cave!', videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o', visualExamples: 'Into the room, Towards the park', ruralExample: 'Walking towards the village.', voiceOverEn: 'Prepositions show direction.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Into', '📥'], ['Towards', '➡️']] } }, quiz: [{ text: 'He jumped ___ the pool.', options: ['into', 'on'], correct: 0 }] },
        { id: 'c4_cbse_eng_7', class: 'Class 4', title: 'Conjunctions - Because, Or', subject: 'English', description: 'Reason and choice.', storyIntro: 'Sparky makes choices!', videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o', visualExamples: 'Tea or Coffee', ruralExample: 'I stayed home because it rained.', voiceOverEn: 'Conjunctions join ideas.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Reason', 'Because'], ['Choice', 'Or']] } }, quiz: [{ text: 'Do you want tea ___ milk?', options: ['or', 'because'], correct: 0 }] },
        { id: 'c4_cbse_eng_8', class: 'Class 4', title: 'Articles - Review', subject: 'English', description: 'A, An, The mastery.', storyIntro: 'Sparky uses articles like a pro!', videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o', visualExamples: 'The Moon, An Umbrella', ruralExample: 'A tractor in the field.', voiceOverEn: 'Articles are used before nouns.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Umbrella', 'An'], ['Moon', 'The']] } }, quiz: [{ text: '___ Earth', options: ['The', 'A'], correct: 0 }] },
        { id: 'c4_cbse_eng_9', class: 'Class 4', title: 'Punctuation - Question Mark, Exclamation', subject: 'English', description: 'Expressing feelings and asking.', storyIntro: 'Sparky asks questions and gets excited!', videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o', visualExamples: 'How are you? Wow!', ruralExample: 'What a beautiful sunset!', voiceOverEn: 'Use punctuation to show meaning.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Ask', '?'], ['Feel', '!']] } }, quiz: [{ text: 'Which is for questions?', options: ['?', '!'], correct: 0 }] },
        { id: 'c4_cbse_eng_10', class: 'Class 4', title: 'Sentence Structure - Subject and Predicate', subject: 'English', description: 'Parts of a sentence.', storyIntro: 'Sparky builds sentences!', videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o', visualExamples: 'The dog (Subject) is barking (Predicate).', ruralExample: 'The farmer (Subject) is sowing seeds (Predicate).', voiceOverEn: 'Every sentence has two parts.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Who', 'Subject'], ['What', 'Predicate']] } }, quiz: [{ text: 'Who does the action?', options: ['Subject', 'Predicate'], correct: 0 }] }
      ],
      'Mathematics': [
        {
          id: 'c4_cbse_math_1',
          class: 'Class 4',
          title: 'Numbers up to 10,000',
          subject: 'Mathematics',
          description: 'Reading and writing 4-digit numbers.',
          storyIntro: 'Sparky counts his magic stones!',
          videoUrl: 'https://www.youtube.com/watch?v=D0Ajq682yrA',
          visualExamples: '1000, 5000, 9999',
          ruralExample: 'Counting the population of a village.',
          voiceOverEn: 'Let us learn numbers up to 10,000.',
          type: 'video',
          miniGame: { type: 'count', config: { target: 1000 } },
          quiz: [{ text: 'What is 9999 + 1?', options: ['10,000', '9,990'], correct: 0 }]
        },
        { id: 'c4_cbse_math_2', class: 'Class 4', title: 'Place Value - Thousands', subject: 'Mathematics', description: 'Understanding Th H T O.', storyIntro: 'Sparky expands his number houses!', videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y', visualExamples: '4567 = 4 Th, 5 H, 6 T, 7 O', ruralExample: 'Bundles of 1000 sticks.', voiceOverEn: 'Place value helps us read big numbers.', type: 'video', miniGame: { type: 'match', config: { pairs: [['4000', '4 Thousands'], ['500', '5 Hundreds']] } }, quiz: [{ text: 'In 5678, what is 5?', options: ['Thousands', 'Hundreds'], correct: 0 }] },
        { id: 'c4_cbse_math_3', class: 'Class 4', title: 'Addition of 4-digit Numbers', subject: 'Mathematics', description: 'Adding with carrying.', storyIntro: 'Sparky adds more treasures!', videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y', visualExamples: '1234 + 5678 = 6912', ruralExample: 'Adding the harvest from two fields.', voiceOverEn: 'Add column by column.', type: 'video', miniGame: { type: 'count', config: { target: 1000 } }, quiz: [{ text: '1000 + 2000 = ?', options: ['3000', '2000'], correct: 0 }] },
        { id: 'c4_cbse_math_4', class: 'Class 4', title: 'Subtraction of 4-digit Numbers', subject: 'Mathematics', description: 'Subtracting with borrowing.', storyIntro: 'Sparky shares his treasures!', videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y', visualExamples: '5000 - 1234 = 3766', ruralExample: 'Selling grain from the granary.', voiceOverEn: 'Borrow from the next place if needed.', type: 'video', miniGame: { type: 'count', config: { target: 500 } }, quiz: [{ text: '2000 - 500 = ?', options: ['1500', '1000'], correct: 0 }] },
        { id: 'c4_cbse_math_5', class: 'Class 4', title: 'Multiplication by 2-digit Numbers', subject: 'Mathematics', description: 'Advanced multiplication.', storyIntro: 'Sparky multiplies big numbers!', videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y', visualExamples: '45 x 12 = 540', ruralExample: 'Calculating the cost of 12 bags of seeds.', voiceOverEn: 'Multiply step by step.', type: 'video', miniGame: { type: 'count', config: { target: 100 } }, quiz: [{ text: '10 x 10 = ?', options: ['100', '10'], correct: 0 }] },
        { id: 'c4_cbse_math_6', class: 'Class 4', title: 'Division with Remainder', subject: 'Mathematics', description: 'Dividing and finding what’s left.', storyIntro: 'Sparky shares and finds leftovers!', videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y', visualExamples: '13 / 4 = 3 R 1', ruralExample: 'Sharing sweets among friends.', voiceOverEn: 'The remainder is what is left over.', type: 'video', miniGame: { type: 'count', config: { target: 3 } }, quiz: [{ text: '10 / 3 = ?', options: ['3 R 1', '3 R 0'], correct: 0 }] },
        { id: 'c4_cbse_math_7', class: 'Class 4', title: 'Fractions - Introduction', subject: 'Mathematics', description: 'Parts of a whole.', storyIntro: 'Sparky cuts his magic cake!', videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y', visualExamples: '1/2, 1/4, 3/4', ruralExample: 'Dividing a field into parts.', voiceOverEn: 'Fractions are parts of a whole.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Half', '1/2'], ['Quarter', '1/4']] } }, quiz: [{ text: 'What is 1/2?', options: ['Half', 'Full'], correct: 0 }] },
        { id: 'c4_cbse_math_8', class: 'Class 4', title: 'Measurement - Capacity (L, mL)', subject: 'Mathematics', description: 'Measuring liquids.', storyIntro: 'Sparky measures his magic potion!', videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y', visualExamples: '1L = 1000mL', ruralExample: 'Measuring milk in the dairy.', voiceOverEn: 'We use liters and milliliters for liquids.', type: 'video', miniGame: { type: 'match', config: { pairs: [['1L', '1000mL'], ['Liquid', 'Liter']] } }, quiz: [{ text: '1000 mL = ?', options: ['1 Liter', '10 Liters'], correct: 0 }] },
        { id: 'c4_cbse_math_9', class: 'Class 4', title: 'Money - Bills and Change', subject: 'Mathematics', description: 'Calculating money.', storyIntro: 'Sparky goes to the market!', videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y', visualExamples: 'Rs 100 - Rs 45 = Rs 55', ruralExample: 'Buying vegetables at the village market.', voiceOverEn: 'Let us learn to calculate money.', type: 'video', miniGame: { type: 'count', config: { target: 50 } }, quiz: [{ text: 'Rs 50 + Rs 50 = ?', options: ['Rs 100', 'Rs 90'], correct: 0 }] },
        { id: 'c4_cbse_math_10', class: 'Class 4', title: 'Data Handling - Pictographs', subject: 'Mathematics', description: 'Representing data with pictures.', storyIntro: 'Sparky makes a chart of his stars!', videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y', visualExamples: '⭐ = 10 stars', ruralExample: 'Counting the number of trees in the orchard.', voiceOverEn: 'Pictographs use pictures to show data.', type: 'video', miniGame: { type: 'match', config: { pairs: [['⭐', '10'], ['⭐⭐', '20']] } }, quiz: [{ text: 'If 1 🍎 = 5, what is 🍎🍎?', options: ['10', '5'], correct: 0 }] }
      ],
      EVS: [
  {
    id: 'c4_cbse_1',
    class: 'Class 4',
    title: 'Going to School',
    subject: 'EVS',
    videoUrl: 'https://www.youtube.com/watch?v=wyU4JQ1b3UQ',
    type: 'video',
    miniGame: {
      type: 'match',
      config: {
        pairs: [
          ['Camel', 'Desert'],
          ['Boat', 'Water'],
          ['Bridge', 'River']
        ]
      }
    },
    quiz: [
      { text: 'Which is used in desert?', options: ['Camel', 'Bus'], correct: 0 },
      { text: 'Used in water?', options: ['Boat', 'Cycle'], correct: 0 },
      { text: 'Bridge is used to cross?', options: ['River', 'Road'], correct: 0 }
    ]
  },
  {
    id: 'c4_cbse_2',
    class: 'Class 4',
    title: 'Ear to Ear',
    subject: 'EVS',
    videoUrl: 'https://www.youtube.com/watch?v=Kz_Q2VCB2_Y',
    type: 'video',
    miniGame: {
      type: 'match',
      config: {
        pairs: [
          ['Elephant', 'Big ears'],
          ['Snake', 'No ears'],
          ['Dog', 'Small ears']
        ]
      }
    },
    quiz: [
      { text: 'Which animal has big ears?', options: ['Elephant', 'Cat'], correct: 0 },
      { text: 'Which has no ears?', options: ['Snake', 'Dog'], correct: 0 }
    ]
  },
  {
    id: 'c4_cbse_3',
    class: 'Class 4',
    title: 'A Day with Nandu',
    subject: 'EVS',
    videoUrl: 'https://www.youtube.com/watch?v=4siHWmgT2bQ',
    type: 'video',
    miniGame: {
      type: 'match',
      config: {
        pairs: [
          ['Herd', 'Group'],
          ['Female', 'Leader'],
          ['Trunk', 'Nose']
        ]
      }
    },
    quiz: [
      { text: 'Elephants live in?', options: ['Herd', 'Alone'], correct: 0 },
      { text: 'Leader is?', options: ['Female', 'Male'], correct: 0 }
    ]
  },
  {
    id: 'c4_cbse_4',
    class: 'Class 4',
    title: 'The Story of Amrita',
    subject: 'EVS',
    videoUrl: 'https://www.youtube.com/watch?v=2lh9_pvPkc4',
    type: 'video',
    miniGame: {
      type: 'match',
      config: {
        pairs: [
          ['Bishnoi', 'Community'],
          ['Khejri', 'Tree'],
          ['Protection', 'Nature']
        ]
      }
    },
    quiz: [
      { text: 'Who protected trees?', options: ['Bishnoi', 'British'], correct: 0 }
    ]
  },
  {
    id: 'c4_cbse_5',
    class: 'Class 4',
    title: 'Anita and Honeybees',
    subject: 'EVS',
    videoUrl: 'https://www.youtube.com/watch?v=4siHWmgT2bQ',
    type: 'video',
    miniGame: {
      type: 'match',
      config: {
        pairs: [
          ['Bee', 'Honey'],
          ['Hive', 'Home'],
          ['Flower', 'Food']
        ]
      }
    },
    quiz: [
      { text: 'Bees make?', options: ['Honey', 'Milk'], correct: 0 }
    ]
  }
],
      'Hindi': [
        {
          id: 'c4_cbse_hin_1',
          class: 'Class 4',
          title: 'Man ke Bhole-Bhale Badal',
          subject: 'Hindi',
          description: 'Poem about clouds.',
          storyIntro: 'Sparky looks at the funny clouds!',
          videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q',
          visualExamples: 'Clouds of different shapes',
          ruralExample: 'Clouds before the rain.',
          voiceOverEn: 'Clouds are like innocent children.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['बादल', '☁️'], ['बारिश', '🌧️']] } },
          quiz: [{ text: 'बादल कैसे हैं?', options: ['भोले-भाले', 'शरारती'], correct: 0 }]
        },
        { id: 'c4_cbse_hin_2', class: 'Class 4', title: 'Jaisa Sawal Waisa Jawab', subject: 'Hindi', description: 'Story of Birbal’s wit.', storyIntro: 'Sparky meets wise Birbal!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'Akbar, Birbal, Court', ruralExample: 'Wise people in the village.', voiceOverEn: 'Birbal was very clever.', type: 'video', miniGame: { type: 'match', config: { pairs: [['अकबर', '👑'], ['बीरबल', '🧠']] } }, quiz: [{ text: 'बीरबल कौन था?', options: ['मंत्री', 'सिपाही'], correct: 0 }] },
        { id: 'c4_cbse_hin_3', class: 'Class 4', title: 'Kirmanch ki Gend', subject: 'Hindi', description: 'Story about a ball and honesty.', storyIntro: 'Sparky finds a new ball!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'Ball, Children, Garden', ruralExample: 'Playing with a ball in the village.', voiceOverEn: 'Honesty is important.', type: 'video', miniGame: { type: 'match', config: { pairs: [['गेंद', '⚽'], ['दोस्त', '👦']] } }, quiz: [{ text: 'गेंद किसकी थी?', options: ['दिनेश की', 'रवि की'], correct: 0 }] },
        { id: 'c4_cbse_hin_4', class: 'Class 4', title: 'Papa Jab Bachche Thae', subject: 'Hindi', description: 'Story about a father’s childhood wishes.', storyIntro: 'Sparky hears about Papa’s dreams!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'Ice cream man, Watchman, Pilot', ruralExample: 'What do you want to be?', voiceOverEn: 'We all have dreams.', type: 'video', miniGame: { type: 'match', config: { pairs: [['आइसक्रीम वाला', '🍦'], ['चौकीदार', '🔦']] } }, quiz: [{ text: 'पापा क्या बनना चाहते थे?', options: ['बहुत कुछ', 'सिर्फ एक चीज़'], correct: 0 }] },
        { id: 'c4_cbse_hin_5', class: 'Class 4', title: 'Dost ki Poshak', subject: 'Hindi', description: 'Story about friendship and pride.', storyIntro: 'Sparky meets Naseeruddin!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'Naseeruddin, Friend, Achkan', ruralExample: 'Sharing clothes with friends.', voiceOverEn: 'True friends don’t show off.', type: 'video', miniGame: { type: 'match', config: { pairs: [['अचकन', '🧥'], ['दोस्त', '🤝']] } }, quiz: [{ text: 'नसीरुद्दीन ने क्या पहना था?', options: ['अचकन', 'कुर्ता'], correct: 0 }] },
        { id: 'c4_cbse_hin_6', class: 'Class 4', title: 'Nav Banao Nav Banao', subject: 'Hindi', description: 'Poem about making paper boats.', storyIntro: 'Sparky makes a paper boat!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'Paper boat, Rain, Puddle', ruralExample: 'Floating boats in the rain water.', voiceOverEn: 'Let’s make a boat!', type: 'video', miniGame: { type: 'match', config: { pairs: [['नाव', '⛵'], ['काग़ज़', '📄']] } }, quiz: [{ text: 'नाव किससे बनी थी?', options: ['काग़ज़', 'लकड़ी'], correct: 0 }] },
        { id: 'c4_cbse_hin_7', class: 'Class 4', title: 'Dan ka Hisab', subject: 'Hindi', description: 'Story about a stingy king and a wise man.', storyIntro: 'Sparky meets a greedy king!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'King, Sanyasi, Charity', ruralExample: 'Helping the needy.', voiceOverEn: 'Kindness is better than greed.', type: 'video', miniGame: { type: 'match', config: { pairs: [['राजा', '💰'], ['संन्यासी', '🙏']] } }, quiz: [{ text: 'राजा कैसा था?', options: ['कंजूस', 'दयालु'], correct: 0 }] },
        { id: 'c4_cbse_hin_8', class: 'Class 4', title: 'Kaun?', subject: 'Hindi', description: 'Poem about a mischievous mouse.', storyIntro: 'Sparky finds a mouse in the house!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'Mouse, Nibbled clothes, Books', ruralExample: 'Mice in the granary.', voiceOverEn: 'Who is doing all this mischief?', type: 'video', miniGame: { type: 'match', config: { pairs: [['चूहा', '🐭'], ['शरारत', '🧀']] } }, quiz: [{ text: 'चीज़ें कौन कुतर रहा था?', options: ['चूहा', 'बिल्ली'], correct: 0 }] },
        { id: 'c4_cbse_hin_9', class: 'Class 4', title: 'Swatantrata ki Ore', subject: 'Hindi', description: 'Story about Gandhi and the Dandi March.', storyIntro: 'Sparky joins the Dandi March!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'Gandhi, Charkha, Salt', ruralExample: 'Learning about freedom fighters.', voiceOverEn: 'Freedom is our right.', type: 'video', miniGame: { type: 'match', config: { pairs: [['गाँधी', '👓'], ['चरखा', '🧵']] } }, quiz: [{ text: 'धनी कहाँ रहता था?', options: ['साबरमती आश्रम', 'गाँव'], correct: 0 }] },
        { id: 'c4_cbse_hin_10', class: 'Class 4', title: 'Thapp Roti Thapp Dal', subject: 'Hindi', description: 'Play about children playing house.', storyIntro: 'Sparky plays with the children!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'Children, Play kitchen, Roti', ruralExample: 'Children playing "Ghar-Ghar".', voiceOverEn: 'Playing together is fun.', type: 'video', miniGame: { type: 'match', config: { pairs: [['रोटी', '🫓'], ['दाल', '🥣']] } }, quiz: [{ text: 'बच्चే क्या खेल रहे थे?', options: ['खेल-खेल में खाना बनाना', 'छुपन-छुपाई'], correct: 0 }] }
      ],
      'Telugu': [
        {
          id: 'c4_cbse_tel_1',
          class: 'Class 4',
          title: 'Telugu Vatthulu - Review',
          subject: 'Telugu',
          description: 'Review of consonant signs.',
          storyIntro: 'Sparky practices his Telugu writing!',
          videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4',
          visualExamples: 'క్క, గ్గ, చ్చ, జ్జ',
          ruralExample: 'Reading village names.',
          voiceOverEn: 'Let us review the stress sounds.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['క', 'క్క'], ['గ', 'గ్గ']] } },
          quiz: [{ text: 'Which has "Ka" vatthu?', options: ['అక్క', 'అమ్మ'], correct: 0 }]
        },
        { id: 'c4_cbse_tel_2', class: 'Class 4', title: 'Samyuktaksharaalu', subject: 'Telugu', description: 'Mixed consonant clusters.', storyIntro: 'Sparky learns complex sounds!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'క్ష, త్ర, జ్ఞ', ruralExample: 'పక్షి (Bird).', voiceOverEn: 'Mixed sounds are interesting.', type: 'video', miniGame: { type: 'match', config: { pairs: [['క+ష', 'క్ష'], ['త+ర', 'త్ర']] } }, quiz: [{ text: 'Which is "Ksha"?', options: ['క్ష', 'త్ర'], correct: 0 }] },
        { id: 'c4_cbse_tel_3', class: 'Class 4', title: 'Telugu Padyalu - Vemana', subject: 'Telugu', description: 'Moral poems by Vemana.', storyIntro: 'Sparky learns wisdom from Vemana!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'Vemana, Poem lines', ruralExample: 'Moral stories told in the village.', voiceOverEn: 'Vemana poems teach us values.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Vemana', 'Poet'], ['Moral', 'Value']] } }, quiz: [{ text: 'Who wrote these poems?', options: ['Vemana', 'Sumati'], correct: 0 }] },
        { id: 'c4_cbse_tel_4', class: 'Class 4', title: 'Telugu Padyalu - Sumati', subject: 'Telugu', description: 'Moral poems from Sumati Satakam.', storyIntro: 'Sparky learns more wisdom!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'Sumati, Poem lines', ruralExample: 'Learning good habits.', voiceOverEn: 'Sumati poems are for children.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Sumati', 'Wise'], ['Satakam', '100 poems']] } }, quiz: [{ text: 'Is Sumati Satakam for kids?', options: ['Yes', 'No'], correct: 0 }] },
        { id: 'c4_cbse_tel_5', class: 'Class 4', title: 'Telugu Stories - Tenali Ramakrishna', subject: 'Telugu', description: 'Witty stories of Tenali Rama.', storyIntro: 'Sparky laughs with Tenali Rama!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'Tenali Rama, King, Wit', ruralExample: 'Witty people in the village.', voiceOverEn: 'Tenali Rama was very clever.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Tenali Rama', 'Clever'], ['King', 'Akbar']] } }, quiz: [{ text: 'Who was Tenali Rama?', options: ['Poet/Wit', 'Soldier'], correct: 0 }] },
        { id: 'c4_cbse_tel_6', class: 'Class 4', title: 'Telugu Grammar - Parts of Speech', subject: 'Telugu', description: 'Nouns and Pronouns.', storyIntro: 'Sparky learns Telugu grammar!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'నామవాచకం, సర్వనామం', ruralExample: 'Correct Telugu speaking.', voiceOverEn: 'Grammar helps us speak correctly.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Noun', 'నామవాచకం'], ['Pronoun', 'సర్వనామం']] } }, quiz: [{ text: 'What is Noun?', options: ['నామవాచకం', 'క్రియ'], correct: 0 }] },
        { id: 'c4_cbse_tel_7', class: 'Class 4', title: 'Telugu Grammar - Verbs and Adverbs', subject: 'Telugu', description: 'Action and describing actions.', storyIntro: 'Sparky learns more grammar!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'క్రియ, విశేషణం', ruralExample: 'Describing how we work.', voiceOverEn: 'Verbs are actions.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Verb', 'క్రియ'], ['Adjective', 'విశేషణం']] } }, quiz: [{ text: 'What is Verb?', options: ['క్రియ', 'నామవాచకం'], correct: 0 }] },
        { id: 'c4_cbse_tel_8', class: 'Class 4', title: 'Telugu Numbers 51-100', subject: 'Telugu', description: 'Counting to 100.', storyIntro: 'Sparky counts to 100!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: '౫౧ to ౧౦౦', ruralExample: 'Counting harvest bags.', voiceOverEn: 'Let us count to 100.', type: 'video', miniGame: { type: 'count', config: { target: 75 } }, quiz: [{ text: 'What is 100?', options: ['వంద', 'యాభై'], correct: 0 }] },
        { id: 'c4_cbse_tel_9', class: 'Class 4', title: 'Telugu Months and Seasons', subject: 'Telugu', description: 'Time and Weather.', storyIntro: 'Sparky learns about the year!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'Seasons, Months', ruralExample: 'Harvest seasons.', voiceOverEn: 'There are six seasons in Telugu.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Summer', 'ఎండకాలం'], ['Winter', 'చలికాలం']] } }, quiz: [{ text: 'How many seasons?', options: ['6', '4'], correct: 0 }] },
        { id: 'c4_cbse_tel_10', class: 'Class 4', title: 'Telugu Culture - Festivals', subject: 'Telugu', description: 'Traditions of Telangana and AP.', storyIntro: 'Sparky celebrates Telugu festivals!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'Sankranti, Ugadi, Bathukamma', ruralExample: 'Village festival celebrations.', voiceOverEn: 'Our festivals are colorful.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Ugadi', 'New Year'], ['Sankranti', 'Harvest']] } }, quiz: [{ text: 'Which is the harvest festival?', options: ['Sankranti', 'Ugadi'], correct: 0 }] }
      ]
    },
    'Telangana State Board': {
      'English': [
        {
          id: 'c4_tel_eng_1',
          class: 'Class 4',
          title: 'The Miller, His Son and Their Donkey',
          subject: 'English',
          description: 'Story about trying to please everyone.',
          storyIntro: 'Sparky meets a miller and his donkey!',
          videoUrl: 'https://youtu.be/m6M-b3GUV_o?feature=shared',
          visualExamples: 'Miller, Son, Donkey',
          ruralExample: 'Village markets and animals.',
          voiceOverEn: 'You cannot please everyone.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Miller', 'Father'], ['Son', 'Child']] } },
          quiz: [{ text: 'Who were they trying to please?', options: ['Everyone', 'No one'], correct: 0 }]
        },
        { id: 'c4_tel_eng_2', class: 'Class 4', title: 'The Brave Boy', subject: 'English', description: 'Story of courage.', storyIntro: 'Sparky meets a brave boy!', videoUrl: 'https://youtu.be/Xy0DbVC6YvA?feature=shared', visualExamples: 'Boy, River, Rescue', ruralExample: 'Helping others in the village.', voiceOverEn: 'Courage is being brave.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Boy', 'Brave'], ['River', 'Water']] } }, quiz: [{ text: 'What did the boy do?', options: ['Rescued someone', 'Ran away'], correct: 0 }] },
        { id: 'c4_tel_eng_3', class: 'Class 4', title: 'The Tree and the Reed', subject: 'English', description: 'Story about being flexible.', storyIntro: 'Sparky watches a storm!', videoUrl: 'https://youtu.be/js8zB6n6jW8?feature=shared', visualExamples: 'Oak tree, Reed, Wind', ruralExample: 'Trees in the village fields.', voiceOverEn: 'Flexibility is strength.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Tree', 'Rigid'], ['Reed', 'Flexible']] } }, quiz: [{ text: 'Who survived the storm?', options: ['Reed', 'Tree'], correct: 0 }] },
        { id: 'c4_tel_eng_4', class: 'Class 4', title: 'Our Country', subject: 'English', description: 'Learning about India.', storyIntro: 'Sparky explores India!', videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o', visualExamples: 'Flag, Map, Symbols', ruralExample: 'Celebrating Independence Day in the village.', voiceOverEn: 'I love my country.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Flag', 'Tricolor'], ['Peacock', 'Bird']] } }, quiz: [{ text: 'What is our national bird?', options: ['Peacock', 'Parrot'], correct: 0 }] },
        { id: 'c4_tel_eng_5', class: 'Class 4', title: 'The Magic Mirror', subject: 'English', description: 'Story about truth.', storyIntro: 'Sparky finds a magic mirror!', videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o', visualExamples: 'Mirror, Reflection, Truth', ruralExample: 'Old folk tales.', voiceOverEn: 'The mirror shows the truth.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Mirror', 'Magic'], ['Truth', 'Value']] } }, quiz: [{ text: 'What does the mirror show?', options: ['Truth', 'Lies'], correct: 0 }] },
        { id: 'c4_tel_eng_6', class: 'Class 4', title: 'Action Words - Review', subject: 'English', description: 'Verbs in sentences.', storyIntro: 'Sparky is busy!', videoUrl: 'https://www.youtube.com/watch?v=3G2dvo4L8N0', visualExamples: 'Running, Eating, Writing', ruralExample: 'Farmers working.', voiceOverEn: 'Verbs are action words.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Run', '🏃'], ['Eat', '🍽️']] } }, quiz: [{ text: 'Which is an action?', options: ['Run', 'Book'], correct: 0 }] },
        { id: 'c4_tel_eng_7', class: 'Class 4', title: 'Describing Words - Review', subject: 'English', description: 'Adjectives in sentences.', storyIntro: 'Sparky describes everything!', videoUrl: 'https://www.youtube.com/watch?v=zPSzKp6yY8Q', visualExamples: 'Beautiful, Large, Green', ruralExample: 'The large banyan tree.', voiceOverEn: 'Adjectives describe nouns.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Tree', 'Large'], ['Flower', 'Beautiful']] } }, quiz: [{ text: 'Which is a describing word?', options: ['Beautiful', 'Tree'], correct: 0 }] },
        { id: 'c4_tel_eng_8', class: 'Class 4', title: 'Naming Words - Review', subject: 'English', description: 'Nouns in sentences.', storyIntro: 'Sparky names things!', videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o', visualExamples: 'Village, School, Teacher', ruralExample: 'Names of village landmarks.', voiceOverEn: 'Nouns are naming words.', type: 'video', miniGame: { type: 'match', config: { pairs: [['School', 'Place'], ['Teacher', 'Person']] } }, quiz: [{ text: 'Which is a place?', options: ['School', 'Boy'], correct: 0 }] },
        { id: 'c4_tel_eng_9', class: 'Class 4', title: 'Singular and Plural', subject: 'English', description: 'One and many.', storyIntro: 'Sparky counts his friends!', videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o', visualExamples: 'Boy/Boys, Tree/Trees', ruralExample: 'One cow, many cows.', voiceOverEn: 'Plural means more than one.', type: 'video', miniGame: { type: 'match', config: { pairs: [['One', 'Singular'], ['Many', 'Plural']] } }, quiz: [{ text: 'Plural of "Cat"?', options: ['Cats', 'Cat'], correct: 0 }] },
        { id: 'c4_tel_eng_10', class: 'Class 4', title: 'Opposites - Review', subject: 'English', description: 'Antonyms.', storyIntro: 'Sparky finds differences!', videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o', visualExamples: 'Hot/Cold, Big/Small', ruralExample: 'Day and Night.', voiceOverEn: 'Opposites are antonyms.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Hot', 'Cold'], ['Big', 'Small']] } }, quiz: [{ text: 'Opposite of "Up"?', options: ['Down', 'Left'], correct: 0 }] }
      ],
      'Mathematics': [
        {
          id: 'c4_tel_math_1',
          class: 'Class 4',
          title: 'Numbers up to 10,000',
          subject: 'Mathematics',
          description: 'Understanding 4-digit numbers.',
          storyIntro: 'Sparky counts his magic seeds!',
          videoUrl: 'https://youtu.be/vZ3Y3qm0geo?feature=shared',
          visualExamples: '1000, 5000, 9999',
          ruralExample: 'Counting the number of bricks for a house.',
          voiceOverEn: 'Let us learn 4-digit numbers.',
          type: 'video',
          miniGame: { type: 'count', config: { target: 1000 } },
          quiz: [{ text: 'What is 1000 + 1000?', options: ['2000', '1000'], correct: 0 }]
        },
        { id: 'c4_tel_math_2', class: 'Class 4', title: 'Addition with Carrying', subject: 'Mathematics', description: 'Adding big numbers.', storyIntro: 'Sparky adds his treasures!', videoUrl: 'https://youtu.be/iTjfdgtE328?feature=shared', visualExamples: '1234 + 5678', ruralExample: 'Adding the weight of two bags of rice.', voiceOverEn: 'Carry over the extra.', type: 'video', miniGame: { type: 'count', config: { target: 1000 } }, quiz: [{ text: '500 + 600 = ?', options: ['1100', '1000'], correct: 0 }] },
        { id: 'c4_tel_math_3', class: 'Class 4', title: 'Subtraction with Borrowing', subject: 'Mathematics', description: 'Subtracting big numbers.', storyIntro: 'Sparky shares his seeds!', videoUrl: 'https://youtu.be/n9_oZE274q0?si=DUdBwvZZIXCwjE39', visualExamples: '5000 - 1234', ruralExample: 'Selling items at the village shop.', voiceOverEn: 'Borrow from the next place.', type: 'video', miniGame: { type: 'count', config: { target: 500 } }, quiz: [{ text: '1000 - 200 = ?', options: ['800', '700'], correct: 0 }] },
        { id: 'c4_tel_math_4', class: 'Class 4', title: 'Multiplication', subject: 'Mathematics', description: 'Multiplying 3-digit by 1-digit.', storyIntro: 'Sparky multiplies his magic!', videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y', visualExamples: '123 x 4', ruralExample: 'Calculating the number of seeds in 4 rows.', voiceOverEn: 'Multiply each place.', type: 'video', miniGame: { type: 'count', config: { target: 100 } }, quiz: [{ text: '100 x 5 = ?', options: ['500', '100'], correct: 0 }] },
        { id: 'c4_tel_math_5', class: 'Class 4', title: 'Division', subject: 'Mathematics', description: 'Dividing 3-digit by 1-digit.', storyIntro: 'Sparky shares equally!', videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y', visualExamples: '400 / 4 = 100', ruralExample: 'Sharing harvest among 4 families.', voiceOverEn: 'Divide equally.', type: 'video', miniGame: { type: 'count', config: { target: 100 } }, quiz: [{ text: '200 / 2 = ?', options: ['100', '200'], correct: 0 }] },
        { id: 'c4_tel_math_6', class: 'Class 4', title: 'Fractions', subject: 'Mathematics', description: 'Parts of a whole.', storyIntro: 'Sparky cuts his magic cake!', videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y', visualExamples: '1/2, 1/4', ruralExample: 'Dividing a field.', voiceOverEn: 'Fractions are parts.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Half', '1/2'], ['Quarter', '1/4']] } }, quiz: [{ text: 'What is 1/4?', options: ['Quarter', 'Half'], correct: 0 }] },
        { id: 'c4_tel_math_7', class: 'Class 4', title: 'Measurement - Length', subject: 'Mathematics', description: 'Meters and Centimeters.', storyIntro: 'Sparky measures his wand!', videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y', visualExamples: '1m = 100cm', ruralExample: 'Measuring the length of a room.', voiceOverEn: 'We use meters for length.', type: 'video', miniGame: { type: 'match', config: { pairs: [['1m', '100cm'], ['Length', 'Meter']] } }, quiz: [{ text: '100 cm = ?', options: ['1m', '10m'], correct: 0 }] },
        { id: 'c4_tel_math_8', class: 'Class 4', title: 'Measurement - Weight', subject: 'Mathematics', description: 'Kilograms and Grams.', storyIntro: 'Sparky weighs his treasures!', videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y', visualExamples: '1kg = 1000g', ruralExample: 'Weighing vegetables.', voiceOverEn: 'We use kilograms for weight.', type: 'video', miniGame: { type: 'match', config: { pairs: [['1kg', '1000g'], ['Weight', 'Kilogram']] } }, quiz: [{ text: '1000 g = ?', options: ['1kg', '10kg'], correct: 0 }] },
        { id: 'c4_tel_math_9', class: 'Class 4', title: 'Time', subject: 'Mathematics', description: 'Reading the clock.', storyIntro: 'Sparky knows the time!', videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y', visualExamples: 'Hours, Minutes, Seconds', ruralExample: 'Telling time for the village bus.', voiceOverEn: 'Time is precious.', type: 'video', miniGame: { type: 'match', config: { pairs: [['60 min', '1 hour'], ['60 sec', '1 min']] } }, quiz: [{ text: 'How many minutes in an hour?', options: ['60', '30'], correct: 0 }] },
        { id: 'c4_tel_math_10', class: 'Class 4', title: 'Data Handling', subject: 'Mathematics', description: 'Tally marks.', storyIntro: 'Sparky counts the birds!', videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y', visualExamples: 'Tally marks, Tables', ruralExample: 'Counting cattle in the village.', voiceOverEn: 'Data helps us organize.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Tally', 'Count'], ['Table', 'Data']] } }, quiz: [{ text: 'What is a tally mark?', options: ['A mark for counting', 'A drawing'], correct: 0 }] }
      ],
      'Telugu': [
        {
          id: 'c4_tel_tel_1',
          class: 'Class 4',
          title: 'Lesson 1: గాంధీ మహాత్ముడు 🇮🇳',
          subject: 'Telugu',
          description: 'Learning about Mahatma Gandhi.',
          storyIntro: 'Sparky learns about the Father of our Nation!',
          videoUrl: 'https://youtu.be/UUifYT_LziE?si=kZWAchWCbgM4ixd2',
          visualExamples: 'Gandhi, Charkha, Salt March',
          ruralExample: 'Gandhi statues in the village square.',
          voiceOverEn: 'Mahatma Gandhi was a great leader.',
          voiceOverTe: 'గాంధీ మహాత్ముడు గొప్ప నాయకుడు.',
          voiceOverHi: 'महात्मा गांधी एक महान नेता थे।',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Gandhi', 'Leader'], ['Charkha', 'Spinning']] } },
          quiz: [{ text: 'Who is the Father of our Nation?', options: ['Mahatma Gandhi', 'Nehru'], correct: 0 }]
        },
        {
          id: 'c4_tel_tel_2',
          class: 'Class 4',
          title: 'Lesson 2: గోపాల్ తెలివి 🧠',
          subject: 'Telugu',
          description: 'The wit of Gopal.',
          storyIntro: 'Sparky meets clever Gopal!',
          videoUrl: 'https://youtu.be/gvApeXTGXns?si=ys37wmAsb_Kr9izY',
          visualExamples: 'Gopal, King, Clever ideas',
          ruralExample: 'Witty people in the village.',
          voiceOverEn: 'Gopal was very clever.',
          voiceOverTe: 'గోపాల్ చాలా తెలివైనవాడు.',
          voiceOverHi: 'गोपाल बहुत चतुर था।',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Gopal', 'Clever'], ['King', 'Ruler']] } },
          quiz: [{ text: 'Was Gopal clever?', options: ['Yes', 'No'], correct: 0 }]
        },
        {
          id: 'c4_tel_tel_3',
          class: 'Class 4',
          title: 'Lesson 3: దేశమును ప్రేమించుమన్న 🇮🇳',
          subject: 'Telugu',
          description: 'Patriotic poem.',
          storyIntro: 'Sparky sings a patriotic song!',
          videoUrl: 'https://youtu.be/lnZCy-bkh_0?si=WnAdz2i0-T1qEO_Z',
          visualExamples: 'India map, Flag, People',
          ruralExample: 'Singing patriotic songs in school.',
          voiceOverEn: 'Love your country.',
          voiceOverTe: 'దేశమును ప్రేమించుమన్న.',
          voiceOverHi: 'अपने देश से प्यार करो।',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Country', 'India'], ['Love', 'Respect']] } },
          quiz: [{ text: 'Should we love our country?', options: ['Yes', 'No'], correct: 0 }]
        }
      ],
      EVS: [
  {
    id: 'c4_tel_1',
    class: 'Class 4',
    title: 'Family',
    subject: 'EVS',
    videoUrl: 'https://www.youtube.com/watch?v=--Vohkh1Who',
    type: 'video',
    miniGame: {
      type: 'match',
      config: {
        pairs: [
          ['Father', '👨'],
          ['Mother', '👩'],
          ['Family', 'Love']
        ]
      }
    },
    quiz: [
      { text: 'Family means?', options: ['Love', 'Fight'], correct: 0 }
    ]
  },
  {
    id: 'c4_tel_2',
    class: 'Class 4',
    title: 'Who Does What Work',
    subject: 'EVS',
    videoUrl: 'https://www.youtube.com/watch?v=A668OHSt2B0',
    type: 'video',
    miniGame: {
      type: 'match',
      config: {
        pairs: [
          ['Farmer', 'Field'],
          ['Teacher', 'School'],
          ['Doctor', 'Hospital']
        ]
      }
    },
    quiz: [
      { text: 'Who works in hospital?', options: ['Doctor', 'Farmer'], correct: 0 }
    ]
  },
  {
    id: 'c4_tel_3',
    class: 'Class 4',
    title: 'Let Us Play',
    subject: 'EVS',
    videoUrl: 'https://www.youtube.com/watch?v=UmCpwXSmh3U',
    type: 'video',
    miniGame: {
      type: 'match',
      config: {
        pairs: [
          ['Cricket', 'Bat'],
          ['Football', 'Ball'],
          ['Kabaddi', 'Team']
        ]
      }
    },
    quiz: [
      { text: 'Which game uses bat?', options: ['Cricket', 'Football'], correct: 0 }
    ]
  },
  {
    id: 'c4_tel_4',
    class: 'Class 4',
    title: 'Shelters of Animals',
    subject: 'EVS',
    videoUrl: 'https://www.youtube.com/watch?v=KPvzOMREaYk',
    type: 'video',
    miniGame: {
      type: 'match',
      config: {
        pairs: [
          ['Bird', 'Nest'],
          ['Dog', 'Kennel'],
          ['Lion', 'Den']
        ]
      }
    },
    quiz: [
      { text: 'Dog lives in?', options: ['Kennel', 'Nest'], correct: 0 }
    ]
  },
  {
    id: 'c4_tel_5',
    class: 'Class 4',
    title: 'Plants Around Us',
    subject: 'EVS',
    videoUrl: 'https://www.youtube.com/watch?v=KPvzOMREaYk',
    type: 'video',
    miniGame: {
      type: 'match',
      config: {
        pairs: [
          ['Tree', 'Big plant'],
          ['Shrub', 'Medium'],
          ['Herb', 'Small']
        ]
      }
    },
    quiz: [
      { text: 'Big plant is?', options: ['Tree', 'Grass'], correct: 0 }
    ]
  }
],
      'Hindi': [
        {
          id: 'c4_tel_hin_1',
          class: 'Class 4',
          title: 'Lesson 1',
          subject: 'Hindi',
          description: 'Hindi Lesson 1 for Class 4.',
          storyIntro: 'Sparky starts his first Hindi lesson in Class 4!',
          videoUrl: 'https://youtu.be/2yOt_xZGBlU?si=Hey96NxH4IRBMb5x',
          visualExamples: 'Hindi alphabet, basic words',
          ruralExample: 'Learning Hindi in the village school.',
          voiceOverEn: 'Welcome to your first Hindi lesson.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Hindi', 'Language'], ['Class 4', 'Level']] } },
          quiz: [{ text: 'Is this Lesson 1?', options: ['Yes', 'No'], correct: 0 }]
        },
        {
          id: 'c4_tel_hin_2',
          class: 'Class 4',
          title: 'Lesson 2',
          subject: 'Hindi',
          description: 'Hindi Lesson 2 for Class 4.',
          storyIntro: 'Sparky continues his Hindi journey!',
          videoUrl: 'https://youtu.be/M5f6OoBhjJs?feature=shared',
          visualExamples: 'Sentences, conversation',
          ruralExample: 'Talking to friends in Hindi.',
          voiceOverEn: 'Let us learn more Hindi words.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Hindi', 'Language'], ['Class 4', 'Level']] } },
          quiz: [{ text: 'Is this Lesson 2?', options: ['Yes', 'No'], correct: 0 }]
        },
        {
          id: 'c4_tel_hin_3',
          class: 'Class 4',
          title: 'Lesson 3',
          subject: 'Hindi',
          description: 'Hindi Lesson 3 for Class 4.',
          storyIntro: 'Sparky learns more Hindi!',
          videoUrl: 'https://youtu.be/WpHE79n4Ldw?feature=shared',
          visualExamples: 'Stories, poems',
          ruralExample: 'Reading stories in Hindi.',
          voiceOverEn: 'Hindi is a beautiful language.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Hindi', 'Language'], ['Class 4', 'Level']] } },
          quiz: [{ text: 'Is this Lesson 3?', options: ['Yes', 'No'], correct: 0 }]
        }
      ]
    }
  },
  'Class 5': {
    'CBSE': {
      'English': [
        {
          id: 'c5_cbse_eng_1',
          class: 'Class 5',
          title: 'Ice-cream Man',
          subject: 'English',
          description: 'A delightful poem about the joy of ice-cream in the scorching summer heat.',
          storyIntro: 'Sparky hears a cheerful bell ringing! It’s the Ice-cream Man with his colorful cart. What’s your favorite flavor?',
          videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o',
          visualExamples: 'Ice-cream cart, Cones, Chocolate, Vanilla, Strawberry flavors',
          ruralExample: 'The kulfi seller ringing his bell in the village square.',
          voiceOverEn: 'When summer is in the city, and bricks a blaze of heat, the Ice-cream Man with his little cart goes trundling down the street.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Vanilla', 'Flavor'], ['Cone', 'Shape'], ['Summer', 'Season']] } },
          quiz: [
            { text: 'Who brings the ice-cream in the poem?', options: ['Ice-cream Man', 'Milkman', 'Postman'], correct: 0 },
            { text: 'What are the three flavors mentioned?', options: ['Vanilla, Chocolate, Strawberry', 'Mango, Apple, Orange'], correct: 0 }
          ]
        },
        {
          id: 'c5_cbse_eng_2',
          class: 'Class 5',
          title: 'Wonderful Waste',
          subject: 'English',
          description: 'A story about how a wise cook turned vegetable scraps into a famous dish.',
          storyIntro: 'Sparky is in the King’s kitchen! He sees a pile of vegetable waste. Can we make something yummy from it?',
          videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o',
          visualExamples: 'Vegetable scraps, Avial dish, Coconut, Green chillies',
          ruralExample: 'Making useful compost or "Avial" like dishes from kitchen leftovers.',
          voiceOverEn: 'Waste can be wonderful! Let us see how the Maharaja of Travancore saved the day.',
          type: 'video',
          miniGame: { type: 'drag_drop', config: { item: 'vegetable', target: 'pot' } },
          quiz: [
            { text: 'What was the name of the dish made from waste?', options: ['Avial', 'Sambar', 'Rasam'], correct: 0 },
            { text: 'Who ordered the cook to use the waste?', options: ['The Maharaja', 'The Queen', 'The Minister'], correct: 0 }
          ]
        },
        {
          id: 'c5_cbse_eng_3',
          class: 'Class 5',
          title: 'Teamwork',
          subject: 'English',
          description: 'A poem that teaches the importance of working together to achieve a goal.',
          storyIntro: 'Sparky is playing basketball! He realizes he can’t win alone. Let’s learn how to work as a team!',
          videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o',
          visualExamples: 'Basketball team, Relay race baton, Group project',
          ruralExample: 'Villagers coming together to build a community well.',
          voiceOverEn: 'Teamwork, teamwork, we can make our dream work! Together we can share the joy of what we have done.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Team', 'Together'], ['Work', 'Action'], ['Goal', 'Success']] } },
          quiz: [
            { text: 'What is needed to pass in a relay race?', options: ['Baton', 'Ball', 'Whistle'], correct: 0 },
            { text: 'Can you play basketball without passing the ball?', options: ['No', 'Yes'], correct: 0 }
          ]
        },
        {
          id: 'c5_cbse_eng_4',
          class: 'Class 5',
          title: 'Flying Together',
          subject: 'English',
          description: 'A wise story about a flock of geese and the importance of listening to elders.',
          storyIntro: 'Sparky meets a wise old goose! The goose warns the others about a small creeper. Will they listen?',
          videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o',
          visualExamples: 'Flock of geese, Tall tree, Hunter, Net, Creeper',
          ruralExample: 'Birds nesting in the old banyan tree near the village pond.',
          voiceOverEn: 'Wisdom comes with age. Let us see what happens when the geese ignore the old bird.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Wise', 'Old Goose'], ['Hunter', 'Net'], ['Creeper', 'Ladder']] } },
          quiz: [
            { text: 'Who gave the advice to destroy the creeper?', options: ['Wise Old Goose', 'Young Goose', 'The Hunter'], correct: 0 },
            { text: 'How did the geese escape the net?', options: ['By pretending to be dead', 'By fighting', 'By cutting the net'], correct: 0 }
          ]
        },
        {
          id: 'c5_cbse_eng_5',
          class: 'Class 5',
          title: 'My Shadow',
          subject: 'English',
          description: 'A fun poem about a child’s curiosity regarding their own shadow.',
          storyIntro: 'Sparky is playing in the sun! He notices a little friend following him everywhere. It’s his shadow!',
          videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o',
          visualExamples: 'Shadow, Sun, Light source, Morning vs Noon shadows',
          ruralExample: 'Long shadows cast by trees during sunset in the fields.',
          voiceOverEn: 'I have a little shadow that goes in and out with me, and what can be the use of him is more than I can see.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Light', 'Shadow'], ['Sun', 'Source'], ['Morning', 'Long Shadow']] } },
          quiz: [
            { text: 'When does the shadow disappear?', options: ['In the dark', 'In the sun', 'At noon'], correct: 0 },
            { text: 'Is the shadow always the same size?', options: ['No', 'Yes'], correct: 0 }
          ]
        },
        {
          id: 'c5_cbse_eng_6',
          class: 'Class 5',
          title: 'Robinson Crusoe',
          subject: 'English',
          description: 'The exciting story of Robinson Crusoe discovering a footprint on a lonely island.',
          storyIntro: 'Sparky is on a deserted island! Suddenly, he sees a single footprint on the sand. Who could it be?',
          videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o',
          visualExamples: 'Island, Footprint, Cave, Boat, Shore',
          ruralExample: 'Tracking animal footprints in the soft mud after rain.',
          voiceOverEn: 'One day, when I was going towards my boat, I was surprised to see the footprint of a man on the sand.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Island', 'Isolated'], ['Footprint', 'Mark'], ['Cave', 'Shelter']] } },
          quiz: [
            { text: 'What did Robinson Crusoe find on the sand?', options: ['A footprint', 'A treasure chest', 'A boat'], correct: 0 },
            { text: 'How did he feel when he saw the footprint?', options: ['Frightened', 'Happy', 'Excited'], correct: 0 }
          ]
        },
        {
          id: 'c5_cbse_eng_7',
          class: 'Class 5',
          title: 'Crying',
          subject: 'English',
          description: 'A poem that explores emotions and the relief that comes after a good cry.',
          storyIntro: 'Sparky is feeling a bit sad today. He learns that it’s okay to cry, but happiness follows!',
          videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o',
          visualExamples: 'Tears, Smile, Splash in the shower, Happiness',
          ruralExample: 'Children sharing their feelings and laughing together after a small fight.',
          voiceOverEn: 'Crying only a little bit is no use. You must cry until your pillow is soaked!',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Cry', 'Sad'], ['Smile', 'Happy'], ['Shower', 'Splash']] } },
          quiz: [
            { text: 'What should you do after crying a lot?', options: ['Jump in the shower and splash', 'Go to sleep', 'Cry more'], correct: 0 },
            { text: 'Does the poem say crying is bad?', options: ['No', 'Yes'], correct: 0 }
          ]
        },
        {
          id: 'c5_cbse_eng_8',
          class: 'Class 5',
          title: 'My Elder Brother',
          subject: 'English',
          description: 'A touching story about the relationship between two brothers and the value of experience.',
          storyIntro: 'Sparky meets Munna and Bhaiya. Bhaiya studies hard while Munna loves to play. Who is wiser?',
          videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o',
          visualExamples: 'Books, Kite, Hostel room, Timetable',
          ruralExample: 'Elder siblings guiding younger ones in daily chores and studies.',
          voiceOverEn: 'Experience is more important than just reading books. Let us hear Bhaiya’s wisdom.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Study', 'Books'], ['Play', 'Kite'], ['Experience', 'Bhaiya']] } },
          quiz: [
            { text: 'How much older was Bhaiya than Munna?', options: ['Five years', 'Two years', 'Ten years'], correct: 0 },
            { text: 'What did Munna like to do most?', options: ['Play in the fields', 'Read books', 'Cook'], correct: 0 }
          ]
        },
        {
          id: 'c5_cbse_eng_9',
          class: 'Class 5',
          title: 'The Lazy Frog',
          subject: 'English',
          description: 'A humorous poem about Fred, a very lazy frog who refuses to do any work.',
          storyIntro: 'Sparky meets Fred! Fred is so lazy that he doesn’t even move when his mother calls him.',
          videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o',
          visualExamples: 'Frog, Log, Sleeping, Mother frog calling',
          ruralExample: 'Frogs lazily sitting on logs in the village pond.',
          voiceOverEn: 'Fred is a very lazy frog who lolls all day upon a log. He always manages to shirk doing a single stroke of work.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Lazy', 'Fred'], ['Log', 'Bed'], ['Work', 'Shirk']] } },
          quiz: [
            { text: 'What is the name of the lazy frog?', options: ['Fred', 'Sparky', 'Froggy'], correct: 0 },
            { text: 'Does Fred help his mother?', options: ['No', 'Yes'], correct: 0 }
          ]
        },
        {
          id: 'c5_cbse_eng_10',
          class: 'Class 5',
          title: 'Rip Van Winkle',
          subject: 'English',
          description: 'The legendary story of a man who fell asleep in the mountains and woke up twenty years later.',
          storyIntro: 'Sparky goes to the Kaatskill Mountains! He meets Rip, a kind man who helps everyone but is a bit lazy.',
          videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o',
          visualExamples: 'Mountains, Sleep, Long white beard, Village change',
          ruralExample: 'Old legends told by village elders about mysterious events.',
          voiceOverEn: 'Rip Van Winkle was a simple, good-natured man. He fell into a deep sleep for twenty years!',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Sleep', '20 years'], ['Rip', 'Kind man'], ['Mountains', 'Kaatskill']] } },
          quiz: [
            { text: 'How long did Rip Van Winkle sleep?', options: ['Twenty years', 'One year', 'Five years'], correct: 0 },
            { text: 'What was Rip’s only problem?', options: ['He was lazy', 'He was mean', 'He was loud'], correct: 0 }
          ]
        }
      ],
      'Mathematics': [
        {
          id: 'c5_cbse_math_1',
          class: 'Class 5',
          title: 'The Fish Tale',
          subject: 'Mathematics',
          description: 'Dive into the world of numbers and shapes with fish! Learn about large numbers, speed, and weight.',
          storyIntro: 'Sparky is at the busy fish market! He sees huge Whale Sharks and tiny sardines. Can you help him count the catch?',
          videoUrl: 'https://www.youtube.com/watch?v=D0Ajq682yrA',
          visualExamples: 'Whale Shark (18m long), Log boats, Fish shapes',
          ruralExample: 'Counting the daily catch at the village lake.',
          voiceOverEn: 'Welcome to the Fish Tale! Let us explore big numbers and shapes.',
          type: 'video',
          miniGame: { type: 'count', config: { target: 100, item: 'fish' } },
          quiz: [
            { text: 'If a log boat brings 20kg of fish in one trip, how much will it bring in 7 trips?', options: ['140kg', '100kg', '120kg'], correct: 0 },
            { text: 'Which is the biggest fish in the world?', options: ['Whale Shark', 'Blue Whale', 'Goldfish'], correct: 0 }
          ]
        },
        {
          id: 'c5_cbse_math_2',
          class: 'Class 5',
          title: 'Shapes and Angles',
          subject: 'Mathematics',
          description: 'Discover the magic of angles! Learn about right, acute, and obtuse angles in objects around you.',
          storyIntro: 'Sparky is making a kite! He needs to check the angles of the sticks to make it fly high. Let’s help him!',
          videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y',
          visualExamples: 'Clock hands at 3:00, Open scissors, Roof slopes',
          ruralExample: 'The angle of the ladder leaning against a hay stack.',
          voiceOverEn: 'Angles are everywhere! Let us find them in our surroundings.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['90°', 'Right Angle'], ['< 90°', 'Acute Angle'], ['> 90°', 'Obtuse Angle']] } },
          quiz: [
            { text: 'What angle does an "L" shape make?', options: ['Right Angle', 'Acute Angle', 'Obtuse Angle'], correct: 0 },
            { text: 'At 6 o’clock, what angle do the clock hands make?', options: ['Straight Angle', 'Right Angle'], correct: 0 }
          ]
        },
        {
          id: 'c5_cbse_math_3',
          class: 'Class 5',
          title: 'How Many Squares?',
          subject: 'Mathematics',
          description: 'Explore area and perimeter using square grids. Measure shapes and compare their sizes.',
          storyIntro: 'Sparky is footprint-tracing! He wants to know whose footprint covers more squares on the grid.',
          videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y',
          visualExamples: 'Stamps on a grid, Handprints, Leaf area',
          ruralExample: 'Measuring the area of a small vegetable patch using square tiles.',
          voiceOverEn: 'How many squares can fit inside? That is the area!',
          type: 'video',
          miniGame: { type: 'drag_drop', config: { item: 'square', target: 'grid' } },
          quiz: [
            { text: 'If a rectangle is 5 squares long and 3 squares wide, how many squares does it cover?', options: ['15', '8', '10'], correct: 0 },
            { text: 'What is the perimeter of a square with side 4 cm?', options: ['16 cm', '8 cm'], correct: 0 }
          ]
        },
        {
          id: 'c5_cbse_math_4',
          class: 'Class 5',
          title: 'Parts and Wholes',
          subject: 'Mathematics',
          description: 'Master fractions! Learn to divide things into equal parts and understand half, quarter, and more.',
          storyIntro: 'Sparky has a giant watermelon to share with 4 friends. How can he cut it into equal parts?',
          videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y',
          visualExamples: 'Flag colors (1/3rd each), Pizza slices, Money fractions',
          ruralExample: 'Dividing a field into equal parts for different crops.',
          voiceOverEn: 'Fractions help us share things equally. Let us learn about parts.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Half', '1/2'], ['Quarter', '1/4'], ['Three-fourths', '3/4']] } },
          quiz: [
            { text: 'If you eat 2 out of 4 slices of a cake, what fraction did you eat?', options: ['1/2', '1/4', '3/4'], correct: 0 },
            { text: 'How many paise make 1/2 of a rupee?', options: ['50 paise', '25 paise'], correct: 0 }
          ]
        },
        {
          id: 'c5_cbse_math_5',
          class: 'Class 5',
          title: 'Does it Look the Same?',
          subject: 'Mathematics',
          description: 'Explore symmetry and rotations. See how shapes look after half-turns and quarter-turns.',
          storyIntro: 'Sparky finds a magic mirror! He sees that half a butterfly looks just like the other half.',
          videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y',
          visualExamples: 'Butterfly wings, Letter H, Half-turn of a fan',
          ruralExample: 'Symmetrical patterns found in traditional Rangoli.',
          voiceOverEn: 'If we fold it and it matches, it is symmetrical!',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Butterfly', 'Symmetry'], ['Fan', 'Rotation']] } },
          quiz: [
            { text: 'Which letter looks the same after a half-turn?', options: ['S', 'L', 'P'], correct: 0 },
            { text: 'Does a circle look the same after any turn?', options: ['Yes', 'No'], correct: 0 }
          ]
        },
        {
          id: 'c5_cbse_math_6',
          class: 'Class 5',
          title: 'Be My Multiple, I\'ll be Your Factor',
          subject: 'Mathematics',
          description: 'Learn about multiples and factors. Discover common multiples and factor trees.',
          storyIntro: 'Sparky is playing the "Meow" game! He has to say "Meow" instead of numbers that are multiples of 3.',
          videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y',
          visualExamples: 'Multiples of 5 (5, 10, 15...), Factor trees',
          ruralExample: 'Arranging tamarind seeds in equal rows.',
          voiceOverEn: 'Numbers have friends called factors and multiples. Let us find them!',
          type: 'video',
          miniGame: { type: 'count', config: { target: 30, step: 3 } },
          quiz: [
            { text: 'What is the smallest common multiple of 4 and 6?', options: ['12', '24', '6'], correct: 0 },
            { text: 'What are the factors of 10?', options: ['1, 2, 5, 10', '1, 3, 10'], correct: 0 }
          ]
        },
        {
          id: 'c5_cbse_math_7',
          class: 'Class 5',
          title: 'Can You See the Pattern?',
          subject: 'Mathematics',
          description: 'Identify and create patterns. Explore magic squares, magic triangles, and number patterns.',
          storyIntro: 'Sparky sees patterns everywhere—on his shirt, on the floor, and even in numbers! Can you spot the rule?',
          videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y',
          visualExamples: 'Clockwise turns, Magic squares, Palindromes',
          ruralExample: 'Patterns on a traditional hand-woven basket.',
          voiceOverEn: 'Patterns follow rules. Can you guess the next step?',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['90° Turn', 'Quarter Turn'], ['180° Turn', 'Half Turn']] } },
          quiz: [
            { text: 'In a magic square, the sum of each row, column, and diagonal is:', options: ['The same', 'Different'], correct: 0 },
            { text: 'What is the next number in the pattern: 2, 4, 8, 16, ...?', options: ['32', '20', '24'], correct: 0 }
          ]
        },
        {
          id: 'c5_cbse_math_8',
          class: 'Class 5',
          title: 'Mapping Your Way',
          subject: 'Mathematics',
          description: 'Learn to read and draw maps. Understand scales and directions to find your way.',
          storyIntro: 'Sparky is going to the Republic Day Parade! He has a map of Rajpath. Let’s help him find India Gate.',
          videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y',
          visualExamples: 'India Gate map, Scale (1cm = 200km), Directions',
          ruralExample: 'Drawing a map of the village school and its playground.',
          voiceOverEn: 'Maps help us see the big picture. Let us learn about scales.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['North', 'Up'], ['Scale', 'Ratio']] } },
          quiz: [
            { text: 'If 2 cm on a map represents 1 km on the ground, how much does 10 cm represent?', options: ['5 km', '20 km', '10 km'], correct: 0 },
            { text: 'Which direction is opposite to East?', options: ['West', 'North', 'South'], correct: 0 }
          ]
        },
        {
          id: 'c5_cbse_math_9',
          class: 'Class 5',
          title: 'Boxes and Sketches',
          subject: 'Mathematics',
          description: 'Visualize 3D shapes from 2D drawings. Learn about nets of cubes and floor maps.',
          storyIntro: 'Sparky is making a sweet box! He has a flat piece of paper. Can you guess which shape it will become?',
          videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y',
          visualExamples: 'Cube nets, Floor maps, Deep drawings',
          ruralExample: 'Making a clay model of a village house.',
          voiceOverEn: 'From flat paper to a 3D box! Let us learn about nets.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Cube', '6 Squares'], ['Cylinder', 'Rectangle + 2 Circles']] } },
          quiz: [
            { text: 'How many faces does a cube have?', options: ['6', '4', '8'], correct: 0 },
            { text: 'Can a floor map show the height of a house?', options: ['No', 'Yes'], correct: 0 }
          ]
        },
        {
          id: 'c5_cbse_math_10',
          class: 'Class 5',
          title: 'Tenths and Hundredths',
          subject: 'Mathematics',
          description: 'Introduction to decimals. Use tenths and hundredths to measure length and money.',
          storyIntro: 'Sparky is measuring a tiny pencil. It is 3 centimeters and 5 millimeters long. How do we write that?',
          videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y',
          visualExamples: '0.1 cm (1 mm), Price tags (Rs 2.50)',
          ruralExample: 'Measuring the growth of a sapling in centimeters and millimeters.',
          voiceOverEn: 'Small parts of a whole can be written as decimals.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['1/10', '0.1'], ['1/100', '0.01']] } },
          quiz: [
            { text: 'How do you write 5/10 as a decimal?', options: ['0.5', '0.05', '5.0'], correct: 0 },
            { text: 'Which is greater: 0.1 or 0.09?', options: ['0.1', '0.09'], correct: 0 }
          ]
        },
        {
          id: 'c5_cbse_math_11',
          class: 'Class 5',
          title: 'Area and its Boundary',
          subject: 'Mathematics',
          description: 'Calculate perimeter (boundary) and area of shapes. Compare different rectangles.',
          storyIntro: 'Sparky wants to fence his garden. He needs to know the length of the boundary. Let’s measure!',
          videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y',
          visualExamples: 'Rectangle perimeter, Square area, Fencing',
          ruralExample: 'Calculating the length of wire needed to fence a farm.',
          voiceOverEn: 'The boundary is the perimeter, and the space inside is the area.',
          type: 'video',
          miniGame: { type: 'count', config: { target: 40, item: 'meters' } },
          quiz: [
            { text: 'If a rectangle has length 10m and width 5m, what is its perimeter?', options: ['30m', '50m', '15m'], correct: 0 },
            { text: 'Which shape has a larger area: a 5x5 square or a 6x4 rectangle?', options: ['5x5 square', '6x4 rectangle'], correct: 0 }
          ]
        },
        {
          id: 'c5_cbse_math_12',
          class: 'Class 5',
          title: 'Smart Charts',
          subject: 'Mathematics',
          description: 'Collect data and represent it using tally marks, bar charts, and pie charts.',
          storyIntro: 'Sparky is watching cars go by. He uses tally marks to count how many are red, blue, or white!',
          videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y',
          visualExamples: 'Tally marks, Bar charts, Chapati charts',
          ruralExample: 'Recording the number of cattle in each house of the village.',
          voiceOverEn: 'Let us organize our information using smart charts.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['||||', '4'], ['||||/', '5']] } },
          quiz: [
            { text: 'What does one tally mark ( | ) represent?', options: ['1', '5', '10'], correct: 0 },
            { text: 'In a chapati chart, if half the circle is shaded, what fraction is that?', options: ['1/2', '1/4', '1/3'], correct: 0 }
          ]
        },
        {
          id: 'c5_cbse_math_13',
          class: 'Class 5',
          title: 'Ways to Multiply and Divide',
          subject: 'Mathematics',
          description: 'Learn different methods for multiplication and division. Solve real-life problems.',
          storyIntro: 'Sparky is helping a farmer calculate how many oranges are in 25 boxes if each has 40 oranges.',
          videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y',
          visualExamples: 'Bela’s method, Column multiplication, Long division',
          ruralExample: 'Calculating the total wages for village workers over a month.',
          voiceOverEn: 'There are many ways to solve a problem. Let us find the easiest one!',
          type: 'video',
          miniGame: { type: 'count', config: { target: 1000, step: 100 } },
          quiz: [
            { text: 'What is 15 x 20?', options: ['300', '250', '350'], correct: 0 },
            { text: 'If 100 chocolates are shared among 5 children, how many does each get?', options: ['20', '10', '25'], correct: 0 }
          ]
        },
        {
          id: 'c5_cbse_math_14',
          class: 'Class 5',
          title: 'How Big? How Heavy?',
          subject: 'Mathematics',
          description: 'Understand volume and weight. Learn how much space an object takes up.',
          storyIntro: 'Sparky is packing his bag for a trip. He wants to know which box can hold more toys!',
          videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y',
          visualExamples: 'Volume of a cube, Measuring cylinders, Weight of coins',
          ruralExample: 'Measuring the volume of a grain storage bin.',
          voiceOverEn: 'How much space does an object take? That is its volume!',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Volume', 'Space'], ['Weight', 'Heaviness']] } },
          quiz: [
            { text: 'What is the volume of a cube with side 3 cm?', options: ['27 cubic cm', '9 cubic cm', '12 cubic cm'], correct: 0 },
            { text: 'If a 5-rupee coin weighs 9g, how much will 100 such coins weigh?', options: ['900g', '90g', '9kg'], correct: 0 }
          ]
        }
      ],
      EVS: [
  {
    id: 'c5_cbse_1',
    class: 'Class 5',
    title: 'Super Senses',
    subject: 'EVS',
    videoUrl: 'https://www.youtube.com/watch?v=bRaS2wvNB10',
    type: 'video',
    miniGame: {
      type: 'match',
      config: {
        pairs: [
          ['Dog', 'Smell'],
          ['Eagle', 'Vision'],
          ['Bat', 'Sound']
        ]
      }
    },
    quiz: [
      { text: 'Which animal has strong smell?', options: ['Dog', 'Cat'], correct: 0 }
    ]
  },
  {
    id: 'c5_cbse_2',
    class: 'Class 5',
    title: 'A Snake Charmer Story',
    subject: 'EVS',
    videoUrl: 'https://www.youtube.com/watch?v=cN3ncgdBzv8',
    type: 'video',
    miniGame: {
      type: 'match',
      config: {
        pairs: [
          ['Snake', 'No ears'],
          ['Charmer', 'Music'],
          ['Basket', 'Snake home']
        ]
      }
    },
    quiz: [
      { text: 'Snakes hear through?', options: ['Vibrations', 'Ears'], correct: 0 }
    ]
  },
  {
    id: 'c5_cbse_3',
    class: 'Class 5',
    title: 'From Tasting to Digesting',
    subject: 'EVS',
    videoUrl: 'https://www.youtube.com/watch?v=8AauXaii6Mk',
    type: 'video',
    miniGame: {
      type: 'match',
      config: {
        pairs: [
          ['Tongue', 'Taste'],
          ['Stomach', 'Digest'],
          ['Teeth', 'Chew']
        ]
      }
    },
    quiz: [
      { text: 'Where does digestion happen?', options: ['Stomach', 'Leg'], correct: 0 }
    ]
  },
  {
    id: 'c5_cbse_4',
    class: 'Class 5',
    title: 'Mangoes Round the Year',
    subject: 'EVS',
    videoUrl: 'https://www.youtube.com/watch?v=81-NhMYTiYs',
    type: 'video',
    miniGame: {
      type: 'match',
      config: {
        pairs: [
          ['Mango', 'Fruit'],
          ['Pickle', 'Preserved food'],
          ['Sun dry', 'Preservation']
        ]
      }
    },
    quiz: [
      { text: 'Pickle is used for?', options: ['Storage', 'Throw'], correct: 0 }
    ]
  },
  {
    id: 'c5_cbse_5',
    class: 'Class 5',
    title: 'Seeds and Seeds',
    subject: 'EVS',
    videoUrl: 'https://www.youtube.com/watch?v=JySEaoe-uP4',
    type: 'video',
    miniGame: {
      type: 'match',
      config: {
        pairs: [
          ['Seed', 'Plant'],
          ['Soil', 'Growth'],
          ['Water', 'Life']
        ]
      }
    },
    quiz: [
      { text: 'Seeds grow into?', options: ['Plants', 'Animals'], correct: 0 }
    ]
  }
],
      'Hindi': [
        {
          id: 'c5_cbse_hin_1',
          class: 'Class 5',
          title: 'Raakh ki Rassi',
          subject: 'Hindi',
          description: 'A folk tale from Tibet.',
          storyIntro: 'Sparky hears a story from Tibet!',
          videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q',
          visualExamples: 'Tibet, Rope of ash',
          ruralExample: 'Village folk tales.',
          voiceOverEn: 'A story of wisdom.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Wisdom', 'बुद्धि'], ['Ash', 'राख']] } },
          quiz: [{ text: 'What was the rope made of?', options: ['Ash', 'Silk'], correct: 0 }]
        },
        { id: 'c5_cbse_hin_2', class: 'Class 5', title: 'Faslon ke Tyohar', subject: 'Hindi', description: 'Harvest festivals of India.', storyIntro: 'Sparky celebrates harvest!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'Pongal, Bihu, Lohri', ruralExample: 'Sankranti in the village.', voiceOverEn: 'India is a land of festivals.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Pongal', 'Tamil Nadu'], ['Bihu', 'Assam']] } }, quiz: [{ text: 'Which festival is in Punjab?', options: ['Lohri', 'Bihu'], correct: 0 }] },
        { id: 'c5_cbse_hin_3', class: 'Class 5', title: 'Khilaunewala', subject: 'Hindi', description: 'A poem about a toy seller.', storyIntro: 'Sparky meets a toy seller!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'Toys, Children, Joy', ruralExample: 'Toy seller in the village fair.', voiceOverEn: 'The toy seller has many toys.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Toy', 'खिलौना'], ['Child', 'बच्चा']] } }, quiz: [{ text: 'What does the toy seller bring?', options: ['Toys', 'Books'], correct: 0 }] },
        { id: 'c5_cbse_hin_4', class: 'Class 5', title: 'Nanhna Fankar', subject: 'Hindi', description: 'Story of a young artist.', storyIntro: 'Sparky meets a young stone carver!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'Stone carving, Art, Akbar', ruralExample: 'Village artisans.', voiceOverEn: 'Art has no age.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Artist', 'कलाकार'], ['Stone', 'पत्थर']] } }, quiz: [{ text: 'Who met the young artist?', options: ['Akbar', 'Birbal'], correct: 0 }] },
        { id: 'c5_cbse_hin_5', class: 'Class 5', title: 'Jahan Chah Wahan Raah', subject: 'Hindi', description: 'Story of determination.', storyIntro: 'Sparky meets Ila!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'Embroidery, Courage', ruralExample: 'Overcoming challenges.', voiceOverEn: 'Where there is a will, there is a way.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Will', 'चाह'], ['Way', 'राह']] } }, quiz: [{ text: 'What did Ila do with her feet?', options: ['Embroidery', 'Writing'], correct: 0 }] },
        { id: 'c5_cbse_hin_6', class: 'Class 5', title: 'Chitthi ka Safar', subject: 'Hindi', description: 'The journey of a letter.', storyIntro: 'Sparky sends a letter!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'Postcard, Stamp, Postman', ruralExample: 'The village post office.', voiceOverEn: 'Letters connect people.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Letter', 'चिट्ठी'], ['Stamp', 'टिकट']] } }, quiz: [{ text: 'Who delivers the letter?', options: ['Postman', 'Milkman'], correct: 0 }] },
        { id: 'c5_cbse_hin_7', class: 'Class 5', title: 'Dakie ki Kahani', subject: 'Hindi', description: 'Life of a postman.', storyIntro: 'Sparky talks to a postman!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'Postman, Uniform, Bag', ruralExample: 'Postman in the hills.', voiceOverEn: 'A postman works hard.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Postman', 'डाकिया'], ['Bag', 'थैला']] } }, quiz: [{ text: 'What is a postman called in Hindi?', options: ['डाकिया', 'किसान'], correct: 0 }] },
        { id: 'c5_cbse_hin_8', class: 'Class 5', title: 'Ve Din bhi kya Din the', subject: 'Hindi', description: 'Story about future schools.', storyIntro: 'Sparky looks into the future!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'Robots, Computers, Old books', ruralExample: 'Traditional schools.', voiceOverEn: 'Schools will change.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Future', 'भविष्य'], ['Book', 'किताब']] } }, quiz: [{ text: 'What was the "old book" about?', options: ['School', 'Space'], correct: 0 }] },
        { id: 'c5_cbse_hin_9', class: 'Class 5', title: 'Ek Maa ki Bebasi', subject: 'Hindi', description: 'A poem about a mother\'s love.', storyIntro: 'Sparky meets a special boy!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'Mother, Child, Emotions', ruralExample: 'Mother\'s care in the village.', voiceOverEn: 'A mother understands everything.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Mother', 'माँ'], ['Love', 'प्यार']] } }, quiz: [{ text: 'Who is the poem about?', options: ['A mother and child', 'A king'], correct: 0 }] },
        { id: 'c5_cbse_hin_10', class: 'Class 5', title: 'Ek Din ki Badshahat', subject: 'Hindi', description: 'Story about children taking charge.', storyIntro: 'Sparky sees children as kings!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'Children, Rules, Fun', ruralExample: 'Children playing together.', voiceOverEn: 'One day of power.', type: 'video', miniGame: { type: 'match', config: { pairs: [['King', 'बादशाह'], ['Day', 'दिन']] } }, quiz: [{ text: 'Who became the "kings" for a day?', options: ['Children', 'Parents'], correct: 0 }] }
      ],
      'Telugu': [
        {
          id: 'c5_cbse_tel_1',
          class: 'Class 5',
          title: 'Telugu Alphabet Mastery',
          subject: 'Telugu',
          description: 'Advanced review of Varnamala.',
          storyIntro: 'Sparky masters the Telugu alphabet!',
          videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4',
          visualExamples: 'Vowels, Consonants',
          ruralExample: 'Reading village names.',
          voiceOverEn: 'Let us master the alphabet.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['అ', 'Vowel'], ['క', 'Consonant']] } },
          quiz: [{ text: 'Which is a vowel?', options: ['అ', 'క'], correct: 0 }]
        },
        { id: 'c5_cbse_tel_2', class: 'Class 5', title: 'Guninthalu - Advanced', subject: 'Telugu', description: 'Complex vowel signs.', storyIntro: 'Sparky adds complex signs!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'కౌ, కం, కః', ruralExample: 'Writing complex words.', voiceOverEn: 'Advanced signs for better reading.', type: 'video', miniGame: { type: 'match', config: { pairs: [['క+ౌ', 'కౌ'], ['క+ం', 'కం']] } }, quiz: [{ text: 'Which is "Kau"?', options: ['కౌ', 'కం'], correct: 0 }] },
        { id: 'c5_cbse_tel_3', class: 'Class 5', title: 'Vatthulu - Review', subject: 'Telugu', description: 'Reviewing consonant signs.', storyIntro: 'Sparky reviews double sounds!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'క్క, గ్గ, చ్చ', ruralExample: 'అక్క, మొగ్గ.', voiceOverEn: 'Vatthulu are important.', type: 'video', miniGame: { type: 'match', config: { pairs: [['క్క', 'Ka'], ['గ్గ', 'Ga']] } }, quiz: [{ text: 'Which has "Ga" vatthu?', options: ['మొగ్గ', 'అక్క'], correct: 0 }] },
        { id: 'c5_cbse_tel_4', class: 'Class 5', title: 'Telugu Sentences', subject: 'Telugu', description: 'Building sentences.', storyIntro: 'Sparky speaks in Telugu!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'Subject, Verb, Object', ruralExample: 'Talking to village elders.', voiceOverEn: 'Let us build sentences.', type: 'video', miniGame: { type: 'match', config: { pairs: [['I', 'నేను'], ['Go', 'వెళ్తాను']] } }, quiz: [{ text: 'How to say "I"?', options: ['నేను', 'నువ్వు'], correct: 0 }] },
        { id: 'c5_cbse_tel_5', class: 'Class 5', title: 'Telugu Stories - 1', subject: 'Telugu', description: 'Moral stories.', storyIntro: 'Sparky reads a moral story!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'Story characters', ruralExample: 'Grandma\'s stories.', voiceOverEn: 'Stories teach us values.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Story', 'కథ'], ['Moral', 'నీతి']] } }, quiz: [{ text: 'What is "Moral"?', options: ['నీతి', 'కథ'], correct: 0 }] },
        { id: 'c5_cbse_tel_6', class: 'Class 5', title: 'Telugu Poems - 1', subject: 'Telugu', description: 'Vemana Padyalu.', storyIntro: 'Sparky recites Vemana poems!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'Poem lines', ruralExample: 'Village wisdom.', voiceOverEn: 'Vemana poems are wise.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Poem', 'పద్యం'], ['Wise', 'తెలివైన']] } }, quiz: [{ text: 'Who wrote these poems?', options: ['Vemana', 'Sumathi'], correct: 0 }] },
        { id: 'c5_cbse_tel_7', class: 'Class 5', title: 'Telugu Vocabulary - 1', subject: 'Telugu', description: 'Daily use words.', storyIntro: 'Sparky learns new words!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'Home, School, Market', ruralExample: 'Village market words.', voiceOverEn: 'Expand your vocabulary.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Home', 'ఇల్లు'], ['School', 'బడి']] } }, quiz: [{ text: 'What is "School"?', options: ['బడి', 'ఇల్లు'], correct: 0 }] },
        { id: 'c5_cbse_tel_8', class: 'Class 5', title: 'Telugu Grammar - Nouns', subject: 'Telugu', description: 'Namavachakam.', storyIntro: 'Sparky names everything!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'Names of people, places', ruralExample: 'Names of village landmarks.', voiceOverEn: 'Nouns are naming words.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Rama', 'Person'], ['Village', 'Place']] } }, quiz: [{ text: 'Is "Rama" a noun?', options: ['Yes', 'No'], correct: 0 }] },
        { id: 'c5_cbse_tel_9', class: 'Class 5', title: 'Telugu Grammar - Verbs', subject: 'Telugu', description: 'Kriya.', storyIntro: 'Sparky is active!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'Running, Eating, Writing', ruralExample: 'Farmers working.', voiceOverEn: 'Verbs are action words.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Run', 'పరుగెత్తు'], ['Eat', 'తిను']] } }, quiz: [{ text: 'Which is a verb?', options: ['తిను', 'పుస్తకం'], correct: 0 }] },
        { id: 'c5_cbse_tel_10', class: 'Class 5', title: 'Telugu Culture - Festivals', subject: 'Telugu', description: 'Festivals of Telugu people.', storyIntro: 'Sparky celebrates Ugadi!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'Ugadi, Sankranti', ruralExample: 'Village festival celebrations.', voiceOverEn: 'Our festivals are special.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Ugadi', 'New Year'], ['Sankranti', 'Harvest']] } }, quiz: [{ text: 'Which is the Telugu New Year?', options: ['Ugadi', 'Sankranti'], correct: 0 }] }
      ]
    },
    'Telangana State Board': {
      'English': [
        {
          id: 'c5_tel_eng_1',
          class: 'Class 5',
          title: 'The Mirror of Matsuyama',
          subject: 'English',
          description: 'A story from Japan about a magic mirror.',
          storyIntro: 'Sparky travels to Japan!',
          videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o',
          visualExamples: 'Mirror, Kimono, Japan',
          ruralExample: 'Old family heirlooms.',
          voiceOverEn: 'The mirror reflects the heart.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Mirror', 'Reflection'], ['Heart', 'Kindness']] } },
          quiz: [{ text: 'Where is the story from?', options: ['Japan', 'India'], correct: 0 }]
        },
        { id: 'c5_tel_eng_2', class: 'Class 5', title: 'The Little Bully', subject: 'English', description: 'Story about kindness.', storyIntro: 'Sparky meets a boy named Hari!', videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o', visualExamples: 'Crab, Lobster, Hari', ruralExample: 'Being kind to animals in the village.', voiceOverEn: 'Do not bully others.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Hari', 'Bully'], ['Crab', 'Pinch']] } }, quiz: [{ text: 'Who pinched Hari?', options: ['Crab', 'Dog'], correct: 0 }] },
        { id: 'c5_tel_eng_3', class: 'Class 5', title: 'Sing a Song of People', subject: 'English', description: 'A poem about busy people.', storyIntro: 'Sparky watches the crowd!', videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o', visualExamples: 'City, Subway, People', ruralExample: 'People in the village market.', voiceOverEn: 'Everyone is in a hurry.', type: 'video', miniGame: { type: 'match', config: { pairs: [['City', 'Busy'], ['Market', 'Crowded']] } }, quiz: [{ text: 'Where are the people going?', options: ['Everywhere', 'Nowhere'], correct: 0 }] },
        { id: 'c5_tel_eng_4', class: 'Class 5', title: 'Around the World', subject: 'English', description: 'Travel adventure.', storyIntro: 'Sparky travels around the world!', videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o', visualExamples: 'Train, Ship, Map', ruralExample: 'Traveling to the city by bus.', voiceOverEn: 'The world is big.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Train', 'Track'], ['Ship', 'Sea']] } }, quiz: [{ text: 'How did they travel?', options: ['Train and Ship', 'Only Bus'], correct: 0 }] },
        { id: 'c5_tel_eng_5', class: 'Class 5', title: 'Topsy-Turvy Land', subject: 'English', description: 'A poem about a strange land.', storyIntro: 'Sparky visits a funny place!', videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o', visualExamples: 'Upside down world', ruralExample: 'Imagining a funny village.', voiceOverEn: 'Everything is topsy-turvy.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Sea', 'Sand'], ['Walk', 'Hands']] } }, quiz: [{ text: 'Where do people walk in this land?', options: ['On their hands', 'On their feet'], correct: 0 }] },
        { id: 'c5_tel_eng_6', class: 'Class 5', title: 'Gulliver\'s Travels', subject: 'English', description: 'Story of a giant land.', storyIntro: 'Sparky meets giants!', videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o', visualExamples: 'Giant, Gulliver, Ship', ruralExample: 'Feeling small in a big forest.', voiceOverEn: 'Gulliver was in a land of giants.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Gulliver', 'Small'], ['Giant', 'Big']] } }, quiz: [{ text: 'Where did Gulliver find himself?', options: ['Land of Giants', 'Land of Dwarfs'], correct: 0 }] },
        { id: 'c5_tel_eng_7', class: 'Class 5', title: 'Nobody\'s Friend', subject: 'English', description: 'A poem about sharing.', storyIntro: 'Sparky shares his toys!', videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o', visualExamples: 'Sweets, Book, Doll', ruralExample: 'Sharing snacks with friends.', voiceOverEn: 'Sharing makes friends.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Share', 'Friend'], ['Selfish', 'No friend']] } }, quiz: [{ text: 'What should we do with our things?', options: ['Share', 'Hide'], correct: 0 }] },
        { id: 'c5_tel_eng_8', class: 'Class 5', title: 'The Talkative Barber', subject: 'English', description: 'A funny story.', storyIntro: 'Sparky meets a barber who talks too much!', videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o', visualExamples: 'Barber, Sultan, Razor', ruralExample: 'The village barber shop.', voiceOverEn: 'The barber was very talkative.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Barber', 'Talkative'], ['Sultan', 'Patient']] } }, quiz: [{ text: 'Who was talkative?', options: ['Barber', 'Sultan'], correct: 0 }] },
        { id: 'c5_tel_eng_9', class: 'Class 5', title: 'Class Discussion', subject: 'English', description: 'A poem about participation.', storyIntro: 'Sparky joins a discussion!', videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o', visualExamples: 'Classroom, Teacher, Students', ruralExample: 'Village panchayat meeting.', voiceOverEn: 'Speak up in class.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Speak', 'Voice'], ['Quiet', 'Jane']] } }, quiz: [{ text: 'Who was quiet in the class?', options: ['Jane', 'Teacher'], correct: 0 }] },
        { id: 'c5_tel_eng_10', class: 'Class 5', title: 'The Yellow Butterfly', subject: 'English', description: 'Story about freedom.', storyIntro: 'Sparky follows a butterfly!', videoUrl: 'https://www.youtube.com/watch?v=8-6X9A9iS7o', visualExamples: 'Butterfly, Garden, Net', ruralExample: 'Butterflies in the farm.', voiceOverEn: 'Let the butterfly fly free.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Butterfly', 'Yellow'], ['Spider', 'Web']] } }, quiz: [{ text: 'What color was the butterfly?', options: ['Yellow', 'Red'], correct: 0 }] }
      ],
      'Mathematics': [
        {
          id: 'c5_tel_math_1',
          class: 'Class 5',
          title: 'Large Numbers',
          subject: 'Mathematics',
          description: 'Numbers up to Lakhs.',
          storyIntro: 'Sparky counts the stars!',
          videoUrl: 'https://www.youtube.com/watch?v=D0Ajq682yrA',
          visualExamples: '1,00,000, Place value',
          ruralExample: 'Population of the village.',
          voiceOverEn: 'Let us learn about lakhs.',
          type: 'video',
          miniGame: { type: 'count', config: { target: 10000 } },
          quiz: [{ text: 'How many zeros in 1 Lakh?', options: ['5', '6'], correct: 0 }]
        },
        { id: 'c5_tel_math_2', class: 'Class 5', title: 'Addition and Subtraction', subject: 'Mathematics', description: 'Operations with large numbers.', storyIntro: 'Sparky manages his treasury!', videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y', visualExamples: '50,000 + 20,000', ruralExample: 'Village budget planning.', voiceOverEn: 'Add and subtract carefully.', type: 'video', miniGame: { type: 'count', config: { target: 1000 } }, quiz: [{ text: '10,000 - 5,000 = ?', options: ['5,000', '4,000'], correct: 0 }] },
        { id: 'c5_tel_math_3', class: 'Class 5', title: 'Multiplication and Division', subject: 'Mathematics', description: 'Large number operations.', storyIntro: 'Sparky multiplies his harvest!', videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y', visualExamples: '1000 x 10', ruralExample: 'Calculating total crop yield.', voiceOverEn: 'Multiply for total, divide for share.', type: 'video', miniGame: { type: 'count', config: { target: 100 } }, quiz: [{ text: '1000 / 10 = ?', options: ['100', '10'], correct: 0 }] },
        { id: 'c5_tel_math_4', class: 'Class 5', title: 'Factors and Multiples', subject: 'Mathematics', description: 'Number relationships.', storyIntro: 'Sparky finds patterns!', videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y', visualExamples: 'Factors of 12, Multiples of 3', ruralExample: 'Arranging pots in rows.', voiceOverEn: 'Numbers have friends called factors.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Factor', 'Divider'], ['Multiple', 'Product']] } }, quiz: [{ text: 'Is 3 a factor of 9?', options: ['Yes', 'No'], correct: 0 }] },
        { id: 'c5_tel_math_5', class: 'Class 5', title: 'Fractions', subject: 'Mathematics', description: 'Equivalent fractions.', storyIntro: 'Sparky compares his cakes!', videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y', visualExamples: '1/2 = 2/4', ruralExample: 'Comparing field sizes.', voiceOverEn: 'Fractions can look different but be same.', type: 'video', miniGame: { type: 'match', config: { pairs: [['1/2', '2/4'], ['1/3', '2/6']] } }, quiz: [{ text: 'Is 1/2 same as 2/4?', options: ['Yes', 'No'], correct: 0 }] },
        { id: 'c5_tel_math_6', class: 'Class 5', title: 'Decimals', subject: 'Mathematics', description: 'Introduction to decimals.', storyIntro: 'Sparky measures with precision!', videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y', visualExamples: '0.5, 0.25', ruralExample: 'Measuring small quantities of oil.', voiceOverEn: 'Decimals are parts of one.', type: 'video', miniGame: { type: 'match', config: { pairs: [['0.5', 'Half'], ['0.25', 'Quarter']] } }, quiz: [{ text: 'What is 0.5?', options: ['Half', 'Full'], correct: 0 }] },
        { id: 'c5_tel_math_7', class: 'Class 5', title: 'Geometry - Angles', subject: 'Mathematics', description: 'Measuring angles.', storyIntro: 'Sparky uses a protractor!', videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y', visualExamples: 'Protractor, Degrees', ruralExample: 'Angles in a plough.', voiceOverEn: 'We measure angles in degrees.', type: 'video', miniGame: { type: 'match', config: { pairs: [['90', 'Right'], ['180', 'Straight']] } }, quiz: [{ text: 'What is a straight angle?', options: ['180 degrees', '90 degrees'], correct: 0 }] },
        { id: 'c5_tel_math_8', class: 'Class 5', title: 'Perimeter and Area', subject: 'Mathematics', description: 'Calculating boundaries and space.', storyIntro: 'Sparky fences his farm!', videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y', visualExamples: 'Rectangle, Square', ruralExample: 'Fencing a village garden.', voiceOverEn: 'Perimeter is the boundary.', type: 'video', miniGame: { type: 'count', config: { target: 40 } }, quiz: [{ text: 'Perimeter of 5x5 square?', options: ['20', '25'], correct: 0 }] },
        { id: 'c5_tel_math_9', class: 'Class 5', title: 'Data Handling', subject: 'Mathematics', description: 'Bar graphs and Tally marks.', storyIntro: 'Sparky records the weather!', videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y', visualExamples: 'Bar graph, Tally chart', ruralExample: 'Recording milk yield.', voiceOverEn: 'Data tells a story.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Graph', 'Visual'], ['Tally', 'Count']] } }, quiz: [{ text: 'What is a bar graph?', options: ['Picture chart', 'List'], correct: 0 }] },
        { id: 'c5_tel_math_10', class: 'Class 5', title: 'Patterns and Symmetry', subject: 'Mathematics', description: 'Advanced patterns.', storyIntro: 'Sparky creates art!', videoUrl: 'https://www.youtube.com/watch?v=Fa9Xv7n6y9Y', visualExamples: 'Rotational symmetry', ruralExample: 'Village temple carvings.', voiceOverEn: 'Patterns are mathematical beauty.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Mirror', 'Symmetry'], ['Rotate', 'Pattern']] } }, quiz: [{ text: 'Does a square have symmetry?', options: ['Yes', 'No'], correct: 0 }] }
      ],
      EVS: [
  {
    id: 'c5_tel_1',
    class: 'Class 5',
    title: 'Animal Senses',
    subject: 'EVS',
    videoUrl: 'https://www.youtube.com/watch?v=KuP5N2ns8ME',
    type: 'video',
    miniGame: {
      type: 'match',
      config: {
        pairs: [
          ['Dog', 'Smell'],
          ['Owl', 'Night vision'],
          ['Fish', 'Water']
        ]
      }
    },
    quiz: [
      { text: 'Dog uses?', options: ['Smell', 'Vision'], correct: 0 }
    ]
  },
  {
    id: 'c5_tel_2',
    class: 'Class 5',
    title: 'Food Preservation',
    subject: 'EVS',
    videoUrl: 'https://www.youtube.com/watch?v=FWuGxWTg1Zc',
    type: 'video',
    miniGame: {
      type: 'match',
      config: {
        pairs: [
          ['Drying', 'Sun'],
          ['Pickle', 'Salt'],
          ['Cooling', 'Fridge']
        ]
      }
    },
    quiz: [
      { text: 'Food is preserved to?', options: ['Store', 'Throw'], correct: 0 }
    ]
  },
  {
    id: 'c5_tel_3',
    class: 'Class 5',
    title: 'Plants and Environment',
    subject: 'EVS',
    videoUrl: 'https://www.youtube.com/watch?v=Z9mOrNcX4j0',
    type: 'video',
    miniGame: {
      type: 'match',
      config: {
        pairs: [
          ['Tree', 'Oxygen'],
          ['Plant', 'Green'],
          ['Forest', 'Nature']
        ]
      }
    },
    quiz: [
      { text: 'Trees give?', options: ['Oxygen', 'Smoke'], correct: 0 }
    ]
  },
  {
    id: 'c5_tel_4',
    class: 'Class 5',
    title: 'Water and Health',
    subject: 'EVS',
    videoUrl: 'https://www.youtube.com/watch?v=31F0laJjyy8',
    type: 'video',
    miniGame: {
      type: 'match',
      config: {
        pairs: [
          ['Water', 'Life'],
          ['Clean', 'Healthy'],
          ['Dirty', 'Disease']
        ]
      }
    },
    quiz: [
      { text: 'Clean water keeps us?', options: ['Healthy', 'Sick'], correct: 0 }
    ]
  },
  {
    id: 'c5_tel_5',
    class: 'Class 5',
    title: 'Our Environment',
    subject: 'EVS',
    videoUrl: 'https://www.youtube.com/watch?v=Z9mOrNcX4j0',
    type: 'video',
    miniGame: {
      type: 'match',
      config: {
        pairs: [
          ['Air', 'Breathing'],
          ['Water', 'Drinking'],
          ['Soil', 'Farming']
        ]
      }
    },
    quiz: [
      { text: 'We breathe?', options: ['Air', 'Water'], correct: 0 }
    ]
  }
],
      'Hindi': [
        {
          id: 'c5_tel_hin_1',
          class: 'Class 5',
          title: 'Hindi Grammar - Review',
          subject: 'Hindi',
          description: 'Reviewing basics.',
          storyIntro: 'Sparky reviews Hindi grammar!',
          videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q',
          visualExamples: 'Nouns, Pronouns',
          ruralExample: 'Speaking correctly.',
          voiceOverEn: 'Let us review grammar.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Noun', 'संज्ञा'], ['Pronoun', 'सर्वनाम']] } },
          quiz: [{ text: 'What is Noun?', options: ['संज्ञा', 'सर्वनाम'], correct: 0 }]
        },
        { id: 'c5_tel_hin_2', class: 'Class 5', title: 'Hindi Sentences', subject: 'Hindi', description: 'Making sentences.', storyIntro: 'Sparky writes in Hindi!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'Sentences', ruralExample: 'Writing a letter.', voiceOverEn: 'Let us make sentences.', type: 'video', miniGame: { type: 'match', config: { pairs: [['I', 'मैं'], ['Am', 'हूँ']] } }, quiz: [{ text: 'How to say "I am"?', options: ['मैं हूँ', 'तुम हो'], correct: 0 }] },
        { id: 'c5_tel_hin_3', class: 'Class 5', title: 'Hindi Stories - 1', subject: 'Hindi', description: 'Reading stories.', storyIntro: 'Sparky reads a story!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'Story characters', ruralExample: 'Folk tales.', voiceOverEn: 'Stories are interesting.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Story', 'कहानी'], ['Book', 'किताब']] } }, quiz: [{ text: 'What is "Story"?', options: ['कहानी', 'कविता'], correct: 0 }] },
        { id: 'c5_tel_hin_4', class: 'Class 5', title: 'Hindi Poems - 1', subject: 'Hindi', description: 'Learning poems.', storyIntro: 'Sparky sings a poem!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'Poem lines', ruralExample: 'Village songs.', voiceOverEn: 'Poems are beautiful.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Poem', 'कविता'], ['Song', 'गाना']] } }, quiz: [{ text: 'What is "Poem"?', options: ['कविता', 'कहानी'], correct: 0 }] },
        { id: 'c5_tel_hin_5', class: 'Class 5', title: 'Opposites - Advanced', subject: 'Hindi', description: 'Vilom Shabd.', storyIntro: 'Sparky finds opposites!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'Day/Night, Up/Down', ruralExample: 'Opposite situations.', voiceOverEn: 'Opposites are antonyms.', type: 'video', miniGame: { type: 'match', config: { pairs: [['दिन', 'रात'], ['ऊपर', 'नीचे']] } }, quiz: [{ text: 'Opposite of "Din"?', options: ['Raat', 'Subah'], correct: 0 }] },
        { id: 'c5_tel_hin_6', class: 'Class 5', title: 'Synonyms - Advanced', subject: 'Hindi', description: 'Paryayvachi Shabd.', storyIntro: 'Sparky finds similar words!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'Water/Jal, Sun/Suraj', ruralExample: 'Different names for same thing.', voiceOverEn: 'Synonyms have same meaning.', type: 'video', miniGame: { type: 'match', config: { pairs: [['जल', 'पानी'], ['सूरज', 'सूर्य']] } }, quiz: [{ text: 'Synonym of "Jal"?', options: ['Paani', 'Aag'], correct: 0 }] },
        { id: 'c5_tel_hin_7', class: 'Class 5', title: 'Gender - Advanced', subject: 'Hindi', description: 'Ling.', storyIntro: 'Sparky learns genders!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'Boy/Girl, King/Queen', ruralExample: 'Male and female animals.', voiceOverEn: 'Nouns have gender.', type: 'video', miniGame: { type: 'match', config: { pairs: [['लड़का', 'लड़की'], ['राजा', 'रानी']] } }, quiz: [{ text: 'Gender of "Raja"?', options: ['Male', 'Female'], correct: 0 }] },
        { id: 'c5_tel_hin_8', class: 'Class 5', title: 'Number - Advanced', subject: 'Hindi', description: 'Vachan.', storyIntro: 'Sparky counts things!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'One/Many', ruralExample: 'One cow, many cows.', voiceOverEn: 'Vachan means number.', type: 'video', miniGame: { type: 'match', config: { pairs: [['एक', 'अनेक'], ['लड़का', 'लड़के']] } }, quiz: [{ text: 'Plural of "Ladka"?', options: ['Ladke', 'Ladki'], correct: 0 }] },
        { id: 'c5_tel_hin_9', class: 'Class 5', title: 'Hindi Vocabulary - 1', subject: 'Hindi', description: 'New words.', storyIntro: 'Sparky learns new words!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'Nature, School, Home', ruralExample: 'Village words.', voiceOverEn: 'Expand your vocabulary.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Tree', 'पेड़'], ['Flower', 'फूल']] } }, quiz: [{ text: 'What is "Tree"?', options: ['पेड़', 'फूल'], correct: 0 }] },
        { id: 'c5_tel_hin_10', class: 'Class 5', title: 'Hindi Culture', subject: 'Hindi', description: 'Traditions.', storyIntro: 'Sparky learns culture!', videoUrl: 'https://www.youtube.com/watch?v=6U1V9G5lL2Q', visualExamples: 'Festivals, Food', ruralExample: 'Village traditions.', voiceOverEn: 'Our culture is rich.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Festival', 'त्योहार'], ['Food', 'खाना']] } }, quiz: [{ text: 'What is "Festival"?', options: ['त्योहार', 'काम'], correct: 0 }] }
      ],
      'Telugu': [
        {
          id: 'c5_tel_tel_1',
          class: 'Class 5',
          title: 'Telugu Lessons Intro',
          subject: 'Telugu',
          description: 'Introduction to Class 5 Telugu.',
          storyIntro: 'Sparky starts Class 5 Telugu!',
          videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4',
          visualExamples: 'Telugu textbook',
          ruralExample: 'Village school.',
          voiceOverEn: 'Welcome to Class 5 Telugu.',
          type: 'video',
          miniGame: { type: 'match', config: { pairs: [['Telugu', 'Language'], ['Class 5', 'Level']] } },
          quiz: [{ text: 'Is this Class 5?', options: ['Yes', 'No'], correct: 0 }]
        },
        { id: 'c5_tel_tel_2', class: 'Class 5', title: 'Telugu Literature', subject: 'Telugu', description: 'Famous authors.', storyIntro: 'Sparky meets Telugu poets!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'Poets, Books', ruralExample: 'Local poets.', voiceOverEn: 'Telugu literature is rich.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Poet', 'కవి'], ['Book', 'పుస్తకం']] } }, quiz: [{ text: 'What is "Poet"?', options: ['కవి', 'కథ'], correct: 0 }] },
        { id: 'c5_tel_tel_3', class: 'Class 5', title: 'Telugu Grammar - Sandhi', subject: 'Telugu', description: 'Joining words.', storyIntro: 'Sparky joins words!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'Sandhi rules', ruralExample: 'Correct pronunciation.', voiceOverEn: 'Sandhi is joining words.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Join', 'సంధి'], ['Word', 'పదం']] } }, quiz: [{ text: 'What is joining words called?', options: ['సంధి', 'క్రియ'], correct: 0 }] },
        { id: 'c5_tel_tel_4', class: 'Class 5', title: 'Telugu Grammar - Samasam', subject: 'Telugu', description: 'Compound words.', storyIntro: 'Sparky makes compound words!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'Samasam types', ruralExample: 'Complex terms.', voiceOverEn: 'Samasam is compound words.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Compound', 'సమాసం'], ['Type', 'రకం']] } }, quiz: [{ text: 'What is compound words called?', options: ['సమాసం', 'సంధి'], correct: 0 }] },
        { id: 'c5_tel_tel_5', class: 'Class 5', title: 'Telugu Stories - Advanced', subject: 'Telugu', description: 'Classical stories.', storyIntro: 'Sparky reads a classic!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'Story characters', ruralExample: 'Village folk tales.', voiceOverEn: 'Classical stories are timeless.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Classic', 'క్లాసిక్'], ['Story', 'కథ']] } }, quiz: [{ text: 'Are stories fun?', options: ['Yes', 'No'], correct: 0 }] },
        { id: 'c5_tel_tel_6', class: 'Class 5', title: 'Telugu Poems - Advanced', subject: 'Telugu', description: 'Sumathi Padyalu.', storyIntro: 'Sparky recites Sumathi poems!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'Poem lines', ruralExample: 'Village wisdom.', voiceOverEn: 'Sumathi poems are ethical.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Poem', 'పద్యం'], ['Ethical', 'నీతి']] } }, quiz: [{ text: 'Who wrote Sumathi Padyalu?', options: ['Baddena', 'Vemana'], correct: 0 }] },
        { id: 'c5_tel_tel_7', class: 'Class 5', title: 'Telugu Vocabulary - Advanced', subject: 'Telugu', description: 'Rich vocabulary.', storyIntro: 'Sparky learns deep words!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'Nature, Emotions', ruralExample: 'Village life words.', voiceOverEn: 'Expand your word power.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Nature', 'ప్రకృతి'], ['Emotion', 'భావం']] } }, quiz: [{ text: 'What is "Nature"?', options: ['ప్రకృతి', 'పని'], correct: 0 }] },
        { id: 'c5_tel_tel_8', class: 'Class 5', title: 'Telugu Writing Skills', subject: 'Telugu', description: 'Essay writing.', storyIntro: 'Sparky writes an essay!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'Essay structure', ruralExample: 'Writing about the village.', voiceOverEn: 'Writing is an art.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Essay', 'వ్యాసం'], ['Write', 'రాయడం']] } }, quiz: [{ text: 'What is "Essay"?', options: ['వ్యాసం', 'కథ'], correct: 0 }] },
        { id: 'c5_tel_tel_9', class: 'Class 5', title: 'Telugu History', subject: 'Telugu', description: 'History of Telugu language.', storyIntro: 'Sparky learns history!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'Ancient scripts', ruralExample: 'Old inscriptions.', voiceOverEn: 'Telugu has a long history.', type: 'video', miniGame: { type: 'match', config: { pairs: [['History', 'చరిత్ర'], ['Language', 'భాష']] } }, quiz: [{ text: 'Is Telugu an old language?', options: ['Yes', 'No'], correct: 0 }] },
        { id: 'c5_tel_tel_10', class: 'Class 5', title: 'Telugu Pride', subject: 'Telugu', description: 'Greatness of Telugu.', storyIntro: 'Sparky is proud of Telugu!', videoUrl: 'https://www.youtube.com/watch?v=2l2F2QKjQf4', visualExamples: 'Telugu symbols', ruralExample: 'Village pride.', voiceOverEn: 'Telugu is our mother tongue.', type: 'video', miniGame: { type: 'match', config: { pairs: [['Pride', 'గర్వం'], ['Mother Tongue', 'మాతృభాష']] } }, quiz: [{ text: 'What is our mother tongue?', options: ['Telugu', 'Hindi'], correct: 0 }] }
      ]
    }
  }
};

export const MOCK_STUDENTS = [
  { id: 's1', name: 'Rahul Kumar', class: 'Class 1', timeSpent: 120, lessons: 5, quizzes: 4, avgScore: 85 },
  { id: 's2', name: 'Priya Sharma', class: 'Class 1', timeSpent: 95, lessons: 3, quizzes: 3, avgScore: 92 },
  { id: 's3', name: 'Arjun Reddy', class: 'Class 1', timeSpent: 150, lessons: 7, quizzes: 6, avgScore: 78 },
  { id: 's4', name: 'Sita Devi', class: 'Preschool', timeSpent: 60, lessons: 2, quizzes: 2, avgScore: 100 },
];
