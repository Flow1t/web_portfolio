// Mobile Navigation Toggle
const nav = document.querySelector('nav');
const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Form Submission Alert
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
  form.reset();
});

// Fade-in on Scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('show');
    } else {
      section.classList.remove('show');
    }
  });
});

// Burger Menu Toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('nav ul');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('show');

  // Animate burger into X (optional)
  burger.classList.toggle('toggle');
});

// Optional: Animate burger icon into 'X'
