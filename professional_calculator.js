/**
 * Filename: professional_calculator.js
 * Description: A professional and creative calculator with advanced functionalities
 */

// Calculator class
class Calculator {
  constructor() {
    this.result = 0;
  }

  // Addition operation
  add(...numbers) {
    this.result = numbers.reduce((acc, curr) => acc + curr, this.result);
    return this;
  }

  // Subtraction operation
  subtract(...numbers) {
    this.result = numbers.reduce((acc, curr) => acc - curr, this.result);
    return this;
  }

  // Multiplication operation
  multiply(...numbers) {
    this.result = numbers.reduce((acc, curr) => acc * curr, this.result);
    return this;
  }

  // Division operation
  divide(...numbers) {
    this.result = numbers.reduce((acc, curr) => acc / curr, this.result);
    return this;
  }

  // Exponential operation
  exponentiate(base, exponent) {
    this.result = Math.pow(base, exponent);
    return this;
  }

  // Square root operation
  squareRoot(number) {
    this.result = Math.sqrt(number);
    return this;
  }

  // Logarithmic operation
  logarithm(base, number) {
    this.result = Math.log(number) / Math.log(base);
    return this;
  }

  // Factorial operation
  factorial(number) {
    if (number < 0) {
      throw new Error("Factorial is not defined for negative numbers.");
    }

    if (number === 0) {
      this.result = 1;
    } else {
      this.result = number * this.factorial(number - 1).result;
    }

    return this;
  }

  // Clear the result
  clear() {
    this.result = 0;
    return this;
  }

  // Get the current result
  getResult() {
    return this.result;
  }
}

// Custom Math Utility class
class MathUtils {
  static isPrime(number) {
    if (number < 2) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }

    return true;
  }

  static getFibonacci(n) {
    if (n <= 0) {
      throw new Error("Fibonacci sequence starts with 1.");
    }

    let prev = 0;
    let curr = 1;
    let fibSequence = [curr];

    for (let i = 2; i <= n; i++) {
      const temp = prev + curr;
      prev = curr;
      curr = temp;
      fibSequence.push(curr);
    }

    return fibSequence;
  }

  static getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

// Example usage
console.log("--- Advanced Calculator ---");

const calculator = new Calculator();

const result1 = calculator
  .add(5, 10)
  .subtract(3)
  .multiply(4)
  .divide(2)
  .getResult();
console.log("Result 1:", result1);

const result2 = calculator
  .clear()
  .exponentiate(2, 5)
  .squareRoot(81)
  .logarithm(10, 1000000)
  .getResult();
console.log("Result 2:", result2);

const result3 = calculator
  .clear()
  .factorial(6)
  .getResult();
console.log("Result 3:", result3);

console.log("--- Math Utilities ---");

console.log("Is 17 prime?", MathUtils.isPrime(17));
console.log("Fibonacci sequence (n=10):", MathUtils.getFibonacci(10));
console.log("Random number between 1 and 100:", MathUtils.getRandomNumber(1, 100));
