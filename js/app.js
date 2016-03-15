(function() {
  // Collect all links in the mobile nav menu
  var navMobileItems = document.getElementsByClassName('nav__mobile__item');

  // Toggles class 'open' on the mobile menu
  function toggleMenu() {
    navMobileMenu.classList.toggle('open');
  }

  navMobile.onclick = toggleMenu;

  for (var i=0; i < navMobileItems.length; i++) {
    navMobileItems[i].onclick = toggleMenu;
  }
})();
