// const one = document.getElementById('1');
// const two = document.getElementById('2');
const three2: HTMLElement = document.getElementById('3')!;

// console.log('holitas')

// variables
const numero1: Number = 10
let nombre: String = "Jose Ignacio"
let array_numeros: Number[] = [2, 3, 4, 567, 345, 23]

let _Objeto: {
    nombres: string,
    experiencia: number
};

nombre = "Juan Perez"
_Objeto = {
    nombres: "Juan Perez",
    experiencia: 9000
}

//----------------------------------------------
const plus2: HTMLElement = document.getElementById('+')!;

plus2.addEventListener('click', (): void => {
    // si el input no esta vacio
    // guardamos el valor en num1

    if (num1 === null && buttonAddStatus === false) {
        buttonAddStatus = true;
        // num1 = parseFloat(display.value);
        // display.value = ''
        // añaadimos el historial
        // history.innerHTML = num1 + '+';
    } else {
        // num2 = parseFloat(display.value);
        // display.value = SUMAR(num1, num2);
        // num1 = parseFloat(display.value);
        result = true;
        // añaadimos el historial
        // preguntamos si existe un caracter +, al ultimo caracter
        // history.innerHTML += history.innerHTML.charAt(history.innerHTML.length - 1) === '+' ? num2 : '+' + num2;
    }
});

//----------------------------------------------

// funciones para las operaciones
// sumar
function _SUMAR(num1: number, num2: number): number {
    console.log(num1, num2)
    return num1 + num2
}
function _RESTAR(num1: number, num2: number): number {
    return num1 - num2
}
function _MULTIPLICAR(num1: number, num2: number): number {
    return num1 * num2
}
function _DIVIDIR(num1: number, num2: number): number {
    console.log(num1, num2);
    return num1 / num2
}

///----------------------------------------------

interface MiTipoDeDato {
    nombres: string,
    experiencia: number
}

let _New2: MiTipoDeDato[] = [
    {
        nombres: "Alberto N",
        experiencia: 8000
    },
    {
        nombres: "Alberto N2",
        experiencia: 555
    },
]

////----------------------------------------------

// let QR: any; // simulando una libreria
// let cuartos: string[] = [
//     'https://www.mihotel.com/cuarto/1',
//     'https://www.mihotel.com/cuarto/2',
//     'https://www.mihotel.com/cuarto/3',
//     'https://www.mihotel.com/cuarto/4',
// ]

// let imagenes_qr: any[] = []
// // generamos qr
// for (let i = 0; i < cuartos.length; i++) {
//     let imagen_qr: any = QR.generate(cuartos[i])
//     imagenes_qr.push(imagen_qr)

//     // añadimos al html
//     let img: any = document.createElement('img')
//     img.src = imagen_qr as string
// }
// console.log(imagenes_qr)

// // generamos qr unico
// const urlNuevoCuarto: string = 'https://www.mihotel.com/cuarto/5'
// QR.generate(urlNuevoCuarto)