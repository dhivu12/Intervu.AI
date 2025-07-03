export type Sentiment = "Positive" | "Neutral" | "Negative";

export interface AnalysisResult {
  sentiment: Sentiment;
  keywords: string[];
}

const positiveWords = ["proud", "success", "accomplished", "achieved", "great", "excellent", "improved", "led", "created", "launched", "resolved"];
const negativeWords = ["difficult", "challenge", "weakness", "mistake", "failed", "problem", "issue", "struggled", "conflict"];
const commonWords = new Set(["a", "an", "the", "is", "was", "were", "in", "on", "at", "to", "for", "of", "and", "but", "i", "me", "my", "you", "it", "that", "this", "with", "as", "so", "had", "have", "project", "team", "role"]);

export const analyzeText = (text: string): AnalysisResult => {
  const lowerCaseText = text.toLowerCase();
  const words = lowerCaseText.replace(/[.,!?]/g, "").split(/\s+/);

  let sentiment: Sentiment = "Neutral";
  if (positiveWords.some(word => lowerCaseText.includes(word))) {
    sentiment = "Positive";
  } else if (negativeWords.some(word => lowerCaseText.includes(word))) {
    sentiment = "Negative";
  }

  const keywords = Array.from(new Set(words
    .filter(word => word.length > 3 && !commonWords.has(word))
  )).slice(0, 4);

  return { sentiment, keywords };
};

export const generateFollowUpQuestion = (analysis: AnalysisResult): string => {
    if (analysis.sentiment === "Positive") {
        if (analysis.keywords.length > 0) {
            return `That sounds impressive. Can you tell me more about the "${analysis.keywords[0]}" aspect?`;
        }
        return "Excellent. Could you provide another example of your success in a team environment?";
    }
    if (analysis.sentiment === "Negative") {
        if (analysis.keywords.length > 0) {
            return `That sounds like a tough situation. What was the key takeaway from dealing with the "${analysis.keywords[0]}"?`;
        }
        return "Thank you for sharing. What steps have you taken to address this area of improvement?";
    }
    
    if (analysis.keywords.length > 0) {
        return `Interesting. How did you handle the part about "${analysis.keywords[0]}"?`;
    }
    return "I see. Let's move on. Tell me about a time you had to adapt to a significant change at work.";
}