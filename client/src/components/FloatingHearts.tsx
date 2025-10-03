import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

interface FloatingHeart {
  id: number;
  left: number;
  delay: number;
  color: string;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);
  const colors = [
    { text: "text-blue-500", fill: "fill-blue-500" },
    { text: "text-red-500", fill: "fill-red-500" },
    { text: "text-blue-400", fill: "fill-blue-400" },
    { text: "text-red-400", fill: "fill-red-400" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const newHeart: FloatingHeart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        delay: 0,
        color: `${randomColor.text} ${randomColor.fill}`,
      };

      setHearts((prev) => [...prev, newHeart]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, 3000);
    }, 1500);

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
          <Heart className={`${heart.color} w-6 h-6`} />
        </div>
      ))}
    </div>
  );
}
