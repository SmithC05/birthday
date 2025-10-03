import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isComplete, setIsComplete] = useState(false);
  const [wishIndex, setWishIndex] = useState(0);

  const advanceWishes = [
    "🌟 Every day until your birthday is a gift! 🌟",
    "💖 Counting down to celebrate the amazing person you are! 💖",
    "🎈 The excitement is building up for your special day! 🎈",
    "✨ Each second brings us closer to your magical moment! ✨",
    "🎊 Can't wait to shower you with birthday love! 🎊",
    "🌸 Your birthday countdown makes every moment special! 🌸",
    "🎯 Almost there! Get ready for the best celebration ever! 🎯",
    "💫 The universe is preparing something beautiful for you! 💫"
  ];

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setFullYear(2025, 9, 30);
    targetDate.setHours(0, 0, 0, 0);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setIsComplete(true);
        clearInterval(timer);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Rotate wishes every 4 seconds
  useEffect(() => {
    const wishTimer = setInterval(() => {
      setWishIndex((prev) => (prev + 1) % advanceWishes.length);
    }, 4000);

    return () => clearInterval(wishTimer);
  }, [advanceWishes.length]);

  return (
    <section 
      className="min-h-screen flex items-center justify-center py-16 px-4"
      data-testid="section-countdown"
    >
      <div className="max-w-4xl w-full text-center">
        <h2 
          className="text-4xl md:text-6xl font-bold text-white mb-8 animate-glow"
          data-testid="text-countdown-title"
        >
          ⏳ Countdown to Your Birthday ⏳
        </h2>

        {/* Advance Birthday Wishes */}
        <div className="mb-12">
          <p 
            className="text-xl md:text-2xl text-birthday-pink font-semibold animate-fade-in mb-4"
            style={{ fontFamily: 'Pacifico, cursive' }}
            key={wishIndex}
          >
            {advanceWishes[wishIndex]}
          </p>
          <div className="flex justify-center space-x-2 mb-6">
            {advanceWishes.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === wishIndex ? 'bg-birthday-pink scale-125' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {!isComplete ? (
          <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Minutes" },
              { value: timeLeft.seconds, label: "Seconds" },
            ].map((item, index) => (
              <Card 
                key={index}
                className="bg-white/10 backdrop-blur-md border-2 border-primary/50 p-6 md:p-8 min-w-[100px] md:min-w-[140px] animate-pulse-glow"
                data-testid={`card-countdown-${item.label.toLowerCase()}`}
              >
                <div className="text-4xl md:text-6xl font-bold text-white mb-2" data-testid={`text-${item.label.toLowerCase()}-value`}>
                  {item.value.toString().padStart(2, "0")}
                </div>
                <div className="text-sm md:text-lg text-white/80" data-testid={`text-${item.label.toLowerCase()}-label`}>
                  {item.label}
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div 
            className="text-4xl md:text-6xl font-bold text-white animate-glow"
            style={{ fontFamily: 'Pacifico, cursive' }}
            data-testid="text-countdown-complete"
          >
            It's officially your day! 🎉
          </div>
        )}
      </div>
    </section>
  );
}
