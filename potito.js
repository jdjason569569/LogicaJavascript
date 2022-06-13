// Elimina elementos de una lista a otra


let mapPotitos = new Map();


function main() {
    buildMap();
    selectIngredients();
}

const buildMap = () => {
    mapPotitos.set('si', ['cereal', 'tomate', 'arroz']);
    mapPotitos.set('no', ['cereal', 'tomate', 'lentejas']);
}

const selectIngredients = () => {
    let arraySi = mapPotitos.get('si');
    //console.log(arraySi);
    let arrayNo = mapPotitos.get('no');
    //console.log(arrayNo);
    let arrayResult = [];
    arraySi.forEach(elementSi => {
        console.log(elementSi);
        arrayResult = arrayNo.filter(elementNo => elementNo !== elementSi);
        arrayNo = arrayResult;
    });
    console.log(arrayResult);
}


main();