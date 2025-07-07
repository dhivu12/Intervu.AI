import { GoogleGenerativeAI } from "@google/generative-ai";
import { Question } from "@/data/interview-questions";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  console.warn("VITE_GEMINI_API_KEY is not set. Falling back to local questions. Please add your key to a .env.local file.");
}

const genAI = new GoogleGenerativeAI(apiKey || "");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const generateQuestionsFromGemini = async (role: string): Promise<Question[]> => {
  if (!apiKey) {
    throw new Error("Gemini API key is not configured.");
  }

  const prompt = `
    Generate 5 diverse and insightful technical interview questions for a "${role}" position.
    For each question, provide a concise, expert-level suggested answer.
    Return the response as a valid JSON array of objects. Each object must have exactly two keys: "question" and "suggestedAnswer".
    Do not include any introductory text, explanations, or markdown formatting like \`\`\`json. Just the raw JSON array.

    Example format:
    [
      {
        "question": "What is the difference between let, const, and var in JavaScript?",
        "suggestedAnswer": "var is function-scoped, while let and const are block-scoped. let can be reassigned, but const cannot. It's best practice to use let and const."
      },
      {
        "question": "Explain the concept of the Virtual DOM.",
        "suggestedAnswer": "The Virtual DOM is an in-memory representation of the real DOM. When state changes, a new virtual DOM is created and compared to the previous one. React then computes the most efficient way to update the real DOM, improving performance."
      }
    ]
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    const cleanedText = text.trim().replace(/^```json\n/, '').replace(/\n```$/, '');

    const questions = JSON.parse(cleanedText);
    
    if (!Array.isArray(questions) || questions.some(q => !q.question || !q.suggestedAnswer)) {
        throw new Error("Invalid JSON format received from Gemini.");
    }

    return questions;
  } catch (error) {
    console.error("Error generating questions from Gemini:", error);
    throw new Error("Failed to generate questions. Please check your Gemini API key and network connection.");
  }
};