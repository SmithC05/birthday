import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Gift } from "lucide-react";

export default function SurpriseSection() {
  const [showSurprise, setShowSurprise] = useState(false);

  const handleReveal = () => {
    setShowSurprise(true);
    console.log("Surprise revealed!");
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center py-16 px-4"
      data-testid="section-surprise"
    >
      <div className="max-w-4xl w-full text-center">
        <h2 
          className="text-4xl md:text-6xl font-bold text-white mb-12 animate-glow"
          data-testid="text-surprise-title"
        >
          🎁 Special Surprise 🎁
        </h2>

        <Button
          onClick={handleReveal}
          size="lg"
          variant="default"
          className="text-xl md:text-2xl px-8 py-6 md:px-12 md:py-8 animate-pulse-glow"
          data-testid="button-reveal-surprise"
        >
          <Gift className="mr-3 h-6 w-6 md:h-8 md:w-8" />
          Click here for a surprise
        </Button>

        <Dialog open={showSurprise} onOpenChange={setShowSurprise}>
          <DialogContent 
            className="bg-gradient-to-br from-primary/20 to-chart-2/20 backdrop-blur-xl border-2 border-primary max-w-2xl"
            data-testid="dialog-surprise"
          >
            <div className="text-center py-8">
              <h3 
                className="text-3xl md:text-5xl font-bold text-white mb-6 animate-glow"
                data-testid="text-surprise-message"
              >
                You're Amazing! ✨
              </h3>
              <p 
                className="text-xl md:text-2xl text-white/90 mb-6"
                style={{ fontFamily: 'Pacifico, cursive' }}
                data-testid="text-surprise-description"
              >
                May this year bring you endless joy, success, and beautiful moments!
              </p>
              <div className="text-6xl md:text-8xl animate-float" data-testid="text-surprise-emoji">
                🎊🎉🥳🎂
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
