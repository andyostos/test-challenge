//fizzBuzzM

const  calcularFizzBuzz  = require('../fizzBuzz');

describe('FizzBuzz Function', () => {
  test('Divisible by 3 should return "Fizz"', () => {
    expect(calcularFizzBuzz(9)).toBe('Fizz');
  });

  test('Divisible by 5 should return "Buzz"', () => {
    expect(calcularFizzBuzz(10)).toBe('Buzz');
  });

  test('Divisible by both 3 and 5 should return "FizzBuzz"', () => {
    expect(calcularFizzBuzz(15)).toBe('FizzBuzz');
  });

  test('Not divisible by 3 or 5 should return the original number', () => {
    expect(calcularFizzBuzz(7)).toBe("Otherwise, return the original number.");
  });
});
