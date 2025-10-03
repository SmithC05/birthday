import { useEffect, useState } from "react";

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

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
      data-testid="section-hero"
    >
      <div className="text-center z-10">
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
    </section>
  );
}
