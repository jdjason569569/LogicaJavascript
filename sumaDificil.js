let numberString = '4   5 -1';

function main(){
    sumArray(convertArray());
}

const convertArray = () =>{
   let array = numberString.split(' ').filter(element => element !== '');
   return array;
}

const sumArray = (array) =>{
    console.log(array);
    let y = 0;
    array.forEach(x => y += parseInt(x));
    console.log(y);
}

main();