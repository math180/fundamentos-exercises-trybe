// Parte I - Objetos e For/In

//1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

console.log(`Boas vindas, ${info.personagem}`)

//🚀 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

info.recorrente = 'Sim'
console.log(info);