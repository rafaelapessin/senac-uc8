const btnGravador = document.getElementById('btn-gravador');
const statusGravacao = document.getElementById('status-gravacao');

// Função para iniciar a gravação
function iniciarGravacao() {
    btnGravador.style.backgroundColor = '#e74c3c';
    btnGravador.textContent = 'Gravando... Não Solte!';
    statusGravacao.textContent = 'Status: Capturando áudio...';
}

// Função para parar a gravação
function pararGravacao() {
    btnGravador.style.backgroundColor = '#3498db';
    btnGravador.textContent = 'Clique e Segure para Gravar';
    statusGravacao.textContent = 'Status: Gravação concluída e enviada!';
}
// Captura eventos de pressionar e soltar o botão do gravador
// btnGravador.addEventListener('mousedown', iniciarGravacao);
// btnGravador.addEventListener('mouseup', pararGravacao);

// Captura eventos de pressionar e soltar o botão do gravador
// btnGravador.addEventListener('touchstart', iniciarGravacao);
// btnGravador.addEventListener('touchend', pararGravacao);

// A principal diferença é que o pointerdow/pointerup são eventos unificados para qualquer tipo de entrada (mouse, toque ou caneta stylus), enquanto o touchstart é exclusivo para telas sensíveis ao toque (touchscreens). Se você deseja que a gravação funcione em dispositivos com tela sensível ao toque, é recomendável usar pointerdown/pointerup, pois eles são mais abrangentes e funcionam em uma variedade de dispositivos. Além disso, o pointerdown/pointerup também podem ser usados em dispositivos que não possuem tela sensível ao toque, como computadores desktop com mouse.
btnGravador.addEventListener('pointerdown', iniciarGravacao);
btnGravador.addEventListener('pointerup', pararGravacao);