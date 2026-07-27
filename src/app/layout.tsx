import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Heart, Sparkle } from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Rindi Fadilah | Frontend Developer & UI/UX Designer",
  description:
    "Portfolio of Rindi Fadilah - Informatics Engineering student at Universitas Dian Nuswantoro, Frontend Developer at Bengkel Koding, specializing in Next.js, React.js, and Figma UI/UX design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${fraunces.variable} scroll-smooth`}
    >
      <body className="font-sans bg-forest text-cream-text min-h-screen antialiased">
        <Navbar />
        {children}

        <footer className="relative mt-12 overflow-hidden bg-ink text-cream-text">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Sparkle size={14} className="text-amber" />
              <span className="font-display font-bold tracking-wider">
                <span className="text-amber">RINDI</span>.F
              </span>
            </div>
            <p className="text-xs text-cream-text/70 flex items-center gap-1.5">
              &copy; {new Date().getFullYear()} Rindi Fadilah &middot; Built
              with <Heart className="w-3 h-3 text-rust fill-rust" /> &amp; Next.js
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
