let linguagemTimer = 'pt-br';

localStorage.setItem('websiteLanguage', linguagemTimer);

function calcularTempo(dataAlvo, tipos, modo) {
    const agora = new Date();
    let diferenca = dataAlvo - agora;

    if (modo === 'faz') {
        diferenca = agora - dataAlvo;
    }

    const umSegundo = 1000;
    const umMinuto = umSegundo * 60;
    const umaHora = umMinuto * 60;
    const umDia = umaHora * 24;
    const umMes = umDia * 30.44;
    const umAno = umDia * 365.25;

    let resultado = '';

    tipos.forEach(tipo => {
        let valor = 0;
        let unidade = '';

        if (tipo === 'ano') {
            valor = Math.floor(diferenca / umAno);
            unidade = valor > 1 ? 'anos' : 'ano';
            diferenca %= umAno;
        } else if (tipo === 'anosIdade') {
            valor = Math.floor(diferenca / umAno);
            unidade = valor > 1 ? 'anos' : 'ano';
            diferenca %= umAno;
        } else if (tipo === 'mes') {
            valor = Math.floor(diferenca / umMes);
            unidade = valor > 1 ? 'meses' : 'mês';
            diferenca %= umMes;
        } else if (tipo === 'dia') {
            valor = Math.floor(diferenca / umDia);
            unidade = valor > 1 ? 'dias' : 'dia';
            diferenca %= umDia;
        } else if (tipo === 'hora') {
            valor = Math.floor(diferenca / umaHora);
            unidade = valor > 1 ? 'horas' : 'hora';
            diferenca %= umaHora;
        } else if (tipo === 'minuto') {
            valor = Math.floor(diferenca / umMinuto);
            unidade = valor > 1 ? 'minutos' : 'minuto';
            diferenca %= umMinuto;
        } else if (tipo === 'segundo') {
            valor = Math.floor(diferenca / umSegundo);
            unidade = valor > 1 ? 'segundos' : 'segundo';
        }

        if (valor > 0) resultado += `${valor} ${unidade} `;
    });

    return resultado.trim();
}

function atualizarContagensTimer() {
    const elementos = document.querySelectorAll('.contagem[data-alvo]');

    elementos.forEach(elemento => {
        const dataAlvo = new Date(elemento.getAttribute('data-alvo'));
        const tipos = elemento.getAttribute('data-tipo').split(',');
        const modo = elemento.getAttribute('data-mod');

        const tempo = calcularTempo(dataAlvo, tipos, modo);
        elemento.innerText = tempo || '0 segundos';
    });
}

function setLanguageTimer(lang) {
    linguagemTimer = 'pt-br';
    localStorage.setItem('websiteLanguage', linguagemTimer);
    atualizarContagensTimer();
}

window.addEventListener('languageChanged', () => {
    linguagemTimer = localStorage.getItem('websiteLanguage') || 'pt-br';
    atualizarContagensTimer();
});


document.addEventListener('DOMContentLoaded', () => {
    atualizarContagensTimer();
    setInterval(atualizarContagensTimer, 1000);
});