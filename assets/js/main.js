// Dark mode functionality - must run before DOMContentLoaded to prevent flash
(function() {
  // Get stored theme or default to 'dark'
  const storedTheme = localStorage.getItem('theme');
  const theme = storedTheme || 'dark'; // Default to dark
  
  // Apply theme immediately to prevent flash
  if (document.documentElement) {
    document.documentElement.setAttribute('data-theme', theme);
  }
})();

// Simple fade-in animation on scroll
const observeElements = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements with data-aos attribute
  document.querySelectorAll('[data-aos]').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
};

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  // Dark mode toggle
  const darkModeToggle = document.querySelector('.dark-mode-toggle');
  const html = document.documentElement;
  
  // Get current theme from localStorage or default to 'dark'
  const getTheme = () => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
    return 'dark'; // Default to dark mode
  };
  
  // Set theme
  const setTheme = (theme) => {
    if (theme === 'light' || theme === 'dark') {
      html.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  };
  
  // Initialize theme
  const currentTheme = getTheme();
  setTheme(currentTheme);
  
  // Toggle dark mode
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const currentTheme = html.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      
      // Force a repaint to ensure styles are applied
      document.body.offsetHeight; // Trigger reflow
    });
  }
  
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }
  
  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offsetTop = target.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Update year in footer
  const currentYear = new Date().getFullYear();
  const footerYear = document.querySelector('.footer-text');
  if (footerYear) {
    footerYear.textContent = footerYear.textContent.replace('2024', currentYear);
  }
  
  // Add active class to current page nav item
  const currentPath = window.location.pathname;
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath || 
        (currentPath === '/' && link.getAttribute('href') === '/')) {
      link.classList.add('active');
    }
  });
  
  // Initialize scroll animations
  observeElements();
  
  // Parallax effect for hero background (subtle)
  const hero = document.querySelector('.hero');
  if (hero) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= hero.offsetHeight) {
        const parallax = currentScroll * 0.3;
        const heroBackground = hero.querySelector('.hero-background');
        if (heroBackground) {
          heroBackground.style.transform = `translateY(${parallax}px)`;
        }
      }
      lastScroll = currentScroll;
    }, { passive: true });
  }
  
  // Add hover effect to cards
  const cards = document.querySelectorAll('.project-card, .thought-preview-item, .quick-link-card, .contact-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
  });
  
  // Smooth reveal for timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');
  if (timelineItems.length > 0) {
    const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
          }, index * 100);
          timelineObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    timelineItems.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateX(-20px)';
      item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      timelineObserver.observe(item);
    });
  }
});

