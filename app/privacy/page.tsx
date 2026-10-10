import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye, Server, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | S Kaushall",
  description: "Privacy Policy for the personal developer portfolio of S Kaushall (skaushall.dev).",
  alternates: {
    canonical: "https://skaushall.dev/privacy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen pt-28 pb-20 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto text-foreground">
      {/* Back to Home Navigation */}
      <div className="mb-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-lg border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-200"
        >
          <ArrowLeft size={14} />
          <span>Back to Portfolio</span>
        </Link>
      </div>

      {/* Header */}
      <div className="border-b border-black/10 dark:border-white/10 pb-8 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#bf0039]/10 dark:bg-[#ffe880]/10 text-[#bf0039] dark:text-[#ffe880] font-mono text-xs font-bold uppercase tracking-wider mb-4 border border-[#bf0039]/20 dark:border-[#ffe880]/20">
          <Shield size={13} />
          <span>Legal & Compliance</span>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-foreground">
          Privacy Policy
        </h1>
        <p className="mt-3 font-mono text-xs text-foreground/60">
          Last Updated: October 2026 &bull; Domain: https://skaushall.dev
        </p>
      </div>

      {/* Policy Content */}
      <div className="flex flex-col gap-10 text-sm sm:text-base text-foreground/80 leading-relaxed font-sans">
        {/* Section 1 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground flex items-center gap-2">
            <Eye size={18} className="text-[#bf0039] dark:text-[#ffe880]" />
            1. Overview
          </h2>
          <p>
            Welcome to the personal developer portfolio of S Kaushall, accessible at <span className="font-mono text-xs font-bold text-foreground">https://skaushall.dev</span>. I respect your privacy and am committed to protecting any information you may share while browsing this website.
          </p>
          <p>
            This Privacy Policy explains how information is collected, used, and safeguarded when you visit this website or contact me directly.
          </p>
        </section>

        {/* Section 2 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground flex items-center gap-2">
            <Lock size={18} className="text-[#bf0039] dark:text-[#ffe880]" />
            2. Information Collected
          </h2>
          <p>
            This portfolio is primarily an informational showcase. I only collect personal information that you voluntarily provide:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/75">
            <li>
              <strong className="text-foreground">Contact Form Submissions:</strong> When you send a message through the contact form, you provide your name, email address, and message content.
            </li>
            <li>
              <strong className="text-foreground">Privacy-First Analytics:</strong> This site may use privacy-centric telemetry (such as Vercel Web Analytics) to measure aggregate performance indicators like page views, referrer source, and device category. No individual user tracking, cross-site profiling, or sellable data is recorded.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground flex items-center gap-2">
            <Server size={18} className="text-[#bf0039] dark:text-[#ffe880]" />
            3. Use of Information
          </h2>
          <p>
            Any information you submit is used solely for legitimate communication purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/75">
            <li>To respond to your inquiries, job proposals, freelance requests, or technical discussions.</li>
            <li>To verify technical reliability and fix layout or performance issues on the website.</li>
          </ul>
          <p>
            Your information is never sold, rented, monetized, or shared with third-party marketers.
          </p>
        </section>

        {/* Section 4 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground">
            4. Cookies and Local Storage
          </h2>
          <p>
            This website does not use tracking cookies or marketing pixels. It utilizes standard browser local storage solely to store your preferred color theme (<code className="font-mono text-xs px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/10">dark</code> or <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/10">light</code>) so that your display preference persists across visits.
          </p>
        </section>

        {/* Section 5 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground">
            5. Third-Party Services & Links
          </h2>
          <p>
            This website links to external platforms including GitHub, LinkedIn, LeetCode, and Fiverr. When navigating to external websites, their respective privacy policies and terms of service apply. I encourage you to review their policies when visiting their platforms.
          </p>
        </section>

        {/* Section 6 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground">
            6. Data Retention & Your Rights
          </h2>
          <p>
            Correspondence sent via the contact form is retained only as long as necessary to conduct ongoing professional communication. You have the right to request the deletion or modification of any message history you have submitted by sending an email request.
          </p>
        </section>

        {/* Section 7 */}
        <section className="flex flex-col gap-3 border-t border-black/10 dark:border-white/10 pt-6">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground flex items-center gap-2">
            <Mail size={18} className="text-[#bf0039] dark:text-[#ffe880]" />
            7. Contact
          </h2>
          <p>
            If you have questions regarding this Privacy Policy or wish to request data removal, please contact:
          </p>
          <div className="p-4 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/[0.02] font-mono text-xs sm:text-sm flex flex-col gap-1">
            <span className="font-bold text-foreground">S Kaushall</span>
            <span className="text-foreground/70">Email: githeshkaushall@gmail.com</span>
            <span className="text-foreground/70">Location: Coimbatore, Tamil Nadu, India</span>
          </div>
        </section>
      </div>
    </div>
  );
}
