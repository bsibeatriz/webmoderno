//Funções com tipos de dados number
const peso1 = 1.0;
const peso2 = Number("2.0");

console.log(peso1, peso2);
console.log(typeof peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); // tofixed: função q determina qtd de casdas decimais após a virgula
console.log(media.toString()); // toString: função q converte p string
console.log(media.toString(2)); // ao inserir o 2 dentro das (), o const é convertido em binário
console.log(typeof media); //typeof: tipo da variável, JS é tipagem fraca - tipo do dado media é number
console.log(typeof Number); // aqui, Number é uma função
