//1- percorra o array imprimindo todos os valores nele contidos com a função console.log();

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]); 
}

// 2- some todos os valores contidos no array e imprima o resultado;

let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let somaDosNumeros = 0

for (let i = 0; i < numbers1.length; i += 1) {
  somaDosNumeros += numbers1[i]
}

console.log(somaDosNumeros);

//3- calcule e imprima a média aritmética dos valores contidos no array;

let numbers2 = [30, 8, 4, 20, 70, 10, 100, 25, 35, 30];

let mediaAritmetica = 0;

for (let i = 0; i < numbers2.length; i += 1) {
    mediaAritmetica += numbers2[i] / numbers2.length
}

console.log(mediaAritmetica);