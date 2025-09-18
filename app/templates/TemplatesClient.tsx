"use client";

import { useEffect, useRef, useState } from "react";
import { NavBar } from "@/components/NavBar";
import { Orbs } from "@/components/Orbs";
import { Stars } from "@/components/Stars";
import { GITHUB_URL, INSTALL_CMD } from "@/app/config";

type DeviceKey = "iphone" | "ipad" | "watch" | "mac";

type DeviceConfig = {
  label: string;
  icon: string;
  specTitle: string;
  specs: { label: string; value: string }[];
  samples: { label: string; image: string }[];
};

type TemplateCard = {
  name: string;
  description: string;
  image: string;
  features: string[];
  command: string;
};

type QuickStartStep = {
  title: string;
  description: string;
  code: string;
};

type AdaptationCard = {
  icon: string;
  title: string;
  description: string;
};

const DEVICE_CONFIG: Record<DeviceKey, DeviceConfig> = {
  iphone: {
    label: "iPhone",
    icon: "📱",
    specTitle: "iPhone specifications",
    specs: [
      { label: "Resolution", value: "1290x2796" },
      { label: "Default scale", value: "85%" },
      { label: "Caption size", value: "64px" },
      { label: "Position", value: "Centered" },
    ],
    samples: [
      { label: "Modern", image: "/templates/iphone/modern-iphone.png" },
      { label: "Minimal", image: "/templates/iphone/minimal-iphone.png" },
      { label: "Bold", image: "/templates/iphone/bold-iphone.png" },
      { label: "Elegant", image: "/templates/iphone/elegant-iphone.png" },
      { label: "Showcase", image: "/templates/iphone/showcase-iphone.png" },
      { label: "Playful", image: "/templates/iphone/playful-iphone.png" },
      { label: "Corporate", image: "/templates/iphone/corporate-iphone.png" },
      { label: "Nerdy OSS", image: "/templates/iphone/nerdy-iphone.png" },
    ],
  },
  ipad: {
    label: "iPad",
    icon: "📱",
    specTitle: "iPad specifications",
    specs: [
      { label: "Resolution", value: "2048x2732" },
      { label: "Optimized scale", value: "75%" },
      { label: "Caption size", value: "64px" },
      { label: "Position", value: "Lower (60%)" },
    ],
    samples: [
      { label: "Modern", image: "/templates/ipad/modern-ipad.png" },
      { label: "Minimal", image: "/templates/ipad/minimal-ipad.png" },
      { label: "Bold", image: "/templates/ipad/bold-ipad.png" },
      { label: "Elegant", image: "/templates/ipad/elegant-ipad.png" },
      { label: "Showcase", image: "/templates/ipad/showcase-ipad.png" },
      { label: "Playful", image: "/templates/ipad/playful-ipad.png" },
      { label: "Corporate", image: "/templates/ipad/corporate-ipad.png" },
      { label: "Nerdy OSS", image: "/templates/ipad/nerdy-ipad.png" },
    ],
  },
  watch: {
    label: "Apple Watch",
    icon: "⌚",
    specTitle: "Apple Watch specifications",
    specs: [
      { label: "Resolution", value: "410x502" },
      { label: "Optimized scale", value: "110-130%" },
      { label: "Caption size", value: "32-36px" },
      { label: "Special", value: "Two-line wrap" },
    ],
    samples: [
      { label: "Modern", image: "/templates/watch/modern-watch.png" },
      { label: "Minimal", image: "/templates/watch/minimal-watch.png" },
      { label: "Bold", image: "/templates/watch/bold-watch.png" },
      { label: "Elegant", image: "/templates/watch/elegant-watch.png" },
      { label: "Showcase", image: "/templates/watch/showcase-watch.png" },
      { label: "Playful", image: "/templates/watch/playful-watch.png" },
      { label: "Corporate", image: "/templates/watch/corporate-watch.png" },
      { label: "Nerdy OSS", image: "/templates/watch/nerdy-watch.png" },
    ],
  },
  mac: {
    label: "Mac",
    icon: "💻",
    specTitle: "Mac specifications",
    specs: [
      { label: "Resolution", value: "2880x1800" },
      { label: "Optimized scale", value: "90-95%" },
      { label: "Caption size", value: "54-64px" },
      { label: "Aspect", value: "16:10" },
    ],
    samples: [
      { label: "Modern", image: "/templates/mac/modern-mac.png" },
      { label: "Minimal", image: "/templates/mac/minimal-mac.png" },
      { label: "Bold", image: "/templates/mac/bold-mac.png" },
      { label: "Elegant", image: "/templates/mac/elegant-mac.png" },
      { label: "Showcase", image: "/templates/mac/showcase-mac.png" },
      { label: "Playful", image: "/templates/mac/playful-mac.png" },
      { label: "Corporate", image: "/templates/mac/corporate-mac.png" },
      { label: "Nerdy OSS", image: "/templates/mac/nerdy-mac.png" },
    ],
  },
};

const TEMPLATE_CARDS: TemplateCard[] = [
  {
    name: "Modern",
    description: "Vibrant gradient with floating device and clean captions. Great default for most apps.",
    image: "/templates/gallery/modern-sample.png",
    features: ["Vibrant gradient", "85% scale", "Centered", "All devices"],
    command: "appshot template modern",
  },
  {
    name: "Minimal",
    description: "Soft pastel backdrop with elegant typography. Clean and focused composition.",
    image: "/templates/gallery/minimal-sample.png",
    features: ["Pastel palette", "75% scale", "Lower position", "All devices"],
    command: "appshot template minimal",
  },
  {
    name: "Bold",
    description: "Dark dramatic gradient with oversized device and overlay captions to make a statement.",
    image: "/templates/gallery/bold-sample.png",
    features: ["Dark theme", "100% scale", "Overlay caption", "All devices"],
    command: "appshot template bold",
  },
  {
    name: "Nerdy OSS",
    description: "Grid-lined midnight palette with JetBrains Mono captions. Built for terminal lovers.",
    image: "/templates/gallery/nerdy-sample.png",
    features: ["JetBrains Mono", "Overlay caption", "Custom background", "All devices"],
    command: "appshot template nerdy",
  },
  {
    name: "Elegant",
    description: "Sophisticated monochrome treatment with floating device. Professional and refined.",
    image: "/templates/gallery/elegant-sample.png",
    features: ["Monochrome", "80% scale", "Bottom caption", "Mac optimised"],
    command: "appshot template elegant",
  },
  {
    name: "Showcase",
    description: "Glassmorphism overlays that auto-detect your custom background.png assets.",
    image: "/templates/gallery/showcase-sample.png",
    features: ["Auto background", "88% scale", "Glass effect", "All devices"],
    command: "appshot template showcase",
  },
  {
    name: "Playful",
    description: "Bright, energetic gradients that snap for games and entertainment apps.",
    image: "/templates/gallery/playful-sample.png",
    features: ["Bright colors", "95% scale", "Fun style", "Watch ready"],
    command: "appshot template playful",
  },
  {
    name: "Corporate",
    description: "Clean, professional layouts tuned for productivity and business-focused stories.",
    image: "/templates/gallery/corporate-sample.png",
    features: ["Professional", "85% scale", "Left aligned", "Mac ready"],
    command: "appshot template corporate",
  },
];

const QUICKSTART_STEPS: QuickStartStep[] = [
  {
    title: "Install Appshot",
    description: "Install globally via npm:",
    code: INSTALL_CMD,
  },
  {
    title: "Quick start",
    description: "Interactive setup with templates:",
    code: "appshot quickstart",
  },
  {
    title: "Add screenshots",
    description: "Drop your captures into:",
    code: "screenshots/iphone/",
  },
  {
    title: "Build",
    description: "Generate final assets:",
    code: "appshot build",
  },
];

const ADAPTATION_CARDS: AdaptationCard[] = [
  {
    icon: "📱",
    title: "iPhone",
    description:
      "Standard positioning with 85% scale. Full-height frames keep captions centered for maximum impact.",
  },
  {
    icon: "📱",
    title: "iPad",
    description:
      "Automatically scales to 75% and nudges devices lower (60%) to balance the larger canvas without crowding captions.",
  },
  {
    icon: "⌚",
    title: "Apple Watch",
    description:
      "Large 110-130% scale keeps tiny screens visible while captions auto-wrap to two lines at 32-36px.",
  },
  {
    icon: "💻",
    title: "Mac",
    description:
      "Professional framing at 90-95% with flexible caption positioning tuned for wide 16:10 landscapes.",
  },
];

const DEVICE_ORDER: DeviceKey[] = ["iphone", "ipad", "watch", "mac"];

const HERO_ASCII_ART = [
  "     _                       _           _   ",
  "    / \\   _ __  _ __  ___| |__   ___ | |_ ",
  "   / _ \\ | '_ \\| '_ \\/ __| '_ \\ / _ \\| __|",
  "  / ___ \\| |_) | |_) \\__ \\ | | | (_) | |_ ",
  " /_/   \\_\\ .__/| .__/|___/_| |_|\\___/ \\__|",
  "         |_|   |_|                         ",
].join("\n");

export default function TemplatesClient() {
  const [activeDevice, setActiveDevice] = useState<DeviceKey>("iphone");
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const copyTimeout = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimeout.current) {
        window.clearTimeout(copyTimeout.current);
      }
    };
  }, []);

  const handleCopy = async (command: string) => {
    try {
      await navigator.clipboard.writeText(command);
      setCopiedCommand(command);
      if (copyTimeout.current) {
        window.clearTimeout(copyTimeout.current);
      }
      copyTimeout.current = window.setTimeout(() => {
        setCopiedCommand((current) => (current === command ? null : current));
      }, 2000);
    } catch (error) {
      console.error("Failed to copy command", error);
    }
  };

  const isCopied = (command: string) => copiedCommand === command;

  return (
    <main className="relative mx-auto flex min-h-dvh w-full max-w-6xl flex-col items-center px-4">
      <NavBar githubUrl={GITHUB_URL} />
      <Stars />
      <Orbs />

      <section className="relative z-10 mt-36 w-full pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.15fr,0.85fr]">
          <div>
            <h1 className="max-w-3xl bg-gradient-to-b from-white to-white/70 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-6xl">
              Template gallery for App Shot
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/70">
              Explore ready-made layouts for every device family. Mix gradients, captions, and frames without leaving your terminal.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleCopy("appshot quickstart")}
              >
                {isCopied("appshot quickstart") ? "Copied!" : "Copy: appshot quickstart"}
              </button>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => handleCopy("appshot template modern && appshot build")}
              >
                {isCopied("appshot template modern && appshot build")
                  ? "Copied!"
                  : "Copy: template + build"}
              </button>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)]">
            <pre className="whitespace-pre text-xs text-emerald-200/80 md:text-sm">
{HERO_ASCII_ART}
            </pre>
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-black/30 p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">Quick start</h2>
              <p className="mt-1 text-sm text-white/60">
                Spin up App Shot, drop screenshots, and build a polished gallery in minutes.
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {QUICKSTART_STEPS.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col rounded-2xl border border-white/10 bg-black/40 p-5"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400/80 via-cyan-400/80 to-blue-400/80 text-sm font-bold text-black">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-base font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-white/65">{step.description}</p>
                <code className="mt-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-3 py-2 text-xs text-emerald-200/90">
                  {step.code}
                </code>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 space-y-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white">Multi-device support</h2>
              <p className="mt-2 max-w-2xl text-sm text-white/60">
                Templates automatically adapt to different Apple devices with optimised scaling, caption sizing, and positioning.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {DEVICE_ORDER.map((deviceKey) => {
              const { label, icon } = DEVICE_CONFIG[deviceKey];
              const isActive = deviceKey === activeDevice;
              return (
                <button
                  key={deviceKey}
                  type="button"
                  onClick={() => setActiveDevice(deviceKey)}
                  className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition ${
                    isActive
                      ? "border-white/40 bg-white/15 text-white"
                      : "border-white/10 text-white/60 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <span>{icon}</span>
                  {label}
                </button>
              );
            })}
          </div>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr),minmax(0,280px)]">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {DEVICE_CONFIG[activeDevice].samples.map((sample) => (
                <figure
                  key={sample.label}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-3 text-center transition hover:border-white/30"
                >
                  <img
                    src={sample.image}
                    alt={`${sample.label} ${DEVICE_CONFIG[activeDevice].label}`}
                    className="mx-auto w-full rounded-xl border border-white/5 bg-black/40 object-contain"
                  />
                  <figcaption className="mt-3 text-xs font-normal uppercase tracking-wide text-white/60 group-hover:text-white/80">
                    {sample.label}
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/35 p-6">
              <h3 className="text-lg font-bold text-white">
                {DEVICE_CONFIG[activeDevice].specTitle}
              </h3>
              <dl className="mt-4 space-y-4">
                {DEVICE_CONFIG[activeDevice].specs.map((spec) => (
                  <div key={spec.label} className="flex flex-col border-b border-white/5 pb-3 last:border-b-0 last:pb-0">
                    <dt className="text-xs uppercase tracking-wide text-white/45">
                      {spec.label}
                    </dt>
                    <dd className="text-sm font-bold text-white/85">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-black/30 p-8">
          <h2 className="text-2xl font-bold text-white">How templates adapt</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {ADAPTATION_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-white/10 bg-black/40 p-5"
              >
                <div className="text-3xl">{card.icon}</div>
                <h3 className="mt-3 text-lg font-bold text-white">{card.title}</h3>
                <p className="mt-2 text-sm text-white/65">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white">Template gallery</h2>
              <p className="mt-2 max-w-2xl text-sm text-white/60">
                Copy any command below to pull a template into your project with gradients, captions, and device frames pre-configured.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {TEMPLATE_CARDS.map((template) => (
              <article
                key={template.name}
                className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)] transition hover:border-white/20"
              >
                <img
                  src={template.image}
                  alt={`${template.name} template preview`}
                  className="w-full border-b border-white/10 object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-white">{template.name}</h3>
                  <p className="mt-2 text-sm text-white/65">{template.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {template.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-normal text-white/65"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between rounded-xl border border-emerald-400/20 bg-emerald-400/5 px-4 py-3 font-mono text-sm text-emerald-200/90">
                    <span className="truncate" title={template.command}>
                      {template.command}
                    </span>
                    <button
                      type="button"
                      className="rounded-md border border-emerald-400/60 px-3 py-1 text-xs font-bold text-emerald-200 transition hover:bg-emerald-400/10"
                      onClick={() => handleCopy(template.command)}
                    >
                      {isCopied(template.command) ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <span className="sr-only" aria-live="polite">
        {copiedCommand ? `${copiedCommand} copied to clipboard` : ""}
      </span>
    </main>
  );
}
