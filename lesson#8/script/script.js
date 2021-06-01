// ********************

// Task #1
// let i = 3;
// while (i) {
// alert( i-- );
// }
// Ответ: 1. При каждой итерации i уменьшается на 1,
//    и остановится при значении i = 0;
// End Task#1

// ********************

// Task #2
// let a = -1,
//    b = 2,
//    c = 5;

// if (a < b && b < c) {
//    a *= 2;
//    b *= 2;
//    c *= 2;
// } else {
//    a = -a;
//    b = -b;
//    c = -c;
// };
// alert(a);
// alert(b);
// alert(c);
// End Task#2

// ********************

// Task #3
// let a = 5,
//    b = 2,
//    c = -1;

// if (a < b && b < c || a > b && b > c) {
//    a *= 2;
//    b *= 2;
//    c *= 2;
// } else {
//    a = -a;
//    b = -b;
//    c = -c;
// };
// alert(a);
// alert(b);
// alert(c);
// End Task#3

// ********************

// Task #4
// let a = prompt('firstNum?', '');
// let b = prompt('secondNum?', '');
// let c = prompt('thirdNum?', '');
// if (Math.abs(a - b) < Math.abs(a - c)) {
//    console.log(`Точка ${b}: `)
//    if ((a - b) > 0) {
//       console.log(`расстояние: ${a - b} `);
//    } else if ((a - b) < 0) {
//       console.log(`расстояние: ${(a - b) * -1} `);
//    }
// }
// else {
//    console.log(`Точка: ${c}`)
//    if ((a - c) > 0) {
//       console.log(`расстояние: ${a - c} `);
//    } else if ((a - c) < 0) {
//       console.log(`расстояние: ${(a - c) * -1} `);
//    }
// }
// End Task#4

// ********************

// Task #5
// let a = prompt('firstNum?', '');
// let b = prompt('secondNum?', '');
// let c = prompt('thirdNum?', '');
// if (Math.abs(a - b) < Math.abs(a - c)) {
//    console.log(`Точка ${b}: `)
//    if ((a - b) > 0) {
//       console.log(`расстояние: ${a - b} `);
//    } else if ((a - b) < 0) {
//       console.log(`расстояние: ${(a - b) * -1} `);
//    }
// }
// else {
//    console.log(`Точка: ${c}`)
//    if ((a - c) > 0) {
//       console.log(`расстояние: ${a - c} `);
//    } else if ((a - c) < 0) {
//       console.log(`расстояние: ${(a - c) * -1} `);
//    }
// }
// End Task#5

// ********************

// Task #6
// let x = prompt('firstNum?', '');
// let y = prompt('secondNum?', '');
// (x > 0 && y > 0) ? alert("Первая") :
//    (x < 0 && y > 0) ? alert("Вторая") :
//       (x < 0 && y < 0) ? alert("Третья") :
//          (x > 0 && y < 0) ? alert("Четвертая") :
//             alert('Неизвестно!')
// End Task#6

// ********************

// Task #7
// let x1 = prompt('x1?', '');
// let y1 = prompt('y1?', '');
// let x2 = prompt('x2?', '');
// let y2 = prompt('y2?', '');
// let x3 = prompt('x3?', '');
// let y3 = prompt('y3?', '');
// if (x1 == x2) {
//    x4 = x3;
// } else if (x1 == x3) {
//    x4 = x2;
// } else {
//    x4 = x1;
// }

// if (y1 == y2) {
//    y4 = y3;
// } else if (y1 == y3) {
//    y4 = y2;
// } else {
//    y4 = y1;
// }

// alert(`x4 = ${x4};`);
// alert(`y4 = ${y4};`);
// End Task#7

// ********************

// Task #8
// let year = prompt('Year?', '');
// if (year % 4 == 0 && year % 100 != 0 && year % 400 != 0) {
//    alert('Высококосный год')
// } else {
//    alert('Не высококосный год')
// }
// End Task#8

// ********************

// Task #9
// let num = +prompt('Number?', '');
// if (num == 0) {
//    console.log('Это ноль')
// } else if (num < 0 && num % 2 === 0) {
//    console.log("Отрицательное четное число.")
// } else if (num > 0 && num % 2 === 0) {
//    console.log("Положительное четное число.")
// } else if (num < 0 && num % 2 != 0) {
//    console.log("Отрицательное нечетное число.")
// } else if (num > 0 && num % 2 != 0) {
//    console.log("Положительное нечетное число.")
// }
// End Task#9

// ********************

// Task #10
// let num = +prompt('Number?', '');
// if (num % 2 == 0) {
//    if (num < 9 && num != 0) {
//       alert('Четное однозначное число')
//    } else if (num > 9 && num <= 99 && num != 0) {
//       alert('Четное двухзначное число')
//    } else if (num > 99 && num <= 999 && num != 0) {
//       alert('Четное трехзначное число')
//    }
// } else {
//    if (num < 9 && num != 0) {
//       alert('Нечетное однозначное число')
//    } else if (num > 9 && num <= 99 && num != 0) {
//       alert('Нечетное двухзначное число')
//    } else if (num > 99 && num <= 999 && num != 0) {
//       alert('Нечетное трехзначное число')
//    }
// }
// End Task#10

// ********************

// Task #11
// let i = 0;
// while (++i < 5) alert(i); // 4
// while (i++ < 5) alert(i); // 5
// End Task#11

// ********************

// Task #12
// for (let i = 0; i < 5; i++) alert(i); // 4
// for (let i = 0; i < 5; ++i) alert(i); // 4
// End Task#12

// ********************

// Task #13
// for (let i = 2; i <= 10; i++) {
//    if (i % 2 == 0) {
//       alert(i)
//    }
// }
// End Task#13

// ********************

// Task #14
// let i = 0;
// while (i < 3) {
//    i++
//    if (i % 2 == 0) {
//       alert(`number ${i} !`);
//    }
// }
// End Task#14

// ********************

// Task #15
// let a = +prompt('Введите число, большее 100', '');
// while (true) {
//    if (a === null || a > 100) {
//       if (a === null) {
//          alert('Отменено пользователем')
//          break;
//       }
//       alert(a)
//       break;
//    } else if (a < 100) {
//       a = +prompt('Введите еще раз число');
//    }
// };
// End Task#15

// ********************

// Task #16
// let n = prompt('Число: ', '')

// next:
// for (let i = 2; i <= n; i++) {
//    for (let j = 2; j < i; j++) {
//       console.log(j, i)
//       if (i % j == 0) continue next;
//    }
//    alert(i);
// }
// End Task#16

// ********************

// Task #17
// let a = +prompt('Number a: ', '');
// let b = +prompt('Number b: ', '');
// let result;
// result = (a + b) / 2;
// alert(result)
// End Task#17

// ********************

// Task #18
// let num = +prompt('Number a: ', '');
// let result = Math.pow(num, 2);
// alert(result)
// End Task#18

// ********************

// Task #19
// let numFirst = +prompt('Number First: ', '');
// let numSecond = +prompt('Number Second: ', '');
// let numThird = +prompt('Number Third: ', '');
// let max = Math.max(numFirst, numSecond, numThird);
// let min = Math.min(numFirst, numSecond, numThird);
// let result = max - min;
// alert(result)
// End Task#19

// ********************

// Task #20
// let num = +prompt('Number: ', '');
// if (num % 2 != 0) {
//    alert('Нечетное')
// }
// else {
//    alert('Четное')
// }
// End Task#20

// ********************

// Task #21

// let num = +prompt('Number: ', '');
// let count = num < 10 ? 1 : 2;
// let sum = num < 10 ?
//    (alert(`Количество чисел: ${count}. Сумма: ${num % 10}`)) :
//    (alert(`Количество чисел: ${count}. Сумма: ${num % 10 + num % 10}`));

// End Task#21

// ********************

// Task #22
// const duim = 2.54;
// let a;
// alert(`Давайте выберем конвертер:
//    Цифра "1" - это конвертер из сантиметров в дюймы;
//    Цифра "2" - это конвертер из дюймов в сантиметры;
// `)
// let b = +prompt('Выбрать конвертер: ', "");

// if (b === 1) {
//    a = prompt('Введите число: ')
//    alert(`${a} см = ${a / duim}`);
// } else {
//    a = prompt('Введите число: ')
//    alert(`${a} дюйм = ${a * duim}`);
// }
// End Task#22

// ********************

// Task #23
// alert(`Пссс... 
// Эй, паря, думал когда-нибудь заработать
// за пару щелчков по мыше несколько лямов?
// Сегодня есть такая возможность! Давай начнем!`);

// let p;
// let star = 0;
// p = prompt(`На монетке "реверс" - это ...?
// a) Решка
// b) Орел`,
//    "")
// switch (p) {
//    case 'a':
//       star++;
//       alert('Да ты невероятно крут! Лови одну звезду в карман! Еще два вопроса...');
//       break;
//    case 'b':
//       alert('Не, ну я такого не ожидал...');
//       break;
// }
// alert('Вопрос второй! Внимание!')
// p = prompt(`Первая экранизация мультика "Ну погоди!" была осуществлена в ...
// a) 1234
// b) 1998
// c) 1969`, '');
// switch (p) {
//    case 'a':
//       alert('Ты действительно так думаешь .-.');
//       break;
//    case 'b':
//       alert('Не, ну я такого не ожидал...');
//       break;
//    case 'c':
//       star++;
//       alert('Да ты невероятно крут! Лови одну звезду в карман! Еще один вопрос...');
//       break;
// }
// alert(`На данном этапе у тебя звёзд: ${star} !
// Задаю последний вопрос!`)
// p = prompt(`У собаки сколько ног?
// a) 2
// b) 4
// c) 10
// d) Ни сколько`, '');
// switch (p) {
//    case 'a':
//       alert('Ты действительно так думаешь? .-.');
//       break;
//    case 'b':
//       alert('Уверен, что у собаки ноги?');
//       break;
//    case 'c':
//       alert('Не, ну я такого не ожидал...');
//       break;
//    case 'd':
//       star++;
//       alert('Да ты невероятно крут! Лови одну звезду в карман!...');
//       break;
//    default:
//       alert("Эх, может, в следующий раз повезет");
// }
// alert(`На данном этапе у тебя звезд:  ${star}`);
// if (star === 0) {
//    alert('Ты получаешь почетная звание "молодца" за участие :)')
// } else if (star === 1) {
//    alert('Не победитель, но победун - что тоже хорошо, между прочим С:')
// } else if (star === 2) {
//    alert('Поздравляю! Ты выиграл пол ляма за пару кликов!')
// } else if (star === 3) {
//    alert('Поздравляю! Ты выиграл лям за пару кликов!')
// }
// End Task#23

// ********************

// Task #24
// let num = prompt('Введите трехзначное число: ', ""),
//    num1 = num / 100,
//    num2 = num / 10 % 10,
//    num3 = num % 10;
// if (num % 2 == 0) {
//    alert(`Сумма цифр трехзначного числа: ${Math.floor(num1 + num2 + num3)} `)
// } else {
//    alert(`Произведение цифр трехзначного числа: ${Math.floor(num1 * num2 * num3)} `)
// }
// End Task#24

// ********************

// Task #24
// let num = +prompt('Введите трехзначное число: ', ""),
//    num1 = num / 100,
//    num2 = num / 10 % 10,
//    num3 = num % 10;
// if (num % 2 == 0) {
//    alert(`Сумма цифр трехзначного числа: ${Math.floor(num1 + num2 + num3)} `)
// } else {
//    alert(`Произведение цифр трехзначного числа: ${Math.floor(num1 * num2 * num3)} `)
// }
// End Task#24

// ********************

// Task #25
// let a = +prompt('a: ', "");
// let b = +prompt('b: ', "");
// let c = +prompt('c: ', "");

// if (a + b > c && a + c > b && b + c > a) {
//    alert('Треугольнику быть!')
// } else {
//    alert('Треугольнику не быть!')
// }
// End Task#25

// ********************

// Task #26
// let x = prompt('x = ', '');
// let y = prompt('y = ', '');
// let r = prompt('R = ', '');

// let hypotenuse = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

// if (hypotenuse > r) {
//    alert('Точка принадлежит кругу')
// } else {
//    alert('Точка не принадлежит кругу')
// }
// End Task#26

// ********************

// Task #27
// let user = {
//    name: 'John',
//    surname: 'Smith',
// };
// console.log(user)

// user.name = "Pete";

// console.log(user)

// delete user.name

// console.log(user)
// End Task#27

// ********************

// Task #28
// const user = {
//    name: 'John',
// };
// user.name = 'Pete'
// console.log(user)
// Ответ: Да.
// End Task#28

// ********************

// Task #29
// let salaries = {
//    John: 100,
//    Ann: 160,
//    Pete: 130,
// }
// let sum = 0;
// for (const key in salaries) {
//    sum += salaries[key];
// }
// console.log(sum)
// End Task#29

// ********************

// Task #30
// let i = 0;
// while (i != 10) {
//    i += 0.2;
// }
// Ответ: потому что i никогда не будет равно 10.
// End Task#30