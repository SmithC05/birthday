import { useState } from "react";

interface Balloon {
  id: number;
  left: number;
  color: string;
  delay: number;
  popped: boolean;
}

export default function FloatingBalloons() {
  const colors = ["#ef4444", "#3b82f6", "#ec4899", "#a855f7", "#10b981", "#fbbf24"];
  const [balloons, setBalloons] = useState<Balloon[]>(
    Array.from({ length: 20 }, (_, i) => ({
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
          className={`absolute pointer-events-auto cursor-pointer transition-all ${
            balloon.popped ? "animate-pop" : "animate-balloon-rise"
          }`}
          style={{
            left: `${balloon.left}%`,
            animationDelay: `${balloon.delay}s`,
            bottom: "-120px",
          }}
          data-testid={`balloon-${balloon.id}`}
        >
          <div
            className="w-16 h-20 rounded-full relative"
            style={{
              backgroundColor: balloon.color,
              background: `radial-gradient(ellipse at 30% 30%, ${balloon.color}ff, ${balloon.color}cc 40%, ${balloon.color}99 70%, ${balloon.color}66)`,
              boxShadow: `
                inset -8px -12px 20px rgba(0,0,0,0.3),
                inset 10px 15px 25px rgba(255,255,255,0.4),
                0 0 30px ${balloon.color}60,
                0 5px 15px rgba(0,0,0,0.3)
              `,
            }}
          >
            <div 
              className="absolute top-3 left-4 w-6 h-8 rounded-full opacity-60"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.8), transparent)',
              }}
            />
          </div>
          <div 
            className="absolute -bottom-1 left-1/2 w-0 h-0 -translate-x-1/2"
            style={{
              borderLeft: '4px solid transparent',
              borderRight: '4px solid transparent',
              borderTop: `8px solid ${balloon.color}99`,
            }}
          />
          <div 
            className="absolute top-[78px] left-1/2 w-0.5 h-12 -translate-x-1/2"
            style={{
              background: 'linear-gradient(to bottom, rgba(200,200,200,0.8), rgba(150,150,150,0.6))',
            }}
          />
        </div>
      ))}
    </div>
  );
}
