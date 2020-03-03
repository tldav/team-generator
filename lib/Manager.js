// Allows use of code in Emmployee.js
const Employee = require("./Employee");

// Constructor class extends from Employee class to create an object containing the main data, as well as data exclusive to managers.
class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		super(name, id, email, "Manager", officeNumber);
		this.officeNumber = officeNumber;
	}

	getOfficeNumber() {
		return this.officeNumber;
	}
}

// Class creation and function test
const manager = new Manager("bob", 42, "bob@email.com", 354);

manager.showEmployeeInfo();

console.log(manager);

module.exports = Manager;
