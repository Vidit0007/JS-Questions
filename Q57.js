//Write a function that takes an array of strings and returns a new array with the
//length of each string.
const arr = ['vidit', 'akash','prashant'];
function lengthOfStrings(arr){
   let result=[];
   for(i=0;i<arr.length;i++){
    result[i]=arr[i].length
   }
console.log(result);

   return result;
}
const length = lengthOfStrings(arr);
