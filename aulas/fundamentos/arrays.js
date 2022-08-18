const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]); // não existe

valores[4] = 10;
console.log(valores);
console.log(valores.length); //qtd elementos que é diferente de posições

valores.push({ id: 3 }, false, null, "teste"); // push insere novos elementos no array
console.log(valores);

console.log(valores.pop()); //exclui o ultimo elemento e apresenta na tela o elemento excluido
delete valores[0]; //exclui elemento na posição 0
console.log(valores);

console.log(typeof valores);
