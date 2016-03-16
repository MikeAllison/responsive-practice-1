(function() {
  var mobileMenuBtn = document.getElementById('mobileMenuBtn');
  var mobileMenu = document.getElementById('mobileMenu');
  var navItems = document.getElementById('navItems').cloneNode(true);

  // Toggles class 'open' on the mobile menu
  function toggleMenu() {
    mobileMenu.classList.toggle('open');
  }

  // Append UL in stdMenu to the mobileMenu on doc ready
  mobileMenu.appendChild(navItems);

  // Set click handler for mobileMenuBtn
  mobileMenuBtn.onclick = toggleMenu;

  // Set click handler for the mobileMenu
  mobileMenu.onclick = toggleMenu;
})();
