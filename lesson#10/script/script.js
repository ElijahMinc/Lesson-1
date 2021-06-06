// ***************

// Task 1
// let arr = ["HTML", "JavaScript", "CSS"];
// function copySorted(arr) {
//    let newArr = arr.map(item => item);
//    return newArr.sort();
// }
// let sorted = copySorted(arr)
// console.log(
//    sorted,
//    arr
// )
// End Task 1

// ***************

// Task 2
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let users = [vasya, petya, masha];
// let names = (arrNames) => {
//    return arrNames.map(obj => obj.name);
// }

// console.log(names(users))
// End Task 2

// ***************

// Task 3
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };
// let arr = [vasya, petya, masha];

// function getAverageAge(users) {
//    let ageUsers = users.map(item => item.age);
//    let prev = 0;
//    ageUsers.forEach(el => {
//       prev += el;
//    });
//    return prev / ageUsers.length;
// }

// console.log(
//    getAverageAge(arr)
// )
// или
// function getAverageAge(users) {
//    return users.reduce((next, item) => next + item.age, 0) / users.length;
// }

// console.log(
//    getAverageAge(arr)
// )
// End Task 3

// ***************

// Task 4
// let strings = ["кришна", "кришна", "харе", "харе",
//    "харе", "харе", "кришна", "кришна", ":-O"
// ];
// function unique(arr) {
//    let arrUnique = [];
//    arr.forEach(element => {
//       if (!arrUnique.includes(element)) {
//          arrUnique.push(element);
//       }
//    });
//    return arrUnique;
// }

// console.log(
//    unique(strings)
// )
// End Task 4

// ***************

// Task 5
// function sum(a) {
//    return function (b) {
//       return a + b
//    }
// };

// console.log(sum(1)(2));

// console.log(sum(5)(-1));

// End Task 5

// ***************

// Task 6
// let arr = [3, 4, 10, 4, 2];

// function inBetween(a, b) {
//    return function (x) {
//       return a <= x && b >= x;
//    }
// }
// console.log(
//    arr.filter(inBetween(3, 6))
// )

// function inArray(mass) {
//    return (elem) => mass.includes(elem);
// }
// console.log(arr.filter(inArray([1, 2, 3])));
// End Task 6

// ***************

// Task 7
// function factiorial(num) {
//    if (num === 1) {
//       return num
//    } else {
//       return num * factiorial(num - 1);
//    }
// }
// console.log(factiorial(4))
// End Task 7

// ***************

// Task 8
// function fib(num) {
//    let next = 1;
//    let prev = 0;
//    for (let i = 1; i < num; i++) {
//       let temp = next;
//       next += prev;
//       prev = temp;
//    }
//    return next;
// }
// console.log(fib(3)) // 2
// console.log(fib(7)) // 13
// End Task 8

// ***************