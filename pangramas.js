// Seguro que has visto textos como "The quick brown fox jumps over the lazy dog" o "El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja" . Son "pangramas", textos que contienen todas las letras de un cierto alfabeto, quizá repetidas.
// Deberás crear un programa que reciba varias frases y que diga si cada una de ellas es un pangrama o no. Sólo deberás considerar las letras del alfabeto inglés (no te preocupes por las vocales acentuadas ni la eñe, entre otras), que podrán aparecer en mayúsculas o en minúsculas.
// La primera línea contendrá el número de frases y después aparecerá una nueva frase en cada línea. Para cada frase deberás responder SI cuando se trate de un pangrama o NO cuando no lo sea.

let pharse = 'Quiere la boca exhausta vid, kiwi, piña y fugaz jamón';
let dictionary = 'abcdefGHIJKLMNopqrstuvwxyz';
let arrayDict = [];

function main() {
    arrayDictionary();
    findLetters();
}

const arrayDictionary = () => {
    arrayDict = dictionary.split('');
}

const findLetters = () => {
    let isContain = true;
    arrayDict.forEach(element => {
        if (!pharse.toLowerCase().includes(element.toLowerCase())) {
            isContain = false;
        }
    });
    if (!isContain) {
        console.log('No es un pangrama');
    } else {
        console.log('Es un pangrama');
    }
}

main();