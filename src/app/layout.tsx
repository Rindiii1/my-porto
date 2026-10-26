import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

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
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
