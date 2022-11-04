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
        },
    ])
    .then((data) => {
        if (data.role === 'Manager') {
            inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'office',
                    message: "Please enter manager's office number"
                }
            ])
            .then((data2) => {
                const teamManager = new manager(data.name, data.email, data.id, data2.office);
                team.push(teamManager);
                Continue();
            });
        } else if (data.role === 'Engineer') {
            inquirer
            .prompt([
                {
                    type:'input',
                    name: 'github',
                    message: "Please enter engineer's github username"
                }
            ])
            .then((data3) => {
                const teamEngineer = new engineer(data.name, data.email, data.id, data3.github);
                team.push(teamEngineer);
                Continue();
            });
        } else {
            inquirer
            .prompt([
                {
                    type:'input',
                    name:'school',
                    message: "Please enter intern's school"
                }
            ])
            .then((data4) => {
                const teamIntern = new intern(data.name, data.email, data.id, data4.school);
                team.push(teamIntern);
                Continue();
            });
        };
    });
};

function Continue() {
    inquirer
    .prompt([
        {
            type: 'confirm',
            name: 'continue',
            message: 'Add more team members?'
        }
    ])
    .then((data) => {
        if (data.continue) {
            addMember();
        } else {
            console.log(team);
        };
    });
};

function init() {
    addMember();
}

init();

