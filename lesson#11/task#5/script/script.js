const ol = document.querySelector('ol');

function clear(elem) {
   elem.innerHTML = null;
}
clear(ol)
//или
// const clear = (elem) => {
//    elem.querySelectorAll('li').forEach(e => e.remove());
// }
//или
// !(function clear(elem) {
//    elem.querySelectorAll('li').forEach(e => e.remove());
// })(ol)

