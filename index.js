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
            case 'View all Roles':
                const roles = await db.findAllRoles();
                console.table(roles);
                break;
            case 'Add Employee':
                const { firstName, lastName, roleId, managerId } = await prompts.addEmployeePrompt();
                await db.addEmployee(firstName, lastName, roleId, managerId);
                console.log('Employee added!');
                break;
            case 'Add Department':
                const { departmentName } = await prompts.addDepartmentPrompt();
                await db.addDepartment(departmentName);
                console.log('Department added!');
                break;
            case 'Add Role':
                const { roleTitle, salary, departmentId } = await prompts.addRolePrompt();
                await db.addRole(roleTitle, salary, departmentId);
                console.log('Role added!');
                break;
            case 'Update Employee Role':
                const { employeeId, newRoleId } = await prompts.updateRolePrompt();
                await db.updateEmployeeRole(employeeId, newRoleId);
                console.log('Employee role updated!');
                break;
            case 'Delete Employee':
            case 'Delete Department':
            case 'Delete Role':
                const itemType = action.split(' ')[1].toLowerCase();
                const { itemId } = await prompts.deleteItemPrompt(itemType);
                await db[`delete${itemType.charAt(0).toUpperCase() + itemType.slice(1)}`](itemId);
                console.log(`${itemType} deleted!`);
                break;
            case 'Exit':
                process.exit();
            default:
                console.log('Invalid action. Try again.');
                break;
        }
    } catch (error) {
        console.error('Error occurred:', error);
    } finally {
        setTimeout(run, 2000);
    }
};

run();