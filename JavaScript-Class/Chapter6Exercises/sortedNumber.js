function sortedNumber(){
    let prompt = require('prompt-sync')();

    let numberList = []
    let  firstNumber= prompt("Enter a number: ");
    let secondNumber = prompt("Enter a number: ");
    let thirdNumber = prompt("Enter a number: ");

    numberList.push(firstNumber)
    numberList.push(secondNumber)
    numberList.push(thirdNumber)

    numberList.sort((a,b) => a - b);
    console.log(numberList);

}
sortedNumber()