const numbers = generateNumericArray(15, -10, 10);
console.log('Numbers:', numbers);

// 8
const notZeroNumbers = numbers.filter(number => number !== 0);
console.log('Not zero numbers:', notZeroNumbers);

// 9
const dividedBy100Numbers = numbers.map(number => number / 100);
console.log('Divided by 100 numbers:', dividedBy100Numbers);

// 10
numbers.forEach(number => console.log(`${number}^3 = ${Math.pow(number, 3)}`));

// 11
const foundIndex = numbers.findIndex(number => number**2 === 100);
if (foundIndex !== -1) {
    numbers.splice(foundIndex, 1);
    console.log('Numbers without element whose square is 100:', numbers);
} else {
    console.log('There is no numbers with element whose square is 100.');
}

// 12
const areAllNumbersEven = numbers.every(number => number % 2 === 0);
console.log('All numbers are even:', areAllNumbersEven);

// 13
const doNumbersHaveNegativeNumber = numbers.some(number => number < 0);
console.log('Numbers have negative number:', doNumbersHaveNegativeNumber);