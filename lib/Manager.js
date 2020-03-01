// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Manager extends Employee {
	constructor(officeNo) {
		super("Ashton Jones", 17, "ajones@email.com");
		this.officeNo = officeNo;
	}
}

const manager = new Manager(354);

manager.showEmployeeInfo();

console.log(manager);

module.exports = Manager;
