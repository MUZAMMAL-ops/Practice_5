const { toPairs } = require("lodash");

//Q1
let hello;
console.log(hello);

//Q2
let new_1 = "hello";
new_1 = 123;
new_1 = true
console.log(new_1)

//Q3
// let new_2 = "hello"
// const new_2 = 123
// console.log(new_2)

//Q4

// let new_3 = "hello"
// let new_3 = 123
// console.log(new_3)
//Q5

let new_4 = "hello"
let new_5 = 123
new_6 = new_5+new_5
new_7 = new_4+new_4
new_8 = new_4+new_5
console.log(new_6,new_7,new_8)

//Q6
let new_9 = "Hello"
 new_10 = 123
 new_11 = true
 new_12 = new_10+new_9+new_11
 new_13 = new_11+new_10+new_9
 new_14 = new_9+new_10+new_11
 new_15 = new_9+new_11+new_10
console.log(new_12,new_13,new_14,new_15)


//Q7

let userName = "Muzammal"
age = 26
let result = `my name is ${userName} i am ${age} years old`
console.log(result)

//Q8

let var_1 = ["Heloo"]
console.log(typeof(var_1))

//Q9

const arr = [0,1,2,3,4,5,6,7,8,9]
arr.pop()
arr.push(40,60)
arr_2 = arr.length
arr.splice(7,1)
console.log(arr_2)
console.log(arr)

//Q10

const user={
    name: "Muzammal",
    age: 26,
}
user.email = "abc@xyz"
user.age = true
let copy = {...user}
copy_1 = delete copy['name']
console.log(user,copy)

//Q11

let temperature = 40;

if (temperature>=40){
    console.log("AC is required")
} else if (temperature<=5){
    console.log("Heater is required")
} else {
    console.log("weather seems cool")
}

//Q12

let userName_1 = "muzammal"
 age = 11
let hello_1 = userName_1.length


if (userName_1[0]==="A" ||"a" && age>15){
    console.log("i am muzammal and i am 26 years old")

} else if (userName_1[0]==="x" && age===undefined){
    console.log("unkown data")

} else if (hello_1===10 || age>10){
    console.log("name contain 10 letters")
} else {
    console.log("data is faulty")
}


//Q13

function LeftTriangle(length) {
    for (let i = 1; i <= length; i++) {
      let row = '';
      for (let j = 1; j <= i; j++) {
        row += '*';
      }
      console.log(row);
    }
  }
  
  LeftTriangle(5);

  
  function RightTriangle(length) {
    for (let i = 1; i <= length; i++) {
      let row = '';
      for (let j = 1; j <= length - i; j++) {
        row += ' ';
      }
      for (let k = 1; k <= i; k++) {
        row += '*';
      }
      console.log(row);
    }
  }
  
  RightTriangle(5);

  
  function Triangle(length) {
    for (let i = 1; i <= length; i++) {
      let row = '';
      for (let j = 1; j <= length - i; j++) {
        row += ' ';
      }
      for (let k = 1; k <= i * 2 - 1; k++) {
        row += '*';
      }
      console.log(row);
    }
  }
  
  Triangle(5);
  
