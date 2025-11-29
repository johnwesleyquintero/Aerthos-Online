
// This file serves as the "Database" for your website.
// You can paste your Google Drive image links directly into the 'image' fields.
// Make sure your Drive images are set to "Anyone with the link" and use a direct link converter if needed.

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
    // Replace with your specific hero image URL
    heroImage: "https://picsum.photos/400/400", 
    backgroundImage: "https://picsum.photos/1920/1080?grayscale", // Background for the top section
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
      image: "https://picsum.photos/200/200?grayscale"
    },
    {
      id: "c1",
      name: "Lyra",
      role: "The Arcane Coder",
      description: "A brilliant elven mage who understands the 'logic' of magic but lacked the 'system' to apply it efficiently.",
      image: "https://picsum.photos/200/200?random=1"
    },
    {
      id: "c2",
      name: "Sir Kael",
      role: "The Data Knight",
      description: "A stoic knight who was frustrated by inefficient patrol routes and supply chain issues.",
      image: "https://picsum.photos/200/200?random=2"
    },
    {
      id: "c3",
      name: "Mina",
      role: "The Market Analyst",
      description: "A sharp-witted merchant who knew market trends but struggled to scale her operations.",
      image: "https://picsum.photos/200/200?random=3"
    }
  ] as Companion[],
  cta: {
    text: "The journey to optimize an entire fantasy world has just begun!",
    buttonLabel: "Initialize Sequence"
  }
};
