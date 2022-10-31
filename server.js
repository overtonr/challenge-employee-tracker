const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3000;
const app = express();

//Express middleware
app.use(express.urlencoded({extended : false}));
app.use(express.json());

//Connect to database
const db = mysql.createConnection(
    {
        // host : 'local server',
        host : '127.0.0.1',
        user : 'root',
        password : 'password',
        database : 'employee_db'
    },
    console.log(`Successfully connected to employee_db`)
);

//Query functions for database


//Listener
app.listen(PORT, () =>{
    console.log(`Listening at http://localhost:${PORT}`)
});
