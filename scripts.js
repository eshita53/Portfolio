document.addEventListener('DOMContentLoaded', () => {
  // Load sidebar into each page
  highlightActiveLink();

  // Set current year in footer
  document.querySelectorAll('#year').forEach(el => 
    el.textContent = new Date().getFullYear()
  );
});

function highlightActiveLink() {
  const currentPage = window.location.pathname.split('/').pop() || "index.html";

  document.querySelectorAll('#sidebar-container .nav-link').forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    if (linkPage === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}