
console.log(1&&1)
console.log(1&1)
console.log(1&&2)
//& is bitwise AND
console.log(1&2)

//falsy value
console.log(''&&'hi')
console.log(false&&'hi')
console.log(null&&'hi')
console.log(0&&'hi')
console.log(NaN&&'hi')

//truthy value
console.log(1&&'hi')
console.log('something'&&'hi')

//ternary operators
let i=10
i<6 ? console.log('i is less than 6') : console.log("i is greater than 6")


