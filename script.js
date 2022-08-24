const numbers = [50, 85, -30, 3, 15];

const biggerNumber = (bigger, otherNumber) =>
  bigger > otherNumber ? bigger : otherNumber;

const biggest = numbers.reduce(biggerNumber, 200);

console.log(biggest);

// Para fixar ainda mais conceito de reduce, faça uma função que some todos os números pares do array:

const numbers1 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const onlyPair = () =>
  numbers1
    .filter((number) => number % 2 === 0)
    .reduce((first, second) => first + second);

console.log(onlyPair());

// usando apenas o reduce:

const onlyReduce = () => {
  return numbers1.reduce(
    (number1, number2) => (number2 % 2 === 0 ? number1 + number2 : number1),
    0
  );
};

console.log(onlyReduce());

// EXERCICIO CONTEUDO

const estudantes = [
  {
    nome: "Jorge",
    sobrenome: "Silva",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: 67 },
      { name: "Português", nota: 79 },
      { name: "Química", nota: 70 },
      { name: "Biologia", nota: 65 },
    ],
  },
  {
    nome: "Mario",
    sobrenome: "Ferreira",
    idade: 15,
    turno: "Tarde",
    materias: [
      { name: "Matemática", nota: 59 },
      { name: "Português", nota: 80 },
      { name: "Química", nota: 78 },
      { name: "Biologia", nota: 92 },
    ],
  },
  {
    nome: "Jorge",
    sobrenome: "Santos",
    idade: 15,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: 76 },
      { name: "Português", nota: 90 },
      { name: "Química", nota: 70 },
      { name: "Biologia", nota: 80 },
    ],
  },
  {
    nome: "Maria",
    sobrenome: "Silveira",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: 91 },
      { name: "Português", nota: 85 },
      { name: "Química", nota: 92 },
      { name: "Biologia", nota: 90 },
    ],
  },
  {
    nome: "Natalia",
    sobrenome: "Castro",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: 70 },
      { name: "Português", nota: 70 },
      { name: "Química", nota: 60 },
      { name: "Biologia", nota: 50 },
    ],
  },
  {
    nome: "Wilson",
    sobrenome: "Martins",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: 80 },
      { name: "Português", nota: 82 },
      { name: "Química", nota: 79 },
      { name: "Biologia", nota: 75 },
    ],
  },
];

// Agora crie uma função usando os dados dos estudantes que usamos no conteúdo do dia anterior, para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor. Você usará tanto o map quanto, dentro dele, o reduce!

const bestGrade = estudantes.map((student) => ({
  name: student.nome,
  materia: student.materias.reduce((one, two) =>
    one.nota > two.nota ? one : two
  ).name,
}));

console.log(bestGrade);

// 1 - Dada uma matriz, transforme em um array.

const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

const array = (newArray) => {
  return newArray.reduce((element1, element2) => {
    return [element1, element2];
  });
};

console.log(array(arrays));

// 1 - REFATORADO:

const array1 = (newArray) => newArray.reduce((acc, curr) => [acc, curr]);

console.log(array1(arrays));

// Para os exercícios 2, 3 e 4 considere o seguinte array:

const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  
// 2 - Crie uma string com os nomes de todas as pessoas autoras.

const string = (array) => {
   return array.reduce((acc, curr) => `${acc} ${curr.author.name}.`, '')
}

console.log(string(books));