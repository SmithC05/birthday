import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import bgMusic from "@assets/raja-rani.c1a2bc91b5330ca77ad0_1759461765837.mp3";

interface MusicControlProps {
  shouldStart?: boolean;
}

export default function MusicControl({ shouldStart = false }: MusicControlProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (shouldStart && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.log("Audio autoplay failed:", error);
      });
    }
  }, [shouldStart]);

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

      {isPlaying && (
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
