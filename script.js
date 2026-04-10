// Navigation and section management
document.addEventListener('DOMContentLoaded', function() {
  // Get all nav links and section panels
  const navLinks = document.querySelectorAll('.nav-link');
  const sectionPanels = document.querySelectorAll('.section-panel');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks_Container = document.querySelector('.nav-links');

  // Handle nav link clicks
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get the section to show
      const sectionName = this.getAttribute('data-section');
      showSection(sectionName);
      
      // Close mobile nav if open
      if (navLinks_Container) {
        navLinks_Container.classList.remove('active');
      }
    });
  });

  // Function to show a section
  function showSection(sectionName) {
    // Hide all sections
    sectionPanels.forEach(panel => {
      panel.classList.remove('active');
    });
    
    // Show the target section
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
      targetSection.classList.add('active');
    }
    
    // Update active nav link
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-section') === sectionName) {
        link.classList.add('active');
      }
    });
  }

  // Mobile nav toggle
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navLinks_Container.classList.toggle('active');
    });
  }

  // Contact form submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Show toast notification
      showToast('Thank you! Your message has been sent. We will get back to you soon.');
      
      // Clear form
      this.reset();
    });
  }

  // Button click handlers for dashboard
  const aboutBtn = document.querySelector('.btn-dashboard');
  if (aboutBtn) {
    aboutBtn.addEventListener('click', function() {
      showSection('about');
    });
  }

  // Typewriter hero text
  const typewriterElement = document.querySelector('.typewriter');
  const typewriterWords = ['Web Development', 'UI/UX Design', 'Interactive Experiences'];
  let currentWord = 0;
  let currentChar = 0;
  let isDeleting = false;

  function handleTypewriter() {
    if (!typewriterElement) return;
    const currentText = typewriterWords[currentWord];
    if (isDeleting) {
      currentChar--; 
      typewriterElement.textContent = currentText.slice(0, currentChar);
      if (currentChar === 0) {
        isDeleting = false;
        currentWord = (currentWord + 1) % typewriterWords.length;
      }
    } else {
      currentChar++;
      typewriterElement.textContent = currentText.slice(0, currentChar);
      if (currentChar === currentText.length) {
        isDeleting = true;
      }
    }

    const delay = isDeleting ? 80 : 120;
    const wait = !isDeleting && currentChar === currentText.length ? 1200 : delay;
    setTimeout(handleTypewriter, wait);
  }

  if (typewriterElement) {
    handleTypewriter();
  }

  // Toast notification function
  function showToast(message) {
    let toast = document.querySelector('.toast');
    
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    
    toast.textContent = message;
    toast.classList.add('show');
    
    // Hide toast after 3 seconds
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  // Make showSection globally available for onclick handlers
  window.navigateToSection = showSection;
});
