 // 1. Acesse o elemento elementoOndeVoceEsta.
 const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

 // 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
 const pai = elementoOndeVoceEsta.parentElement;
 pai.style.color = 'red';

 // 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
 // Você se lembra dos vídeos da aula anterior, como fazer isso?
 const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
 primeiroFilhoDoFilho.innerText = 'primeiroFilhoDoFilho';

 // 4. Acesse o primeiroFilho a partir de pai.
 const primeiroFilho = pai.firstElementChild;

 // 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
 const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;
 
 // 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
 const textElement = elementoOndeVoceEsta.nextSibling;

 // 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
 const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

 // 8. Agora acesse o terceiroFilho a partir de pai.
 const terceiroFilho2 = pai.lastElementChild.previousElementSibling;


 /////////////////////////////////////////////


 // passos para adicionar tags dentro de um elemento
 //pegar o elemento que eu quero adicionar dentro
let pegaSection = document.querySelector("#pai")
//criar esse elemento
let novaSection = document.createElement("section")
novaSection.className = "irmaoDoElementoOndeVoceEsta"
console.log(novaSection)
// adicionar o elemento
pegaSection.appendChild(novaSection)
//escreve algo dentro dele
let escreveTextoNaSection = document.createTextNode("irmao elementoOndeVoceEsta");
novaSection.appendChild(escreveTextoNaSection)


//Criar um filho para elementoOndeVoceEsta
let pegaPaiOndeVoceEsta = document.querySelector("#elementoOndeVoceEsta");
let filhoDoElementoOndeVoceEsta = document.createElement("section");
filhoDoElementoOndeVoceEsta.id = "TerceiroFilhoDoElementoOndeVoceEsta"
pegaPaiOndeVoceEsta.appendChild(filhoDoElementoOndeVoceEsta)

let textoTerceiroFilho = document.createTextNode("Sou terceiro filho")
filhoDoElementoOndeVoceEsta.appendChild(textoTerceiroFilho)


//Criar um filho para primeiroFilhoDoFilho

let filhoDofilho = document.querySelector("#primeiroFilhoDoFilho")
let nasceuOutroFilhoDoFilho = document.createElement("div")
nasceuOutroFilhoDoFilho.id = "Oipapaieunasci"
filhoDofilho.appendChild(nasceuOutroFilhoDoFilho)

let textoNoFilhoQueNasceu = document.createTextNode("Nasci papai")
nasceuOutroFilhoDoFilho.appendChild(textoNoFilhoQueNasceu)
  
  /////////////////////////////////////////////


  //A partir desse filho criado, acesse terceiroFilho.
  const terceiroFilho3 = Oipapaieunasci.lastElementChild.previousElementSibling;
