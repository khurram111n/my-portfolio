document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Scroll to the correct section
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start', // Ensures it scrolls to the top of the section
    });
  });
});


function toggleMenu() {
  // Toggle the 'show' class to show/hide the menu
  const menuLinks = document.querySelector('.menu-links');
  menuLinks.classList.toggle('show');
}

