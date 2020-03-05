const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs").promises;
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

const teamArray = [];

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
	teamArray.push(manager);
	// console.log(teamArray);
	newTeam();
}

newManager();

async function newTeam() {
	const input = await inquirer.prompt([
		{
			type: "list",
			name: "selection",
			message: "Would you like to add another employee?",
			choices: ["Add an Engineer", "Add an Intern", "No thank you"]
		}
	]);
	switch (input.selection) {
		case "Add an Engineer":
			newEngineer();
			break;
		case "Add an Intern":
			newIntern();
		default:
			fs.writeFile("output/team.html", render(teamArray), function(err) {
				if (err) {
					console.log(err);
				}
			});
	}
}

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
		}
	]);
	const engineer = new Engineer(
		input.name,
		input.id,
		input.email,
		input.github
	);
	teamArray.push(engineer);
	// console.log(teamArray);
	newTeam();
}

async function newIntern() {
	const input = await inquirer.prompt([
		{
			type: "input",
			name: "name",
			message: "What is the name of this intern?"
		},
		{
			type: "input",
			name: "id",
			message: "What is this intern's employee ID number?"
		},
		{
			type: "input",
			name: "email",
			message: "What is this intern's email address?"
		},
		{
			type: "input",
			name: "school",
			message: "What school is the intern attending?"
		}
	]);
	const intern = new Intern(input.name, input.id, input.email, input.school);
	teamArray.push(intern);
	// console.log(teamArray);
	newTeam();
}
