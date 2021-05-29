// Task #1

// let name = 'Ilya',
//    admin = name;
// alert(admin)

// End Task#1

// ********************

// Task #2
// Заглавные буквы допустимо использовать
// При объявлении констант.
// Так же заглавные буквы допустимо использовать в случае,
// когда это касается какой - либо ключевой информации,
// и чтобы её значение не представлять напрямую
// её кладут в переменную, именуемую заглавными буквами.
// 1237 - что это ?
// правильно - это const AGE_BERLIN = 1237;
// End Task#2

// ********************

// Task #3
// let name = "Ilya";
// alert(`hello ${1}`); // 1
// alert(`hello ${"name"}`); // hello
// alert(`hello ${name}`); // Ilya
// End Task#3

// ********************

// Task #4
// alert("" + 1 + 0) // 10
// alert("" - 1 + 0) // -1
// alert(true + false) // 1
// alert(6 / "3") // 2
// alert("2" * "3") // 6
// alert(4 + 5 + "px") // 9px
// alert("$" + 4 + 5) // $45
// alert("4" - 2) // 2
// alert("4px" - 2) // NaN
// alert(7 / 0) // infinity
// alert(" -9 " + 5) // -9 5
// alert(" -9 " - 5) // -14
// alert(null + 1) // 1
// alert(undefined + 1) // NaN
// End Task#4

// ********************

// Task #5
// let a = 1,
//    b = 1;
// let c = ++a;
// let d = b++;
// console.log(
//    `a = ${a}`, // 2
//    `b = ${b}`, // 2
//    `c = ${c}`, // 2
//    `d = ${d}`, // 1
// )
// End Task#5

// ********************

// Task #6
// let a = 2;
// let x = 1 + (a *= 2);
// console.log(a, x)
// a == 4
// x == 5
// End Task#6

// ********************

// Task #7
// 5 > 4 
// "ананас" > "яблоко"
// "2" > "12"
// undefined == null
// undefined === null
// null == "\n0\n"
// null === +"\n0\n"
// console.log(
//    5 > 4,  // true
//    "ананас" > "яблоко", // false
//    "2" > "12", // true
//    undefined == null, // true
//    undefined === null, // false 
//    null == "\n0\n", // false
//    null === +"\n0\n", // false
// )
// End Task#7

// ********************

// Task #8
// let isName = prompt('What is your name?', '')
// alert(`Your name is ${isName}`)
// End Task#8

// ********************

// Task #9
// if ("0") {
//    alert('Привет');
// } 
// Ответ: да, вывод доступен
// End Task#9

// ********************

// Task #10
// let isName = 'ECMAScript'
// let whatIsName = prompt('Каково официальное название JavaScript ?', '')

// if (whatIsName == isName) {
//    alert('Верно!')
// } else {
//    alert('Не знаете? ECMAScript!')
// }
// End Task#10

// ********************

// Task #11
// let number = prompt('Enter the number', '');
// if (+number > 0) {
//    alert(1)
// } else if (+number < 0) {
//    alert(-1)
// } else if (+number === 0) {
//    alert(0)
// }
// End Task#11

// ********************

// Task #12
// let result;
// (a + b < 4) ? result = 'Мало' : result = "Много";
// End Task#12

// ********************

// Task #13
// let login = prompt('Who are you', '');
// let message = (login == 'Сотрудник') ? 'Привет' :
//    (login == 'Директор') ? 'Здравствуйте' :
//       (login == '') ? 'Нет логина' :
//          '';
// alert(message)
// End Task#13

// ********************

// Task #14
// alert(alert(1) || 2 || alert(3));
// Ответ: 1 затем 2
// End Task#14

// ********************

// Task #15
// alert(alert(1) || 2 || alert(3));
// Ответ: 1 затем 2
// End Task#15

// ********************

// Task #16
// alert(1 && null && 2);
// Ответ: null
// End Task#16

// ********************

// Task #17
// alert(alert(1) && alert(2));
// Ответ: 1 затем undefined
// End Task#17

// ********************

// Task #18
// alert(null || 2 && 3 || 4);
// Ответ: 3
// End Task#18

// ********************

// Task #19
// let age = prompt('Age:', '');
// if (age >= 14 && age <= 90) {
//    alert(age)
// }
// End Task#19

// ********************

// Task #20
// let age = prompt('Age:', '');
// Первый способ:
// if (!(age >= 14 && age <= 90)) {
//    alert(age)
// }
// Второй способ: 
// if (age < 14 || age > 90) {
//    alert(age)
// }
// End Task#20

// ********************

// ********************

// Task #21
// if (-1 || 0) alert('first'); // first
// if (-1 && 0) alert('second'); // ничего не выведится
// if (null || -1 && 1) alert('third');// third
// End Task#21

// ********************

// Task #22
// let whoIs = prompt('Who`s there', ''),
//    youAre;
// if (whoIs == 'Админ') {
//    youAre = prompt('Parol?', '')
//    if (youAre == null) {
//       alert('Отменено')
//    } else if (youAre == 'Я главный') {
//       alert('Здравствуйте!')
//    } else if (youAre != 'Админ') {
//       alert('Неверный пароль')
//    } else {
//       alert('Отменено')
//    }
// }
// else if (whoIs === null) {
//    alert('Отменено');
// };
// else if (whoIs != 'Админ') {
//    alert('Я вас не знаю');
// } else {
//    alert('Отменено');
// };
// End Task#22

// ********************

// Task #23
// if (browser == 'Edge') {
//    alert("You've got the Edge!");
// } else if (browser == 'Chrome'
//    || browser == 'Firefox'
//    || browser == 'Safari'
//    || browser == 'Opera') {
//    alert('Okay we support these browsers too');
// } else {
//    alert('We hope that this page looks ok!');
// }
// End Task#23

// ********************

// Task #24
// let a = +prompt('a?', '');

// switch (a) {
//    case 0:
//       alert(0);
//       break;
//    case 1:
//       alert(1);
//       break;
//    case 2:
//    case 3:
//       alert('2,3');
//       break;
// }
// End Task#24

// ********************

// Task #25
// let number = 22848;
// if (number > 0) {
//    ++number
//    alert(number)
// } else {
//    alert(number)
// }
// End Task#25

// ********************

// Task #26
// let number = 25;
// if (number > 0) {
//    ++number
//    alert(number)
// } else {
//    number -= 2
//    alert(number)
// }
// End Task#26


// ********************

// Task #27
// let number = 2;
// if (number > 0) {
//    ++number
//    alert(number)
// } else if (number < 0) {
//    number -= 2
//    alert(number)
// } else {
//    number = 10
//    alert(number)
// }
// End Task#27

// ********************

// Task #28
// let firstNum = prompt('firstNum', '');
// let secondNum = prompt('secondNum', '');
// let thirdNum = prompt('thirdNum', '');
// let positiveNum = 0;
// if (firstNum > 0) {
//    ++positiveNum;
// }
// if (secondNum > 0) {
//    ++positiveNum;
// }
// if (thirdNum > 0) {
//    ++positiveNum;
// }
// alert(positiveNum)
// End Task#28

// ********************

// Task #29
// let firstNum = prompt('firstNum', '');
// let secondNum = prompt('secondNum', '');
// let thirdNum = prompt('thirdNum', '');
// let positiveNum = 0,
//    negativeNum = 0;
// (firstNum > 0) ? ++positiveNum : ++negativeNum;
// (secondNum > 0) ? ++positiveNum : ++negativeNum;
// (thirdNum > 0) ? ++positiveNum : ++negativeNum;
// alert(`Количество положительных чисел: ${positiveNum}`)
// alert(`Количество отрицательных чисел: ${negativeNum}`)
// End Task#29

// ********************

// Task #30
// let firstNum = prompt('firstNum', '');
// let secondNum = prompt('secondNum', '');
// if (firstNum > secondNum) {
//    alert(firstNum)
// } else {
//    alert(secondNum)
// }
// End Task#30

// ********************

// Task #31
// let firstNum = prompt('firstNum', '');
// let secondNum = prompt('secondNum', '');

// if (firstNum < secondNum) {
//    alert(`1: ${firstNum}`);
// } else {
//    alert(`2: ${secondNum}`);
// }
// End Task#31

// ********************

// Task #32
// let firstNum = prompt('firstNum', '');
// let secondNum = prompt('secondNum', '');

// if (firstNum > secondNum) {
//    alert(`firstNum: ${firstNum}`);
//    alert(`secondNum: ${secondNum}`);
// } else {
//    alert(`firstNum: ${firstNum}`);
//    alert(`secondNum: ${secondNum}`);
// }
// End Task#32

// ********************

// Task #33 
// let A = prompt('A', ''); 
// let B = prompt('B', ''), 
//    c 
// c = A 
// A = B
// B = c 
// alert(`A: ${A}`);
// alert(`B: ${B}`);
// End Task#33

// ********************

// Task #34
// let A = +prompt('A', '');
// let B = +prompt('B', '');

// if (A != B) {
//    A += B;
//    B = A
//    alert(`A = ${A}`);
//    alert(`B = ${B}`);
// } else {
//    A = 0;
//    B = 0;
//    alert(`A: ${A}`);
//    alert(`B: ${B}`);
// }
// End Task#34

// ********************

// Task #35
// let A = +prompt('A', '');
// let B = +prompt('B', '');
// if (A != B) {
//    if (A > B) {
//       B = A
//    } else {
//       A = B
//    }
//    alert(`A = ${A}`);
//    alert(`B = ${B}`);
// } else {
//    A = 0;
//    B = 0;
//    alert(`A: ${A}`);
//    alert(`B: ${B}`);
// }
// End Task#35

// ********************

// Task #36
// let firstNum = prompt('firstNum', '');
// let secondNum = prompt('secondNum', '');

// if (firstNum < secondNum) {
//    alert(`1: ${firstNum}`);
// } else {
//    alert(`2: ${secondNum}`);
// }
// End Task#36

// ********************

// Task #37
// let firstNum = +prompt('firstNum', '');
// let secondNum = +prompt('secondNum', '');
// let thirdNum = +prompt('thirdNum', '');

// if (firstNum < secondNum && firstNum < thirdNum) {
//    alert(`firstNum: ${firstNum}`);
// } else if (secondNum < firstNum && secondNum < thirdNum) {
//    alert(`secondNum: ${secondNum}`);
// } else if (thirdNum < firstNum && thirdNum < secondNum) {
//    alert(`thirdNum: ${thirdNum}`);
// }
// End Task#37

// ********************

// Task #38
// let firstNum = +prompt('firstNum', '');
// let secondNum = +prompt('secondNum', '');
// let thirdNum = +prompt('thirdNum', '');
// let max = Math.max(firstNum, secondNum, thirdNum)
// let min = Math.min(firstNum, secondNum, thirdNum)
// alert(min)
// alert(max)
// End Task#38

// ********************

// Task #39
// let firstNum = +prompt('firstNum', '');
// let secondNum = +prompt('secondNum', '');
// let thirdNum = +prompt('thirdNum', '');
// let maxFirst,
//    maxSecond;
// if (firstNum > secondNum) {
//    maxFirst = firstNum;
//    if (secondNum > thirdNum) {
//       maxSecond = secondNum;
//    } else {
//       maxSecond = thirdNum;
//    };
// } else {
//    maxFirst = secondNum;
//    if (firstNum > thirdNum) {
//       maxSecond = firstNum;
//    } else {
//       maxSecond = thirdNum;
//    };
// };
// alert(maxFirst + maxSecond)
// End Task#39

// ********************

// Task #40
// let firstNum = +prompt('firstNum', '');
// let secondNum = +prompt('secondNum', '');
// let thirdNum = +prompt('thirdNum', '');
// (firstNum == secondNum ? alert(3) : (firstNum == thirdNum) ? alert(2) : alert(1));
// End Task#40