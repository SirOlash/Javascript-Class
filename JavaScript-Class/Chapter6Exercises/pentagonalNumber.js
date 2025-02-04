function pentagonalNumber() {
	var prompt = require('prompt-sync')();
	var number = prompt("Enter a number: ");

	for (let index = 1;index < 101; index++){
		let pentNumber = number + index * (3 * (number + index) - 1)/2
		console.log(pentNumber)
	}
}

pentagonalNumber()
