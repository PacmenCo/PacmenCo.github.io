// Central source of truth for all tooltips
const TOOLTIP_CONTENT = {
  'item-types': [
    'Weapon', 'Armor', 'Helm', 'Legs',
    'Boots', 'Gloves', 'Ring', 'Trinket'
  ],
  'affixes': 'Magical properties on an item - ie Health Point, Critical Strike Rating and so on..',
  'rarity': 'The \'tier\' of the item - ie <span class="rarity-rare">Rare</span>, <span class="rarity-epic">Epic</span>, <span class="rarity-legendary">Legendary</span>',
  'quality': 'Numerical stat multiplier for items - improves stats like <strong>Attack</strong> and <strong>Armor</strong> (<strong>Companions</strong> also benefit from it!)',

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
  'orb-soulstone': 'Adds +1 max soul level'
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
        // For lists like item types
        const formattedItems = content.map(item => `<strong>${item}</strong>`).join(', ');
        tooltipSpan.innerHTML = `Item types: ${formattedItems}`;
      } else {
        // For text descriptions like affixes
        tooltipSpan.innerHTML = content;
      }

      element.appendChild(tooltipSpan);
    }
  });
});
