USE employee_db;

INSERT INTO department(dep_name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

INSERT INTO role(title, salary, dep_id)
VALUES ("Salesperson", 80000, 1),
       ("Lead Engineer", 150000, 2),
       ("Software Engineer", 120000, 2),
       ("Accountant", 160000, 3),
       ("Account Manager", 125000, 3)
       ("Legal Team Lead", 250000, 4),
       ("Lawyer", 190000, 4);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Chan", 1, 3),
       ("Ashley", "Rodriguez", 2, NULL),
       ("Kevin", "Tupik", 3, 2),
       ("Kunal Singh", 5, NULL),
       ("Malia", "Brown", 4, 4),
       ("Tom", "Allen", 7, NULL)
