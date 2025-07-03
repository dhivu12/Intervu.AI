import React, { useState } from "react";
import { ChatWindow } from "./ChatWindow";
import { SentimentCard } from "./SentimentCard";
import { analyzeText, generateFollowUpQuestion, AnalysisResult } from "@/lib/analysis";

type Message = {
  text: string;
  sender: "user" | "ai";
};

const initialMessages: Message[] = [
  {
    text: "Hello! I'm your AI interviewer. I'm here to help you practice for your next job interview. To begin, tell me about yourself.",
    sender: "ai",
  },
];

export const InterviewSimulator = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);

  const handleSend = (userMessageText: string) => {
    if (!userMessageText.trim() || isTyping) return;

    const userMessage: Message = { text: userMessageText, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    const currentAnalysis = analyzeText(userMessageText);
    setAnalysis(currentAnalysis);

    setTimeout(() => {
      const aiResponseText = generateFollowUpQuestion(currentAnalysis);
      const aiResponse: Message = {
        text: aiResponseText,
        sender: "ai",
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="grid h-full w-full grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <ChatWindow
          messages={messages}
          input={input}
          setInput={setInput}
          isTyping={isTyping}
          onSend={handleSend}
        />
      </div>
      <div className="lg:col-span-1">
        <SentimentCard analysis={analysis} />
      </div>
    </div>
  );
};