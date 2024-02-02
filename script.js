//  hacer match cada elemento
const display = document.getElementById('display');

const history = document.getElementById('mini-historial');

const AC = document.getElementById('ac');
const DOT = document.getElementById('dot');
const DE = document.getElementById('de');

const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');

const Seven = document.getElementById('7');
const eigth = document.getElementById('8');
const Nine = document.getElementById('9');

const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');

// operations
const plus = document.getElementById('+');
const minus = document.getElementById('-');
const times = document.getElementById('*');
const divide = document.getElementById('/');

const equal = document.getElementById('=');

let num1 = null;
let num2 = null;
let result = false;

let buttonAddStatus = false; // suma
let buttonMinusStatus = false; // resta
let buttonTimesStatus = false; // multiplicacion
let buttonDivideStatus = false; // division


let buttonEqualStatus = false;

//events operations
// SUMAR
plus.addEventListener('click', () => {
    // si el input no esta vacio
    // guardamos el valor en num1

    if (num1 === null && buttonAddStatus === false) {
        buttonAddStatus = true;
        num1 = parseFloat(display.value);
        display.value = ''
        // añaadimos el historial
        history.innerHTML = num1 + '+';
    } else {
        num2 = parseFloat(display.value);
        display.value = SUMAR(num1, num2);
        num1 = parseFloat(display.value);
        result = true;
        // añaadimos el historial
        // preguntamos si existe un caracter +, al ultimo caracter
        history.innerHTML += history.innerHTML.charAt(history.innerHTML.length - 1) === '+' ? num2 : '+' + num2;
    }
});
minus.addEventListener('click', () => {
    if (num1 === null && buttonMinusStatus === false) {
        buttonMinusStatus = true;
        num1 = parseFloat(display.value);
        display.value = ''
    }
});
times.addEventListener('click', () => {
    if (num1 === null && buttonTimesStatus === false) {
        buttonTimesStatus = true;
        num1 = parseFloat(display.value);
        display.value = ''
    }
});
divide.addEventListener('click', () => {
    if (num1 === null && buttonDivideStatus == false) {
        buttonDivideStatus = true;
        num1 = parseFloat(display.value);
        display.value = ''
       // añaadimos el historial
    history.innerHTML = num1 + '/';
    } else {
    num2 = parseFloat(display.value);
    display.value = DIVIDIR(num1, num2);
    num1 = parseFloat(display.value);
    result = true;
    // añaadimos el historial
    // preguntamos si existe un caracter +, al ultimo caracter
    history.innerHTML += history.innerHTML.charAt(history.innerHTML.length - 1) === '/' ? num2 : '/' + num2;
}

    
});

// igual
equal.addEventListener('click', () => {
    if (num1 !== null) {
        num2 = parseFloat(display.value);
    }
    if (buttonAddStatus === true) {
        display.value = SUMAR(num1, num2);
        clear();
    }
    buttonEqualStatus = true;
    if (buttonMinusStatus === true) {
        display.value = RESTAR(num1, num2);
        clear();
    }
    if (buttonTimesStatus == true) {
        display.value = MULTIPLICAR(num1, num2);
        clear();
    }
    if (buttonDivideStatus == true) {
        display.value = DIVIDIR(num1, num2);
        clear();
    }
});

const Cero = document.getElementById('0');
const DobleCero = document.getElementById('00');

// detectamos el evento click de cada elemento
one.addEventListener('click', () => {
    if (buttonEqualStatus) return;
    if (result) {
        display.value = '';
        result = false;
    }
    display.value += one.value;
});

two.addEventListener('click', () => {
    if (buttonEqualStatus) return;
    if (result) {
        display.value = '';
        result = false;
    }
    display.value += two.value;
});

three.addEventListener('click', () => {
    if (buttonEqualStatus) return;
    if (result) {
        display.value = '';
        result = false;
    }
    display.value += three.value;
});

four.addEventListener('click', () => {
    if (buttonEqualStatus) return;
    if (result) {
        display.value = '';
        result = false;
    }
    display.value += four.value;
});

five.addEventListener('click', () => {
    if (buttonEqualStatus) return;
    if (result) {
        display.value = '';
        result = false;
    }
    display.value += five.value;
});

six.addEventListener('click', () => {
    if (buttonEqualStatus) return;
    if (result) {
        display.value = '';
        result = false;
    }
    display.value += six.value;
});



AC.addEventListener('click', () => {
    display.value = '';
    clear();
});

DOT.addEventListener('click', () => {
    if (buttonEqualStatus) return;
    // si ya existe un punto no se puede agregar otro
    if (display.value.includes('.')) {
        return;
    }
    // si el input esta vacio no se puede agregar un punto
    if (display.value === '') {
        display.value = '0.';
        return;
    } else {
        display.value += DOT.value;
    }

});

DE.addEventListener('click', () => {
    if (buttonEqualStatus) return;
    const currentValue = display.value;
    display.value = currentValue.slice(0, -1);
});

Seven.addEventListener('click', () => {
    if (buttonEqualStatus) return;
    if (result) {
        display.value = '';
        result = false;
    }
    display.value += Seven.value;
});

eigth.addEventListener('click', () => {
    if (buttonEqualStatus) return;
    if (result) {
        display.value = '';
        result = false;
    }
    display.value += eigth.value;
});

Nine.addEventListener('click', () => {
    if (buttonEqualStatus) return;
    if (result) {
        display.value = '';
        result = false;
    }
    display.value += Nine.value;
});

Cero.addEventListener('click', () => {
    if (buttonEqualStatus) return;
    if (result) {
        display.value = '';
        result = false;
    }
    display.value += Cero.value;
});

DobleCero.addEventListener('click', () => {
    if (buttonEqualStatus) return;
    if (result) {
        display.value = '';
        result = false;
    }
    display.value += DobleCero.value;
});

// funciones para las operaciones
// sumar
function SUMAR(num1, num2) {
    console.log(num1, num2);
    return num1 + num2;
}
function RESTAR(num1, num2) {
    return num1 - num2;
}
function MULTIPLICAR(num1, num2) {
    return num1 * num2;
}
function DIVIDIR(num1, num2) {
    return num1 / num2;
}
// borramos las variables
function clear() {
    num1 = null;
    num2 = null;
    result = null;
    buttonAddStatus = false;
    buttonEqualStatus = false;
    buttonMinusStatus = false;
    buttonTimesStatus = false;
    buttonDivideStatus = false;
    history.innerHTML = '';
}