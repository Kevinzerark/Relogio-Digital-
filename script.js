function atualizarRelogio() {
    let horaAtual = new Date();

    let horas = horaAtual.getHours();
    let minutos = horaAtual.getMinutes();
    let segundos = horaAtual.getSeconds();

    if (horas < 10) {
        horas = '0' + horas;
    }

    if (minutos < 10) {
        minutos = '0' + minutos;
    }

    if (segundos < 10) {
        segundos = '0' + segundos;
    }

    // Atualiza o conteúdo das caixas de horas, minutos e segundos
    document.getElementById('horas').innerText = horas;
    document.getElementById('minutos').innerText = minutos;
    document.getElementById('segundos').innerText = segundos;
}

setInterval(atualizarRelogio, 1000);

atualizarRelogio();