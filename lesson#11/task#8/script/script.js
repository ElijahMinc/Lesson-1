function createCalendar(elem, year, month) {
   const calendar = document.querySelector(elem);

   let monthPresent = month - 1;
   let date = new Date(year, monthPresent)
   // table
   let tableCalendar = `
   <table>
      <tr>
         <th>
            пн
         </th>
         <th>
            вт
         </th>
         <th>
            ср
         </th>
         <th>
            чт
         </th>
         <th>
            пт
         </th>
         <th>
            сб
         </th>
         <th>
            вс
         </th>
      </tr>
   `;

   for (let i = 0; i < day(date); i++) {
      tableCalendar += '<td></td>';
   }
   while (date.getMonth() == monthPresent) {
      tableCalendar += '<td>' + date.getDate() + '</td>';
      if (day(date) % 7 == 6) {
         tableCalendar += '</tr><tr>';
      }
      date.setDate(date.getDate() + 1);
   }
   //displayCalendar
   calendar.innerHTML = tableCalendar;

   // styles
   const table = calendar.querySelector('table');
   const td = calendar.querySelectorAll('td');
   td.forEach(td => td.style.border = '1px solid black');
   td.forEach(td => td.style.padding = '5px');
   table.style.borderCollapse = 'collapse';
}
//getDay
function day(date) {
   let day = date.getDay();
   if (day == 0) day = 7;
   return day - 1;
}
createCalendar('#calendar', 2012, 9);
