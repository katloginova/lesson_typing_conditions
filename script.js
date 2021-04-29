const sign = prompt('Enter an arithmetic sign');
const numberFirst = +prompt('Enter the first number');
const numberSecond = +prompt('Enter the second number');


const expression = `${numberFirst} ${sign} ${numberSecond}`;

const operaitions = {
    addition: numberFirst + numberSecond,
    subtraction: numberFirst - numberSecond,
    multiplication: numberFirst * numberSecond,
    division: numberFirst / numberSecond
};

if (sign === '+') {
    alert(expression + ' = ' + operaitions.addition);
} else if (sign === '-') {
    alert(expression + ' = ' + operaitions.subtraction);
} else if (sign === '*') {
    alert(expression + ' = ' + operaitions.multiplication);
} else if (sign === '/') {
    alert(expression + ' = ' + operaitions.division.toFixed(2));
}