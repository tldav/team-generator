// Allows use of code in Emmployee.js
const Employee = require("./Employee");

// Constructor class extends from Employee class to create an object containing the main data, as well as data exclusive to engineers.
class Engineer extends Employee {
	constructor(name, id, email, github) {
		super(name, id, email, "Engineer", github);
		this.github = github;
	}

	getGitHub() {
		return this.github;
	}
}

// Class creation and function test
// const engineer = new Engineer("John", 117, "spartan@halo.com", "mChief");

// engineer.showEmployeeInfo();

// console.log(engineer);

module.exports = Engineer;
