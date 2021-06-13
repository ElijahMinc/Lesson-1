const popapBtn = document.querySelector('#popap');
popapBtn.addEventListener('click', (e) => showPrompt(e, 'hello', valid));

// total
function totalMessage(value) {
   document.onkeydown = null;
   document.querySelector('#modal').classList.remove('_open');
   alert(`Введено: ${value}`);
   return;
}
// validate
function valid(value) {
   if (value === "" || value === null) {
      totalMessage(null);
   } else {
      totalMessage(value);
   }
}
// prompt
function showPrompt(e, html, callback) {
   e.preventDefault();
   const target = e.target.getAttribute('href').slice(1);

   function showModal(modal, html) {
      const modalPage = document.getElementById(target);
      const modalTitle = modalPage.querySelector('.modal__title');
      const input = modalPage.querySelector('input');
      modal.classList.add('_open');
      modalTitle.textContent = html;
      input.focus();
   }
   const formInput = document.querySelector('form');
   formInput.onsubmit = (e) => {
      e.preventDefault();
      const input = formInput.elements[0];
      if (input.value == "" || input.value === null) {
         return false;
      } else {
         callback(input.value);
      }
   };
   const btnCancel = document.querySelector('#modalClose');
   btnCancel.onclick = () => callback(null);
   //Event Keyboard
   document.onkeydown = function (e) {
      if (e.key == 'Escape') {
         totalMessage(null);
      };
   };

   showModal(modal, html)
};