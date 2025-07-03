import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import React from "react";
import { AnalysisResult, Sentiment } from "@/lib/analysis";

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
  analysis: AnalysisResult | null;
}

export const SentimentCard = ({ analysis }: SentimentCardProps) => {
  const activeSentiment = analysis?.sentiment || "Neutral";

  return (
    <Card className="border-slate-700 bg-slate-800/50 text-white shadow-2xl backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-200">
          Live Sentiment Analysis
        </CardTitle>
        <CardDescription>Your response is analyzed in real-time.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
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
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold text-gray-400">Talking Points</h3>
          <div className="flex flex-wrap gap-2">
            {analysis && analysis.keywords.length > 0 ? (
              analysis.keywords.map((keyword) => (
                <Badge key={keyword} variant="secondary" className="bg-slate-700 text-slate-200">
                  {keyword}
                </Badge>
              ))
            ) : (
              <p className="text-sm text-gray-500">No key topics detected yet...</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};