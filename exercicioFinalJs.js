//1 - 🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
let pegaTagPaiBody = document.querySelector("Body");
let tagH1 = document.createElement("h1");
tagH1.className = "title"
pegaTagPaiBody.appendChild(tagH1)

let textoH1 = document.createTextNode("Exercício 5.2 - JavaScript DOM")
tagH1.appendChild(textoH1)


//2 🚀 Adicione a tag main com a classe main-content como filho da tag body;

let tagMain = document.createElement("main");
tagMain.className = "main-content";

pegaTagPaiBody.appendChild(tagMain)

/////////////////////////////////

//3 🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

let pegaTagMainPai = document.querySelector("main");
let tagSection = document.createElement("section")
tagSection.className = "center-content";

pegaTagMainPai.appendChild(tagSection)

//4 🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let pegaTagSection = document.querySelector('section');
let criaTagP = document.createElement("p");

pegaTagSection.appendChild(criaTagP)

let textoTagP = document.createTextNode("Algum texto ai");
criaTagP.appendChild(textoTagP)


////////////////////////////////////////////////////

//5 🚀 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

pegaTagMainPai

let criaTagSectionFilhoDaMain = document.createElement("section");
criaTagSectionFilhoDaMain.className = "left-content"

pegaTagMainPai.appendChild(criaTagSectionFilhoDaMain)

//6 🚀 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

pegaTagMainPai

let criaTagSectionFilhoDaMain2 = document.createElement("section");
criaTagSectionFilhoDaMain2.className = "right-content"

pegaTagMainPai.appendChild(criaTagSectionFilhoDaMain2)

////////////////////////////////////////////////////

//7 🚀 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

let pegandoATagLeftContent = document.querySelector(".left-content")

let criaImagem = document.createElement("img");
pegandoATagLeftContent.appendChild(criaImagem)

criaImagem.setAttribute("src", "https://picsum.photos/200 ")


//////////////////////////////////////////////


//8 🚀 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

//criar ul e por dentro da right-content
let pegaRightContent = document.querySelector(".right-content");
let criaListaUl = document.createElement("ul");
criaListaUl.className = "minha-lista"

pegaRightContent.appendChild(criaListaUl)


//criar a li e por dentro da ul

let minhaLi = [

  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10'

]

let pegaMinhaUl = document.querySelector(".minha-lista");

for (let index = 0; index < minhaLi.length; index += 1) {
  let itemDalista = minhaLi[index]



  let criaLi = document.createElement("li")
  criaLi.innerText = itemDalista
  criaLi.className = "removendo-item"

  pegaMinhaUl.appendChild(criaLi)

}


//Remover o 9 e 10 da lista

let criaLi = document.querySelectorAll(".removendo-item");
for (let index = 0; index < criaLi.length; index += 1) {
  let element = criaLi[index]

  if (element.innerText.includes("10")) {
    pegaMinhaUl.removeChild(element)

  }

}

for (let index = 0; index < criaLi.length; index += 1) {
  let element = criaLi[index]

  if (element.innerText.includes("9")) {
    pegaMinhaUl.removeChild(element)

  }

}
//////////////////////////////////////////

//9 🚀 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.

pegaTagMainPai
let criaH3 = document.createElement("h3");
criaH3.className = "description";
pegaTagMainPai.appendChild(criaH3);

pegaTagMainPai
let criaH32 = document.createElement("h3");
criaH32.className = "description"
pegaTagMainPai.appendChild(criaH32);

pegaTagMainPai
let criaH33 = document.createElement("h3");
criaH33.className = "description"
pegaTagMainPai.appendChild(criaH33);

//////////////////////////////////////////////////

//10 Removendo a section left-content

let removeLeftContentMain = document.querySelector(".main-content");
let removeLeftContentSection = document.querySelector(".main-content .left-content")
removeLeftContentMain.removeChild(removeLeftContentSection)


//11  Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;

let centralizando = document.querySelector(".right-content");
centralizando.style.marginRight = "auto"

/////////////////////////////////////

// 🚀 Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;

let trocaCorDeFundo = document.querySelector(".main-content");
trocaCorDeFundo.style.backgroundColor = "green"