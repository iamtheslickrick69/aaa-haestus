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
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
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
