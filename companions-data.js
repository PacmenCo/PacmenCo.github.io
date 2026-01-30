// Auto-generated from JSON files
// To regenerate: node generate-data.js

const companionsData = {
  "jindo": {
    "name": "Jindo",
    "icon": "🐕",
    "subtitle": "Fierce offensive companion with devastating burst damage",
    "unlockLevel": 5,
    "cost": 500,
    "theme": {
      "gradient": "linear-gradient(135deg, var(--accent-orange), var(--accent-red))",
      "heroBg": "rgba(239, 68, 68, 0.1)",
      "heroBorder": "rgba(239, 68, 68, 0.3)",
      "abilityBg": "rgba(239, 68, 68, 0.1)",
      "abilityBorder": "var(--accent-red)",
      "abilityColor": "var(--accent-red)"
    },
    "baseStats": {
      "str": 11,
      "dex": 6,
      "con": 11,
      "luck": 9,
      "special": 8
    },
    "statsDescription": "Jindo has balanced STR and CON (both 11) for solid damage and survivability. Good base SPECIAL (8) provides decent Alpha Rush scaling. Low DEX (6) means slower attack speed. Moderate LUCK (9) offers fair crit potential.",
    "sections": [
      {
        "title": "Special Ability: Alpha Rush!",
        "content": [
          {
            "type": "ability-box",
            "name": "⚡ Alpha Rush!",
            "cost": "Cost: 3 Stamina | Duration: 1 Attack | Cooldown: Per Activation",
            "description": "Jindo unleashes a ferocious attack with massively increased damage, critical hit chance, and attack speed. This powerful burst ability activates when enemies are vulnerable, making Jindo an excellent finisher."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Ability Effects"
          },
          {
            "type": "list",
            "className": "feature-list",
            "items": [
              "<strong>Damage:</strong> +84% base (scales +2% per SPECIAL stat) - Multiplicative",
              "<strong>Critical Chance:</strong> +50% flat increase - Additive",
              "<strong>Critical Damage:</strong> +20% base (scales +4% per SPECIAL stat) - Additive",
              "<strong>Attack Speed:</strong> 2× speed - Attacks happen twice as fast",
              "<strong>Stamina Cost:</strong> 3 stamina per attack instead of 1"
            ]
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Scaling with SPECIAL Stat"
          },
          {
            "type": "stats-grid",
            "stats": [
              {
                "label": "8 SPECIAL (Base)",
                "value": "+100%",
                "sublabel": "Damage"
              },
              {
                "label": "8 SPECIAL (Base)",
                "value": "+52%",
                "sublabel": "Crit Damage"
              },
              {
                "label": "20 SPECIAL",
                "value": "+124%",
                "sublabel": "Damage"
              },
              {
                "label": "20 SPECIAL",
                "value": "+100%",
                "sublabel": "Crit Damage"
              }
            ]
          }
        ]
      },
      {
        "title": "How to Activate Alpha Rush",
        "content": [
          {
            "type": "paragraph",
            "text": "Alpha Rush can be activated when specific combat conditions are met. Understanding these triggers is key to maximizing Jindo's effectiveness."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Activation Prerequisites"
          },
          {
            "type": "list",
            "className": "feature-list",
            "items": [
              "<strong>Enemy HP Below 35%:</strong> Primary trigger - ability becomes available when enemy drops below 35% HP",
              "<strong>Enemy Critical Hit on You:</strong> Defensive trigger - activates when an enemy lands a critical hit on you",
              "<strong>Minimum 3 Stamina:</strong> Jindo must have at least 3 stamina available",
              "<strong>Jindo Must Be Awake:</strong> Cannot activate while sleeping",
              "<strong>Enemy Must Be Alive:</strong> Cannot activate if enemy is already defeated"
            ]
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Manual vs Auto-Activation"
          },
          {
            "type": "paragraph",
            "text": "When activation conditions are met, the Alpha Rush button begins glowing. You can either:"
          },
          {
            "type": "warning-box",
            "text": "<strong>Manual Activation:</strong> Press the glowing button yourself for guaranteed activation"
          },
          {
            "type": "formula-box",
            "formula": "Auto-Activation Chance = (SPECIAL × 0.65) - 2.2 percent"
          },
          {
            "type": "paragraph",
            "text": "With base SPECIAL=8, auto-activation chance is only 3%. Even at SPECIAL=20, it's just 11%. For reliable activation, manual control is recommended."
          }
        ]
      },
      {
        "title": "📈 Stat Scaling",
        "content": [
          {
            "type": "heading",
            "level": 3,
            "text": "🗡️ STR (Strength) → Damage"
          },
          {
            "type": "formula-box",
            "formula": "Damage Multiplier = (1 × 0.8 + STR × 0.025 × 0.35) = 0.8 + STR × 0.00875"
          },
          {
            "type": "paragraph",
            "text": "Each STR point increases damage by <span class=\"stat-highlight\">0.875%</span>. With base STR=11, Jindo starts with a 0.896 damage multiplier. The 0.35 scaling factor is below average, but Alpha Rush's massive +84%+ damage boost makes STR investment worthwhile."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "⚡ DEX (Dexterity) → Attack Speed"
          },
          {
            "type": "formula-box",
            "formula": "Attack Speed = (1 + DEX × 0.004 × 5.5) = 1 + DEX × 0.022"
          },
          {
            "type": "paragraph",
            "text": "Each DEX point increases attack speed by <span class=\"stat-highlight\">2.2%</span>. The 5.5× scaling factor is above average. With base DEX=6, Jindo attacks 13.2% faster than baseline. Higher DEX reduces the window between Alpha Rush triggers."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "🛡️ CON (Constitution) → Stamina"
          },
          {
            "type": "formula-box",
            "formula": "Max Stamina = 3 + floor(SPECIAL / 7) + floor(CON / 5)"
          },
          {
            "type": "paragraph",
            "text": "Each 5 CON points grants <span class=\"stat-highlight\">+1 max stamina</span>. With base CON=11 and SPECIAL=8, Jindo starts with <span class=\"stat-highlight\">6 stamina</span> (3 + 1 + 2). This allows two Alpha Rush attacks (3 stamina each) before needing rest."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "🎲 LUCK → Critical Chance & Critical Damage"
          },
          {
            "type": "formula-box",
            "formula": "Crit Chance = (5 × 1.4) + LUCK × (0.175 × 1.8) = 7 + LUCK × 0.315<br>Crit Damage = 1 + (1 × 1.4 + LUCK × 0.025 × 1.2) = 2.4 + LUCK × 0.03"
          },
          {
            "type": "paragraph",
            "text": "With base LUCK=9, Jindo starts with <span class=\"stat-highlight\">9.8% crit chance</span> and <span class=\"stat-highlight\">267% crit damage</span>. The 1.8× crit chance scaling is above average. Alpha Rush adds +50% crit chance (bringing it to ~60%) and scales crit damage further."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "✨ SPECIAL → Alpha Rush Scaling"
          },
          {
            "type": "formula-box",
            "formula": "Max Stamina Bonus = floor(SPECIAL / 7)<br>Alpha Rush Damage Bonus = 84% + (SPECIAL × 2%)<br>Alpha Rush Crit Damage Bonus = 20% + (SPECIAL × 4%)"
          },
          {
            "type": "paragraph",
            "text": "SPECIAL is Jindo's most important stat. Every 7 SPECIAL grants <span class=\"stat-highlight\">+1 max stamina</span>. Each point adds <span class=\"stat-highlight\">2% damage</span> and <span class=\"stat-highlight\">4% crit damage</span> to Alpha Rush. At base SPECIAL=8, Alpha Rush provides +100% damage and +52% crit damage."
          }
        ]
      },
      {
        "title": "⚔️ Combat Strategy",
        "content": [
          {
            "type": "heading",
            "level": 3,
            "text": "When to Use Alpha Rush"
          },
          {
            "type": "paragraph",
            "text": "Activate Alpha Rush when:"
          },
          {
            "type": "list",
            "className": "ability-effects",
            "items": [
              "Enemy drops below 35% HP (primary trigger)",
              "Enemy lands a critical hit on you (defensive trigger)",
              "You have 3+ stamina available",
              "The enemy is a high-value target (boss, elite, or tanky enemy)"
            ]
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Stamina Management"
          },
          {
            "type": "paragraph",
            "text": "Alpha Rush costs 3 stamina per attack. With base 6 stamina, you can use it twice before resting. Plan your stamina usage:"
          },
          {
            "type": "list",
            "className": "ability-effects",
            "items": [
              "Save stamina for Alpha Rush opportunities",
              "Don't waste stamina on weak enemies",
              "Rest before boss fights to ensure full stamina",
              "Higher CON/SPECIAL increases stamina pool for more Alpha Rush uses"
            ]
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Manual vs Auto Control"
          },
          {
            "type": "paragraph",
            "text": "Manual activation is strongly recommended. The auto-activation chance is very low (3-11% even with high SPECIAL). Manually activating guarantees you don't miss burst opportunities. Watch for the glowing button when conditions are met."
          }
        ]
      },
      {
        "title": "🎯 Recommended Builds",
        "content": [
          {
            "type": "build-card",
            "name": "🔥 Maximum Burst (SPECIAL Focus)",
            "description": "Prioritize SPECIAL above all to maximize Alpha Rush damage and crit damage scaling. This build delivers the highest single-hit damage in the game when Alpha Rush is active. Ideal for boss encounters where you need devastating finishing blows.",
            "priority": "SPECIAL (60%) → STR (20%) → LUCK (10%) → CON (10%)"
          },
          {
            "type": "build-card",
            "name": "⚔️ Consistent DPS (STR + SPECIAL Balance)",
            "description": "Balance SPECIAL with high STR to maintain good damage even without Alpha Rush active. This build is more reliable for general progression where Alpha Rush isn't always available. The high STR scaling ensures you're not dead weight between burst windows.",
            "priority": "SPECIAL (40%) → STR (35%) → LUCK (15%) → CON (10%)"
          },
          {
            "type": "build-card",
            "name": "⚡ Rapid Finisher (DEX Focus)",
            "description": "Invest in DEX to attack faster, allowing more frequent Alpha Rush opportunities and faster enemy HP reduction to the 35% threshold. This build reduces downtime between burst windows. Great for clearing zones where enemies die quickly.",
            "priority": "SPECIAL (40%) → DEX (30%) → STR (20%) → CON (10%)"
          }
        ]
      }
    ]
  },
  "ember": {
    "name": "Ember",
    "icon": "🔥",
    "subtitle": "Fire Specialist & DoT Master",
    "unlockLevel": 8,
    "cost": 1650,
    "theme": {
      "gradient": "linear-gradient(135deg, var(--accent-red), var(--accent-orange))",
      "heroBg": "linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(245, 158, 11, 0.1))",
      "heroBorder": "rgba(239, 68, 68, 0.3)",
      "abilityBg": "rgba(239, 68, 68, 0.1)",
      "abilityBorder": "var(--accent-red)",
      "abilityColor": "var(--accent-red)"
    },
    "baseStats": {
      "str": 9,
      "dex": 7,
      "con": 12,
      "luck": 8,
      "special": 9
    },
    "statsDescription": "Ember has balanced stats across the board with high CON (12) for stamina capacity. Moderate STR (9) and SPECIAL (9) provide decent damage and burn scaling. Fair DEX (7) and LUCK (8) offer reasonable attack speed and crit chance.",
    "sections": [
      {
        "title": "🔥 PyroMantic Ability",
        "content": [
          {
            "type": "ability-box",
            "name": "PyroMantic",
            "description": "A powerful burn-based ability that stacks damage over time before detonating all stacks for massive damage."
          },
          {
            "type": "list",
            "className": "ability-effects",
            "items": [
              "<strong>Passive:</strong> Every hit applies an Ember stack to enemies",
              "<strong>Active (35s cooldown):</strong> Consumes all Ember stacks, dealing massive damage per stack",
              "<strong>Guaranteed Critical:</strong> 100% crit chance when consuming stacks",
              "<strong>Stamina Cost:</strong> 2 stamina to activate special, 1 per normal attack"
            ]
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Burn Mechanics"
          },
          {
            "type": "paragraph",
            "text": "Ember stacks are independent DoT (damage over time) effects that can coexist on enemies. Each stack deals consistent damage over 8 seconds. When you activate PyroMantic, all stacks are consumed simultaneously for a devastating burst of guaranteed critical damage."
          },
          {
            "type": "formula-box",
            "formula": "Burn DPS per Stack:<br>(Companion Damage × 0.19 × (1 + SPECIAL × 0.125)) / 8"
          },
          {
            "type": "formula-box",
            "formula": "Total Burn Damage per Stack (8 seconds):<br>Companion Damage × 0.19 × (1 + SPECIAL × 0.125)"
          },
          {
            "type": "formula-box",
            "formula": "Consume Damage per Stack:<br>Burn Total Damage × 1.7 = Companion Damage × 0.323 × (1 + SPECIAL × 0.125)"
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Maximum Burn Stacks"
          },
          {
            "type": "paragraph",
            "text": "The number of stacks you can maintain on an enemy scales with your SPECIAL stat:"
          },
          {
            "type": "formula-box",
            "formula": "Max Stacks = 2 + floor(SPECIAL / 25)"
          },
          {
            "type": "comparison-table",
            "headers": [
              "SPECIAL",
              "Max Stacks",
              "Total Burn Time"
            ],
            "rows": [
              [
                "0-24",
                "2 stacks",
                "16 seconds (8s each)"
              ],
              [
                "25-49",
                "3 stacks",
                "24 seconds"
              ],
              [
                "50-74",
                "4 stacks",
                "32 seconds"
              ],
              [
                "100+",
                "6 stacks",
                "48 seconds"
              ]
            ]
          }
        ]
      },
      {
        "title": "⚡ Activation Prerequisites",
        "content": [
          {
            "type": "paragraph",
            "text": "To activate PyroMantic, the following conditions must be met:"
          },
          {
            "type": "list",
            "className": "ability-effects",
            "items": [
              "<strong>Not on Cooldown:</strong> 35 second cooldown must be complete",
              "<strong>Sufficient Stamina:</strong> Must have at least 2 stamina",
              "<strong>Companion Awake:</strong> Companion must not be sleeping",
              "<strong>Enemy Exists:</strong> A valid enemy must be in combat",
              "<strong>Enemy is Burned:</strong> Target MUST have at least one active Ember stack"
            ]
          },
          {
            "type": "warning-box",
            "text": "<strong>Critical Requirement:</strong> You cannot activate PyroMantic unless the enemy has active burn stacks. This means you need to land hits first to apply burns before you can detonate them."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Stack Management"
          },
          {
            "type": "paragraph",
            "text": "When you reach max stacks and apply a new burn, the <strong>soonest-to-expire</strong> burn is immediately removed and replaced. This means maintaining maximum stacks requires consistent attacks, but also means you won't waste damage by over-stacking."
          }
        ]
      },
      {
        "title": "📈 Stat Scaling",
        "content": [
          {
            "type": "heading",
            "level": 3,
            "text": "🗡️ STR (Strength) → Damage"
          },
          {
            "type": "formula-box",
            "formula": "Damage Multiplier = (1 + STR × 0.025 × 0.85)"
          },
          {
            "type": "paragraph",
            "text": "Each STR point increases damage by <span class=\"stat-highlight\">2.125%</span>. This affects both regular attacks and burn damage since burns scale with companion damage."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "⚡ DEX (Dexterity) → Attack Speed & Hit Chance"
          },
          {
            "type": "formula-box",
            "formula": "Attack Speed = (1 + DEX × 0.004 × 3.75)<br>Hit Chance = DEX × 0.003"
          },
          {
            "type": "paragraph",
            "text": "Each DEX point increases attack speed by <span class=\"stat-highlight\">1.5%</span> and improves hit chance. More attacks means faster burn stack application and more frequent special ability opportunities."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "🛡️ CON (Constitution) → Stamina & Regeneration"
          },
          {
            "type": "formula-box",
            "formula": "Max Stamina = 3 + floor(SPECIAL / 7) + floor(CON / 5)"
          },
          {
            "type": "paragraph",
            "text": "Each 5 CON points grants <span class=\"stat-highlight\">+1 max stamina</span>. CON also significantly improves stamina regeneration speed, allowing more consistent uptime."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "🎲 LUCK → Critical Chance & Critical Damage"
          },
          {
            "type": "formula-box",
            "formula": "Crit Chance = 5 + LUCK × 0.0962<br>Crit Damage = 1.4 + LUCK × 0.01375"
          },
          {
            "type": "paragraph",
            "text": "Each LUCK point adds <span class=\"stat-highlight\">0.0962%</span> crit chance and increases crit damage multiplier. While PyroMantic guarantees crits on consume, LUCK still affects your regular burn-applying attacks."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "✨ SPECIAL → Burn Scaling & Stamina"
          },
          {
            "type": "formula-box",
            "formula": "Max Burn Stacks = 2 + floor(SPECIAL / 25)<br>Burn Damage Multiplier = 1 + SPECIAL × 0.125<br>Max Stamina Bonus = floor(SPECIAL / 7)"
          },
          {
            "type": "paragraph",
            "text": "SPECIAL is Ember's most important stat. Every 25 SPECIAL grants <span class=\"stat-highlight\">+1 max stack</span>, and each point increases burn damage by <span class=\"stat-highlight\">12.5%</span>. Every 7 SPECIAL also grants +1 max stamina, improving uptime."
          }
        ]
      },
      {
        "title": "⚔️ Combat Strategy",
        "content": [
          {
            "type": "heading",
            "level": 3,
            "text": "Burn Build-Up Phase"
          },
          {
            "type": "paragraph",
            "text": "Focus on applying maximum burn stacks before activating PyroMantic. With higher DEX, this happens naturally, but with lower attack speed you may need to wait for several attacks to land before the special is worth activating."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Optimal Detonation Timing"
          },
          {
            "type": "paragraph",
            "text": "Activate PyroMantic when you have maximum stacks and the cooldown is available. Don't wait for stacks to expire—the 35-second cooldown means you want to use it as soon as conditions are met. With max stacks, a single PyroMantic activation deals 170% of the total burn damage all stacks would have dealt over time, plus guaranteed critical multiplier."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Cooldown Management"
          },
          {
            "type": "paragraph",
            "text": "After using PyroMantic, immediately start re-applying burns. The 35-second cooldown means you'll typically build 3-6+ full stack cycles between special uses. Don't hold the special—use it on cooldown for maximum damage throughput."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Stamina Conservation"
          },
          {
            "type": "paragraph",
            "text": "Each attack costs 1 stamina, and PyroMantic costs 2. With base 3 stamina + SPECIAL/7 + CON/5, you can perform several attack cycles before needing to rest. Higher CON builds can maintain near-permanent uptime."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Boss Encounters"
          },
          {
            "type": "paragraph",
            "text": "Ember excels against bosses due to sustained burn damage. Build up full stacks, detonate with PyroMantic, then rebuild. The guaranteed crit on detonation makes this extremely effective against high-HP targets."
          }
        ]
      },
      {
        "title": "🎯 Recommended Builds",
        "content": [
          {
            "type": "build-card",
            "name": "🔥 Maximum Burn (SPECIAL Focus)",
            "description": "Prioritize SPECIAL above all else to maximize burn damage and stack capacity. This build delivers the highest single-target damage by maximizing the number of stacks you can maintain and their individual potency. Ideal for boss encounters where you can build up full stacks before detonating.",
            "priority": "SPECIAL (60%) → STR (20%) → DEX (10%) → CON (10%)"
          },
          {
            "type": "build-card",
            "name": "⚡ Rapid Burn (DEX Focus)",
            "description": "Balance SPECIAL with high DEX to apply burns faster and cycle PyroMantic more frequently. The increased attack speed means reaching max stacks quickly, allowing more frequent special ability activations. Great for clearing zones where enemies die before you can build full stacks.",
            "priority": "SPECIAL (40%) → DEX (30%) → STR (20%) → CON (10%)"
          },
          {
            "type": "build-card",
            "name": "🛡️ Sustained Burn (CON Focus)",
            "description": "Invest in CON for maximum stamina and regeneration, ensuring you never run out of resources during extended fights. This build sacrifices some damage for consistent uptime, making it excellent for idle progression where you need to fight continuously without micromanagement.",
            "priority": "SPECIAL (35%) → CON (30%) → STR (20%) → DEX (15%)"
          }
        ]
      }
    ]
  },
  "mystikat": {
    "name": "Mystikat",
    "icon": "🌸",
    "subtitle": "Healing Support & Sustain Specialist",
    "unlockLevel": 10,
    "cost": 950,
    "theme": {
      "gradient": "linear-gradient(135deg, var(--accent-green), var(--accent-pink))",
      "heroBg": "linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(236, 72, 153, 0.1))",
      "heroBorder": "rgba(16, 185, 129, 0.3)",
      "abilityBg": "rgba(16, 185, 129, 0.1)",
      "abilityBorder": "var(--accent-green)",
      "abilityColor": "var(--accent-green)"
    },
    "baseStats": {
      "str": 5,
      "dex": 4,
      "con": 14,
      "luck": 9,
      "special": 13
    },
    "statsDescription": "Mystikat has the highest base CON (14) for excellent stamina capacity and regeneration, paired with high SPECIAL (13) for powerful healing scaling. Low STR and DEX mean lower damage and attack speed, but the focus is on survivability rather than offense.",
    "sections": [
      {
        "title": "🌸 Vital Bloom Ability",
        "content": [
          {
            "type": "ability-box",
            "name": "Vital Bloom!",
            "cost": "Cost: 3 Stamina | Duration: 3 Attacks | Cooldown: None (Manual Only)",
            "description": "A unique healing ability with dual mechanics: passive healing on every hit, and an active 3-attack sequence that drains HP twice before delivering a powerful heal on the third hit."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Ability Effects"
          },
          {
            "type": "list",
            "className": "feature-list",
            "items": [
              "<strong>Passive:</strong> Every hit heals you for 1-3 HP (scales with SPECIAL)",
              "<strong>Active (Manual):</strong> Triggers a 3-attack drain/heal sequence",
              "<strong>Attacks 1-2:</strong> Drain ~4-10% of your max HP per attack",
              "<strong>Attack 3:</strong> Heal ~16-29% of your max HP",
              "<strong>Stamina Cost:</strong> 3 stamina to activate sequence"
            ]
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Dual Healing System"
          },
          {
            "type": "paragraph",
            "text": "Mystikat provides two independent healing sources. The passive healing triggers on <strong>every successful hit</strong> regardless of whether Vital Bloom is active, providing consistent sustain. The active ability must be manually triggered and requires landing 3 consecutive hits to complete the sequence."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Vital Bloom Sequence"
          },
          {
            "type": "list",
            "className": "ability-effects",
            "items": [
              "<strong>Step 1 - Drain Phase:</strong> Takes ~4-10% of your max HP as damage",
              "<strong>Step 2 - Drain Phase:</strong> Takes ~4-10% of your max HP as damage",
              "<strong>Step 3 - Healing Phase:</strong> Heals ~16-29% of your max HP (more than double the drain)"
            ]
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Healing Formulas"
          },
          {
            "type": "paragraph",
            "text": "<strong style=\"color: var(--accent-green);\">Passive Healing (Every Hit)</strong>"
          },
          {
            "type": "formula-box",
            "formula": "Average Healing = 2 + (SPECIAL × 0.05) + (MaxHealth × SPECIAL × 0.00017)<br><br>Healing Range: Minimum: 1 HP | Maximum: Average + 1 HP"
          },
          {
            "type": "paragraph",
            "text": "<strong style=\"color: var(--accent-green);\">Active Drain (Attacks 1 & 2)</strong>"
          },
          {
            "type": "formula-box",
            "formula": "Drain Amount = (0.04 × (1 + SPECIAL × 0.014) + 0.05) × MaxHealth"
          },
          {
            "type": "paragraph",
            "text": "<strong style=\"color: var(--accent-green);\">Active Heal (Attack 3)</strong>"
          },
          {
            "type": "formula-box",
            "formula": "Heal Amount = (0.16 × (1 + SPECIAL × 0.014) + 0.10) × MaxHealth"
          },
          {
            "type": "paragraph",
            "text": "With SPECIAL=13 and MaxHealth=100:"
          },
          {
            "type": "list",
            "className": "ability-effects",
            "items": [
              "Passive: 1-4 HP per hit",
              "Drain: ~9.7 HP per attack (attacks 1 & 2)",
              "Heal: ~28.9 HP (attack 3)",
              "Net Gain: +9.5 HP per full sequence (plus passive healing)"
            ]
          }
        ]
      },
      {
        "title": "⚡ Activation Prerequisites",
        "content": [
          {
            "type": "paragraph",
            "text": "Mystikat's passive healing works automatically, but Vital Bloom's active sequence requires:"
          },
          {
            "type": "list",
            "className": "feature-list",
            "items": [
              "<strong>Manual Activation:</strong> Must press the Vital Bloom button (no auto-activation)",
              "<strong>Sufficient Stamina:</strong> Must have at least 3 stamina",
              "<strong>Companion Awake:</strong> Companion must not be sleeping",
              "<strong>Three Consecutive Hits:</strong> Must land 3 hits to complete the sequence"
            ]
          },
          {
            "type": "warning-box",
            "text": "<strong>Important:</strong> If you miss an attack or the enemy dies mid-sequence, the drain/heal cycle is interrupted and resets. The HP drained will not be recovered unless you complete the full 3-attack sequence."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Sequence Management"
          },
          {
            "type": "paragraph",
            "text": "The Vital Bloom sequence tracks charges (0, 1, 2). After the 3rd attack heals you, the sequence automatically deactivates and resets to 0 charges. You must manually reactivate it to start another drain/heal cycle. There is no cooldown—you can immediately reactivate after completing a sequence if you have 3 stamina available."
          }
        ]
      },
      {
        "title": "📈 Stat Scaling",
        "content": [
          {
            "type": "heading",
            "level": 3,
            "text": "🗡️ STR (Strength) → Damage"
          },
          {
            "type": "formula-box",
            "formula": "Damage Multiplier = (1 × 0.9 + STR × 0.025 × 0.8) = 0.9 + STR × 0.02"
          },
          {
            "type": "paragraph",
            "text": "Each STR point increases damage by <span class=\"stat-highlight\">2.0%</span>. While Mystikat isn't a damage dealer, STR still helps with faster enemy kills. The base multiplier is 0.9 (90% of base damage)."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "⚡ DEX (Dexterity) → Attack Speed & Hit Chance"
          },
          {
            "type": "formula-box",
            "formula": "Attack Speed = (1 + DEX × 0.004 × 0.8) = 1 + DEX × 0.0032<br>Hit Chance = DEX × 0.005 × 1.2 = DEX × 0.006"
          },
          {
            "type": "paragraph",
            "text": "Each DEX point increases attack speed by <span class=\"stat-highlight\">0.32%</span> and hit chance by <span class=\"stat-highlight\">0.6%</span>. More attacks means more passive healing triggers and faster completion of Vital Bloom sequences."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "🛡️ CON (Constitution) → Stamina & Regeneration"
          },
          {
            "type": "formula-box",
            "formula": "Max Stamina = 3 + floor(SPECIAL / 4) + floor(CON / 5)"
          },
          {
            "type": "paragraph",
            "text": "Each 5 CON points grants <span class=\"stat-highlight\">+1 max stamina</span>. With base CON=14 and SPECIAL=13, Mystikat starts with <span class=\"stat-highlight\">9 stamina</span> (3 + 3 + 3). CON also dramatically improves stamina regeneration speed, allowing more Vital Bloom sequences."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "🎲 LUCK → Critical Chance & Critical Damage"
          },
          {
            "type": "formula-box",
            "formula": "Crit Chance = (5 × 0.75) + LUCK × (0.175 × 1.15) = 3.75 + LUCK × 0.20125<br>Crit Damage = 1 + (1 × 1.1 + LUCK × 0.025 × 1.35) = 2.1 + LUCK × 0.03375"
          },
          {
            "type": "paragraph",
            "text": "With base LUCK=9, Mystikat starts with <span class=\"stat-highlight\">5.6% crit chance</span> and <span class=\"stat-highlight\">240% crit damage</span>. Each LUCK point adds <span class=\"stat-highlight\">0.20%</span> crit chance and <span class=\"stat-highlight\">3.375%</span> crit damage, providing solid scaling for a healing companion."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "✨ SPECIAL → Healing & Stamina"
          },
          {
            "type": "formula-box",
            "formula": "Max Stamina Bonus = floor(SPECIAL / 4)<br>Passive Healing = 2 + SPECIAL × 0.05 + MaxHealth × SPECIAL × 0.00017<br>Drain/Heal Multiplier = 1 + SPECIAL × 0.014"
          },
          {
            "type": "paragraph",
            "text": "SPECIAL is Mystikat's most important stat. Every 4 SPECIAL grants <span class=\"stat-highlight\">+1 max stamina</span>. Each point increases passive healing by <span class=\"stat-highlight\">~0.05 HP</span> (plus a small % of max HP), and boosts drain/heal amounts by <span class=\"stat-highlight\">1.4%</span>."
          }
        ]
      },
      {
        "title": "⚔️ Combat Strategy",
        "content": [
          {
            "type": "heading",
            "level": 3,
            "text": "Passive Healing Management"
          },
          {
            "type": "paragraph",
            "text": "The passive healing is always active and requires no management. With higher DEX, you'll heal more frequently due to faster attacks. This passive sustain alone can keep you alive through many zones without ever using Vital Bloom."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "When to Use Vital Bloom"
          },
          {
            "type": "paragraph",
            "text": "Activate Vital Bloom when:"
          },
          {
            "type": "list",
            "className": "ability-effects",
            "items": [
              "Your HP is below 70% and you need a burst heal",
              "Fighting tough enemies or bosses where the net +9.5 HP gain matters",
              "You have 3+ stamina available and won't need it for other companions",
              "The enemy will survive all 3 hits (don't waste it on low-HP enemies)"
            ]
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Risk/Reward Calculation"
          },
          {
            "type": "paragraph",
            "text": "The drain phase takes approximately <span class=\"stat-highlight\">20% of your max HP</span> over 2 attacks before healing <span class=\"stat-highlight\">~29% back</span> on the 3rd. If you're at low HP, using Vital Bloom is risky—the drain could kill you before the heal lands. Always ensure you can survive 2 drains before activating."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Stamina Conservation"
          },
          {
            "type": "paragraph",
            "text": "With 9 base stamina and 3 stamina cost per sequence, you can perform 3 full Vital Bloom cycles before needing rest. Higher CON builds can maintain near-permanent uptime. Don't spam it—save stamina for when you actually need healing."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Boss Encounters"
          },
          {
            "type": "paragraph",
            "text": "Mystikat excels in extended boss fights. The passive healing keeps you alive while the active sequences provide burst healing to recover from damage spikes. Time your Vital Bloom activations to complete the sequence before major boss mechanics hit."
          }
        ]
      },
      {
        "title": "🎯 Recommended Builds",
        "content": [
          {
            "type": "build-card",
            "name": "💚 Maximum Sustain (SPECIAL Focus)",
            "description": "Prioritize SPECIAL above all to maximize both passive and active healing. This build provides the strongest healing output, making you nearly unkillable in most zones. The stamina bonus from SPECIAL also allows more frequent Vital Bloom sequences. Perfect for pushing difficult content or AFK progression.",
            "priority": "SPECIAL (50%) → CON (25%) → LUCK (15%) → DEX (10%)"
          },
          {
            "type": "build-card",
            "name": "⚡ Active Healer (CON Focus)",
            "description": "Balance SPECIAL with high CON for maximum stamina capacity and near-instant regeneration. This build can use Vital Bloom constantly without running out of stamina, providing a steady stream of healing cycles. Excellent for longer fights where you need sustained healing output over time.",
            "priority": "SPECIAL (40%) → CON (35%) → LUCK (15%) → DEX (10%)"
          },
          {
            "type": "build-card",
            "name": "🌟 Balanced Support (Even Distribution)",
            "description": "Distribute stats evenly to create a well-rounded healer that can also contribute decent damage. Higher DEX means more passive healing triggers per second, while LUCK adds crit potential. This build trades peak healing for better overall combat performance and faster enemy clears.",
            "priority": "SPECIAL (30%) → CON (25%) → LUCK (20%) → DEX (15%) → STR (10%)"
          }
        ]
      }
    ]
  },
  "hootini": {
    "name": "Hootini",
    "icon": "🦉",
    "subtitle": "Rune Owl Debuff Specialist",
    "unlockLevel": 12,
    "cost": 1750,
    "theme": {
      "gradient": "linear-gradient(135deg, var(--accent-indigo), var(--accent-violet))",
      "heroBg": "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))",
      "heroBorder": "rgba(99, 102, 241, 0.3)",
      "abilityBg": "rgba(99, 102, 241, 0.1)",
      "abilityBorder": "var(--accent-indigo)",
      "abilityColor": "var(--accent-indigo)"
    },
    "baseStats": {
      "str": 6,
      "dex": 8,
      "con": 12,
      "luck": 15,
      "special": 4
    },
    "statsDescription": "Hootini has the highest base LUCK (15) of all companions, making it naturally inclined toward critical hit builds. Low SPECIAL (4) means mark bonuses start weak but scale significantly with investment. Balanced CON (12) provides decent stamina for multiple marks.",
    "sections": [
      {
        "title": "✨ Runic Mark Ability",
        "content": [
          {
            "type": "ability-box",
            "name": "Runic Mark!",
            "cost": "Cost: 3 Stamina | Duration: 12 Seconds | Cooldown: 40 Seconds",
            "description": "A powerful debuff ability that marks enemies with ancient runes, amplifying all damage they take while granting Hootini a massive personal damage boost against marked targets."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Dual Damage Amplification"
          },
          {
            "type": "paragraph",
            "text": "Runic Mark provides two independent damage bonuses that stack together for devastating results:"
          },
          {
            "type": "dual-bonus-grid",
            "bonuses": [
              {
                "icon": "🎯",
                "title": "Shared Debuff",
                "description": "Marked enemies take <span class=\"stat-highlight\">3-27% more damage</span> from all sources (including you, the player, and other companions). This debuff benefits your entire team.",
                "formula": "Debuff = 3 + 24 × (1 - 55/(SPECIAL + 51))<br><br>Scales from 3% at base to ~27% at high SPECIAL"
              },
              {
                "icon": "⚔️",
                "title": "Hootini's Bonus",
                "description": "Hootini deals <span class=\"stat-highlight\">25-81%+ extra damage</span> to marked enemies. This is a personal multiplier that only applies to Hootini's attacks, separate from the shared debuff.",
                "formula": "Multiplier = 1.25 + (SPECIAL - 4) × 0.035<br><br>At SPECIAL=4: 1.25× (25% bonus)<br>At SPECIAL=50: 2.86× (186% total damage)"
              }
            ]
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Combined Damage Example"
          },
          {
            "type": "paragraph",
            "text": "With SPECIAL=50, against a marked enemy:"
          },
          {
            "type": "list",
            "className": "ability-effects",
            "items": [
              "Enemy takes +14% damage from all sources (shared debuff)",
              "Hootini deals +161% personal bonus damage (2.61× multiplier)",
              "Combined: Hootini deals 2.61 × 1.14 = <span class=\"stat-highlight\">2.98× total damage</span> (198% increase)"
            ]
          },
          {
            "type": "info-box",
            "text": "<strong>Important Mechanic:</strong> Mark damage is applied LAST after base damage. This means the mark's damage amplification can still deal damage even if the base attack would kill the enemy, ensuring no wasted damage."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Mark Application Formula"
          },
          {
            "type": "formula-box",
            "formula": "<strong>Shared Debuff Damage Increase:</strong><br>3 + 24 × (1 - 55 / (SPECIAL - 4 + 55))"
          },
          {
            "type": "comparison-table",
            "headers": [
              "SPECIAL",
              "Shared Debuff",
              "Hootini's Multiplier",
              "Combined Effect"
            ],
            "rows": [
              [
                "4",
                "+3%",
                "1.25× (25%)",
                "1.29× total"
              ],
              [
                "20",
                "+9.4%",
                "1.81× (81%)",
                "1.98× total"
              ],
              [
                "50",
                "+14.4%",
                "2.61× (161%)",
                "2.98× total"
              ],
              [
                "100",
                "+18.5%",
                "4.61× (361%)",
                "5.46× total"
              ]
            ]
          }
        ]
      },
      {
        "title": "⚡ Activation Prerequisites",
        "content": [
          {
            "type": "paragraph",
            "text": "To use Runic Mark effectively, understand these activation conditions:"
          },
          {
            "type": "list",
            "className": "ability-effects",
            "items": [
              "<strong>Manual Activation Required:</strong> Must press the Runic Mark button",
              "<strong>Sufficient Stamina:</strong> Must have at least 4 stamina available",
              "<strong>Companion Awake:</strong> Companion must not be sleeping",
              "<strong>Not on Cooldown:</strong> 40-second cooldown must be complete",
              "<strong>Enemy Must Be Hit:</strong> Mark only applies on successful hit after activation"
            ]
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Smart Auto-Behavior"
          },
          {
            "type": "paragraph",
            "text": "Once activated, Hootini intelligently manages the mark:"
          },
          {
            "type": "list",
            "className": "ability-effects",
            "items": [
              "If enemy is unmarked: Next hit applies the mark (costs 3 stamina)",
              "If enemy is marked: Automatically enables +25-81% damage bonus (no stamina cost)",
              "Won't waste marks on already-marked enemies",
              "Cooldown starts AFTER mark is applied, not when button is pressed"
            ]
          },
          {
            "type": "info-box",
            "text": "<strong>Pro Tip:</strong> The mark lasts 12 seconds but the cooldown is 40 seconds. This means there's a 28-second gap where no marks are active. Plan your mark timing for tough enemies or boss encounters to maximize efficiency."
          }
        ]
      },
      {
        "title": "📈 Stat Scaling",
        "content": [
          {
            "type": "heading",
            "level": 3,
            "text": "🗡️ STR (Strength) → Damage"
          },
          {
            "type": "formula-box",
            "formula": "Damage Multiplier = (1 × 0.5 + STR × 0.025 × 0.3)"
          },
          {
            "type": "paragraph",
            "text": "Each STR point increases damage by <span class=\"stat-highlight\">0.75%</span>. Hootini has low damage scaling from STR, relying instead on mark multipliers for damage output. The base multiplier is 0.5 (50% of base damage) regardless of special attack status."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "⚡ DEX (Dexterity) → Attack Speed & Hit Chance"
          },
          {
            "type": "formula-box",
            "formula": "Attack Speed = (1 + DEX × 0.004 × 5.0)<br>Hit Chance = DEX × 0.005 × 1.25"
          },
          {
            "type": "paragraph",
            "text": "Each DEX point increases attack speed by <span class=\"stat-highlight\">2.0%</span>. Hootini has excellent attack speed scaling, making DEX very effective for maximizing hits during the 12-second mark window. Hit chance increases by <span class=\"stat-highlight\">0.625%</span> per DEX point."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "🛡️ CON (Constitution) → Stamina & Regeneration"
          },
          {
            "type": "formula-box",
            "formula": "Max Stamina = 3 + floor(SPECIAL / 3.5) + floor(CON / 5)"
          },
          {
            "type": "paragraph",
            "text": "Each 5 CON points grants <span class=\"stat-highlight\">+1 max stamina</span>. With base CON=12 and SPECIAL=4, Hootini starts with <span class=\"stat-highlight\">6 stamina</span> (3 + 1 + 2), enough for one mark with stamina to spare."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "🎲 LUCK → Critical Chance & Critical Damage"
          },
          {
            "type": "formula-box",
            "formula": "Crit Chance = (5 × 1.5) + LUCK × (0.175 × 0.5) = 7.5 + LUCK × 0.0875<br>Crit Damage = 1 + (1 × 1.75 + LUCK × 0.025 × 1.6) = 2.75 + LUCK × 0.04"
          },
          {
            "type": "paragraph",
            "text": "With base LUCK=15, Hootini starts with <span class=\"stat-highlight\">8.8% crit chance</span> and <span class=\"stat-highlight\">335% crit damage</span>. Each LUCK point adds <span class=\"stat-highlight\">0.0875% crit chance</span> and <span class=\"stat-highlight\">4% crit damage</span>, making LUCK an excellent secondary stat after SPECIAL."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "✨ SPECIAL → Mark Amplification & Stamina"
          },
          {
            "type": "formula-box",
            "formula": "Max Stamina Bonus = floor(SPECIAL / 3.5)<br>Shared Debuff = 3 + 24 × (1 - 55/(SPECIAL + 51))<br>Hootini's Multiplier = 1.25 + (SPECIAL - 4) × 0.035"
          },
          {
            "type": "paragraph",
            "text": "SPECIAL is Hootini's most important stat for debuff builds. Every 3.5 SPECIAL grants <span class=\"stat-highlight\">+1 max stamina</span>. More critically, each SPECIAL point increases the shared debuff asymptotically toward 27% and increases Hootini's personal multiplier by <span class=\"stat-highlight\">3.5%</span> (linear scaling)."
          }
        ]
      },
      {
        "title": "⚔️ Combat Strategy",
        "content": [
          {
            "type": "heading",
            "level": 3,
            "text": "Mark Timing"
          },
          {
            "type": "paragraph",
            "text": "Save Runic Mark for:"
          },
          {
            "type": "list",
            "className": "ability-effects",
            "items": [
              "Elite enemies with high HP",
              "Boss encounters where the 12-second window matters most",
              "Situations where the shared debuff helps other companions/player",
              "When you have 4+ stamina available and won't need it soon"
            ]
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Maximizing Mark Uptime"
          },
          {
            "type": "paragraph",
            "text": "With a 40-second cooldown and 12-second duration, marks have <span class=\"stat-highlight\">30% uptime</span>. Use this window efficiently:"
          },
          {
            "type": "list",
            "className": "ability-effects",
            "items": [
              "Attack as fast as possible during the mark window (DEX helps)",
              "Save high-damage player abilities for marked enemies",
              "Don't waste marks on enemies that will die quickly",
              "Plan mark timing around boss mechanics or damage phases"
            ]
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Stamina Management"
          },
          {
            "type": "paragraph",
            "text": "Marking costs 3 stamina. With 6 base stamina, you can mark twice before resting. Higher CON and SPECIAL increase max stamina, allowing more frequent marks. Balance mark usage with companion uptime—running out of stamina means no attacks while sleeping."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Team Synergy"
          },
          {
            "type": "paragraph",
            "text": "The shared debuff makes Hootini excellent for team-based gameplay. The <span class=\"stat-highlight\">3-27% damage amplification</span> applies to all damage sources, including:"
          },
          {
            "type": "list",
            "className": "ability-effects",
            "items": [
              "Your player character's attacks",
              "Other companions' damage",
              "Damage-over-time effects (burns, etc.)",
              "Critical hits and ability damage"
            ]
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Against Unmarked Enemies"
          },
          {
            "type": "paragraph",
            "text": "Without marks active, Hootini's high LUCK (15) makes it effective through critical hits. The low damage scaling means you won't deal exceptional damage, but consistent crits keep DPS respectable between mark windows."
          }
        ]
      },
      {
        "title": "🎯 Recommended Builds",
        "content": [
          {
            "type": "build-card",
            "name": "🔮 Maximum Debuff (SPECIAL Focus)",
            "description": "Prioritize SPECIAL to maximize both the shared debuff and Hootini's personal damage multiplier. This build creates the strongest marks possible, making Hootini invaluable for tough enemies and bosses. The shared debuff benefits your entire team, while Hootini deals massive personal damage during mark windows.",
            "priority": "SPECIAL (50%) → LUCK (25%) → CON (15%) → DEX (10%)"
          },
          {
            "type": "build-card",
            "name": "⭐ Critical Marksman (LUCK Focus)",
            "description": "Leverage Hootini's exceptional base LUCK (15) to create a crit-focused build. Balance SPECIAL for decent mark bonuses while maximizing critical hit chance and damage. Against marked enemies, critical hits deal devastating damage thanks to the combined multipliers. Perfect for players who enjoy high burst damage.",
            "priority": "LUCK (40%) → SPECIAL (30%) → DEX (20%) → CON (10%)"
          },
          {
            "type": "build-card",
            "name": "⚡ Rapid Marker (DEX Focus)",
            "description": "Combine SPECIAL with high DEX to maximize hits during the 12-second mark window. The increased attack speed means more damage applications while the mark is active. DEX also improves hit chance, ensuring marks land reliably. Excellent for consistent DPS rather than burst damage.",
            "priority": "SPECIAL (35%) → DEX (30%) → LUCK (20%) → CON (15%)"
          }
        ]
      }
    ]
  },
  "globbie": {
    "name": "Globbie",
    "icon": "🟢",
    "subtitle": "Sticky Slime Control Specialist",
    "unlockLevel": 15,
    "cost": 1550,
    "theme": {
      "gradient": "linear-gradient(135deg, var(--accent-teal), var(--accent-lime))",
      "heroBg": "linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(132, 204, 22, 0.1))",
      "heroBorder": "rgba(20, 184, 166, 0.3)",
      "abilityBg": "rgba(20, 184, 166, 0.1)",
      "abilityBorder": "#14b8a6",
      "abilityColor": "#14b8a6"
    },
    "baseStats": {
      "str": 17,
      "dex": 5,
      "con": 9,
      "luck": 10,
      "special": 4
    },
    "statsDescription": "Globbie has the highest base STR (17) of all companions, making it naturally powerful despite being a control specialist. The very low DEX (5) means slow attack speed, but the guaranteed crit and massive slow make up for it. Low SPECIAL (4) means control effects start weak but scale well with investment.",
    "sections": [
      {
        "title": "Special Ability: Sticky Ruin!",
        "content": [
          {
            "type": "ability-box",
            "name": "🎯 Sticky Ruin!",
            "cost": "Cost: 3 Stamina | Cooldown: 18 seconds",
            "description": "A control-focused ability that guarantees a critical hit while massively slowing enemies and extending Globbie's attack range. Perfect for kiting dangerous enemies and controlling the battlefield."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Ability Effects"
          },
          {
            "type": "list",
            "className": "feature-list",
            "items": [
              "<strong>Guaranteed Critical Hit:</strong> Next attack has +150% crit chance (guaranteed crit) and +2.0 crit damage",
              "<strong>Active Slow:</strong> 67-81% slow for 10 seconds (scales with SPECIAL)",
              "<strong>Passive Slow:</strong> 10-25% slow on every hit while active (scales with SPECIAL)",
              "<strong>Range Bonus:</strong> +3m range (+0.6m effective after scaling)",
              "<strong>Cooldown:</strong> 18 seconds",
              "<strong>Stamina Cost:</strong> 3 stamina to activate"
            ]
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Slow Mechanics"
          },
          {
            "type": "paragraph",
            "text": "Sticky Ruin provides two types of slows that work together to control enemy movement:"
          },
          {
            "type": "heading",
            "level": 4,
            "text": "Active Slow (On Special Activation)",
            "className": "accent-teal"
          },
          {
            "type": "formula-box",
            "formula": "Slow % = 67 + 19 × (1 - 45/(SPECIAL + 45))"
          },
          {
            "type": "paragraph",
            "text": "This powerful slow applies when you activate Sticky Ruin and hit an enemy. It lasts <span class=\"stat-highlight\">10 seconds</span> and reduces enemy acceleration dramatically. The slow starts at 67% and asymptotically approaches 86% at very high SPECIAL values."
          },
          {
            "type": "heading",
            "level": 4,
            "text": "Passive Slow (Continuous)",
            "className": "accent-teal"
          },
          {
            "type": "formula-box",
            "formula": "Slow % = 10 + 20 × (1 - 30/(SPECIAL + 30))"
          },
          {
            "type": "paragraph",
            "text": "While Sticky Ruin is active, every hit applies a passive slow that stacks with the active slow. This scales from 10% to ~30% with high SPECIAL investment, providing continuous control over enemy positioning."
          },
          {
            "type": "table",
            "headers": [
              "SPECIAL",
              "Active Slow",
              "Passive Slow",
              "Combined Control"
            ],
            "rows": [
              [
                "4",
                "67.0%",
                "10.0%",
                "Moderate control"
              ],
              [
                "30",
                "75.8%",
                "20.0%",
                "Strong control"
              ],
              [
                "60",
                "79.1%",
                "23.3%",
                "Excellent control"
              ],
              [
                "100",
                "81.1%",
                "25.4%",
                "Maximum control"
              ]
            ]
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Guaranteed Critical Hit"
          },
          {
            "type": "paragraph",
            "text": "The next attack after activating Sticky Ruin gains <span class=\"stat-highlight\">+150% crit chance</span> (guaranteeing a critical hit) and <span class=\"stat-highlight\">+2.0 crit damage multiplier</span>. This is perfect for burst damage against slowed enemies or finishing off dangerous targets."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Extended Range"
          },
          {
            "type": "paragraph",
            "text": "When Sticky Ruin is active and you have sufficient stamina, Globbie gains <span class=\"stat-highlight\">+3m range</span> (which translates to +0.6m effective range after division by 5). This range bonus allows you to kite enemies safely while dealing damage from a distance. Base range: 0.24m → Active range: 0.84m"
          },
          {
            "type": "info-box",
            "text": "<strong>Slow Note:</strong> The slow effect reduces enemy acceleration, not just speed. This means slowed enemies take longer to reach their maximum movement speed, making it easier to maintain distance and control positioning."
          }
        ]
      },
      {
        "title": "Activation Prerequisites",
        "content": [
          {
            "type": "paragraph",
            "text": "To use Sticky Ruin effectively:"
          },
          {
            "type": "list",
            "className": "feature-list",
            "items": [
              "<strong>Manual Activation Required:</strong> Must press the Sticky Ruin button (no auto-activation)",
              "<strong>Sufficient Stamina:</strong> Must have at least 3 stamina",
              "<strong>Companion Awake:</strong> Companion must not be sleeping",
              "<strong>Not on Cooldown:</strong> 18-second cooldown must be complete"
            ]
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Effect Duration"
          },
          {
            "type": "paragraph",
            "text": "Once activated, Sticky Ruin's effects apply on the next attack and remain active until you deactivate it or run out of stamina. The active slow lasts 10 seconds from the time it's applied, while the passive slow continues on every hit as long as the ability remains active."
          },
          {
            "type": "info-box",
            "text": "<strong>Pro Tip:</strong> The 18-second cooldown is short compared to most other companions. You can activate Sticky Ruin frequently to maintain consistent crowd control, making Globbie excellent for zones with dangerous fast enemies."
          }
        ]
      },
      {
        "title": "📈 Stat Scaling",
        "content": [
          {
            "type": "heading",
            "level": 3,
            "text": "🗡️ STR (Strength) → Damage"
          },
          {
            "type": "formula-box",
            "formula": "Damage Multiplier = (1 × 2.0 + STR × 0.025 × 2.0) = 2.0 + STR × 0.05"
          },
          {
            "type": "paragraph",
            "text": "Each STR point increases damage by <span class=\"stat-highlight\">5.0%</span>. With base STR=17, Globbie starts with a 2.85 damage multiplier (185% of base damage), making it the highest base damage companion. This exceptional scaling means STR is extremely valuable on Globbie."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "⚡ DEX (Dexterity) → Attack Speed & Hit Chance"
          },
          {
            "type": "formula-box",
            "formula": "Attack Speed = (1 + DEX × 0.004 × 4.0) = 1 + DEX × 0.016<br>Hit Chance = DEX × 0.005 × 0.8 = DEX × 0.004"
          },
          {
            "type": "paragraph",
            "text": "Each DEX point increases attack speed by <span class=\"stat-highlight\">1.6%</span> and hit chance by <span class=\"stat-highlight\">0.4%</span>. While base DEX is low, the 4.0× speed scaling means DEX investment is effective if you want faster attacks to apply slows more frequently."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "🛡️ CON (Constitution) → Stamina & Regeneration"
          },
          {
            "type": "formula-box",
            "formula": "Max Stamina = 3 + floor(SPECIAL / 6) + floor(CON / 5)"
          },
          {
            "type": "paragraph",
            "text": "Each 5 CON points grants <span class=\"stat-highlight\">+1 max stamina</span>. With base CON=9 and SPECIAL=4, Globbie starts with <span class=\"stat-highlight\">4 stamina</span> (3 + 0 + 1), which is just enough for one Sticky Ruin activation with 1 stamina left."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "🎲 LUCK → Critical Chance & Critical Damage"
          },
          {
            "type": "formula-box",
            "formula": "Crit Chance = (5 × 0.5) + LUCK × (0.175 × 1.0) = 2.5 + LUCK × 0.175<br>Crit Damage = 1 + (1 × 0.5 + LUCK × 0.025 × 0.8) = 1.5 + LUCK × 0.02"
          },
          {
            "type": "paragraph",
            "text": "With base LUCK=10, Globbie starts with <span class=\"stat-highlight\">4.25% crit chance</span> and <span class=\"stat-highlight\">170% crit damage</span>. Each LUCK point adds <span class=\"stat-highlight\">0.175% crit chance</span> and <span class=\"stat-highlight\">2% crit damage</span>. While not exceptional, the guaranteed crit from Sticky Ruin makes LUCK valuable for maximizing that burst."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "✨ SPECIAL → Control & Stamina"
          },
          {
            "type": "formula-box",
            "formula": "Max Stamina Bonus = floor(SPECIAL / 6)<br>Active Slow = 67 + 19 × (1 - 45/(SPECIAL + 45))<br>Passive Slow = 10 + 20 × (1 - 30/(SPECIAL + 30))"
          },
          {
            "type": "paragraph",
            "text": "SPECIAL is crucial for control builds. Every 6 SPECIAL grants <span class=\"stat-highlight\">+1 max stamina</span>. Each point significantly improves both active and passive slow percentages, with diminishing returns as you approach the caps (86% active, ~30% passive). The scaling is asymptotic, meaning early SPECIAL points provide the most benefit."
          }
        ]
      },
      {
        "title": "⚔️ Combat Strategy",
        "content": [
          {
            "type": "heading",
            "level": 3,
            "text": "When to Use Sticky Ruin"
          },
          {
            "type": "paragraph",
            "text": "Activate Sticky Ruin when:"
          },
          {
            "type": "list",
            "className": "ability-effects",
            "items": [
              "Facing fast enemies that close distance quickly",
              "Fighting dangerous enemies you want to kite",
              "Boss encounters where positioning matters",
              "You need a guaranteed crit for burst damage",
              "You have 3+ stamina and the 18s cooldown is ready"
            ]
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Kiting Strategy"
          },
          {
            "type": "paragraph",
            "text": "The extended range (+0.6m effective) combined with 67-81% slow creates a powerful kiting setup. Activate Sticky Ruin, hit the enemy for the guaranteed crit and massive slow, then use the extended range to maintain distance while dealing damage. The 10-second slow duration gives plenty of time to reposition."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Cooldown Management"
          },
          {
            "type": "paragraph",
            "text": "With only an 18-second cooldown, Sticky Ruin has one of the shortest cooldowns among companions. This means you can activate it frequently. Don't save it—use it on cooldown for tough enemies or whenever you need crowd control. The passive slow remains active between cooldowns if you keep the ability enabled."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Stamina Conservation"
          },
          {
            "type": "paragraph",
            "text": "Sticky Ruin costs 3 stamina, and each attack costs 1 stamina. With base 4 stamina, you can activate the ability and get 1 attack before needing to rest. Higher CON or SPECIAL increases max stamina, allowing multiple attacks per activation. Plan your stamina usage to maximize uptime."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Burst Damage Combo"
          },
          {
            "type": "paragraph",
            "text": "The guaranteed crit provides excellent burst potential:"
          },
          {
            "type": "list",
            "className": "ability-effects",
            "items": [
              "Activate Sticky Ruin when facing a priority target",
              "Next attack: Guaranteed crit with +2.0 crit damage and full STR scaling",
              "Enemy is now massively slowed for 10 seconds",
              "Continue attacking with extended range and passive slow",
              "Repeat every 18 seconds"
            ]
          }
        ]
      },
      {
        "title": "🎯 Recommended Builds",
        "content": [
          {
            "type": "build-card",
            "name": "💥 Burst Assassin (STR Focus)",
            "description": "Maximize STR to leverage Globbie's exceptional 5% damage per point scaling. Combined with the guaranteed crit from Sticky Ruin, this build delivers devastating burst damage to slowed enemies. The slow keeps targets in range while you deal massive damage. Perfect for quickly eliminating dangerous enemies.",
            "priority": "STR (50%) → LUCK (20%) → SPECIAL (15%) → CON (10%) → DEX (5%)"
          },
          {
            "type": "build-card",
            "name": "🎯 Maximum Control (SPECIAL Focus)",
            "description": "Prioritize SPECIAL to maximize slow effectiveness, reaching 81%+ active slow and 25%+ passive slow. This build excels at controlling fast or dangerous enemies, keeping them perpetually slowed. The short cooldown means near-permanent slow uptime. Excellent for survival and kiting playstyles.",
            "priority": "SPECIAL (45%) → STR (30%) → CON (15%) → LUCK (10%)"
          },
          {
            "type": "build-card",
            "name": "⚖️ Balanced Striker (Hybrid)",
            "description": "Balance STR and SPECIAL to combine high damage with solid control. This build provides good burst potential from the guaranteed crit while maintaining effective slows to keep enemies at bay. DEX investment improves attack speed to apply slows more frequently. Well-rounded for most content.",
            "priority": "STR (35%) → SPECIAL (30%) → LUCK (15%) → DEX (10%) → CON (10%)"
          }
        ]
      }
    ]
  },
  "acornelius": {
    "name": "Acornelius",
    "icon": "🐿️",
    "subtitle": "Defensive Tank & Counter-Attacker",
    "unlockLevel": 15,
    "cost": 1450,
    "theme": {
      "gradient": "linear-gradient(135deg, var(--accent-brown), var(--accent-amber))",
      "heroBg": "linear-gradient(135deg, rgba(146, 64, 14, 0.1), rgba(245, 158, 11, 0.1))",
      "heroBorder": "rgba(146, 64, 14, 0.3)",
      "abilityBg": "rgba(146, 64, 14, 0.1)",
      "abilityBorder": "#92400e",
      "abilityColor": "var(--accent-amber)"
    },
    "baseStats": {
      "str": 11,
      "dex": 6,
      "con": 11,
      "luck": 5,
      "special": 12
    },
    "statsDescription": "Acornelius has balanced STR and CON (both 11) for solid damage and survivability. High base SPECIAL (12) provides good starting values for buff duration and damage boost. Very low LUCK (5) means minimal crit chance, making this companion focused on consistent damage rather than burst crits.",
    "sections": [
      {
        "title": "🛡️ Squirrel Defense Ability",
        "content": [
          {
            "type": "ability-box",
            "name": "Squirrel Defense!",
            "description": "A powerful defensive ability that reduces incoming damage while simultaneously boosting Acornelius' attack power. Perfect for surviving dangerous encounters while maintaining offensive pressure."
          },
          {
            "type": "list",
            "className": "ability-effects",
            "items": [
              "<strong>Damage Reduction:</strong> 50% less damage taken (fixed)",
              "<strong>Damage Boost:</strong> +65-95%+ damage for next 2-4 attacks (scales with SPECIAL)",
              "<strong>Duration:</strong> 4-11 seconds (scales with SPECIAL)",
              "<strong>Cooldown:</strong> 32 seconds",
              "<strong>Stamina Cost:</strong> 4 stamina to activate",
              "<strong>Range Bonus:</strong> +3m range (+0.6m effective)"
            ]
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Dual Mechanic System"
          },
          {
            "type": "paragraph",
            "text": "Squirrel Defense provides both defensive and offensive benefits simultaneously, making Acornelius unique among defensive companions:"
          },
          {
            "type": "dual-mechanic-grid",
            "mechanics": [
              {
                "title": "🛡️ Defensive Phase",
                "description": "Reduces incoming damage by <span class=\"stat-highlight\">50%</span> for the entire duration. This damage reduction is constant and doesn't scale with SPECIAL. Lasts 4-11 seconds depending on SPECIAL investment, providing a reliable defensive window.",
                "formula": "Duration = 4 + 7 × (1 - 45/(SPECIAL + 45))"
              },
              {
                "title": "⚔️ Offensive Phase",
                "description": "Boosts damage for the next <span class=\"stat-highlight\">2-4 attacks</span> (based on SPECIAL). Each boosted attack deals +65% damage plus an additional 2.5% per SPECIAL point. The number of buffed attacks increases at SPECIAL thresholds.",
                "formula": "Damage Boost = 65% + (SPECIAL × 2.5%)<br>Attacks: 2 (SPECIAL <17), 3 (SPECIAL <50), 4 (SPECIAL ≥50)"
              }
            ]
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Buff Duration Scaling"
          },
          {
            "type": "comparison-table",
            "headers": [
              "SPECIAL",
              "Duration",
              "Damage Boost",
              "Boosted Attacks"
            ],
            "rows": [
              [
                "12",
                "6.0s",
                "+95%",
                "2 attacks"
              ],
              [
                "25",
                "7.4s",
                "+127.5%",
                "3 attacks"
              ],
              [
                "50",
                "9.1s",
                "+190%",
                "4 attacks"
              ],
              [
                "100",
                "10.4s",
                "+315%",
                "4 attacks"
              ]
            ]
          },
          {
            "type": "info-box",
            "text": "<strong>Key Mechanic:</strong> The damage reduction lasts for the full duration, but the damage boost only applies to a specific number of attacks. With high attack speed, you might use all boosted attacks before the defensive buff expires. With low attack speed, the defensive buff might outlast your damage boost."
          }
        ]
      },
      {
        "title": "⚡ Activation Prerequisites",
        "content": [
          {
            "type": "paragraph",
            "text": "To use Squirrel Defense effectively:"
          },
          {
            "type": "list",
            "className": "ability-effects",
            "items": [
              "<strong>Manual Activation Required:</strong> Must press the Squirrel Defense button",
              "<strong>Sufficient Stamina:</strong> Must have at least 4 stamina",
              "<strong>Companion Awake:</strong> Companion must not be sleeping",
              "<strong>Not on Cooldown:</strong> 32-second cooldown must be complete"
            ]
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Buff Tracking"
          },
          {
            "type": "paragraph",
            "text": "The ability tracks two separate timers: the duration of the defensive buff (time-based) and the number of remaining boosted attacks (attack-based). You can monitor both to optimize your usage."
          },
          {
            "type": "info-box",
            "text": "<strong>Pro Tip:</strong> The 32-second cooldown is relatively long, so timing your activation is crucial. Activate before or during dangerous encounters, not after taking heavy damage. The defensive buff gives you breathing room to heal or reposition while dealing increased damage."
          }
        ]
      },
      {
        "title": "📈 Stat Scaling",
        "content": [
          {
            "type": "heading",
            "level": 3,
            "text": "🗡️ STR (Strength) → Damage"
          },
          {
            "type": "formula-box",
            "formula": "Damage Multiplier = (1 × 1.2 + STR × 0.025 × 0.65) = 1.2 + STR × 0.01625"
          },
          {
            "type": "paragraph",
            "text": "Each STR point increases damage by <span class=\"stat-highlight\">1.625%</span>. With base STR=11, Acornelius starts with a 1.38 damage multiplier. While not the highest scaling, the damage boost from Squirrel Defense more than compensates."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "⚡ DEX (Dexterity) → Attack Speed & Hit Chance"
          },
          {
            "type": "formula-box",
            "formula": "Attack Speed = (1 + DEX × 0.004 × 2.5) = 1 + DEX × 0.01<br>Hit Chance = DEX × 0.005 × 0.8 = DEX × 0.004"
          },
          {
            "type": "paragraph",
            "text": "Each DEX point increases attack speed by <span class=\"stat-highlight\">1.0%</span> and hit chance by <span class=\"stat-highlight\">0.4%</span>. With 2.5× speed scaling, DEX is effective for getting more boosted attacks within the duration window."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "🛡️ CON (Constitution) → Stamina & Regeneration"
          },
          {
            "type": "formula-box",
            "formula": "Max Stamina = 3 + floor(SPECIAL / 7) + floor(CON / 5)"
          },
          {
            "type": "paragraph",
            "text": "Each 5 CON points grants <span class=\"stat-highlight\">+1 max stamina</span>. With base CON=11 and SPECIAL=12, Acornelius starts with <span class=\"stat-highlight\">6 stamina</span> (3 + 1 + 2), which is enough for one Squirrel Defense activation with stamina to spare for attacks."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "🎲 LUCK → Critical Chance & Critical Damage"
          },
          {
            "type": "formula-box",
            "formula": "Crit Chance = (5 × 2.0) + LUCK × (0.175 × 2.5) = 10 + LUCK × 0.4375<br>Crit Damage = 1 + (1 × 2.0 + LUCK × 0.025 × 0.3) = 3.0 + LUCK × 0.0075"
          },
          {
            "type": "paragraph",
            "text": "With base LUCK=5, Acornelius starts with <span class=\"stat-highlight\">12.2% crit chance</span> and <span class=\"stat-highlight\">303.75% crit damage</span>. Despite low LUCK, the 2.5× crit chance scaling makes LUCK investment effective. High base crit damage (3.0×) provides good burst potential when crits land."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "✨ SPECIAL → Buff Duration & Damage Boost"
          },
          {
            "type": "formula-box",
            "formula": "Max Stamina Bonus = floor(SPECIAL / 7)<br>Duration = 4 + 7 × (1 - 45/(SPECIAL + 45))<br>Damage Boost = 65% + (SPECIAL × 2.5%)<br>Boosted Attacks = 2 (SPECIAL <17), 3 (SPECIAL <50), 4 (SPECIAL ≥50)"
          },
          {
            "type": "paragraph",
            "text": "SPECIAL is Acornelius' most important stat. Every 7 SPECIAL grants <span class=\"stat-highlight\">+1 max stamina</span>. Each point increases buff duration (approaching 11s cap) and adds <span class=\"stat-highlight\">2.5%</span> to the damage boost. Reaching SPECIAL thresholds (17, 50) increases the number of boosted attacks, dramatically improving damage output."
          }
        ]
      },
      {
        "title": "⚔️ Combat Strategy",
        "content": [
          {
            "type": "heading",
            "level": 3,
            "text": "When to Use Squirrel Defense"
          },
          {
            "type": "paragraph",
            "text": "Activate Squirrel Defense when:"
          },
          {
            "type": "list",
            "className": "ability-effects",
            "items": [
              "Facing tough enemies or bosses that deal high damage",
              "Your HP is around 70-80% (before it gets critical)",
              "Starting a difficult encounter where you know damage is coming",
              "You have 4+ stamina and won't need it for other abilities soon",
              "The 32-second cooldown is ready for the next dangerous phase"
            ]
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Buff Window Optimization"
          },
          {
            "type": "paragraph",
            "text": "The key to Acornelius is maximizing damage during the boosted attack window:"
          },
          {
            "type": "list",
            "className": "ability-effects",
            "items": [
              "Attack immediately after activation to use boosted attacks while buff is active",
              "With high DEX, use all 4 boosted attacks in 2-3 seconds",
              "The defensive buff continues even after boosted attacks are used",
              "Extended range (+0.6m) allows safer positioning during buff"
            ]
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Cooldown Management"
          },
          {
            "type": "paragraph",
            "text": "With a 32-second cooldown, Squirrel Defense is available roughly every 30-40 seconds of combat. This means you should use it liberally—don't save it for \"perfect\" moments. If you're taking damage or facing a tough enemy, activate it. The defensive buff alone (50% reduction) is worth the cooldown."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Stamina Planning"
          },
          {
            "type": "paragraph",
            "text": "Squirrel Defense costs 4 stamina, which is the highest cost among companions. With base 6 stamina, you can activate once and perform 2 attacks before needing to rest. Plan your stamina usage:"
          },
          {
            "type": "list",
            "className": "ability-effects",
            "items": [
              "Ensure you have 4+ stamina before activating",
              "After activation, you have enough stamina for 2 attacks (out of 2-4 boosted)",
              "Higher CON/SPECIAL increases max stamina, allowing full buff usage",
              "Consider resting before dangerous fights to enter with full stamina"
            ]
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Defensive Positioning"
          },
          {
            "type": "paragraph",
            "text": "The 50% damage reduction doesn't mean you're invincible. Use the defensive window to:"
          },
          {
            "type": "list",
            "className": "ability-effects",
            "items": [
              "Tank through damage spikes you'd normally avoid",
              "Stay in melee range to maximize boosted attack usage",
              "Use extended range (+0.6m) to maintain optimal distance",
              "Heal during the defensive phase if HP is low"
            ]
          }
        ]
      },
      {
        "title": "🎯 Recommended Builds",
        "content": [
          {
            "type": "build-card",
            "name": "🛡️ Maximum Defense (SPECIAL + CON Focus)",
            "description": "Prioritize SPECIAL for maximum buff duration and damage boost, backed by high CON for stamina capacity and survivability. This build provides the longest defensive windows (11s) with the highest damage boost (300%+). Excellent for difficult content where survival is paramount. The high stamina pool allows multiple Squirrel Defense cycles before resting.",
            "priority": "SPECIAL (50%) → CON (25%) → STR (15%) → DEX (10%)"
          },
          {
            "type": "build-card",
            "name": "⚔️ Counter-Attacker (SPECIAL + STR Focus)",
            "description": "Balance SPECIAL with high STR to maximize damage during boosted attack windows. This build reaches 4 boosted attacks (at SPECIAL 50+) with high base damage from STR scaling. While defensive duration is solid, the focus is on dealing massive damage during the buff window. Great for boss encounters where you need both survivability and DPS.",
            "priority": "SPECIAL (40%) → STR (35%) → DEX (15%) → CON (10%)"
          },
          {
            "type": "build-card",
            "name": "⚡ Rapid Tank (DEX + SPECIAL Focus)",
            "description": "Invest in DEX to attack faster, allowing you to use all 4 boosted attacks quickly within the duration window. Higher attack speed also means more attacks benefit from the defensive buff. This build is excellent for maximizing damage output while maintaining defensive uptime. The fast attacks can overwhelm enemies before they deal significant damage.",
            "priority": "SPECIAL (40%) → DEX (30%) → STR (20%) → CON (10%)"
          }
        ]
      }
    ]
  },
  "florence": {
    "name": "Florence",
    "icon": "🌿",
    "subtitle": "Nature's Crowd Control Master",
    "unlockLevel": 15,
    "cost": 1650,
    "theme": {
      "gradient": "linear-gradient(135deg, var(--accent-emerald), var(--accent-green))",
      "heroBg": "linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(34, 197, 94, 0.1))",
      "heroBorder": "rgba(16, 185, 129, 0.3)",
      "abilityBg": "rgba(16, 185, 129, 0.1)",
      "abilityBorder": "#10b981",
      "abilityColor": "#22c55e"
    },
    "baseStats": {
      "str": 9,
      "dex": 7,
      "con": 12,
      "luck": 15,
      "special": 2
    },
    "statsDescription": "Florence has the second-highest base LUCK (15, tied with Hootini) for excellent crit potential. High CON (12) provides decent base stamina. Very low SPECIAL (2, lowest among all companions) means root duration starts weak but the damage boost is still strong. Balanced STR and DEX provide consistent damage output.",
    "sections": [
      {
        "title": "🌿 Grasping Roots Ability",
        "content": [
          {
            "type": "ability-box",
            "name": "Grasping Roots!",
            "description": "A powerful crowd control ability that completely immobilizes enemies while dealing massive damage. Florence channels nature's power to root enemies in place, neutralizing threats while dealing devastating attacks."
          },
          {
            "type": "list",
            "className": "ability-effects",
            "items": [
              "<strong>Damage Boost:</strong> +175-269%+ damage (scales with SPECIAL)",
              "<strong>Root Duration:</strong> 1-5 seconds (scales with SPECIAL)",
              "<strong>Stamina Cost:</strong> +2 stamina per attack while active, +3 stamina to apply root",
              "<strong>Cooldown:</strong> 18 seconds (for root application)",
              "<strong>Always Active:</strong> Damage boost applies continuously, root on cooldown"
            ]
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Root Mechanics"
          },
          {
            "type": "paragraph",
            "text": "Grasping Roots is unique among companion abilities - the damage boost is <strong>always active</strong> when enabled, but rooting enemies has a cooldown. This creates a high-risk, high-reward playstyle:"
          },
          {
            "type": "info-box",
            "text": "<strong>Key Mechanic:</strong> When Grasping Roots is enabled, every attack costs +2 stamina (3 total). When you hit an enemy and the root cooldown is ready, an additional +3 stamina is consumed to apply the root (6 stamina total for that hit). This high stamina cost means you must manage resources carefully."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Damage Scaling"
          },
          {
            "type": "formula-box",
            "formula": "Damage Multiplier = 2.75 + (SPECIAL - 4) × 0.03<br><br>At SPECIAL=2: 2.69× (169% bonus)<br>At SPECIAL=25: 2.38× (138% bonus)<br>At SPECIAL=50: 3.13× (213% bonus)<br>At SPECIAL=100: 3.63× (263% bonus)"
          },
          {
            "type": "paragraph",
            "text": "The damage boost starts at +175% (2.75× multiplier) and increases by <span class=\"stat-highlight\">3% per SPECIAL point</span>. Even with Florence's low base SPECIAL (2), the ability provides nearly 170% bonus damage continuously."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Root Duration Scaling"
          },
          {
            "type": "formula-box",
            "formula": "Duration = 1 + 4 × (1 - 55/(SPECIAL + 51))"
          },
          {
            "type": "comparison-table",
            "headers": [
              "SPECIAL",
              "Root Duration",
              "Damage Multiplier",
              "Total Effect"
            ],
            "rows": [
              [
                "2",
                "1.04s",
                "2.69× (169%)",
                "Brief stun, high damage"
              ],
              [
                "25",
                "2.36s",
                "3.38× (238%)",
                "Moderate control"
              ],
              [
                "50",
                "3.11s",
                "4.13× (313%)",
                "Strong control"
              ],
              [
                "100",
                "4.05s",
                "5.63× (463%)",
                "Maximum control"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "The root duration asymptotically approaches 5 seconds as SPECIAL increases. Even at base SPECIAL=2, you get ~1 second of immobilization, which is enough to prevent an enemy attack or reposition."
          }
        ]
      },
      {
        "title": "⚡ Activation & Stamina Management",
        "content": [
          {
            "type": "heading",
            "level": 3,
            "text": "Activation Prerequisites"
          },
          {
            "type": "list",
            "className": "ability-effects",
            "items": [
              "<strong>Manual Activation Required:</strong> Must press the Grasping Roots button",
              "<strong>High Stamina Required:</strong> 3 stamina per normal attack, 6 stamina for root application",
              "<strong>Companion Awake:</strong> Companion must not be sleeping",
              "<strong>Root Cooldown:</strong> 18-second cooldown for root application (damage boost always active)"
            ]
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Stamina Cost Breakdown"
          },
          {
            "type": "warning-box",
            "text": "<strong>Critical Limitation:</strong> Grasping Roots has the highest stamina cost of any companion ability. Every attack costs 3 stamina (base 1 + ability 2), and rooting an enemy costs an additional 3 stamina for a total of 6 stamina. With Florence's base max stamina of 5, you cannot apply a root without first increasing your max stamina through SPECIAL or CON investment."
          },
          {
            "type": "paragraph",
            "text": "Understanding stamina costs:"
          },
          {
            "type": "list",
            "className": "ability-effects",
            "items": [
              "Normal attack without ability: 1 stamina",
              "Attack with Grasping Roots active: 3 stamina (1 base + 2 ability)",
              "Root application (when cooldown ready): 6 stamina total (3 for attack + 3 for root)",
              "Base max stamina: 5 (3 + 0 SPECIAL/15 + 2 CON/5)"
            ]
          },
          {
            "type": "paragraph",
            "text": "To use Grasping Roots effectively, you <strong>must</strong> invest in either:"
          },
          {
            "type": "list",
            "className": "ability-effects",
            "items": [
              "CON to increase max stamina (every 5 CON = +1 stamina)",
              "SPECIAL to increase max stamina (every 15 SPECIAL = +1 stamina)",
              "Both for maximum stamina capacity"
            ]
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Optimal Stamina Thresholds"
          },
          {
            "type": "comparison-table",
            "headers": [
              "Max Stamina",
              "Capabilities",
              "How to Achieve"
            ],
            "rows": [
              [
                "5 (base)",
                "1 normal attack only",
                "No investment needed"
              ],
              [
                "6",
                "2 normal attacks OR 1 root",
                "+5 CON or +15 SPECIAL"
              ],
              [
                "9",
                "3 normal attacks OR 1 root + 1 attack",
                "+20 CON or +60 SPECIAL (or mix)"
              ],
              [
                "12+",
                "4+ normal attacks OR 2 roots",
                "High CON + SPECIAL investment"
              ]
            ]
          }
        ]
      },
      {
        "title": "📈 Stat Scaling",
        "content": [
          {
            "type": "heading",
            "level": 3,
            "text": "🗡️ STR (Strength) → Damage"
          },
          {
            "type": "formula-box",
            "formula": "Damage Multiplier = (1 × 0.65 + STR × 0.025 × 0.4) = 0.65 + STR × 0.01"
          },
          {
            "type": "paragraph",
            "text": "Each STR point increases damage by <span class=\"stat-highlight\">1.0%</span>. With base STR=9, Florence starts with a 0.74 damage multiplier. The low scaling is offset by the massive +175-269% damage boost from Grasping Roots, making total damage output very high."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "⚡ DEX (Dexterity) → Attack Speed & Hit Chance"
          },
          {
            "type": "formula-box",
            "formula": "Attack Speed = (1 + DEX × 0.004 × 0.8) = 1 + DEX × 0.0032<br>Hit Chance = DEX × 0.005 × 1.75 = DEX × 0.00875"
          },
          {
            "type": "paragraph",
            "text": "Each DEX point increases attack speed by <span class=\"stat-highlight\">0.32%</span> and hit chance by <span class=\"stat-highlight\">0.875%</span>. Low attack speed scaling means Florence attacks slowly, but high hit chance scaling (1.75×) ensures attacks land reliably despite the low base."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "🛡️ CON (Constitution) → Stamina & Regeneration"
          },
          {
            "type": "formula-box",
            "formula": "Max Stamina = 3 + floor(SPECIAL / 15) + floor(CON / 5)"
          },
          {
            "type": "paragraph",
            "text": "Each 5 CON points grants <span class=\"stat-highlight\">+1 max stamina</span>. With base CON=12 and SPECIAL=2, Florence starts with <span class=\"stat-highlight\">5 stamina</span> (3 + 0 + 2). CON is <strong>critical</strong> for Florence - without stamina investment, you cannot apply roots (which cost 6 stamina)."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "🎲 LUCK → Critical Chance & Critical Damage"
          },
          {
            "type": "formula-box",
            "formula": "Crit Chance = (5 × 2.0) + LUCK × (0.175 × 0.25) = 10 + LUCK × 0.04375<br>Crit Damage = 1 + (1 × 0.25 + LUCK × 0.025 × 2.0) = 1.25 + LUCK × 0.05"
          },
          {
            "type": "paragraph",
            "text": "With base LUCK=15, Florence starts with <span class=\"stat-highlight\">10.66% crit chance</span> and <span class=\"stat-highlight\">200% crit damage</span>. Each LUCK point adds <span class=\"stat-highlight\">0.04375%</span> crit chance and <span class=\"stat-highlight\">5%</span> crit damage. The high base crit damage (2.0×) and excellent crit damage scaling make LUCK very valuable for burst damage."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "✨ SPECIAL → Root Duration & Stamina"
          },
          {
            "type": "formula-box",
            "formula": "Max Stamina Bonus = floor(SPECIAL / 15)<br>Root Duration = 1 + 4 × (1 - 55/(SPECIAL + 51))<br>Damage Boost = 175% + (SPECIAL - 4) × 3%"
          },
          {
            "type": "paragraph",
            "text": "SPECIAL increases root duration (approaching 5s max) and damage boost by <span class=\"stat-highlight\">3% per point</span>. Every 15 SPECIAL grants <span class=\"stat-highlight\">+1 max stamina</span>. While Florence has the lowest base SPECIAL, it scales incredibly well - 100 SPECIAL provides 4+ seconds of root and nearly 5× damage multiplier."
          }
        ]
      },
      {
        "title": "⚔️ Combat Strategy",
        "content": [
          {
            "type": "heading",
            "level": 3,
            "text": "Managing Stamina Costs"
          },
          {
            "type": "paragraph",
            "text": "The most important aspect of playing Florence is stamina management:"
          },
          {
            "type": "list",
            "className": "ability-effects",
            "items": [
              "Always ensure you have 6+ stamina before attempting to root",
              "Normal attacks (3 stamina) let you deal boosted damage while conserving stamina",
              "Apply roots when the 18s cooldown is ready and you have sufficient stamina",
              "Rest before dangerous fights to enter with full stamina",
              "Higher CON/SPECIAL = more attacks per rest cycle"
            ]
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Root Timing"
          },
          {
            "type": "paragraph",
            "text": "Save roots for optimal moments:"
          },
          {
            "type": "list",
            "className": "ability-effects",
            "items": [
              "Priority targets: Fast enemies, hard-hitting enemies, bosses",
              "Root before the enemy's next attack to prevent incoming damage",
              "Use root windows to land multiple boosted attacks safely",
              "18-second cooldown allows frequent control (every ~20 seconds of combat)"
            ]
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Damage Optimization"
          },
          {
            "type": "paragraph",
            "text": "Florence's +175-269% damage boost is always active while Grasping Roots is enabled. This means:"
          },
          {
            "type": "list",
            "className": "ability-effects",
            "items": [
              "Every attack deals 2.7-3.7× damage continuously",
              "Critical hits multiply this further (base 2× crit damage)",
              "Rooted enemies cannot dodge or move, ensuring all attacks land",
              "High damage per hit compensates for low attack speed"
            ]
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Risk vs. Reward"
          },
          {
            "type": "paragraph",
            "text": "Grasping Roots is high-risk, high-reward:"
          },
          {
            "type": "list",
            "className": "ability-effects",
            "items": [
              "<strong>Risk:</strong> Highest stamina cost means less uptime, more resting",
              "<strong>Reward:</strong> Nearly 3× damage boost and complete enemy neutralization",
              "Best against single powerful enemies where control matters",
              "Less effective against swarms where stamina runs out quickly"
            ]
          },
          {
            "type": "heading",
            "level": 3,
            "text": "When to Disable"
          },
          {
            "type": "paragraph",
            "text": "Consider disabling Grasping Roots when:"
          },
          {
            "type": "list",
            "className": "ability-effects",
            "items": [
              "Facing weak enemies that die in 1-2 hits (stamina cost not worth it)",
              "Your stamina is too low to root (less than 6 max stamina)",
              "You need more consistent uptime and less resting"
            ]
          }
        ]
      },
      {
        "title": "🎯 Recommended Builds",
        "content": [
          {
            "type": "build-card",
            "name": "🌿 Maximum Control (SPECIAL + CON Focus)",
            "description": "Prioritize SPECIAL for maximum root duration (5s) and damage boost (5×+), backed by CON for stamina capacity. This build provides the longest crowd control windows and highest damage multiplier. At high investment, you can root enemies for 4-5 seconds every 18 seconds, effectively neutralizing threats. Essential stamina investment ensures you can always apply roots.",
            "priority": "SPECIAL (45%) → CON (30%) → LUCK (15%) → STR (10%)"
          },
          {
            "type": "build-card",
            "name": "⚔️ Burst Control (LUCK + SPECIAL Focus)",
            "description": "Leverage Florence's exceptional LUCK (15 base) combined with SPECIAL for high crit damage during root windows. With 5% crit damage per LUCK point and already high base crit damage (2.0×), this build deals massive crits while enemies are rooted and helpless. Balance SPECIAL for decent root duration (2-3s) and damage boost. Great for one-shotting tough enemies.",
            "priority": "LUCK (40%) → SPECIAL (30%) → CON (20%) → STR (10%)"
          },
          {
            "type": "build-card",
            "name": "🔄 Sustained Roots (CON Focus)",
            "description": "Focus on CON for maximum stamina capacity, allowing multiple attacks and frequent root applications. With high stamina, you can attack 3-4 times before resting, maintaining near-permanent root uptime with the 18s cooldown. Lower SPECIAL means shorter root duration, but more frequent applications compensate. This build prioritizes consistent control over peak power.",
            "priority": "CON (45%) → SPECIAL (25%) → LUCK (20%) → STR (10%)"
          }
        ]
      }
    ]
  },
  "mechabird": {
    "name": "MechaBird",
    "icon": "🤖",
    "subtitle": "Ramping Damage Dealer",
    "unlockLevel": 20,
    "cost": 2100,
    "theme": {
      "gradient": "linear-gradient(135deg, var(--accent-cyan), var(--accent-orange))",
      "heroBg": "rgba(6, 182, 212, 0.1)",
      "heroBorder": "rgba(6, 182, 212, 0.3)",
      "abilityBg": "rgba(6, 182, 212, 0.1)",
      "abilityBorder": "var(--accent-cyan)",
      "abilityColor": "var(--accent-cyan)"
    },
    "baseStats": {
      "str": 11,
      "dex": 5,
      "con": 8,
      "luck": 9,
      "special": 12
    },
    "statsDescription": "MechaBird has moderate base stats with STR (11) for decent damage and SPECIAL (12) for ability effectiveness. Low DEX (5) means slow initial attack speed, but the ramping mechanic compensates. Low CON (8) requires stamina management for sustained ability usage.",
    "sections": [
      {
        "title": "Special Ability: Pecking Overdrive!",
        "content": [
          {
            "type": "ability-box",
            "name": "⚡ Pecking Overdrive!",
            "cost": "Cooldown: 26 seconds | Stamina Cost: 2 activation + 1 per attack | Duration: 4 seconds",
            "description": "A powerful ramping damage ability that grows stronger with each consecutive hit. Grants immediate damage and crit bonuses, then stacks attack speed exponentially up to devastating levels."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Immediate Effects (On Activation)"
          },
          {
            "type": "formula-box",
            "label": "Damage Boost",
            "formula": "+50% multiplicative damage increase"
          },
          {
            "type": "formula-box",
            "label": "Critical Hit Chance",
            "formula": "+35% crit chance (additive)"
          },
          {
            "type": "formula-box",
            "label": "Base Speed Modifier",
            "formula": "-0.15 + 0.025 × (SPECIAL - 12)",
            "details": "At 12 SPECIAL: -15% speed (slow start)\nAt 20 SPECIAL: +5% speed\nAt 32 SPECIAL: +35% speed"
          },
          {
            "type": "formula-box",
            "label": "Extra Range",
            "formula": "+0.5m attack range while active"
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Unique Mechanic: Attack Speed Stacking"
          },
          {
            "type": "paragraph",
            "text": "The true power of Pecking Overdrive is the exponential attack speed stacking. Each hit during the 4-second duration increases attack speed by 8%, stacking up to 10 hits."
          },
          {
            "type": "formula-box",
            "label": "Speed Increase Per Hit",
            "formula": "8% multiplicative per hit"
          },
          {
            "type": "formula-box",
            "label": "Total Speed Scaling Formula",
            "formula": "(1.08)^HitCount - 1"
          },
          {
            "type": "stats-grid",
            "title": "Attack Speed Progression",
            "stats": [
              {
                "label": "0 Hits (Start)",
                "value": "0%",
                "sublabel": "Speed Bonus"
              },
              {
                "label": "1 Hit",
                "value": "+8.0%",
                "sublabel": "Speed Bonus"
              },
              {
                "label": "3 Hits",
                "value": "+25.97%",
                "sublabel": "Speed Bonus"
              },
              {
                "label": "5 Hits",
                "value": "+46.93%",
                "sublabel": "Speed Bonus"
              },
              {
                "label": "7 Hits",
                "value": "+71.38%",
                "sublabel": "Speed Bonus"
              },
              {
                "label": "10 Hits (Max)",
                "value": "+115.89%",
                "sublabel": "Speed Bonus"
              }
            ]
          },
          {
            "type": "warning-box",
            "text": "<strong>Peak Performance:</strong> At maximum stacks (10 hits), MechaBird achieves 2.16× base attack speed on top of the +50% damage and +35% crit chance. This makes MechaBird one of the highest burst DPS companions when fully ramped."
          }
        ]
      },
      {
        "title": "📈 Stat Scaling",
        "content": [
          {
            "type": "heading",
            "level": 3,
            "text": "🗡️ STR (Strength) → Damage"
          },
          {
            "type": "formula-box",
            "formula": "Damage Multiplier = (1 × 0.4 + STR × 0.025 × 0.19) = 0.4 + STR × 0.00475"
          },
          {
            "type": "paragraph",
            "text": "Each point of STR increases damage by <span class=\"stat-highlight\">0.475%</span>. Relatively low scaling, but the special ability's +50% damage boost makes STR more effective during Pecking Overdrive."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "⚡ DEX (Dexterity) → Attack Speed"
          },
          {
            "type": "formula-box",
            "formula": "Attack Speed = (1 + DEX × 0.004 × 7.5) = 1 + DEX × 0.03"
          },
          {
            "type": "paragraph",
            "text": "Each point of DEX increases attack speed by <span class=\"stat-highlight\">3.0%</span>. Extremely high scaling makes DEX the most important stat for maximizing hit count during Pecking Overdrive. More hits means higher attack speed stacks."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "🛡️ CON (Constitution) → Stamina"
          },
          {
            "type": "formula-box",
            "formula": "Max Stamina = 5 + CON × 1"
          },
          {
            "type": "formula-box",
            "formula": "Regen Per Second = (1 × 0.5 + CON × 0.025 × 3.8) = 0.5 + CON × 0.095"
          },
          {
            "type": "paragraph",
            "text": "Each point of CON adds <span class=\"stat-highlight\">1 max stamina</span> and <span class=\"stat-highlight\">0.095 stamina/sec</span> regeneration. Pecking Overdrive costs 2 activation + 1 per attack, so sustained fighting requires moderate CON investment."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "🎲 LUCK → Critical Chance & Critical Damage"
          },
          {
            "type": "formula-box",
            "formula": "Crit Chance = (1 × 5 + LUCK × 0.025 × 0.5) = 5 + LUCK × 0.0125"
          },
          {
            "type": "formula-box",
            "formula": "Crit Damage = (1 × 2 + LUCK × 0.025 × 1.9) = 2 + LUCK × 0.04775"
          },
          {
            "type": "paragraph",
            "text": "Each point of LUCK adds <span class=\"stat-highlight\">0.0125% crit chance</span> and <span class=\"stat-highlight\">0.04775 crit damage</span>. With the +35% crit chance from Pecking Overdrive, even moderate LUCK investment guarantees crits during the ability window."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "✨ SPECIAL → Ability Effectiveness"
          },
          {
            "type": "formula-box",
            "formula": "Speed Modifier = -0.15 + 0.025 × (SPECIAL - 12)"
          },
          {
            "type": "formula-box",
            "formula": "Stamina Bonus = SPECIAL × 0.025 × 2.5 = SPECIAL × 0.0625"
          },
          {
            "type": "paragraph",
            "text": "Each point of SPECIAL adds <span class=\"stat-highlight\">2.5% to base speed modifier</span> during Pecking Overdrive and <span class=\"stat-highlight\">0.0625 max stamina</span>. High SPECIAL eliminates the initial speed penalty and provides a strong starting boost before stacks ramp up."
          }
        ]
      },
      {
        "title": "⚔️ Combat Strategy",
        "content": [
          {
            "type": "heading",
            "level": 3,
            "text": "Ability Timing"
          },
          {
            "type": "paragraph",
            "text": "Pecking Overdrive has a fixed 4-second duration, making timing critical. Activate when you have full stamina and can commit to continuous attacks for the entire window. The exponential speed scaling means every hit matters - interruptions reset your stacks and waste the ability."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Stack Management"
          },
          {
            "type": "paragraph",
            "text": "Your goal is to reach 10 stacks (2.16× attack speed) as fast as possible. With high DEX, you can achieve maximum stacks within 2-3 seconds, leaving 1-2 seconds to benefit from peak performance. Low DEX builds may only reach 5-7 stacks before the ability ends, significantly reducing effectiveness."
          },
          {
            "type": "warning-box",
            "text": "<strong>Optimal Combo:</strong> Start Pecking Overdrive → Attack continuously → Reach 10 stacks → Maximize damage during remaining duration. The +50% damage, +35% crit chance, and 2.16× attack speed combine for devastating burst windows."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Stamina Management"
          },
          {
            "type": "paragraph",
            "text": "Each activation costs 2 stamina, and each attack costs 1 stamina during the ability. With approximately 8-12 attacks per activation (depending on DEX and stack level), expect to consume 10-14 stamina per ability cycle. Plan your stamina regeneration between cooldowns."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Target Priority"
          },
          {
            "type": "paragraph",
            "text": "MechaBird excels against single high-value targets where the full 4-second duration can be utilized. Elite enemies and bosses are ideal - the ramping speed lets MechaBird maintain DPS advantage throughout the fight. Less effective against swarms where targets die before stacks accumulate."
          },
          {
            "type": "warning-box",
            "text": "<strong>Ramp Dependency:</strong> MechaBird's performance is heavily dependent on reaching high stack counts. Low DEX or interrupted attack sequences drastically reduce effectiveness. This companion rewards aggressive, committed play and punishes defensive or interrupted positioning."
          }
        ]
      },
      {
        "title": "🎯 Recommended Builds",
        "content": [
          {
            "type": "build-card",
            "name": "⚡ Speed Stack Build (Recommended)",
            "description": "Maximizes attack speed to reach 10 stacks as quickly as possible. High DEX (3% per point) combined with SPECIAL investment (to eliminate speed penalty) creates the fastest ramp time. LUCK ensures crits during the peak damage window. This build transforms MechaBird into a burst monster that melts targets during the 4-second Pecking Overdrive window.",
            "priority": "DEX (60%) → SPECIAL (20%) → LUCK (10%) → CON (10%)"
          },
          {
            "type": "build-card",
            "name": "⚔️ Balanced Damage Build",
            "description": "Balances speed stacking with critical damage output. Focuses on DEX for stack generation and LUCK for crit reliability with the +35% crit chance buff. SPECIAL provides stamina and removes speed penalty. Good for sustained DPS across multiple ability cycles.",
            "priority": "DEX (40%) → LUCK (30%) → SPECIAL (20%) → CON (10%)"
          },
          {
            "type": "build-card",
            "name": "🔄 High Uptime Build",
            "description": "Prioritizes stamina for frequent ability usage. With 26-second cooldown and moderate stamina costs, high CON enables near-constant Pecking Overdrive uptime. DEX still important for stack generation. Best for long boss fights where sustained ability usage outweighs peak burst damage.",
            "priority": "CON (40%) → DEX (35%) → SPECIAL (15%) → LUCK (10%)"
          }
        ]
      }
    ]
  },
  "snekles": {
    "name": "Snekles",
    "icon": "🐍",
    "subtitle": "Venomous Utility Specialist",
    "unlockLevel": 25,
    "cost": 1350,
    "theme": {
      "gradient": "linear-gradient(135deg, var(--accent-purple), var(--accent-green))",
      "heroBg": "rgba(124, 58, 237, 0.1)",
      "heroBorder": "rgba(124, 58, 237, 0.3)",
      "abilityBg": "rgba(124, 58, 237, 0.1)",
      "abilityBorder": "var(--accent-purple)",
      "abilityColor": "#10b981"
    },
    "baseStats": {
      "str": 3,
      "dex": 3,
      "con": 9,
      "luck": 23,
      "special": 7
    },
    "statsDescription": "Snekles has the most extreme stat distribution of any companion. With LUCK=23 (highest base) but STR=3 and DEX=3 (both lowest), this creates a feast-or-famine playstyle where critical hits are frequent but base damage is weak. Moderate CON (9) and SPECIAL (7) provide utility support.",
    "sections": [
      {
        "title": "Special Ability: Neurotoxin",
        "content": [
          {
            "type": "ability-box",
            "name": "☠️ Neurotoxin",
            "cost": "Stamina Cost: 2 activation + 1 per attack",
            "description": "A debilitating poison that amplifies Snekles' damage while applying multiple control and debuff effects. Each attack has a chance to stun enemies and weakens their offensive capabilities, creating a multi-layered utility toolkit."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Damage Amplification"
          },
          {
            "type": "formula-box",
            "formula": "Damage Multiplier = 0.21 + SPECIAL × 0.02"
          },
          {
            "type": "paragraph",
            "text": "At 7 SPECIAL: +35% damage<br>At 20 SPECIAL: +61% damage<br>At 40 SPECIAL: +101% damage (doubles damage)"
          },
          {
            "type": "paragraph",
            "text": "The damage boost is always active when Neurotoxin is enabled. Each point of SPECIAL adds <span class=\"stat-highlight\">2% damage</span>, making SPECIAL investment directly translate to offensive power."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Stun Mechanic"
          },
          {
            "type": "formula-box",
            "formula": "Stun Chance: 15% per attack (constant)"
          },
          {
            "type": "formula-box",
            "formula": "Duration = 3 × 0.45 × (1 - 32/(SPECIAL + 31)) = 1.35 × (1 - 32/(SPECIAL + 31))"
          },
          {
            "type": "paragraph",
            "text": "At 7 SPECIAL: ~0.68 seconds<br>At 20 SPECIAL: ~1.07 seconds<br>At 40 SPECIAL: ~1.27 seconds<br>Maximum: ~1.35 seconds (asymptotic limit)"
          },
          {
            "type": "paragraph",
            "text": "Every attack has a 15% chance to stun the enemy, interrupting their actions. The stun duration scales asymptotically with SPECIAL, approaching but never exceeding 1.35 seconds. High-frequency attacks combined with 15% proc chance makes stuns reliably occur throughout combat."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Weaken Effect"
          },
          {
            "type": "formula-box",
            "formula": "Damage Reduction = 0.15 × (1 - 40/(SPECIAL + 40))"
          },
          {
            "type": "paragraph",
            "text": "At 7 SPECIAL: Enemies deal 97.65% damage (~2.35% reduction)<br>At 20 SPECIAL: Enemies deal 95.59% damage (~4.41% reduction)<br>At 40 SPECIAL: Enemies deal 92.50% damage (~7.50% reduction)<br>At 60 SPECIAL: Enemies deal 91.82% damage (~8.18% reduction)<br>Maximum: 85% enemy damage (15% reduction, asymptotic limit)"
          },
          {
            "type": "paragraph",
            "text": "Each hit weakens the enemy's next attack, reducing their damage output. The weaken effect stacks with SPECIAL investment but scales slowly - even at very high SPECIAL values, the reduction approaches but never exceeds 15%. This provides consistent defensive utility throughout the fight."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Additional Effects"
          },
          {
            "type": "formula-box",
            "formula": "Extra Range: +0.5m attack range while Neurotoxin is active"
          },
          {
            "type": "info-box",
            "text": "<strong style=\"color: var(--accent-cyan);\">Multi-Layered Utility:</strong> Neurotoxin combines offensive (damage boost), control (stun), and defensive (weaken) mechanics into a single ability. This versatility makes Snekles valuable in diverse combat scenarios despite low base offensive stats."
          }
        ]
      },
      {
        "title": "📈 Stat Scaling",
        "content": [
          {
            "type": "paragraph",
            "text": "Understanding Snekles' unique stat scaling is crucial for maximizing performance. The extreme base stat distribution creates unusual scaling priorities compared to other companions."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "🗡️ STR (Strength) → Damage"
          },
          {
            "type": "formula-box",
            "formula": "Damage = (1 × 0.55 + STR × 0.025 × 0.5) = 0.55 + STR × 0.0125"
          },
          {
            "type": "paragraph",
            "text": "Each point of STR increases damage by <span class=\"stat-highlight\">1.25%</span>. Despite low base STR (3), the scaling is reasonable. However, with Neurotoxin providing +35-101% damage from SPECIAL, STR investment is less impactful than for most companions."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "⚡ DEX (Dexterity) → Attack Speed"
          },
          {
            "type": "formula-box",
            "formula": "Attack Speed = (1 + DEX × 0.004 × 3.0) = 1 + DEX × 0.012"
          },
          {
            "type": "paragraph",
            "text": "Each point of DEX increases attack speed by <span class=\"stat-highlight\">1.2%</span>. Moderate scaling, but important for Snekles due to proc-based mechanics. More attacks means more stun chances and consistent weaken application."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "🛡️ CON (Constitution) → Stamina"
          },
          {
            "type": "formula-box",
            "formula": "Max Stamina = 5 + CON × 1"
          },
          {
            "type": "formula-box",
            "formula": "Regen Per Second = (1 × 0.8 + CON × 0.025 × 1.6) = 0.8 + CON × 0.04"
          },
          {
            "type": "paragraph",
            "text": "Each point of CON adds <span class=\"stat-highlight\">1 max stamina</span> and <span class=\"stat-highlight\">0.04 stamina/sec</span> regeneration. Neurotoxin costs 2 activation + 1 per attack, making stamina management critical for sustained combat."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "🎲 LUCK → Critical Hits"
          },
          {
            "type": "formula-box",
            "formula": "Crit Chance = (1 × 1.0 + LUCK × 0.025 × 1.8) = 1 + LUCK × 0.045"
          },
          {
            "type": "formula-box",
            "formula": "Crit Damage = (1 × 0.7 + LUCK × 0.025 × 1.4) = 0.7 + LUCK × 0.035"
          },
          {
            "type": "paragraph",
            "text": "Each point of LUCK adds <span class=\"stat-highlight\">0.045% crit chance</span> and <span class=\"stat-highlight\">0.035 crit damage</span>. With base LUCK=23 (highest of all companions), Snekles starts with strong crit potential and scales it extremely well. This is Snekles' primary damage source given low STR."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "✨ SPECIAL → Ability Effectiveness"
          },
          {
            "type": "formula-box",
            "formula": "Damage Boost = 0.21 + SPECIAL × 0.02 (2% per point)"
          },
          {
            "type": "formula-box",
            "formula": "Stun Duration = 1.35 × (1 - 32/(SPECIAL + 31))"
          },
          {
            "type": "formula-box",
            "formula": "Enemy Damage Reduction = 0.15 × (1 - 40/(SPECIAL + 40))"
          },
          {
            "type": "formula-box",
            "formula": "Stamina Bonus = SPECIAL × 0.025 × 8.0 = SPECIAL × 0.2"
          },
          {
            "type": "paragraph",
            "text": "SPECIAL is Snekles' most versatile stat. Each point adds <span class=\"stat-highlight\">2% damage boost</span>, increases stun duration, improves weaken effectiveness, and provides <span class=\"stat-highlight\">0.2 max stamina</span>. The high stamina bonus (0.2 vs typical 0.0625) makes SPECIAL particularly valuable for sustained Neurotoxin uptime."
          }
        ]
      },
      {
        "title": "⚔️ Combat Strategy",
        "content": [
          {
            "type": "heading",
            "level": 3,
            "text": "Proc-Based Combat Flow"
          },
          {
            "type": "paragraph",
            "text": "Snekles relies on probabilistic effects rather than guaranteed burst windows. The 15% stun chance means you'll see stuns roughly every 6-7 attacks. Combined with critical hits (high LUCK) and consistent weaken effects, combat becomes a sustained war of attrition where Snekles gradually degrades enemy effectiveness while landing powerful critical strikes."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Stamina Management"
          },
          {
            "type": "paragraph",
            "text": "Neurotoxin costs 2 activation + 1 per attack. With base stamina of 5 + CON + (SPECIAL × 0.2), you can afford extended combat sequences. Unlike burst companions, Snekles benefits from keeping Neurotoxin active continuously rather than timing short windows. Plan your stamina investments to support sustained aggression."
          },
          {
            "type": "info-box",
            "text": "<strong style=\"color: var(--accent-cyan);\">Sustained Pressure:</strong> Unlike burst companions (Jindo, MechaBird), Snekles excels when Neurotoxin stays active across entire fights. The weaken effect, stun procs, and damage boost create cumulative advantages that compound over time."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Defensive Utility Value"
          },
          {
            "type": "paragraph",
            "text": "The weaken effect reduces enemy damage by 2-8% per hit (scaling with SPECIAL). While modest compared to Acornelius' 50% reduction, it's always-on and stacks with the 15% stun chance. Together, these effects create significant survivability improvements through offensive pressure - enemies that are stunned or weakened can't deal damage effectively."
          },
          {
            "type": "heading",
            "level": 3,
            "text": "Critical Hit Dependency"
          },
          {
            "type": "paragraph",
            "text": "With STR=3 (lowest), your non-crit damage will be weak even with Neurotoxin's boost. Fortunately, LUCK=23 (highest) ensures frequent critical hits. Your damage output is polarized - weak non-crits but devastating critical strikes. This creates variance but averages out to competitive DPS when built correctly."
          },
          {
            "type": "warning-box",
            "text": "<strong style=\"color: var(--accent-orange);\">Low Floor, High Ceiling:</strong> Snekles has the weakest base offensive stats (STR=3, DEX=3) but the highest LUCK (23). This creates a feast-or-famine damage pattern where critical hits carry your damage output. Low LUCK investment makes Snekles feel weak; proper stat allocation makes Snekles devastating."
          }
        ]
      },
      {
        "title": "🎯 Recommended Builds",
        "content": [
          {
            "type": "build-card",
            "name": "🎲 Critical Utility Build (Recommended)",
            "description": "Maximizes Snekles' natural strengths. High LUCK (0.045% crit/point, 0.035 crit dmg/point) compensates for low STR by making critical hits frequent and powerful. SPECIAL amplifies Neurotoxin damage (+2%/point) and extends utility effects. DEX increases attack frequency for more stun/weaken procs. This build embraces the critical-focused design while maintaining utility value.",
            "priority": "LUCK > SPECIAL > DEX > CON > STR"
          },
          {
            "type": "build-card",
            "name": "🛡️ Utility Tank Build",
            "description": "Focuses on Neurotoxin uptime and defensive utility. High SPECIAL provides damage boost, strong weaken effects, long stun durations, and massive stamina pool (0.2/point). CON adds stamina for sustained combat. This build excels in long fights where consistent debuffs and defensive utility outweigh burst damage potential.",
            "priority": "SPECIAL > CON > LUCK > DEX > STR"
          },
          {
            "type": "build-card",
            "name": "⚡ Speed Proc Build",
            "description": "Maximizes attack frequency to trigger stuns (15% chance) and critical hits. With low base DEX (3), heavy investment is required to reach competitive attack speeds, but the 1.2% scaling is decent. More attacks means more chances to stun, more weaken applications, and more crit opportunities. Best for players who want consistent proc-based gameplay.",
            "priority": "DEX > LUCK > SPECIAL > CON > STR"
          }
        ]
      }
    ]
  }
};
