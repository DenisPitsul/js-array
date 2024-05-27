const phones = generatePhonesArray(20);

document.write('<div class="container">');
for (const {brand, model, color, price, ram} of phones) {
    document.write(`
    <article class="card">
        <h2 class="title">Brand: ${brand}</h2>
        <p class="text">Model: ${model}</p>
        <p class="text">Color: ${color}</p>
        <p class="text">Price: ${price}$</p>
        <p class="text">RAM: ${ram}GB</p>
    </article>`);
}
document.write('</div>');

let priceSum = 0;
for (const {price} of phones) {
    priceSum += price;
}
const avgSum = priceSum / phones.length;
console.log('Average price of pgones:', avgSum);

const ramCount = {
    4: 0,
    6: 0,
    8: 0,
    12: 0
};

for(const {ram} of phones) {
    if(Object.keys(ramCount).includes(String(ram))) {
        ramCount[ram]++;
    }
}

for(const key in ramCount) {
    if (ramCount[key] === 0) {
        console.log(`There aren't any phones with RAM ${key}`);
    } else if(ramCount[key] === 1) {
        console.log(`There is 1 phone with RAM ${key}`);
    } else {
        console.log(`There are ${ramCount[key]} phones with RAM ${key}`);
    }
}