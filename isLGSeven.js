/***
 * The isLGSeven function takes a number as a input. Then it finds the difference between 7 and the given number and gives the output as per requirement.
 */
function isLGSeven(number){
    if(typeof(number) == 'number'){
        const difference = number - 7;
        if(difference < 7){
            return difference;
        }
        const doubleOfTheInput = number*2;
        return doubleOfTheInput;
    }
    return 'Please enter a number'  
}
console.log(isLGSeven(15));

