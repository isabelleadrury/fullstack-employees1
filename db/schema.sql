DROP TABLE IF EXISTS employees;

CREATE TABLE fullstack_employees(
	id SERIAL PRIMARY KEY,
	name TEXT UNIQUE NOT NULL,
birthday DATE NOT NULL,
salary INTERGER NOT NULL,
	
)

