const sections = document.querySelectorAll('.reveal-on-scroll');
const navLinks = document.querySelectorAll('.nav-link');
const yearSpan = document.getElementById('year');

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

sections.forEach((section) => observer.observe(section));

const sectionTargets = [...navLinks]
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = `#${entry.target.id || 'home'}`;
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === id);
      });
    }
  });
}, { threshold: 0.35 });

sectionTargets.forEach((section) => navObserver.observe(section));
