/*55. Na teoria dos sistemas, define-se como elemento minimax de uma matriz o menor elemento da linha onde se
encontra o maior elemento da matriz. Escreva um algoritmo que leia uma matriz 10 X 10 de números e encontre seu
elemento minimax, mostrando também sua posição.*/


let matriz = [
  [10, 22, 43, 54, 65],
  [66, 77, 200, 99, 11],
  [61, 45, 73, 44, 35],
  [16, 21, 81, 49, 88],
  [52, 69, 58, 33, 50],
  [78, 20, 134, 32, 49],
  [5, 24, 65, 99, 80],
  [37, 29, 36, 18, 70],
  [73, 92, 63, 25, 23],
  [19, 8, 45, 86, 12],
];

let maior = matriz[0][0];
let pos = [];

for (let l = 0; l < 10; l++) {
  for (let c = 0; c < 5; c++)
    if (matriz[l][c] > maior) {
      maior = matriz[l][c];
      pos_linha = l;
      pos_coluna = c;
      linha = matriz[l];
      var menor = linha[l];
       for (j = 0; j < linha.length; j++) {
         if (linha[j] < menor) {
          menor = linha[j];
        }
      }
    }
}

console.table(matriz);
console.log(
  "Maior:",
  maior,
  "\n" + "Na linha:",
  pos_linha,
  "\n" + "Coluna:",
  pos_coluna,
  "\n" + "Menor encontrado:", menor
);

