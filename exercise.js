//Factore primos
let listPrimos = [];
let listFactoresPrimos = [];
let casosPrueba = 4;
let numeros = [24, 59, 896, 566];

function main() {
    if (numeros.length === casosPrueba) {
        primos();
        for (let numero of numeros) {
            clearVars()
            factoresPrimos(numero);
            console.log(`factores primos para ${numero} -> `, listFactoresPrimos);
        }
    } else {
        console.log('El numero de casos de prueba no corresponde');
    }

}

const clearVars = () => {
    listFactoresPrimos = [];
}

const primos = () => {
    let primo = false;
    for (let i = 2; i < 10000; i++) {
        primo = esPrimo(i);
        if (primo) {
            listPrimos.push(i);
        }
    }
}

const esPrimo = (numero) => {
    for (let x = 2; x < numero / 2; x++) {
        if (numero % x == 0) return false;
    }
    return true;
}

const factoresPrimos = (numero) => {
    for (const primo of listPrimos) {
        while (numero % primo === 0) {
            listFactoresPrimos.push(primo);
            numero /= primo;
        }
    }
}

main();