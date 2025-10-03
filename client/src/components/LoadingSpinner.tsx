import { Heart } from "lucide-react";

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-birthday-pink/20 via-celebration-purple/20 to-party-blue/20 backdrop-blur-sm">
      <div className="text-center space-y-6">
        <div className="relative">
          <Heart className="h-16 w-16 text-birthday-pink animate-pulse mx-auto" />
          <div className="absolute inset-0 h-16 w-16 border-4 border-birthday-pink/30 border-t-birthday-pink rounded-full animate-spin mx-auto"></div>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white font-pacifico">
            Preparing the Magic...
          </h3>
          <p className="text-white/80">
            Loading your birthday surprise 🎉
          </p>
        </div>
      </div>
    </div>
  );
}