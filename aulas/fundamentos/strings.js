const escola = "Cod3r";

console.log(escola.charAt(4)); // mostra o que tem na posisção passada no parametro
console.log(escola.charAt(5)); // n vai gerar erro, é da linguagem mas n tem indice 5
console.log(escola.charCodeAt(3)); // código da tabela ASCII
console.log(escola.indexOf(3)); // caractere que faz parte da string, mostre seu indice

console.log(escola.substring(1)); //"fatiamento de string"
console.log(escola.substring(0, 3)); // s/ incluir o indice 3

console.log("Escola ".concat(escola).concat("!")); // concatenação
console.log("Escola " + escola + "!"); // concatenação

console.log(escola.replace(3, "e")); // substitui indice 3 por 'e'

console.log("Ana,Maria,Pedro".split(",")); // tranformou em array e separou a partir do ',' veja expressão regular
