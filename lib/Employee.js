// TODO: Write code to define and export the Employee class
class Employee {
	constructor(name, id, email) {
		this.name = name;
		this.id = id;
		this.email = email;
	}

	showEmployeeInfo() {
		console.log(`Employee: ${this.name}`);
		console.log(`${this.name}'s id # is: ${this.id}`);
		console.log(`${this.name}'s can be reached at: ${this.email}`);
	}
}

const employee = new Employee("Joe Smith", 7, "jsmith@email.com");

// employee.showEmployeeInfo();

module.exports = Employee;
