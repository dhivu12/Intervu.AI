import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { ChatMessage } from "./ChatMessage";
import { Sentiment } from "./SentimentCard";

type Message = {
  text: string;
  sender: "user" | "ai";
};

type Question = {
  question: string;
  suggestedAnswer: string;
};

// Expanded and shuffled question pool with suggested answers
const allQuestions: Question[] = [
    {
        question: "Tell me about a time you had to handle a difficult stakeholder.",
        suggestedAnswer: "A good answer would follow the STAR method: Situation (describe the context), Task (what was required of you), Action (what you did), and Result (the positive outcome). For example: 'In my previous role, a key stakeholder for a project was unhappy with our progress (Situation). My task was to manage their expectations and get their buy-in (Task). I scheduled a meeting to demonstrate the work we'd done and created a new, more detailed timeline with clear milestones (Action). As a result, the stakeholder felt heard and became a strong advocate for the project, which we delivered on time (Result).'"
    },
    {
        question: "How do you prioritize your work when you have multiple competing deadlines?",
        suggestedAnswer: "Focus on your method. For example: 'I use a combination of the Eisenhower Matrix and impact analysis. I categorize tasks by urgency and importance. For tasks of similar priority, I assess which will have the greatest impact on our team's goals. I also believe in proactive communication, so I keep my manager updated on my workload and potential bottlenecks.'"
    },
    {
        question: "Describe a project you are particularly proud of and explain your role in it.",
        suggestedAnswer: "Be specific and highlight your contributions. 'I'm very proud of the Project X launch. I was responsible for developing the user authentication module. I took the initiative to implement multi-factor authentication, which wasn't in the original spec but increased security by 30%. The project launched successfully and received great user feedback.'"
    },
    {
        question: "Where do you see yourself in five years?",
        suggestedAnswer: "Show ambition that aligns with the company. 'In five years, I hope to have become a subject matter expert in this field and potentially be in a position to mentor junior team members. I'm excited by the growth opportunities at this company and see a long-term future here.'"
    },
    {
        question: "What is your biggest weakness and how are you working to improve it?",
        suggestedAnswer: "Choose a real but manageable weakness and show self-awareness. 'In the past, I sometimes took on too much work myself. I've learned to delegate more effectively and trust my teammates. I've been actively practicing this by leading smaller project teams, which has improved our overall efficiency.'"
    },
    {
        question: "Describe a time you disagreed with your boss. How did you handle it?",
        suggestedAnswer: "Focus on professionalism and positive resolution. 'My manager suggested a technical approach I felt wasn't scalable. I gathered data to support an alternative solution and presented it to them privately, focusing on the long-term benefits. They appreciated the research, and we ultimately went with a hybrid approach that incorporated both our ideas.'"
    },
    {
        question: "Tell me about a time you failed. What did you learn from it?",
        suggestedAnswer: "Emphasize learning and growth. 'Early in my career, I missed a deadline on a small project because I didn't ask for help. It was a valuable lesson in the importance of communication and teamwork. Since then, I've made it a point to provide regular progress updates and never hesitate to collaborate with colleagues when facing a challenge.'"
    }
];

const initialMessages: Message[] = [
  {
    text: "Hello! I'm your AI interviewer. To get started, please tell me the job role you're applying for.",
    sender: "ai",
  },
];

const analyzeSentiment = (text: string): Sentiment => {    
    const positiveKeywords = ['achieved', 'success', 'proud', 'led', 'improved', 'created', 'resolved', 'efficiently', 'effectively', 'completed', 'launched', 'drove'];
    const negativeKeywords = ['failed', 'problem', 'difficult', "couldn't", 'struggled', 'issue', 'bad', 'never', 'mistake'];

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
  const [availableQuestions, setAvailableQuestions] = useState<Question[]>(() => [...allQuestions].sort(() => 0.5 - Math.random()));
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);

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

    setTimeout(() => {
      let newMessages: Message[] = [];

      if (interviewState === 'awaiting_role') {
        newMessages.push({
            text: `Great! We'll start the interview for a ${currentInput} role.`,
            sender: "ai",
        });

        if (availableQuestions.length > 0) {
            const firstQuestion = availableQuestions[0];
            setCurrentQuestion(firstQuestion);
            setAvailableQuestions(availableQuestions.slice(1));
            newMessages.push({ text: firstQuestion.question, sender: "ai" });
            setInterviewState('in_progress');
        } else {
            newMessages.push({ text: "It seems I'm out of questions! The interview is complete.", sender: "ai" });
            setInterviewState('finished');
        }
      } else if (interviewState === 'in_progress') {
        const sentiment = analyzeSentiment(currentInput);
        setActiveSentiment(sentiment);

        if (sentiment === 'Negative' && currentQuestion) {
            newMessages.push({
                text: `Thanks for your answer. For future reference, here's a way you could frame that response more strongly: \n\n"${currentQuestion.suggestedAnswer}"`,
                sender: "ai",
            });
        }

        if (availableQuestions.length > 0) {
            const nextQuestion = availableQuestions[0];
            setCurrentQuestion(nextQuestion);
            setAvailableQuestions(availableQuestions.slice(1));
            newMessages.push({ text: nextQuestion.question, sender: "ai" });
        } else {
            newMessages.push({
                text: "That was the last question. Thank you for your time! The interview is now complete. You can analyze your sentiment score on the right.",
                sender: "ai",
            });
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