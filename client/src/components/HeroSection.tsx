import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Happy Birthday 🥳 Keerthana 🎂🎈";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const scrollToTimeline = () => {
    const timelineSection = document.querySelector('[data-testid="section-timeline"]');
    if (timelineSection) {
      timelineSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4"
      data-testid="section-hero"
    >
      <div className="text-center z-10 flex-1 flex flex-col justify-center">
        <h1 
          className="text-5xl md:text-8xl font-bold text-white animate-glow mb-8"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          data-testid="text-hero-greeting"
        >
          {displayText}
          <span className={displayText === fullText ? "opacity-0" : "animate-blink"}>|</span>
        </h1>
        <p 
          className="text-2xl md:text-4xl text-white/90 animate-float-slow mt-8"
          style={{ fontFamily: 'Pacifico, cursive' }}
          data-testid="text-hero-subtitle"
        >
          Let's celebrate your special day!
        </p>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={scrollToTimeline}
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300 animate-bounce"
        >
          <span className="text-sm mb-2">Explore your journey</span>
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
