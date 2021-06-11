const options = {
   top: 10,
   right: 10,
   html: "Hello!",
   className: "welcome"
}

function showNotification(options) {
   const body = document.body;
   const notification = document.createElement('div');
   notification.classList.add('notification');
   notification.classList.add(options.className);
   notification.style.cssText = 'position: absolute; color: red; background-color: yellow;';
   notification.style.right = options.right + 'px';
   notification.style.top = options.top + 'px';
   notification.textContent = options.html;
   body.prepend(notification);
   return notification;
}
const hiddenElem = showNotification(options);
setTimeout(() => { hiddenElem.remove() }, 1500)

