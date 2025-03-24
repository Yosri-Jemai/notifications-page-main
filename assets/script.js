const readAll = document.querySelector('.notifications-read');
const unredNotifications = document.querySelectorAll('.unread');
const dots = document.querySelectorAll('.dot');
const count = document.querySelector('.count');

function updateCount() {
    const remainingUnread = document.querySelectorAll('.unread').length;
    count.innerText = remainingUnread;
}

readAll.addEventListener('click', () => {
    unredNotifications.forEach(notification => {
        notification.classList.remove('unread');
    });
    dots.forEach(dot => {
        dot.classList.remove('dot');
    });
    updateCount();
});

unredNotifications.forEach(notification => {
    notification.addEventListener('click', () => {
        notification.classList.remove('unread');
        const dot = notification.querySelector('.dot');
        dot.classList.remove('dot');
        updateCount(); 
    });
});