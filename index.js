const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateDynamicCards = require('./src/generateTeamCards.js');
const generateHtml = require('./src/generateIndexHtml');
const { create } = require('domain');

const employeeQuestions = [ // basic questions for all employees
    {
        type: 'input',
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
    // you get prompted to enter the manager's name, employee ID, email address, and office number
    inquirer
        .prompt([
            ...employeeQuestions,
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
            team.push(new Manager(...Object.values(value)));
            value.newEmployee ? createEmployee() : createHTML();
    })
}

function createEmployee() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Is this new employee an Engineer or Intern?',
                name: 'role',
                choices: ['Engineer', 'Intern']
            },
        ])
}

init();