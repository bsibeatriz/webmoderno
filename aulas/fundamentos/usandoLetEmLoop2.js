const funcs = [];

for (let i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i);
  });
}

funcs[2](); //use LET!! em Var deu erro, olha o ex anterior
funcs[8]();
