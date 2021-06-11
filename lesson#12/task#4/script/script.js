const btn = document.querySelector('#hider');
btn.addEventListener('click', () => {
   const text = document.querySelector('#text');
   text.style.transition = '0.3s';
   text.style.opacity = '0';
   text.style.visibility = 'hidden';
})