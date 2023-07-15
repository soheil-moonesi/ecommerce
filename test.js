//& is bitwise AND

let a = 5; // Binary representation: 0101
let b = 6; // Binary representation:  0111

let result = a & b; // Binary AND operation: 0101

console.log(result);

//falsy value
console.log("" && "hi");
console.log(false && "hi");
console.log(null && "hi");
console.log(0 && "hi");
console.log(NaN && "hi");

//truthy value
console.log(1 && "hi");
console.log("something" && "hi");

//ternary operator
let i = 5;
i < 6 ? console.log("i is less than 6") : console.log("i is greater than 6");

//test section 1
const items0 = [{ name: "wili" }, { name: "albert" }, { name: "jack" }];

console.log(items0);

items0.push({ name: "Thomas" });

console.log(items0);






let items = [];

function handleAddItems(itemPass) {
  items = [items, itemPass];
}

handleAddItems("Item 0");
handleAddItems("Item 1");
handleAddItems("Item 2");

console.log(items);








//test section 1 end

//Spread Operator (...)
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

const combined = [...numbers1, ...numbers2];

console.log(combined);

 // Passing Array Elements as Function Arguments

function multiply(a, b, c) {
  return a * b * c;
}

const numbers = [2, 3, 4];

console.log(multiply(...numbers));

//shallow copy
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray); 
console.log(originalArray === copiedArray);  


// function add(d, e, f) {
//   console.log(d); 
//   console.log(e) 
//   console.log(f)
// }

// const numbers3 = [1, 2, 3];

// add(...numbers3);


// const some_numbers = [39, 12, 2]
// console.log(some_numbers.sort());
// convert to utf-16
// https://convertcodes.com/utf16-encode-decode-convert-string/
// 00330039 ---39
// 00310032---12
// 0032---2