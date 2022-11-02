const mysql = require('mysql2');
// const inquirer = require('inquirer');


//Connect to database
const db = mysql.createConnection(
    {
        // host : 'localhost',
        host : '127.0.0.1',
        port : 3306,
        user : 'root',
        password : 'password',
        database : 'employee_db'
    },
    console.log(`Successfully connected to employee_db`)
);

module.exports = server;
//Query functions for database

// viewDept();
// viewRoles();
// viewEmployees();
// addDept();
// addRole();
// addEmployee();
// updateRole();