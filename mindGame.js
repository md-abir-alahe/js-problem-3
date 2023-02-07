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

const returnValue = mindGame(5);

console.log(returnValue);