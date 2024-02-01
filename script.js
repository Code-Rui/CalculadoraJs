//  hacer match cada elemento
const display = document.getElementById('display');

const AC = document.getElementById('ac');

const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');

const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');

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

four.addEventListener('click', () => {
    display.value += four.value;
});

five.addEventListener('click', () => {
    display.value += five.value;
});

six.addEventListener('click', () => {
    display.value += six.value;
});



AC.addEventListener('click', () => {
    display.value = '';
});