

let array = [1,2,3,4]
let k = 2

 function main ()
{
      let resp = isSub();
      console.log(resp);

}

const isSub = () =>{
    let map = new Map()
    for (let i = 0; i < array.length; i++) {
        if(map.get(array[i])){
            map.set(array[i], map.get(array[i])+1)
        }else{
            map.set(array[i],1);
        }
    }
    
    let a = true;
    let yesOrNot = false;
    do{
        let count = k;
        map = reorder(map)
        for (var [key, value] of map) {
            
            console.log('clave -> ',key + " = " + 'valor ->', value);
            if(value == 0  && count == k){
              a = true;
              break;
            }
            if(value == 0){
                a = false;
                break;
              }
           map.set(key, value - 1)

            count--;
            if(count === 0){
                break;
            }
          }
        if(count == 0 ){
            yesOrNot = true;
        }else{
            yesOrNot = false;
        }
    }while(a);

    return yesOrNot;

}

const reorder = (map) =>{
    let orderMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    return orderMap;
}


main();