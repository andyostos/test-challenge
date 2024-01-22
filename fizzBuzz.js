
let numberFizzBuzz = 5;

function calcularFizzBuzz(numberFizzBuzz) {
  if (numberFizzBuzz % 3 === 0 && numberFizzBuzz % 5 === 0) {
    return "FizzBuzz";
  } else if (numberFizzBuzz % 3 === 0) {
    return "Fizz";
  } else if (numberFizzBuzz % 5 === 0) {
    return "Buzz";
  } else {
    return "Otherwise, return the original number.";
  }
}


console.log(calcularFizzBuzz(numberFizzBuzz));
