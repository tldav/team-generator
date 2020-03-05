const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

const teamArray = [];

async function newTeam() {
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
		},
		{
			type: "list",
			name: "selection",
			message: "Would you like to add another employee?",
			choices: [
				"Add another Engineer",
				"Add another Intern",
				"No thank you"
			]
		}
	]);
	switch (input.selection) {
		case "Add another Engineer":
			newEngineer();
			break;
		case "Add another Intern":
			newIntern();
		default:
			return;
	}

	const manager = new Manager(
		input.name,
		input.id,
		input.email,
		input.office
	);

	console.log(manager);

	teamArray.push(manager);
	console.log(teamArray);

	const createHtml = render([teamArray]);

	fs.writeFile("output/team.html", createHtml, function(err) {
		if (err) {
			console.log(err);
		}
	});
}

newTeam();

async function newEngineer() {
	const input = await inquirer.prompt([
		{
			type: "input",
			name: "name",
			message: "What is the name of this engineer?"
		},
		{
			type: "input",
			name: "id",
			message: "What is this engineer's employee ID number?"
		},
		{
			type: "input",
			name: "email",
			message: "What is this engineer's email address?"
		},
		{
			type: "input",
			name: "github",
			message: "What is this engineer's Github profile name?"
		},
		{
			type: "list",
			name: "selection",
			message: "Would you like to add another employee?",
			choices: [
				"Add another Engineer",
				"Add another Intern",
				"No thank you"
			]
		}
	]);

	const engineer = new Engineer(
		input.name,
		input.id,
		input.email,
		input.github
	);

	console.log(engineer);

	teamArray.push(engineer);
	console.log(teamArray);
}
