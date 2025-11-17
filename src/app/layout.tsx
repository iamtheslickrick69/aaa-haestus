import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LogoBlock from "@/components/header/LogoBlock";
import MainHeader from "@/components/header/MainHeader";
import PortalsHeader from "@/components/header/PortalsHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "haestus.dev | AI Architecture & Full-Stack Engineering",
  description: "Full-stack engineering meets AI orchestration. We build premium AI-powered applications from first pixel to final deployment.",
  keywords: ["AI development", "full-stack engineering", "AI architecture", "enterprise AI", "Utah tech"],
  authors: [{ name: "Haestus" }],
  openGraph: {
    title: "haestus.dev | AI Architecture & Full-Stack Engineering",
    description: "Full-stack engineering meets AI orchestration",
    url: "https://haestus.dev",
    siteName: "Haestus",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "haestus.dev | AI Architecture & Full-Stack Engineering",
    description: "Full-stack engineering meets AI orchestration",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
        style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '0.3px' }}
      >
        <LogoBlock />
        <MainHeader />
        <PortalsHeader />
        {children}
      </body>
    </html>
  );
}
