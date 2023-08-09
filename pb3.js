
function sortMaker(arr) {
    if (arr.length !== 2 || Array.isArray(arr)) {
        return "Invalid input";
    }
    else{
        for(let i = 0; i < arr.length; i++){
            const element = arr[i];
            if(element < 0){
                return 'Invalid input';
            }
        }
    }
    if (arr[0] == arr[1]) {
        return "equal";
    }
    else{
        let sortArray = [];
        if (arr[0] < arr[1]) {
            sortArray.push(arr[1],arr[0])
        }
        else if (arr[1] < arr[0]) {
            sortArray.push(arr[0],arr[1])
        }
        return sortArray;  
    }
}
const arr = [1, 2];
const result = sortMaker(arr);