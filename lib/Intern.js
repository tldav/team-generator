// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Intern extends Employee {
	constructor(school) {
		super("Teddy", 82, "teddy@email.com");
		this.school = school;
	}
}

const intern = new Intern("Dartmouth");

intern.showEmployeeInfo();

console.log(intern);
