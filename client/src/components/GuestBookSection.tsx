import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Heart, Send, ChevronDown } from "lucide-react";

interface Wish {
  name: string;
  message: string;
  timestamp: string;
}

export default function GuestBookSection() {
  const [wishes, setWishes] = useState<Wish[]>([
    {
      name: "Your Best Friend",
      message: "Happy Birthday Keerthana! You're the most amazing person I know. Hope your day is filled with love and joy! 🎉💖",
      timestamp: "Just now"
    },
    {
      name: "Your Classmate",
      message: "Wishing our brilliant topper a very happy birthday! Keep shining bright! ✨📚",
      timestamp: "2 minutes ago"
    }
  ]);
  const [newWish, setNewWish] = useState({ name: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitWish = () => {
    if (newWish.name.trim() && newWish.message.trim()) {
      setIsSubmitting(true);
      setTimeout(() => {
        const wish: Wish = {
          name: newWish.name,
          message: newWish.message,
          timestamp: "Just now"
        };
        setWishes(prev => [wish, ...prev]);
        setNewWish({ name: "", message: "" });
        setIsSubmitting(false);
      }, 1000);
    }
  };

  const scrollToNext = () => {
    const quizSection = document.querySelector('[data-testid="section-quiz"]');
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-16 px-4 relative" data-testid="section-guestbook">
      <div className="max-w-4xl w-full flex-1 flex flex-col justify-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-12 animate-glow">
          💌 Birthday Guest Book 💌
        </h2>

        {/* Add New Wish */}
        <Card className="bg-white/10 backdrop-blur-md border-2 border-birthday-pink/50 p-6 mb-8">
          <h3 className="text-2xl font-bold text-birthday-pink mb-4" style={{ fontFamily: 'Pacifico, cursive' }}>
            Leave a Birthday Wish for Keerthana! 🎁
          </h3>
          <div className="space-y-4">
            <Input
              placeholder="Your name..."
              value={newWish.name}
              onChange={(e) => setNewWish(prev => ({ ...prev, name: e.target.value }))}
              className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
            />
            <Textarea
              placeholder="Write your birthday message here..."
              value={newWish.message}
              onChange={(e) => setNewWish(prev => ({ ...prev, message: e.target.value }))}
              className="bg-white/10 border-white/30 text-white placeholder:text-white/50 min-h-[100px]"
            />
            <Button
              onClick={handleSubmitWish}
              disabled={isSubmitting || !newWish.name.trim() || !newWish.message.trim()}
              className="bg-birthday-pink hover:bg-birthday-pink/80 text-white"
            >
              <Send className="mr-2 h-4 w-4" />
              {isSubmitting ? "Sending..." : "Send Birthday Wish"}
            </Button>
          </div>
        </Card>

        {/* Display Wishes */}
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {wishes.map((wish, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border border-white/20 p-4">
              <div className="flex items-start space-x-3">
                <Heart className="w-5 h-5 text-birthday-pink mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-white">{wish.name}</h4>
                    <span className="text-xs text-white/60">{wish.timestamp}</span>
                  </div>
                  <p className="text-white/80 text-sm">{wish.message}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300 animate-bounce"
        >
          <span className="text-sm mb-2">Take the birthday quiz</span>
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}