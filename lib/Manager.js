// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		super(name, id, email, "Manager", officeNumber);
		this.officeNumber = officeNumber;
	}

	getOfficeNumber() {
		return this.officeNumber;
	}
}

const manager = new Manager("bob", 42, "@email.com", 354);

manager.showEmployeeInfo();

console.log(manager);

module.exports = Manager;
