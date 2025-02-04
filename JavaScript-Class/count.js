//function assertEqual(){

//	const gatMen = ()->{ //Arrow functions
//		let numberOfMen
//	};

//	function getLadies(){
//		let numberOfLadies = 23
//		return numberOfLadies;
//	};
//	
//	return getMen() == getLadies()
//};

//Function returning an object 

/*function count (){

	let value = 0

	return{
		increment: function(){
			return value++
		},
		decrement: ()=>{
			return value
		},
		getValue: function(){
			return value
		}
	}
};
let counter = count()
counter.increment();
counter.increment();
console.log(counter.getValue());*/



//Function as an argument

let firstName = "chinedu"
function greet(name){
	return `Hello ${name}`
};

function executeFunction(callback, userName){
	return callback(userName)
}

let result = executeFunction(greet, firstName);
console.log(result);
