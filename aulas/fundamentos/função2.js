// Armazenando uma função em uma variável

const imprimirSoma = function (a, b) {
  console.log(a + b);
};

imprimirSoma(5, 5);

// Armazenando uma função arrow em uma variável
// => forma reduzida de se declarar uma função
const soma = (a, b) => {
  return a + b;
};

console.log((5, 3));

//retorno implícito
const subtracao = (a, b) => a - b; // função s/ bloco de código apenas 1 linha, s/ return
console.log(subtracao(2, 3));

const imprimir2 = (a) => console.log(a);
imprimir2("Queria ter passado na entrevista de infra :/");
