# Game Element Highlighting Rules

This document defines the styling rules for Currencies, Orbs, and Rarities highlighting across all pages.

## Color Values (from Unity Code)

### Currencies (from Colors.cs and ChooseVIPItem.cs)

- **Pixels**: `#FBFF00` (bright yellow) - from `Colors.pixelColor`
- **Voxels**: `#E18700` (orange) - from `Colors.voxelColorForShops`
- **Crystals**: `#00FF00` (bright green) - from `Colors.enchantingMatsForShops`
- **Valor Points**: `#FFD700` (gold) - from `ChooseVIPItem.cs` (Guild Boss currency)

### Alteration Orbs (from AlterationManager.cs)

- **Orb of Alteration**: `#00D6FF` (cyan-blue)
- **Orb of Revision**: `#0800DB` (dark blue)
- **Orb of Reversal**: `#D728FF` (magenta)
- **Orb of Nullification**: `#141414` (dark gray)
- **Orb of Transformation**: `#00FFAA` (cyan-green)
- **Orb of Divination**: `#CAFF00` (yellow-green)
- **Orb of Fortune**: `#FFFC00` (bright yellow)
- **Radiant Orb**: `#FF0300` (bright red)
- **Armor Plate**: `#FFA500` (orange - uses Legendary color)
- **Sharpening Stone**: `#e3e0f5` (light lavender)
- **Soulstone**: `#a21b90` (dark magenta)

### Item Rarities (from Colors.cs itemColor function)

- **Broken**: `#C0C0C0` (silver)
- **Poor**: `#B6B6B4` (gray)
- **Common**: `#FFFFFF` (white)
- **Uncommon**: `#00FF00` (green)
- **Rare**: `#0000FF` (blue)
- **Epic**: `#800080` (purple)
- **Legendary**: `#FFA500` (orange)
- **Artifact**: `#FF0000` (red)

## CSS Variables

Add these to your `:root` or CSS variables section:

```css
:root {
  /* Currencies */
  --pixel-color: #FBFF00;
  --voxel-color: #E18700;
  --crystal-color: #00FF00;
  --valor-color: #FFD700;

  /* Alteration Orbs */
  --orb-alteration-color: #00D6FF;
  --orb-revision-color: #0800DB;
  --orb-reversal-color: #D728FF;
  --orb-nullification-color: #141414;
  --orb-transformation-color: #00FFAA;
  --orb-divination-color: #CAFF00;
  --orb-fortune-color: #FFFC00;
  --orb-radiant-color: #FF0300;
  --orb-armor-plate-color: #FFA500;
  --orb-sharpening-stone-color: #e3e0f5;
  --orb-soulstone-color: #a21b90;

  /* Item Rarities */
  --rarity-broken-color: #C0C0C0;
  --rarity-poor-color: #B6B6B4;
  --rarity-common-color: #FFFFFF;
  --rarity-uncommon-color: #00FF00;
  --rarity-rare-color: #0000FF;
  --rarity-epic-color: #800080;
  --rarity-legendary-color: #FFA500;
  --rarity-artifact-color: #FF0000;
}
```

## CSS Classes

Add these classes to your stylesheet:

```css
/* Currency Highlighting */
.pixel-highlight {
  color: var(--pixel-color);
  font-weight: 600;
}

.voxel-highlight {
  color: var(--voxel-color);
  font-weight: 600;
}

.crystal-highlight {
  color: var(--crystal-color);
  font-weight: 600;
}

.valor-highlight {
  color: var(--valor-color);
  font-weight: 600;
}

/* Orb Highlighting */
.orb-alteration {
  color: var(--orb-alteration-color);
  font-weight: 600;
}

.orb-revision {
  color: var(--orb-revision-color);
  font-weight: 600;
}

.orb-reversal {
  color: var(--orb-reversal-color);
  font-weight: 600;
}

.orb-nullification {
  color: var(--orb-nullification-color);
  font-weight: 600;
}

.orb-transformation {
  color: var(--orb-transformation-color);
  font-weight: 600;
}

.orb-divination {
  color: var(--orb-divination-color);
  font-weight: 600;
}

.orb-fortune {
  color: var(--orb-fortune-color);
  font-weight: 600;
}

.orb-radiant {
  color: var(--orb-radiant-color);
  font-weight: 600;
}

.orb-armor-plate {
  color: var(--orb-armor-plate-color);
  font-weight: 600;
}

.orb-sharpening-stone {
  color: var(--orb-sharpening-stone-color);
  font-weight: 600;
}

.orb-soulstone {
  color: var(--orb-soulstone-color);
  font-weight: 600;
}

/* Rarity Highlighting */
.rarity-broken {
  color: var(--rarity-broken-color);
  font-weight: 600;
}

.rarity-poor {
  color: var(--rarity-poor-color);
  font-weight: 600;
}

.rarity-common {
  color: var(--rarity-common-color);
  font-weight: 600;
}

.rarity-uncommon {
  color: var(--rarity-uncommon-color);
  font-weight: 600;
}

.rarity-rare {
  color: var(--rarity-rare-color);
  font-weight: 600;
}

.rarity-epic {
  color: var(--rarity-epic-color);
  font-weight: 600;
}

.rarity-legendary {
  color: var(--rarity-legendary-color);
  font-weight: 600;
}

.rarity-artifact {
  color: var(--rarity-artifact-color);
  font-weight: 600;
}
```

## Highlighting Rules

### Rule 0: Capitalization Standard
**ALWAYS capitalize currency terms consistently:**

- **Pixels** (capital P) - never "pixels" unless mid-sentence grammatically requires lowercase
- **Voxels** (capital V) - never "voxels" unless mid-sentence grammatically requires lowercase
- **Crystals** (capital C) - never "crystals" unless mid-sentence grammatically requires lowercase
- **Valor Points** (both words capitalized) - never "valor points" or "Valor points"
- **Valor** (capital V when used standalone)

```html
<!-- CORRECT -->
<span class="pixel-highlight">Pixels</span>
<span class="voxel-highlight">Voxels</span>
<span class="crystal-highlight">Crystals</span>
<span class="valor-highlight">Valor Points</span>
<span class="valor-highlight">Valor</span>

<!-- INCORRECT -->
<span class="pixel-highlight">pixels</span>
<span class="voxel-highlight">voxels</span>
<span class="crystal-highlight">crystals</span>
<span class="valor-highlight">valor points</span>
<span class="valor-highlight">Valor points</span>
```

**Important:** When "Valor Points" appears together, BOTH words must be inside the same highlight span:
```html
<!-- CORRECT -->
<span class="valor-highlight">Valor Points</span>

<!-- INCORRECT -->
<span class="valor-highlight">Valor</span> Points
<span class="valor-highlight">Valor</span> points
```

### Rule 1: Currency Names
Always highlight currency names when they appear in regular text (with proper capitalization per Rule 0):

**Important Exceptions - Do NOT highlight:**
- Currency names in headlines (h1, h2, h3, h4, h5, h6 tags)
- "Valor Shop" when referring to the shop/feature name (proper noun), not the currency
- Proper nouns or feature names that contain currency words

```html
<!-- CORRECT -->
<span class="pixel-highlight">Pixels</span>
<span class="voxel-highlight">Voxels</span>
<span class="crystal-highlight">Crystals</span>
<span class="valor-highlight">Valor</span>
<span class="valor-highlight">Valor Points</span>

<!-- Proper currency usage -->
Spend your <span class="valor-highlight">Valor Points</span> wisely.
Earn <span class="valor-highlight">Valor</span> from guild bosses.

<!-- Exceptions (NO highlighting) -->
<h2>Valor Shop</h2>
<h3>Valor (Player Currency)</h3>
Purchase buffs through your guild's Valor Shop.

<!-- INCORRECT -->
Pixels (no highlighting in regular text)
<h2><span class="valor-highlight">Valor</span> Shop</h2> (highlighting in headline)
your guild's <span class="valor-highlight">Valor</span> Shop (highlighting proper noun)
```

### Rule 2: Numbers with Currency
When a number appears directly with a currency, include BOTH in the highlight (with proper capitalization per Rule 0):

```html
<!-- CORRECT -->
<span class="pixel-highlight">5,000 Pixels</span>
<span class="voxel-highlight">20 Voxels</span>
<span class="crystal-highlight">100 Crystals</span>
<span class="valor-highlight">500 Valor</span>
<span class="valor-highlight">1,000 Valor Points</span>

<!-- INCORRECT -->
5,000 <span class="pixel-highlight">Pixels</span> (number outside highlight)
<span class="voxel-highlight">20</span> Voxels (currency outside highlight)
100 <span class="crystal-highlight">Crystals</span> (number outside highlight)
```

### Rule 3: Numbers in Descriptive Context
When numbers appear with descriptive words (like "base" or "infusion"), highlight ONLY the numbers:

```html
<!-- CORRECT -->
<span class="voxel-highlight">30 Voxels</span> (<span class="voxel-highlight">20</span> base + <span class="voxel-highlight">10</span> infusion)
<span class="crystal-highlight">150 Crystals</span> (<span class="crystal-highlight">100</span> base + <span class="crystal-highlight">50</span> bonus)

<!-- INCORRECT -->
<span class="voxel-highlight">30 Voxels (20 base + 10 infusion)</span>
30 Voxels (20 base + 10 infusion)
<span class="crystal-highlight">150 Crystals (100 base + 50 bonus)</span>
```

### Rule 4: Formulas and Code Blocks
DO NOT apply color highlighting inside formula boxes or code-like displays:

```html
<!-- CORRECT -->
<div class="formula-box">
  Final Cost = Pixels (Base cost) + Voxels (Base cost) + Voxels (Infusion amount)
</div>
<div class="formula-box">
  Enchanting Cost = Pixels + Crystals
</div>

<!-- INCORRECT -->
<div class="formula-box">
  Final Cost = <span class="pixel-highlight">Pixels</span> (Base cost) + <span class="voxel-highlight">Voxels</span> (Base cost)
</div>
<div class="formula-box">
  Enchanting Cost = <span class="pixel-highlight">Pixels</span> + <span class="crystal-highlight">Crystals</span>
</div>
```

### Rule 5: Table Data
Apply highlighting to currency amounts in tables, including numbers:

```html
<!-- CORRECT -->
<td><span class="voxel-highlight">5 voxels</span></td>
<td><span class="voxel-highlight">+5 Voxels</span></td>
<td><span class="crystal-highlight">100 Crystals</span></td>

<!-- INCORRECT -->
<td>5 voxels</td>
<td>+5 Voxels</td>
<td>100 Crystals</td>
```

### Rule 6: Combined with Strong Tags
When currency is already bolded, the color class should be on the outer element:

```html
<!-- CORRECT -->
<strong class="pixel-highlight">Pixels</strong>
<strong class="voxel-highlight">voxels</strong>
<strong class="crystal-highlight">Crystals</strong>

<!-- ALSO ACCEPTABLE -->
<span class="pixel-highlight"><strong>Pixels</strong></span>
<span class="crystal-highlight"><strong>Crystals</strong></span>

<!-- INCORRECT -->
<strong>Pixels</strong>
<strong>Crystals</strong>
```

## Examples

### Good Examples

```html
<!-- Info boxes -->
<div class="info-box">
  Item crafting requires <span class="pixel-highlight">Pixels</span> and <span class="voxel-highlight">Voxels</span>.
</div>

<div class="info-box">
  Enchanting requires <span class="pixel-highlight">Pixels</span> and <span class="crystal-highlight">Crystals</span>.
</div>

<!-- Cost examples -->
<p>
  If an item costs <span class="pixel-highlight">5,000 Pixels</span> + <span class="voxel-highlight">20 Voxels</span>
</p>

<p>
  Enchanting costs <span class="pixel-highlight">10,000 Pixels</span> + <span class="crystal-highlight">50 Crystals</span>
</p>

<!-- Lists -->
<li>Use <span class="voxel-highlight">5-10 voxels</span> when crafting important gear</li>
<li>Earn <span class="crystal-highlight">crystals</span> by defeating enemies and opening chests</li>

<!-- FAQ answers -->
<div class="faq-answer">
  Using <span class="voxel-highlight">10 voxels</span> maximizes your chances of getting Epic items.
</div>

<div class="faq-answer">
  You can obtain <span class="crystal-highlight">Crystals</span> through combat and treasure chests.
</div>
```

### Edge Cases

#### Lowercase vs Uppercase
- Both "Pixels" and "pixels" should be highlighted
- Both "Voxels", "voxels", and "voxel" should be highlighted
- Both "Crystals", "crystals", and "crystal" should be highlighted

#### Ranges
```html
<span class="voxel-highlight">0-10 voxels</span>
<span class="voxel-highlight">5-10 voxels</span>
<span class="crystal-highlight">50-100 Crystals</span>
```

#### With Parenthetical Info
```html
<span class="voxel-highlight">Voxels</span> (premium currency)
<span class="crystal-highlight">Crystals</span> (enchanting materials)
maximum <span class="voxel-highlight">10 voxels</span>
requires <span class="crystal-highlight">100 Crystals</span>
```

## Orb Highlighting Rules

Apply the same rules as currencies to orb names:

```html
<!-- CORRECT -->
<span class="orb-alteration">Orb of Alteration</span>
<span class="orb-fortune">Orb of Fortune</span>
<span class="orb-radiant">Radiant Orb</span>
<span class="orb-armor-plate">Armor Plate</span>
<span class="orb-soulstone">Soulstone</span>

<!-- With numbers -->
<span class="orb-alteration">8 Orbs of Alteration</span>
<span class="orb-radiant">1 Radiant Orb</span>

<!-- INCORRECT -->
Orb of Alteration
8 Orbs of Alteration
```

## Rarity Highlighting Rules

Apply rarity highlighting to all rarity tier names:

```html
<!-- CORRECT -->
<span class="rarity-common">Common</span>
<span class="rarity-rare">Rare</span>
<span class="rarity-epic">Epic</span>
<span class="rarity-legendary">Legendary</span>
<span class="rarity-artifact">Artifact</span>

<!-- INCORRECT -->
Common
Legendary
```

**Note:** The items-crafting.html page already has these classes defined (rarity-broken, rarity-poor, etc.) - use those same class names consistently across all pages.

## Item Type Tooltips

### Purpose
Display an interactive tooltip when users hover over "item type" or "Item Type" text, showing all available equipment slots.

### Tooltip Content
```
Item types: Weapon, Armor, Helm, Legs, Boots, Gloves, Ring, Trinket
```

### Implementation

**1. CSS Styling**
Add tooltip CSS to the page:
```css
/* Tooltip Styling */
.tooltip {
  position: relative;
  border-bottom: 1px dotted var(--accent-cyan);
  cursor: help;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 200px;
  background-color: var(--bg-card);
  color: var(--text-primary);
  text-align: left;
  border-radius: 8px;
  padding: 0.75rem;
  border: 2px solid var(--accent-cyan);
  position: absolute;
  z-index: 1000;
  bottom: 125%;
  left: 50%;
  margin-left: -100px;
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 0.9rem;
  line-height: 1.4;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: var(--accent-cyan) transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
```

**2. HTML Structure**
Wrap "item type" or "Item Type" text:
```html
<strong><span class="tooltip" data-tooltip="item-types">item type</span></strong>
```
or
```html
<strong><span class="tooltip" data-tooltip="item-types">Item Type</span></strong>
```

**3. JavaScript (tooltips.js)**
Create `/tooltips.js` file:
```javascript
// Central source of truth for all tooltips
const TOOLTIP_CONTENT = {
  'item-types': 'Weapon, Armor, Helm, Legs, Boots, Gloves, Ring, Trinket'
};

// Initialize tooltips immediately - runs synchronously
(function initializeTooltips() {
  const tooltipText = 'Item types: ' + TOOLTIP_CONTENT['item-types'];

  document.querySelectorAll('[data-tooltip="item-types"]').forEach(element => {
    if (!element.querySelector('.tooltiptext')) {
      const tooltipSpan = document.createElement('span');
      tooltipSpan.className = 'tooltiptext';
      tooltipSpan.textContent = tooltipText;
      element.appendChild(tooltipSpan);
    }
  });
})();
```

**4. Script Tag**
Add before closing `</body>`:
```html
<script src="tooltips.js"></script>
```

### Updating Item Types
To add/remove item types, edit the `TOOLTIP_CONTENT` object in `tooltips.js`. All pages update automatically.

## Affixes Tooltips

### Purpose
Display an interactive tooltip when users hover over "affixes" or "Affixes" text, explaining what affixes are in the game context.

### Tooltip Content
```
Magical properties on an item - ie Health Point, Critical Strike Rating and so on..
```

### Implementation

**1. Add to tooltips.js**
Update the `TOOLTIP_CONTENT` object:
```javascript
const TOOLTIP_CONTENT = {
  'item-types': [
    'Weapon', 'Armor', 'Helm', 'Legs',
    'Boots', 'Gloves', 'Ring', 'Trinket'
  ],
  'affixes': 'Magical properties on an item - ie Health Point, Critical Strike Rating and so on..'
};
```

**2. HTML Structure**
Wrap "affixes" or "Affixes" text:
```html
<span class="tooltip" data-tooltip="affixes">affixes</span>
```
or
```html
<span class="tooltip" data-tooltip="affixes">Affixes</span>
```

**Example Usage:**
```html
<!-- In a sentence -->
Items can have multiple <span class="tooltip" data-tooltip="affixes">affixes</span> that grant powerful bonuses.

<!-- Capitalized -->
<span class="tooltip" data-tooltip="affixes">Affixes</span> are randomly generated when items drop.
```

### When to Apply
- Apply the tooltip whenever "affixes" appears in relation to **item affixes** (magical properties on equipment)
- Do NOT apply to unrelated uses of the word "affixes" in other contexts

### Important Notes
- **Bold Formatting**: All affix tooltips should be wrapped in `<strong>` tags since "affixes" is a technical game term
- **No Tooltips in Headlines**: Do not apply tooltips to affixes in h1-h6 tags, summary tags, or th (table header) tags

**Example with Bold:**
```html
<strong><span class="tooltip" data-tooltip="affixes">affixes</span></strong>
```

## Orb Tooltips

### Purpose
Display interactive tooltips when users hover over orb names, explaining what each orb does. Orbs are items used for altering equipment properties in the game.

### The 11 Orbs

All orb tooltips should use both the **orb-specific CSS class** (for color) and the **tooltip class** (for functionality):

```html
<span class="tooltip orb-[class-name]" data-tooltip="orb-[class-name]">Orb Name</span>
```

### Orb List

1. **Orb of Alteration** (`orb-alteration`)
   - Tooltip: "Rerolls ONE random affix"
   - Color: `#00D6FF` (cyan-blue)

2. **Orb of Transformation** (`orb-transformation`)
   - Tooltip: "Adds ONE random affix (up to 3 affixes)"
   - Color: `#00FFAA` (cyan-green)

3. **Orb of Reversal** (`orb-reversal`)
   - Tooltip: "Removes ONE random affix"
   - Color: `#D728FF` (magenta)

4. **Armor Plate** (`orb-armor-plate`)
   - Tooltip: "+1% armor quality"
   - Color: `#FFA500` (orange)

5. **Sharpening Stone** (`orb-sharpening-stone`)
   - Tooltip: "+1% weapon quality"
   - Color: `#e3e0f5` (light lavender)

6. **Orb of Revision** (`orb-revision`)
   - Tooltip: "Rerolls ALL affixes"
   - Color: `#0800DB` (dark blue)

7. **Orb of Nullification** (`orb-nullification`)
   - Tooltip: "Removes ALL affixes"
   - Color: `#141414` (dark gray)

8. **Orb of Fortune** (`orb-fortune`)
   - Tooltip: "Rerolls item quality/rarity (50% break chance)"
   - Color: `#FFFC00` (bright yellow)

9. **Orb of Divination** (`orb-divination`)
   - Tooltip: "Adds 1-3 random affixes (item must have exactly 2 affixes)"
   - Color: `#CAFF00` (yellow-green)

10. **Radiant Orb** (`orb-radiant`)
    - Tooltip: "Upgrades rarity by 1 tier (10-20% break chance)"
    - Color: `#FF0300` (bright red)

11. **Soulstone** (`orb-soulstone`)
    - Tooltip: "Adds +1 max soul level"
    - Color: `#a21b90` (dark magenta)

### Implementation

**1. Update tooltips.js**
Add all orb descriptions to the `TOOLTIP_CONTENT` object:
```javascript
const TOOLTIP_CONTENT = {
  'item-types': [
    'Weapon', 'Armor', 'Helm', 'Legs',
    'Boots', 'Gloves', 'Ring', 'Trinket'
  ],
  'affixes': 'Magical properties on an item - ie Health Point, Critical Strike Rating and so on..',

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
```

**2. HTML Structure**
Wrap orb names with BOTH the tooltip class AND the orb-specific class:

```html
<!-- Orb of Divination -->
<span class="tooltip orb-divination" data-tooltip="orb-divination">Orb of Divination</span>

<!-- Armor Plate -->
<span class="tooltip orb-armor-plate" data-tooltip="orb-armor-plate">Armor Plate</span>

<!-- Radiant Orb -->
<span class="tooltip orb-radiant" data-tooltip="orb-radiant">Radiant Orb</span>
```

**Important:** The orb-specific class MUST come after "tooltip" to ensure proper color styling.

### Example Usage

```html
<!-- In sentences -->
Use <span class="tooltip orb-divination" data-tooltip="orb-divination">Orb of Divination</span> to create powerful 5-affix items.

The <span class="tooltip orb-armor-plate" data-tooltip="orb-armor-plate">Armor Plate</span> provides safe quality upgrades.

<!-- In lists -->
<li><span class="tooltip orb-fortune" data-tooltip="orb-fortune">Orb of Fortune</span> has a 50% break chance</li>
<li><span class="tooltip orb-soulstone" data-tooltip="orb-soulstone">Soulstone</span> increases max soul level</li>

<!-- In tables -->
<td><span class="tooltip orb-radiant" data-tooltip="orb-radiant">Radiant Orb</span></td>
<td><span class="tooltip orb-sharpening-stone" data-tooltip="orb-sharpening-stone">Sharpening Stone</span></td>
```

### When to Apply
- Apply to ALL orb name mentions across all pages
- Include orb names in tables (e.g., the alteration orb table)
- Include orb names in regular content, FAQ answers, strategy tips, etc.
- Do NOT apply to:
  - Image alt attributes
  - JSON-LD structured data
  - Meta tags

### Special Cases

**With Bold Formatting:**
When an orb name needs to be bold, put `<strong>` tag OUTSIDE the orb span to prevent CSS specificity issues:
```html
<!-- CORRECT -->
<strong><span class="tooltip orb-armor-plate" data-tooltip="orb-armor-plate">Armor Plate</span></strong>

<!-- INCORRECT - causes color override -->
<span class="tooltip orb-armor-plate" data-tooltip="orb-armor-plate"><strong>Armor Plate</strong></span>
```

**With Numbers:**
Include the orb class and tooltip on the entire phrase:
```html
<span class="tooltip orb-alteration" data-tooltip="orb-alteration">8 Orbs of Alteration</span>
<span class="tooltip orb-radiant" data-tooltip="orb-radiant">1 Radiant Orb</span>
```

### Updating Orb Descriptions
To update orb tooltips, edit the `TOOLTIP_CONTENT` object in `tooltips.js`. All pages update automatically.

## Rarity Tooltips

### Purpose
Display an interactive tooltip when users hover over "rarity" or related terms, explaining what item rarity/tiers are with colored examples.

### Tooltip Content
```
The 'tier' of the item - ie Rare, Epic, Legendary
```

With colored examples shown in their actual game colors.

### Implementation

**1. Add to tooltips.js**
Update the `TOOLTIP_CONTENT` object:
```javascript
const TOOLTIP_CONTENT = {
  'item-types': [...],
  'affixes': '...',
  'rarity': 'The \'tier\' of the item - ie <span class="rarity-rare">Rare</span>, <span class="rarity-epic">Epic</span>, <span class="rarity-legendary">Legendary</span>',
  // Alteration Orbs
  ...
};
```

**2. HTML Structure**
Wrap "rarity" text with tooltip and bold formatting:
```html
<strong><span class="tooltip" data-tooltip="rarity">rarity</span></strong>
```

Or with capitalization:
```html
<strong><span class="tooltip" data-tooltip="rarity">Rarity</span></strong>
<strong><span class="tooltip" data-tooltip="rarity">item rarity</span></strong>
<strong><span class="tooltip" data-tooltip="rarity">Item Rarity</span></strong>
```

**Important:** Always wrap rarity tooltips in `<strong>` tags since it's a technical game term.

### Example Usage

```html
<!-- In sentences -->
Items can have different <strong><span class="tooltip" data-tooltip="rarity">rarity</span></strong> tiers.

The <strong><span class="tooltip" data-tooltip="rarity">Rarity</span></strong> affects item stats significantly.

<!-- In lists -->
<li>Check the <strong><span class="tooltip" data-tooltip="rarity">item rarity</span></strong> before upgrading</li>

<!-- In tables -->
<td><strong><span class="tooltip" data-tooltip="rarity">Rarity</span></strong></td>
```

### When to Apply
- Apply to ALL mentions of "rarity" when referring to item quality tiers
- Include variations: "rarity", "Rarity", "item rarity", "Item Rarity"
- Do NOT apply to:
  - The section heading #item-rarity on items-crafting.html
  - Meta tags or JSON-LD structured data
  - Image alt attributes
  - Unrelated uses of the word "rarity"

### Replacing Links
When converting existing rarity links to tooltips:

**Old format (links):**
```html
<a href="items-crafting.html#item-rarity">rarity</a>
```

**New format (tooltips):**
```html
<strong><span class="tooltip" data-tooltip="rarity">rarity</span></strong>
```

## Game Name Styling

### Purpose
Consistently style "Idle Adventure" (the game name) across all pages with orange color and bold weight.

### CSS Class
```css
.game-name {
  color: var(--accent-orange);
  font-weight: 600;
}
```

### HTML Structure
Wrap "Idle Adventure" text:
```html
<span class="game-name">Idle Adventure</span>
```

### When to Apply
- Apply to ALL visible instances of "Idle Adventure" in page content
- Do NOT apply to:
  - Meta tags (title, description, keywords)
  - JSON-LD structured data schemas
  - Image alt attributes
  - The main h1 logo header (which has its own styling)

**Example Usage:**
```html
<!-- In paragraphs -->
Welcome to <span class="game-name">Idle Adventure</span>!

<!-- In FAQ answers -->
<span class="game-name">Idle Adventure</span> is a pixel RPG idle game...

<!-- In descriptions -->
Master <span class="game-name">Idle Adventure</span> with our complete guide.
```

## Quick Reference Checklist

When adding game element mentions to a page:

- [ ] Added CSS color variables to `:root` (currencies, orbs, rarities)
- [ ] Added highlight classes (`.pixel-highlight`, `.valor-highlight`, `.orb-*`, `.rarity-*`, `.game-name`)
- [ ] Added tooltip CSS styles (`.tooltip`, `.tooltip .tooltiptext`, etc.)
- [ ] **Capitalized all currency terms** (Pixels, Voxels, Crystals, Valor Points - per Rule 0)
- [ ] Highlighted all currency names with proper capitalization
- [ ] Highlighted all orb names (Orb of Alteration, Radiant Orb, etc.)
- [ ] Highlighted all rarity names (Common, Rare, Epic, Legendary, Artifact, etc.)
- [ ] Applied `.game-name` class to all visible instances of "Idle Adventure"
- [ ] Included numbers when they appear with currencies or orbs
- [ ] Kept formulas/code blocks unhighlighted
- [ ] Applied to table data where game elements appear
- [ ] Checked FAQ sections
- [ ] Verified info boxes and warning boxes
- [ ] Applied highlighting consistently across all game elements
- [ ] Added item type tooltips where "item type" or "Item Type" is mentioned
- [ ] Added affixes tooltips where "affixes" or "Affixes" is mentioned (in item context, wrapped in `<strong>` tags)
- [ ] Added rarity tooltips where "rarity" or "Rarity" is mentioned (wrapped in `<strong>` tags)
- [ ] Added orb tooltips to ALL orb mentions (with both `tooltip` and `orb-*` classes)
- [ ] Verified orb tooltips use correct format: `<span class="tooltip orb-[name]" data-tooltip="orb-[name]">Orb Name</span>`
- [ ] Checked that `<strong>` tags are OUTSIDE orb spans (not inside) to prevent color override
- [ ] Converted any rarity links to tooltips (removed `<a href="items-crafting.html#item-rarity">` wrappers)
- [ ] Included tooltips.js script tag before closing `</body>`
- [ ] Updated tooltips.js with all tooltip content (item-types, affixes, rarity, orbs)
