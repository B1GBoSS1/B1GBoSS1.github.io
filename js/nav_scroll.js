window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  
  if (window.innerWidth >= 800) {
    if (window.scrollY > 120) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  if(800 > window.innerWidth >= 600) {
    if (window.scrollY > 150) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  } 
  else {
    if (window.scrollY > 160) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
});