const palindromes = function (str) {
    // remove punctuation and spaces
    str = str.replace(/[^a-zA-Z0-9]/g, '')
        .toLowerCase();
    // take given string and split string into single letters
    const strArray =str.split("");
    console.log(strArray);
    // reverse order of array andjoin split string in new var
    let reversed = strArray.reverse()
        .join("");
    console.log(reversed);
    console.log(str);

    // check if new str is equal to given str
    return reversed === str;
};

// Do not edit below this line
module.exports = palindromes;
