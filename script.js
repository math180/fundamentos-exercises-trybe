// Parte I - Objetos e For/In

//1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log(`Boas vindas, ${info.personagem}`);

//🚀 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

info.recorrente = "Sim";
console.log(info);

//3 - Faça um for/in que mostre todas as chaves do objeto.

for (let key in info) {
  console.log(key);
}

//4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.

for (let key in info) {
  console.log(info[key]);
}

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

let info2 = {
  personagem: "Tio patinhas",
  origem: "Christmas on Bear Mountain, Dells Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

let info3 = {
  personagem: "Tio patinhas",
  origem: "Christmas on Bear Mountain, Dells Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

for (let key in info3) {
  if (key === "recorrente" && info3[key] === "Sim" && key[info2] === "Sim") {
    console.log("Ambos recorrentes");
  } else {
    console.log(info3[key], "e", info2[key]);
  }
}

//🚀 6 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};

console.log(
  `O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama ${leitor.livrosFavoritos[0].titulo}`
);

// 🚀 7 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a esta chave um objeto contendo as seguintes informações:

leitor.livrosFavoritos.push({
  titulo: "Harry Potter e o Prisioneiro de Azkaban",
  autor: "JK Rowling",
  editor: "Rocco",
});

// 🚀 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

console.log(
  `${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos`
);

// Parte 2 - Funções

// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function isPalindrome(string) {
  let newString = string.split("").reverse().join("");

  if (newString === string) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("arara"));

/*
function isPalindrome(string) {
  let isPalindrome = false;
  const myArray = string.split('');
  myArray.reverse()
 const join = myArray.join('')

  if (join === string) {
    return true;
  } else {
    return isPalindrome
  }
} console.log(isPalindrome('reviver'));*/

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function biggestNumber(array) {
  let biggestIndex = 0;
  for (let index in array) {
    if (array[biggestIndex] < array[index]) {
      biggestIndex = index;
    }
  }
  return biggestIndex;
}
console.log(biggestNumber([1, 4, 3, 10]));

/*function BiggestNumber(array) {
  let biggerNumber = array[0];
  for(let i = 0; i < array.length; i += 1) {
    if (array[i] > biggerNumber) {
      biggerNumber = array[i];
    }
  }
  return biggerNumber
}console.log(BiggestNumber([1, 4, 10, -300, 256, 255]));*/

//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function smallestIndex(array) {
  let smallestI = 0;

  for (let index in array) {
    if (array[smallestI] > array[index]) {
      smallestI = index;
    }
  }
  return smallestI;
}
console.log(smallestIndex([10, 3, 0]));

//4- Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function biggestString(array) {
  let biggestString = array[0];
  for (let index in array) {
    if (biggestString.length < array[index].length) {
      biggestString = array[index];
    }
  }
  return biggestString;
}
console.log(biggestString(["Amor", "Paixão", "Eterna amizade", "Paz"]));

//🚀 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function mostRepeated(array) {
  let countRepeated = 0;
  let count = 0;
  let indexNumeroRepetido = 0;

  for (let index in array) {
    let verifyNumber = array[index];
    for (let index2 in array) {
      if (verifyNumber === array[index2]) {
        count += 1;
      }
    }
    if (count > countRepeated) {
      countRepeated = count;
      indexNumeroRepetido = index;
    }
    count = 0;
  }

  return array[indexNumeroRepetido];
}
console.log(mostRepeated([1, 1, 1, 3, 3, 3, 5, 3, 3, 3, 5]));

