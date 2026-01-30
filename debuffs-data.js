// Debuffs data
const debuffsData = {
  "stun": {
    "name": "Stun",
    "icon": "💫",
    "description": "Prevents the enemy from moving for a duration.",
    "details": [
      "Completely stops enemy movement during the stun duration",
      "Boss enemies are very resistant to stuns (only 33% stun effectiveness)",
      "Duration modified by enemy stun resistance",
      "For Snekles' stun mechanics, see the Snekles companion page"
    ],
    "sources": ["Snekles companion - Neurotoxin ability"]
  },
  "ministun": {
    "name": "Mini Stun",
    "icon": "✨",
    "description": "A very short duration stun effect that briefly interrupts enemy movement.",
    "details": [
      "Duration formula: 2 / (weaponSpeed^1.2)",
      "Maximum duration: 0.30 seconds (capped)",
      "Slower weapons = longer mini stun duration",
      "Prevents enemy attacks during active duration",
      "Duration modified by enemy stun resistance"
    ],
    "sources": ["Automatically applied when using a melee weapon!",]
  },
  "root": {
    "name": "Root",
    "icon": "🌿",
    "description": "Prevents enemy movement, keeping them in place.",
    "details": [
      "Completely immobilizes the enemy for a duration",
      "50% reduced root effectiveness vs bosses",
      "Enemies can still attack while rooted - if they have an ability to do so",
      "Duration modified by enemy stun resistance",
      "Excellent in combination with a high damage output melee weapon",
      "For Florence's root mechanics, see the Florence companion page"
    ],
    "sources": ["Florence companion - Grasping Roots ability"]
  },
  "slow": {
    "name": "Slow",
    "icon": "🐌",
    "description": "Reduces enemy's acceleration when moving towards the player",
    "details": [
      "Reduces the enemy's acceleration",
      "20% reduced effectiveness against bosses",
      "Effectively reduces incoming damage",
      "Gives the player more time to attack the enemy before they reach them",
      "For Globbie's slow mechanics, see the Globbie companion page"
    ],
    "sources": ["Globbie companion - Slow ability"]
  },
  "runicmark": {
    "name": "Runic Mark",
    "icon": "🔮",
    "description": "Marks the enemy for death, increasing all damage they take from any source.",
    "details": [
      "Increases damage taken by the marked enemy",
      "Applied by Hootini's special attack",
      "Affects damage from all sources (player, companions, pets)",
      "Particularly powerful for burst damage strategies",
      "For full mechanics and damage formulas, see the Hootini companion page"
    ],
    "sources": ["Hootini companion - Runic Mark ability"]
  },
  "poison": {
    "name": "Poison",
    "icon": "☠️",
    "description": "Reduces the enemy's health regeneration.",
    "details": [
      "Each stack multiplies enemy HP regeneration by 0.75 (25% reduction per stack)",
      "Maximum of 8 stacks",
      "Stacks multiplicatively: New Regen = Original Regen × 0.75^stacks",
      "Visual effect: enemy color shifts toward cyan/green",
      "Particularly effective against enemies with high regeneration"
    ],
    "sources": ["Poison skill effects"]
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
      "Reduces enemy MDefence (armor resistance)",
      "Stacks multiplicatively: Total Reduction = 1 - (1 - reduction%)^stacks",
      "Example: 10% per stack × 3 stacks = 1 - (0.9)³ = 27.1% total reduction",
      "Best used against heavily armored enemies"
    ],
    "sources": ["Armor Break skill effects"]
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
    "sources": ["Attack Reduction skill effects"]
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
