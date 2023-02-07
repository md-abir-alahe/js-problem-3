/**
 * The evenOdd function checks the given string length is odd or even . 
 */
function evenOdd(givenString) {
    if (typeof (givenString) === 'string') {
        const givenStringLength = givenString.length;
        if (givenStringLength % 2 === 0) {
            return 'even';
        }
        return 'odd';
    }
    return 'Please enter a string';
}

const checkThisString = 'sda fasf';
const retunValue = evenOdd(checkThisString);
console.log(retunValue);