"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type NavBarProps = {
  githubUrl: string;
};

export function NavBar({ githubUrl }: NavBarProps) {
  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 16 }}
        className="mt-4 flex w-[min(100%,1000px)] items-center justify-between rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-lg"
      >
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-block h-6 w-6 rounded-[6px] bg-gradient-to-br from-pink-400 via-violet-400 to-cyan-400 shadow-glow" />
          App Shot
        </Link>
        <div className="flex items-center gap-2 text-sm">
          <Link href="#features" className="btn btn-ghost">Features</Link>
          <Link href="/guide" className="btn btn-ghost">Guide</Link>
          <a href={githubUrl} className="btn btn-ghost" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="#install" className="btn btn-primary">Get Started</a>
        </div>
      </motion.nav>
    </div>
  );
}
