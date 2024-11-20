// Task 5

/*I run it by  compiling TypeScript to JavaScript.
1- I downloaded the type script through the command:
 npm install -g typescript

2- I converted the TypeScript file to a JavaScript file using the command:
tsc product.ts

3- I ran the converted javascript file through command:
node product.js

*/
function isValidEmail(email: string): boolean {
    const email_Regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email_Regex.test(email);
}

const email1 = "noura@gmail.com";
const email2 = "noura-darwazeh@gmail";

console.log(isValidEmail(email1));
console.log(isValidEmail(email2)); 
