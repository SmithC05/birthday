import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isComplete, setIsComplete] = useState(false);
  const [wishIndex, setWishIndex] = useState(0);

  const advanceWishes = [
    "🎂 Advance Happy Birthday, Keerthana Madam! 🎂",
    "🌟 Happy Birthday to our brilliant Topper! 🌟",
    "💃 Advance wishes to the amazing Dancer! 💃",
    "🎤 Happy Birthday to our talented Singer! 🎤",
    "👑 Advance Birthday wishes to our Queen! 👑",
    "✨ Happy Birthday to the most beautiful soul! ✨",
    "🎊 Advance wishes to our shining Star! 🎊",
    "🌸 Happy Birthday to the sweetest person ever! 🌸",
    "🎯 Advance Birthday to our amazing Friend! 🎯",
    "💫 Happy Birthday to our brilliant Student! 💫",
    "🎁 Advance wishes to our precious Gem! 🎁",
    "🌺 Happy Birthday to our wonderful Keerthana! 🌺",
    "🎪 Advance Birthday to our talented Artist! 🎪",
    "🏆 Happy Birthday to our Champion! 🏆",
    "💖 Advance wishes to our beloved Friend! 💖",
    "🎈 Happy Birthday to our amazing Performer! 🎈"
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

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section 
      className="min-h-screen flex flex-col items-center justify-center py-16 px-4 relative"
      data-testid="section-countdown"
    >
      <div className="max-w-4xl w-full text-center flex-1 flex flex-col justify-center">
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

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300 animate-bounce"
        >
          <span className="text-sm mb-2">Scroll for more</span>
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}