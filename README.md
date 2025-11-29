# Aerthos Online | System Architect Interface

> "Reborn as a System Architect: My Cheat Skill is Optimization!"

**Aerthos Online** is a high-performance, immersive React web application designed as a "System Interface" for a fantasy isekai narrative. It serves as a dynamic landing page, portfolio, and lore hub, featuring real-time UI simulations, audio visualization, and modular data management.

![System Status](https://img.shields.io/badge/SYSTEM-ONLINE-success?style=for-the-badge)
![Core](https://img.shields.io/badge/REACT_19-VITE-cyan?style=for-the-badge)
![Style](https://img.shields.io/badge/TAILWIND-CSS-blue?style=for-the-badge)

---

## ⚡ System Modules & Features

### 1. The "Cheat Skill" Architecture
The application is built to be **Generalist & Modular**. Instead of hardcoded text, the entire application state is driven by a single "Database" file.
*   **Centralized Data (`data.ts`):** Controls all lore, character stats, abilities, music tracks, and external links. Updating the story is as simple as editing a JSON object.
*   **Asset Optimization (`utils.ts`):** Includes a custom engine to resolve Google Drive links.
    *   *Images:* Automatically converts Drive view links to the high-performance `thumbnail` API (4K resolution support) to bypass bandwidth limits.
    *   *Audio:* Intelligently routes audio streams via the `export=download` endpoint for HTML5 Audio compatibility.

### 2. Immersive UI Components
*   **System HUD:** A fixed heads-up display tracking "System Time", scroll progress (rendering), and navigation status.
*   **System Logger:** An ambient notification system that pushes "alerts" and "optimization updates" to the user, simulating a living AI interface.
*   **Audio Controller:** A persistent music player with simulated equalizer animations, volume control, and auto-play logic for the soundtrack.
*   **Visual Effects:**
    *   `ParticleBackground.tsx`: Custom canvas-based particle physics.
    *   `Icon.tsx`: SVG path rendering for ability icons.
    *   CSS Animations: Scanlines, pulses, glows, and typewriter effects.

---

## 🛠️ Initialization (Local Development)

This project uses **Vite** for lightning-fast HMR (Hot Module Replacement) and **TypeScript** for type safety.

### Prerequisites
*   Node.js (v18+ recommended)

### Sequence
1.  **Clone the Repository**
    ```bash
    git clone <repository-url>
    cd aerthos-online
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Initialize Dev Server**
    ```bash
    npm run dev
    ```

4.  **Build for Production**
    ```bash
    npm run build
    ```

---

## 📂 Data Management (The "Database")

To modify the content, navigate to `data.ts`.

```typescript
export const siteData = {
  hero: {
    // Modify the main title and background here
    title: "Reborn as a System Architect",
    backgroundImage: "GOOGLE_DRIVE_LINK_OR_ID"
  },
  soundtrack: {
    // Add mp3 links here. The AudioController automatically picks them up.
    tracks: [ ... ]
  },
  abilities: [
    // Define the RPG skills displayed on cards
    {
      name: "[System Analysis]",
      rarity: "legendary", // Controls border colors (Gold/Purple/Blue)
      ...
    }
  ],
  // ... World lore, Companions, CTA
};
```

---

## 🎨 Styling & Assets

*   **Tailwind CSS:** Used for utility-first styling. Configured via CDN in `index.html` for rapid prototyping in cloud environments, or standard PostCSS in local builds.
*   **Fonts:** 'Inter' (UI), 'Bebas Neue' (Headers), and 'Press Start 2P' (System Text).
*   **Icons:** Custom SVG components located in `components/Icon.tsx`.

---

## 📜 License & Credits

**Architect:** WesAI (v2.2)  
**Operator:** John Wesley Quintero

*Designed for the Aerthos Project. Unauthorized system intrusion will be met with immediate firewall countermeasures.*
