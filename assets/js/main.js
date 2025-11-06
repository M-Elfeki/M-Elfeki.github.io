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

// Simple fade-in animation on scroll with fallback
const observeElements = () => {
  // Check if IntersectionObserver is supported
  if (typeof IntersectionObserver === 'undefined') {
    // Fallback: show all elements immediately
    document.querySelectorAll('[data-aos]').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
    return;
  }

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
  const aosElements = document.querySelectorAll('[data-aos]');
  if (aosElements.length > 0) {
    aosElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }
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
  
  // Parallax effect for hero background (subtle) with error handling
  const hero = document.querySelector('.hero');
  if (hero) {
    const heroBackground = hero.querySelector('.hero-background');
    if (heroBackground) {
      let ticking = false;
      const handleScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            try {
              const currentScroll = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
              if (currentScroll <= hero.offsetHeight) {
                const parallax = currentScroll * 0.3;
                heroBackground.style.transform = `translateY(${parallax}px)`;
              }
              ticking = false;
            } catch (e) {
              ticking = false;
            }
          });
          ticking = true;
        }
      };
      
      // Use passive listener for better performance
      if (window.addEventListener) {
        window.addEventListener('scroll', handleScroll, { passive: true });
      }
    }
    
    // Hide scroll indicator when user scrolls
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
      let scrollTimeout;
      const hideOnScroll = () => {
        scrollIndicator.style.opacity = '0';
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          if (window.pageYOffset < 100) {
            scrollIndicator.style.opacity = '1';
          }
        }, 1000);
      };
      window.addEventListener('scroll', hideOnScroll, { passive: true });
    }
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
    if (typeof IntersectionObserver !== 'undefined') {
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
    } else {
      // Fallback: show all timeline items immediately
      timelineItems.forEach(item => {
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
      });
    }
  }

  // Animate language items on scroll
  const languageItems = document.querySelectorAll('.language-item');
  if (languageItems.length > 0) {
    if (typeof IntersectionObserver !== 'undefined') {
      const languageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            languageObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      languageItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        languageObserver.observe(item);
      });
    } else {
      // Fallback: show all language items immediately
      languageItems.forEach(item => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      });
    }
  }

  // Smooth scroll behavior with fallback
  if (!('scrollBehavior' in document.documentElement.style)) {
    // Polyfill for smooth scroll if not supported
    const smoothScrollPolyfill = () => {
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
                behavior: 'auto'
              });
              // Fallback animation
              let currentPosition = window.pageYOffset;
              const distance = offsetTop - currentPosition;
              const duration = 500;
              let start = null;
              
              function step(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                const percentage = Math.min(progress / duration, 1);
                window.scrollTo(0, currentPosition + distance * percentage);
                if (progress < duration) {
                  window.requestAnimationFrame(step);
                }
              }
              window.requestAnimationFrame(step);
            }
          }
        });
      });
    };
    smoothScrollPolyfill();
  }
});

