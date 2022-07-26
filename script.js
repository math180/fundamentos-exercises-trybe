/* Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)

*/

let a = 2;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// 2- Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

let number1 = 5
let number2 = 4

if (number1 > number2) {
    console.log(number1);
} else {
    console.log(number2);
}

// 3- Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const one = 20;
const two = 26;
const three = 25;

if (one > two && one > three) {
    console.log(one);
} else if (two > three && two > one) {
    console.log(two);
} else {
    console.log(three);
}

// 4- Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let numeroUm = -1;

if (numeroUm < 0) {
    console.log('Negative');
} else if (numeroUm > 0) {
    console.log('Positive');
} else {
    console.log('Zero');
}

//5- 🚀 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const anguloA = 80;
const anguloB = 140;
const anguloC = -40;

let somaAngulos = anguloA + anguloB + anguloC

if (anguloA < 0 || anguloB < 0 || anguloC < 0) {
    console.log('Erro. Insira um número válido');
} else if (somaAngulos === 180) {
    console.log(true);
} else {
    console.log(false);
}

//6- Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let pecaXadrez = 'RAINHA';

switch (pecaXadrez.toLowerCase()) {
    case 'peão':
        console.log('Os peões se movem somente para frente, uma casa por vez.');
        break
    case 'bispo':
        console.log('O bispo pode mover-se por qualquer número de casas, mas somente nas diagonais e até que outra peça esteja no caminho.');
        break
    case 'cavalo':
        console.log('Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante');
        break
    case 'torre':
        console.log('A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça');
        break
    case 'rainha':
        console.log('Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente. A rainha se move como a torre e o bispo combinados.');
        break
}

/* 7- Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */

let nota = 99;

if (nota < 0 || nota > 100) {
    console.log('Erro. Insira um número válido');
} else if (nota >= 90) {
    console.log('Nota A');
} else if (nota >= 80) {
    console.log('Nota B');
} else if (nota >= 70) {
    console.log('Nota C');
} else if (nota >= 60) {
    console.log('Nota D');
} else if (nota >= 50) {
    console.log('NOta E');
} else if (nota < 50) {
    console.log('Nota F');
}

//8- 🚀 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.

let firstNumber = 9;
let secondNumber = 3;
let thirdNUmber = 3;

if (firstNumber % 2 === 0 || secondNumber % 2 === 0 || thirdNUmber % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}

//9- Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

let primeiroNumero = 2;
let segundoNumero = 4;
let terceiroNumero = 10;

if (primeiroNumero % 2 !== 0 || segundoNumero % 2 !== 0 || terceiroNumero % 2 !== 0) {
    console.log(true);
} else {
    console.log(false);
}

/* 10- Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto)
 */

let custo = 1 * 0.2
let venda = 1 * 1000

let custoTotal = custo * 1000

if (custo < 0 || venda < 0) {
    console.log('Erro. O(s) valor(es) não pode(m) ser negativo(s)');
}

let lucro = venda - custoTotal

console.log(lucro);

/*11- Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
INSS (Instituto Nacional do Seguro Social)

Salário bruto até R$ 1.556,94: alíquota de 8%

Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%

Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%

Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

IR (Imposto de Renda)

Até R$ 1.903,98: isento de imposto de renda

De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto

De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto

De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto

Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto. 
*/

let salarioBruto = 1400
let aliquotaINSS = 0

if (salarioBruto < 1556.94) {
  aliquotaINSS = salarioBruto * 0.08
} else if (salarioBruto < 2594.92) {
  aliquotaINSS = salarioBruto * 0.09
} else if (salarioBruto < 5189.82) {
  aliquotaINSS = salarioBruto * 0.11
} else if (salarioBruto > 5189.82) {
  aliquotaINSS = 570.88
}

let salarioSemINSS = salarioBruto - aliquotaINSS
let aliquotaIR = 0

if (salarioSemINSS < 1903.98) {
    aliquotaIR = 0
} else if (salarioSemINSS < 2826.65) {
    aliquotaIR = salarioSemINSS * 0.075
} else if (salarioSemINSS < 3751.05) {
    aliquotaIR = salarioSemINSS * 0.15
} else if (salarioSemINSS < 4664.68) {
    aliquotaIR = salarioSemINSS * 0.225
} else if (salarioSemINSS < 4664.68) {
    aliquotaIR = salarioSemINSS * 0.275
}

let salarioLiquido = salarioSemINSS - aliquotaIR

console.log(salarioLiquido);