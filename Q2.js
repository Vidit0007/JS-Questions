//Print the odd numbers less than 100
let i = 1,num=100;
let count = 0;
while (i<=num) {
  if (i%2!==0) {
    console.log(`${i} is odd number`)
    count++;
  }
  i++;
}
console.log(`There are ${count} odd number`)