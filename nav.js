// Shared Navigation Component for Idle Adventure Guide
// Injects navigation bar, menu overlay, styles, and functionality

(function() {
  'use strict';

  // Inject CSS styles
  const styles = `
    <style>
      /* Sticky Navigation */
      .nav-bar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: rgba(10, 14, 26, 0.95);
        backdrop-filter: blur(10px);
        padding: 1rem 2rem;
        z-index: 1000;
        border-bottom: 1px solid rgba(124, 58, 237, 0.2);
      }

      .nav-content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
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
          <a href="pets-viewer.html" class="menu-link">
            <span class="feature-name">🦊 Pet Database</span>
            <span class="feature-desc">Discover all 93 pets and their unique bonuses</span>
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
  }

  // Run initialization when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation);
  } else {
    initNavigation();
  }
})();
