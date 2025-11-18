'use client';

import { useEffect, useRef } from 'react';

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.9; // Slightly slower for elegance
    }
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/worldvid.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}
