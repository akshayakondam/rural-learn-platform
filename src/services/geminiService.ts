
import { GoogleGenAI, Modality } from "@google/genai";

export interface ChatResponse {
  english: string;
  hindi: string;
  telugu: string;
  audioEnglish?: string;
  audioHindi?: string;
  audioTelugu?: string;
}

export async function askMentor(prompt: string, language: 'English' | 'Telugu' | 'Hindi' = 'English', context?: string): Promise<ChatResponse> {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // First, get the text response in all 3 languages
    const textResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User says: "${prompt}"
      ${context ? `Lesson Context: ${context}` : ''}`,
      config: {
        systemInstruction: `You are Sparky, a magical mentor for rural Indian students (Preschool to Class 5).
        
        Your goal is to explain concepts using very simple language, rural real-life examples (like farming, village markets, local festivals, animals, nature), and illustrations (using emojis).
        
        CRITICAL: You MUST provide your response in THREE languages: English, Hindi, and Telugu.
        
        When explaining a lesson:
        1. Use the provided Lesson Context (Video description, Explanation, Quiz questions).
        2. Relate the concept to something the student sees in their village.
        3. Use emojis to illustrate the concept.
        4. Be encouraging and magical.
        
        Format your response EXACTLY as a JSON object with keys: "english", "hindi", "telugu".
        
        Example JSON:
        {
          "english": "A noun is a naming word like 'Cow' 🐄 or 'School' 🏫. In your village, the name of your pet dog is a noun!",
          "hindi": "संज्ञा एक नामकरण शब्द है जैसे 'गाय' 🐄 या 'स्कूल' 🏫। आपके गाँव में, आपके पालतू कुत्ते का नाम एक संज्ञा है!",
          "telugu": "నౌన్ అంటే 'ఆవు' 🐄 లేదా 'పాఠశాల' 🏫 వంటి పేరు తెలిపే పదం. మీ గ్రామంలో, మీ పెంపుడు కుక్క పేరు ఒక నౌన్!"
        }
        
        Keep each response brief, encouraging, and magical.`,
        responseMimeType: 'application/json',
      }
    });

    const result = JSON.parse(textResponse.text || '{}') as ChatResponse;
    
    // Generate audio for all 3 languages using TTS
    const generateAudio = async (text: string, voiceName: string) => {
      try {
        const audioResponse = await ai.models.generateContent({
          model: "gemini-2.5-flash-preview-tts",
          contents: [{ parts: [{ text }] }],
          config: {
            responseModalities: [Modality.AUDIO],
            speechConfig: {
              voiceConfig: {
                prebuiltVoiceConfig: { voiceName },
              },
            },
          },
        });
        return audioResponse.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      } catch (e) {
        console.error("TTS Error:", e);
        return undefined;
      }
    };

    const [audioEnglish, audioHindi, audioTelugu] = await Promise.all([
      generateAudio(result.english, 'Kore'),
      generateAudio(result.hindi, 'Puck'),
      generateAudio(result.telugu, 'Puck')
    ]);

    result.audioEnglish = audioEnglish;
    result.audioHindi = audioHindi;
    result.audioTelugu = audioTelugu;

    return result;
  } catch (error) {
    console.error("AI Error:", error);
    return {
      english: "The magic is recharging! Please try again later.",
      hindi: "जादू फिर से चार्ज हो रहा है! कृपया बाद में पुनः प्रयास करें।",
      telugu: "మ్యాజిక్ రీఛార్జ్ అవుతోంది! దయచేసి తర్వాత మళ్ళీ ప్రయత్నించండి."
    };
  }
}
