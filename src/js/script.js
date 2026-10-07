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