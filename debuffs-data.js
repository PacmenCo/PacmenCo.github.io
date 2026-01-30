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
    "description": "Reduces the enemy's health regeneration.",
    "details": [
      "Reduces enemy HP regeneration",
      "Stacks multiplicatively",
      "Visual effect: enemy color shifts",
      "Particularly effective against enemies with high HP regeneration"
    ],
    "sources": ["Poison skill effects", "Certain weapon enchantments"]
  },
  "burn": {
    "name": "Burn",
    "icon": "🔥",
    "description": "Deals damage over time through fire. Applied and detonated by Ember's special ability.",
    "details": [
      "Deals damage every 0.75 seconds",
      "Stacks accumulate with each application",
      "Ember can detonate all stacks for massive burst damage",
      "Each stack has individual expiration time",
      "Burn damage affected by enemy resistances",
      "For full mechanics and detonation formulas, see the Ember companion page"
    ],
    "sources": ["Ember companion - Flame special ability"]
  },
  "bleed": {
    "name": "Bleed",
    "icon": "🩸",
    "description": "Physical damage over time that makes enemies bleed out.",
    "details": [
      "Deals physical damage every second",
      "Affected by enemy armor resistance",
      "Particularly effective against low-armor enemies"
    ],
    "sources": ["Bleed skill effects", "Physical damage enchantments"]
  },
  "armorbreak": {
    "name": "Armor Break",
    "icon": "🛡️",
    "description": "Reduces enemy defense, making them take more damage from most attacks.",
    "details": [
      "Reduces enemy defence",
      "Stacks multiplicatively using formula: 1 - (1 - reduction%)^stacks",
      "Best used against heavily armored enemies!"
    ],
    "sources": ["Armor Break skill effects", "ArmorBreak weapon enchantments"]
  },
  "attackreduction": {
    "name": "Attack Reduction",
    "icon": "⬇️",
    "description": "Reduces the enemy's damage output.",
    "details": [
      "Reduces enemy damage output",
      "Stacks multiplicatively (each stack compounds)",
      "Excellent defensive debuff for survival",
      "Particularly useful against hard-hitting enemies"
    ],
    "sources": ["Attack Reduction skill effects", "Defensive abilities"]
  },
  "weaken": {
    "name": "Weaken",
    "icon": "💢",
    "description": "Reduces the damage of the enemy's next attack. Applied by Snekles' Neurotoxin ability.",
    "details": [
      "Reduces the damage of enemy's next attack"
    ],
    "sources": ["Snekles companion - Neurotoxin ability"]
  }
};
