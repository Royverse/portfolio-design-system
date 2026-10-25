# Roy Mootsana Portfolio Ecosystem — Unified Design System & Storybook

> **The Central Design System & Component Library for all 14 Roy Mootsana Projects**  
> Built with **React 18 + TypeScript + Vite + Storybook 8**.

---

## 🎨 Interactive Project Theme Switcher

Every component in this Storybook dynamically binds to the active ecosystem project selected in the **Paintbrush icon** in the Storybook toolbar:
- `--project-theme-color`
- `--project-accent-color`
- `--project-bg-color`
- `--project-surface-bg`
- `--project-font`
- `--project-display-font`
- `--project-glow-color`

---

## 🧩 Component Suite

### 00 · Design Tokens
- **Colors**: All 14 project theme colors, accents, surfaces, and hex codes.
- **Typography**: Font pairings across Cinzel, DM Mono, JetBrains Mono, Epilogue, and Plus Jakarta Sans.
- **Surfaces**: Neumorphic acoustic glass, brutalist terminal, retro WebOS bevel, cyber telemetry HUD, and minimal kinetic glass.

### 01 · Ecosystem Shared
- **`ProjectBadge`**: Signature Roy Mootsana icon on `#111` rounded background with dynamic project accent theme border.
- **`ElectricBorder`**: Animated electric neon spark discharge border.
- **`ProjectCard`**: Interactive tilt project card with tags and live demo link.
- **`StatDisplay`**: Tabular numeral telemetry and metrics counter.
- **`SkipLink`**: Accessible WCAG 2.2 AA jump navigation link.

### 02 · Spatial Audio & Vision
- **`NeumorphicDial`**: 360° interactive rotary knob with value readout.
- **`FrequencyMeter`**: Real-time acoustic spectrum and waveform visualizer.
- **`SoloMapToggle`**: Single-axis WebMIDI isolate map button for frictionless DAW learning.
- **`ColorSwatchPicker`**: Accessible swatch picker with keyboard navigation.
- **`TrackingCameraDock`**: Webcam HUD status dock with skeleton overlay and FPS badge.
- **`ScaleSelector`**: Musical scale quantizer selector (Dorian, Hirajoshi, Phrygian Dominant, etc.).
- **`StemRecordButton`**: 32-bit Float WAV & MIDI stem recorder button with timer.
- **`ProPreviewBadge`**: 60-second Pro taste countdown timer badge with unlock modal trigger.

### 03 · Retro WebOS
- **`WindowFrame`**: Beveled retro window with minimize/maximize/close buttons.
- **`Taskbar`**: Retro desktop taskbar with Start button, window tabs, and clock.
- **`DesktopIcon`**: Pixelated desktop shortcut icon.

### 04 · Financial Terminal
- **`SentimentMeter`**: Bullish / Neutral / Bearish gauge with percentage delta.
- **`TerminalHeader`**: Monospace prompt header with live pulse.

### 05 · Gaming & Survival HUD
- **`SurvivalGauge`**: Oxygen / Hull integrity gauge with critical warning alert.
- **`FlightTelemetryRing`**: Luminary flight ring altimeter and airspeed indicator.

---

## 🛠️ Development & Build Commands

```bash
# Start Storybook interactive development server (Port 6006)
npm run storybook

# Build static Storybook site for production deployment
npm run build-storybook

# Preview built Storybook locally
npx vite preview --outDir dist
```
