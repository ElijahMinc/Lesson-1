const table = document.querySelector('table');
const td = table.querySelectorAll('td');
table.style.borderCollapse = 'collapse';
td.forEach(td => td.style.border = '1px solid black');

// let index = 0;
// while (index < table.rows.length) {
//    const row = table.rows[index];
//    console.log(row.cells);
//    row.cells[index].style.backgroundColor = 'red';
//    index++
// }
// красивей будет даже циклом for
for (let index = 0; index < table.rows.length; index++) {
   const row = table.rows[index];
   console.log(row.cells);
   row.cells[index].style.backgroundColor = 'red';
}