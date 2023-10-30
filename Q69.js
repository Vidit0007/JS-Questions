// Create a function that accepts a variable number of arguments using the rest
// parameter syntax:
function sum(...args) {
    return args.reduce((acc,curr)=> acc+curr,0);
}
console.log(sum(1,2,3,4,5))