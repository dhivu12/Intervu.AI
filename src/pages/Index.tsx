import { InterviewSimulator } from "@/components/InterviewSimulator";
import { Logo } from "@/components/Logo";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full bg-gray-900 text-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-gray-900 via-purple-900/80 to-blue-900/70" />
      
      <main className="container mx-auto flex h-screen flex-col p-4 md:p-8">
        <header className="mb-6 flex flex-col items-center text-center">
          <Logo />
          <p className="mt-4 text-base text-gray-400 md:text-lg">
            Practice your interview skills with our advanced AI.
          </p>
        </header>
        
        <div className="flex-1">
          <InterviewSimulator />
        </div>
        
        <footer className="mt-4">
          {/* Watermark removed */}
        </footer>
      </main>
    </div>
  );
};

export default Index;