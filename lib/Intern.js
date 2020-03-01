// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Intern extends Employee {
	constructor(school) {
		const role = "intern";
		super("Teddy", 82, "teddy@email.com");
		this.school = school;
		this.role = "Intern";
	}
}

const intern = new Intern("Dartmouth");

intern.showEmployeeInfo();

console.log(intern);

module.exports = Intern;
