//Write a function that takes an array of numbers and returns a new array with
//only the even numbers
const arr=[1,2,3,4,5,6,7,8];
function onlyEven(arr){
    let result=[]
    for(i=0; i<arr.length; i++){
        if(arr[i]%2==0){
            result.push(arr[i])
        }
        else{
            continue
        }
    }
    console.log(result)
}
onlyEven(arr)
