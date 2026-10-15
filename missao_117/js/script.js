
// URL da API (endpoint)
const apiUrl = 'https://api.disneyapi.dev/character';

let paginaAtual = 1;        // Página que será carregada; começa da página 1 e vai até a página N
let totalCarregados = 0;    // Quantidade total de personagens carregados por página

let container = document.getElementById('disney-container');
let botaoCarregar = document.getElementById('btn-carregar');
let contador = document.getElementById('contador');
let mensagem = document.getElementById('mensagem');

// --------------------------------------------------
// FUNÇÃO PARA CARREGAR OS PERSONAGENS
// --------------------------------------------------

function carregarPersonagens() {

    botaoCarregar.disabled = true;      // Desabilita o botão enquanto a API responde
    mensagem.textContent = 'Carregando personagens...';

    // Monta a URL da página atual
    let url = apiUrl + '?page=' + paginaAtual + '&pageSize=50';

    fetch(url)      // Faz a requisição para a API usando o endpoint
        .then(function (resposta) {     // Converte a resposta para JSON
            return resposta.json();
        })

        .then(function (resultado) {    // Aqui vamos manipular os dados recebidos

            // --------------------------------------------------
            // MOSTRA NO CONSOLE EXATAMENTE O QUE A API RETORNOU
            // --------------------------------------------------

            console.log('Resposta completa da API:');
            console.log(resultado);
            console.log('Informações da paginação:');
            console.log(resultado.info);

            let lista_personagens = resultado.data;     // Pega a lista de personagens
            console.log('Personagens recebidos:' + lista_personagens);
            // Loop para percorrer os personagens uma a um
            // Para cada personagem acessado no JSON retornado, chama a função de criar card para inserir o personagem no cartão
            for (let i = 0; i < lista_personagens.length; i++) {
                let personagem = lista_personagens[i];
                criarCard(personagem);
            }

            totalCarregados = totalCarregados + lista_personagens.length;       // Atualiza a quantidade de personagens
            contador.textContent = totalCarregados + ' personagens carregados';

            if (resultado.info.nextPage) {      // Verifica se existe a próxima página, se existirem 
                botaoCarregar.disabled = false;
                mensagem.textContent = 'Página ' + paginaAtual;

            }
            else {              // Se não existem mais páginas
                botaoCarregar.style.display = 'none';
                mensagem.textContent = 'Todos os personagens foram carregados!';
            }

        })

        // Tratamento de erro
        .catch(function (erro) {
            console.error('Erro ao consultar a API:', erro);
            mensagem.textContent = 'Erro ao carregar os personagens.';
            botaoCarregar.disabled = false;
        });
}

// Função para criar o card com o personagem
function criarCard(personagem) {

    let card = document.createElement('div');       // Cria uma div
    card.className = 'card';        // Adiciona a classe CSS para que possamos criar a estilização

    if (personagem.imageUrl) {      // Verifica se o personagem possui imagem, se tiver, adiciona imagem e nome no card
        card.innerHTML = '<img src="' + personagem.imageUrl + '" alt="' + personagem.name + '">' + '<h3>' + personagem.name + '</h3>';
    }
    else {      // Se não tiver, adiciona só nome no card
        card.innerHTML = '<h3>' + personagem.name + '</h3>';
    }
    container.appendChild(card);        // Coloca o card dentro do container
}

// Evento de mouse
botaoCarregar.addEventListener('click', function () {
        paginaAtual++;                  // Vai para a próxima página
        console.log('Carregando página:', paginaAtual);
        carregarPersonagens();          // Carrega os novos personagens
    }
);

// Inicializar a primeia requisição à API
carregarPersonagens();