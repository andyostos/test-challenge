const  factorialRecursivo  = require('../factorial');

describe('Factorial Calculation', () => {
  test('Calculate factorial using recursion', () => {
    expect(factorialRecursivo(5)).toBe(120);
  });

  test('Factorial of 0 should be 1', () => {
    expect(factorialRecursivo(0)).toBe(1);
  });

  test('Factorial of a negative number should return an error message', () => {
    expect(factorialRecursivo(-3)).toBe("No se puede calcular el factorial de un número negativo.");
  });
});