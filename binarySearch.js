function arrayGeneratorOfIntegersSorted(length) {
    const array = [];
    for (let x = 0; x < length; x++) {
        array.push(Number.parseInt(Math.random()*100))
    }
    return array.sort(function(a, b){return a - b});
}

function sortOneOfTheArrayNumbers(array) {
    const chosenIndex = Number.parseInt(Math.random()*array.length);
    return array[chosenIndex];
}

function isEven(array){
    if (array.length % 2 === 0) {
        return true;
    }
    return false;
}

function getMiddleNumberFromArray(array) {
    if (!isEven(array)) {
        const middleOddTerm = array.slice(Number.parseInt(array.length/2), Number.parseInt(array.length/2)+1);
        return middleOddTerm;
    } 
    // Will always return an array with the two numbers
    const middleEvenTerm = [...array.slice(Number.parseInt(array.length/2-1), Number.parseInt(array.length/2)+1)];
    return middleEvenTerm;    
}

const arrayGe = arrayGeneratorOfIntegersSorted(10);
console.log(arrayGe);
const sortedNumberWithinTheArray = sortOneOfTheArrayNumbers(arrayGe)
console.log('Número sorteado: ', sortedNumberWithinTheArray);
console.log('Retornado pelo selector: ', getMiddleNumberFromArray(arrayGe))
