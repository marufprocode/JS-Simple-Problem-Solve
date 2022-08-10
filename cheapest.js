//Find Cheapest phones Price

/* const phones = [
    { name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver' },
    { name: 'Walton', camera: 10, storage: '64gb', price: 22000, color: 'silver' },
    { name: 'iphone', camera: 7, storage: '128gb', price: 82000, color: 'silver' },
    { name: 'Xaomi', camera: 17, storage: '64gb', price: 52000, color: 'silver' },
    { name: 'Oppo', camera: 25, storage: '16gb', price: 20000, color: 'black' },
    { name: 'Nokia', camera: 6, storage: '32gb', price: 44000, color: 'golden' },
    { name: 'HTC', camera: 10, storage: '32gb', price: 62000, color: 'silver' },
];

// Solution to get full information of high storage phone
function cheapestPhone (phones){
    let highStorage = phones[0];
    for (let i=0; i<phones.length; i++){
        if (parseInt(highStorage.storage)<parseInt(phones[i].storage)){
            highStorage = phones[i];
        }
    }
    return highStorage
}

const highStoragePhone = cheapestPhone(phones);
console.log(highStoragePhone);
 */

// ======================================================
// Solution to get full information of cheapest phone price

/* function cheapestPhone (phones){
    let cheapPhone = phones[0];
    for (let i=0; i<phones.length; i++){
        if (cheapPhone.price>phones[i].price){
            cheapPhone = phones[i];
        }
    }
    return cheapPhone
    // console.log(phonePrice);
}

const cheapPhone = cheapestPhone(phones);
console.log(cheapPhone); */

//Solution 1: 

/* function cheapestPhone (phones){
    let cheapestPhonePrice = phones[1].price;
    for (let i=0; i<phones.length; i++){
        if (cheapestPhonePrice>phones[i].price){
            cheapestPhonePrice = phones[i].price;
        }
    }
    return cheapestPhonePrice
    // console.log(phonePrice);
}

const cheapestPhonePrice = cheapestPhone(phones);
console.log(cheapestPhonePrice); */

// =========================================
//Solution 2:

/* function cheapestPhone (phones){
    const phonePrice = [];
    for (let i=0; i<phones.length; i++){
        phonePrice.push(phones[i].price);
    }
    const cheapestPhonePrice = Math.min.apply(null, phonePrice)
    
    return cheapestPhonePrice
    // console.log(phonePrice);
}

const cheapestPhonePrice = cheapestPhone(phones);
console.log(cheapestPhonePrice); */

