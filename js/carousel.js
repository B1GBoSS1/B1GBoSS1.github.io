let current = 0;
const total = document.querySelectorAll('.slide').length;

function updateCarousel() {
  const slides = document.querySelector('.slides');
  const dots = document.querySelectorAll('.dot');

  slides.style.transform = `translateX(-${current * 100}%)`;

  dots.forEach(d => d.classList.remove('active'));
  dots[current].classList.add('active');
}

function slide(direction) {
  current = (current + direction + total) % total;  /* wraps around */
  updateCarousel();
}

function goTo(index) {
  current = index;
  updateCarousel();
}