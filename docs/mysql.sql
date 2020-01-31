

CREATE TABLE employee (
  emp_id INT PRIMARY KEY,
  first_name VARCHAR(40),
  last_name VARCHAR(40),
  birth_day DATE,
  sex VARCHAR(1),
  salary INT,
  super_id INT,
  branch_id INT
);

CREATE TABLE branch (
  branch_id INT PRIMARY KEY,
  branch_name VARCHAR(40),
  mgr_id INT,
  mgr_start_date DATE,
  FOREIGN KEY(mgr_id) REFERENCES employee(emp_id) ON DELETE SET NULL
);

ALTER TABLE employee
ADD FOREIGN KEY(branch_id)
REFERENCES branch(branch_id)
ON DELETE SET NULL;

ALTER TABLE employee
ADD FOREIGN KEY(super_id)
REFERENCES employee(emp_id)
ON DELETE SET NULL;

CREATE TABLE client (
  client_id INT PRIMARY KEY,
  client_name VARCHAR(40),
  branch_id INT,
  FOREIGN KEY(branch_id) REFERENCES branch(branch_id) ON DELETE SET NULL
);

CREATE TABLE works_with (
  emp_id INT,
  client_id INT,
  total_sales INT,
  PRIMARY KEY(emp_id, client_id),
  FOREIGN KEY(emp_id) REFERENCES employee(emp_id) ON DELETE CASCADE,
  FOREIGN KEY(client_id) REFERENCES client(client_id) ON DELETE CASCADE
);

CREATE TABLE branch_supplier (
  branch_id INT,
  supplier_name VARCHAR(40),
  supply_type VARCHAR(40),
  PRIMARY KEY(branch_id, supplier_name),
  FOREIGN KEY(branch_id) REFERENCES branch(branch_id) ON DELETE CASCADE
);


-- -----------------------------------------------------------------------------

-- Corporate
INSERT INTO employee VALUES(100, 'David', 'Wallace', '1967-11-17', 'M', 250000, NULL, NULL);

INSERT INTO branch VALUES(1, 'Corporate', 100, '2006-02-09');

UPDATE employee
SET branch_id = 1
WHERE emp_id = 100;

INSERT INTO employee VALUES(101, 'Jan', 'Levinson', '1961-05-11', 'F', 110000, 100, 1);

-- Scranton
INSERT INTO employee VALUES(102, 'Michael', 'Scott', '1964-03-15', 'M', 75000, 100, NULL);

INSERT INTO branch VALUES(2, 'Scranton', 102, '1992-04-06');

UPDATE employee
SET branch_id = 2
WHERE emp_id = 102;

INSERT INTO employee VALUES(103, 'Angela', 'Martin', '1971-06-25', 'F', 63000, 102, 2);
INSERT INTO employee VALUES(104, 'Kelly', 'Kapoor', '1980-02-05', 'F', 55000, 102, 2);
INSERT INTO employee VALUES(105, 'Stanley', 'Hudson', '1958-02-19', 'M', 69000, 102, 2);

-- Stamford
INSERT INTO employee VALUES(106, 'Josh', 'Porter', '1969-09-05', 'M', 78000, 100, NULL);

INSERT INTO branch VALUES(3, 'Stamford', 106, '1998-02-13');

UPDATE employee
SET branch_id = 3
WHERE emp_id = 106;

INSERT INTO employee VALUES(107, 'Andy', 'Bernard', '1973-07-22', 'M', 65000, 106, 3);
INSERT INTO employee VALUES(108, 'Jim', 'Halpert', '1978-10-01', 'M', 71000, 106, 3);


-- BRANCH SUPPLIER
INSERT INTO branch_supplier VALUES(2, 'Hammer Mill', 'Paper');
INSERT INTO branch_supplier VALUES(2, 'Uni-ball', 'Writing Utensils');
INSERT INTO branch_supplier VALUES(3, 'Patriot Paper', 'Paper');
INSERT INTO branch_supplier VALUES(2, 'J.T. Forms & Labels', 'Custom Forms');
INSERT INTO branch_supplier VALUES(3, 'Uni-ball', 'Writing Utensils');
INSERT INTO branch_supplier VALUES(3, 'Hammer Mill', 'Paper');
INSERT INTO branch_supplier VALUES(3, 'Stamford Lables', 'Custom Forms');

-- CLIENT
INSERT INTO client VALUES(400, 'Dunmore Highschool', 2);
INSERT INTO client VALUES(401, 'Lackawana Country', 2);
INSERT INTO client VALUES(402, 'FedEx', 3);
INSERT INTO client VALUES(403, 'John Daly Law, LLC', 3);
INSERT INTO client VALUES(404, 'Scranton Whitepages', 2);
INSERT INTO client VALUES(405, 'Times Newspaper', 3);
INSERT INTO client VALUES(406, 'FedEx', 2);

-- WORKS_WITH
INSERT INTO works_with VALUES(105, 400, 55000);
INSERT INTO works_with VALUES(102, 401, 267000);
INSERT INTO works_with VALUES(108, 402, 22500);
INSERT INTO works_with VALUES(107, 403, 5000);
INSERT INTO works_with VALUES(108, 403, 12000);
INSERT INTO works_with VALUES(105, 404, 33000);
INSERT INTO works_with VALUES(107, 405, 26000);
INSERT INTO works_with VALUES(102, 406, 15000);
INSERT INTO works_with VALUES(105, 406, 130000);

SELECT * FROM employee;

SELECT * FROM client;

SELECT * FROM employee ORDER BY salary DESC;

SELECT * FROM employee ORDER BY sex, first_name, last_name;

SELECT * FROM employee LIMIT 5;

SELECT first_name, last_name FROM employee;

SELECT first_name AS forename, last_name AS surname FROM employee;

SELECT DISTINCT sex from employee;

SELECT DISTINCT branch_id FROM employee;

-- Find the number of employees
SELECT COUNT(emp_id) FROM employee;

SELECT COUNT(super_id) FROM employee;

SELECT COUNT(emp_id) FROM employee WHERE sex = 'F' AND birth_day > '1971-01-01';

SELECT emp_id FROM employee WHERE sex = 'F' AND birth_day > '1971-01-01';


SELECT AVG(salary) FROM employee;

SELECT AVG(salary) FROM employee WHERE sex = 'M';

SELECT SUM(salary) FROM employee;

-- Find out how many males and feamles there are
SELECT COUNT(sex), sex FROM employee GROUP BY sex;

-- Find total sales of each salesman
SELECT SUM(total_sales), emp_id
FROM works_with
GROUP BY emp_id;

SELECT SUM(total_sales), client_id
FROM works_with
GROUP BY client_id;

-- Find any client's who are an LLC
SELECT *
FROM client
where client_name LIKE '%LLC';


-- Find any branch suppliers who are in the label business
SELECT * FROM branch_supplier
WHERE supplier_name LIKE '% Label%';


-- Find any employee born in October
SELECT * FROM employee
WHERE birth_day LIKE '____-10%';

-- Find any clients who are schools
SELECT * FROM client WHERE client_name LIKE '%school%';

-- Find a list of employee and branch names
SELECT first_name AS company_name FROM employee 
UNION
SELECT branch_name FROM branch
UNION
SELECT client_name FROM client;

-- Find a list of all clients and branch supplier` names
SELECT client_name, client.branch_id
FROM client
UNION
SELECT supplier_name, branch_supplier.branch_id
FROM branch_supplier;

-- Find a list of all money spent or earned by the company
SELECT salary
FROM employee
UNION
SELECT total_sales
FROM works_with;

INSERT INTO branch VALUES(4, 'Buffalo', NULL, NULL);

-- Find all branches and the names of their managers
SELECT employee.emp_id, employee.first_name, branch.branch_name
FROM employee
JOIN branch
ON employee.emp_id = branch.mgr_id;

-- Find all branches and the names of their managers
SELECT employee.emp_id, employee.first_name, branch.branch_name
FROM employee
LEFT JOIN branch
ON employee.emp_id = branch.mgr_id;

-- Find all branches and the names of their managers
SELECT employee.emp_id, employee.first_name, branch.branch_name
FROM employee
RIGHT JOIN branch
ON employee.emp_id = branch.mgr_id;

-- Find names of all employees who have
-- sold over 30,000 to a single client
SELECT employee.first_name, employee.last_name
FROM employee
WHERE employee.emp_id IN (
    SELECT works_with.emp_id
    FROM works_with
    WHERE works_with.total_sales > 30000
);

SELECT works_with.emp_id
FROM works_with
WHERE works_with.total_sales > 3000;

-- Find all clients who are handled by the branch
-- that Michael Scott manages
-- Assume you know Michael's ID

SELECT client.client_name
FROM client
WHERE client.branch_id = (
    SELECT branch.branch_id
    FROM branch
    WHERE branch.mgr_id = 102
    LIMIT 1
);

SELECT branch.branch_id
FROM branch
WHERE branch.mgr_id = 102;

DELETE FROM employee
WHERE emp_id = 102;

DELETE FROM branch
WHERE branch_id = 2;

-- Trigger
CREATE TABLE trigger_test(
    message VARCHAR(100)
);































-- Student example
DROP TABLE student;

CREATE TABLE student (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    major VARCHAR(20)
);


CREATE TABLE student (
    student_id INT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    major VARCHAR(20) UNIQUE
);

CREATE TABLE student (
    student_id INT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    major VARCHAR(20) DEFAULT 'undecided'
);


DESCRIBE student;

DROP TABLE student;

ALTER TABLE student ADD gpa DECIMAL(3, 2);

ALTER TABLE student DROP COLUMN gpa;

INSERT INTO student VALUES(
    1, 'Jack', 'Biology'
);


INSERT INTO student VALUES(
    2, 'Kate', 'Sociology'
);

INSERT INTO student VALUES(
    3, NULL, 'Sociology'
);


INSERT INTO student(student_id, name) VALUES(
    3, 'Claire'
);

INSERT INTO student VALUES(4, 'Jack', 'Biology');

INSERT INTO student VALUES(5, 'Mike', 'Computer Science');

/* Reset */
INSERT INTO student(name, major) VALUES(
    'Jack', 'Biology'
);

INSERT INTO student(name, major) VALUES(
    'Kate', 'Sociology'
);

INSERT INTO student(name, major) VALUES(
    'Claire', 'Chemistry'
);

INSERT INTO student(name, major) VALUES(
    'Jack', 'Biology'
);

INSERT INTO student(name, major) VALUES(
    'Mike', 'Computer Science'
);


SELECT * FROM student;

/* Update */
UPDATE student SET major ='Bio' WHERE major ='Biology';

UPDATE student SET major ='Biochemistry' WHERE major = 'Bio' 
OR major = 'Chemistry';

UPDATE student SET name = 'Tom', major = 'undecided' WHERE student_id = 1;

UPDATE student SET major = 'undecided';

DELETE FROM student
WHERE student_id = 1;

DELETE FROM student WHERE name = 'Tom' AND major = 'undecided';

SELECT student.name, student.major FROM student ORDER BY name DESC;

SELECT * FROM student ORDER BY major, student_id DESC;

SELECT * FROM student ORDER BY student_id DESC LIMIT 2;

SELECT * FROM student WHERE major = 'Chemistry' OR major = 'Biology';

SELECT * FROM student WHERE name IN ('Claire', 'Kate', 'Mike');

SELECT * FROM student WHERE major IN ('Biology', 'Chemistry') AND student_id > 2;

-- <, >, <=, >=, =, <>, AND, OR



