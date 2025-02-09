const add = function (a,b) {
    return a+b;

};

const subtract = function (a,b) {
    return a-b;
};

const sum = function (arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    
    return total;

};

const multiply = function (arr) {
    let total = 1;
    for (let i = 0; i < arr.length; i++){
        total *= arr[i];
    }
    
    return total;
};

const power = function (a,b) {
    // return Math.pow(a,b)

    //loop method
    let pow = 1
    for (let i = 1; i <= b; i++) {
        pow *= a;
    }
    return pow;

};

const factorial = function (n) {
    let factorialSum = 1
    for (let i = 1; i <=  n; i++){
        factorialSum *= i;
    }
    return factorialSum;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
