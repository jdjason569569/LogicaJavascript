// Se trata de implementar un programa que sume los dígitos de un número entero no negativo. Por ejemplo, la suma de
// los dígitos del 3433 es 13.
// Para darle un poco más de emoción, el programa no se limitará a escribir el resultado de la suma, 
// sino que también escribirá todos los sumandos utilizados: 3 + 4 + 3 + 3 = 13.
// Entrada La entrada consta de una serie de casos de prueba terminados con un número negativo. 
// Cada caso de prueba es una simple línea con un número no negativo no mayor que 109 del que habrá que sumar todos sus dígitos.
// Salida
// Para cada caso de prueba se mostrará una línea en la que aparecerán cada uno de los dígitos separados por el signo +, 
// tras lo cual aparecerá el símbolo = y la suma de todos los dígitos.
// Ten en cuenta que antes y después de cada símbolo (+ y =) hay un espacio.
// Nota: el programa no debe avisar al usuario con mensajes como "Introduzca un número". Debe leer directamente el 
// número que introduzca el usuario y la respuesta debe ser exactamente como aparece aquí explicado y como se puede comprobar
// en el ejemplo. 
//(Asegúrate de que has leído el resto de preguntas frecuentes antes de plantear tu solución)

let number = 3433;

if (number > 0) {
    let numberStr = String(number);
    let array = numberStr.split('');
    let y = 0;
    array.forEach(x => y += parseInt(x));
    console.log('Se van a sumar los numeros ->', array.join(' + '), ' = ', y);

    let a = array.reduce((acum, current) => parseInt(acum) + parseInt(current))
    console.log('Se van a sumar los numeros ->', array.join(' + '), ' = ', a);

} else {
    console.log('Ingrese un numero positivo');
}