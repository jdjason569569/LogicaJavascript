let matris1 = [[1,30,3],[1,2,30],[1,4,30],[1,2,31],[1,2,32],[1,2,39],[1,30,3]];
//let matris2 = [[1,2,3],[4,5,6], [6,7,8], [5,8,1]];
//let matris3 = [[1,2,3],[4,5,6], [6,7,8], [5,8,1]];

function main(){
    orderElements();
    verifyElements();
}

const orderElements = () =>{
    matris1.forEach((element)=>{
        element.sort((a,b) => a > b ? 1 : -1);
    });
    //console.log(matris1);
}

verifyElements = () => {
    let resultEvery = false;
    let count;
    let isRepeatedLists;
    let responsesRepeat = [];
    for(let i=0 ; i< matris1.length ; i++){
        for(let j=i+1 ; j< matris1.length ; j++){
            count = 0
            isRepeatedLists = false;
             resultEvery = matris1[i].every((element,p)=>{
                 if(element === matris1[j][p]){
                     count++;
                 }
                 return element === matris1[j][p];
            });
            if(matris1[i].length === count){
                isRepeatedLists = true;
             }
             responsesRepeat.push(isRepeatedLists);
        } 
    }
    let listBoolean = responsesRepeat.some(element => element == true) ;
    if(listBoolean){
        console.log('Tiene listas repetidas');
    }else{
        console.log('No tiene listas repetidas');
    }
}



main();





