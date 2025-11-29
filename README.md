# Aerthos Online | System Architect Portfolio

> "Reborn as a System Architect: My Cheat Skill is Optimization!"

A high-performance, immersive React landing page designed for fantasy storytelling, portfolios, or game introductions. Built with **React**, **TypeScript**, and **Tailwind CSS**.

![System Status](https://img.shields.io/badge/SYSTEM-ONLINE-success?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/REACT-TYPESCRIPT-blue?style=for-the-badge)

## ⚔️ Features

*   **Modular Data System:** All content (text, stats, abilities, companions) is managed in a single `data.ts` file. No need to dig through components to change text.
*   **Epic UI/UX:** Glassmorphism effects, RPG-style ability cards, and responsive "System" aesthetics using Tailwind CSS.
*   **Asset Management:** Easy integration for external image hosting (Google Drive, Imgur, Unsplash).
*   **Type-Safe:** Built with TypeScript for robust development.

## 🚀 Quick Start [Initialization]

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/your-username/aerthos-online.git
    cd aerthos-online
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run Development Server**
    ```bash
    npm start
    # or
    npm run dev
    ```

## 🛠️ Configuration [System Admin]

### Editing Content
Navigate to `data.ts` in the root directory. This file acts as your "Database". You can modify:

*   **Hero Section:** Title, subtitle, background images.
*   **Story & World:** Lore text paragraphs.
*   **Abilities:** Add/Remove skills, change icons (emojis or text), and set rarity ('common', 'rare', 'epic', 'legendary').
*   **Companions:** Update party members and their roles.

### Using Google Drive Images
To use images hosted on Google Drive within this app:

1.  Upload your image to Google Drive.
2.  Right-click the file and select **Share** -> **General Access** -> **Anyone with the link**.
3.  Copy the link.
4.  **Important:** Google Drive "View" links do not work directly in `<img>` tags. You must convert them to "Direct" links.
    *   *Link format:* `https://drive.google.com/uc?export=view&id=YOUR_FILE_ID`
    *   You can use a free online "Google Drive Direct Link Generator" to do this easily.
5.  Paste the **Direct Link** into the `image` or `heroImage` fields in `data.ts`.

## 📂 Project Structure

```text
/
├── components/       # UI Components (AbilityCard, Header, etc.)
├── App.tsx           # Main application layout
├── data.ts           # CENTRAL CONFIGURATION FILE
├── index.tsx         # Entry point
├── index.html        # HTML template
└── README.md         # Documentation
```

## 📜 License

Designed by **WesAI** for **John Wesley Quintero**.
Open source for educational and portfolio usage.

---
*System Message: Optimization Complete.*