import type { Metadata } from "next";
import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "App Shot – Screenshot builder",
  description:
    "App Shot is an open-source screenshot builder. Make gorgeous app shots in seconds.",
  metadataBase: new URL("https://appshot.vercel.app"),
  openGraph: {
    title: "App Shot",
    description: "Open‑source screenshot builder for beautiful app shots.",
    images: ["/og.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "App Shot",
    description: "Open‑source screenshot builder for beautiful app shots.",
    images: ["/og.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="min-h-dvh bg-bg text-white antialiased selection:bg-white/20 selection:text-white/90">
        {/* background effects */}
        <div aria-hidden className="cosmic-grid animate-grid" />
        <div aria-hidden className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
