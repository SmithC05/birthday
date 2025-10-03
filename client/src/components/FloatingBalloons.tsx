import { useState } from "react";

interface Balloon {
  id: number;
  left: number;
  color: string;
  delay: number;
  popped: boolean;
}

export default function FloatingBalloons() {
  const colors = ["#ec4899", "#a855f7", "#fbbf24", "#3b82f6", "#ef4444", "#10b981"];
  const [balloons, setBalloons] = useState<Balloon[]>(
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 90 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 5,
      popped: false,
    }))
  );

  const popBalloon = (id: number) => {
    setBalloons((prev) =>
      prev.map((balloon) =>
        balloon.id === id ? { ...balloon, popped: true } : balloon
      )
    );

    setTimeout(() => {
      setBalloons((prev) => prev.filter((balloon) => balloon.id !== id));
    }, 300);
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-30" data-testid="balloons-container">
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          onClick={() => popBalloon(balloon.id)}
          className={`absolute w-12 h-14 rounded-full pointer-events-auto cursor-pointer ${
            balloon.popped ? "animate-pop" : "animate-balloon-rise"
          }`}
          style={{
            left: `${balloon.left}%`,
            backgroundColor: balloon.color,
            animationDelay: `${balloon.delay}s`,
            bottom: "-100px",
            boxShadow: `inset -10px -10px 20px rgba(0,0,0,0.2), 0 0 20px ${balloon.color}40`,
          }}
          data-testid={`balloon-${balloon.id}`}
        >
          <div className="absolute bottom-0 left-1/2 w-0.5 h-8 bg-gray-400 -translate-x-1/2" />
        </div>
      ))}
    </div>
  );
}
