<<<<<<< HEAD
const field = document.querySelector('#field');

const move = (elem, coordinates) => {
   if (coordinates.y < 0) coordinates.y = 0;
   if (coordinates.x < 0) coordinates.x = 0;

   if (coordinates.x + ball.clientWidth > field.clientWidth) {
      coordinates.x = field.clientWidth - ball.clientWidth;
   }
   if (coordinates.y + ball.clientHeight > field.clientHeight) {
      coordinates.y = field.clientHeight - ball.clientHeight;
   }
   elem.style.transition = '.3s';
   elem.style.position = 'absolute';
   elem.style.top = coordinates.y + 'px';
   elem.style.left = coordinates.x + 'px';
}

field.addEventListener('click', (e) => {
   const currentElem = e.currentTarget;
   const boundingElem = currentElem.getBoundingClientRect();
   currentElem.style.position = 'relative';
   const ball = document.querySelector('#ball');

   const coordinates = {
      x: e.clientX - boundingElem.left - currentElem.clientLeft - ball.offsetWidth / 2, // clientLeft - минус ширина границы
      y: e.clientY - boundingElem.top - currentElem.clientTop - ball.offsetHeight / 2,
   }
   move(ball, coordinates)
=======
const field = document.querySelector('#field');

const move = (elem, coordinates) => {
   if (coordinates.y < 0) coordinates.y = 0;
   if (coordinates.x < 0) coordinates.x = 0;

   if (coordinates.x + ball.clientWidth > field.clientWidth) {
      coordinates.x = field.clientWidth - ball.clientWidth;
   }
   if (coordinates.y + ball.clientHeight > field.clientHeight) {
      coordinates.y = field.clientHeight - ball.clientHeight;
   }
   elem.style.transition = '.3s';
   elem.style.position = 'absolute';
   elem.style.top = coordinates.y + 'px';
   elem.style.left = coordinates.x + 'px';
}

field.addEventListener('click', (e) => {
   const currentElem = e.currentTarget;
   const boundingElem = currentElem.getBoundingClientRect();
   currentElem.style.position = 'relative';
   const ball = document.querySelector('#ball');

   const coordinates = {
      x: e.clientX - boundingElem.left - currentElem.clientLeft - ball.offsetWidth / 2, // clientLeft - минус ширина границы
      y: e.clientY - boundingElem.top - currentElem.clientTop - ball.offsetHeight / 2,
   }
   move(ball, coordinates)
>>>>>>> 0a71f2062c52246043e2f3a2ff18e1d3a1f25911
})