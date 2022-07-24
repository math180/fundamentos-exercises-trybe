/* 1- O fatorial é representado pelo sinal !
! = 4 x 3 x 2 x 1 = 24

Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
*/

let fatorial = 10;
let multiplier = 1;

for (let i = 0; fatorial > i; i += 1) {
  multiplier *= (fatorial - i)
} console.log(multiplier);

/* 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente. */

let word = 'tryber';
let wordInvert = '';

for (let i = word.length-1; i >= 0; i -= 1) {
  wordInvert += word[i]
}
console.log(wordInvert);