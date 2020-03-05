// Node and js file requirements
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs").promises;
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

// Once team members are created in the form of objects, all of those objects will be pushed to this empty array.
const teamArray = [];

// This function uses inquirer to create CLI prompts to be completed by the manager of any given project/team.
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

	// Creates a new manager using the constructor function from Manager.js. The user inputs are stored as an object.
	const manager = new Manager(
		input.name,
		input.id,
		input.email,
		input.office
	);

	// Pushes the new manager class to the empty team array with global scope.
	teamArray.push(manager);

	// Runs the new team function, which asks the user if they want to add other employees.
	newTeam();
}

// Starts the application
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

	// Depending on selection, the user will be prompted to add info for a new engineer or intern. If neither are selected, the html page will be written with however many employees have been entered. Any number of employees can be chosen or the user can end after only adding a manager. This process will only end once "No thank you" is selected by the user.
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

// runs if the user chooses to add a new engineer. This function works identically to the new manager function
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
	newTeam();
}

// Runs if the user chooses to add a new intern. This function works identically to the new manager and new engineer functions.
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
	newTeam();
}
