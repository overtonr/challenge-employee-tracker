//File to store the inquirer promps
const inquirer = require("inquirer");

function mainMenu(){
    inquirer.prompt([
    { 
        type: 'list',
        name: 'main',
        message: 'Select one of the following actions:',
        choices: ['View all departments','View all roles','View all employees', 'Add a department', 'Add a role','Add an employee','Update an employee role', 'Quit']
    },
    //switch case that calls a function for each option selected
])
.then(function(response){
    switch(response.main){
        case 'View all departments': viewDept();
        break;
        case 'View all roles': viewRoles();
        break;
        case 'View all employees': viewEmployees();
        break;
        case 'Add a department': addDept();
        break;
        case 'Add a role': addRole();
        break;
        case 'Add an employee': addEmployee();
        break;
        case 'Update an employee role': updateRole();
        break;
        case 'Quit': exit();
        break;
    }
})
};

viewDept();
viewRoles();
viewEmployees();

function addDept(){
    inquirer.prompt([
    {
        type: 'input',
        name: 'dept_name',
        message: 'Enter the name of the department.'
    }
])}; //function that adds name to dept in the db

function addRole(){
    inquirer.prompt([
    {
        type: 'input',
        name: 'role_name',
        message: 'Enter the name of the role that you want to add.'
    },
    {
        type: 'number',
        name: 'role_salary',
        message: 'Enter the salary for this role.'
    },
    {
        type: 'list',
        name: 'role_department',
        message: 'What department is this role in?',
        choices: [] //list of existing deparments
    }
])}; //function that adds role to db
//if department exists, add to that department, if not then add a new dept

function addEmployee(){
    inquirer.prompt([
    {
        type: 'input',
        name: 'first_name',
        message: "What is the employee's first name?"
    },
    {
        type: 'input',
        name: 'last_name',
        message: "What is the employee's last name?"
    },
    {
        type: 'input',
        name: 'role_name',
        message: "What is this employee's role?",
        choices: [] //list of existing roles
    },
    {
        type: 'list',
        name: 'manager_name',
        message: "Who is this employee's manager?",
        choices: [] //list of existing employees
        //if null then switch populate null
    },
])};


function updateRole(){
    inquirer.prompt([
    {
        type: 'list',
        name: 'employee_name',
        message: "Which employee are you updating?",
        choices: [] //list of existing employees
    },
    {
        type: 'list',
        name: 'role_id',
        message: 'Please select the new role for this employee.',
        choices: [] //list of existing roles
    }
])}; //function that updates the corresponding role
// //should also update salary? what about manager

function exit(){};


//View all departments shows dept_id and name
//View all roles shows role_id, title, department, and salary
//View all employees shows emp_id, first name, last name, title, dep name, salary, manager
//

mainMenu();