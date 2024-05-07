const connection = require('../db');

const findAllEmployees = () => {
    return connection.promise().query(
        `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
        FROM employee
        LEFT JOIN role ON employee.role_id = role.id
        LEFT JOIN department ON role.department_id = department.id
        LEFT JOIN employee manager ON employee.manager_id = manager.id`
    );
};

//view all departments
const findAllDepartments = () => {
    return connection.promise().query(
        `SELECT department.id, department.name
        FROM department`
    );
};

//view all roles
const findAllRoles = () => {
    return connection.promise().query(
        `SELECT role.id AS Role_ID, role.title AS Title, role.salary AS Salary, department.name AS Department
        FROM role
        INNER JOIN department ON role.department_id = department.id;`
    );
};

// add department
const addDepartment = (departmentName) => {
    return connection.promise().query(
        `INSERT INTO department (name) VALUES (?)`, [departmentName]
    );
};
        
// add role
const addRole = (title, salary, departmentId) => {
    return connection.promise().query(
        `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`, [title, salary, departmentId]
    );
};

// add employee
const addEmployee = (firstName, lastName, roleId, managerId) => {
    return connection.promise().query(
        `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, [firstName, lastName, roleId, managerId]
    );
};

// update employee role
const updateEmployeeRole = (employeeId, roleId) => {
    return connection.promise().query(
        `UPDATE employee SET role_id = ? WHERE id = ?`, [roleId, employeeId]
    );
};

// update employee manager
const updateEmployeeManager = (employeeId, managerId) => {
    return connection.promise().query(
        `UPDATE employee SET manager_id = ? WHERE id = ?`, [managerId, employeeId]
    );
};

// view employees by manager
const findEmployeesByManager = (managerId) => {
    return connection.promise().query(
        `SELECT employee.id, employee.first_name, employee.last_name, role.title
        FROM employee
        JOIN employee manager ON manager.id = employee.manager_id
        WHERE manager_id = ?`, [managerId]
    );
};

// view employees by department
const findEmployeesByDepartment = (departmentId) => {
    return connection.promise().query(
        `SELECT employee.id, employee.first_name, employee.last_name, role.title
        FROM employee
        JOIN role ON role.id = employee.role_id
        WHERE role.department_id = ?`, [departmentId]
    );
};

// delete department
const deleteDepartment = (departmentId) => {
    return connection.promise().query(
        `DELETE FROM department WHERE id = ?`, [departmentId]
    );
};

// delete role
const deleteRole = (roleId) => {
    return connection.promise().query(
        `DELETE FROM role WHERE id = ?`, [roleId]
    );
};

// delete employee
const deleteEmployee = (employeeId) => {
    return connection.promise().query(
        `DELETE FROM employee WHERE id = ?`, [employeeId]
    );
};

module.exports = {
    findAllEmployees,
    findAllDepartments,
    findAllRoles,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole,
    updateEmployeeManager,
    findEmployeesByManager,
    findEmployeesByDepartment,
    deleteDepartment,
    deleteRole,
    deleteEmployee
};

