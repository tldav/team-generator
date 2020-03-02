// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Manager extends Employee {
	constructor(name, id, email, officeNo) {
		super(name, id, email, "Manager", officeNo);
		this.officeNo = officeNo;
	}

	// set officeNumber(officeNo) {
	// 	return this.officeNo;
	// }
}

const manager = new Manager("bob", 42, "@email.com", 354);

manager.showEmployeeInfo();

console.log(manager);

module.exports = Manager;
