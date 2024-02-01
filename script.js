//  hacer match cada elemento
const display = document.getElementById('display');

const AC = document.getElementById('ac');

const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');

// detectamos el evento click de cada elemento
one.addEventListener('click', () => {
    display.value += one.value;
});

two.addEventListener('click', () => {
    display.value += two.value;
});

three.addEventListener('click', () => {
    display.value += three.value;
});

AC.addEventListener('click', () => {
    display.value = '';
});