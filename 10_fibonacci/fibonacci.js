const fibonacci = function(fib) {
    if (typeof fib === "string") {
        var number = parseInt(fib);
        fib = number;
    }

    let fibArr = [0,1];
    for (let i = 2; i <= fib; i++) {
        let nextSequence = fibArr[i-1] + fibArr[i-2];
        fibArr.push(nextSequence);
    }

    if (fib === 0) {
        return 0;
    } else if (fib <= -1) {
        return "OOPS"
    } else {
    return fibArr.pop()
    }
};

// Do not edit below this line
module.exports = fibonacci;
