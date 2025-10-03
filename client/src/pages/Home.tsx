import VideoBackground from "@/components/VideoBackground";
import MusicControl from "@/components/MusicControl";
import ConfettiEffect from "@/components/ConfettiEffect";
import FloatingBalloons from "@/components/FloatingBalloons";
import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import MessagesSection from "@/components/MessagesSection";
import CountdownSection from "@/components/CountdownSection";
import SurpriseSection from "@/components/SurpriseSection";
import FireworksSection from "@/components/FireworksSection";

export default function Home() {
  return (
    <div className="relative">
      <VideoBackground />
      <MusicControl />
      <ConfettiEffect />
      <FloatingBalloons />
      <FloatingHearts />
      
      <main className="relative z-10" style={{ scrollBehavior: 'smooth' }}>
        <HeroSection />
        <GallerySection />
        <MessagesSection />
        <CountdownSection />
        <SurpriseSection />
        <FireworksSection />
      </main>
    </div>
  );
}
