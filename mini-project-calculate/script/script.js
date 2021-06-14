document.addEventListener('DOMContentLoaded', function () {
   const input = document.querySelector('.calculate-input');// непосредственно инпут
   const mainOperation = document.querySelectorAll('[data-type="btn-main"]');
   const mainBtnReset = document.querySelector('#reset');
   const mainBtnBack = document.querySelector('#backspace');
   const mainBtnTotal = document.querySelector('#total');
   const mainBtnPersent = document.querySelector('#persent');
   // Functions
   const persent = () => {
      input.textContent = eval(input.textContent) / 100;
   }
   const backspace = () => {
      // преобразуем значение инпута в массив с помощью оператора Spread(можно и просто через split(''))
      const mass = [...input.textContent];
      // далее удаляем один элемент с конца с помощью метода splice
      mass.splice(-1, 1);
      // в значение инпута присваиваем массив, преобразованный в строку с помощью метода join('')
      input.textContent = mass.join('');
      if (input.textContent == 0) {
         input.textContent = '0';
      }
   }
   const valid = (symbol) => {
      const symbols = symbol + symbol;
      if (input.textContent == (symbol)) {
         return true
      }
      if (input.textContent == (symbols)) {
         return true
      }
      if (input.textContent.includes(symbols)) {
         return true
      }
   }
   const insert = (num) => {
      if (input.textContent == '+' || valid('+')) {
         input.innerHTML = '0';
      } else if (input.textContent == '-' || valid('-')) {
         input.innerHTML = '0';
      } else if (input.textContent == '*' || valid('*')) {
         input.innerHTML = '0';
      } else if (input.textContent == '/' || valid('/')) {
         input.innerHTML = '0';
      } else if (input.textContent == ',' || valid(',')) {
         input.innerHTML = '0';
      } else if (input.textContent == 0) {
         input.innerHTML = '';
         input.textContent += num.toLocaleString();
      } else {
         input.textContent = input.textContent + num.toLocaleString(); // его значение будет равно аргументу, переданному в функцию
      }
   }
   const reset = () => {
      input.textContent = '0'; // просто обнуляем значение инпута
   }
   const total = () => {
      let inputContent = input.textContent;
      if (inputContent) {
         input.textContent = eval(inputContent);
      }
   }
   // Events
   mainOperation.forEach(btn => btn.addEventListener('click', () => insert(btn.textContent))) // передаем содержимое каждой кнопки в функцию insert
   mainBtnTotal.addEventListener('click', total);
   mainBtnBack.addEventListener('click', backspace);
   mainBtnReset.addEventListener('click', reset);
   mainBtnPersent.addEventListener('click', persent);
});



