// Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens, faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread.

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Mango', 'Avocado', 'Pineapple'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Banana', 'Apricot', 'Grape'];

const fruitSalad = (fruit, additional) => {
  const spreadUsed = [...fruit, ...additional]
  return spreadUsed
};

console.log(fruitSalad(specialFruit, additionalItens));

// 1 - Dado o código abaixo, altere a chamada da função rectangleArea de forma que seja impressa a área dos 3 retângulos (rectangle1, rectangle2 e rectangle3). O código deve retornar em sequência 2, 15 e 54.

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  console.log(rectangleArea(...rectangle));
})

// 2 - Crie uma função sum que dado um número ilimitado de parâmetros retorna a soma desses parâmetros. Ao chamar a função dessa forma : sum(4,5,6) o número 15 deve ser retornado.

const ilimitado = (...xablau) => xablau.reduce(((acc, curr) => acc + curr), 0)

console.log(ilimitado(1, 5, 2, 10, 5, 27, 400));