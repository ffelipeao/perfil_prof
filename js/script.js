const anoAtual = document.querySelector('#ano-atual');
const secoes = document.querySelectorAll('main section[id]');
const linksMenu = document.querySelectorAll('.menu__links a');

anoAtual.textContent = new Date().getFullYear();

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;

        linksMenu.forEach((link) => {
            const secaoAtual = link.getAttribute('href') === `#${entrada.target.id}`;
            link.classList.toggle('ativo', secaoAtual);
        });
    });
}, { rootMargin: '-35% 0px -55%' });

secoes.forEach((secao) => observador.observe(secao));
