const findTheOldest = function(array) {
    arrayAges = [...array].map(function(v) {
        if (!('yearOfDeath' in v)) {
            return ({...v, yearOfDeath : "unknown"})
        }
        return ({...v})
    })

    // console.table(arrayAges)

    const sortOldest = arrayAges.sort(function(a,b) {

        last = a.yearOfDeath - a.yearOfBirth;
        next = b.yearOfDeath - b.yearOfBirth;   
        if (b.yearOfDeath === "unknown") {
            next = 2025 - b.yearOfBirth;
        }
        return last > next ? -1 : 1
    })
    // console.table(arrayAges)
    console.table(sortOldest)
    oldest = sortOldest[0]

    return sortOldest[0]
    
    
    
};

// Do not edit below this line
module.exports = findTheOldest;
