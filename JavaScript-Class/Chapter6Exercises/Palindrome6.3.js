function isPalindrome() {
    let prompt = require('prompt-sync')();
    let number = prompt("Enter a number: ");

    while (number > 0){
        lastNumber = number % 10;
        firstNumber = Math.floor(number/ 100);
        if (firstNumber === lastNumber){
            return true
        }
        return false;
        //console.log(sum);
    }
}
console.log(isPalindrome());