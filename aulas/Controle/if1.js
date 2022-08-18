function soNoticiaBoa(nota) {
  if (nota >= 7) {
    console.log("Aprovado com " + nota);
  }
}

soNoticiaBoa(9);
soNoticiaBoa(6.1);

function seForVerdadeEuFalo(valor) {
  if (valor) {
    console.log("É verdade " + valor);
  }
}

seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo("");
seForVerdadeEuFalo(0);
seForVerdadeEuFalo(-1); //verdaeito daqui pra baixo
seForVerdadeEuFalo(" ");
seForVerdadeEuFalo("?");
seForVerdadeEuFalo([]);
seForVerdadeEuFalo([1, 2]);
seForVerdadeEuFalo({});
