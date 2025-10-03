import { useEffect, useState } from "react";

interface Firework {
  id: number;
  x: number;
  y: number;
  color: string;
}

export default function PeriodicFireworks() {
  const [fireworks, setFireworks] = useState<Firework[]>([]);
  const colors = ["#ef4444", "#3b82f6", "#ec4899", "#fbbf24", "#10b981"];

  useEffect(() => {
    const interval = setInterval(() => {
      const newFirework: Firework = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 80 + 10,
        color: colors[Math.floor(Math.random() * colors.length)],
      };

      setFireworks((prev) => [...prev, newFirework]);

      setTimeout(() => {
        setFireworks((prev) => prev.filter((fw) => fw.id !== newFirework.id));
      }, 1200);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-25" data-testid="periodic-fireworks-container">
      {fireworks.map((firework) => (
        <div
          key={firework.id}
          className="absolute w-24 h-24 rounded-full animate-firework pointer-events-none"
          style={{
            left: `${firework.x}%`,
            top: `${firework.y}%`,
            border: `3px solid ${firework.color}`,
            boxShadow: `0 0 40px ${firework.color}`,
          }}
          data-testid={`periodic-firework-${firework.id}`}
        />
      ))}
    </div>
  );
}
