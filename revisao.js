let nome = "Isabella"
let NumeroChamada = 8


let listaJogos = ["Quebra-Cabeca", "Caca-Palavras", "Roblox"];


let listaaJogos = ["Quebra-Cabeça", "Caça-Palavras", "Roblox"];
let tamanho = listaJogos.length;
let contador = 0;


console.log("Os jogos favoritos de Isabella são:");


while (contador < tamanho) {
  console.log(listaaJogos[contador]);
  contador = contador + 1;
}


let filmeFavorito = {
  nome: "Isabella",
  nomeFilme: "Barbie em A Pequena Polegar",  
  anoLancamento: 2009,
  notaIMDb: 6.0
};


console.log(filmeFavorito);

let notaFilme = 6.0;  
if (notaFilme <= 4.0) {
  console.log("O filme possui uma nota considerada baixa.");
}
 else if (notaFilme > 4.0 && notaFilme <= 7.0) {
  console.log("O filme é considerado bom.");
} 
else if (notaFilme > 7.0) {
  console.log("O filme é muito bom!");
}
