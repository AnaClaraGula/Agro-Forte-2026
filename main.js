const perguntas = [
    {
        pergunta: "Qual prática ajuda na preservação do solo?",
        opcoes: [
            "Queimadas frequentes",
            "Rotação de culturas",
            "Desmatamento excessivo"
        ],
        correta: 1
    },

    {
        pergunta: "Qual fonte de energia é considerada limpa e renovável?",
        opcoes: [
            "Petróleo",
            "Carvão mineral",
            "Energia solar"
        ],
        correta: 2
    },

    {
        pergunta: "O que a agricultura de precisão utiliza?",
        opcoes: [
            "Tecnologia e sensores",
            "Queimadas",
            "Desmatamento"
        ],
        correta: 0
    },

    {
        pergunta: "Qual atitude contribui para a economia de água no campo?",
        opcoes: [
            "Irrigação eficiente",
            "Desperdício de água",
            "Vazamentos"
        ],
        correta: 0
    },

    {
        pergunta: "Qual é um benefício do agro sustentável?",
        opcoes: [
            "Aumento da poluição",
            "Preservação ambiental",
            "Desmatamento"
        ],
        correta: 1
    },

    {
        pergunta: "Qual tecnologia auxilia no monitoramento das lavouras?",
        opcoes: [
            "Drones",
            "Fogueiras",
            "Queimadas"
        ],
        correta: 0
    },

    {
        pergunta: "O uso de energia solar no campo ajuda a:",
        opcoes: [
            "Aumentar a poluição",
            "Produzir energia limpa",
            "Desperdiçar recursos"
        ],
        correta: 1
    }
];

let perguntaAtual = 0;
let pontuacao = 0;

const perguntaElemento = document.getElementById("pergunta");
const opcoesElemento = document.getElementById("opcoes");
const resultadoElemento = document.getElementById("resultado");

function carregarPergunta() {

    if (perguntaAtual >= perguntas.length) {

        perguntaElemento.innerHTML = "🎉 Quiz Finalizado!";

        opcoesElemento.innerHTML = "";

        resultadoElemento.innerHTML =
            `Você acertou ${pontuacao} de ${perguntas.length} perguntas.`;

        if (pontuacao === perguntas.length) {
            resultadoElemento.innerHTML +=
                "<br><br>🏆 Parabéns! Você domina o tema Agro Sustentável!";
        } else if (pontuacao >= 4) {
            resultadoElemento.innerHTML +=
                "<br><br>🌱 Muito bem! Você conhece bastante sobre sustentabilidade no campo.";
        } else {
            resultadoElemento.innerHTML +=
                "<br><br>📚 Continue aprendendo sobre Agro Sustentável!";
        }

        return;
    }

    perguntaElemento.innerHTML =
        perguntas[perguntaAtual].pergunta;

    opcoesElemento.innerHTML = "";

    perguntas[perguntaAtual].opcoes.forEach((opcao, indice) => {

        const botao = document.createElement("button");

        botao.innerText = opcao;

        botao.addEventListener("click", () => {
            verificarResposta(indice);
        });

        opcoesElemento.appendChild(botao);

    });

    resultadoElemento.innerHTML =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;
}

function verificarResposta(indiceSelecionado) {

    if (
        indiceSelecionado ===
        perguntas[perguntaAtual].correta
    ) {
        pontuacao++;
    }

    perguntaAtual++;

    carregarPergunta();
}

carregarPergunta();
// Botão de acessibilidade
const botaoAcessibilidade =
document.getElementById("acessibilidade-btn");

botaoAcessibilidade.addEventListener("click", () => {

    document.body.classList.toggle("fonte-grande");

    if(document.body.classList.contains("fonte-grande")){
        botaoAcessibilidade.innerHTML = "🔎 Fonte Normal";
    } else {
        botaoAcessibilidade.innerHTML = "🔍 Acessibilidade";
    }

});