// ============================================================================
// PAINEL DE LOGS: CONFIGURAÇÃO DE AUXÍLIO PARA EXIBIÇÃO NA TELA
// ============================================================================

// Busca no documento HTML um elemento que possua o ID exatamente igual a 'log-painel'
// e guarda a referência desse elemento dentro da constante 'painelLog' para usarmos depois.
const painelLog = document.getElementById('log-painel');

// Declara uma função tradicional chamada 'registrarLog' que aceita um parâmetro chamado 'mensagem'.
// Essa função serve para inserir textos formatados dentro da nossa caixinha de logs na página.
function registrarLog(mensagem) {
  
  // Cria um novo elemento HTML do tipo <div> na memória do navegador, mas ainda não o coloca na tela.
  const novaLinha = document.createElement('div');
  
  // Define o texto interno dessa nova <div>. O uso de crases (``) permite criar uma String Template.
  // 'new Date().toLocaleTimeString()' gera o horário atual formatado como string (ex: 14:30:15).
  // '${mensagem}' injeta o texto que foi passado como argumento ao chamar a função.
  novaLinha.textContent = `[${new Date().toLocaleTimeString()}] ${mensagem}`;
  
  // Pega a nova <div> criada e a adiciona como um elemento "filho" no final da caixinha 'painelLog'.
  // É isso que faz o texto aparecer visualmente na tela para o usuário.
  painelLog.appendChild(novaLinha);
  
  // Altera a rolagem vertical (scrollTop) do painel de logs para que ela fique igual à altura total interna (scrollHeight).
  // Isso faz com que a barra de rolagem desça sozinha automaticamente sempre que um log novo chegar.
}

// ============================================================================
// 1. CÓDIGOS DOS EVENTOS DE MOUSE
// ============================================================================

// Procura no HTML o elemento com o ID 'btn-clique' (o botão) e armazena na constante.
const btnClique = document.getElementById('btn-clique');

// Procura no HTML o elemento com o ID 'area-mouse' (o bloco vermelho) e armazena na constante.
const areaMouse = document.getElementById('area-mouse');

// Adiciona um ouvinte para o evento 'click' no botão usando uma função anônima tradicional.
// Quando o usuário pressionar e soltar o botão esquerdo do mouse sobre ele, a função executa.
btnClique.addEventListener('click', function() {
  // Chama a nossa função de logs passando a mensagem explicando o ocorrido.
  registrarLog("Mouse: Evento 'click' disparado no botão.");
});

// Adiciona um ouvinte para o evento 'mouseenter' usando uma função anônima tradicional.
// Esse evento é ativado no exato milissegundo em que o cursor do mouse ultrapassa a borda e entra no bloco 'areaMouse'.
areaMouse.addEventListener('mouseenter', function() {
  // Acessa a propriedade 'style' do elemento e muda a cor de fundo (backgroundColor) para a cor hexadecimal verde.
  areaMouse.style.backgroundColor = '#2ecc71';
  
  // Altera o texto visível dentro do bloco para 'Mouse Entrou!'.
  areaMouse.textContent = 'Mouse Entrou!';
  
  // Envia a notificação do evento para o nosso painel de logs na tela.
  registrarLog("Mouse: Evento 'mouseenter' disparado.");
});

// Adiciona um ouvinte para o evento 'mouseleave' usando uma função anônima tradicional.
// Esse evento é ativado no momento em que o cursor do mouse sai de dentro do bloco 'areaMouse'.
areaMouse.addEventListener('mouseleave', function() {
  // Restaura a cor de fundo original do elemento para a cor hexadecimal vermelha.
  areaMouse.style.backgroundColor = '#e74c3c';
  
  // Restaura o texto original para instruir o usuário novamente.
  areaMouse.textContent = 'Passe o mouse aqui';
  
  // Registra no painel que o mouse saiu da região do bloco.
  registrarLog("Mouse: Evento 'mouseleave' disparado.");
});

// ============================================================================
// 2. CÓDIGOS DOS EVENTOS DE TECLADO
// ============================================================================

// Localiza o campo de entrada de texto que possui o ID 'campo-teclado'.
const campoTeclado = document.getElementById('campo-teclado');

// Adiciona um ouvinte para o evento 'keydown' usando uma função anônima tradicional.
// Esse evento roda quando qualquer tecla é pressionada enquanto o campo está focado.
// Passamos o parâmetro 'evento' (que representa um objeto com detalhes do que aconteceu).
campoTeclado.addEventListener('keydown', function(evento) {
  // 'evento.key' lê qual foi a tecla exata capturada pelo teclado (ex: 'a', 'Enter', 'Shift').
  registrarLog(`Teclado: Evento 'keydown' -> Tecla pressionada: "${evento.key}"`);
});

// Adiciona um ouvinte para o evento 'keyup' usando uma função anônima tradicional.
// Esse evento roda no momento em que o usuário levanta/solta a tecla que estava pressionando.
campoTeclado.addEventListener('keyup', function(evento) {
  // Registra no log qual tecla acabou de ser liberada pelo dedo do usuário.
  registrarLog(`Teclado: Evento 'keyup' -> Tecla solta: "${evento.key}"`);
});

// ============================================================================
// 3. CÓDIGOS DOS EVENTOS DE FORMULÁRIO
// ============================================================================

// Captura a tag <form> da página através do seu ID 'meu-formulario'.
const meuFormulario = document.getElementById('meu-formulario');

// Captura o input de texto de dentro do formulário usando o ID 'campo-input'.
const campoInput = document.getElementById('campo-input');

// Adiciona um ouvinte para o evento 'input' usando uma função anônima tradicional.
// O 'input' é disparado instantaneamente a cada letra digitada, apagada ou colada no campo.
campoInput.addEventListener('input', function(evento) {
  // 'evento.target' se refere ao próprio campo de texto. '.value' pega o texto atualizado que está escrito nele.
  registrarLog(`Formulário: Evento 'input' -> Texto atual: "${evento.target.value}"`);
});

// Adiciona um ouvinte para o evento 'change' usando uma função anônima tradicional.
// Diferente do 'input', o 'change' só roda quando o usuário muda o texto e "confirma" a mudança.
// Essa confirmação ocorre quando ele clica fora do campo ou pressiona Enter, fazendo o campo perder o foco (blur).
campoInput.addEventListener('change', function() {
  // Registra o valor que foi consolidado após a perda de foco.
  registrarLog(`Formulário: Evento 'change' -> Valor final confirmado: "${campoInput.value}"`);
});

// Adiciona um ouvinte para o evento 'submit' diretamente na tag do formulário com uma função tradicional.
// Ele intercepta o momento em que o usuário clica no botão "Enviar Formulário" ou aperta Enter.
// meuFormulario.addEventListener('submit', function(evento) {
  
//   // O comportamento padrão de um formulário HTML ao ser enviado é recarregar toda a página.
//   // O comando 'evento.preventDefault()' cancela esse comportamento padrão.
//   // Fazemos isso para impedir que a página recarregue e apague todo o nosso histórico de logs da tela.
//   evento.preventDefault();
  
//   // Exibe a mensagem de sucesso no painel informando que o formulário foi processado sem recarregar.
//   registrarLog("Formulário: Evento 'submit' detectado! (Envio padrão cancelado com preventDefault)");
// });

// meuFormulario.addEventListener('submit', function(evento) {
  
//   // O comportamento padrão de um formulário HTML ao ser enviado é recarregar toda a página.
//   // O comando 'evento.preventDefault()' cancela esse comportamento padrão.
//   // Fazemos isso para impedir que a página recarregue e apague todo o nosso histórico de logs da tela.
//   evento.preventDefault();
  
//   // Exibe a mensagem de sucesso no painel informando que o formulário foi processado sem recarregar.
//   registrarLog("Formulário: Evento 'submit' detectado! (Envio padrão cancelado com preventDefault)");
// });
const campoEnvio = document.getElementById('campo-envio');
campoEnvio.addEventListener('submit', function(evento) {
  
  // O comportamento padrão de um formulário HTML ao ser enviado é recarregar toda a página.
  // O comando 'evento.preventDefault()' cancela esse comportamento padrão.
  // Fazemos isso para impedir que a página recarregue e apague todo o nosso histórico de logs da tela.
  evento.preventDefault();
  
  // Exibe a mensagem de sucesso no painel informando que o formulário foi processado sem recarregar.
  registrarLog("Formulário: Evento 'submit' detectado! (Envio padrão cancelado com preventDefault)");
});

// ============================================================================
// 4. CÓDIGOS DOS EVENTOS DE JANELA / PÁGINA (WINDOW / DOCUMENT)
// ============================================================================

// Localiza o parágrafo no HTML com o ID 'info-janela' para exibir as dimensões da tela.
const infoJanela = document.getElementById('info-janela');

// Adiciona um ouvinte na variável global 'window' para o evento 'resize' usando uma função tradicional.
// Esse evento é acionado continuamente enquanto você arrasta as bordas do navegador para alterar o tamanho dele.
window.addEventListener('resize', function() {
  
  // 'window.innerWidth' lê a largura interna atual da janela em pixels.
  const largura = window.innerWidth;
  
  // 'window.innerHeight' lê a altura interna atual da janela em pixels.
  const altura = window.innerHeight;
  
  // Atualiza o texto do parágrafo na tela mostrando as novas medidas atualizadas.
  infoJanela.textContent = `Tamanho atual: ${largura}px x ${altura}px`;
  
  // Registra as novas dimensões no painel de controle de logs.
  registrarLog(`Janela: Evento 'resize' -> Redimensionado para ${largura}x${altura}`);
});

// Adiciona um ouvinte em 'window' para o evento 'scroll' usando uma função tradicional.
// Ele é disparado várias vezes por segundo enquanto o usuário rola a barra lateral para cima ou para baixo.
window.addEventListener('scroll', function() {
  // Registra o movimento de rolagem. Nota: Para testar na página atual, reduza a janela até surgir uma barra de rolagem.
  registrarLog(`Janela: Evento 'scroll' detectado na página.`);
});

// Adiciona um ouvinte no objeto global 'document' para o evento 'DOMContentLoaded' usando uma função tradicional.
// Este evento roda no momento exato em que o navegador terminou de ler todo o HTML e montou a árvore de elementos (DOM).
// Ele é ótimo para inicializar códigos, pois garante que os elementos já existem e não retornará erros de 'undefined'.
document.addEventListener('DOMContentLoaded', function() {
  // Imprime que a estrutura básica da página está montada e pronta para interação.
  registrarLog("Janela: Evento 'DOMContentLoaded' finalizado. Estrutura pronta!");
});