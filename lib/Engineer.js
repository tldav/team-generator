// Allows use of code in Emmployee.js
const Employee = require("./Employee");

// Constructor class extends from Employee class to create an object containing the main data, as well as data exclusive to engineers.
class Engineer extends Employee {
	constructor(name, id, email, github) {
		super(name, id, email, "Engineer");
		this.github = github;
	}

	getGitHub() {
		return this.github;
	}
}

// Exports the class for use in other js files.
module.exports = Engineer;
