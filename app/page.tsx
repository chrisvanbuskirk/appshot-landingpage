"use client";

import { motion } from "framer-motion";
import { NavBar } from "@/components/NavBar";
import { Orbs } from "@/components/Orbs";
import { Stars } from "@/components/Stars";

const GITHUB_URL = "https://github.com/chrisvanbuskirk/appshot";

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

        {/* fake device frame to suggest output */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mx-auto mt-14 w-full max-w-4xl rounded-[20px] border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-2 shadow-xl"
        >
          <div className="glass relative aspect-[16/9] w-full overflow-hidden rounded-[16px]">
            <div className="absolute inset-0 bg-[radial-gradient(1200px_200px_at_50%_-20%,rgba(255,255,255,0.15),transparent)]" />
            <div className="absolute right-3 top-3 rounded-md bg-black/60 px-2 py-1 text-xs text-white/80">
              appshot build ./screenshots
            </div>
            <div className="absolute inset-0 grid place-items-center text-center text-white/80">
              <div>
                <div className="text-sm uppercase tracking-widest text-white/50">Preview</div>
                <div className="mt-2 text-2xl font-semibold">Your screenshot, but epic</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 mx-auto mt-28 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
        {[
          {
            title: "Drop + Style",
            desc: "Drag in a screenshot, pick a theme, done.",
          },
          {
            title: "Preset Frames",
            desc: "Phone, desktop, bezel-less, skeuomorphic and more.",
          },
          {
            title: "CLI & GUI",
            desc: "Automate in CI or use the desktop app.",
          },
        ].map((f) => (
          <div
            key={f.title}
            className="glass group rounded-2xl border border-white/10 p-5 transition hover:border-white/20"
          >
            <div className="text-lg font-semibold">{f.title}</div>
            <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            <div className="mt-6 h-24 rounded-xl bg-gradient-to-tr from-white/10 to-white/0 opacity-70 transition group-hover:opacity-100" />
          </div>
        ))}
      </section>

      {/* Install */}
      <section id="install" className="relative z-10 mx-auto mt-28 w-full max-w-3xl">
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6 shadow-lg">
          <h2 className="text-xl font-semibold">Quick start</h2>
          <p className="mt-2 text-sm text-white/70">
            App Shot is open source. Install locally or just use the prebuilt
            releases from GitHub.
          </p>
          <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-black/60">
            <pre className="whitespace-pre-wrap p-4 text-sm text-white/80">
{`# clone the repo
git clone ${GITHUB_URL}
cd appshot
# run the app (example)
npm install && npm run dev`}
            </pre>
          </div>
          <div className="mt-4">
            <a className="btn btn-primary" href={GITHUB_URL} target="_blank" rel="noreferrer">
              Star the repo
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

