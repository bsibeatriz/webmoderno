const imprimirResultado = function (nota) {
  switch (
    Math.floor(nota) //arrendondando nota para baixo
  ) {
    case 10: //caso a nota for = 10 ou 9 ....
    case 9:
      console.log("Quadro de honra");
      break; //se não usar break, ele vai executar todos os outros cases dps de encontrar um verdadeiro
    case 8:
    case 7:
      console.log("Aprovado");
      break;
    case 6:
    case 5:
    case 4:
      console.log("Recuperação");
      break;
    case 3:
    case 2:
    case 1:
      console.log("reprovado");
      break;
    default: //equivalente ao 'else'
      console.log("Nota inválida");
  }
};

imprimirResultado(10);
imprimirResultado(8.9); //o código irá arrendondar para 8
imprimirResultado(6.55);
imprimirResultado(2.3);
imprimirResultado(-1);
imprimirResultado(11);
