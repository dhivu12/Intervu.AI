import { BrainCircuit } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-2">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
            <BrainCircuit size={36} className="text-white" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
            AI Interview Sim
        </h1>
    </div>
  );
};