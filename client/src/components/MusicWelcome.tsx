import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Music, Heart } from "lucide-react";

interface MusicWelcomeProps {
  onStart: () => void;
}

export default function MusicWelcome({ onStart }: MusicWelcomeProps) {
  const [isStarting, setIsStarting] = useState(false);

  const handleStart = () => {
    setIsStarting(true);
    setTimeout(() => {
      onStart();
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-birthday-pink/20 via-celebration-purple/20 to-party-blue/20 backdrop-blur-md">
      <div className="text-center space-y-8 p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl max-w-md mx-4">
        <div className="space-y-4">
          <div className="flex justify-center">
            <Heart className="h-16 w-16 text-birthday-pink animate-pulse" />
          </div>
          <h2 className="text-3xl font-bold text-white font-pacifico">
            Welcome to Keerthana's
          </h2>
          <h3 className="text-2xl font-bold text-birthday-pink font-pacifico">
            Birthday Celebration! 🎉
          </h3>
          <p className="text-white/80 text-lg">
            Tap below to start the magical experience with music
          </p>
        </div>
        
        <Button 
          onClick={handleStart}
          size="lg" 
          className={`bg-gradient-to-r from-birthday-pink to-celebration-purple hover:from-birthday-pink/80 hover:to-celebration-purple/80 text-white font-semibold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 ${
            isStarting ? 'scale-110 animate-pulse' : 'hover:scale-105'
          }`}
          disabled={isStarting}
        >
          <Music className="mr-3 h-6 w-6" />
          {isStarting ? 'Starting...' : 'Start Celebration 🎶'}
        </Button>
        
        <p className="text-white/60 text-sm">
          * Music will play automatically after this
        </p>
      </div>
    </div>
  );
}