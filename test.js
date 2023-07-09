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

const items = [{ name: "wili" }, { name: "albert" }, { name: "jack" }];

console.log(items);

items.push({ name: "Thomas" });

console.log(items);

let items2 = ['item 0'];

function handleAddItems(itemPass) {
  items2 = [...items2, itemPass];
}

handleAddItems("Item 1");
handleAddItems("Item 2");

console.log(items2);
