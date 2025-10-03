import { useEffect, useState } from "react";

const messages = [
  "Wishing you all the happiness today & forever ✨🎁",
  "May your day be filled with love, laughter, and joy 💖",
  "Here's to another year of wonderful memories 🌟",
  "You deserve all the best things life has to offer 🎉",
  "Cheers to you on your special day! 🥳",
];

export default function MessagesSection() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && visibleMessages.length === 0) {
            messages.forEach((_, index) => {
              setTimeout(() => {
                setVisibleMessages((prev) => [...prev, index]);
              }, index * 1500);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    const section = document.querySelector('[data-testid="section-messages"]');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [visibleMessages.length]);

  return (
    <section 
      className="min-h-screen flex items-center justify-center py-16 px-4"
      data-testid="section-messages"
    >
      <div className="max-w-4xl w-full">
        <h2 
          className="text-4xl md:text-6xl font-bold text-center text-white mb-16 animate-glow"
          data-testid="text-messages-title"
        >
          💌 Special Wishes 💌
        </h2>
        
        <div className="space-y-8">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`text-2xl md:text-3xl text-white text-center transition-all duration-1000 ${
                visibleMessages.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ fontFamily: 'Pacifico, cursive' }}
              data-testid={`text-message-${index}`}
            >
              {message}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
