import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText, CheckCircle, AlertTriangle, ShieldCheck, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | S Kaushall",
  description: "Terms and conditions of use for the personal developer portfolio of S Kaushall (skaushall.dev).",
  alternates: {
    canonical: "https://skaushall.dev/terms",
  },
};

export default function TermsAndConditions() {
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
          <FileText size={13} />
          <span>Terms of Use</span>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-foreground">
          Terms & Conditions
        </h1>
        <p className="mt-3 font-mono text-xs text-foreground/60">
          Last Updated: October 2026 &bull; Domain: https://skaushall.dev
        </p>
      </div>

      {/* Terms Content */}
      <div className="flex flex-col gap-10 text-sm sm:text-base text-foreground/80 leading-relaxed font-sans">
        {/* Section 1 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground flex items-center gap-2">
            <CheckCircle size={18} className="text-[#bf0039] dark:text-[#ffe880]" />
            1. Agreement to Terms
          </h2>
          <p>
            By accessing or browsing this website (<span className="font-mono text-xs font-bold text-foreground">https://skaushall.dev</span>), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please discontinue use of this site.
          </p>
        </section>

        {/* Section 2 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground flex items-center gap-2">
            <ShieldCheck size={18} className="text-[#bf0039] dark:text-[#ffe880]" />
            2. Intellectual Property & Code Samples
          </h2>
          <p>
            All original text, personal branding, graphics, and structure on this site are the intellectual property of S Kaushall unless otherwise noted.
          </p>
          <p>
            Open-source software repositories, scripts, and code samples referenced on this portfolio (such as those hosted on GitHub) are governed by their respective individual open-source licenses (such as MIT, Apache 2.0, or GPL). Users may clone, inspect, or build upon open-source code in accordance with those license terms.
          </p>
        </section>

        {/* Section 3 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground">
            3. Acceptable Use
          </h2>
          <p>
            When accessing this website, you agree not to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/75">
            <li>Engage in any automated data scraping or extraction that imposes an unreasonable burden on site infrastructure.</li>
            <li>Attempt to bypass security headers, conduct denial-of-service attempts, or inject malicious payloads.</li>
            <li>Misrepresent affiliation with S Kaushall or use portfolio materials for deceptive commercial practices.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground">
            4. External Third-Party Links
          </h2>
          <p>
            This website provides direct links to third-party web services (including GitHub, LinkedIn, Fiverr, and LeetCode). S Kaushall is not responsible for the content, privacy standards, or operating practices of external third-party websites. Accessing external links is done at your own discretion.
          </p>
        </section>

        {/* Section 5 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground flex items-center gap-2">
            <AlertTriangle size={18} className="text-[#bf0039] dark:text-[#ffe880]" />
            5. Disclaimer of Warranties
          </h2>
          <p>
            This website and its portfolio demonstrations are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, whether express or implied. While I strive for complete accuracy and optimal uptime, I make no representations regarding uninterrupted availability or total error-free operation.
          </p>
        </section>

        {/* Section 6 */}
        <section className="flex flex-col gap-3">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground">
            6. Limitation of Liability
          </h2>
          <p>
            In no event shall S Kaushall be liable for any direct, indirect, incidental, or consequential damages resulting from the use of, or inability to use, the materials, code examples, or information published on this portfolio.
          </p>
        </section>

        {/* Section 7 */}
        <section className="flex flex-col gap-3 border-t border-black/10 dark:border-white/10 pt-6">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground flex items-center gap-2">
            <Mail size={18} className="text-[#bf0039] dark:text-[#ffe880]" />
            7. Inquiries
          </h2>
          <p>
            For questions or legal correspondence regarding these Terms & Conditions, please reach out via email:
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
