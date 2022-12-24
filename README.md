# Challenge: SQL Employee Tracker

## Description
This command line application allws users to query a database regarding employee information. The user can query or add data based on the answers from the user responses to the inquirer prompts.


## Usage

<br>

When starting the application, users have the option to either view all roles, departments, employees, and add departments, roles, and employees.
The relationships between the tables are defined by the following image

<br>

![SQL Relationship](./assets/EDR.png)

<br>
Prompts are presented using inquirer

```js
function mainMenu(){
    inquirer.prompt([
    { 
        type: 'list',
        name: 'main',
        message: 'Select one of the following actions:',
        choices: ['View all departments','View all roles','View all employees', 'Add a department', 'Add a role','Add an employee','Update an employee role', 'Quit']
    },
])
```

and formatted using Console.table

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Table of Contents
---
- [Installation](#installation)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)


## Installation
- Inquirer
- MySQL 2
- Console.Table


## License
This application is covered under the MIT License


## Contributing
None


## Questions
https://github.com/overtonr