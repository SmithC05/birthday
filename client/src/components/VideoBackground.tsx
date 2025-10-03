import { useEffect, useRef, useState } from "react";
import bgVideo from "@assets/bg-video_1759461765836.mp4";

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (videoRef.current && !isMobile) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, [isMobile, videoLoaded]);

  return (
    <>
      {/* Show gradient background on mobile, video on desktop */}
      {isMobile ? (
        <div 
          className="fixed inset-0 -z-10 bg-gradient-to-br from-birthday-pink/20 via-celebration-purple/30 to-party-blue/20"
          data-testid="mobile-background"
        />
      ) : (
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
      )}
      <div className="fixed inset-0 bg-black/30 -z-10" data-testid="video-overlay" />
    </>
  );
}
