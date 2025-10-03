import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isComplete, setIsComplete] = useState(false);

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

  return (
    <section 
      className="min-h-screen flex items-center justify-center py-16 px-4"
      data-testid="section-countdown"
    >
      <div className="max-w-4xl w-full text-center">
        <h2 
          className="text-4xl md:text-6xl font-bold text-white mb-12 animate-glow"
          data-testid="text-countdown-title"
        >
          ⏳ Countdown to Your Birthday ⏳
        </h2>

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
