"use client";

import { motion } from "framer-motion";

export function Orbs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* soft colorful blobs */}
      <motion.div
        className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-fuchsia-500/50 via-indigo-400/40 to-cyan-300/40 blur-3xl"
        animate={{
          x: [0, -40, 40, 0],
          y: [0, -20, 10, 0],
          rotate: [0, 10, -6, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-emerald-400/40 via-cyan-400/30 to-blue-500/30 blur-3xl"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -10, 30, 0],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute -right-24 top-1/3 h-[360px] w-[360px] rounded-full bg-gradient-to-br from-rose-400/40 via-orange-300/30 to-yellow-300/30 blur-3xl"
        animate={{
          x: [0, -10, -30, 0],
          y: [0, 10, -10, 0],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </div>
  );
}

