diaDaSemana = prompt ('Qual o dia da semana?');
if diaDaSemana == 'Sábado'{
    alert ('Bom fim de semana');

} else if diaDaSemana == 'Domingo'{
    alert ('Bom fim de semana');
} else {
    alert ('Boa semana');

}

// 

numero = prompt ('Digite um número');
if numero > 0 {
    alert ('Número positivo');
} else {
    alert ('Número negativo');
}

//


pontuacao = 105 
if pontuacao >= 100 {
    alert('Parabéns!! Você ganhou');
} else {
    alert ('Tente novamente');
}

// 

let saldoDaConta = 500; 
alert (`Seu saldo é R$${saldoDaConta}`)

let nome = prompt ('Digite seu nome');
alert(`Seu nome é ${nome}`); 

// 


alert ('Boas vindas ao nosso site');
let nome = ('lua');
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

alert ('Erro! Preencha todos os campos!'); 

let mensagemDeErro = 'Erro! Preencha todos os campos!'
alert (mensagemDeErro);
nome = prompt ('Qual o seu nome?');
idade = prompt ('Qual a sua idade?');

if idade >= 18 {
    alert ('Pode tirar a habilitação'); 
} else {
    alert ('Espere completar 18 anos'); 
}

// Crie um contador que começa em 1 e vá até 10 usando um loop while. Mostre cada número.

let contador = 1; 
while (contador <= 10) {
    console.log (contador);
    contador ++;
}

// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número. 

let contador = 10; 
while (contador >= 0) {
    console.log (contador);
    contador--;
};

// Crie um programa de contagem regressiva. Peça um número ao usuário e conte este número até 0, usando um loop while no console do navegador.

let numeroMaximo = prompt("Digite um número para a contagem regressiva:");

while (numeroMaximo >= 0) {
    console.log(numeroMaximo);
    numeroMaximo--;
}

// Crie um programa de contagem progressiva. Peça um número ao usuário e conte até 0este número, usando um loop while no console do navegador.
let numeroMaximo = prompt("Digite um número para a contagem progregressiva:");;
let contador = 0;

while (contador <= numeroMaximo) {
    console.log(contador);
    contador++
}

// PENÚLTIMA AULA 

console.log ('Boas vindas'); 
let nome ('Lindomar'); 
console.log (`Olá ${nome}!`); 

let nome ('Lindomar');
alert (`Olá ${nome}!`); 

let linguagem = prompt ('Quqal a linguagem de programação você mais gosta?'); 
console.log linguagem ('Java'); 

let valor1 = 42;
let valor2 = 8;
let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`) 


let valor1 = 10;
let valor2 = 8;
let resultado = valor1 - valor2;

console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`); 


let idade = prompt ('Qual sua idade?');
if (idade > 17) {
   console.log ('Você é maior de idade'); 
} else {
    console.log ('Você é menor de idade')
} 

var numero = parseFloat (prompt('Digite um número:'));
if numero (numero > 0) {
    console.log ('O número é positivo');
} else if  (numero < 0) {
    console.log ('O número é negativo');  
} else }{
    console.log ('O número é igual a zero');
} 

let numero = 1;
while (numero <= 10) {
    console.log(numero);
    numero++;
} 

let nota = 9; 

if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}




