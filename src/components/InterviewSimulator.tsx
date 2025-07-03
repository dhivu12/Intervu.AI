import { useState } from "react";
import { ChatWindow } from "./ChatWindow";
import { SentimentCard, Sentiment } from "./SentimentCard";

export const InterviewSimulator = () => {
  const [activeSentiment, setActiveSentiment] = useState<Sentiment>("Neutral");

  return (
    <div className="grid h-full w-full grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <ChatWindow setActiveSentiment={setActiveSentiment} />
      </div>
      <div className="lg:col-span-1">
        <SentimentCard activeSentiment={activeSentiment} />
      </div>
    </div>
  );
};