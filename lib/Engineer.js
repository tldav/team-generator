// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee {
	constructor(name, id, email, github) {
		super(name, id, email, "Engineer", github);
		this.github = github;
	}

	getGitHub() {
		return this.github;
	}
}

const engineer = new Engineer("John", 117, "spartan@halo.com", "mChief");

engineer.showEmployeeInfo();

console.log(engineer);

module.exports = Engineer;
