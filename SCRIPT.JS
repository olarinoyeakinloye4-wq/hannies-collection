document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');
  const orderButtons = document.querySelectorAll('.order-button');
  const whatsappNumber = '2348030683826';

  function closeMobileMenu() {
    if (navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      mobileToggle.setAttribute('aria-expanded', 'false');
    }
  }

  function toggleMobileMenu() {
    const isOpen = navLinks.classList.toggle('open');
    mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      toggleMobileMenu();
    });
  }

  navItems.forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = link.getAttribute('href');
      if (target && target.startsWith('#')) {
        event.preventDefault();
        document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
        closeMobileMenu();
      }
    });
  });

  orderButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const product = button.dataset.product?.trim() || 'Bakery order';
      const message = `Hello Hannie's Collection, I would like to order a ${product}. Please send me the available options and price.`;
      const encodedMessage = encodeURIComponent(message);
      const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      window.open(url, '_blank');
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      closeMobileMenu();
    }
  });
});