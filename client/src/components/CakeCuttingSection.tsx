import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cake, Sparkles, Heart, ChevronDown } from "lucide-react";

export default function CakeCuttingSection() {
  const [cakeStage, setCakeStage] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [candlesBlown, setCandlesBlown] = useState(false);

  const cakeStages = [
    "🎂 Beautiful Birthday Cake Ready!",
    "🕯️ Lighting the candles...",
    "✨ Make a wish, Keerthana!",
    "🎉 Happy Birthday! Cake cutting time!",
    "🍰 Delicious cake for everyone!"
  ];

  const handleCakeAction = () => {
    if (cakeStage < cakeStages.length - 1) {
      setCakeStage(prev => prev + 1);
      if (cakeStage === 2) {
        // Blow candles stage
        setCandlesBlown(true);
        setTimeout(() => setShowCelebration(true), 1000);
      }
    }
  };

  const scrollToNext = () => {
    const guestBookSection = document.querySelector('[data-testid="section-guestbook"]');
    if (guestBookSection) {
      guestBookSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-16 px-4 relative" data-testid="section-cake">
      <div className="max-w-4xl w-full text-center flex-1 flex flex-col justify-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 animate-glow">
          🎂 Virtual Cake Cutting 🎂
        </h2>

        <Card className="bg-white/10 backdrop-blur-md border-2 border-birthday-pink/50 p-8 mb-8">
          <div className="text-8xl mb-6 animate-bounce">
            {cakeStage === 0 && "🎂"}
            {cakeStage === 1 && "🕯️🎂🕯️"}
            {cakeStage === 2 && "🕯️🎂🕯️"}
            {cakeStage === 3 && "🍰"}
            {cakeStage === 4 && "🍰🎉"}
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Pacifico, cursive' }}>
            {cakeStages[cakeStage]}
          </h3>

          {cakeStage < 4 && (
            <Button
              onClick={handleCakeAction}
              size="lg"
              className="bg-birthday-pink hover:bg-birthday-pink/80 text-white font-semibold py-3 px-8"
            >
              {cakeStage === 0 && <><Cake className="mr-2 h-5 w-5" /> Light Candles</>}
              {cakeStage === 1 && <><Sparkles className="mr-2 h-5 w-5" /> Make a Wish</>}
              {cakeStage === 2 && <><Heart className="mr-2 h-5 w-5" /> Blow Candles</>}
              {cakeStage === 3 && <><Cake className="mr-2 h-5 w-5" /> Cut the Cake</>}
            </Button>
          )}

          {showCelebration && (
            <div className="mt-6 animate-fade-in">
              <p className="text-xl text-birthday-pink font-semibold mb-4" style={{ fontFamily: 'Pacifico, cursive' }}>
                🎊 Congratulations Keerthana! 🎊
              </p>
              <p className="text-white/80">
                May all your wishes come true on this special day!
              </p>
            </div>
          )}
        </Card>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300 animate-bounce"
        >
          <span className="text-sm mb-2">Sign the guest book</span>
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}