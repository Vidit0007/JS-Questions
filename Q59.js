// Create a function that finds the maximum number in an array using the spread
//operator.
const arr =[1,2,3,4,5,6,7,89,99];
function maxNumber(arr){
    let max = Math.max(...arr)
    return max;
}
const max = maxNumber(arr)
console.log(max)