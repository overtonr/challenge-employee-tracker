const prompts = require('./prompts.js');
const server = require('./server.js');
const Table = require('console.table');
const inquirer = require('inquirer');
const mysql = require('mysql2');

// mainMenu();

function listAllDep(){
    db.query('SELECT * FROM department', function(err,response){
        var table = new Table({
            
        })
    })
}