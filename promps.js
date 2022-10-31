//File to store the inquirer promps
const inquirer = require("inquirer");

inquirer
    mainPrompt([
    { 
        type: 'list',
        name: 'main_prompt',
        message: 'Select one of the following actions:',
        choices: ['View all departments','View all roles','View all employees', 'Add a department', 'Add a role','Add an employee','Update an employee role']
    },
]);