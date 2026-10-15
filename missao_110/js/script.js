// Função para registrar logs no painel
const painelLog = document.getElementById('log-painel');

function registrarLog(mensagem) {
    const novaLinha = document.createElement('div');
    novaLinha.textContent = `[${new Date().toLocaleTimeString()}] ${mensagem}`;
    painelLog.appendChild(novaLinha);
};

// Evento de mouse: click
const btnClique = document.getElementById('btn-clique');
const areaMouse = document.getElementById('area-mouse');

btnClique.addEventListener('click', function() {
    registrarLog("[CLICK] Evento de mouse: Evento 'click' disparado!");
});

// Evento de mouse: mouseenter
areaMouse.addEventListener('mouseenter', function() {
    areaMouse.textContent = "Mouse entrou na área!";
    areaMouse.style.backgroundColor = "#117d11";
    registrarLog("[MOUSE ENTROU] Evento de mouse: Evento 'mouseenter' disparado!");
});

// Evento de mouse: mouseleave
areaMouse.addEventListener('mouseleave', function() {
   areaMouse.textContent = "Mouse saiu da área!";
   areaMouse.style.backgroundColor = "#751414";
    registrarLog("[MOUSE SAIU] Evento de mouse: Evento 'mouseleave' disparado!");
});

// Evento de teclado: keydown
const campoTeclado = document.getElementById('campo-teclado');
campoTeclado.addEventListener('keydown', function(evento) {
    registrarLog("[TECLA PRESSIONADA] Teclado: Evento 'keydown' disparado!");
});

// Evento de teclado: keyup
campoTeclado.addEventListener('keyup', function(evento) {
    registrarLog("[TECLA LIBERADA] Teclado: Evento 'keyup' disparado!");
});

// Evento de formulário: input
const meuFormulario = document.getElementById('meu-formulario');
const campoInput = document.getElementById('campo-input');

campoInput.addEventListener('input', function() {
    registrarLog(`[INPUT] Formulário: Evento 'input' disparado! -> Valor atual: "${campoInput.value}"`);
});

// Evento de formulário: submit (acesso ao evento de envio via id do formulário)
meuFormulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); // Evita o envio do formulário para fins de demonstração
    registrarLog("[SUBMIT] Formulário: Evento 'submit' disparado!");
});

// Isso vai "funcionar", mas vai capturar apenas o clique no botão de envio, não o envio do formulário em si. Para capturar o envio do formulário, é melhor usar o evento 'submit' no próprio formulário.
// const campoEnvio = document.getElementById('campo-envio');
// campoEnvio.addEventListener('click', function(evento) {
//     evento.preventDefault(); // Evita o envio do formulário para fins de demonstração
//     registrarLog("[SUBMIT] Formulário: Evento 'submit' disparado!");
// });
 






