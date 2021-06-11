const pane = document.querySelectorAll('.pane');
pane.forEach(pane => {
   const closeBtn = document.createElement('button');
   closeBtn.classList.add('remove-button');
   closeBtn.innerHTML = '[X]';
   pane.append(closeBtn);
})


// код к моим стилям
// const accorItem = document.querySelectorAll('.accordion__item');
// accorItem.forEach(accor => {
//    const btnClose = document.createElement('div');
//    btnClose.innerHTML = '[X]';
//    // Или btnClose.innerHTML = '&#x2715';
//    btnClose.classList.add('accordion__btn-close');
//    accor.append(btnClose);
// })