function addTwoNumbers(firstNumber,secondNumber){
	let answer = firstNumber + secondNumber;
	return answer;
}

function multiply(numberOne, numberTwo) {
	return numberOne * numberTwo;
}
function dividetwonumbers (numberTwo, numberOne){
	return numberTwo / numberOne;
}

//const getOddNumbers = (arr)=>{
//	let newArray = [];
//	for (element of arr){
//		if(element % 2 != 0){
//			newArray.push(element);
//		}
//	}
//	return newArray;
//}

const getOddNumbers = (arr)=>{
	count = 0
	let newArray = [];
	for (index in arr){
		console.log(index)
		if(arr[index] % 2 != 0){
			newArray[count++] = arr[index]
			
		}
	}
	//console.log(newArray);
	return newArray;
}
//getOddNumbers({1,2,2,3,4,5,8})
module.exports = {addTwoNumbers,multiply,dividetwonumbers,getOddNumbers}

