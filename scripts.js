
document.addEventListener('DOMContentLoaded', () => {
    // Load sidebar into each page
    fetch('side_bar.html')
      .then(response => response.text())
      .then(html => {
        const container = document.getElementById('sidebar-container');
        container.innerHTML += html;
        highlightActiveLink();
      });
  
    // Set current year in footer
    document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());
  });
  
  function highlightActiveLink() {
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('#sidebar-container a').forEach(link => {
      if (link.getAttribute('href') === currentPage) link.classList.add('active');
    });
  }


  // document.addEventListener('DOMContentLoaded', () => {
  //   // Inject nav.html content into the sidebar
  //   fetch('nav.html')
  //     .then(response => response.text())
  //     .then(html => {
  //       const sidebar = document.getElementById('sidebar-container');
  //       sidebar.innerHTML += html;
  //       highlightActiveLink();
  //     });
  
  //   // Set current year in footer
  //   document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());
  // });
  
  // function highlightActiveLink() {
  //   const currentPage = window.location.pathname.split('/').pop();
  //   document.querySelectorAll('#sidebar-container a').forEach(link => {
  //     if(link.getAttribute('href') === currentPage) link.classList.add('active');
  //   });
  // }