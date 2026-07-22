// ZwideFam.js — Complete functionality for Zwidefam Technologies website

(function() {
  'use strict';

  // ─── MOBILE MENU ───────────────────────────────────────────────
  const burger = document.getElementById('burgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (burger && mobileMenu) {
    burger.addEventListener('click', function() {
      const isOpen = mobileMenu.classList.toggle('open');
      burger.setAttribute('aria-expanded', isOpen);
    });

    mobileMenu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ─── SCROLL REVEAL ─────────────────────────────────────────────
  const revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(function(el) {
    revealObserver.observe(el);
  });

  // ─── BACK TO TOP BUTTON ────────────────────────────────────────
  const backBtn = document.getElementById('backToTop');

  if (backBtn) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 500) {
        backBtn.classList.add('visible');
      } else {
        backBtn.classList.remove('visible');
      }
    });

// ─── SCROLL REVEAL ─────────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); // use 'show' consistently
      revealObserver.unobserve(entry.target); // reveal once
    }
  });
}, { threshold: 0.2 }); // triggers when 20% visible

document.querySelectorAll('.reveal').forEach((el) => {
  revealObserver.observe(el);
});


const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      // If you want it to only trigger once:
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 }); // triggers when 20% of card is visible

reveals.forEach(reveal => {
  observer.observe(reveal);
});

    
    backBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ─── PROGRESS BAR ──────────────────────────────────────────────
  const progressBar = document.getElementById('progressBar');

  if (progressBar) {
    window.addEventListener('scroll', function() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = progress + '%';
    });
  }

  // ─── SERVICE CARD FLIP ─────────────────────────────────────────
  document.querySelectorAll('.svc-card[type="button"]').forEach(function(card) {
    card.addEventListener('click', function() {
      const isPressed = this.getAttribute('aria-pressed') === 'true';
      this.setAttribute('aria-pressed', isPressed ? 'false' : 'true');
    });
  });

  // ─── COPY ADDRESS ──────────────────────────────────────────────
  const copyBtn = document.getElementById('copyAddressBtn');
  const copyFeedback = document.getElementById('copyFeedback');

  if (copyBtn && copyFeedback) {
    copyBtn.addEventListener('click', function() {
      const address = '494 Malatola Street, Khumalo AP, Katlehong, Germiston, 1431, South Africa';
      navigator.clipboard.writeText(address).then(function() {
        copyFeedback.classList.add('show');
        setTimeout(function() {
          copyFeedback.classList.remove('show');
        }, 2000);
      }).catch(function() {
        // fallback
        const textarea = document.createElement('textarea');
        textarea.value = address;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        copyFeedback.classList.add('show');
        setTimeout(function() {
          copyFeedback.classList.remove('show');
        }, 2000);
      });
    });
  }

  const circle1 = document.querySelector('.c1');
const circle2 = document.querySelector('.c2');

let angle1 = 0;
let angle2 = 0;

function rotateCircles() {
  // Circle 1: clockwise (opening)
  angle1 += 0.3; // slow speed
  circle1.style.transform = `rotateY(${angle1}deg) rotateX(${angle1/10}deg)`;

  // Circle 2: counter-clockwise (closing)
  angle2 -= 0.3;
  circle2.style.transform = `rotateY(${angle2}deg) rotateX(${angle2/10}deg)`;

  requestAnimationFrame(rotateCircles);
}

rotateCircles();

const cards = document.querySelectorAll('.reveal');

function showCardsSequentially() {
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('show');
    }, index * 2000); // 2s delay between each card
  });
}

// ZwideFam.js — Complete functionality for Zwidefam Technologies website

(function() {
  'use strict';

  // ─── MOBILE MENU ───────────────────────────────────────────────
  const burger = document.getElementById('burgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (burger && mobileMenu) {
    burger.addEventListener('click', function() {
      const isOpen = mobileMenu.classList.toggle('open');
      burger.setAttribute('aria-expanded', isOpen);
    });

    mobileMenu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ─── SCROLL REVEAL ─────────────────────────────────────────────
  const revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(function(el) {
    revealObserver.observe(el);
  });

  // ─── BACK TO TOP BUTTON ────────────────────────────────────────
  const backBtn = document.getElementById('backToTop');

  if (backBtn) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 500) {
        backBtn.classList.add('visible');
      } else {
        backBtn.classList.remove('visible');
      }
    });

// ─── SCROLL REVEAL ─────────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); // use 'show' consistently
      revealObserver.unobserve(entry.target); // reveal once
    }
  });
}, { threshold: 0.2 }); // triggers when 20% visible

document.querySelectorAll('.reveal').forEach((el) => {
  revealObserver.observe(el);
});


const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      // If you want it to only trigger once:
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 }); // triggers when 20% of card is visible

reveals.forEach(reveal => {
  observer.observe(reveal);
});

    
    backBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ─── PROGRESS BAR ──────────────────────────────────────────────
  const progressBar = document.getElementById('progressBar');

  if (progressBar) {
    window.addEventListener('scroll', function() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = progress + '%';
    });
  }

  // ─── SERVICE CARD FLIP ─────────────────────────────────────────
  document.querySelectorAll('.svc-card[type="button"]').forEach(function(card) {
    card.addEventListener('click', function() {
      const isPressed = this.getAttribute('aria-pressed') === 'true';
      this.setAttribute('aria-pressed', isPressed ? 'false' : 'true');
    });
  });

  // ─── COPY ADDRESS ──────────────────────────────────────────────
  const copyBtn = document.getElementById('copyAddressBtn');
  const copyFeedback = document.getElementById('copyFeedback');

  if (copyBtn && copyFeedback) {
    copyBtn.addEventListener('click', function() {
      const address = '494 Malatola Street, Khumalo AP, Katlehong, Germiston, 1431, South Africa';
      navigator.clipboard.writeText(address).then(function() {
        copyFeedback.classList.add('show');
        setTimeout(function() {
          copyFeedback.classList.remove('show');
        }, 2000);
      }).catch(function() {
        // fallback
        const textarea = document.createElement('textarea');
        textarea.value = address;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        copyFeedback.classList.add('show');
        setTimeout(function() {
          copyFeedback.classList.remove('show');
        }, 2000);
      });
    });
  }

  const circle1 = document.querySelector('.c1');
const circle2 = document.querySelector('.c2');

let angle1 = 0;
let angle2 = 0;

function rotateCircles() {
  // Circle 1: clockwise (opening)
  angle1 += 0.3; // slow speed
  circle1.style.transform = `rotateY(${angle1}deg) rotateX(${angle1/10}deg)`;

  // Circle 2: counter-clockwise (closing)
  angle2 -= 0.3;
  circle2.style.transform = `rotateY(${angle2}deg) rotateX(${angle2/10}deg)`;

  requestAnimationFrame(rotateCircles);
}

rotateCircles();

const cards = document.querySelectorAll('.reveal');

function showCardsSequentially() {
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('show');
    }, index * 2000); // 2s delay between each card
  });
}

// Run automatically when page loads
window.addEventListener('load', showCardsSequentially);


  
})();

// Run automatically when page loads
window.addEventListener('load', showCardsSequentially);


  
})();