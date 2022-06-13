let word = 'all your base';


const main = () =>{
    let array = convertArray();
    console.log(array.reverse());

}

const convertArray = () =>{
    let array = word.split(' ').filter(element => element !== '');
    return array;
 }



main();