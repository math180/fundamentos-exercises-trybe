/* 1- O fatorial é representado pelo sinal !
! = 4 x 3 x 2 x 1 = 24

Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
*/

let fatorial = 10;
let multiplier = 1;

for (let i = 0; fatorial > i; i += 1) {
  multiplier *= (fatorial - i)
} console.log(multiplier);