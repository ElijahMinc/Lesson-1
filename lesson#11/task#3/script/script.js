const table = document.querySelector('#age-table');
//или
// const table = document.getElementById('age-table');
// и так далее
console.log(table)
const label = table.querySelectorAll('label');
console.log(label)
const tdFirst = table.getElementsByTagName('td')[0];
console.log(tdFirst)
const searchForm = document.getElementsByName('search')[0];
console.log(searchForm)
const firstInput = searchForm.children[0].firstElementChild;
console.log(firstInput)
const lastInput = searchForm.children[1];
console.log(lastInput)