alert('Boas vindas ao nosso jogo'); 
let numeroSecreto = parseInt (Math.random () * 10 + 1);  
console.log (numeroSecreto);
let chute 
let tentativas = 1;



// enquanto o chute não for igual 
while (chute != numeroSecreto) {
    chute = prompt ('Escolha um número entre 1 e 10');
    if (chute == numeroSecreto) {
       break; 
   
   } else {
       if chute > numeroSecreto {
           alert (`O numero e menor que o ${chute}`);
       } else {
           alert (`O numero secreto e mairo que o ${chute}`);
   
        }
       // tentativas
   
       tentativas ++; 
   } 
   alert (`Isso aí, você acertou o número secreto $ {numeroSecreto} com $ {tentativas} tentativas`); 
}















