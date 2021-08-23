// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// const { toInteger } = require("lodash")
// const { array } = require("prop-types")


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their names capitalized.
// a) Create a test with an expect statement using the variable provided.
// b) Create the function that makes the test pass.
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."]

// ◢♂◣◥♀◤◢♂◣◥♀◤ Pseudo Code Start ◢♂◣◥♀◤◢♂◣◥♀◤

// Function that takes in an array 
// The array contains key/value pairs = name: "", occupation: ""
// Returns an array 
// The returned array is a sentence  
// The sentence contains each persons
// The sentence also contains each persons occupation  
// Each persons name is Capitalized 

// { name: "ford prefect", occupation: "hitchhiker" }
// `${name}'s occupation is ${occupation}
// Making a sentence out of an array of objects
// people.name 
// people.occupation

// ◢♂◣◥♀◤◢♂◣◥♀◤ Pseudo Code END ◢♂◣◥♀◤◢♂◣◥♀◤



// Ƹ̵̡Ӝ̵̨̄Ʒ ▬▬ι═══════ﺤ    CODE BLOCK START   -═══════ι▬▬ Ƹ̵̡Ӝ̵̨̄Ʒ // 


// --QUESTION for Sarah or Austin--
// Not sure how to run a test on objects. I am guessing there is a syntax error.
// I am expecting the variable people to return:
// "Ford Perfect's occupation is a hitchhiker"
// "Zaphod Beeblebrox's occupation is president of the galaxy" 
// "Arthur Dent's occupation is raidio employee"

describe("hello", () => {
  test("returns a sentence with each name capiitalizaed", () => {
    expect(people()).toEqual(" [
      "ford prefect's occupation is hitchhiker.",
      "zaphod beeblebrox's occupation is president of the galaxy.",
      "arthur dent's occupation is radio employee."
    ]")
  })
})

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]

  const nameOcc = (array) => {
  return array.map(value => {
    return `${value.name}'s occupation is ${value.occupation}.`
  })
}
console.log(nameOcc(people))

// // --QUESTION for Sarah or Austin--
// I was successful returning the concatnated sentence but was unable to capitalize the names. I suspect that I would have to call on the key name and use toUpperCase for the index.


// Ƹ̵̡Ӝ̵̨̄Ʒ ▬▬ι═══════ﺤ    CODE BLOCK END     -═══════ι▬▬ Ƹ̵̡Ӝ̵̨̄Ʒ // 









// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
// a) Create a test with an expect statement using the variables provided.
// b) Create the function that makes the test pass.

// Function that takes in mixed data array
// returns an array 
// New array only contains remainders of numbers when...
// ...divided by 3
// iterate through the array
// filter non-numeric values
// Use modulo to report remainer of the numbers

// Ƹ̵̡Ӝ̵̨̄Ʒ ▬▬ι═══════ﺤ    CODE BLOCK START   -═══════ι▬▬ Ƹ̵̡Ӝ̵̨̄Ʒ // 

describe("hello", () => {
  test("Returns an array of only Remainders when divided by 3", () => {
    expect(hodgepodge1()).toEqual([2, 0 , -1, 0])
    expect(hodgepodge2()).toEqual([2, 1, -1])

  })
})

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

const remDiv3 = (array) => {
  if (typeof(value) === 'number'){
    return value
  }
}

console.log(remDiv3(hodgepodge1))


// Ƹ̵̡Ӝ̵̨̄Ʒ ▬▬ι═══════ﺤ    CODE BLOCK END     -═══════ι▬▬ Ƹ̵̡Ӝ̵̨̄Ʒ // 




// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.
// a) Create a test with an expect statement using the variables provided.
// b) Create the function that makes the test pass.


// ◢♂◣◥♀◤◢♂◣◥♀◤ Pseudo Code Start ◢♂◣◥♀◤◢♂◣◥♀◤

// Function that takes in an array of numbers
// ex [1,2,3]
// returns the sum of all the numbers cubed
// iterate through the array adding each number
// 1**3 + 2**3 + 3**3 = 99
// cube each number first
// then add each of the cubed numbers


// ◢♂◣◥♀◤◢♂◣◥♀◤ Pseudo Code END ◢♂◣◥♀◤◢♂◣◥♀◤

// Ƹ̵̡Ӝ̵̨̄Ʒ ▬▬ι═══════ﺤ    CODE BLOCK START   -═══════ι▬▬ Ƹ̵̡Ӝ̵̨̄Ʒ // 

describe("hello", () => {
  test("Returns an array of only Remainders when divided by 3", () => {
    expect(cubeAndSum1()).toEqual(99)
    expect(cubeAndSum2()).toEqual([1125])

  })
})

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

const cubeAndSum = array => {
let cubedArray = array.map(value =>{
  return array **3 
})
}
console.log(cubeAndSum(cubeAndSum1))


// Ƹ̵̡Ӝ̵̨̄Ʒ ▬▬ι═══════ﺤ    CODE BLOCK END     -═══════ι▬▬ Ƹ̵̡Ӝ̵̨̄Ʒ // 
