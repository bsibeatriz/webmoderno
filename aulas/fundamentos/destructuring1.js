// novo recurso ES2015

const pessoa = {
  nome: "Ana",
  idade: 5,
  endereco: {
    logradouro: "Rua ABC",
    numero: 1050,
  },
};

const { nome, idade } = pessoa; //extraia do objeto o atributo nome e idade
console.log(nome, idade);

const { nome: n, idade: i } = pessoa; // extraia e atribua a uma variavel n e i
console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa; //n existente no objeto
console.log(sobrenome, bemHumorada);

const {
  endereco: { logradouro, numero, cep },
} = pessoa; //cep n existe, undefined
console.log(logradouro, numero, cep);
