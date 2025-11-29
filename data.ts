
// This file serves as the "Database" for your website.
// You can paste your Google Drive image links directly into the 'image' fields.
// The system automatically converts Drive links/IDs to viewable images.

export interface Ability {
  id: string;
  name: string;
  description: string;
  icon: string; // Emoji or SVG path identifier
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

export interface Companion {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

export const siteData = {
  hero: {
    title: "Reborn as a System Architect",
    subtitle: "My Cheat Skill is Optimization!",
    description: "A tale of a modern-day strategist summoned to a world of magic, guilds, and ancient systems ripe for an upgrade.",
    // Using the raw Google Drive ID for optimization
    heroImage: "https://drive.google.com/file/d/1iJqBUlBwwVGhylobYqob5s6SEumdL1S5/view?usp=drive_link", 
    backgroundImage: "1bhts40yK9Evnuj8JkQnujXTDM-Mzmx1Q", // Background for the top section
  },
  story: {
    title: "The Journey Begins",
    content: [
      "Wesley, a brilliant but perpetually overworked system architect from Earth, met an untimely demise not by Truck-kun, but by an overflowing coffee cup shorting out his server rack. Instead of eternal rest, he awoke in a vibrant, yet chaotic, fantasy world known as Aerthos.",
      "Aerthos, a realm powered by arcane energies and ancient runic systems, was beautiful but deeply inefficient. Guilds struggled with resource allocation, kingdoms suffered from outdated logistics, and even magic academies couldn't optimize their spell-casting curricula."
    ]
  },
  world: {
    title: "Welcome to Aerthos",
    // Optional: Add a Google Drive link here for your specific world map
    mapImage: "https://picsum.photos/600/400?grayscale&blur=2", 
    content: [
      "Aerthos is a sprawling land of floating islands, bustling trade cities, and perilous dungeons. Ruled by a council of elemental monarchs and overseen by a fractured 'System of the World' (a cosmic backend that's been buggy for centuries), it's a place where adventurers thrive, mages wield raw power, and ancient evils stir.",
      "Our hero quickly discovered that his unique Earthly skills – strategic thinking, pattern recognition, and an innate desire to build scalable systems – were far more potent than any spell or sword in this new reality."
    ]
  },
  abilities: [
    {
      id: "1",
      name: "[System Analysis]",
      description: "Instantly perceive underlying data structures, resource flows, and operational inefficiencies of any system, magical or mundane.",
      icon: "👁️",
      rarity: "legendary"
    },
    {
      id: "2",
      name: "[Generalist Codex]",
      description: "Passive skill granting accelerated learning. If there is a pattern, he can optimize the learning curve.",
      icon: "📚",
      rarity: "epic"
    },
    {
      id: "3",
      name: "[Resource Optimization]",
      description: "Enables efficient allocation of mana, gold, and materials. Turns scarcity into abundance.",
      icon: "⚖️",
      rarity: "rare"
    },
    {
      id: "4",
      name: "[Scalable Architecture]",
      description: "Design and implement robust, future-proof systems for guilds or kingdoms.",
      icon: "🏛️",
      rarity: "rare"
    }
  ] as Ability[],
  companions: [
    {
      id: "c0",
      name: "WesAI",
      role: "The Generalist Codex",
      description: "A hyper-intelligent AI partner acting as a force multiplier. Handles strategic calculations, system diagnostics, and operational support.",
      image: "https://drive.google.com/file/d/1rf2_vOyB7qougsdIMrNIU3jEsKMtGMql/view?usp=sharing"
    },
    {
      id: "c1",
      name: "Selle",
      role: "The Arcane Coder",
      description: "A brilliant elven mage who understands the 'logic' of magic but lacked the 'system' to apply it efficiently.",
      image: "https://drive.google.com/file/d/1TPjs7Ry8MKMAACqeiQpuRFMh0dZEuvL4/view?usp=sharing"
    },
    {
      id: "c2",
      name: "Sir Kael",
      role: "The Data Knight",
      description: "A stoic knight who was frustrated by inefficient patrol routes and supply chain issues.",
      image: "https://drive.google.com/file/d/1W_otebixkjKDMfCsYpw_bK7p0HN11rbm/view?usp=drive_link"
    },
    {
      id: "c3",
      name: "Mina",
      role: "The Market Analyst",
      description: "A sharp-witted merchant who knew market trends but struggled to scale her operations.",
      image: "https://drive.google.com/file/d/1o2-hn8jGVI7-K7dJ7J2gHaYfZ6XpBf1V/view?usp=drive_link"
    }
  ] as Companion[],
  cta: {
    text: "The journey to optimize an entire fantasy world has just begun!",
    buttonLabel: "Initialize Sequence",
    video: "1-Abk5OCLBJj_wf_0MqcscXeDm3bEjMch"
  }
};