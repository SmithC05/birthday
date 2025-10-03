import { useState, useEffect } from "react";
import VideoBackground from "@/components/VideoBackground";
import MusicControl from "@/components/MusicControl";
import ConfettiEffect from "@/components/ConfettiEffect";
import FloatingBalloons from "@/components/FloatingBalloons";
import FloatingHearts from "@/components/FloatingHearts";
import PeriodicFireworks from "@/components/PeriodicFireworks";
import FloatingSparkles from "@/components/FloatingSparkles";
import PasswordEntry from "@/components/PasswordEntry";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import MessagesSection from "@/components/MessagesSection";
import CountdownSection from "@/components/CountdownSection";
import SurpriseSection from "@/components/SurpriseSection";
import FireworksSection from "@/components/FireworksSection";

export default function Home() {
  const [isBirthdayReached, setIsBirthdayReached] = useState(false);
  const [isUnlockedWithPassword, setIsUnlockedWithPassword] = useState(false);
  const [showPasswordEntry, setShowPasswordEntry] = useState(true);

  useEffect(() => {
    const unlocked = localStorage.getItem("birthdayUnlocked") === "true";
    if (unlocked) {
      setIsUnlockedWithPassword(true);
      setShowPasswordEntry(false);
    }
  }, []);

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setFullYear(2025, 9, 30);
    targetDate.setHours(0, 0, 0, 0);
    
    const checkBirthday = () => {
      const now = new Date();
      const reached = now >= targetDate;
      setIsBirthdayReached(reached);
      if (reached) {
        setShowPasswordEntry(false);
      }
    };

    checkBirthday();
    const interval = setInterval(checkBirthday, 1000);

    return () => clearInterval(interval);
  }, []);

  const handlePasswordCorrect = () => {
    localStorage.setItem("birthdayUnlocked", "true");
    setIsUnlockedWithPassword(true);
    setShowPasswordEntry(false);
  };

  const handleSkipToCountdown = () => {
    setShowPasswordEntry(false);
  };

  const isContentUnlocked = isBirthdayReached || isUnlockedWithPassword;

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
        {showPasswordEntry && !isContentUnlocked ? (
          <PasswordEntry 
            onCorrectPassword={handlePasswordCorrect}
            onSkipToCountdown={handleSkipToCountdown}
          />
        ) : (
          <>
            <div className="animate-fade-in">
              <HeroSection />
            </div>
            <CountdownSection />
            {isContentUnlocked && (
              <div className="animate-fade-in">
                <GallerySection />
                <MessagesSection />
                <SurpriseSection />
                <FireworksSection />
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
