import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

interface FloatingHeart {
  id: number;
  left: number;
  delay: number;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart: FloatingHeart = {
        id: Date.now(),
        left: Math.random() * 100,
        delay: 0,
      };

      setHearts((prev) => [...prev, newHeart]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, 3000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20" data-testid="hearts-container">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-0 animate-heart-float"
          style={{ left: `${heart.left}%` }}
          data-testid={`heart-${heart.id}`}
        >
          <Heart className="text-pink-400 fill-pink-400 w-6 h-6" />
        </div>
      ))}
    </div>
  );
}
