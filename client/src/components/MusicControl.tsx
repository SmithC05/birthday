import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Music, Volume2, VolumeX } from "lucide-react";
import bgMusic from "@assets/raja-rani.c1a2bc91b5330ca77ad0_1759461765837.mp3";

export default function MusicControl() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showStartButton, setShowStartButton] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setShowStartButton(false);
      }).catch(() => {
        setShowStartButton(true);
      });
    }
  }, []);

  const handleStart = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
      setShowStartButton(false);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop data-testid="background-music">
        <source src={bgMusic} type="audio/mpeg" />
      </audio>

      {showStartButton && (
        <Button onClick={handleStart} size="lg" variant="default" className="fixed bottom-8 right-8 z-50 animate-pulse-glow backdrop-blur-sm bg-primary/90" data-testid="button-start-music" > <Music className="mr-2 h-5 w-5" /> Tap to Start 🎶 </Button> )}

      {!showStartButton && isPlaying && (
        <Button
          onClick={toggleMute}
          size="icon"
          variant="secondary"
          className="fixed bottom-8 right-8 z-50 backdrop-blur-sm"
          data-testid="button-toggle-mute"
        >
          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </Button>
      )}
    </>
  );
}
