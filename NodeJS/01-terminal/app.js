// 1. 
console.log("Hello, Node.js!");

// 2. passing arguments
// inside your script, let's say app.js
console.log('Number of arguments:', process.argv.length - 2); // subtract the first two default elements
console.log('Arguments:', process.argv.slice(2)); // slice the array to get only the arguments you passed
