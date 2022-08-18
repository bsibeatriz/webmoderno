function getinteiroAleatotioEntre(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opcao = -1; //neste caso não vai dar falso na 1ª por conta do 'do'

// let opcao //somente iniciada a variável, sem valor inicial tbm da certo

do {
  //faz a primeira execução e depois a validação
  opcao = getinteiroAleatotioEntre(-1, 10);
  console.log(`A opção escolhida foi ${opcao}`);
} while (opcao != -1); //validação

console.log("Até a próxima!");
