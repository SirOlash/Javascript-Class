function iterateObject() {
	const car = {
		make: 'Toyota',
		model: 'Camary',
		year: 2021
        };
	for (let key in car){
		console.log(`"${key}: ${car[key]}"`);
	};
	
	
}
iterateObject()