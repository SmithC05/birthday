import { useEffect, useState } from "react";

interface Firework {
  id: number;
  x: number;
  y: number;
  color: string;
}

export default function FireworksSection() {
  const [fireworks, setFireworks] = useState<Firework[]>([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const section = document.querySelector('[data-testid="section-fireworks"]');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    const colors = ["#ec4899", "#a855f7", "#fbbf24", "#3b82f6", "#ef4444", "#10b981"];
    const interval = setInterval(() => {
      const newFirework: Firework = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100,
        y: 20 + Math.random() * 60,
        color: colors[Math.floor(Math.random() * colors.length)],
      };

      setFireworks((prev) => [...prev, newFirework]);

      setTimeout(() => {
        setFireworks((prev) => prev.filter((fw) => fw.id !== newFirework.id));
      }, 1000);
    }, 800);

    return () => clearInterval(interval);
  }, [visible]);

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-16 px-4"
      data-testid="section-fireworks"
    >
      {fireworks.map((firework) => (
        <div
          key={firework.id}
          className="absolute w-32 h-32 rounded-full animate-firework pointer-events-none"
          style={{
            left: `${firework.x}%`,
            top: `${firework.y}%`,
            border: `4px solid ${firework.color}`,
            boxShadow: `0 0 60px ${firework.color}`,
          }}
          data-testid={`firework-${firework.id}`}
        />
      ))}

      <div className="text-center z-10">
        <h2 
          className="text-5xl md:text-7xl font-bold text-white mb-8 animate-glow"
          data-testid="text-fireworks-title"
        >
          🎆 Once Again 🎆
        </h2>
        <p 
          className="text-4xl md:text-6xl text-white animate-float"
          style={{ fontFamily: 'Pacifico, cursive' }}
          data-testid="text-fireworks-message"
        >
          Happy Birthday Keerthana 🎉💖
        </p>
      </div>
    </section>
  );
}
