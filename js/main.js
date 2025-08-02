// main.js – Professional interactions for Remote Hustle Africa

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href').substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Toggle mobile navigation (hamburger menu)
  const navToggle = document.querySelector('#nav-toggle');
  const header = document.querySelector('header');
  const navLinks = document.querySelector('#nav-links');

  if (navToggle && header && navLinks) {
    navToggle.addEventListener('click', () => {
      header.classList.toggle('nav-open');
      const expanded = header.classList.contains('nav-open');
      navToggle.setAttribute('aria-expanded', expanded);
      navLinks.style.display = expanded ? 'flex' : 'none';
    });

    // Hide menu after clicking a link (optional)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        header.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.style.display = 'none';
      });
    });
  }

  // Button hover animation
  document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mouseenter', () => btn.classList.add('btn-hovered'));
    btn.addEventListener('mouseleave', () => btn.classList.remove('btn-hovered'));
  });

  // Contact form validation
  const contactForm = document.querySelector('form[action^="mailto:"]');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      const name = contactForm.querySelector('#name');
      const email = contactForm.querySelector('#email');
      const message = contactForm.querySelector('#message');

      if (!name || !email || !message) return;

      const nameVal = name.value.trim();
      const emailVal = email.value.trim();
      const messageVal = message.value.trim();

      if (!nameVal || !emailVal || !messageVal) {
        e.preventDefault();
        alert('Please fill out all required fields before sending your message.');
      } else if (!validateEmail(emailVal)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
      }
    });
  }

  // Email validation helper
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Hero image slideshow functionality
  const slides = document.querySelectorAll('.slide');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  if (slides.length > 0) {
    showSlide(current);
    setInterval(nextSlide, 3000); // every 3 seconds
  }
});
