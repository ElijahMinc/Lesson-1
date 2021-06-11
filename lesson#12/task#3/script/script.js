<<<<<<< HEAD
const blockquote = document.querySelector('blockquote');

function positionAt(anchor, position, elem) {
   const boundingElem = anchor.getBoundingClientRect();
   if (position === 'top') {
      elem.style.top = boundingElem.top - elem.offsetHeight + 'px';
      elem.style.left = boundingElem.left + 'px';
   } else if (position === 'right') {
      elem.style.left = anchor.offsetWidth + boundingElem.left + "px";
      elem.style.top = boundingElem.top + "px";
   } else if (position === 'bottom') {
      elem.style.left = boundingElem.left + "px";
      elem.style.top = boundingElem.top + anchor.clientHeight + "px";
   }

}

function showNote(anchor, position, html) {
   let note = document.createElement('div');
   note.className = "note";
   note.innerHTML = html;
   document.body.prepend(note); // изменил на prepend, потому что append в данном случае вставляет код в конец бади,
   //  где находится подключение скрипта и поднимает его наверх, что не очень хорошо.
   positionAt(anchor, position, note);
}

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
=======
const blockquote = document.querySelector('blockquote');

function positionAt(anchor, position, elem) {
   const boundingElem = anchor.getBoundingClientRect();
   if (position === 'top') {
      elem.style.top = boundingElem.top - elem.offsetHeight + 'px';
      elem.style.left = boundingElem.left + 'px';
   } else if (position === 'right') {
      elem.style.left = anchor.offsetWidth + boundingElem.left + "px";
      elem.style.top = boundingElem.top + "px";
   } else if (position === 'bottom') {
      elem.style.left = boundingElem.left + "px";
      elem.style.top = boundingElem.top + anchor.clientHeight + "px";
   }

}

function showNote(anchor, position, html) {
   let note = document.createElement('div');
   note.className = "note";
   note.innerHTML = html;
   document.body.prepend(note); // изменил на prepend, потому что append в данном случае вставляет код в конец бади,
   //  где находится подключение скрипта и поднимает его наверх, что не очень хорошо.
   positionAt(anchor, position, note);
}

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
>>>>>>> 0a71f2062c52246043e2f3a2ff18e1d3a1f25911
showNote(blockquote, "bottom", "note below");