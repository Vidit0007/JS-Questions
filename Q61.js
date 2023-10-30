//Convert the following ES5 code into an ES6 module:
// function greet(name){
//     return 'hello', + name + "1";
// }
// module.exports = greet;
const greet = (name)=>{
    return `hello ${name} ! `
}
const name = 'vidit';
console.log(greet(name))