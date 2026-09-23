import type { Metadata, Viewport } from "next";
import { Syne, Geist_Mono } from "next/font/google";
import SidebarDecorations from "@/components/ui/SidebarDecorations";
import Navbar from "@/components/Global/Navbar";
import Footer from "@/components/Global/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import SystemStatus from "@/components/Global/SystemStatus";
import GlobalMouseGlow from "@/components/ui/GlobalMouseGlow";
import ConstellationBackground from "@/components/ui/ConstellationBackground";
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
  title: "S Kaushall | CSE Student • Web, Software, Game Dev & 3D Creator",
  description:
    "Portfolio of S Kaushall - 3rd-year CSE student passionate about Web development, Software engineering, Game development (Unity, UE5), 3D modeling (Blender), and Video editing.",
  keywords: [
    "S Kaushall",
    "Kaushall",
    "CSE Student",
    "Computer Science Student",
    "Web Developer",
    "Software Developer",
    "Game Developer",
    "Unity Developer",
    "Unreal Engine 5",
    "Blender 3D",
    "Android Studio",
    "Java",
    "Python",
    "WordPress",
    "Video Editing",
  ],
  authors: [{ name: "S Kaushall", url: "https://skaushall.dev" }],
  creator: "S Kaushall",
  publisher: "S Kaushall",
  applicationName: "S Kaushall Portfolio",
  category: "technology",
  alternates: {
    canonical: "https://skaushall.dev",
  },
  icons: {
    icon: [
      { url: "/icon", type: "image/png" },
    ],
    apple: [
      { url: "/icon", type: "image/png" },
    ],
  },
  openGraph: {
    title: "S Kaushall | CSE Student • Web, Software, Game Dev & 3D Creator",
    description:
      "Crafting digital experiences across web, mobile software, immersive game worlds, and 3D modeling.",
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
    title: "S Kaushall | CSE Student • Web, Software, Game Dev & 3D Creator",
    description:
      "Crafting digital experiences across web, mobile software, immersive game worlds, and 3D modeling.",
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
      jobTitle: "CSE 3rd Year Undergrad & Software/Web/Game Developer",
      url: "https://skaushall.dev",
      image: "https://skaushall.dev/Images/profile.png",
      email: "githeshkaushall@gmail.com",
      sameAs: [
        "https://github.com/Kaushall2244",
        "https://www.linkedin.com/in/kaushall22/",
        "https://www.fiverr.com/sellers/kaushall_dev",
      ],
      knowsAbout: [
        "Java",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Python",
        "Blender",
        "Unreal Engine 5",
        "Premiere Pro",
        "DaVinci Resolve",
        "Unity",
        "Augmented Reality (AR)",
        "Android Studio",
        "WordPress",
        "Next.js",
        "React",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://skaushall.dev/#website",
      url: "https://skaushall.dev",
      name: "S Kaushall Portfolio",
      description: "Official portfolio of S Kaushall - CSE 3rd Year Student, Software, Web & Game Developer",
      publisher: {
        "@id": "https://skaushall.dev/#person",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://skaushall.dev/#profilepage",
      url: "https://skaushall.dev",
      name: "S Kaushall Developer Profile",
      mainEntity: {
        "@id": "https://skaushall.dev/#person",
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://skaushall.dev/#projects-list",
      name: "Featured Projects by S Kaushall",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "DayFlow Android App",
          description: "Context-aware habit tracking Android app that triggers routines based on geofenced physical locations.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "VisionMate AI",
          description: "Real-time obstacle and object detection system providing assistive audio guidance for visually impaired users.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "SriJaiAgency eCommerce Website",
          description: "Full-featured commercial eCommerce storefront developed on WordPress for SriJaiAgency.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "AR Furniture Visualizer",
          description: "Augmented Reality space visualizer built with Unity for placing 3D furniture models at 1:1 true scale.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "TrackSphere Geolocation System",
          description: "Real-time location tracking and telemetry pipeline built for live coordinate updates and routing.",
        },
      ],
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
    <html lang="en" className={`${displayFont.variable} ${monoFont.variable} dark`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-background text-foreground selection:bg-[#ffe880] selection:text-black overflow-x-hidden transition-colors duration-500">
        <ThemeProvider>
          <GlobalMouseGlow />
          
          {/* Layer 1: Global Background Grid System */}
          <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <div className="absolute inset-0 bg-grid-pattern opacity-25" />
            <div className="absolute inset-0 bg-grid-glow opacity-15" />
          </div>

          {/* Layer 2: Global Background Watermark "KAUSHALL" */}
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0 select-none" aria-hidden="true">
            <div className="text-[20vw] font-black uppercase tracking-[-0.08em] text-white/[0.04] select-none">
              KAUSHALL
            </div>
          </div>

          {/* Layer 3: Global Interactive Constellation Particles */}
          <ConstellationBackground />

          <CustomCursor />
          
          <header>
            <Navbar />
            <ThemeLever />
          </header>

          {/* Global Floating Layout Elements */}
          <SidebarDecorations />

          {/* Layer 4: Main Content Viewport (Transparent so particles & letters shine through!) */}
          <main className="relative w-full min-h-screen z-10 bg-transparent">
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