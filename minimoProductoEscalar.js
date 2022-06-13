
function convertToIntegers(strings) {
  
  return strings.map( value => parseInt(value));
}


const l = convertToIntegers(["1", "2", "3"]);

console.log(l);