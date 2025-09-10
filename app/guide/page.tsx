"use client";

import { useEffect, useState } from "react";
import { NavBar } from "@/components/NavBar";

const GITHUB_URL = "https://github.com/chrisvanbuskirk/appshot";

export default function GuidePage() {
  const [vh, setVh] = useState(0);
  useEffect(() => {
    const onResize = () => setVh(window.innerHeight);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <main className="relative mx-auto min-h-dvh w-full max-w-6xl px-4">
      <NavBar githubUrl={GITHUB_URL} />
      <div className="pt-24 pb-8">
        <h1 className="text-2xl font-semibold text-white/90">Positioning Guide</h1>
        <p className="mt-2 text-sm text-white/60">
          Interactive visualization for App Shot caption/device positioning. Open
          in a new tab if you prefer a full window.
        </p>
        <div className="mt-4 flex gap-2">
          <a className="btn btn-primary" href="/positioning-guide/style-guide.html?theme=appshot" target="_blank" rel="noreferrer">
            Open full page
          </a>
        </div>
        <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-black/30">
          <iframe
            title="App Shot Positioning Guide"
            src="/positioning-guide/style-guide.html?theme=appshot"
            style={{ width: "100%", height: Math.max(600, vh - 200) }}
            className="block"
          />
        </div>
      </div>
    </main>
  );
}
