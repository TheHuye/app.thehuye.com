// JavaScript to toggle menu on click
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu img');
    const menuList = document.querySelector('.menu menu');

    menuIcon.addEventListener('click', function() {
        menuList.style.display = menuList.style.display === 'flex' ? 'none' : 'flex';
    });
});
