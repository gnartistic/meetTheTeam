const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateCards = require('./src/generateTeamCards.js');
const generateHTML = require('./src/generateIndexHTML');

const employeeQuestions = [ // basic questions for all employees
    {
        type: 'input',
        //function for prompt, if prompt.role has value, use that, if not, ask for the manager's name, id, or email, ect.
        message: (prompt) => prompt.role ? `Enter the ${prompt.role}'s name` : `Enter the Manager's name`,
        name: 'employeeName'
    },
    {
        type: 'input',
        message: (prompt) => prompt.role ? `Enter the ${prompt.role}'s employee ID` : `Enter the Manager's Employee ID`,
        name: 'id'
    },
    {
        type: 'input',
        message: (prompt) => prompt.role ? `Enter the ${prompt.role}'s email address` : `Enter the Manager's email address`,
        name: 'email'
    },
]

// the array containing all team employee objects
let team = []

function init() {
    // get this chit started
    // you get prompted to enter the employee's name, employee ID, email address, and office number
    inquirer
        .prompt([
            ...employeeQuestions, // ask basic questions
            // ask these additional questions for the manager's position, they're asked first so theyre only asked once
            {
                type: 'input',
                message: `Enter the Manager's office number`,
                name: 'office'
            },
            // input number
            // presented with a menu with an option to add another employee (engineer or intern), or to finish building team
            {
                type: 'confirm',
                message: `Would you like to add another employee?`,
                name: 'newEmployee'
            },
        ])
        .then((value) => {
            team.push(new Manager(...Object.values(value))); // push new Manager object and values into  empty team array
            // if newEmployee questions is confirmed, call createEmployee(); if not, call createHTML(); to finish.
            value.newEmployee ? createEmployee() : createHTML();
        })
}


// new employee function!
function createEmployee() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Is this new employee an Engineer or Intern?',
                name: 'role',
                choices: ['Engineer', 'Intern']
            },

            // ask basic employee questions
            ...employeeQuestions,
            {
                // if they select the intern option
                type: 'input',
                message: (prompt) => `Enter the ${prompt.role}'s school`,
                when: (prompt) => prompt.role === 'Intern',
                name: 'school'
            },
            {
                type: 'input',
                message: (prompt) => `Enter the ${prompt.role}'s github username`,
                when: (prompt) => prompt.role === 'Engineer',
                name: 'github'
            },
            {
                type: 'confirm',
                message: `Would you like to add another employee?`,
                name: 'newEmployee'
            },
        ])
        .then((value) => {
            // if the role is Engineer push new object to team with captured values
            value.role == 'Engineer' ? team.push(new Engineer(value.employeeName, value.id, value.email, value.github))
                // OR if the role is Intern, psuh new object with values to team
                : value.role == 'Intern' ? team.push(new Intern(value.employeeName, value.id, value.email, value.school))
                    // OR console.log() error with role, if any
                    : console.log("Error", value.role);
            
            // if newEmployee questions is confirmed, call createEmployee(); if not, call createHTML(); to finish.
            value.newEmployee ? createEmployee() : createHTML();
    })
}

// generate html
function createHTML() {
    let teamCardsStr = ``
    for (teamMember of team) {
        teamCardsStr += generateCards(teamMember);
    }
    writeToFile(generateHTML(teamCardsStr));
}

function writeToFile(htmlData) {
    fs.writeFile("index.html", htmlData, (error) =>
        error ? console.log("An error has occured while trying to write your file.") : console.log("Your file has been successfully created with the captured data")
    );
}

init();