// Shared Navigation Component for Idle Adventure Guide
// Injects navigation bar, menu overlay, styles, and functionality

(function() {
  'use strict';

  // Inject Lunr.js library
  const lunrScript = document.createElement('script');
  lunrScript.src = 'https://unpkg.com/lunr@2.3.9/lunr.min.js';
  document.head.appendChild(lunrScript);

  // Inject CSS styles
  const styles = `
    <style>
      /* Prevent horizontal scrolling */
      html, body {
        overflow-x: hidden;
        max-width: 100%;
      }

      /* Sticky Navigation */
      .nav-bar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        max-width: 100vw;
        background: rgba(10, 14, 26, 0.95);
        backdrop-filter: blur(10px);
        padding: 1rem 2rem;
        z-index: 1000;
        border-bottom: 1px solid rgba(124, 58, 237, 0.2);
        box-sizing: border-box;
      }

      .nav-content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1.5rem;
      }

      .nav-logo {
        font-family: 'Press Start 2P', monospace;
        font-size: 1rem;
        color: var(--accent-orange);
        text-shadow: 0 0 10px rgba(245, 158, 11, 0.5);
        text-decoration: none;
      }

      .nav-right {
        display: flex;
        align-items: center;
        gap: 1.5rem;
      }

      /* Search Bar */
      .search-container {
        position: relative;
        flex: 1;
        max-width: 400px;
      }

      .search-input {
        width: 100%;
        padding: 0.6rem 1rem 0.6rem 2.5rem;
        background: rgba(26, 31, 53, 0.8);
        border: 1px solid rgba(124, 58, 237, 0.3);
        border-radius: 8px;
        color: var(--text-primary);
        font-size: 0.9rem;
        transition: all 0.3s ease;
        outline: none;
      }

      .search-input:focus {
        border-color: var(--accent-purple);
        box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.2);
      }

      .search-input::placeholder {
        color: var(--text-secondary);
      }

      .search-icon {
        position: absolute;
        left: 0.75rem;
        top: 50%;
        transform: translateY(-50%);
        color: var(--accent-cyan);
        pointer-events: none;
      }

      .search-results {
        position: absolute;
        top: calc(100% + 0.5rem);
        left: 0;
        right: 0;
        background: var(--bg-card);
        border: 2px solid rgba(124, 58, 237, 0.4);
        border-radius: 8px;
        max-height: 400px;
        overflow-y: auto;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
        display: none;
        z-index: 1002;
      }

      .search-results.active {
        display: block;
      }

      .search-result-item {
        padding: 1rem;
        border-bottom: 1px solid rgba(124, 58, 237, 0.2);
        cursor: pointer;
        transition: all 0.2s ease;
        text-decoration: none;
        display: block;
      }

      .search-result-item:last-child {
        border-bottom: none;
      }

      .search-result-item:hover {
        background: rgba(124, 58, 237, 0.2);
        transform: translateX(3px);
      }

      .search-result-title {
        color: var(--accent-cyan);
        font-weight: 600;
        font-size: 1rem;
        margin-bottom: 0.25rem;
        display: block;
      }

      .search-result-item:hover .search-result-title {
        color: var(--accent-orange);
      }

      .search-result-desc {
        color: var(--text-secondary);
        font-size: 0.875rem;
      }

      .search-no-results {
        padding: 1.5rem;
        text-align: center;
        color: var(--text-secondary);
      }

      .faq-link {
        color: var(--accent-cyan);
        text-decoration: none;
        font-weight: 600;
        font-size: 0.95rem;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .faq-link:hover {
        color: var(--accent-orange);
      }

      .burger-menu {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 4px;
        z-index: 1001;
      }

      .burger-menu span {
        display: block;
        width: 25px;
        height: 3px;
        background: var(--accent-orange);
        transition: all 0.3s ease;
      }

      .burger-menu.active span:nth-child(1) {
        transform: rotate(45deg) translateY(7px);
      }

      .burger-menu.active span:nth-child(2) {
        opacity: 0;
      }

      .burger-menu.active span:nth-child(3) {
        transform: rotate(-45deg) translateY(-7px);
      }

      .menu-overlay {
        position: fixed;
        top: 0;
        right: -100%;
        width: 100%;
        max-width: 400px;
        height: 100vh;
        background: var(--bg-card);
        border-left: 2px solid var(--accent-purple);
        padding: 5rem 2rem 2rem;
        transition: right 0.3s ease;
        z-index: 999;
        overflow-y: auto;
        box-shadow: -4px 0 20px rgba(0, 0, 0, 0.5);
      }

      .menu-overlay.active {
        right: 0;
      }

      .menu-overlay h3 {
        color: var(--accent-orange);
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
        font-family: 'Press Start 2P', monospace;
        font-size: 1rem;
      }

      .menu-items {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .menu-items li {
        border-radius: 8px;
        transition: all 0.3s ease;
      }

      .menu-link {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        padding: 1rem;
        background: rgba(124, 58, 237, 0.1);
        border-radius: 8px;
        text-decoration: none;
        transition: all 0.3s ease;
        border: 1px solid transparent;
      }

      .menu-link:hover {
        background: rgba(124, 58, 237, 0.2);
        border-color: var(--accent-purple);
        transform: translateX(5px);
      }

      .feature-name {
        color: var(--text-primary);
        font-weight: 600;
        font-size: 1rem;
      }

      .feature-desc {
        color: var(--text-secondary);
        font-size: 0.875rem;
      }

      /* Responsive adjustments */
      @media (max-width: 768px) {
        .nav-bar {
          padding: 1rem;
        }

        .nav-logo {
          font-size: 0.75rem;
        }

        .search-container {
          max-width: 200px;
        }

        .search-input {
          font-size: 0.85rem;
          padding: 0.5rem 0.75rem 0.5rem 2.25rem;
        }

        .faq-link {
          font-size: 0.85rem;
        }

        .nav-right {
          gap: 1rem;
        }

        .menu-overlay {
          max-width: 100%;
        }
      }

      @media (max-width: 375px) {
        .nav-logo {
          font-size: 0.65rem;
        }

        .search-container {
          max-width: 150px;
        }

        .search-input {
          font-size: 0.75rem;
          padding: 0.4rem 0.5rem 0.4rem 2rem;
        }

        .search-icon {
          left: 0.5rem;
          font-size: 0.85rem;
        }

        .faq-link {
          font-size: 0.75rem;
          gap: 0.25rem;
        }

        .nav-right {
          gap: 0.75rem;
        }
      }
    </style>
  `;

  // Navigation HTML
  const navHTML = `
    <nav class="nav-bar">
      <div class="nav-content">
        <a href="index.html" class="nav-logo">IDLE ADVENTURE</a>
        <div class="search-container">
          <span class="search-icon">🔍</span>
          <input
            type="text"
            class="search-input"
            id="searchInput"
            placeholder="Search site..."
            autocomplete="off"
          />
          <div class="search-results" id="searchResults"></div>
        </div>
        <div class="nav-right">
          <a href="faq.html" class="faq-link">FAQ</a>
          <button class="burger-menu" id="burgerMenu" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>

    <div class="menu-overlay" id="menuOverlay">
      <h3>FEATURES</h3>
      <ul class="menu-items">
        <li>
          <a href="combat.html" class="menu-link">
            <span class="feature-name">⚔️ Combat Mechanics</span>
            <span class="feature-desc">Explore combat systems and mechanics in depth</span>
          </a>
        </li>
        <li>
          <a href="companions.html" class="menu-link">
            <span class="feature-name">🐾 Loyal Companions</span>
            <span class="feature-desc">Recruit unique companions with special abilities</span>
          </a>
        </li>
        <li>
          <a href="pets.html" class="menu-link">
            <span class="feature-name">🦊 Pets</span>
            <span class="feature-desc">Level pets for permanent bonuses and equipped stats</span>
          </a>
        </li>
        <li>
          <a href="skills.html" class="menu-link">
            <span class="feature-name">⚡ Skills</span>
            <span class="feature-desc">Master powerful skills and devastating combos</span>
          </a>
        </li>
        <li>
          <a href="guild.html" class="menu-link">
            <span class="feature-name">🏰 Guilds</span>
            <span class="feature-desc">Battle guild bosses together with other players</span>
          </a>
        </li>
        <li>
          <a href="special-areas.html" class="menu-link">
            <span class="feature-name">🗝️ Special Areas</span>
            <span class="feature-desc">Elite challenges with exclusive rewards and high scores</span>
          </a>
        </li>
        <li>
          <a href="talents.html" class="menu-link">
            <span class="feature-name">✨ Talents</span>
            <span class="feature-desc">Customize your character with powerful passives</span>
          </a>
        </li>
        <li>
          <a href="ascensions.html" class="menu-link">
            <span class="feature-name">🌟 Ascensions</span>
            <span class="feature-desc">Prestige for permanent power and Dream Points</span>
          </a>
        </li>
        <li>
          <a href="items-crafting.html" class="menu-link">
            <span class="feature-name">🔨 Items & Crafting</span>
            <span class="feature-desc">Craft powerful equipment with voxel infusion</span>
          </a>
        </li>
        <li>
          <a href="enchanting.html" class="menu-link">
            <span class="feature-name">🔮 Enchanting System</span>
            <span class="feature-desc">Upgrade and customize your equipment</span>
          </a>
        </li>
        <li>
          <a href="consumables.html" class="menu-link">
            <span class="feature-name">🧪 Consumables & Buffs</span>
            <span class="feature-desc">Potions and buffs to enhance your power</span>
          </a>
        </li>
        <li>
          <a href="progressbar.html" class="menu-link">
            <span class="feature-name">📊 Progress Bar</span>
            <span class="feature-desc">Automatic progression with powerful perks</span>
          </a>
        </li>
      </ul>
    </div>
  `;

  // Initialize navigation when DOM is ready
  function initNavigation() {
    // Inject styles into head
    document.head.insertAdjacentHTML('beforeend', styles);

    // Inject navigation at the start of body
    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // Set up burger menu functionality
    const burgerMenu = document.getElementById('burgerMenu');
    const menuOverlay = document.getElementById('menuOverlay');

    if (burgerMenu && menuOverlay) {
      burgerMenu.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
      });

      // Close menu when clicking outside
      menuOverlay.addEventListener('click', function(e) {
        if (e.target === menuOverlay) {
          burgerMenu.classList.remove('active');
          menuOverlay.classList.remove('active');
        }
      });
    }

    // Initialize search functionality
    initSearch();
  }

  // Search functionality
  let searchIndex;
  let searchData = [
    {"id":"ascensions","title":"Ascensions","url":"ascensions.html","description":"Prestige system for permanent power increases and Dream Points","keywords":"ascension prestige dream points talents reset hardcore normal hard permanent bonuses blacksmithing legend quality enchanting moreskill skillquality strongpets beastmaster idlemaster bosseater counterattack quicklearner battlebrainy luckseeker greed defender bank sink"},
    {"id":"combat","title":"Combat Mechanics","url":"combat.html","description":"Combat systems and mechanics in depth","keywords":"combat fight battle damage mechanics hp health attack defense magic physical crit critical hit dodge block parry resist mana mana cost mana usage mana management mp status effects debuffs stun ministun root slow poison burn bleed damage over time dot armor break weaken attack reduction runic mark hp regeneration mana regeneration accuracy evasion hit chance miss chance damage formula damage calculation armor resistance mana absorb mana leech lifesteal life steal reflect penetration pierce"},
    {"id":"companions","title":"Loyal Companions","url":"companions.html","description":"Recruit unique companions with special abilities","keywords":"companions pets allies followers recruit special abilities bonuses loyal companion summon jindo ember mystikat hootini globbie acornelius florence mechabird snekles"},
    {"id":"pets","title":"Pets","url":"pets.html","description":"Level pets for permanent bonuses and equipped stats","keywords":"pets animals database collection bonuses stats passive companion pet leveling pet food permanent stats equipped stats only one pet max level ascension pet stone musclebob sunflower snake emerald golem vampire stone ruby golem sapphire golem skeleton magi lady bug ladybug butterfly shroom small tree red frog crying ghost ratigan blackmailer arachnid xp modifier mana hp health armor evasion accuracy damage boss damage loot chance hp regen health regen cosy cave crypt garden fishing defeat idle unlock requirements viewer all pets pet list sleeping stone happy stone king stone small stone dragon phoenix dog cat bird golem stone"},
    {"id":"skills","title":"Skills","url":"skills.html","description":"Master powerful skills and devastating combos","keywords":"skills abilities powers talents combos active passive cooldown mana cost damage aoe single target buff debuff auto attack break armor charged strike clarity cleave execute final judgement heavy attack last stand normal attack poison attack quick attack rupture sacrifice shield static discharge stone skin vengeance witherstrike armorbreak"},
    {"id":"guild","title":"Guilds","url":"guild.html","description":"Battle guild bosses together with other players","keywords":"guild guilds multiplayer bosses cooperative social raid contribution rewards guild boss guild shop guild levels"},
    {"id":"special-areas","title":"Special Areas","url":"special-areas.html","description":"Elite challenges with exclusive rewards and high scores","keywords":"special areas dungeons raids challenges elite rewards keys mouse hole ruined tower cosy cave crypt"},
    {"id":"talents","title":"Talents","url":"talents.html","description":"Customize your character with powerful passives","keywords":"talents passive skills tree character build customization talent points respec reset"},
    {"id":"items-crafting","title":"Items & Crafting","url":"items-crafting.html","description":"Craft powerful equipment with voxel infusion","keywords":"items crafting equipment gear weapons armor voxel infusion blacksmith legendary epic rare common quality stats materials recipe affix affixes rarity"},
    {"id":"enchanting","title":"Enchanting System","url":"enchanting.html","description":"Upgrade and customize your equipment","keywords":"enchanting upgrade enhancement equipment gear improve stats enchant level up crystals pixels voxels"},
    {"id":"consumables","title":"Consumables & Buffs","url":"consumables.html","description":"Potions and buffs to enhance your power","keywords":"consumables potions buffs elixirs food temporary boost health mana damage defense speed duration"},
    {"id":"progressbar","title":"Progress Bar","url":"progressbar.html","description":"Automatic progression with powerful perks","keywords":"progress bar passive idle perks rewards automatic double progress power charge health burst speed boost luckseeker"},
    {"id":"mouse-hole","title":"Mouse Hole Raid","url":"mouse-hole.html","description":"The Mouse Hole raid dungeon with treasure chests and magic rings","keywords":"mouse hole raid dungeon saw treasure chest magic ring combat orbs zone difficulty score rank experience"},
    {"id":"ruined-tower","title":"Ruined Tower","url":"ruined-tower.html","description":"The Ruined Tower special area with Evil Eyes and powerful loot","keywords":"ruined tower dungeon evil eyes tower key special area raid orbs zone difficulty score loot chest"},
    {"id":"cosy-cave","title":"Cosy Cave","url":"cosy-cave.html","description":"The Cosy Cave special area with orbs and exclusive rewards","keywords":"cosy cave dungeon cave key orbs special area rewards free chest loot zone difficulty"},
    {"id":"crypt","title":"The Crypt","url":"crypt.html","description":"The Crypt dungeon with vampire boss and soulstones","keywords":"crypt dungeon vampire boss soulstones treasure special area crypt ring undead skeleton zombie"},
    {"id":"minigames","title":"Minigames","url":"minigames.html","description":"Fun minigames with unique rewards","keywords":"minigames games arcade rewards fun fishing frogger space invaders casual"},
    {"id":"fishing","title":"Fishing","url":"fishing.html","description":"Fishing minigame to catch fish and earn rewards","keywords":"fishing minigame fish catch rod lure rewards bait water lake ocean river"},
    {"id":"faq","title":"FAQ","url":"faq.html","description":"Frequently asked questions about Idle Adventure","keywords":"faq questions answers help guide tips tutorial beginner how to"},
    {"id":"alteration","title":"Alteration System","url":"alteration.html","description":"Modify and improve your equipment with alterations and orbs","keywords":"alteration modify equipment gear stats improve customize orb orbs health orb mana orb speed orb damage orb defense orb critical orb magic orb physical orb fire orb ice orb lightning orb poison orb holy orb dark orb chaos orb nature orb sharpening stone whetstone soulstone armor plate radiant orb fortune orb stone stones"},
    {"id":"upgrading","title":"Upgrading System","url":"upgrading.html","description":"Upgrade your equipment to increase power","keywords":"upgrading upgrade equipment enhance improve level up stats upgrade level max level enhancement"}
  ];
  let lunrReady = false;

  function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    if (!searchInput || !searchResults) {
      console.error('Search elements not found');
      return;
    }

    console.log('Initializing search...');
    console.log('Search index loaded:', searchData.length, 'pages');

    // Wait for Lunr.js to load
    let attempts = 0;
    const waitForLunr = setInterval(() => {
      attempts++;
      if (typeof lunr !== 'undefined') {
        clearInterval(waitForLunr);
        console.log('Lunr.js loaded, building search index...');

        try {
          // Build Lunr index
          searchIndex = lunr(function() {
            this.ref('id');
            this.field('title', { boost: 10 });
            this.field('keywords', { boost: 5 });
            this.field('description', { boost: 2 });

            searchData.forEach(doc => {
              this.add(doc);
            });
          });

          lunrReady = true;
          console.log('Search index built successfully');
        } catch (error) {
          console.error('Error building search index:', error);
        }
      } else if (attempts > 50) {
        // Stop trying after 5 seconds
        clearInterval(waitForLunr);
        console.error('Lunr.js failed to load after 5 seconds');
      }
    }, 100);

    // Handle search input
    let searchTimeout;
    searchInput.addEventListener('input', function(e) {
      console.log('Search input event fired, value:', e.target.value);
      clearTimeout(searchTimeout);
      const query = e.target.value.trim();

      if (query.length < 2) {
        searchResults.classList.remove('active');
        return;
      }

      searchTimeout = setTimeout(() => {
        performSearch(query);
      }, 200);
    });

    // Close search results when clicking outside
    document.addEventListener('click', function(e) {
      if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.classList.remove('active');
      }
    });

    // Show results when focusing search input with existing query
    searchInput.addEventListener('focus', function() {
      if (searchInput.value.trim().length >= 2) {
        performSearch(searchInput.value.trim());
      }
    });
  }

  function performSearch(query) {
    const searchResults = document.getElementById('searchResults');

    if (!lunrReady || !searchIndex || !searchData || searchData.length === 0) {
      console.log('Search not ready yet. lunrReady:', lunrReady, 'searchData:', searchData.length);
      searchResults.innerHTML = '<div class="search-no-results">Loading search...</div>';
      searchResults.classList.add('active');
      return;
    }

    console.log('Searching for:', query);

    try {
      let results = [];

      // Try multiple search strategies for better matching
      // 1. Wildcard search (matches partial words)
      results = searchIndex.search(query + '*');

      // 2. If no results, try exact term search
      if (results.length === 0) {
        results = searchIndex.search(query);
      }

      // 3. If still no results, try fuzzy search (allows typos)
      if (results.length === 0) {
        results = searchIndex.search(query + '~1');
      }

      // 4. If still no results, try each word individually
      if (results.length === 0 && query.includes(' ')) {
        const words = query.split(' ');
        results = searchIndex.search(words.join(' OR '));
      }

      // Limit to top 8 results
      results = results.slice(0, 8);

      console.log('Search results:', results.length);

      if (results.length === 0) {
        searchResults.innerHTML = '<div class="search-no-results">No results found</div>';
        searchResults.classList.add('active');
        return;
      }

      // Build results HTML
      const resultsHTML = results
        .map(result => {
          const page = searchData.find(p => p.id === result.ref);
          if (!page) return '';

          return `
            <a href="${page.url}" class="search-result-item">
              <span class="search-result-title">${page.title}</span>
              <span class="search-result-desc">${page.description}</span>
            </a>
          `;
        })
        .join('');

      searchResults.innerHTML = resultsHTML;
      searchResults.classList.add('active');
    } catch (error) {
      console.error('Search error:', error);
      searchResults.innerHTML = '<div class="search-no-results">Search error occurred</div>';
      searchResults.classList.add('active');
    }
  }

  // Run initialization when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation);
  } else {
    initNavigation();
  }
})();
