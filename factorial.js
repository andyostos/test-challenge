
function factorialRecursivo(numero) {

    if (numero < 0) {
      return "No se puede calcular el factorial de un número negativo.";
    }

    if (numero === 0) {
      return 1;
    }
  
    return numero * factorialRecursivo(numero - 1);
  }
  

  const numero = 5;
  const factorial = factorialRecursivo(numero);
 

  module.exports = factorialRecursivo;