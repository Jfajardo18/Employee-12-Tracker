const inquirer = require('inquirer');
const db = require('./lib/queries');
const prompts = require('./lib/prompts');

const run = async () => {
    try {
        const { action } = await prompts.mainMenu();

        switch (action) {
            case 'View all Employees':
                const employees = await db.findAllEmployees();
                console.table(employees);
                break;
            case 'View all Departments':
                const departments = await db.findAllDepartments();
                console.table(departments);
                break;
        }
    }
}