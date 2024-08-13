const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "A legalização do aborto é uma pauta muito discutida pela sociedade que divide opiniões. Alguns alegam questões de saúde, outros dizem ser uma desculpa para não assumir a responsabilidade e como toda situação tem aqueles que preferem ficar em cima do muro ou não expor sua opinião. Qual seu pensameto perante a questão abordada?",
        alternativas: [
            {
                texto:"Sou a favor do aborto, a mulher tem o direito de escolher se quer ou não, gerar um filho.",
                afirmacao: "você é uma mulher que apoia a liberdade de escolha e luta pelo direito sob seu proprío corpo"
            },
            {
                texto:"Sou contra, ninguém tem a liberdade de tirar a vida de alguém, logo que a vida é um direito.",
                afirmacao: "você é uma pessoa mais conservadora que apoia o direito a vida e tem instintos familiares"
            }   
        ]
    },
    {
        enunciado: "Vamos supor que, perante uma situação em que o bebê foi fruto de um abuso sexual, violando o direito de escolha da vítima e devido o acontecimento a vítima optar por abortar.",
        alternativas: [
            {
                texto: "Aceitaria o pedido de aborto, abuso sexual é crime, deixaria sequelas tanto na mãe quanto no bebê a deixando incapacitada de lidar com a maternidade.",
                afirmacao: "mesmo perante uma situação tão monstruosa você tenta lidar da melhor forma possível, deixando o emocional decidir por você."
            },
            {
                texto: "Negaria o pedido de aborto, mesmo o bebê sendo fruto de um ato criminoso ainda é uma vida. Caso a mãe opte por interromper a gestação terá de lidar com as consequências.",
                afirmacao: "mesmo perante uma situação tão monstruosa você tenta lidar da melhor forma possível, deixando a razão decidir por você."
            }
        ]
    },
    {
        enunciado: "Agora abordamos uma situação diferente, suponhamos que: um casal optam por não usarem nenhum método contraceptivo, logo se expondo ",
        alternativas: [
            {
                texto: "alternativa 05",
                afirmacao: "resultado 05"
            },
            {
                texto: "alternativa 06",
                afirmacao: "resultado 06"
            }
        ]
    },
    {
        enunciado: "Enunciado 04",
        alternativas: [
            {
                texto: "alternativa 07",
                afirmacao: "resultado 07"
            },
            {
                texto: "alternativa 08",
                afirmacao: "resultado 08"
            }
        ]
    },
    {
        enunciado: "Enunciado 05",
        alternativas: [
            {
                texto: "alternativa 09",
                afirmacao: "resultado 09"
            },
            {
                texto: "alternativa 10",
                afirmacao: "resultado 10"
            }
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostrarPerguntas(){
    if(atual >= perguntas.length){
        mostraResultado();
        return
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""
    mostrarAlternativas();
}

function mostrarAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostrarPerguntas();
}

function mostraResultado(){
    caixaPerguntas.textContent = " Inicio do texto... "
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostrarPerguntas();
