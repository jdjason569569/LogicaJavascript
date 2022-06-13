let seconds = 20;

function main() {
   
    const sumElement = forBySeconds(seconds,30,24);
    console.log(sumElement);
}

const forBySeconds = (seconds, limitAcum1, limitAcum2)=>{
    let element = 0;
    for (let index = 0; index <= seconds; index++) {
        switch(index.toString().length){
            case 1:
                //console.log('caso 1 Segundo : ',index);
                element = element + equivalenceSeconds(index) + limitAcum1
                //console.log(element);
                break;
            case 2:
                //console.log('caso 2 Segundo : ',index);
                element = element + equivalenceSeconds(index) + limitAcum2
                //console.log(element);
                break;
        }
    }
    return element;
}


const equivalenceSeconds = (value) => {
    let acum = 0;
    let digitos = value.toString().length;

    if (digitos === 1) {
        acum = methodSwitch(value);
    } else {
        let arrayNumbers = value.toString().split('');
        //console.log(arrayNumbers);
        for (let i = 0; i < 2; i++) {
            //console.log(arrayNumbers[i]);
            acum += methodSwitch(Number(arrayNumbers[i]));
            //console.log('Acum ->', acum);
        }
    }
    return acum;
}

const methodSwitch = (value) => {

    let sum = 0;
    switch (value) {
        case 0:
            sum = 6;
            break;
        case 1:
            sum = 2;
            break;
        case 2:
        case 3:
        case 5:
        case 9:
            sum = 5;
            break;
        case 4:
            sum = 4;
            break;
        case 6:
            sum = 6;
            break;
        case 7:
            sum = 3;
            break;
        case 8:
            sum = 7;
            break;
    }
    return sum
}

main();