// Close mobile menu when a link is clicked
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function() {
    if (window.innerWidth <= 768) {
      document.getElementById('sidebar-active').checked = false;
    }
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

