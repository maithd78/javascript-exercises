const repeatString = function(string,num) {
    str = "";
    if (num < 0){
        str = "ERROR";
    } else {
    for (let i = 0; i < num; i++)
    {
        str += string;
    }
    }
    return str;


}


// Do not edit below this line
module.exports = repeatString;
