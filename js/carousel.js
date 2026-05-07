let current = 0;

document.addEventListener('DOMContentLoaded', () => {
  const leftBtn = document.querySelector('.arrow.left');
  const rightBtn = document.querySelector('.arrow.right');
  const dots = document.querySelectorAll('.dot');

  if (leftBtn && rightBtn) {
      leftBtn.addEventListener('click', () => slide(-1));
      rightBtn.addEventListener('click', () => slide(1));
  }

  dots.forEach((dot, index) => {
      dot.addEventListener('click', () => goTo(index));
  });
});

function updateCarousel() {
  const slides = document.querySelector('.slides');
  const dots = document.querySelectorAll('.dot');
  
  if (!slides) return;

  slides.style.transform = `translateX(-${current * 100}%)`;

  dots.forEach(d => d.classList.remove('active'));
  if (dots[current]) dots[current].classList.add('active');
}

function slide(direction) {
  const total = document.querySelectorAll('.slide').length; 
  current = (current + direction + total) % total;
  updateCarousel();
}

function goTo(index) {
  current = index;
  updateCarousel();
}