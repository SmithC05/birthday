import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

export default function FloatingSparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const colors = ["text-yellow-300", "text-pink-300", "text-blue-300", "text-purple-300"];

  useEffect(() => {
    const interval = setInterval(() => {
      const newSparkle: Sparkle = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
      };

      setSparkles((prev) => [...prev, newSparkle]);

      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
      }, 2000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-15" data-testid="sparkles-container">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-sparkle"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
          data-testid={`sparkle-${sparkle.id}`}
        >
          <Sparkles 
            className={`${sparkle.color}`}
            style={{ width: `${sparkle.size}px`, height: `${sparkle.size}px` }}
          />
        </div>
      ))}
    </div>
  );
}
