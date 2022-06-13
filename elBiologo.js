let adn1 = 'abcdfgr';
let adn2 =  'abcdfg';
let arrayAdn1 = [];
let arrayAdn2 = [];
let findElements = [];
let matrisElements = [];
const main = () =>{
    convertArray();
    coincidencias();

}

const convertArray = () =>{
    arrayAdn1 = adn1.split('').filter(element => element !== '');
    arrayAdn2 = adn2.split('').filter(element => element !== '');
 }

 const coincidencias = () =>{
     let varConcat = '';
     let arrayContains = [];
     let x=0;
    while(x < arrayAdn1.length){
        varConcat = '';
        for (let i = x; i < arrayAdn1.length; i++) {
            if(varConcat === ''){
                varConcat = arrayAdn1[i];
            }
            //console.log('--------varConcat --------> ',varConcat);
            if(adn2.includes(varConcat)){
                //console.log('if');
                if(!arrayContains.includes(varConcat)){
                    arrayContains.push(varConcat);
                }
            }
            varConcat = varConcat +  arrayAdn1[i+1];
         }
         x++;
        }
         //console.log(arrayContains);
         let result = arrayContains.sort((a,b) => {
             return (b.length - a.length);
         })
         console.log(result[0]);
        
 }


main();