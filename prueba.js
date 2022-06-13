


function iterationFunct(array, position) {
    let summary = 0;
    for (let i = position; i >= 1; i--) {
        const element = array[position];
        console.log(element);
        console.log('araay -> ',array[i-1]);
        if(array[i-1] > element ){
            summary -= Math.abs(element - array[i-1]);    
        }else{
            summary += Math.abs(element - array[i-1]);
        }
        
    }
    return summary;
}



    let arr = [1,2,2,3];
    let count = 0;
    let arrayTemp = [];
    for (let i = 0; i < arr.length; i++) {

        if(i === 0){
            arrayTemp.push(0)
        }
        else{
            arrayTemp.push(iterationFunct(arr, i));
        }
     }

    console.log(arrayTemp);

