// DECLARANDO VARIAVEIS REFERENCIANDO OS ITENS

const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

import questions from "./questions.js";

// DECLARANDO VARIAVEIS COM O INDEX ATUAL DE CADA QUESTÃO
// E A OUTRA A QUANTIDADE DE ACERTOS

var currentIndex = 0;
var questionsCorrect = 0;



function loadQuestion() {
  spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
  const item = questions[currentIndex];
  // AQUI GARANTINDO QUE O innerHTML RESPOSTA SEMPRE ESTEJA VAZIO
  answers.innerHTML = "";
  // E AQUI QUE A QUESTION ESTEJA COM O ITEM DA QUESTÃO ATUAL
  question.innerHTML = item.question;

  // CRIANDO O FOREACH PARA O ITEM, E DENTRO UMA DIV TENDO NO inneHTML UM BUTTON COM O ATRIBUTO DE DATA-CORRECT 
  // PARA ELE ARMAZENAR QUAL A CORRETA E A ERRADA E MOSTRAR A OPÇÃO
  item.answers.forEach((answer) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
    ${answer.option}
    </button>
    `;

    // ATRIBUINDO DENTRO DE ANSWERS A DIV
    answers.appendChild(div);
  });

  document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", nextQuestion);
  });
}



// ESSA FUCTION VAI VERIFICAR SE O ATRIBUTO "data-correct" É IGUAL A TRUE E SE FOR ELE SOMA MAIS UM
function nextQuestion(e) {
  if (e.target.getAttribute("data-correct") === "true") {
    questionsCorrect++;
  }
  // AQUI ELE VERIFICA SE NÃO É A ULTIMA QUESTÃO, SE NÃO FOR ELE SOMA MAIS UM E CHAMA A FUNCTION "loadQuestion()".. 
  // CASO FOR A ULTIMA ULTIMA QUESTÃO ELE CHAMA A FUNCTION "finish()" ONDE MOSTRA A QUANTIDADE DE QUESTÃO ACERTADAS  
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    finish();
  }
}



function finish() {
  textFinish.innerHTML = `Você acertou ${questionsCorrect} de ${questions.length}`;
  content.style.display = "none";
  contentFinish.style.display = "flex";
  questionsCorrect
  console.log(questionsCorrect);
  var usuario = sessionStorage.ID_USUARIO;


  fetch("/usuarioQuiz/finish", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js

      questionsCorrectServer: questionsCorrect,
      usuarioServer: usuario

    })
  }).then(function (resposta) {

    console.log("resposta: ", resposta);

    if (resposta.ok) {
      cardErro.style.display = "block";

      mensagem_erro.innerHTML = `Obrigado por responder o Quiz...<br>Você acertou ${(questionsCorrect / 10) * 100}%`;

      // setTimeout(() => {
      //   window.location = "login.html";
      // }, "2000")

    } else {
      throw ("Houve um erro ao tentar cadastrar o resultado!");
    }
  }).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
    // finalizarAguardar();
  });

  return false;

}



btnRestart.onclick = () => {
  content.style.display = "flex";
  contentFinish.style.display = "none";

  // RESETANDO AS VERIASVEIS E CHAMANDO E CHAMANDO A FUNCTION "loadQuestion()"
  currentIndex = 0;
  questionsCorrect = 0;
  loadQuestion();
};


loadQuestion();
