const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativa = document.querySelector('.caix-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');
const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativa: [
            "Alternativa 1",
            "Alternativa 2",
        ]
    },

    {
        enunciado: "Pergunta 2",
        alternativa: [
            "Alternativa 1",
            "Alternativa 2",
        ]
    },

    {
        enunciado: "Pergunta 3",
        alternativa: [
            "Alternativa 1",
            "Alternativa 2",
        ]
    },

    {
        enunciado: "Pergunta 4",
        alternativa: [
            "Alternativa 1",
            "Alternativa 2",
        ]
    },

    {
        enunciado: "Pergunta 5",
        alternativa: [
            "Alternativa 1",
            "Alternativa 2",
        ]
    },
]

let atual = 0;
let perguntaAtual;

function mostrarPerguntas(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostrarAlternativas();
}

function mostrarAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostrarPerguntas();