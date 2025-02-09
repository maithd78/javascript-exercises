const sumAll = function (a, n) {
    let finalSum;

    if (a < 0 || n < 0) return result = "ERROR";
    if (Number.isInteger(a) && Number.isInteger(n)) {
        if (a > n) {
            let tmp = a;
            a = n;
            n = tmp;
        }

        for (let i = a; i < n; i++) {
            finalSum = (n * (n + 1) / 2) - ((a - 1) * a / 2);
        }
    }

    else return finalSum = "ERROR";
    return finalSum
};

// Do not edit below this line
module.exports = sumAll;
