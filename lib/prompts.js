const inquirer = require('inquirer');

const mainMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                'View all Employees',
                'View all Departments',
                'View all Roles',
                'Add Employee',
                'Add Department',
                'Add Role',
                'Update Employee Role',
                'Update Employee Manager',
                'View Employees by Manager',
                'View Employees by Department',
                'Delete Employee',
                'Delete Department',
                'Delete Role',
                'Exit'
            ]
        }
    ]);
};

const addDepartmentPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'departmentName',
            message: 'Enter the name of the department:'
        }
    ]);
};

const addRolePrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'roleTitle',
            message: 'Enter the title of the role:'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter the salary for the role:'
        },
        {
            type: 'input',
            name: 'departmentId',
            message: 'Enter the department ID for the role:'
        }
    ]);
};

const addEmployeePrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: "Enter the employee's first name:"
        },
        {
            type: 'input',
            name: 'lastName',
            message: "Enter the employee's last name:"
        },
        {
            type: 'input',
            name: 'roleId',
            message: "Enter the employee's role ID:"
        },
        {
            type: 'input',
            name: 'managerId',
            message: "Enter the employee's manager ID (Can leave blank if none):"
        }
    ]);
};

const updateRolePrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter the ID of the employee you want to update:'
        },
        {
            type: 'input',
            name: 'newRoleId',
            message: 'Enter the new role ID for the employee:'
        }
    ]);
};

const deleteItemPrompt = (item) => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'itemId',
            message: `Enter the ID of the ${item} you want to delete:`
        }
    ]);
};

const viewByManagerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerId',
            message: 'Enter the ID of the manager you want to view employees for:'
        }
    ]);
};

const viewByDepartmentPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'departmentId',
            message: 'Enter the ID of the department you want to view employees for:'
        }
    ]);
};

module.exports = {
    mainMenu,
    addDepartmentPrompt,
    addRolePrompt,
    addEmployeePrompt,
    updateRolePrompt,
    deleteItemPrompt,
    viewByManagerPrompt,
    viewByDepartmentPrompt
};