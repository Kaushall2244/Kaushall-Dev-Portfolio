import type { Metadata } from "next";
import { Syne, Geist_Mono } from "next/font/google";
import SidebarDecorations from "@/components/ui/SidebarDecorations";
import Navbar from "@/components/Global/Navbar";
import Footer from "@/components/Global/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
// import BackgroundParticles from "@/components/ui/BackgroundParticles";
import SystemStatus from "@/components/Global/SystemStatus";
import GlobalMouseGlow from "@/components/ui/GlobalMouseGlow";
import "./globals.css";

const displayFont = Syne({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-display",
});

const monoFont = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://skaushall.dev"),
  title: "S Kaushall | Full-Stack Developer & UI Engineer Portfolio",
  description:
    "Portfolio of S Kaushall - Computer Science Engineering Student, Full-Stack Developer, and UI Engineer crafting high-performance digital products, 3D web applications, and interactive user experiences.",
  keywords: [
    "S Kaushall",
    "Kaushall",
    "Full-Stack Developer",
    "Software Engineer",
    "Computer Science Student",
    "Next.js Developer",
    "React Developer",
    "Three.js 3D Web",
    "Frontend Engineer",
    "Cinematic UI",
    "Portfolio",
  ],
  authors: [{ name: "S Kaushall" }],
  creator: "S Kaushall",
  publisher: "S Kaushall",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "S Kaushall | Full-Stack Developer & UI Engineer",
    description:
      "Engineering cinematic web experiences with React, Next.js, Framer Motion, and Three.js.",
    url: "https://skaushall.dev",
    siteName: "S Kaushall Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/Images/profile.png",
        width: 1200,
        height: 630,
        alt: "S Kaushall Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "S Kaushall | Full-Stack Developer & UI Engineer",
    description:
      "Engineering cinematic web experiences with React, Next.js, Framer Motion, and Three.js.",
    creator: "@skaushall",
    images: ["/Images/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://skaushall.dev/#person",
      name: "S Kaushall",
      jobTitle: "Software Engineer & Full-Stack Developer",
      url: "https://skaushall.dev",
      image: "https://skaushall.dev/Images/profile.png",
      sameAs: [
        "https://github.com/Kaushall2244",
        "https://www.fiverr.com/sellers/kaushall_dev",
      ],
      knowsAbout: [
        "Full-Stack Development",
        "Next.js",
        "React",
        "TypeScript",
        "Three.js",
        "Java",
        "Python",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://skaushall.dev/#website",
      url: "https://skaushall.dev",
      name: "S Kaushall Portfolio",
      description: "Computer Science Student & Full Stack Developer Portfolio",
      publisher: {
        "@id": "https://skaushall.dev/#person",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${monoFont.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-background text-foreground selection:bg-accent selection:text-black overflow-x-hidden">
        <GlobalMouseGlow />
        {/* Global High-Tech Background Grid System */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {/* Base Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40" />
          {/* Accent Glowing Grid Points */}
          <div className="absolute inset-0 bg-grid-glow opacity-30" />
          {/* Radial Dark Vignette Mask for Focus */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#000000_90%)]" />
        </div>

        {/* Global Background Watermark */}
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0 select-none" aria-hidden="true">
          <div className="text-[20vw] font-black uppercase tracking-[-0.08em] text-white/[0.015]">
            KAUSHALL
          </div>
        </div>

        <CustomCursor />
        <header>
          <Navbar />
        </header>

        {/* Global Floating Layout Elements */}
        <SidebarDecorations />

        {/* Full-width main viewport layout container */}
        <main className="relative w-full min-h-screen">
          {children}
        </main>
        <SystemStatus />
        <Footer />
      </body>
    </html>
  );
}