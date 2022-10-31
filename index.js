const mysql = require('mysql2');
// const inquirer = require('inquirer');
const prompts = require('./promps');
const table = require('console.table');


//Connect to database
const db = mysql.createConnection(
    {
        // host : 'localhost',
        host : '127.0.0.1',
        port : 3000,
        user : 'root',
        password : 'password',
        database : 'employee_db'
    },
    console.log(`Successfully connected to employee_db`)
);

//Query functions for database

