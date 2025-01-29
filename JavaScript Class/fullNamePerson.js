const person = {
	firstName : "Emmy",
	lastName : "Olash",
	fullName(){
		//return firstName
		return person.firstName + " " + person.lastName
	}

};
console.log(person.fullName())
