import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Lock, Unlock, Clock } from "lucide-react";

interface PasswordEntryProps {
  onCorrectPassword: () => void;
  onSkipToCountdown: () => void;
}

export default function PasswordEntry({ onCorrectPassword, onSkipToCountdown }: PasswordEntryProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  // Check if it's already the birthday
  const now = new Date();
  const targetDate = new Date(2025, 9, 30, 0, 0, 0, 0); // Oct 30, 2025 at 12:00 AM
  const isBirthdayReached = now >= targetDate;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isBirthdayReached) {
      // Password is disabled on/after the birthday
      onCorrectPassword();
      return;
    }

    if (password === "00001236") { // Special password
      onCorrectPassword();
    } else {
      setError(true);
      setIsShaking(true);
      setTimeout(() => {
        setIsShaking(false);
        setError(false);
      }, 500);
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card
        className={`bg-white/10 backdrop-blur-md border-2 border-primary/50 p-8 max-w-md w-full ${isShaking ? "animate-shake" : ""
          }`}
        data-testid="card-password-entry"
      >
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
            <Lock className="w-8 h-8 text-primary" data-testid="icon-lock" />
          </div>
          <h2
            className="text-3xl font-bold text-white mb-2"
            data-testid="text-password-title"
          >
            Early Access
          </h2>
          <p className="text-white/80 text-sm" data-testid="text-password-subtitle">
            Enter the password to unlock the celebration early, or wait for the countdown to complete!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password..."
              className={`bg-white/10 border-2 text-white placeholder:text-white/50 ${error ? "border-red-500" : "border-white/30"
                }`}
              data-testid="input-password"
            />
            {error && (
              <p className="text-red-400 text-sm mt-2" data-testid="text-password-error">
                Incorrect password. Try again!
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full"
            variant="default"
            data-testid="button-submit-password"
          >
            <Unlock className="w-4 h-4 mr-2" />
            Unlock Celebration
          </Button>

          {!isBirthdayReached && (
            <Button
              type="button"
              onClick={onSkipToCountdown}
              className="w-full mt-3"
              variant="outline"
              data-testid="button-skip-to-countdown"
            >
              <Clock className="w-4 h-4 mr-2" />
              Wait for Countdown
            </Button>
          )}
        </form>

        <div className="mt-6 pt-6 border-t border-white/20">
          <p className="text-white/60 text-xs text-center" data-testid="text-password-hint">
            Hint: A special number that unlocks the magic! ✨
          </p>
        </div>
      </Card>
    </div>
  );
}
