let jogadorAtual = 'X';

function jogar(botao) {
    if (botao.innerText === '') { 
        botao.innerText = jogadorAtual; 
        jogadorAtual = (jogadorAtual === 'X') ? 'O' : 'X'; 
    }
}

const botoes = document.querySelectorAll('td');

botoes.forEach((botao) => {
    botao.addEventListener('click', function() {
        jogar(botao);
    });
});
