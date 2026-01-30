// Debuffs data
const debuffsData = {
  "stun": {
    "name": "Stun",
    "icon": "💫",
    "description": "Prevents the enemy from attacking for a duration. Stun effectiveness is modified by stun resistance.",
    "details": [
      "Completely stops enemy attacks during the stun duration",
      "Boss enemies receive only 33% stun effectiveness",
      "Duration can be modified by stun resistance stats",
      "Applied by certain skills, abilities, and companion attacks"
    ],
    "sources": ["Snekles companion ability", "Skill effects", "Weapon enchantments"]
  },
  "ministun": {
    "name": "Mini Stun",
    "icon": "✨",
    "description": "A shorter duration stun effect that briefly interrupts enemy attacks.",
    "details": [
      "Shorter duration than regular stun",
      "Prevents enemy attacks during active duration",
      "Useful for interrupting dangerous enemy abilities",
      "Less affected by stun resistance than full stun"
    ],
    "sources": ["Certain skill effects", "Quick-activation abilities"]
  },
  "root": {
    "name": "Root",
    "icon": "🌿",
    "description": "Prevents enemy movement, keeping them in place. Roots are partially effective against bosses.",
    "details": [
      "Completely immobilizes the enemy",
      "Boss enemies receive 50% root effectiveness",
      "Enemies can still attack while rooted",
      "Duration modified by stun resistance",
      "Excellent for kiting and positioning"
    ],
    "sources": ["Florence's Grasping Roots ability", "Root-based skills"]
  },
  "slow": {
    "name": "Slow",
    "icon": "🐌",
    "description": "Reduces enemy movement and attack speed, making them easier to avoid and fight.",
    "details": [
      "Reduces both movement speed and attack speed",
      "Boss enemies receive 20% reduced effectiveness",
      "Stacks multiplicatively with other slow effects",
      "Allows more time to react to enemy attacks"
    ],
    "sources": ["Globbie companion ability", "Freeze skill effect", "Slow-based enchantments"]
  },
  "runicmark": {
    "name": "Runic Mark",
    "icon": "🔮",
    "description": "Marks the enemy with runes, increasing all damage they take from any source.",
    "details": [
      "Increases damage taken by the marked enemy",
      "Applied by Hootini's special attack",
      "Affects damage from all sources (player, companions, pets)",
      "Particularly powerful for burst damage strategies",
      "Visible indicator shows when enemy is marked"
    ],
    "sources": ["Hootini (Rune Owl) companion special attack"]
  },
  "poison": {
    "name": "Poison",
    "icon": "☠️",
    "description": "Reduces the enemy's health regeneration. Stacks up to 10 times for maximum effectiveness.",
    "details": [
      "Reduces enemy HP regeneration by 20% per stack",
      "Maximum of 10 stacks",
      "At max stacks, completely negates enemy regeneration",
      "Visual effect: enemy color shifts toward cyan",
      "Particularly effective against regenerating enemies"
    ],
    "sources": ["Poison skill effects", "Certain weapon enchantments"]
  },
  "burn": {
    "name": "Burn",
    "icon": "🔥",
    "description": "Deals damage over time through fire. Burns stack and can be detonated for massive damage.",
    "details": [
      "Deals damage every 0.75 seconds",
      "Stacks can accumulate (max stacks based on source)",
      "Ember companion can detonate all stacks for multiplied damage",
      "Each stack has individual expiration time",
      "Burn damage affected by enemy resistances",
      "Visual fire effect on burning enemies"
    ],
    "sources": ["Ember companion", "Burn skill effects", "Fire-based enchantments"]
  },
  "bleed": {
    "name": "Bleed",
    "icon": "🩸",
    "description": "Physical damage over time that makes enemies bleed out. Multiple bleeds stack for increased damage.",
    "details": [
      "Deals physical damage every 1 second",
      "Affected by enemy armor resistance",
      "Multiple bleed stacks tracked independently",
      "Particularly effective against low-armor enemies",
      "Visual blood effect on bleeding enemies"
    ],
    "sources": ["Bleed skill effects", "Physical damage enchantments"]
  },
  "armorbreak": {
    "name": "Armor Break",
    "icon": "🛡️",
    "description": "Reduces enemy defense, making them take more damage from all attacks.",
    "details": [
      "Reduces enemy MDefence (armor resistance)",
      "Stacks multiplicatively using formula: 1 - (1 - reduction%)^stacks",
      "More effective with multiple stacks",
      "Affects both physical and magical damage",
      "Permanent for the debuff duration"
    ],
    "sources": ["Armor Break skill effects", "ArmorBreak weapon enchantments"]
  },
  "attackreduction": {
    "name": "Attack Reduction",
    "icon": "⬇️",
    "description": "Reduces the enemy's attack damage output. Stacks multiplicatively for safety.",
    "details": [
      "Reduces enemy damage output",
      "Stacks multiplicatively (each stack compounds)",
      "Excellent defensive debuff for survival",
      "Particularly useful against hard-hitting enemies",
      "Works on both normal attacks and special abilities"
    ],
    "sources": ["Attack Reduction skill effects", "Defensive abilities"]
  },
  "weaken": {
    "name": "Weaken",
    "icon": "💢",
    "description": "Temporarily weakens the enemy's next attack, reducing its damage by a significant amount.",
    "details": [
      "One-time effect that applies to the next enemy attack",
      "Reduces damage of the next attack only",
      "Applied by Snekles companion",
      "Useful for surviving dangerous enemy abilities",
      "Consumed after the weakened attack hits"
    ],
    "sources": ["Snekles companion ability"]
  }
};
