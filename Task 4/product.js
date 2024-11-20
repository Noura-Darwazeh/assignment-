// Task 4
function calculateTotalPriceOfAllProducts(products) {
    var total = products.reduce(function (sum, product) { return sum + product.price; }, 0);
    return total;
}
var products = [
    { name: "Apple", price: 10 },
    { name: "Orange", price: 5 },
    { name: "Banana", price: 30 },
];
console.log(calculateTotalPriceOfAllProducts(products));
