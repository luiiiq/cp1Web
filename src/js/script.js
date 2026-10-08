console.log("******************************");
console.log("Exercício 1");
console.log("******************************");

let primeiroResultado = 30;
let segundoResultado = 10;

console.log(`Números analisados: ${primeiroResultado} e ${segundoResultado}`);
if (primeiroResultado === segundoResultado) {
    console.log(`${primeiroResultado} é igual à ${segundoResultado}`);
} else {
    console.log(`${primeiroResultado} não é igual à ${segundoResultado}`);
}

if (primeiroResultado != segundoResultado) {
    console.log(`${primeiroResultado} é diferente de ${segundoResultado}`);
} else {
    console.log(`${primeiroResultado} não é diferente de ${segundoResultado}`);
}

if (primeiroResultado >= segundoResultado) {
    console.log(`${primeiroResultado} é maior ou igual à ${segundoResultado}`);
} else {
    console.log(`${primeiroResultado} não é maior ou igual à ${segundoResultado}`);
}

console.log("******************************");
console.log("Exercício 2");
console.log("******************************");

let peso = 75;
let altura = 1.67;
let imc = peso / (altura ** 2);

console.log(`IMC: ${imc.toFixed(2)}`);
if (imc < 18.5) {
    console.log("Você está abaixo do peso");
} else if ( imc >= 18.5 && imc <= 24.9) {
    console.log("Você está no peso ideal");
} else {
    console.log("Você está acima do peso");
};

console.log("******************************");
console.log("Exercício 3");
console.log("******************************");

for(let num = 0; num <= 10; num++) {
    console.log(` o valor da contagem é: ${num}!`)
}

console.log("******************************");
console.log("Exercício 4");
console.log("******************************");

let herois = ["Thor", "Hulk", "Capitão América", "Arqueiro", "Viúva Negra"];
for (let i = 0; i <= herois.length; i++) {
    console.log(herois[i]);
}

console.log("******************************");
console.log("Exercício 5");
console.log("******************************");

console.log("PERMISSÃO PARA DIRIGIR:")

let idade = 17;
console.log(`Idade: ${idade}`);
let permissao = idade >= 18 ? "Tem permissão para dirigir" : "Não tem permissão para dirigir!";
console.log(permissao);

console.log("******************************");
console.log("Exercício 6");
console.log("******************************");

let usuario = "admin";
let senha = "1234";

let usuarioSolicitado = prompt("Usuário: ");
let senhaSolicitada = prompt("Senha: ");

if (usuarioSolicitado === usuario && senhaSolicitada === senha) {
    console.log("O login foi realizado com sucesso");
} else {
    console.log("Falha de autenticação");
}