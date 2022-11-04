const inquirer = require('inquirer');
const employee = require('./lib/employee');
const engineer = require('./lib/engineer');
const manager = require('./lib/manager');
const intern = require('./lib/intern');

const team = [];

function addMember() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter team member's name"
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter team member e-mail address'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter team member id'
        },
        {
            type: 'list',
            name: 'role',
            message: 'Please enter team member role',
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ])
}
