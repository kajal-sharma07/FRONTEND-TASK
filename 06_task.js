
 

// 1. Normal Function
function add(a, b) {
    return a + b;
}

console.log("Addition:", add(10, 20));


// 2. Closure
function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

let result = outer();

console.log("Closure:");
result();
result();
result();


// 3. IIFE
(function() {
    console.log("Hello JavaScript");
})();


// 4. map() - Double Each Number
let numbers = [1, 2, 3, 4, 5];

let doubleNumbers = numbers.map(function(num) {
    return num * 2;
});

console.log("Doubled Numbers:", doubleNumbers);


// 5. filter() - Find Even Numbers
let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log("Even Numbers:", evenNumbers);


// 6. reduce() - Find Sum
let sum = numbers.reduce(function(total, num) {
    return total + num;
}, 0);

console.log("Sum:", sum);


// 7. forEach() - Print All Elements
let fruits = ["Apple", "Mango", "Banana"];

console.log("Fruits:");

fruits.forEach(function(fruit) {
    console.log(fruit);
});
