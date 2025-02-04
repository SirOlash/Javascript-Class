function integerReversed() {
    let prompt = require('prompt-sync')();
    let number = prompt("Enter a number: ");

    let reversed = 0;
    while (number > 0){
        lastNumber = number % 10;
        reversed = (reversed * 10) + lastNumber;
        number = Math.floor(number / 10);

    }
    console.log(reversed);
}
integerReversed()