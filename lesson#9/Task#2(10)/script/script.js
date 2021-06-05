// ***************

// Task 1

// function isEmpty(obj) {
//    for (const key in obj) {
//       if (obj.hasOwnProperty(key)) return true;
//    }
//    return false;
// }
// let user = {
//    name: 'Ilya',
//    surname: 'Protsenko',
// }
// console.log(isEmpty(user))

// End Task 1

// ***************

// Task 2

// const multiplyNumeric = (obj) => {
//    for (const key in obj) {
//       if (obj.hasOwnProperty(key)) {
//          if (typeof obj[key] === 'number') obj[key] *= 2;
//       }
//    }
// }
// let user = {
//    name: 'Ilya',
//    surname: 'Protsenko',
//    age: 22,
//    ['Favorite number']: 17,
// }
// multiplyNumeric(user)
// console.log(user)

// End Task 2

// ***************

// Task 3

// const readNumber = () => {
//    let num;
//    while (true) {
//       num = prompt('Введите число: ', "");
//       if (num === '' || num === null) {
//          return null
//       }
//    }
// }
// console.log(readNumber())

// End Task 3

// ***************

// Task 4

// const random = (minNum, maxNum) => Math.random() * (maxNum - minNum) + minNum;
// console.log(random(1, 5))

// End Task 4

// ***************

// Task 5
// const randomInteger = (maxNum, minNum) => Math.round(Math.random() * (maxNum - minNum) + minNum);
// console.log(randomInteger(1, 5))
// End Task 5

// ***************

// Task 6
// const ucFirst = (str) => str[0].toUpperCase() + str.slice(1);
// console.log(ucFirst("вася"))
// End Task 6

// ***************

// Task 7
// const checkSpam = (str) => {
//    let spam = ['viagra', 'XXX'];
//    const lowerStr = str.toLowerCase();
//    for (let i = 0; i < spam.length; i++) {
//       const strSpam = spam[i].toLowerCase();
//       if (lowerStr.includes(strSpam)) {
//          return true;
//       };
//    };
//    return false;
// };
// console.log(checkSpam('free xxxxx')); // true
// console.log(checkSpam('ViAgRA now')); // true
// console.log(checkSpam("innocent rabbit")); //false
// End Task 7

// ***************

// Task 8
// const truncate = (str, maxlength) => {
//    if (str.length > maxlength) return str.slice(0, maxlength - 1) + '...'
//    return str;
// };


// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// console.log(truncate("Всем привет!", 20))
// End Task 8

// ***************

// Task 9
// const extractCurrencyValue = (str) => +str.slice(1);
// console.log(
//    extractCurrencyValue('$120'), // 120 === number
// )
// End Task 9

// ***************

// Task 10
// function sumInput() {
//    let massNum = [],
//       num;
//    while (true) {
//       num = prompt('Введите значения', '');
//       massNum.push(num);
//       if (num === null || num === '') {
//          let prev = 0;
//          for (let index = 0; index < massNum.length; index++) {
//             const element = +massNum[index];
//             prev += element;
//          }
//          return prev;
//       };
//    };
// }
// console.log(sumInput());
// End Task 10

// ***************

// Task 11
// const getMaxSubSum = (arr) => {
//    let max = 0;
//    for (let i = 0; i < arr.length; i++) {
//       let sum = 0;
//       for (let j = i; j < arr.length; j++) {
//          sum += arr[j];
//          max = Math.max(max, sum)
//       }
//    }
//    return max
// }
// console.log(
//    getMaxSubSum([-1, 2, 3, -9]) // 5
// )
// End Task 11

// ***************

// Task 12
// Ответ: как одна, так и другая функция будет работать одинаково.
// End Task 12

// ***************

// Task 13

// function checkAge(age) {
//    (age > 18) ? true : confirm('Родители разрешили?');
// }

// const checkAge = (age) => (age > 18) || confirm('Родители разрешили?');
// console.log(checkAge(17))

// End Task 13

// ***************

// Task 14
// const min = (a, b) => a < b ? a : b;
// console.log(min(1, 2))
// End Task 14

// ***************

// Task 15
// function pow(x, n) {
//    let result = x;
//    for (let i = 1; i < n; i++) {
//       result *= x;
//    }
//    return result;
// }

// let x = prompt('X?', ' ');
// let n = prompt('N?', '');

// n > 0 ?
//    alert('Пожалуйста, введите число больше 0') :
//    alert(pow(x, n));
// End Task 15

// ***************

// Task 16
// function ask(question, yes, no) {
//    if (confirm(question)) yes()
//    else no();
// }
// ask(
//    "Вы согласны?",
//    function () { alert("Вы согласились."); },
//    function () { alert("Вы отменили выполнение."); }
// );

// const ask = (question, yes, no) => {
//    confirm(question) ? yes() : no();
// }
// ask(
//    "Вы согласны?",
//    function () { alert("Вы согласились."); },
//    function () { alert("Вы отменили выполнение."); }
// );
// End Task 16

// ***************

// Task 17

// function getParrots() {
//    let priceParrots = 8000;
//    let monthIncome = 3333;
//    let monthConsumption = monthIncome - 1750;
//    return Math.round(priceParrots / monthConsumption) + ' месяцев';
// }
// console.log(getParrots())

// End Task 17

// ***************

// Task 18
// function num(count) {
//    let sumNegativeNum = 0;
//    for (let i = 0; i < count; i++) {
//       let number = +prompt(`Введите чисел: ${count}`, '');
//       if (number < 0) {
//          sumNegativeNum += number;
//       }
//    }
//    return sumNegativeNum;
// }
// console.log(num(10))
// End Task 18

// ***************