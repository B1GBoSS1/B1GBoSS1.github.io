let current = 0;
const total = document.querySelectorAll('.slide').length;

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.arrow.left').addEventListener('click', () => slide(-1));
  document.querySelector('.arrow.right').addEventListener('click', () => slide(1));

  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goTo(index));
  });
});

function updateCarousel() {
  const slides = document.querySelector('.slides');
  const dots = document.querySelectorAll('.dot');

  slides.style.transform = `translateX(-${current * 100}%)`;

  dots.forEach(d => d.classList.remove('active'));
  dots[current].classList.add('active');
}

function slide(direction) {
  current = (current + direction + total) % total;
  updateCarousel();
}

function goTo(index) {
  current = index;
  updateCarousel();
}