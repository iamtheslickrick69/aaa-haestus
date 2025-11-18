import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";
import PremiumHeader from "@/components/PremiumHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const headingFont = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-heading",
});

const bodyFont = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
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
        className={`${geistSans.variable} ${geistMono.variable} ${headingFont.variable} ${bodyFont.variable} antialiased bg-black text-white`}
      >
        <PremiumHeader />
        {children}
      </body>
    </html>
  );
}
