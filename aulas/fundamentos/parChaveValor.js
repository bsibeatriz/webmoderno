//par nome/valor

const saudacao = "Opa"; //contexto léxico (local fídicoo do código foi definido? = contexto léxico) 1

function exec() {
  const saudacao = "Faaala"; // contexto léxico 2
  return saudacao;
}

// Objetos são grupos aninhados de nome/valor

const cliente = {
  nome: "Pedro",
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: "Rua muito legal",
    numero: 123,
  },
};

console.log(saudacao);
console.log(exec());
console.log(cliente);
