const ul = document.querySelector('#ul');
const secondLi = ul.lastElementChild;

secondLi.insertAdjacentHTML('beforebegin',
   `<li>
      2
   </li>
   <li> 
      3
   </li>` );