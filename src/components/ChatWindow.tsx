import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { ChatMessage } from "./ChatMessage";

type Message = {
  text: string;
  sender: "user" | "ai";
};

// Expanded and shuffled question pool
const allQuestions = [
    "Tell me about a time you had to handle a difficult stakeholder.",
    "How do you prioritize your work when you have multiple competing deadlines?",
    "Describe a project you are particularly proud of and explain your role in it.",
    "Where do you see yourself in five years?",
    "What is your biggest weakness and how are you working to improve it?",
    "Can you describe a time when you had to learn a new skill quickly?",
    "How do you handle stress and pressure?",
    "What are your salary expectations?",
    "Why are you interested in this role?",
    "What do you know about our company?",
    "Describe a time you disagreed with your boss. How did you handle it?",
    "How do you stay updated with the latest industry trends?",
    "What makes you a good team player?",
    "Tell me about a time you failed. What did you learn from it?",
    "What is your leadership style?"
];

const initialMessages: Message[] = [
  {
    text: "Hello! I'm your AI interviewer. To get started, please tell me the job role you're applying for.",
    sender: "ai",
  },
];

export const ChatWindow = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [interviewState, setInterviewState] = useState<'awaiting_role' | 'in_progress' | 'finished'>('awaiting_role');
  const [availableQuestions, setAvailableQuestions] = useState<string[]>(() => [...allQuestions].sort(() => 0.5 - Math.random()));

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping || interviewState === 'finished') return;

    const userMessage: Message = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      if (interviewState === 'awaiting_role') {
        const aiGreeting: Message = {
            text: `Great! We'll start the interview for a ${currentInput} role.`,
            sender: "ai",
        };

        if (availableQuestions.length > 0) {
            const firstQuestion = availableQuestions[0];
            const updatedAvailableQuestions = availableQuestions.slice(1);
            setAvailableQuestions(updatedAvailableQuestions);

            const aiQuestion: Message = {
                text: firstQuestion,
                sender: "ai",
            };
            setMessages((prev) => [...prev, aiGreeting, aiQuestion]);
            setInterviewState('in_progress');
        } else {
             const finalMessage: Message = {
                text: "It seems I'm out of questions! The interview is complete.",
                sender: "ai",
            };
            setMessages((prev) => [...prev, aiGreeting, finalMessage]);
            setInterviewState('finished');
        }
      } else if (interviewState === 'in_progress') {
        if (availableQuestions.length > 0) {
            const nextQuestion = availableQuestions[0];
            const updatedAvailableQuestions = availableQuestions.slice(1);
            setAvailableQuestions(updatedAvailableQuestions);

            const aiQuestion: Message = {
                text: nextQuestion,
                sender: "ai",
            };
            setMessages((prev) => [...prev, aiQuestion]);
        } else {
            const finalMessage: Message = {
                text: "That was the last question. Thank you for your time! The interview is now complete. You can analyze your sentiment score on the right.",
                sender: "ai",
            };
            setMessages((prev) => [...prev, finalMessage]);
            setInterviewState('finished');
        }
      }
      setIsTyping(false);
    }, 1500);
  };

  const getPlaceholderText = () => {
    switch (interviewState) {
        case 'awaiting_role':
            return "e.g., Software Engineer";
        case 'in_progress':
            return "Type your answer...";
        case 'finished':
            return "Interview complete.";
        default:
            return "Type your message...";
    }
  }

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
            placeholder={getPlaceholderText()}
            className="flex-1 rounded-full border-slate-600 bg-slate-900/80 text-gray-200 placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0 focus:ring-offset-slate-900"
            autoComplete="off"
            disabled={isTyping || interviewState === 'finished'}
          />
          <Button
            type="submit"
            size="icon"
            className="rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-600/50 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/60 focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            disabled={isTyping || interviewState === 'finished'}
          >
            <Send size={20} />
          </Button>
        </form>
      </div>
    </div>
  );
};