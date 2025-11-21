'use client';

import { useEffect, useRef } from 'react';

export default function VideoBackground() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Set playback rate to 0.9x after iframe loads
    const iframe = iframeRef.current;
    if (iframe) {
      const handleLoad = () => {
        try {
          // Send message to Stream iframe to set playback rate
          iframe.contentWindow?.postMessage(
            { method: 'setPlaybackRate', value: 0.9 },
            '*'
          );
        } catch (e) {
          console.log('Could not set playback rate:', e);
        }
      };

      iframe.addEventListener('load', handleLoad);
      return () => iframe.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <iframe
        ref={iframeRef}
        src="https://customer-wer9q4xxnszypysw.cloudflarestream.com/0d7f4036df94ddc43884f4a35881f968/iframe?autoplay=true&loop=true&muted=true&controls=false&preload=auto"
        style={{
          border: 'none',
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          objectFit: 'cover',
        }}
        allow="autoplay; fullscreen"
        className="pointer-events-none"
        title="Background video"
      />
      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}
