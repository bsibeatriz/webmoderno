var numero = 1;
{
  var numero = 2;
  console.log("dentro = ", numero);
}
console.log("fora =", numero);

// as duas saídas serão iguais (2), pois por mais que estejam em escopos diferentes (bloco de código) usando var, ele só irá diferenciar se estiver dentro de um função
