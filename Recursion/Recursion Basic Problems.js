// 1. WAP to find the Factorial of a given number

const getFactorial = (number) => {
  if (!Number.isInteger(number) || number < 0) {
    console.log("Please enter a positive integer as input");
    return -1;
  } else {
    if (number == 0) {
      return 1;
    } else {
      return number * getFactorial(number - 1);
    }
  }
};

// console.log(getFactorial(12));

// 2. WAP to calculate 2 to the power of n

const calculateTwosPower = (n) => {
  if (n == 0 || n < 0) {
    return 1;
  } else if (n == 1) {
    return 2;
  } else {
    return 2 * calculateTwosPower(n - 1);
  }
};

// console.log(calculateTwosPower(4));

// 3. WAP to return an array of the fibonacci series upto a given number of elements

const getFibonacciSeries = (number) => {
  if (number < 0) {
    return "Please provide a positive integer greater than 0";
  } else if (number == 0) {
    return 0;
  } else if (number == 1) {
    return 1;
  } else {
    const result =
      getFibonacciSeries(number - 1) + getFibonacciSeries(number - 2);
    console.log(result);
    return result;
  }
};

// getFibonacciSeries(5);
