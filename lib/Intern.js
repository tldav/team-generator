// Allows use of code in Emmployee.js
const Employee = require("./Employee");

// Constructor class extends from Employee class to create an object containing the main data, as well as data exclusive to interns.
class Intern extends Employee {
	constructor(name, id, email, school) {
		super(name, id, email, "Intern", school);
		this.school = school;
	}

	getSchool() {
		return this.school;
	}
}

// Class creation and function test
// const intern = new Intern("Ted", 77, "intern@email.com", "UNT");

// intern.showEmployeeInfo();

// console.log(intern);

module.exports = Intern;
