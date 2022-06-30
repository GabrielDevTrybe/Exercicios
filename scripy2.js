
// adicionando uma lista de li na ul

let jogadoresBonsDoSaoPaulo = [
  "Lucas",
  "Rogerio Ceni",
  "Lugano",
  "Josue",
  "Calleri"
]


let listJogadoresBons = document.querySelector(".bons-jogadores");
for (let index = 0; index < jogadoresBonsDoSaoPaulo.length; index += 1) {
  let itemJogadorBom = jogadoresBonsDoSaoPaulo[index];

  let listJogadorBom = document.createElement("li");
listJogadorBom.innerText = itemJogadorBom
listJogadorBom.className = "jogador-remove"


listJogadoresBons.appendChild(listJogadorBom)
}

//Remover item da lista

let listJogadorBom = document.querySelectorAll(".jogador-remove")
console.log(listJogadorBom)

for(let index = 0; index < listJogadorBom.length; index += 1){
  let element = listJogadorBom[index]

  if(element.innerText.includes("Calleri")){
    listJogadoresBons.removeChild(element)

  }

}