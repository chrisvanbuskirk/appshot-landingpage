import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const jetBrainsMono = localFont({
  src: [
    {
      path: "../public/fonts/JetBrainsMono/JetBrainsMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/JetBrainsMono/JetBrainsMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "appshot – App Store Connect screenshot builder",
  description:
    "appshot composes Apple device frames, captions, and gradients into App Store Connect-ready screenshots in minutes.",
  metadataBase: new URL("https://appshot.vercel.app"),
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    title: "appshot",
    description:
      "Open-source workflow for generating App Store Connect screenshots across Apple devices.",
    images: ["/og.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "appshot",
    description:
      "Open-source workflow for generating App Store Connect screenshots across Apple devices.",
    images: ["/og.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jetBrainsMono.variable}>
      <body className="min-h-dvh bg-bg text-white antialiased selection:bg-white/20 selection:text-white/90">
        {/* background effects */}
        <div aria-hidden className="cosmic-grid animate-grid" />
        <div aria-hidden className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
