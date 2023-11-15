var numeroSecreto = parseInt(Math.random() * 1001);
//parseInt = para ser um número inteiro
//Math.random = número randômico entre 0 e 1000 

var chute

//! = sinal de negação
while (chute != numeroSecreto) {

chute = prompt ('Adivinhe o número secreto entre 0 e 1000');


if (chute == numeroSecreto) {
    alert('Acertou! O número secreto é ' + numeroSecreto);
}

else if (numeroSecreto > chute) {
alert ('Erroooou! O número secreto é maior que ' + chute + "!")
} 

else if (numeroSecreto < chute) { 
alert ('Erroooou! O número secreto é menor que ' + chute + "!")
}
}