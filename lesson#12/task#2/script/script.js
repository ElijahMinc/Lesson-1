document.onclick = function (e) {
   coords.innerHTML = e.clientX + ':' + e.clientY;
};

const field = document.querySelector('#field');
const corner = field.getBoundingClientRect();

const corners = {
   outerCorners: {
      leftTop: [corner.left, corner.top],
      rightBottom: [corner.right, corner.bottom],
   },
   innerCorners: {
      leftTop: [corner.left + field.clientLeft, // left
      corner.top + field.clientTop], // top 
      rightBottom: [corner.left + field.clientLeft + field.clientWidth, //left
      corner.top + field.clientTop + field.clientHeight],//top  
   }//clientLeft/clientTop дают ширину от левого края элемента в пикселях, исключая отступы
}
console.log(
   `1) ${corners.outerCorners.leftTop}`,
   `2) ${corners.outerCorners.rightBottom}`,
   `3)${corners.innerCorners.leftTop}`,
   `4)${corners.innerCorners.rightBottom}`
)