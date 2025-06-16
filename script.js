  const menuIcon = document.getElementById('menu-bar-icon');
  const crossIcon = document.getElementById('cross-icon');
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.navbar a');

  // Function to check if screen is mobile/tablet
  function isMobileView() {
    return window.innerWidth <= 768;
  }

  function toggleMenu(show) {
    if (show) {
      navbar.classList.add('active');
      menuIcon.style.display = 'none';
      crossIcon.style.display = 'block';
    } else {
      navbar.classList.remove('active');
      crossIcon.style.display = 'none';
      menuIcon.style.display = 'block';
    }
  }

  // Initial visibility setup
  if (isMobileView()) {
    crossIcon.style.display = 'none';
    navbar.classList.remove('active');
  } else {
    menuIcon.style.display = 'none';
    crossIcon.style.display = 'none';
    navbar.classList.add('active');
  }

  // Event listeners (run only on mobile)
  menuIcon.addEventListener('click', () => {
    if (isMobileView()) toggleMenu(true);
  });

  crossIcon.addEventListener('click', () => {
    if (isMobileView()) toggleMenu(false);
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (isMobileView()) toggleMenu(false);
    });
  });

  // Optional: re-check on resize
  window.addEventListener('resize', () => {
    if (!isMobileView()) {
      menuIcon.style.display = 'none';
      crossIcon.style.display = 'none';
      navbar.classList.add('active');
    } else {
      menuIcon.style.display = 'block';
      crossIcon.style.display = 'none';
      navbar.classList.remove('active');
    }
  });
