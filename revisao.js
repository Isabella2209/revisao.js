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

console.log("\n"); // Pula uma linha no início

function verificaChuva(previsaoTempo) {
  previsaoTempo.forEach(dia => {
    console.log(dia.chanceDeChuva > 50 ? `${dia.dia}: Levar guarda-chuva` : `${dia.dia}: Tempo agradável`);
  });
}

let previsaoTempo = [
  { dia: "Segunda-feira", chanceDeChuva: 40 },
  { dia: "Terça-feira", chanceDeChuva: 60 },
  { dia: "Quarta-feira", chanceDeChuva: 30 },
  { dia: "Quinta-feira", chanceDeChuva: 70 },
  { dia: "Sexta-feira", chanceDeChuva: 20 },
  { dia: "Sábado", chanceDeChuva: 90 },
  { dia: "Domingo", chanceDeChuva: 50 }
];

verificaChuva(previsaoTempo);
