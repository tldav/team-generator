// TODO: Write code to define and export the Employee class
class Employee {
	constructor(name, id, email, role = "Employee") {
		this.name = name;
		this.id = id;
		this.email = email;
		this.role = role;
	}

	showEmployeeInfo() {
		console.log(`Employee: ${this.name}`);
		console.log(`${this.name}'s id # is: ${this.id}`);
		console.log(`${this.name}'s can be reached at: ${this.email}`);
	}

	getName() {
		return this.name;
	}

	getId() {
		return this.id;
	}

	getEmail() {
		return this.email;
	}

	getRole() {
		return this.role;
	}
}

const employee = new Employee("Joe Smith", 7, "jsmith@email.com");

// employee.showEmployeeInfo();

module.exports = Employee;
