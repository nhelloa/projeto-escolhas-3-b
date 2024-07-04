const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativa = document.querySelector9('.caix-alternativas');
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
    }

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

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

mostraPergunta();

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function(){
            atual++;
            mostraPergunta();
        })
        caixaAlternativa.appendChild(botaoAlternativas)
    }
}

mostraPergunta();