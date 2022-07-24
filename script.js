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

// 3- Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smallestWord = array[0];

for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > biggestWord.length) {
        biggestWord = array[i]
    };

    if (array[i].length < smallestWord.length) {
    smallestWord = array[i]
  }
};

console.log(`The smallest word is: ${smallestWord}`);
console.log(`The biggest word is: ${biggestWord}`);