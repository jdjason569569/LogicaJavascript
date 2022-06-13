let cadena = 'pppcmpcmbbzz';



let c = cadena.split('').sort();
let map = new Map()
map.set('b', 0);
map.set('c', 0);
map.set('m', 0);
map.set('p', 0);
map.set('z', 0);


for (let i = 0; i < c.length; i++) {
    const element = c[i];
    map.set(element, map.get(element) + 1)
}

const arrayValues = Array.from(map.values()).sort()[0];


console.log(arrayValues);