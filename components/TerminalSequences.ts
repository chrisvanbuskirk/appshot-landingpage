export type TerminalCommand = {
  input: string;
  output: string[];
};

export type TerminalSequence = {
  id: string;
  name: string;
  commands: TerminalCommand[];
};

export const TERMINAL_SEQUENCES: TerminalSequence[] = [
  {
    id: "setup",
    name: "Initial Setup & Basic Processing",
    commands: [
      {
        input: "appshot init",
        output: [
          "Initializing appshot project...",
          "✓ Created .appshot directory",
          "✓ Created screenshots/iphone directory",
          "✓ Created screenshots/ipad directory",
          "✓ Generated default config",
          "✓ Added 10 embedded fonts",
          "Project initialized successfully!",
        ],
      },
      {
        input: "appshot gradients --apply ocean",
        output: [
          "Applying gradient preset: ocean",
          "✓ Colors: #0093E9 → #80D0C7",
          "✓ Direction: diagonal",
          "✓ Updated config.json",
          "Ocean gradient applied to all devices",
        ],
      },
      {
        input: "appshot build --devices iphone",
        output: [
          "Processing screenshots...",
          "Found 6 screenshots in screenshots/iphone/",
          "• home.png → Applying frame & gradient",
          "• features.png → Applying frame & gradient",
          "• settings.png → Applying frame & gradient",
          "✓ Generated 6 screenshots in final/iphone/en/",
          "Build complete in 3.2s",
        ],
      },
    ],
  },
  {
    id: "localize",
    name: "Caption & Localization Workflow",
    commands: [
      {
        input: "appshot caption --device iphone",
        output: [
          "Interactive Caption Editor",
          "━━━━━━━━━━━━━━━━━━━━━━━━",
          "Screenshot: home.png",
          "Caption: Welcome to Your New Experience",
          "✓ Saved",
          "",
          "Screenshot: features.png",
          "Caption: Powerful Tools at Your Fingertips",
          "✓ Saved",
        ],
      },
      {
        input: "appshot localize --langs es,fr,de --model gpt-4o",
        output: [
          "Translating captions to 3 languages...",
          "• Spanish: \"Bienvenido a Tu Nueva Experiencia\"",
          "• French: \"Bienvenue dans Votre Nouvelle Expérience\"",
          "• German: \"Willkommen zu Ihrer Neuen Erfahrung\"",
          "✓ Translations complete for 6 screenshots",
          "✓ Saved to .appshot/captions/",
        ],
      },
      {
        input: "appshot build --langs es,fr,de",
        output: [
          "Building for 3 languages...",
          "• Processing Spanish (es)... ✓",
          "• Processing French (fr)... ✓",
          "• Processing German (de)... ✓",
          "Generated 18 screenshots across 3 languages",
        ],
      },
    ],
  },
  {
    id: "watch",
    name: "Watch Mode & Device Capture",
    commands: [
      {
        input: "appshot device list",
        output: [
          "Available iOS Simulators:",
          "• iPhone 16 Pro (booted)",
          "• iPhone 15 Pro Max",
          "• iPad Pro 13\" (M4)",
          "• Apple Watch Ultra 2",
        ],
      },
      {
        input: "appshot watch start --process --background",
        output: [
          "Starting watch service...",
          "✓ Monitoring: ./screenshots",
          "✓ Auto-processing enabled",
          "✓ Frame detection: automatic",
          "✓ Running in background (PID: 48293)",
          "Watching for new screenshots...",
          "",
          "[New file detected: hero_screen.png]",
          "→ Device: iPhone (detected from dimensions)",
          "→ Applying iPhone 16 Pro frame",
          "→ Adding ocean gradient",
          "→ Output: final/iphone/en/hero_screen.png",
          "✓ Processed in 1.8s",
        ],
      },
    ],
  },
  {
    id: "fastlane",
    name: "Fastlane Export & Style Customization",
    commands: [
      {
        input: "appshot style --device iphone",
        output: [
          "Style Configuration",
          "━━━━━━━━━━━━━━━━━",
          "Frame scale: 0.85",
          "Caption position: above",
          "Background: gradient",
          "Font: SF Pro Display",
          "✓ Style updated",
        ],
      },
      {
        input: "appshot order --device iphone",
        output: [
          "Screenshot Order Manager",
          "Current order:",
          "1. onboarding.png",
          "2. home.png",
          "3. features.png",
          "4. premium.png",
          "[↑↓ to reorder, Enter to save]",
          "✓ Order saved",
        ],
      },
      {
        input: "appshot export --output ../fastlane --order",
        output: [
          "Exporting for Fastlane...",
          "• Creating directory structure",
          "• Copying iPhone screenshots (6 files)",
          "• Copying iPad screenshots (6 files)",
          "• Applying numeric prefixes for order",
          "• Generating Snapfile",
          "• Generating Deliverfile",
          "✓ Fastlane export complete",
          "Ready for: fastlane deliver",
        ],
      },
    ],
  },
];
