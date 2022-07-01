function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
let decemberDaysList = [
  29,
  30,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31];


function diasDoMes() {
  //primeiro passo, pegar <ul> com quarySelector, onde vai ficar minha lista
  let pegandoIdDays = document.querySelector('#days');

  //segundo passo, percorrei o array (decemberDaysList) com for
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    //terceiro passo, adicionar a posição do array[index] numa variavel
    let minhaPosicaoIndex = decemberDaysList[index];
    //quarto passo, criar o elemento li dentro de uma variavel
    let elementoLi = document.createElement('li');
    //quinto passo, na mesma variavel que criei o elemento li, adiciona num innerHTML = a variavel anterior (que significa que minha li recebe a posição [index])
    elementoLi.innerHTML = minhaPosicaoIndex
    //DEPOIS PRECISO CRIAR CONDICIONAIS PARA OS DIAS
    //sexto passo, após criar as as condicionais, dou a classe pra elas, e um appendChild na ul, pegando o elemento li
    if (minhaPosicaoIndex === 24 || minhaPosicaoIndex === 31) {
      //setimo passo criar uma classe day e holiday para esses dias
      elementoLi.className = 'day holiday'
      //oitavo passo adicionar o elementoLi na minha <ul> que esta na variavel pegandoIdDays
      pegandoIdDays.appendChild(elementoLi)

    } else if (minhaPosicaoIndex === 4 || minhaPosicaoIndex === 11 || minhaPosicaoIndex === 18) {
      elementoLi.className = 'day friday'
      pegandoIdDays.appendChild(elementoLi)

    } else if (minhaPosicaoIndex === 25) {
      elementoLi.className = 'day holiday friday'
      pegandoIdDays.appendChild(elementoLi)

    } else {
      elementoLi.className = 'day'
      pegandoIdDays.appendChild(elementoLi)
    }




  }

}

// chamar a função no final
diasDoMes();



// 🚀 Exercício 2:
// Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
// Sua função deve receber um parâmetro com a string 'Feriados'
// Adicione a este botão a ID "btn-holiday"
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container"


function butonn(Feriados) {
  // primeiro passo pegar a div container onde vou criar meu botao
  let pegaButtonContainer = document.querySelector('.buttons-container');
  // segundo passo criar o botao
  let criaButton = document.createElement('button');
  // terceiro passo adicionar uma ID
  criaButton.id = 'btn-holiday';
  // quarto passo colocar no HTML
  criaButton.innerHTML = Feriados
  // quinto passo colocar o botao dentro da div .buttons-container
  pegaButtonContainer.appendChild(criaButton)

}

butonn('Feriados')

//////////////////////////////////////////////////////////

// 🚀 Exercício 3:
// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor "rgb(238,238,238)".


function mudaCorHoliday() {
  // pega o botao pela ID
  let pegaBotaoHoliday = document.querySelector('#btn-holiday');
  // pega todas as classes com querySelectorAll
  let pegaTodasClassesHoliday = document.querySelectorAll('.holiday');
  // armazena o backgroundColor numa variavel
  let backgroundColor = 'rgb(238,238,238)';
  // armazena nova cor numa variavel
  let novaCor = 'white';
  // cria o event listener de click na variavel pegaBotaoHoliday
  pegaBotaoHoliday.addEventListener('click', function () {
    // cria um for pra percorrer as classes
    for (let index = 0; index < pegaTodasClassesHoliday.length; index += 1) {
      // se a minha classe na posição index tiver a mesma cor que a nova cor
      if (pegaTodasClassesHoliday[index].style.backgroundColor === novaCor) {
        //entao executa esse codigo dizendo que a posição index recebe minha variabel backgroundColor que eu armazenei
        pegaTodasClassesHoliday[index].style.backgroundColor === backgroundColor

      } else {
        // se nao pega minha posição index e define a cor branca que armazenei na variavel novaCor
        pegaTodasClassesHoliday[index].style.backgroundColor = novaCor
      }

    }
  });
}

mudaCorHoliday()