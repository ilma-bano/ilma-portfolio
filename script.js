document.getElementById('year').textContent = new Date().getFullYear();

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- 3D hero parallax (mouse + gyro-free, desktop only) ---------- */
const heroStack = document.getElementById('heroStack');
if (heroStack && !reduceMotion && window.matchMedia('(pointer: fine)').matches) {
  const cards = heroStack.querySelectorAll('.stack-card');
  const baseTransforms = [
    { z: 60, r: -4 },
    { z: 20, r: 3 },
    { z: -30, r: -2 }
  ];
  document.querySelector('.hero').addEventListener('mousemove', (e) => {
    const rect = heroStack.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width;
    const dy = (e.clientY - cy) / rect.height;

    cards.forEach((card, i) => {
      const depth = (i + 1) * 10;
      const b = baseTransforms[i];
      card.style.transform =
        `translateZ(${b.z}px) rotate(${b.r}deg) translate(${dx * depth}px, ${dy * depth}px)`;
    });
  });
  document.querySelector('.hero').addEventListener('mouseleave', () => {
    cards.forEach((card, i) => {
      const b = baseTransforms[i];
      card.style.transform = `translateZ(${b.z}px) rotate(${b.r}deg)`;
    });
  });
}

/* ---------- subtle tilt on work cards ---------- */
if (!reduceMotion && window.matchMedia('(pointer: fine)').matches) {
  document.querySelectorAll('.work-frame').forEach((frame) => {
    frame.addEventListener('mousemove', (e) => {
      const rect = frame.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      frame.style.transform = `rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
    });
    frame.addEventListener('mouseleave', () => {
      frame.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
  });
}

/* ---------- scroll reveal ---------- */
const revealTargets = document.querySelectorAll(
  '.work-card, .do-card, .blog-card, .about-body, .contact-inner'
);
revealTargets.forEach((el) => el.classList.add('reveal'));

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealTargets.forEach((el) => io.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('in'));
}

/* ---------- mobile nav toggle ---------- */
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.display = isOpen ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '64px';
    navLinks.style.right = '22px';
    navLinks.style.background = '#111110';
    navLinks.style.border = '1px solid rgba(242,241,236,0.14)';
    navLinks.style.padding = '20px';
    navLinks.style.gap = '16px';
  });
}
