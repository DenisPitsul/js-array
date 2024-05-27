function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateNumericArray(length, minNumber, maxNumber) {
    var numericArray = new Array(length);

    for (var i = 0; i < numericArray.length; i++) {
        numericArray[i] = getRandomNumber(minNumber, maxNumber);
    }
    return numericArray;
}

function generatePhonesArray(length) {
    const phoneModels = {
        "Apple": ["iPhone 12", "iPhone 11", "iPhone SE", "iPhone XR"],
        "Samsung": ["Galaxy S21", "Galaxy Note 20", "Galaxy A52", "Galaxy S20"],
        "Xiaomi": ["Redmi Note 10", "Mi 11", "Redmi 9", "Mi 10T"],
        "Huawei": ["P40 Pro", "Mate 40", "P30 Lite", "Nova 7i"],
        "OnePlus": ["OnePlus 9", "OnePlus 8T", "OnePlus Nord", "OnePlus 8"]
    };
    
    const colors = ["Black", "White", "Silver", "Blue", "Gold"];
    
    const phones = [];
    for (let i = 0; i < length; i++) {
        const brandIndex = getRandomNumber(0, Object.keys(phoneModels).length - 1);
        const brand = Object.keys(phoneModels)[brandIndex];
        const modelIndex = getRandomNumber(0, phoneModels[brand].length - 1);
        const model = phoneModels[brand][modelIndex];
    
        const phone = {
            id: i + 1,
            brand: brand,
            model: model,
            color: colors[getRandomNumber(0, colors.length - 1)],
            price: getRandomNumber(200, 1000),
            ram: getRandomNumber(2, 12)
        };
        phones.push(phone);
    }
    
    return phones;
}