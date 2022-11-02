//File to store the inquirer promps
const inquirer = require("inquirer");

function mainMenu(){
inquirer.prompt([
    { 
        type: 'list',
        name: 'main',
        message: 'Select one of the following actions:',
        choices: ['View all departments','View all roles','View all employees', 'Add a department', 'Add a role','Add an employee','Update an employee role']
    },
    //switch case that calls a function for each option selected
])
//.then()
};
// viewDept();
// viewRoles();
// viewEmployees();

// addDept([
//     {
//         type: 'input',
//         name: 'dept_name',//dept_id??
//         message: 'Enter the name of the department.'
//     }
// ]); //function that adds name to dept in the db

// addRole([
//     {
//         type: 'input',
//         name: 'role_name',
//         message: 'Enter the name of the role that you want to add.'
//     },
//     {
//         type: 'number',
//         name: 'role_salary',
//         message: 'Enter the salary for this role.'
//     },
//     {
//         type: 'input',
//         name: 'role_department', //department id??
//         message: 'What department is this role in?'
//     }
// ]); //function that adds role to db
// //if department exists, add to that department, if not then add a new dept

// addEmployee([
//     {
//         type: 'input',
//         name: 'first_name',
//         message: "What is the new employee's first name?"
//     },
//     {
//         type: 'input',
//         name: 'last_name',
//         message: "What is the new employee's last name?"
//     },
//     {
//         type: 'input',
//         name: 'role_id',
//         message: "What is this employee's role?"
//     },
//     {
//         type: 'input',//list
//         name: 'manager_id',//employee ID?? but also 
//         message: "Who is this employee's manager?"//if null then switch populate null?
//         //list of all employees?
//     },
// ]);

// updateEmployee([
//     {
//         type: 'list',
//         name: 'employee_id',//same as name?
//         message: "Which employee are you updating?" 
//     },
//     {
//         type: 'list',//? or input
//         name: 'role_id',
//         message: 'Please enter/select the new role for this employee.'
//     }
// ]); //function that updates the corresponding role
// //should also update salary? what about manager