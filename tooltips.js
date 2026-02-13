// Central source of truth for all tooltips
const TOOLTIP_CONTENT = {
  'item-types': [
    'Weapon', 'Armor', 'Helm', 'Legs',
    'Boots', 'Gloves', 'Ring', 'Trinket'
  ],
  'affixes': 'Magical properties on an item - ie Health Points, Critical Strike Rating and so on..',
  'rarity': 'The \'tier\' of the item - ie <span class="rarity-rare">Rare</span>, <span class="rarity-epic">Epic</span>, <span class="rarity-legendary">Legendary</span>',
  'quality': 'Numerical stat multiplier for items - improves stats like <strong>Attack</strong> and <strong>Armor</strong> (<strong>Companions</strong> also benefit from it!)',
  'orbs': 'Rare crafting materials that modify equipment - reroll affixes, upgrade rarity, or improve quality',

  // Alteration Orbs
  'orb-alteration': 'Rerolls ONE random affix',
  'orb-transformation': 'Adds ONE random affix (up to 3 affixes)',
  'orb-reversal': 'Removes ONE random affix',
  'orb-armor-plate': '+1% armor quality',
  'orb-sharpening-stone': '+1% weapon quality',
  'orb-revision': 'Rerolls ALL affixes',
  'orb-nullification': 'Removes ALL affixes',
  'orb-fortune': 'Rerolls item quality/rarity (50% break chance)',
  'orb-divination': 'Adds 1-3 random affixes (item must have exactly 2 affixes)',
  'orb-radiant': 'Upgrades rarity by 1 tier (10-20% break chance)',
  'orb-soulstone': 'Adds +1 max soul level',

  // Ascension Difficulties
  'ascension-modes': 'Normal, Hard, and Hardcore - each Ascension mode increases enemy difficulty and grants stronger permanent bonuses',
  'ascension-normal': 'Easiest difficulty - resets level but keeps items, grants Dream Points',
  'ascension-hard': 'Medium difficulty - locks items/currencies, increased enemy stats, grants stronger bonuses',
  'ascension-hardcore': 'Extreme difficulty - permadeath, highest enemy stats, most powerful bonuses',

  // Pet Items
  'pet-food': 'Feed to pets to instantly grant 250 XP - save for high-level pets!',

  // Progression
  'experience': 'Gain XP to level up your character and unlock new content',

  // Currencies
  'gems': 'Premium currency earned from various activities - used for special purchases',

  // Pets
  'acornelius': 'An acorn Companion',

  // Skills & Abilities
  'fortify': 'Active skill that temporarily increases your resistance, reducing incoming damage for a duration',
  'squirrel-defense': 'Acornelius\' active ability: reduces damage taken by 50% for a duration',

  // Enchantments
  'endurance-enchantment': 'Armor enchantment that grants +3% resistance per enchantment level',

  // Ascension
  'ascension-perks': 'Permanent upgrades unlocked with Dream Points after completing Normal Ascensions',

  // Combat Stats
  'rank': 'Secondary progression system - increases stats, unlocks content, and persists through Ascensions',
  'dream-points': 'Currency earned from Normal Ascensions, spent on Ascension Perks for permanent upgrades',
  'accuracy': 'Increases your hit chance against enemies - each point of net advantage grants 1.2% hit chance',
  'evasion': 'Reduces enemy hit chance against you - each point of net advantage grants 1.2% dodge chance',
  'resistance': 'Flat percentage damage reduction that works at full effectiveness regardless of enemy level',
  'loot-chance': 'Increases the probability of enemies dropping items',
  'open-wounds': 'Causes bleeding damage over time on hit',
  'reflect-damage': 'Returns a percentage of incoming damage back to the attacker',
  'talent-points': 'Passive bonuses for your character - earn 1 Talent Point for each Rank level up'
};

// Initialize tooltips on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('[data-tooltip]').forEach(element => {
    const tooltipKey = element.getAttribute('data-tooltip');
    const content = TOOLTIP_CONTENT[tooltipKey];

    if (content) {
      // Create tooltip element
      const tooltipSpan = document.createElement('span');
      tooltipSpan.className = 'tooltiptext';

      // Format content based on type
      if (Array.isArray(content)) {
        const formattedItems = content.map(item => `<strong>${item}</strong>`).join(', ');
        tooltipSpan.innerHTML = `Item types: ${formattedItems}`;
      } else {
        tooltipSpan.innerHTML = content;
      }

      element.appendChild(tooltipSpan);

      // Check if inside a table (tables have overflow that clips tooltips)
      var insideTable = element.closest('table') !== null;

      element.addEventListener('mouseenter', function() {
        if (insideTable) {
          // Use fixed positioning to escape table overflow
          var elRect = element.getBoundingClientRect();
          tooltipSpan.style.position = 'fixed';
          tooltipSpan.style.bottom = 'auto';

          // Measure tooltip
          tooltipSpan.style.visibility = 'hidden';
          tooltipSpan.style.display = 'block';
          var tipWidth = tooltipSpan.offsetWidth;
          var tipHeight = tooltipSpan.offsetHeight;
          tooltipSpan.style.visibility = '';
          tooltipSpan.style.display = '';

          // Position above the element
          tooltipSpan.style.top = (elRect.top - tipHeight - 10) + 'px';

          // Center horizontally, clamped to viewport
          var left = elRect.left + (elRect.width / 2) - (tipWidth / 2);
          if (left < 8) left = 8;
          if (left + tipWidth > window.innerWidth - 8) left = window.innerWidth - 8 - tipWidth;
          tooltipSpan.style.left = left + 'px';
          tooltipSpan.style.marginLeft = '0';
        } else {
          // Default CSS positioning with viewport clamping
          tooltipSpan.style.left = '50%';
          tooltipSpan.style.marginLeft = '-' + (tooltipSpan.offsetWidth / 2) + 'px';
          tooltipSpan.style.right = 'auto';

          requestAnimationFrame(function() {
            var rect = tooltipSpan.getBoundingClientRect();
            if (rect.left < 8) {
              tooltipSpan.style.left = '0';
              tooltipSpan.style.marginLeft = (-element.getBoundingClientRect().left + 8) + 'px';
            }
            if (rect.right > window.innerWidth - 8) {
              var overflow = rect.right - window.innerWidth + 8;
              var currentMargin = parseFloat(tooltipSpan.style.marginLeft) || -(tooltipSpan.offsetWidth / 2);
              tooltipSpan.style.marginLeft = (currentMargin - overflow) + 'px';
            }
          });
        }
      });

      element.addEventListener('mouseleave', function() {
        tooltipSpan.style.position = '';
        tooltipSpan.style.top = '';
        tooltipSpan.style.left = '';
        tooltipSpan.style.bottom = '';
        tooltipSpan.style.marginLeft = '';
        tooltipSpan.style.right = '';
      });
    }
  });
});
