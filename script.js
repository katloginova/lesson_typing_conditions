const sign = prompt('Enter an arithmetic sign');
const numberFirst = +prompt('Enter the first number');
const numberSecond = +prompt('Enter the second number');


if (sign === '+') {
    alert(`${numberFirst} ${sign} ${numberSecond} = ${numberFirst + numberSecond}`);
} else if (sign === '-') {
    alert(`${numberFirst} ${sign} ${numberSecond} = ${numberFirst - numberSecond}`);
} else if (sign === '*') {
    alert(`${numberFirst} ${sign} ${numberSecond} = ${numberFirst * numberSecond}`);
} else if (sign === '/') {
    alert(`${numberFirst} ${sign} ${numberSecond} = ${(numberFirst / numberSecond).toFixed(2)}`);
}