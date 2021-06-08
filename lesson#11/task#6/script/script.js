const ul = document.createElement('ul');
document.body.prepend(ul);
const li = document.createElement('li');

for (let index = 0; ; index++) {
   const liContent = prompt('Введите контент для li', '');
   if (liContent === null) break;
   li.textContent = liContent;
   ul.append(li);
}
