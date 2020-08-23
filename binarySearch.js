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
        return middleOddTerm[0];
    } 
    // Will always return the first index
    const middleEvenTerm = array.slice(Number.parseInt(array.length/2-1), Number.parseInt(array.length/2-1)+1);
    return middleEvenTerm[0];    
}

function getHalfOfArray(array, side ) {
    return array.slice(0, 2)
}

function binarySearch(array, sortedNumber) {
    let steps = 1;
    let analyzedArray = [...array];
    let numberInTheMiddle = getMiddleNumberFromArray(analyzedArray);
    console.log('Original Array: ', array);
    console.log('SortedNumber: ', sortedNumber);
    
    while (sortedNumber !== numberInTheMiddle) {
        steps++;        
        if (sortedNumber > numberInTheMiddle) {
            analyzedArray = array.slice(array.indexOf(numberInTheMiddle)+1,); 
        } else {
            analyzedArray = array.slice(0, array.indexOf(numberInTheMiddle));
        }
        numberInTheMiddle = getMiddleNumberFromArray(analyzedArray);
    }
    console.log(`Found with ${steps} steps.`);
}
const arrayGe = arrayGeneratorOfIntegersSorted(2);
const sortedNumberWithinTheArray = sortOneOfTheArrayNumbers(arrayGe)
binarySearch(arrayGe, sortedNumberWithinTheArray);
