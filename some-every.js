/*
Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/

function hasOddNumber(arr) {
    // console.log(arr);
    return arr.some(function(val) {
        // console.log(val);
        // console.log(val % 2);
        if (val % 2 != 0) return true;
    });
}
/*
Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false
*/

function hasAZero(num) {
    // console.log(num);
    let tempArr = String(num).split('');
    // console.log(tempArr);
    return tempArr.some(function(val) {
        // console.log(val);
        if (val == 0) return true;
    });
}

/*
Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false. 

Examples:
    hasOnlyOddNumbers([1,3,5,7]) // true
    hasOnlyOddNumbers([1,2,3,5,7]) // false
*/

function hasOnlyOddNumbers(arr) {
    // console.log(arr);
    return arr.every(function(val) {
        // console.log(val);
        // console.log(val % 2);
        if (val % 2 != 0) return true;
    });
}

/*
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

Examples:
    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true
*/

function hasNoDuplicates(arr) {
    // console.log(arr);  
    return arr.every(function(val) {
        // console.log('Value: ', val);
        // console.log('First Instance: ', arr.indexOf(val));
        // console.log('Last Instance: ', arr.lastIndexOf(val));
        return (arr.indexOf(val) === arr.lastIndexOf(val));
    });
    
}

/*
Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false
*/

function hasCertainKey(arr, key) {
    // console.log(arr);
    return arr.every(function(val) {
        // console.log(val);
        // console.log(key);
        // console.log(key in val);
        return key in val;
    });
}

/*
Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Elie') // false
    
*/

function hasCertainValue(arr, key, searchValue) {
    // console.log(arr);
    // console.log(key);
    // console.log(searchValue);
    return arr.every(function(val) {
        // console.log(val);
        // console.log(val[key]);
        // console.log(val[key] === searchValue);
        return (val[key] === searchValue);
    });
}
