function cubeNumber(number) {
    if (typeof number !== "number") {
        return "Please provide a number";
    }
    else if (number <= 0) {
        return "please provide a positive number"
    }
    else{
        return number*number*number;
    }
}


function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "please provide string"
    }
   else if (string1.toLowerCase().includes(string2.toLowerCase())) {
    return true;
   }
   else{
    return false;
   }
}


function sortMaker(arr) {
    if (arr.length > 2) {
        return "Invalid input"
    }
    let [num1, num2] = arr;
    if (num1 < 0 || num2 < 0) {
        return "Invalid input"
    }
    else if (num1 === num2) {
        return "equal"
    }
    else{
        return [Math.max(num1, num2), Math.min(num1, num2)];
    }
}


function findAddress(obj) {
    if (typeof obj !== 'object') {
        return "please provide a object"
    }
    else{
        const street = obj.street || "_";
        const house = obj.house || "_";
        const earth = obj.earth || "_";
        return street + "," + house + "," + earth;
    }
}


 function canPay(changeArray, totalDue) {
    let sum = 0;
    if (Array.isArray(changeArray) && changeArray.length === 0) {
        return "this array is empty"
    }
    else{
        for(let i = 0; i < changeArray.length; i++){
            let totalSum = changeArray[i];
            sum += totalSum;
        } 
    }
    if (totalDue <= sum) {
        return true;
    }
    else{
        return false;
    }
}

