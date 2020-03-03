// Constructor class for object containing employee data that isn't role-specific.
class Employee {
	constructor(name, id, email, role = "Employee") {
		this.name = name;
		this.id = id;
		this.email = email;
		this.role = role;
	}

	// Class test function
	showEmployeeInfo() {
		console.log(`Employee: ${this.name}`);
		console.log(`${this.name}'s role is ${this.role}`);
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

module.exports = Employee;
