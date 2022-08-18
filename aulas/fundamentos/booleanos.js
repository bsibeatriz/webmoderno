let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo); // ! = negação

console.log("Os verdadeiros... ");
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!!"teste");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("OS falsos..");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("Pra finalizar...");
console.log(!!("" || null || 0 || " ")); // || OU  / vai testar o primeiro valor true no caso a stg com espaço

let nome = ""; // se vazio então false
console.log(nome || "Desconhecio"); // vai apresentar o promeiro valor true, no caso "Desconhecido"

nome = "Lucas";
console.log(nome || "Desconhecio"); // vai apresentar o promeiro valor true, no caso "Lucas"
