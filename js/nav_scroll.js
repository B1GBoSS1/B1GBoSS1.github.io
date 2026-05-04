window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  
  if (window.innerWidth >= 800) {
    if (window.scrollY > 140) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  if(window.innerWidth < 800 && window.innerWidth >= 600) {
    if (window.scrollY > 64) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  } 
  if(window.innerWidth < 600) {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
});