const anoAtual = document.querySelector('#ano-atual');

// Obtém o ano atual e insere o valor no rodapé
anoAtual.textContent = new Date().getFullYear();
