var valorEmDolar = 0.1;
var cotacaoDoDolar = 4.91;

var valorEmReal = valorEmDolar * cotacaoDoDolar;

// Atribuição da variável (ñ precisa colocar o "var") com o "to.Fixed", para mantermos apenas com 2 dígitos depois da vírgula
valorEmReal = valorEmReal.toFixed(2);

alert ('US$' + valorEmDolar + ' equivale, em reais (BRL), a: R$' + valorEmReal);