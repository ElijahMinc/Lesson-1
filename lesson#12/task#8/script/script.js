<<<<<<< HEAD
const popapBtn = document.querySelector('#popap');


popapBtn.addEventListener('click', () => showPrompt('hello', valid));

// total
function totalMessage(value) {
   document.onkeydown = null;
   document.querySelector('#modal').classList.remove('_open');
   alert(`Введено: ${value}`);
}
// validate
function valid(value) {
   if (value == "") {
      totalMessage(null);
   } else {
      totalMessage(value);
   }
}
// prompt
function showPrompt(html, callback) {

   function displayModal(html) {
      const modalContent = `
      <form class="modal__body">
         <h2 class="modal__title">${html}</h2>
         <div class="modal__item">
            <input type="text" name="text" class="modal__input" id="modalInput">
         </div>
         <div class="modal-utils modal__item d-flex">
            <div class="modal-utils__item">
               <button class="modal-utils__btn" type="submit" id="modalSubmit">Подтвердить</button>
            </div>
            <div class="modal-utils__item">
               <button class="modal-utils__btn" type="text" id="modalClose">Отмена</button>
            </div>
         </div>
      </form>
      `;
      const modalPage = document.querySelector('#modal');
      modalPage.classList.add('_open');
      modalPage.innerHTML = modalContent;
   }
   //Display Modal
   displayModal(html);

   //Event Keyboard
   document.onkeydown = function (e) {
      if (e.key == 'Escape') {
         totalMessage(null);
      };
   };
   //Btns
   const formInput = document.querySelector('form');
   formInput.addEventListener('submit', () => {
      const input = formInput.elements[0];
      if (input.value == "") return false;
      callback(input.value);
      return false;
   });
   const btnCancel = document.querySelector('#modalClose');
   btnCancel.addEventListener('click', () => callback(null));
};
=======
const popapBtn = document.querySelector('#popap');


popapBtn.addEventListener('click', () => showPrompt('hello', valid));

// total
function totalMessage(value) {
   document.onkeydown = null;
   document.querySelector('#modal').classList.remove('_open');
   alert(`Введено: ${value}`);
}
// validate
function valid(value) {
   if (value == "") {
      totalMessage(null);
   } else {
      totalMessage(value);
   }
}
// prompt
function showPrompt(html, callback) {

   function displayModal(html) {
      const modalContent = `
      <form class="modal__body">
         <h2 class="modal__title">${html}</h2>
         <div class="modal__item">
            <input type="text" name="text" class="modal__input" id="modalInput">
         </div>
         <div class="modal-utils modal__item d-flex">
            <div class="modal-utils__item">
               <button class="modal-utils__btn" type="submit" id="modalSubmit">Подтвердить</button>
            </div>
            <div class="modal-utils__item">
               <button class="modal-utils__btn" type="text" id="modalClose">Отмена</button>
            </div>
         </div>
      </form>
      `;
      const modalPage = document.querySelector('#modal');
      modalPage.classList.add('_open');
      modalPage.innerHTML = modalContent;
   }
   //Display Modal
   displayModal(html);

   //Event Keyboard
   document.onkeydown = function (e) {
      if (e.key == 'Escape') {
         totalMessage(null);
      };
   };
   //Btns
   const formInput = document.querySelector('form');
   formInput.addEventListener('submit', () => {
      const input = formInput.elements[0];
      if (input.value == "") return false;
      callback(input.value);
      return false;
   });
   const btnCancel = document.querySelector('#modalClose');
   btnCancel.addEventListener('click', () => callback(null));
};
>>>>>>> 0a71f2062c52246043e2f3a2ff18e1d3a1f25911
