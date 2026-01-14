/**
 * EQ Software Cloud - Main JavaScript
 * Handles carousels, mobile menu, interactive elements, and i18n
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initProjectCarousels();
  initExperienceScrollIndicator();
  handleResponsiveMenu();
  initLanguageSwitcher();
});

/**
 * Translations object - attached to window for global access
 */
window.translations = {
  en: {
    // Navigation
    'nav.experience': 'Experience',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.badge': 'AVAILABLE FOR NEW PROJECTS',
    'hero.title1': 'Building the',
    'hero.title2': 'Digital Future',
    'hero.description': 'We are a studio of engineers and designers creating high-quality software solutions that drive your business.',
    'hero.cta': 'Start Project',
    'hero.viewPortfolio': 'View Portfolio',
    
    // Experience
    'experience.title': 'Our Experience',
    
    // Portfolio
    'portfolio.title': 'Our Creations',
    'portfolio.subtitle': 'Real solutions that transform businesses',
    
    // Clients
    'clients.title': 'COMPANIES THAT TRUST US',
    
    // Tech Stack
    'tech.title': 'TECHNOLOGIES WE USE',
    
    // Contact
    'contact.title': 'Start a<br />Conversation',
    'contact.description': 'Do you have a project in mind or simply want to know more? We would love to hear from you and help you build the future.',
    'contact.cta': 'Get in Touch',
    
    // Footer
    'footer.services': 'Services',
    'footer.webDev': 'Web Development',
    'footer.mobileApps': 'Mobile Applications',
    'footer.uiux': 'UI/UX Design',
    'footer.cloud': 'Cloud Solutions',
    'footer.contact': 'Contact',
    'footer.location': 'Lima - Perú<br />Jr. El cortijo 595, Monterrico Santiago de Surco',
    'footer.copyright': '© 2026 EQ Software Cloud. All rights reserved'
  },
  es: {
    // Navigation
    'nav.experience': 'Experiencia',
    'nav.portfolio': 'Portafolio',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.badge': 'DISPONIBLE PARA NUEVOS PROYECTOS',
    'hero.title1': 'Construyendo el',
    'hero.title2': 'Futuro Digital',
    'hero.description': 'Somos un estudio de ingenieros y diseñadores creando soluciones de software de alta calidad que impulsan tu negocio.',
    'hero.cta': 'Iniciar Proyecto',
    'hero.viewPortfolio': 'Ver Portafolio',
    
    // Experience
    'experience.title': 'Nuestra Experiencia',
    
    // Portfolio
    'portfolio.title': 'Nuestras Creaciones',
    'portfolio.subtitle': 'Soluciones reales que transforman negocios',
    
    // Clients
    'clients.title': 'EMPRESAS QUE CONFÍAN EN NOSOTROS',
    
    // Tech Stack
    'tech.title': 'TECNOLOGÍAS QUE USAMOS',
    
    // Contact
    'contact.title': 'Inicia una<br />Conversación',
    'contact.description': '¿Tienes un proyecto en mente o simplemente quieres saber más? Nos encantaría escucharte y ayudarte a construir el futuro.',
    'contact.cta': 'Ponte en Contacto',
    
    // Footer
    'footer.services': 'Servicios',
    'footer.webDev': 'Desarrollo Web',
    'footer.mobileApps': 'Aplicaciones Móviles',
    'footer.uiux': 'Diseño UI/UX',
    'footer.cloud': 'Soluciones Cloud',
    'footer.contact': 'Contacto',
    'footer.location': 'Lima - Perú<br />Jr. El cortijo 595, Monterrico Santiago de Surco',
    'footer.copyright': '© 2026 EQ Software Cloud. Todos los derechos reservados'
  }
};

/**
 * Current language state - attached to window for global access
 */
window.currentLanguage = localStorage.getItem('lang') || 'en';

/**
 * Initialize Language Switcher
 */
function initLanguageSwitcher() {
  const langButtons = document.querySelectorAll('.lang-btn, .lang-btn-mobile');
  
  // Set initial language from localStorage or default to 'en'
  setLanguage(window.currentLanguage);
  updateLangButtons(window.currentLanguage);
  
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang && lang !== window.currentLanguage) {
        setLanguage(lang);
        updateLangButtons(lang);
        localStorage.setItem('lang', lang);
        window.currentLanguage = lang;
      }
    });
  });
}

/**
 * Update language button states
 */
function updateLangButtons(lang) {
  const langButtons = document.querySelectorAll('.lang-btn, .lang-btn-mobile');
  
  langButtons.forEach(btn => {
    if (btn.dataset.lang === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

/**
 * Set the page language and update all translatable elements
 */
function setLanguage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  
  elements.forEach(el => {
    const key = el.dataset.i18n;
    const translation = window.translations[lang]?.[key];
    
    if (translation) {
      // Check if element should use innerHTML (for HTML content like <br>)
      if (el.dataset.i18nHtml === 'true') {
        el.innerHTML = translation;
      } else {
        el.textContent = translation;
      }
    }
  });
  
  // Update HTML lang attribute
  document.documentElement.lang = lang;
}

// Expose setLanguage globally for debugging
window.setLanguage = setLanguage;

/**
 * Handle responsive menu visibility
 * Closes mobile menu when resizing to desktop
 */
function handleResponsiveMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024 && mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = '';
    }
  });
}

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const menuClose = document.getElementById('menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-menu-link');

  if (!menuToggle || !mobileMenu) return;

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  });

  menuClose?.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = '';
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = '';
    });
  });
}

/**
 * Project Image Carousels
 * Auto-advances images with dot indicators
 */
function initProjectCarousels() {
  const carousels = document.querySelectorAll('.project-carousel');
  
  carousels.forEach(carousel => {
    const images = carousel.querySelectorAll('.carousel-image');
    const dots = carousel.querySelectorAll('.dot');
    let currentIndex = 0;
    let intervalId = null;

    const showImage = (index) => {
      // Hide all images
      images.forEach(img => img.classList.remove('active'));
      dots.forEach(dot => {
        dot.classList.remove('active');
        dot.classList.remove('bg-white/80');
        dot.classList.add('bg-white/40');
      });

      // Show current image
      images[index].classList.add('active');
      dots[index].classList.add('active');
      dots[index].classList.remove('bg-white/40');
      dots[index].classList.add('bg-white/80');
    };

    const nextImage = () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    };

    // Start auto-advance
    const startAutoAdvance = () => {
      intervalId = setInterval(nextImage, 4000);
    };

    // Stop auto-advance
    const stopAutoAdvance = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };

    // Dot click handlers
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        stopAutoAdvance();
        currentIndex = index;
        showImage(currentIndex);
        startAutoAdvance();
      });
    });

    // Start carousel
    startAutoAdvance();

    // Pause on hover
    carousel.addEventListener('mouseenter', stopAutoAdvance);
    carousel.addEventListener('mouseleave', startAutoAdvance);
  });
}

/**
 * Experience Section Scroll Indicator
 * Updates dots based on scroll position
 */
function initExperienceScrollIndicator() {
  const scrollContainer = document.querySelector('.experience-scroll');
  const dots = document.querySelectorAll('#experience .flex.gap-1 span');
  
  if (!scrollContainer || dots.length === 0) return;

  const updateDots = () => {
    const scrollLeft = scrollContainer.scrollLeft;
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    const scrollPercentage = scrollLeft / maxScroll;
    
    // Calculate which dot should be active (0-3)
    let activeIndex = Math.round(scrollPercentage * (dots.length - 1));
    activeIndex = Math.max(0, Math.min(activeIndex, dots.length - 1));

    dots.forEach((dot, index) => {
      if (index === activeIndex) {
        dot.classList.remove('bg-border-gray/30');
        dot.classList.add('bg-primary-500');
      } else {
        dot.classList.remove('bg-primary-500');
        dot.classList.add('bg-border-gray/30');
      }
    });
  };

  scrollContainer.addEventListener('scroll', updateDots);
}
