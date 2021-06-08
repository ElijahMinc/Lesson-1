const ul = document.querySelector('ul');
const li = ul.querySelectorAll('li')

const contentLi = li.forEach(li => {
   console.info(`Контент li: ${li.innerText}`);
})
console.log(`Число потомков li: ${li.length}`);