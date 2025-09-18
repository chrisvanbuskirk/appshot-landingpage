# AppShot Website Animation Command Sequences

These command sequences are designed for the AppShot website's terminal animation. Each set represents a different realistic workflow that showcases AppShot's capabilities.

## Set 1: Initial Setup & Basic Processing
**Theme: New user getting started with AppShot**

```bash
> appshot init

Initializing appshot project...
✓ Created .appshot directory
✓ Created screenshots/iphone directory
✓ Created screenshots/ipad directory
✓ Generated default config
✓ Added 10 embedded fonts
Project initialized successfully!

> appshot gradients --apply ocean

Applying gradient preset: ocean
✓ Colors: #0093E9 → #80D0C7
✓ Direction: diagonal
✓ Updated config.json
Ocean gradient applied to all devices

> appshot build --devices iphone

Processing screenshots...
Found 6 screenshots in screenshots/iphone/
• home.png → Applying frame & gradient
• features.png → Applying frame & gradient
• settings.png → Applying frame & gradient
✓ Generated 6 screenshots in final/iphone/en/
Build complete in 3.2s
```

## Set 2: Caption & Localization Workflow
**Theme: Adding captions and translating for international markets**

```bash
> appshot caption --device iphone

Interactive Caption Editor
━━━━━━━━━━━━━━━━━━━━━━━━
Screenshot: home.png
Caption: Welcome to Your New Experience
✓ Saved

Screenshot: features.png
Caption: Powerful Tools at Your Fingertips
✓ Saved

> appshot localize --langs es,fr,de --model gpt-4o

Translating captions to 3 languages...
• Spanish: "Bienvenido a Tu Nueva Experiencia"
• French: "Bienvenue dans Votre Nouvelle Expérience"
• German: "Willkommen zu Ihrer Neuen Erfahrung"
✓ Translations complete for 6 screenshots
✓ Saved to .appshot/captions/

> appshot build --langs es,fr,de

Building for 3 languages...
• Processing Spanish (es)... ✓
• Processing French (fr)... ✓
• Processing German (de)... ✓
Generated 18 screenshots across 3 languages
```

## Set 3: Watch Mode & Device Capture
**Theme: Automated workflow with real device integration**

```bash
> appshot device list

Available iOS Simulators:
• iPhone 16 Pro (booted)
• iPhone 15 Pro Max
• iPad Pro 13" (M4)
• Apple Watch Ultra 2

> appshot watch start --process --background

Starting watch service...
✓ Monitoring: ./screenshots
✓ Auto-processing enabled
✓ Frame detection: automatic
✓ Running in background (PID: 48293)
Watching for new screenshots...

[New file detected: hero_screen.png]
→ Device: iPhone (detected from dimensions)
→ Applying iPhone 16 Pro frame
→ Adding ocean gradient
→ Output: final/iphone/en/hero_screen.png
✓ Processed in 1.8s
```

## Set 4: Fastlane Export & Style Customization
**Theme: Preparing for App Store submission**

```bash
> appshot style --device iphone

Style Configuration
━━━━━━━━━━━━━━━━━
Frame scale: 0.85
Caption position: above
Background: gradient
Font: SF Pro Display
✓ Style updated

> appshot order --device iphone

Screenshot Order Manager
Current order:
1. onboarding.png
2. home.png
3. features.png
4. premium.png
[↑↓ to reorder, Enter to save]
✓ Order saved

> appshot export --output ../fastlane --order

Exporting for Fastlane...
• Creating directory structure
• Copying iPhone screenshots (6 files)
• Copying iPad screenshots (6 files)
• Applying numeric prefixes for order
• Generating Snapfile
• Generating Deliverfile
✓ Fastlane export complete
Ready for: fastlane deliver
```

## Implementation Notes

### Color Codes for Terminal Output
- **Green** (`#50FA7B`): Success indicators (✓), success messages
- **Blue** (`#8BE9FD`): Information, file paths, processing status
- **Yellow** (`#F1FA8C`): Headers, prompts
- **White** (`#F8F8F2`): Normal text
- **Gray** (`#6272A4`): Comments, metadata

### Animation Timing Suggestions
- **Command typing**: 50-100ms per character
- **Output display**: 20-30ms per line
- **Pause between commands**: 800-1200ms
- **Success checkmarks**: Add 200ms delay for effect

### Randomization Strategy
1. Pick a random set on page load
2. Or cycle through all 4 sets sequentially
3. Add slight variations in timing to feel more natural
4. Consider adding typing corrections/backspace for realism

### Additional Quick Commands (for variety)
```bash
# Quick one-liners to intersperse
> appshot doctor
> appshot validate --device iphone
> appshot fonts --embedded
> appshot specs --device ipad
> appshot clean --all
> appshot backgrounds set iphone ./bg.jpg
> appshot frame ./screenshot.png
```

## JSON Format for Website Integration

```json
{
  "sequences": [
    {
      "id": "setup",
      "name": "Initial Setup & Basic Processing",
      "commands": [
        {
          "input": "appshot init",
          "output": [
            "Initializing appshot project...",
            "✓ Created .appshot directory",
            "✓ Created screenshots/iphone directory",
            "✓ Created screenshots/ipad directory",
            "✓ Generated default config",
            "✓ Added 10 embedded fonts",
            "Project initialized successfully!"
          ]
        },
        {
          "input": "appshot gradients --apply ocean",
          "output": [
            "Applying gradient preset: ocean",
            "✓ Colors: #0093E9 → #80D0C7",
            "✓ Direction: diagonal",
            "✓ Updated config.json",
            "Ocean gradient applied to all devices"
          ]
        },
        {
          "input": "appshot build --devices iphone",
          "output": [
            "Processing screenshots...",
            "Found 6 screenshots in screenshots/iphone/",
            "• home.png → Applying frame & gradient",
            "• features.png → Applying frame & gradient",
            "• settings.png → Applying frame & gradient",
            "✓ Generated 6 screenshots in final/iphone/en/",
            "Build complete in 3.2s"
          ]
        }
      ]
    }
  ]
}
```