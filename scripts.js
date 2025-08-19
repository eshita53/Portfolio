// Inject shared sidebar into each page
fetch('nav.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('sidebar').innerHTML = html;
    highlightActiveLink();
  });

// Highlight active navigation link
function highlightActiveLink() {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
}

// Set current year in footer
const yearElements = document.querySelectorAll('#year');
yearElements.forEach(el => el.textContent = new Date().getFullYear());

// Fade-in animation for main content
window.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  main.style.opacity = 0;
  setTimeout(() => {
    main.style.transition = 'opacity 0.8s ease';
    main.style.opacity = 1;
  }, 100);
});

// Smooth scroll for internal anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});



