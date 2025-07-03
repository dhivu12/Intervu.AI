import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { ChatMessage } from "./ChatMessage";

type Message = {
  text: string;
  sender: "user" | "ai";
};

const initialMessages: Message[] = [
  {
    text: "Hello! I'm your AI interviewer. I'm here to help you practice for your next job interview. When you're ready, just say 'start'.",
    sender: "ai",
  },
];

const aiResponses = [
    "Tell me about a time you had to handle a difficult stakeholder.",
    "How do you prioritize your work when you have multiple competing deadlines?",
    "Describe a project you are particularly proud of and explain your role in it.",
    "Where do you see yourself in five years?",
    "What is your biggest weakness and how are you working to improve it?",
];

export const ChatWindow = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage: Message = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        sender: "ai",
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex h-full flex-col rounded-xl border border-slate-700 bg-slate-800/50 shadow-2xl backdrop-blur-sm">
      <div className="flex-1 overflow-y-auto p-6">
        <div className="space-y-6">
          {messages.map((msg, index) => (
            <ChatMessage key={index} message={msg} />
          ))}
          {isTyping && <ChatMessage message={{ text: "...", sender: "ai" }} />}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="border-t border-slate-700 p-4">
        <form onSubmit={handleSend} className="flex items-center gap-3">
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your answer..."
            className="flex-1 rounded-full border-slate-600 bg-slate-900/80 text-gray-200 placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0 focus:ring-offset-slate-900"
            autoComplete="off"
          />
          <Button
            type="submit"
            size="icon"
            className="rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-600/50 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/60 focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            disabled={isTyping}
          >
            <Send size={20} />
          </Button>
        </form>
      </div>
    </div>
  );
};