USE employee_tracker;

-- insert sample data into department table
INSERT INTO department (name) 
VALUES ('Engineering'),
       ('Human Resources'),
       ('Marketing'),
       ('Sales');

-- insert sample data into role table
INSERT INTO role (title, salary, department_id)
VALUES ('Software Engineer', 100000, 1),
       ('Senior Software Engineer', 120000, 1),
       ('HR Manager', 65000, 2),
       ('HR Assistant', 45000, 2),
       ('Marketing Coordinator', 540000, 3),
       ('Sales Representative', 50000, 4),
       ('Sales Manager', 75000, 4);

-- insert sample data into employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1, NULL),
       ('Jane', 'Smith', 2, 1),
       ('Emily', 'Johnson', 3, NULL),
       ('Michael', 'Williams', 4, 3),
       ('David', 'Brown', 5, NULL),
       ('Sarah', 'Davis', 6, NULL),
       ('James', 'Miller', 7, 6);
       
       
