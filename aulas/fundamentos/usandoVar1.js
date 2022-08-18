{
  {
    {
      {
        var sera = "Será???";
        console.log(sera);
      }
    }
  }
}

console.log(sera); // variavel declarada com var é visível fora do escopo que foi gerado{}

function teste() {
  var local = 123; // ficará visível apenas dentro do escopo da função q foi crada
  console.log(local);
}

teste(); // apenas chamei a função
//console.log(local); vai dar erro
