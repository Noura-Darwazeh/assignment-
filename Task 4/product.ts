// Task 4

/*I run it by  compiling TypeScript to JavaScript.
1- I downloaded the type script through the command:
 npm install -g typescript

2- I converted the TypeScript file to a JavaScript file using the command:
tsc product.ts

3- I ran the converted javascript file through command:
node product.js

*/

interface Product {
    name: string;
    price: number;
}

function calculateTotalPriceOfAllProducts(products: Product[]): number {
    const total = products.reduce((sum, product) => sum + product.price, 0);
    return total
}

const products: Product[] = [
    { name: "Apple", price: 10 },
    { name: "Orange", price: 5 },
    { name: "Banana", price: 30 },
];


console.log(calculateTotalPriceOfAllProducts(products));
