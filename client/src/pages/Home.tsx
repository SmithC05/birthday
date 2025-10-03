import { useState, useEffect } from "react";
import VideoBackground from "@/components/VideoBackground";
import MusicControl from "@/components/MusicControl";
import MusicWelcome from "@/components/MusicWelcome";
import LoadingSpinner from "@/components/LoadingSpinner";
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
import TimelineSection from "@/components/TimelineSection";
import CakeCuttingSection from "@/components/CakeCuttingSection";
import GuestBookSection from "@/components/GuestBookSection";
import BirthdayQuizSection from "@/components/BirthdayQuizSection";
import BirthdayCardSection from "@/components/BirthdayCardSection";
import SurpriseSection from "@/components/SurpriseSection";
import FireworksSection from "@/components/FireworksSection";

export default function Home() {
  const [isBirthdayReached, setIsBirthdayReached] = useState(false);
  const [isUnlockedWithPassword, setIsUnlockedWithPassword] = useState(false);
  const [showPasswordEntry, setShowPasswordEntry] = useState(true);
  const [showMusicWelcome, setShowMusicWelcome] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and check session
    const initializeApp = async () => {
      // Minimum loading time for better UX
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Use sessionStorage instead of localStorage for security
      const unlocked = sessionStorage.getItem("birthdayUnlocked") === "true";
      const musicWelcomeShown = sessionStorage.getItem("musicWelcomeShown") === "true";
      
      if (unlocked) {
        setIsUnlockedWithPassword(true);
        setShowPasswordEntry(false);
        // Only show music welcome if password was entered
        if (musicWelcomeShown) {
          setShowMusicWelcome(false);
          setMusicStarted(true);
        }
      }
      
      setIsLoading(false);
    };

    initializeApp();
  }, []);

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setFullYear(2025, 9, 30);
    targetDate.setHours(0, 0, 0, 0); // Oct 30, 2025 at 12:00 AM
    
    const checkBirthday = () => {
      const now = new Date();
      const reached = now >= targetDate;
      setIsBirthdayReached(reached);
      if (reached) {
        setShowPasswordEntry(false);
        setIsUnlockedWithPassword(true);
        // Auto-start music on birthday
        if (!musicStarted) {
          setShowMusicWelcome(true);
        }
      }
    };

    checkBirthday();
    const interval = setInterval(checkBirthday, 1000);

    return () => clearInterval(interval);
  }, [musicStarted]);

  const handlePasswordCorrect = () => {
    sessionStorage.setItem("birthdayUnlocked", "true");
    setIsUnlockedWithPassword(true);
    setShowPasswordEntry(false);
    // Show music welcome after password entry
    setShowMusicWelcome(true);
  };

  const handleSkipToCountdown = () => {
    setShowPasswordEntry(false);
  };

  const handleMusicStart = () => {
    sessionStorage.setItem("musicWelcomeShown", "true");
    setShowMusicWelcome(false);
    setMusicStarted(true);
  };

  const isContentUnlocked = isBirthdayReached || isUnlockedWithPassword;

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="relative">
      <VideoBackground />
      <MusicControl shouldStart={musicStarted} />
      <ConfettiEffect />
      <FloatingBalloons />
      <FloatingHearts />
      <PeriodicFireworks />
      <FloatingSparkles />
      
      {showMusicWelcome && isContentUnlocked && <MusicWelcome onStart={handleMusicStart} />}
      
      <main className="relative z-10" style={{ scrollBehavior: 'smooth' }}>
        {showPasswordEntry && !isContentUnlocked ? (
          <PasswordEntry 
            onCorrectPassword={handlePasswordCorrect}
            onSkipToCountdown={handleSkipToCountdown}
          />
        ) : (
          <>
            {/* Show countdown only in waiting session (not after password login) */}
            {!isContentUnlocked ? (
              <CountdownSection />
            ) : (
              <>
                <div className="animate-fade-in">
                  <HeroSection />
                </div>
                <div className="animate-fade-in">
                  <TimelineSection />
                  <CakeCuttingSection />
                  <GuestBookSection />
                  <BirthdayQuizSection />
                  <BirthdayCardSection />
                  <GallerySection />
                  <MessagesSection />
                  <SurpriseSection />
                  <FireworksSection />
                </div>
              </>
            )}
          </>
        )}
      </main>
    </div>
  );
}
