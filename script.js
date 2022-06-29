/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
Crie uma função que mude o texto na tag <p>-----</p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
Crie uma função que mude a cor do quadrado vermelho para branco.
Crie uma função que corrija o texto da tag <h1>.
Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

//Function muda texto <p>.

function domTagP() {
       let mudarTextTagP = document.getElementsByTagName("P")[1].innerText = "Me vejo como um dev junior, trabalhando numa grande empresa"
       return mudarTextTagP
}

console.log(domTagP())

////// FIM /////////


//function muda cor de fundo de amarelo para verde Trybe.

function backGroundVerde() {
       let mudaCor = document.querySelectorAll(".main-content")[0]
       mudaCor.style.backgroundColor = "rgb(76,164,109)"
       return mudaCor
}

console.log(backGroundVerde())


///////////// FIM //////////////////

//Função que muda cor do quadrado vermelho. 

function mudaCorQuadradoVermelho() {
       let mudaVermelho = document.querySelectorAll(".main-content .center-content")[0];
       mudaVermelho.style.backgroundColor = "white"

       return mudaVermelho
}

console.log(mudaCorQuadradoVermelho())

////////// FIM ////////////////////////////////

// Função que corrige texto da h1. 

function corrigeTexto() {
       let corrige = document.getElementsByClassName("title")[0].innerText = "Exercício 5.1 - JavaEscript"

       return corrige
}

console.log(corrigeTexto())

///////// FIM //////////////////

// Função que transforma texto das tags <p> em maiusculo.

function textoMaiusculo() {
let mudaTexto = document.querySelectorAll(".center-content p");
for(let i = 0; i < mudaTexto.length; i++){
       mudaTexto[i].style.textTransform = "uppercase";
}
return mudaTexto
}

console.log(textoMaiusculo())

///////// FIM ///////////

// Função que exibe todo os conteudos das tags <p> no console

function exibeConteudo() {
       
       let pegaTag = document.getElementsByTagName("p");
       for(let i = 0; i < pegaTag.length; i++){

             console.log(pegaTag[i].innerHTML) 

       }
       

}

exibeConteudo()