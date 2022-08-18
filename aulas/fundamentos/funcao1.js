// função s/ retorno

function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2); //por ter um valor vazio a linguagem assume undefined e soma o valor passado + undefined = NaN
imprimirSoma(2, 10, 4, 5, 6, 7);
imprimirSoma(); //por ter um valor vazio a linguagem assume undefined e soma o valor passado + undefined = NaN

// função c/ retorno

function soma(a, b = 1) {
  return a + b;
}

console.log(soma(2, 3));
console.log(soma(2)); // resulado 3, pq b= 1
console.log(soma()); //assume undefined e soma o valor passado + undefined = NaN
