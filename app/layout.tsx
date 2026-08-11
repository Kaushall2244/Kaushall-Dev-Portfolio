import type { Metadata, Viewport } from "next";
import { Syne, Geist_Mono } from "next/font/google";
import SidebarDecorations from "@/components/ui/SidebarDecorations";
import Navbar from "@/components/Global/Navbar";
import Footer from "@/components/Global/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import SystemStatus from "@/components/Global/SystemStatus";
import GlobalMouseGlow from "@/components/ui/GlobalMouseGlow";
import ThemeLever from "@/components/ui/ThemeLever";
import { ThemeProvider } from "@/components/Global/ThemeProvider";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next";

const displayFont = Syne({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const monoFont = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#f6f8fb" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://skaushall.dev"),
  title: "S Kaushall | Full-Stack Developer & Creative UI Engineer",
  description:
    "Portfolio of S Kaushall - Full-Stack Developer, Computer Science Student, and Creative UI Engineer building fast, beautiful, and interactive web applications with Next.js, React, Three.js, and Framer Motion.",
  keywords: [
    "S Kaushall",
    "Kaushall",
    "Full-Stack Developer",
    "Software Engineer",
    "Creative Developer",
    "Computer Science Student",
    "Next.js 15 Developer",
    "React Developer",
    "Three.js 3D Web",
    "Frontend Engineer",
    "Interactive UI Portfolio",
    "Web Developer Coimbatore India",
  ],
  authors: [{ name: "S Kaushall", url: "https://skaushall.dev" }],
  creator: "S Kaushall",
  publisher: "S Kaushall",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "S Kaushall | Full-Stack Developer & Creative UI Engineer",
    description:
      "Crafting fast, beautiful, and playful web experiences with Next.js, React, Three.js, and modern creative technology.",
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
    title: "S Kaushall | Full-Stack Developer & Creative UI Engineer",
    description:
      "Crafting fast, beautiful, and playful web experiences with Next.js, React, Three.js, and modern creative technology.",
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
      jobTitle: "Full-Stack Developer & Creative UI Engineer",
      url: "https://skaushall.dev",
      image: "https://skaushall.dev/Images/profile.png",
      email: "githeshkaushall@gmail.com",
      sameAs: [
        "https://github.com/Kaushall2244",
        "https://www.linkedin.com/in/kaushall22/",
        "https://www.fiverr.com/sellers/kaushall_dev",
      ],
      knowsAbout: [
        "Full-Stack Development",
        "Next.js",
        "React",
        "TypeScript",
        "Three.js",
        "Tailwind CSS",
        "Java",
        "Python",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://skaushall.dev/#website",
      url: "https://skaushall.dev",
      name: "S Kaushall Portfolio",
      description: "Creative Full-Stack Developer & UI Engineer Portfolio",
      publisher: {
        "@id": "https://skaushall.dev/#person",
      },
    },
  ],
};

const themeScript = `
  (function() {
    try {
      var saved = localStorage.getItem('theme_mode');
      if (saved === 'light' || saved === 'dark') {
        document.documentElement.classList.add(saved);
      } else {
        document.documentElement.classList.add('dark');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${monoFont.variable} scroll-smooth dark`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-background text-foreground selection:bg-accent selection:text-black overflow-x-hidden transition-colors duration-500">
        <ThemeProvider>
          <GlobalMouseGlow />
          {/* Global High-Tech Background Grid System */}
          <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
            {/* Base Grid Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-40" />
            {/* Accent Glowing Grid Points */}
            <div className="absolute inset-0 bg-grid-glow opacity-30" />
            {/* Radial Dark/Light Vignette Mask for Focus */}
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{
                background: "radial-gradient(ellipse at center, transparent 20%, var(--vignette-color) 90%)",
              }}
            />
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
            <ThemeLever />
          </header>

          {/* Global Floating Layout Elements */}
          <SidebarDecorations />

          {/* Full-width main viewport layout container */}
          <main className="relative w-full min-h-screen">
            {children}
          </main>
          <SystemStatus />
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}