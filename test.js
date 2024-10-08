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
  items = [...items, itemPass];
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

function add(d, e, f) {
  console.log(d);
  console.log(e);
  console.log(f);
}

const numbers3 = [1, 2, 3];

add(...numbers3);

let rate = ["", "", "", ""];
console.log(rate);
let show = rate.map((rate) => rate + 3);
console.log(show);

let rate2 = Array(5).fill(0);
console.log(rate2);
let show2 = rate2.map((_, i) => i);

console.log(show2);

let sumPriceEachItem = [1, 2, 3];
let initialValue = 0;

const totalPriceAllItems = sumPriceEachItem.reduce(function (
  accumulator,
  currentValue,
  index
) {
  return accumulator + currentValue;
}, initialValue);
console.log(totalPriceAllItems);

let data = [
  {
    name: "آمپر متر ۹۶",
    price: "7990000",
    model: "AMD-6000A",
    code: "21D1",
    weight: "315gr",
    dimension: "96*96*115 mm",
    standard: "ip30",
    photo: "https://s8.uupload.ir/files/آمپر_متر_۹۶_1cx.jpg",
    id: "1",
    buyCount: 5,
  },
  {
    name: " آمپرمتر ۹۶*۴۸",
    price: "8900000",
    model: "AMU-6000A",
    code: "21U1",
    weight: "250gr",
    dimension: "48*96*112 mm",
    standard: "ip20",
    photo: "https://s8.uupload.ir/files/آمپرمتر_۹۶۴۸_4mul.jpg",
    id: "2",
    buyCount: 10,
  },
];

let dataExt = [
  {
    name: " 1",
    price: "2",
    model: "3",
    code: "4",
    weight: "5",
    dimension: "6",
    standard: "7",
    photo: "8",
    id: "1",
    buyCount: 3,
  },
];
// for (let i = 0; i < data.length; i++) {
//   if (dataExt[0].id === data[i].id) {
//     console.log("hi");
//     console.log(i);
//     data[i].price = 0;
//   } else {
//     console.log("lo");
//   }
// }
// let testdata = { ...data[0], name: "kk" };
// console.log(testdata);
// console.log(data);
let newData;
let x;
x = data.findIndex((data) => data.id === dataExt[0].id);
console.log(x);
if (x === -1) {
  console.log("sss");
  newData = [...data, dataExt[0]];
  console.log(newData);
} else {
  newData = [...data];
  newData[x] = {
    ...newData[x],
    buyCount: data[x].buyCount + dataExt[0].buyCount,
  };
  console.log(newData);
}
