// Constructor class for object containing employee data that isn't role-specific.
class Employee {
	constructor(name, id, email, role = "Employee") {
		this.name = name;
		this.id = id;
		this.email = email;
		this.role = role;
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

// Exports the class for use in other js files.
module.exports = Employee;
