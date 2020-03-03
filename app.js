const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

async function newManager() {
	const input = await inquirer.prompt([
		{
			type: "input",
			name: "name",
			message: "What is the name of the manager for this Project?"
		},
		{
			type: "input",
			name: "id",
			message: "What is the manager's employee ID number?"
		},
		{
			type: "input",
			name: "email",
			message: "What is the manager's email address?"
		},
		{
			type: "input",
			name: "office",
			message: "What is the manager's office number?"
		}
	]);
	const manager = new Manager(
		input.name,
		input.id,
		input.email,
		input.office
	);

	console.log(manager);
}

newManager();
