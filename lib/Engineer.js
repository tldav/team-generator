// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee {
	constructor(github) {
		super("John", 117, "spartan@email");
		this.github = github;
	}
}

const engineer = new Engineer("tldav");

engineer.showEmployeeInfo();

console.log(engineer);

module.exports = Engineer;
