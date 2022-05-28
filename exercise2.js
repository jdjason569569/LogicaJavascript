//MINIMO COMUN MULTIPLO

let num1 = 2
let num2 = 5
let num3 = 8

let b = [];
let a = [];
let c = [];
let resultB = [] || 0;
let resultC = [] || 0;
let resultFinal = [] || 0;
let final = [];
let lap = 1;
let acumTop = 10;


function main() {
    fillArrays(acumTop);
    findElements();
    concatElements();
    while (final.length == 0) {
        acumTop *= 10;
        console.log(`vuelta ${lap} de ${acumTop} multiplos`);
        lap += 1;
        fillArrays(acumTop);
        findElements();
        concatElements();
    }
    console.log('El minimo comun multiplo es -> ', findYoungest());
}

/**
 * concatena los arrays resultantes de la busqueda
 */
const concatElements = () => {
    final = resultFinal.flat();
}

/**
 * 
 * @returns PErmite encontrar el elemento menor
 */
const findYoungest = () => {
    return Math.min(...final);
}


/**
 * Permite llenar los multiplos de los tres numeros iniciales. a partir de 10 multiplos.
 * @param {} top 
 */
const fillArrays = (top) => {
    cleanArays();
    for (let i = 1; i <= top; i++) {
        a.push(num1 * i);
        b.push(num2 * i);
        c.push(num3 * i);
    }
}

function cleanArays() {
    a = [];
    b = [];
    c = [];
}

/**
 * Permite encontrar los elementos comunes en los 3 array mu multiplos
 */
const findElements = () => {
    resultB = [];
    resultC = [];
    resultFinal = [];
    const lengthA = a.length;
    for (let i = 0; i < lengthA; i++) {
        resultB = b.find(element => element == a[i]);
        if (typeof resultB !== 'undefined') {
            resultC = c.find(element => element == a[i]);
            if (typeof resultC !== 'undefined') {
                resultFinal.push(resultC)
            }
        }
    }
}

main();