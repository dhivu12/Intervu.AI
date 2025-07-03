import { InterviewSimulator } from "@/components/InterviewSimulator";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full bg-gray-900 text-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-gray-900 via-purple-900/80 to-blue-900/70" />
      
      <main className="container mx-auto flex h-screen flex-col p-4 md:p-8">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl md:text-5xl">
            AI Interview Simulator
          </h1>
          <p className="mt-2 text-base text-gray-400 md:text-lg">
            Practice your interview skills with our advanced AI.
          </p>
        </header>
        
        <div className="flex-1">
          <InterviewSimulator />
        </div>
        
        <footer className="mt-4">
          <MadeWithDyad />
        </footer>
      </main>
    </div>
  );
};

export default Index;