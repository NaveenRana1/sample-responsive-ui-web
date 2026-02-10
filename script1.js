
  const hamburgerBtn = document.getElementById('hamburger');
  const closeBtn = document.getElementById('closeBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuLinks = document.querySelectorAll('.menu-link');
  const bodyElement = document.body;

  function openMenu() {
    mobileMenu.classList.add('opacity-100', 'visible');
    mobileMenu.querySelector('div').classList.add('translate-x-0');
    bodyElement.classList.add('overflow-hidden');
  }

  function closeMenu() {
    mobileMenu.classList.remove('opacity-100', 'visible');
    mobileMenu.querySelector('div').classList.remove('translate-x-0');
    bodyElement.classList.remove('overflow-hidden');
  }

  hamburgerBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  menuLinks.forEach(link => link.addEventListener('click', closeMenu));
  mobileMenu.addEventListener('click', (e) => e.target === mobileMenu && closeMenu());
  document.addEventListener('keydown', (e) => e.key === 'Escape' && closeMenu());
