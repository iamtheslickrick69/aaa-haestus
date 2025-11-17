'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface DataPacket {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  speed: number;
  opacity: number;
}

export default function AnimatedMazeSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const dataPacketsRef = useRef<DataPacket[]>([]);
  const gridNodesRef = useRef<{ x: number; y: number; connections: number[] }[]>([]);
  const pulsePhaseRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationIdRef = useRef<number>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create grid nodes (maze structure)
    const createMazeGrid = () => {
      const nodes: { x: number; y: number; connections: number[] }[] = [];
      const gridSize = 40;
      const cols = Math.floor(canvas.offsetWidth / gridSize);
      const rows = Math.floor(canvas.offsetHeight / gridSize);

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * gridSize + gridSize / 2;
          const y = row * gridSize + gridSize / 2;
          const connections: number[] = [];

          // Create maze-like connections (not all nodes connect)
          if (Math.random() > 0.3 && col < cols - 1) connections.push(1); // Right
          if (Math.random() > 0.3 && row < rows - 1) connections.push(2); // Down
          if (Math.random() > 0.3 && col > 0) connections.push(3); // Left
          if (Math.random() > 0.3 && row > 0) connections.push(4); // Up

          nodes.push({ x, y, connections });
        }
      }
      return nodes;
    };

    gridNodesRef.current = createMazeGrid();

    // Initialize data packets
    const initDataPackets = () => {
      const packets: DataPacket[] = [];
      for (let i = 0; i < 20; i++) {
        const startNode =
          gridNodesRef.current[Math.floor(Math.random() * gridNodesRef.current.length)];
        const targetNode =
          gridNodesRef.current[Math.floor(Math.random() * gridNodesRef.current.length)];

        packets.push({
          id: i,
          x: startNode.x,
          y: startNode.y,
          targetX: targetNode.x,
          targetY: targetNode.y,
          speed: 0.5 + Math.random() * 1.5,
          opacity: 0.8,
        });
      }
      return packets;
    };

    dataPacketsRef.current = initDataPackets();

    // Animation loop
    const animate = () => {
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      pulsePhaseRef.current += 0.02;
      const pulseFactor = 0.8 + Math.sin(pulsePhaseRef.current) * 0.2;

      // Draw maze grid lines
      ctx.strokeStyle = `rgba(220, 38, 38, ${0.15 * pulseFactor})`;
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);

      const gridSize = 40;
      const cols = Math.floor(canvas.offsetWidth / gridSize);

      gridNodesRef.current.forEach((node, index) => {
        // Draw connections
        node.connections.forEach((direction) => {
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);

          if (direction === 1 && index % cols !== cols - 1) {
            // Right
            ctx.lineTo(node.x + gridSize, node.y);
          } else if (direction === 2) {
            // Down
            ctx.lineTo(node.x, node.y + gridSize);
          }

          ctx.stroke();
        });

        // Draw glowing nodes at intersections
        const glowSize = 2 + Math.sin(pulsePhaseRef.current + index * 0.1) * 1;
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowSize * 3);
        gradient.addColorStop(0, `rgba(220, 38, 38, ${0.6 * pulseFactor})`);
        gradient.addColorStop(1, 'rgba(220, 38, 38, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowSize, 0, Math.PI * 2);
        ctx.fill();
      });

      // Reset line dash for data packets
      ctx.setLineDash([]);

      // Update and draw data packets
      dataPacketsRef.current.forEach((packet) => {
        // Move packet towards target
        const dx = packet.targetX - packet.x;
        const dy = packet.targetY - packet.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 2) {
          packet.x += (dx / distance) * packet.speed;
          packet.y += (dy / distance) * packet.speed;
        } else {
          // Reached target, pick new target
          const newTarget =
            gridNodesRef.current[Math.floor(Math.random() * gridNodesRef.current.length)];
          packet.targetX = newTarget.x;
          packet.targetY = newTarget.y;
        }

        // Draw packet as glowing dot
        const packetGlow = ctx.createRadialGradient(packet.x, packet.y, 0, packet.x, packet.y, 8);
        packetGlow.addColorStop(0, `rgba(220, 38, 38, ${packet.opacity})`);
        packetGlow.addColorStop(0.5, `rgba(220, 38, 38, ${packet.opacity * 0.5})`);
        packetGlow.addColorStop(1, 'rgba(220, 38, 38, 0)');

        ctx.fillStyle = packetGlow;
        ctx.beginPath();
        ctx.arc(packet.x, packet.y, 3, 0, Math.PI * 2);
        ctx.fill();

        // Draw trail
        ctx.strokeStyle = `rgba(220, 38, 38, ${packet.opacity * 0.3})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(packet.x, packet.y);
        ctx.lineTo(
          packet.x - (packet.targetX - packet.x) * 0.1,
          packet.y - (packet.targetY - packet.y) * 0.1
        );
        ctx.stroke();
      });

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationIdRef.current);
    };
  }, []);

  const content = [
    {
      label: 'IDENTITY',
      title: 'WHO WE ARE',
      description:
        "Full-stack AI development. Enterprise-grade standards. We take three projects per month because excellence doesn't scale linearly. Quality accelerates delivery.",
    },
    {
      label: 'CAPABILITY',
      title: 'WHAT WE DO',
      description:
        'We build AI-powered applications from first pixel to final deployment. Everyone has the same AI tools now. The differentiator is architecture—knowing what to build, how to structure it, and which problems matter.',
    },
    {
      label: 'PHILOSOPHY',
      title: 'WHY HAESTUS',
      description:
        "Hephaestus forged tools for humans to fight gods. We do the same. AI gives you fire; experience gives you the blueprint. Every system is engineered, not assembled. Built to last.",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-white"
      style={{
        padding: '120px 0',
      }}
    >
      {/* Animated Maze Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{
          opacity: 0.8,
        }}
      />

      {/* Gradient Overlays for depth */}
      <div
        className="absolute top-0 left-0 right-0 z-[1] pointer-events-none"
        style={{
          height: '200px',
          background:
            'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)',
        }}
      />

      <div
        className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none"
        style={{
          height: '200px',
          background:
            'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)',
        }}
      />

      {/* Content */}
      <motion.div
        ref={ref}
        style={{
          y: parallaxY,
        }}
        className="relative z-[2] max-w-[1400px] mx-auto px-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-[60px]">
          {content.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="rounded-[20px] p-10"
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(220, 38, 38, 0.1)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)',
              }}
            >
              <span className="block text-[12px] font-bold tracking-[2px] text-[#DC2626] mb-3">
                {item.label}
              </span>

              <h3 className="text-[24px] font-extrabold text-[#0A0A0B] mb-5 tracking-tight">
                {item.title}
              </h3>

              <p className="text-[16px] leading-[1.7] text-[#52525B] font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
