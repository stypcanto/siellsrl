// JavaScript para manejar el menú de hamburguesa
const hamburgerButton = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburgerButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});