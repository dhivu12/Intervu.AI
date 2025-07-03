import { cn } from "@/lib/utils";
import { AssistantAvatar } from "./AssistantAvatar";

interface ChatMessageProps {
  message: {
    text: string;
    sender: "user" | "ai";
  };
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const isAi = message.sender === "ai";

  return (
    <div
      className={cn("flex items-start gap-3", {
        "justify-start": isAi,
        "justify-end": !isAi,
      })}
    >
      {isAi && <AssistantAvatar className="h-8 w-8" />}
      <div
        className={cn(
          "max-w-sm rounded-xl px-4 py-3 text-sm md:max-w-md",
          isAi
            ? "bg-slate-700 text-gray-200"
            : "bg-indigo-600 text-white"
        )}
      >
        <p>{message.text}</p>
      </div>
    </div>
  );
};