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
  title: "S Kaushall | Creative Portfolio",
  description: "Computer Science Student & Full Stack Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${monoFont.variable} scroll-smooth`}>
      <head />
      <body className="antialiased bg-background text-foreground selection:bg-accent selection:text-black overflow-x-hidden">
        <GlobalMouseGlow />
        <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern opacity-30" />

        {/* Global Background Watermark */}
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0 select-none">
          <h1 className="text-[20vw] font-black uppercase tracking-[-0.08em] text-white/[0.015]">
            KAUSHALL
          </h1>
        </div>

        <CustomCursor />
        <Navbar />

        {/* Global Floating Layout Elements */}
        <SidebarDecorations />

        {/* Full-width main viewport layout container */}
        <main className="relative w-full min-h-screen">
          {children}
        </main>
        <SystemStatus />
        <Footer />
        {/* <BackgroundParticles/> */}
      </body>
    </html>
  );
}