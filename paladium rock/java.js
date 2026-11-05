const carousel = document.querySelector('.carousel');
const inner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');

let current = 0;
const total = items.length;
let autoplay;

// Crear dots dinámicamente
items.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.classList.add('dot');
  dot.addEventListener('click', () => goTo(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function goTo(index) {
  current = (index + total) % total; // wrap-around
  inner.style.transform = `translateX(-${current * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === current));
}

function next() { goTo(current + 1); }
function prev() { goTo(current - 1); }

// Autoplay
function startAutoplay() {
  autoplay = setInterval(next, 3000);
}

function stopAutoplay() {
  clearInterval(autoplay);
}

// Eventos
nextBtn.addEventListener('click', () => { next(); startAutoplay(); });
prevBtn.addEventListener('click', () => { prev(); startAutoplay(); });

// Pausa al hover
carousel.addEventListener('mouseenter', stopAutoplay);
carousel.addEventListener('mouseleave', startAutoplay);

// Init
goTo(0);
startAutoplay();   