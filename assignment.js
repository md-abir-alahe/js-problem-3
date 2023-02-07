/***
 * Problem - 1
 * The mindGame() function takes a input from user. If the input value is a number and also positive number then it does it internal tasks and give the output.
 */
function mindGame(number) {
    if (typeof (number) == "number") {
        if (number >= 0) {
            const multipliedBy3 = number * 3;
            const add10 = multipliedBy3 + 10;
            const divideBy2 = add10 / 2;
            const subtract5 = divideBy2 - 5;
            const finalResult = subtract5;
            return finalResult;
        }
        return 'Please enter a positive number'
    }
    return 'Please enter a number';
}


/**
 * Problem - 2
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

/***
 * Problem - 3
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

/***
 * Problem - 4
 * The findingBadData function takes array as a input.This function will figure out how many bad data are inside.
 */
function findingBadData(ages){
    if(Array.isArray(ages)){
            let totalBadData = 0;
            for(let i = 0; i < ages.length; i++){
                const index = i;
                const element = ages[index];
                if(element<0){
                    totalBadData++;
                }               
            }
            return totalBadData;
    }
    return 'Please enter an array.';
}

/***
 * Problem - 5
 * The gemsToDiamond function takes 3 numbers as a input.This function will convert gems to diamonds.
 */
function gemsToDiamond(firstFriendsGems, secondFriendsGems, thirdFriendsGems){
    if(typeof(firstFriendsGems)=="number" && typeof(secondFriendsGems)=="number"&& typeof(thirdFriendsGems)=="number"){
        const firstFriendsDiamonds = firstFriendsGems*21;
        const secondFriendsDiamonds = secondFriendsGems*32;
        const thirdFriendsDiamonds = thirdFriendsGems*43;
        const totalDiamonds = firstFriendsDiamonds+secondFriendsDiamonds+thirdFriendsDiamonds;
        if(totalDiamonds>=(1000*2)){
             const remainDiamonds = totalDiamonds - 2000;
             return remainDiamonds;
        }
        return totalDiamonds;
        
    }
    return 'Please enter valid three number'
}

