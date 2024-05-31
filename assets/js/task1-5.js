const numericArray = generateNumericArray(15, 1, 10);
console.log('Initial array:', numericArray);

// 1
numericArray.pop();
numericArray.shift();
numericArray.unshift(1);
numericArray.push(10);
console.log('Array after changes:', numericArray);

// 2
console.log('Array length:', numericArray.length);

// 3
const copyNumericArray = [...numericArray];
console.log('numericArray === copyNumericArray:', numericArray === copyNumericArray);

// 4
for(let i = 0; i < numericArray.length; i+=2) {
    console.log(i, ':', numericArray[i]);
}

// 5
let mult = 1;
for(const number of numericArray) {
    mult *= number;
}
console.log('mult of numbers in array:', mult);

