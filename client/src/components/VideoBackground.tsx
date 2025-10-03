import { useEffect, useRef, useState } from "react";
import bgVideo from "@assets/bg-video_1759461765836.mp4";

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Always try to play video, let browser decide if it can handle it
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
        // Fallback to gradient background if video fails
        setIsMobile(true);
      });
    }
  }, [videoLoaded]);

  return (
    <>
      {/* Always show video first, fallback to gradient if needed */}
      <video
        ref={videoRef}
        className="fixed inset-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        onLoadedData={() => setVideoLoaded(true)}
        data-testid="video-background"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      
      {/* Fallback gradient background if video fails */}
      {isMobile && (
        <div 
          className="fixed inset-0 -z-10 bg-gradient-to-br from-birthday-pink/20 via-celebration-purple/30 to-party-blue/20"
          data-testid="mobile-background"
        />
      )}
      
      <div className="fixed inset-0 bg-black/30 -z-10" data-testid="video-overlay" />
    </>
  );
}
