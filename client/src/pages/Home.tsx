import { useState, useEffect } from "react";
import VideoBackground from "@/components/VideoBackground";
import MusicControl from "@/components/MusicControl";
import ConfettiEffect from "@/components/ConfettiEffect";
import FloatingBalloons from "@/components/FloatingBalloons";
import FloatingHearts from "@/components/FloatingHearts";
import PeriodicFireworks from "@/components/PeriodicFireworks";
import FloatingSparkles from "@/components/FloatingSparkles";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import MessagesSection from "@/components/MessagesSection";
import CountdownSection from "@/components/CountdownSection";
import SurpriseSection from "@/components/SurpriseSection";
import FireworksSection from "@/components/FireworksSection";

export default function Home() {
  const [isBirthdayReached, setIsBirthdayReached] = useState(false);

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setFullYear(2025, 9, 30);
    targetDate.setHours(0, 0, 0, 0);
    
    const checkBirthday = () => {
      const now = new Date();
      setIsBirthdayReached(now >= targetDate);
    };

    checkBirthday();
    const interval = setInterval(checkBirthday, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <VideoBackground />
      <MusicControl />
      <ConfettiEffect />
      <FloatingBalloons />
      <FloatingHearts />
      <PeriodicFireworks />
      <FloatingSparkles />
      
      <main className="relative z-10" style={{ scrollBehavior: 'smooth' }}>
        <HeroSection />
        <CountdownSection />
        {isBirthdayReached && (
          <>
            <GallerySection />
            <MessagesSection />
            <SurpriseSection />
            <FireworksSection />
          </>
        )}
      </main>
    </div>
  );
}
