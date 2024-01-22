// Función recursiva para calcular el factorial de un número
function factorialRecursivo(numero) {

    if (numero < 0) {
      return "No se puede calcular el factorial de un número negativo.";
    }

    if (numero === 0) {
      return 1;
    }
  
    return numero * factorialRecursivo(numero - 1);
  }
  
  // Ejemplo de uso
  const numero = 5;
  const factorial = factorialRecursivo(numero);
  
  console.log(`El factorial de ${numero} es: ${factorial}`);