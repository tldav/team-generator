// Allows use of code in Emmployee.js
const Employee = require("./Employee");

// Constructor class extends from Employee class to create an object containing the main data, as well as data exclusive to managers.
class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		super(name, id, email, "Manager");
		this.officeNumber = officeNumber;
	}

	getOfficeNumber() {
		return this.officeNumber;
	}
}

// Exports the class for use in other js files.
module.exports = Manager;
