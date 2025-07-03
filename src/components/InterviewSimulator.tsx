import { ChatWindow } from "./ChatWindow";
import { SentimentCard } from "./SentimentCard";

export const InterviewSimulator = () => {
  return (
    <div className="grid h-full w-full grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <ChatWindow />
      </div>
      <div className="lg:col-span-1">
        <SentimentCard />
      </div>
    </div>
  );
};