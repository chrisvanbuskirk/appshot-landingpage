"use client";

import { useEffect, useRef } from "react";

// Renders ASCII + typewriter inside any container (fills parent)
export default function TerminalPreview() {
  const typedRef = useRef<HTMLSpanElement | null>(null);
  const outRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLPreElement | null>(null);
  const startedRef = useRef(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    // Randomize command
    const commands = [
      "appshot build",
      "appshot frame --device iphone",
      "appshot gradients --apply",
      "appshot caption --auto",
      "appshot watch --process",
    ];
    const line = commands[Math.floor(Math.random() * commands.length)];
    
    // Random variations
    const devices = ["iPhone 16 Pro", "iPhone 15", "iPad Pro", "MacBook Pro", "Pixel 8"];
    const device = devices[Math.floor(Math.random() * devices.length)];
    
    const gradients = ["ocean", "sunset", "forest", "galaxy", "aurora", "ember"];
    const gradient = gradients[Math.floor(Math.random() * gradients.length)];
    
    const gradientColors = {
      ocean: "#0093E9 → #80D0C7",
      sunset: "#FA8BFF → #FFB86C",
      forest: "#11998E → #38EF7D",
      galaxy: "#667EEA → #764BA2",
      aurora: "#F093FB → #F5576C",
      ember: "#FC466B → #3F5EFB",
    };
    
    const screenshots = Math.floor(Math.random() * 8) + 3;
    const languages = ["en", "es", "fr", "de", "ja", "zh", "pt", "it"];
    const selectedLangs = languages.slice(0, Math.floor(Math.random() * 4) + 2);
    
    const captions = [
      "\"Your personal assistant\"",
      "\"Track everything, forget nothing\"",
      "\"Share with confidence\"",
      "\"Built for productivity\"",
      "\"Seamless collaboration\"",
      "\"Privacy first, always\"",
      "\"Work smarter, not harder\"",
      "\"Connect with purpose\"",
    ];
    const selectedCaptions = captions.sort(() => Math.random() - 0.5).slice(0, 3);
    
    const savedMB = (Math.random() * 4 + 1).toFixed(1);
    const buildTime = (Math.random() * 3 + 2).toFixed(1);
    const savedPercent = Math.floor(Math.random() * 25 + 25);
    
    let idx = 0;

    function typeNext() {
      const el = typedRef.current;
      if (!el) return;
      if (idx <= line.length) {
        el.textContent = line.slice(0, idx);
        idx++;
        const delay = idx < 6 ? 220 : 36 + Math.random() * 80;
        setTimeout(typeNext, delay);
      } else {
        const steps = [
          "Initializing appshot project...",
          `Scanning screenshots directory...`,
          `Found ${screenshots} screenshots in screenshots/${device.toLowerCase().replace(/\s+/g, '')}/`,
          "",
          "Processing device frames:",
          `  • ${device} (${device.includes('iPhone') ? '2796x1290' : device.includes('iPad') ? '2048x2732' : '3024x1964'})`,
          `  • Applying ${device.includes('Pro') ? 'Pro' : 'standard'} bezel`,
          `  • Shadow depth: ${Math.floor(Math.random() * 16 + 16)}px`,
          `  • Corner radius: ${device.includes('iPhone') ? '60px' : '24px'}`,
          "",
          "Reading metadata.json...",
          "Adding captions:",
          ...selectedCaptions.map(c => `  → ${c}`),
          "",
          `Applying gradient: ${gradient}`,
          `  • Base: ${gradientColors[gradient as keyof typeof gradientColors]}`,
          `  • Angle: ${Math.floor(Math.random() * 180)}deg`,
          `  • Opacity: 0.85`,
          "",
          "Generating localized versions...",
          ...selectedLangs.map(lang => {
            const files = ["home", "features", "dashboard", "settings", "profile"].slice(0, Math.min(3, screenshots));
            return `  → ${lang}: ${files.map(f => `${f}.png`).join(", ")}`;
          }),
          "",
          "Optimizing images...",
          `  • Compressing PNGs with pngquant`,
          `  • Quality: 85-95`,
          `  • Size reduction: ${savedMB}MB (${savedPercent}%)`,
          `  • Generating WebP variants`,
          "",
          "Writing output files:",
          `  → final/${device.toLowerCase().replace(/\s+/g, '')}/${selectedLangs[0]}/`,
          `  → final/${device.toLowerCase().replace(/\s+/g, '')}/${selectedLangs[1]}/`,
          "",
          `✓ Built ${selectedLangs.length * screenshots} screenshots (${selectedLangs.length} languages × ${screenshots} screens)`,
          `✓ Total time: ${buildTime}s`,
          `✓ Files created: ${selectedLangs.length * screenshots * 2} (PNG + WebP)`,
        ];
        let s = 0;
        (function tick() {
          const out = outRef.current;
          const scrollContainer = scrollRef.current;
          if (!out) return;
          if (s < steps.length) {
            out.textContent += (s === 0 ? "" : "\n") + steps[s];
            out.style.opacity = "1";
            // Auto-scroll to bottom as content is added
            if (scrollContainer) {
              setTimeout(() => {
                scrollContainer.scrollTop = scrollContainer.scrollHeight;
              }, 50);
            }
            s++;
            setTimeout(tick, 180 + Math.random() * 120);
          }
        })();

        const logo = logoRef.current;
        if (logo) {
          logo.classList.remove("flash");
          setTimeout(() => logo.classList.add("flash"), 120);
        }
      }
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", typeNext, { once: true });
    } else {
      typeNext();
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="h-full w-full">
        <div className="pointer-events-none absolute inset-0 mix-blend-soft-light" style={{
          background: "repeating-linear-gradient(to bottom, rgba(255,255,255,0.02), rgba(255,255,255,0.02) 1px, rgba(0,0,0,0.02) 3px, rgba(0,0,0,0.02) 4px)",
        }} />
        <div ref={scrollRef} className="relative z-10 h-full w-full overflow-y-auto overflow-x-hidden p-6 text-[clamp(12px,1.5vw,18px)] font-mono leading-relaxed text-[#39ff14] scroll-smooth" style={{
          textShadow: "0 0 5px rgba(57,255,20,0.7), 0 0 15px rgba(57,255,20,0.4)",
        }}>
          <pre ref={logoRef} aria-hidden className="select-none whitespace-pre leading-[1.1] mb-3">
{String.raw`     _                       _           _   
    / \   _ __  _ __  ___| |__   ___ | |_ 
   / _ \ | '_ \| '_ \/ __| '_ \ / _ \| __|
  / ___ \| |_) | |_) \__ \ | | | (_) | |_ 
 /_/   \_\ .__/| .__/|___/_| |_|\___/ \__|
         |_|   |_|                          `}
          </pre>
          <div aria-live="polite">
            <span className="mr-2">&gt;</span>
            <span ref={typedRef}></span>
            <span aria-hidden className="inline-block w-[0.7ch] animate-pulse">_</span>
            <div ref={outRef} aria-hidden className="mt-2 whitespace-pre opacity-0 transition-opacity"></div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .flash { filter: brightness(1.15) saturate(1.2); }
      `}</style>
    </div>
  );
}

