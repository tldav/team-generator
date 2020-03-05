// Allows use of code in Emmployee.js
const Employee = require("./Employee");

// Constructor class extends from Employee class to create an object containing the main data, as well as data exclusive to interns.
class Intern extends Employee {
	constructor(name, id, email, school) {
		super(name, id, email, "Intern");
		this.school = school;
	}

	getSchool() {
		return this.school;
	}
}

// Exports the class for use in other js files.
module.exports = Intern;
