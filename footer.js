document.addEventListener('DOMContentLoaded', function () {
  // Favicon
  if (!document.querySelector('link[rel="icon"]')) {
    var link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = 'images/favicon/Favicon.png';
    document.head.appendChild(link);
  }

  var footer = document.createElement('footer');
  footer.innerHTML = '<div class="footer-content">' +
    '<div class="footer-grid">' +
      '<div class="footer-column">' +
        '<h4>Guides</h4>' +
        '<ul>' +
          '<li><a href="combat.html">Combat Mechanics</a></li>' +
          '<li><a href="companions.html">Companions</a></li>' +
          '<li><a href="pets.html">Pets</a></li>' +
          '<li><a href="skills.html">Skills</a></li>' +
          '<li><a href="talents.html">Talents</a></li>' +
          '<li><a href="ascensions.html">Ascensions</a></li>' +
          '<li><a href="minigames.html">Mini Games</a></li>' +
        '</ul>' +
      '</div>' +
      '<div class="footer-column">' +
        '<h4>Features</h4>' +
        '<ul>' +
          '<li><a href="items-crafting.html">Items &amp; Crafting</a></li>' +
          '<li><a href="enchanting.html">Enchanting</a></li>' +
          '<li><a href="alteration.html">Alteration</a></li>' +
          '<li><a href="upgrading.html">Upgrading</a></li>' +
          '<li><a href="consumables.html">Consumables</a></li>' +
          '<li><a href="progressbar.html">Progress Bar</a></li>' +
          '<li><a href="guild.html">Guilds</a></li>' +
        '</ul>' +
      '</div>' +
      '<div class="footer-column">' +
        '<h4>Community</h4>' +
        '<ul>' +
          '<li><a href="https://discord.gg/2XMMFHY" target="_blank" rel="noopener">Discord</a></li>' +
          '<li><a href="https://play.google.com/store/apps/details?id=com.PacmenCo.IdleAdventure" target="_blank" rel="noopener">Google Play</a></li>' +
          '<li><a href="faq.html">FAQ</a></li>' +
          '<li><a href="contact.html">Contact</a></li>' +
          '<li><a href="privacy.html">Privacy Policy</a></li>' +
        '</ul>' +
      '</div>' +
    '</div>' +
    '<div class="footer-bottom">' +
      '<p class="copyright">&copy; 2026 PacmenCo — <span class="game-name">Idle Adventure</span> Pixel RPG Guide. All rights reserved.</p>' +
    '</div>' +
  '</div>';
  document.body.appendChild(footer);
});
