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

// Other possible solution 

let word2 = 'socorram me subi no ônibus em marrocos';
let reverseWord = '';

reverseWord = word2.split('').reverse().join('');

console.log(reverseWord);

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

// 4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let biggestPrimeNumber = 0;

for (let i = 2; i <= 50; i += 1) {
  let isPrime = true;

  for (let i2 = 2; i2 < i; i2 +=1)  {
    if (i % i2 === 0) {
        isPrime = false
     }
    }
    if (isPrime) {
        biggestPrimeNumber = i
    }
  }
 console.log(biggestPrimeNumber);

// PRIMEIRA TENTATIVA

let biggestPrime = 2;

for (let i = 2; i <= 50; i += 1) {

    for (let i2 = 2; i2 <= 50; i2 += 1) {
        if (i % i2 === 0) {
            if (i > biggestPrime) {
                biggestPrime = i
            } else {
                biggestPrime = i2
            }
        }
    }
} console.log(biggestPrime);

/* Bônus

1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

n = 5

*****
*****
*****
*****
*****
*/

let numero = 7;

for (let i = 0; i < numero; i += 1) {
    let space = ''

    for (let i2 = 0; i2 < numero; i2 += 1) {
        space = space + '*'
    }
    console.log(space);
} 

/* 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

n = 5

*
**
***
****
*****

*/

let size = 7;
let symbol = '*';
let inputLine = '';

for (let i = 0; i < size; i += 1) {
    console.log(inputLine);
    inputLine = inputLine + symbol
}
