const removeFromArray = function(arr1, ...arr2) {
    const result = arr1.filter(item => !arr2.includes(item));
    return result;

    
};

// Do not edit below this line

module.exports = removeFromArray;
