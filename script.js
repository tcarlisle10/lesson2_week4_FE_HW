let isLoggedIn = true

if (isLoggedIn) {
    console.log("You are now signed in")
} else {
    console.log("Please sign in")
};


if (isLoggedIn) {
    
    products = [
        {id: 1, name: 'Poptarts', price: 6.50},
        {id: 2, name: 'Waffles', price: 8.50},
        {id: 3, name: 'Bacon', price: 10},
        {id: 4, name: 'Eggs', price: 6},
        {id: 5, name: 'Cereal', price: 9.75},
        {id: 6, name: 'Milk', price: 5},
        {id: 7, name: 'Oatmeal', price: 3},
        {id: 8, name: 'Sausage', price: 7},
    ];

    console.log("Available Products:");
    for (product of products) {
        console.log(`${product.id}: ${product.name} is ${product.price}`)
    }
};


let chooseProduct = prompt("Enter the product id you'd like to add?");    // it says there a no issues but it says prompt is not defined 

const cart = [];
const addId = products.find(product => product.id === chooseProduct);

if (addId) {
    cart.push(addId);
    console.log(`${addId.name} added to the cart`);
}

function calculateTotal(cart) {
    let total = 0
    for (let item in cart) {
        total += item.price;
    }
    return total;
}

const totalCost = calculateTotal(cart);
console.log(`Total Cost: $${totalCost.toFixed(2)}`);