console.log("JavaScript conectado!");

const carrossel = document.querySelector('.carrossel');
const btnProximo = document.querySelector('.btn-proximo');
const btnAnterior = document.querySelector('.btn-anterior');

const item = document.querySelector('.carrossel-item');
const gap = parseInt(getComputedStyle(carrossel).gap) || 0;
const scrollValor = item.offsetWidth + gap;

btnProximo.addEventListener('click', () => {
  carrossel.scrollBy({ left: scrollValor, behavior: 'smooth' });
});

btnAnterior.addEventListener('click', () => {
  carrossel.scrollBy({ left: -scrollValor, behavior: 'smooth' });
});