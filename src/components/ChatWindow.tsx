import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, RefreshCw } from "lucide-react";
import { ChatMessage } from "./ChatMessage";
import { Sentiment } from "./SentimentCard";
import { roleBasedQuestions, Question } from "@/data/interview-questions";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

type Message = {
  text: string;
  sender: "user" | "ai";
};

const initialMessages: Message[] = [
  {
    text: "Hello! I'm your AI interviewer. To get started, please tell me the job role you're applying for (e.g., Frontend Developer, Backend Developer, Cybersecurity Analyst).",
    sender: "ai",
  },
];

const analyzeSentiment = (text: string): Sentiment => {
  const positiveKeywords = ['achieved', 'success', 'proud', 'led', 'improved', 'created', 'resolved', 'efficiently', 'effectively', 'completed', 'launched', 'drove', 'spearheaded', 'mentored'];
  const negativeKeywords = ['failed', 'problem', 'difficult', "couldn't", 'struggled', 'issue', 'bad', 'never', 'mistake', 'unable'];

  const lowerText = text.toLowerCase();
  let score = 0;

  positiveKeywords.forEach(word => {
    if (lowerText.includes(word)) score++;
  });

  negativeKeywords.forEach(word => {
    if (lowerText.includes(word)) score--;
  });

  if (score > 0) return "Positive";
  if (score < 0) return "Negative";
  return "Neutral";
};

const generateFeedback = (userAnswer: string, question: Question): { sentiment: Sentiment, feedback: string } => {
    const sentiment = analyzeSentiment(userAnswer);

    const positiveTemplates = [
        "That's a strong, detailed answer. Well done.",
        "Excellent response. You've clearly articulated your experience.",
        "Great answer! You've provided a clear and confident response."
    ];

    const neutralTemplates = [
        `That's a solid answer. To make it even stronger, try to include specific results or metrics to quantify your impact. For example, you could frame it like this:\n\n"${question.suggestedAnswer}"`,
        `Good start. You can enhance your answer by providing more specific details about the outcome. Here's a suggested approach:\n\n"${question.suggestedAnswer}"`
    ];

    const negativeTemplates = [
        `Thanks for your answer. For future reference, here's a way you could frame that response more strongly:\n\n"${question.suggestedAnswer}"`,
        `That's a common challenge. A more structured answer can help showcase your skills better. Here's an example approach:\n\n"${question.suggestedAnswer}"`
    ];

    let feedback = "";

    if (sentiment === 'Positive') {
        feedback = positiveTemplates[Math.floor(Math.random() * positiveTemplates.length)];
    } else if (sentiment === 'Neutral') {
        feedback = neutralTemplates[Math.floor(Math.random() * neutralTemplates.length)];
    } else { // Negative
        feedback = negativeTemplates[Math.floor(Math.random() * negativeTemplates.length)];
    }

    return { sentiment, feedback };
}

interface ChatWindowProps {
  setActiveSentiment: (sentiment: Sentiment) => void;
}

export const ChatWindow = ({ setActiveSentiment }: ChatWindowProps) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [interviewState, setInterviewState] = useState<'awaiting_role' | 'in_progress' | 'finished'>('awaiting_role');
  const [availableQuestions, setAvailableQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleReset = () => {
    setMessages(initialMessages);
    setInterviewState('awaiting_role');
    setCurrentQuestion(null);
    setAvailableQuestions([]);
    setInput("");
    setIsTyping(false);
    setActiveSentiment('Neutral');
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping || interviewState === 'finished') return;

    const userMessage: Message = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let newMessages: Message[] = [];

      if (interviewState === 'awaiting_role') {
        const userRole = currentInput.trim();
        const generalQuestions = roleBasedQuestions["General"] || [];
        
        const matchedRoleKey = Object.keys(roleBasedQuestions).find(key => key.toLowerCase() === userRole.toLowerCase());

        let questionsForInterview: Question[] = [];
        let greetingText = "";

        if (matchedRoleKey && matchedRoleKey !== "General") {
            questionsForInterview = [...roleBasedQuestions[matchedRoleKey], ...generalQuestions];
            greetingText = `Great! We'll start the interview for a ${matchedRoleKey} role.`;
        } else {
            questionsForInterview = [...generalQuestions];
            greetingText = `I don't have specific questions for a "${userRole}" role, so we'll proceed with general interview questions. Let's begin.`;
        }

        const shuffledQuestions = questionsForInterview.sort(() => 0.5 - Math.random());
        newMessages.push({ text: greetingText, sender: "ai" });

        if (shuffledQuestions.length > 0) {
            const firstQuestion = shuffledQuestions[0];
            setCurrentQuestion(firstQuestion);
            setAvailableQuestions(shuffledQuestions.slice(1));
            newMessages.push({ text: firstQuestion.question, sender: "ai" });
            setInterviewState('in_progress');
        } else {
            newMessages.push({ text: "It seems I'm out of questions! The interview is complete.", sender: "ai" });
            setInterviewState('finished');
        }
      } else if (interviewState === 'in_progress' && currentQuestion) {
        const { sentiment, feedback } = generateFeedback(currentInput, currentQuestion);
        setActiveSentiment(sentiment);
        newMessages.push({ text: feedback, sender: "ai" });

        if (availableQuestions.length > 0) {
            const nextQuestion = availableQuestions[0];
            setCurrentQuestion(nextQuestion);
            setAvailableQuestions(availableQuestions.slice(1));
            newMessages.push({ text: nextQuestion.question, sender: "ai" });
        } else {
            newMessages.push({ text: "That was the last question. Thank you for your time! The interview is now complete.", sender: "ai" });
            setInterviewState('finished');
        }
      }
      
      setMessages((prev) => [...prev, ...newMessages]);
      setIsTyping(false);
    }, 2000);
  };

  const getPlaceholderText = () => {
    switch (interviewState) {
        case 'awaiting_role':
            return "e.g., Frontend Developer";
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
            disabled={isTyping || !input.trim()}
          >
            <Send size={20} />
          </Button>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={handleReset}
                className="rounded-full border-slate-600 bg-slate-800 text-gray-400 transition-colors hover:bg-slate-700 hover:text-white"
              >
                <RefreshCw size={20} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Change Role / Restart</p>
            </TooltipContent>
          </Tooltip>
        </form>
      </div>
    </div>
  );
};