let currentIndex = 0;
const items = document.querySelectorAll('.slider-item');

function showSlide(index) {
  items.forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % items.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showSlide(currentIndex);
}

showSlide(currentIndex);
