//Print allthe multiplication tables with numbers from 1 to 10
const number = parseInt(prompt('Enter an integer: '));

for(let i = 1; i <= 10; i++) {

    const result = i * number;

    console.log(`${number} * ${i} = ${result}`);
}