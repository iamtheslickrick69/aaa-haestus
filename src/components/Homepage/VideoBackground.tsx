'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const pathname = usePathname();

  // Only show on homepage
  const isHomepage = pathname === '/';

  useEffect(() => {
    if (!isHomepage) return;

    const video = videoRef.current;
    if (!video) return;

    // Set playback rate to 0.9 (10% slower)
    video.playbackRate = 0.9;

    const handleCanPlay = () => {
      setIsLoaded(true);
      video.play().catch((error) => {
        console.log('Video autoplay prevented:', error);
      });
    };

    video.addEventListener('canplay', handleCanPlay);
    return () => video.removeEventListener('canplay', handleCanPlay);
  }, [isHomepage]);

  // Don't render at all if not on homepage
  if (!isHomepage) return null;

  return (
    <>
      {/* Video Background - HOMEPAGE ONLY */}
      <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23000000'/%3E%3C/svg%3E"
        >
          <source
            src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/worldvid.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Loading state */}
      {!isLoaded && (
        <div className="fixed inset-0 -z-10 bg-black pointer-events-none" />
      )}
    </>
  );
}
