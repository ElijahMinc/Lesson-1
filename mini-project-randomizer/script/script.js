const btn = document.querySelector('#btn');
btn.addEventListener('click', generateRandom);


function generateRandom() {

   const quantity = document.querySelector('#quantity').value;
   const minRange = document.querySelector('#minRange').value;
   const maxRange = document.querySelector('#maxRange').value;
   const total = document.querySelector('#total');
   total.innerHTML = ''

   let result = [];

   const randomInteger = (min, max) => {
      let rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
   };

   const displayResult = (num) => {
      const li = document.createElement('li');
      li.classList.add('total__item');
      li.textContent = num;
      total.append(li);
   };

   for (let i = 0; i < quantity; i++) {
      console.log(minRange, maxRange)
      result.push(randomInteger(minRange, maxRange));
   };
   result.forEach(num => {
      displayResult(num);
   })
}