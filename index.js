document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const hamburgerMenu = document.querySelector('.hamburger-menu');

  const toggleMenu = () => {
    const isMenuOpen = hamburgerMenu.classList.toggle('show-menu');
    hamburgerBtn.setAttribute('aria-expanded', isMenuOpen);
  };

  const closeMenu = () => {
    if (hamburgerMenu.classList.contains('show-menu')) {
      hamburgerMenu.classList.remove('show-menu');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      hamburgerBtn.focus();
    }
  };

  hamburgerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  document.addEventListener('click', (e) => {
    if (!hamburgerMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });

  hamburgerMenu.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});
