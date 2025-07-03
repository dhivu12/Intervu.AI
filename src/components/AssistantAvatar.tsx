import { Bot } from "lucide-react";
import { cn } from "@/lib/utils";

interface AssistantAvatarProps {
  className?: string;
}

export const AssistantAvatar = ({ className }: AssistantAvatarProps) => {
  return (
    <div
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg",
        className
      )}
    >
      <Bot size={24} />
    </div>
  );
};