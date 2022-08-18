let valor; // não inicializada, valor padrão undefined por não ter sido inicializada
console.log(valor);

valor = null; // s/ valor primitivo (ex: valor = 3) e s/ endereço de memória (s/ apontamento)
console.log(valor);
// console.log(valor.toString()); // Erro"

const produto = {};
console.log(produto.preco); //Undefined pq o preço n foi definifdo
console.log(produto);

produto.preco = 3.5;
console.log(produto);

produto.preco = undefined; // evite utilizar!
console.log(!!produto.preco);
// delete produto.preco
console.log(produto);

produto.preco = null; //sem preço
console.log(!!produto.preco);
console.log(produto);
