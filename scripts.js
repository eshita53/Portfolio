document.addEventListener('DOMContentLoaded', () => {
  // Load sidebar into each page
  fetch('nav.html')
    .then(response => response.text())
    .then(html => {
      console.log("Hi")
      const container = document.getElementById('sidebar-container');
      container.innerHTML = html;
      
      setTimeout(highlightActiveLink, 0); // ensure DOM update
    });

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