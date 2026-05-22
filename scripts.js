/* ==========================================================================
   CivicSpan IT Group - Centralized Scripts
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all interactive modules
  initCookieBanner();
  initScrollReveal();
  initCapabilitiesFilter();
  initFAQAccordion();
});
/* ==========================================================================
   1. Cookie Consent Banner & Google Analytics Loading
   ========================================================================== */
const COOKIE_CONSENT_KEY = 'civicspan_cookie_consent';
const CONSENT_EXPIRY_DAYS = 365;
const GA_ID = 'G-DHDMJY4DW5';
function initCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;
  // Add event listeners to buttons
  const acceptBtn = banner.querySelector('.cookie-accept');
  const declineBtn = banner.querySelector('.cookie-decline');
  const closeBtn = banner.querySelector('.cookie-close');
  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
      setCookieConsent('accepted');
      banner.classList.remove('show');
      loadAnalytics();
    });
  }
  if (declineBtn) {
    declineBtn.addEventListener('click', () => {
      setCookieConsent('rejected');
      banner.classList.remove('show');
    });
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      setCookieConsent('rejected');
      banner.classList.remove('show');
    });
  }
  // Show banner if no consent state is found
  const consent = getCookieConsent();
  if (!consent) {
    banner.classList.add('show');
  } else if (consent.includes('accepted')) {
    loadAnalytics();
  }
}
function setCookieConsent(consent) {
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + CONSENT_EXPIRY_DAYS);
  document.cookie = `${COOKIE_CONSENT_KEY}=${consent};path=/;expires=${expiryDate.toUTCString()};SameSite=Strict`;
}
function getCookieConsent() {
  return document.cookie
    .split('; ')
    .find(row => row.startsWith(`${COOKIE_CONSENT_KEY}=`));
}
function loadAnalytics() {
  if (window.gtagLoaded) return;
  window.gtagLoaded = true;
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID);
}
/* ==========================================================================
   2. FAQ Accordion Module
   ========================================================================== */
function initFAQAccordion() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isExpanded = question.getAttribute('aria-expanded') === 'true';
      // Toggle current item
      question.setAttribute('aria-expanded', !isExpanded);
      if (!isExpanded) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        item.classList.remove('active');
        answer.style.maxHeight = '0px';
      }
      // Close other items (accordion behavior)
      const siblingQuestions = question.closest('.faq-accordion').querySelectorAll('.faq-question');
      siblingQuestions.forEach(sibling => {
        if (sibling !== question) {
          sibling.setAttribute('aria-expanded', 'false');
          const siblingItem = sibling.closest('.faq-item');
          siblingItem.classList.remove('active');
          siblingItem.querySelector('.faq-answer').style.maxHeight = '0px';
        }
      });
    });
  });
}
/* ==========================================================================
   3. Capabilities Filtering Module
   ========================================================================== */
function initCapabilitiesFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.modern-capability-card');
  if (filterButtons.length === 0 || cards.length === 0) return;
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Toggle active state on buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const filter = button.getAttribute('data-filter');
      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
          // Show with smooth animation
          card.style.display = 'block';
          // Force reflow
          card.offsetHeight;
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        } else {
          // Hide with smooth animation
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          // Wait for animation to finish before setting display none
          setTimeout(() => {
            if (card.style.opacity === '0') {
              card.style.display = 'none';
            }
          }, 300);
        }
      });
    });
  });
}
/* ==========================================================================
   4. Scroll Reveal Animations (Intersection Observer)
   ========================================================================== */
function initScrollReveal() {
  // Elements to reveal standardly
  const revealElements = document.querySelectorAll('.scroll-reveal');
  
  // Grids/Containers that stagger children reveal
  const staggerContainers = document.querySelectorAll('.reveal-stagger');
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters viewport
  };
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target); // Stop observing once revealed
      }
    });
  }, observerOptions);
  // Standard observer attach
  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
  // Staggered containers handling
  const staggerObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const container = entry.target;
        const items = container.querySelectorAll('.reveal-stagger-item');
        
        items.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('revealed');
          }, index * 100); // 100ms staggered delay
        });
        
        observer.unobserve(container);
      }
    });
  }, observerOptions);
  staggerContainers.forEach(container => {
    staggerObserver.observe(container);
  });
}
