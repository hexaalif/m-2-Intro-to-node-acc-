// local modules
// const name = require("./index");

// const add = (num1, num2) => {
//     return num1 + num2;
//   };
//   const subtract = (num1, num2) => {
//     return num1 - num2;
//   };
//   // console.log(global.name);

//   module.exports = { name, add, subtract };

const { add } = require("./index1");
const other = require("./index1");

const result = other.subtract(4, 2);
console.log(result);

// core modules
// const http = require("http");

// third party module --> underscore

// const _ = require("underscore");

// const server = http.createServer(function (req, res) {
//   //   ddsfslk
// });

// server.listen(5000);

// const result = add(2, 3);
// console.log(result);

// var stooges = [
//   { name: "moe", age: 40 },
//   { name: "larry", age: 50 },
//   { name: "curly", age: 60 },
// ];
// const res = _.pluck(stooges, "age");
// console.log(res);
