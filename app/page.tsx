"use client";

import { motion } from "framer-motion";
import { NavBar } from "@/components/NavBar";
import { Orbs } from "@/components/Orbs";
import { Stars } from "@/components/Stars";
import TerminalPreview from "@/components/TerminalPreview";
import { GITHUB_URL, INSTALL_CMD, NPX_CMD } from "@/app/config";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-dvh w-full max-w-6xl flex-col items-center px-4">
      <NavBar githubUrl={GITHUB_URL} />
      <Stars />
      <Orbs />

      <section className="relative z-10 mt-36 w-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl bg-gradient-to-b from-white to-white/70 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-7xl"
        >
          Make screenshot magic with App Shot
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-lg text-white/70"
        >
          An open-source screenshot builder that turns raw captures into
          delicious, share-ready visuals. Inspired by the vibes, powered by
          simplicity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          <a className="btn btn-primary" href={GITHUB_URL} target="_blank" rel="noreferrer">
            View on GitHub
          </a>
          <a className="btn btn-ghost" href="#install">
            Quick Start
          </a>
        </motion.div>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mx-auto mt-14 w-full max-w-4xl"
        >
          <div className="overflow-hidden rounded-lg border border-white/10 bg-black/80 shadow-2xl backdrop-blur-sm">
            {/* Terminal title bar */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80 hover:bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500/80 hover:bg-green-500"></div>
                </div>
                <span className="ml-2 text-xs text-white/60 font-mono">appshot@terminal ~ %</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-white/40">
                <span>bash</span>
                <span>•</span>
                <span>UTF-8</span>
              </div>
            </div>
            {/* Terminal content */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
              <TerminalPreview />
            </div>
          </div>
        </motion.div>
      </section>


      {/* Install */}
      <section id="install" className="relative z-10 mx-auto mt-28 w-full max-w-3xl">
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6 shadow-lg">
          <h2 className="text-xl font-semibold">Quick start</h2>
          <p className="mt-2 text-sm text-white/70">
            The easiest way is via npm. You can also browse the source on GitHub.
          </p>
          <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-black/60">
            <pre className="whitespace-pre-wrap p-4 text-sm text-white/80">
{`# install globally
${INSTALL_CMD}

# or run without installing
${NPX_CMD}

# usage
appshot --help`}
            </pre>
          </div>
          <div className="mt-4">
            <a className="btn btn-primary" href={GITHUB_URL} target="_blank" rel="noreferrer">
              View source on GitHub
            </a>
          </div>
        </div>
        <footer className="my-16 text-center text-xs text-white/50">
          Built with Next.js. Not affiliated with Vibe Tunnel, just inspired by the vibes.
        </footer>
      </section>
    </main>
  );
}
