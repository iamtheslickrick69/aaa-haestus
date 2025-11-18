'use client';

export default function ForgeValues() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Orange Gradient Banner Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source
          src="https://pub-7824dae2ffd24193b52760c54972be1d.r2.dev/thisistheone.mp4"
          type="video/mp4"
        />
      </video>

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* Banner Content - Compact & Centered */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 text-center">
        <h2
          className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}
        >
          WE FORGE TOOLS. YOU WRITE THE LEGEND.
        </h2>
      </div>
    </section>
  );
}
