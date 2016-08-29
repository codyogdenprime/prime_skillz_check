// 1 - Create an object literal
// named prime with the properties:
// - city
// - state
// - zip
// Assign the values based on Prime's
// address.
var primeAcademy = {
	city: "Bloomington",
	state: "Minnesota",
	zip: 55431
};

// 2 - Using dot notation, create a
// new property for prime. This property
// will be called address and will 
// take the value of Prime's street
// address.
primeAcademy.address = "9410 James Ave S";

// 3 - Using dot notation, create a
// new method for prime. This method
// will console log out the complete
// address of prime. Call the new
// property/method print.
primeAcademy.message = function () {
	console.log( this.address + ", " + this.city + ", " + this.state + " " + this.zip );
};

primeAcaemy.message();