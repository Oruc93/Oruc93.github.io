// Mobile navigation toggle
const toggle = document.querySelector('.nav-toggle');
const menu   = document.querySelector('.nav-links');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  // Close menu when a link is clicked
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Mark active nav link
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.href === location.href || location.pathname.startsWith(new URL(a.href).pathname) && a.href !== '/') {
    a.classList.add('active');
  }
});
