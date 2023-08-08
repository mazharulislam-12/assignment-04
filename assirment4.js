// assirment 01
// function cubeNumber(number) {
//     if (typeof number !== "number") {
//         return "Please provide a number";
//     }
//     else if (number <= 0) {
//         return "please provide a positive number"
//     }
//     else{
//         return number*number*number;
//     }
// }


// assirment 02
// function matchFinder(string1, string2) {
//     if (typeof string1,string2 === "string") {
//         return "please provide string"
//     }
//     else{
//         if (string1.includes(string2)) {
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
// }
// console.log(matchFinder('John Doe', 'oho'));


// assirment 03--------

function shotMarke(a, b) {
    if (a === b) {
        return "equal"
    }
    else{
       return [Math.min(a, b), Math.max(a, b)];
    } 
}
console.log(shotMarke(4,2));


