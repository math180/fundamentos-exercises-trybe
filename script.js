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

let numbers2 = [4.5, 8, 10, 30, 7, 40, 10, 25, 35, 30];

let mediaAritmetica = 0;

for (let i = 0; i < numbers2.length; i += 1) {
    mediaAritmetica += numbers2[i] / numbers2.length
}

console.log(mediaAritmetica);

//4- Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (mediaAritmetica < 20) {
    console.log('Valor menor ou igual a 20');
} else {
    console.log('Valor maior ou igual a 20');
}

//5- 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers3 = [100.001, 9, 3, 19, 100.0001, 8, 100, 2, 35, 27];

let maiorNumero = numbers3[0]

for (let i = 1; i < numbers3.length; i += 1) {
    if (numbers3[i] > maiorNumero) {
        maiorNumero = numbers3[i]
    }
} console.log(maiorNumero);