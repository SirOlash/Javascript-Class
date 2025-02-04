function sumOfDigit() {
    let prompt = require('prompt-sync')();
    let number = prompt("Enter a number: ");
    let sum = 0;
    let lastNumber
    while (number > 0){
        lastNumber = number % 10;
        sum += lastNumber;
        number = Math.floor(number / 10);
        //console.log(sum);
    }
    console.log(sum);
}
sumOfDigit();