"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
        <Link href="/" className="flex items-center gap-2 font-bold">
          <Image
            src="/monitor-icon.png"
            alt="App Shot icon"
            width={28}
            height={28}
            className="h-7 w-7 shrink-0"
            priority
          />
          App Shot
        </Link>
        <div className="flex items-center gap-2 text-sm">
          <Link href="/templates" className="btn btn-ghost">Templates</Link>
          <a href={githubUrl} className="btn btn-ghost" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="#install" className="btn btn-primary">Get Started</a>
        </div>
      </motion.nav>
    </div>
  );
}
