function tratarErroELancar(erro) {
  //   throw new Error("Deu erro mermão, veja aí a M que tu fez");
  throw {
    name: erro.name,
    msg: erro.message,
    date: new Date(),
  };
}

function ImprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!");
  } catch (e) {
    tratarErroELancar(e);
  } finally {
    console.log("final");
  }
}

const obj = { nome: "Roberto" }; //aletarndo para name, o código roda normal
ImprimirNomeGritado(obj);
