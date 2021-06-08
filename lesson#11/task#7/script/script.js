const li = document.querySelectorAll('li');

for (let index = 0; index < li.length; index++) {
   const liElem = li[index];
   const countLiInside = liElem.querySelectorAll('li').length;
   if (!countLiInside) continue;
   liElem.firstChild.data += `[${countLiInside}]`;
}

