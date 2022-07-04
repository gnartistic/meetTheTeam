const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateDynamicCards = require('./src/generateTeamCards.js');
const generateHtml = require('./src/generateIndexHtml');
