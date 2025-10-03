import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isComplete, setIsComplete] = useState(false);
  const [wishIndex, setWishIndex] = useState(0);

  const advanceWishes = [
    "� Advan ce Happy Birthday, Keerthana! 🎂",
    "🌟 Your special day is almost here, beautiful! 🌟",
    "💖 Sending you early birthday love and joy! 💖",
    "🎈 The countdown to your magical day has begun! 🎈",
    "✨ Every moment brings us closer to celebrating YOU! ✨",
    "� Get reiady for the most amazing birthday celebration! �",
    "� Advance hwishes for the sweetest person ever! 🌸",
    "🎯 Your birthday is going to be absolutely perfect! 🎯",
    "💫 Keerthana, you deserve all the happiness in the world! 💫",
    "🎁 The best gift is having you in our lives! 🎁",
    "🌺 Advance Happy Birthday to our shining star! 🌺",
    "🎪 The celebration countdown is on - just for you! 🎪"
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
          🎉 Keerthana's Birthday Countdown 🎉
        </h2>

        {/* Advance Happy Birthday Wishes */}
        <div className="mb-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-birthday-pink/30">
          <h3 className="text-2xl md:text-3xl font-bold text-birthday-pink mb-6" style={{ fontFamily: 'Pacifico, cursive' }}>
            Advance Birthday Wishes! 💝
          </h3>
          <p 
            className="text-xl md:text-2xl text-white font-semibold animate-fade-in mb-6"
            style={{ fontFamily: 'Pacifico, cursive' }}
            key={wishIndex}
          >
            {advanceWishes[wishIndex]}
          </p>
          <div className="flex justify-center space-x-2 mb-4">
            {advanceWishes.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === wishIndex ? 'bg-birthday-pink scale-125 shadow-lg shadow-birthday-pink/50' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
          <p className="text-white/70 text-sm">
            More wishes coming every few seconds! 🎈
          </p>
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
