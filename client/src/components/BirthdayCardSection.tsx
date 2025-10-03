import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Download, Palette, Heart, ChevronDown } from "lucide-react";

export default function BirthdayCardSection() {
  const [cardData, setCardData] = useState({
    from: "",
    message: "Happy Birthday Keerthana! 🎉",
    theme: "pink"
  });
  const [showPreview, setShowPreview] = useState(false);

  const themes = [
    { name: "pink", bg: "bg-gradient-to-br from-pink-400 to-pink-600", label: "Pink Dreams" },
    { name: "purple", bg: "bg-gradient-to-br from-purple-400 to-purple-600", label: "Purple Magic" },
    { name: "blue", bg: "bg-gradient-to-br from-blue-400 to-blue-600", label: "Ocean Blue" },
    { name: "rainbow", bg: "bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400", label: "Rainbow Joy" }
  ];

  const generateCard = () => {
    setShowPreview(true);
  };

  const downloadCard = () => {
    // In a real app, this would generate and download an image
    alert("🎉 Birthday card saved! (In a real app, this would download the card as an image)");
  };

  const scrollToNext = () => {
    const messagesSection = document.querySelector('[data-testid="section-messages"]');
    if (messagesSection) {
      messagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-16 px-4 relative" data-testid="section-card">
      <div className="max-w-4xl w-full flex-1 flex flex-col justify-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-12 animate-glow">
          🎨 Create Birthday Card 🎨
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card Creator */}
          <Card className="bg-white/10 backdrop-blur-md border-2 border-birthday-pink/50 p-6">
            <h3 className="text-2xl font-bold text-birthday-pink mb-6" style={{ fontFamily: 'Pacifico, cursive' }}>
              Design Your Card 🎁
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-white font-semibold mb-2 block">From:</label>
                <Input
                  placeholder="Your name..."
                  value={cardData.from}
                  onChange={(e) => setCardData(prev => ({ ...prev, from: e.target.value }))}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                />
              </div>

              <div>
                <label className="text-white font-semibold mb-2 block">Birthday Message:</label>
                <Textarea
                  value={cardData.message}
                  onChange={(e) => setCardData(prev => ({ ...prev, message: e.target.value }))}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/50 min-h-[100px]"
                />
              </div>

              <div>
                <label className="text-white font-semibold mb-2 block">Choose Theme:</label>
                <div className="grid grid-cols-2 gap-2">
                  {themes.map((theme) => (
                    <Button
                      key={theme.name}
                      onClick={() => setCardData(prev => ({ ...prev, theme: theme.name }))}
                      className={`${theme.bg} hover:opacity-80 text-white ${
                        cardData.theme === theme.name ? 'ring-2 ring-white' : ''
                      }`}
                    >
                      {theme.label}
                    </Button>
                  ))}
                </div>
              </div>

              <Button
                onClick={generateCard}
                className="w-full bg-birthday-pink hover:bg-birthday-pink/80 text-white"
              >
                <Palette className="mr-2 h-4 w-4" />
                Generate Card Preview
              </Button>
            </div>
          </Card>

          {/* Card Preview */}
          <Card className="bg-white/10 backdrop-blur-md border-2 border-birthday-pink/50 p-6">
            <h3 className="text-2xl font-bold text-birthday-pink mb-6" style={{ fontFamily: 'Pacifico, cursive' }}>
              Card Preview 👀
            </h3>

            {showPreview ? (
              <div className="space-y-4">
                <div className={`${themes.find(t => t.name === cardData.theme)?.bg} p-6 rounded-lg text-white text-center min-h-[300px] flex flex-col justify-center`}>
                  <div className="text-4xl mb-4">🎂</div>
                  <h4 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Pacifico, cursive' }}>
                    For Keerthana
                  </h4>
                  <p className="text-lg mb-4 leading-relaxed">
                    {cardData.message}
                  </p>
                  <div className="flex items-center justify-center space-x-2 mt-4">
                    <Heart className="w-4 h-4" />
                    <span className="font-semibold">
                      From: {cardData.from || "Your Friend"}
                    </span>
                    <Heart className="w-4 h-4" />
                  </div>
                </div>

                <Button
                  onClick={downloadCard}
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Save Birthday Card
                </Button>
              </div>
            ) : (
              <div className="text-center text-white/60 py-20">
                <Palette className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Click "Generate Card Preview" to see your beautiful birthday card!</p>
              </div>
            )}
          </Card>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300 animate-bounce"
        >
          <span className="text-sm mb-2">Continue celebration</span>
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}