import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

export type Sentiment = "Positive" | "Neutral" | "Negative";

interface SentimentDisplayProps {
  sentiment: Sentiment;
  emoji: string;
  color: string;
  isActive: boolean;
}

const SentimentDisplay: React.FC<SentimentDisplayProps> = ({ sentiment, emoji, color, isActive }) => (
  <div
    className={cn(
      "flex items-center justify-between rounded-lg p-3 transition-all duration-300",
      isActive ? `${color} bg-opacity-20 shadow-lg` : "bg-white/5"
    )}
  >
    <div className="flex items-center gap-3">
      <span className="text-2xl">{emoji}</span>
      <span className="font-medium text-gray-200">{sentiment}</span>
    </div>
    <div
      className={cn(
        "h-3 w-3 rounded-full transition-all duration-300",
        isActive ? color : "bg-gray-600"
      )}
    />
  </div>
);

interface SentimentCardProps {
    activeSentiment: Sentiment;
}

export const SentimentCard = ({ activeSentiment }: SentimentCardProps) => {
  return (
    <Card className="border-slate-700 bg-slate-800/50 text-white shadow-2xl backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-200">
          Live Sentiment Analysis
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <SentimentDisplay
          sentiment="Positive"
          emoji="😊"
          color="bg-green-500"
          isActive={activeSentiment === "Positive"}
        />
        <SentimentDisplay
          sentiment="Neutral"
          emoji="😐"
          color="bg-yellow-500"
          isActive={activeSentiment === "Neutral"}
        />
        <SentimentDisplay
          sentiment="Negative"
          emoji="😠"
          color="bg-red-500"
          isActive={activeSentiment === "Negative"}
        />
      </CardContent>
    </Card>
  );
};