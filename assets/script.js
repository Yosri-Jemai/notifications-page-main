const readAll = document.querySelector('.notifications-read');
const unredNotifications = document.querySelectorAll('.unread');
const dots = document.querySelectorAll('.dot');
const count = document.querySelector('.count');

readAll.addEventListener('click', e => {
    unredNotifications.forEach(notification => {
        notification.classList.remove('unread');
    })
    dots.forEach(dot => {
        dot.classList.remove('dot');
    })
    count.innerText = "0";
})