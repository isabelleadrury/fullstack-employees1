/** @returns the employee created according to the provided details */
export async function createEmployee({ name, birthday, salary }) {
  // TODO
  try {
    const sql = `
    INSERT INTO employees ()
    VALUES ()
    RETURNING *;`;
    const values = [name, birthday, salary];
    const { rows } = await db.query(sql, values);
  } catch (error) {
    console.error("Error creating employee profile", error);
    throw error;
  }
}

// === Part 2 ===

/** @returns all employees */
export async function getEmployees() {
  // TODO
  const sql = `
  SELECT *
  FROM employees`;
  const { rows: employees } = await db.query(sql);
  return employees;
}

/**
 * @returns the employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function getEmployee(id) {
  // TODO
  try {
    const sql = `
  SELECT FROM employees
  WHERE id = $1
  RETURNING *;`;
    const value = [id];
    const { rows } = await db.query(sql, value);
    return rows[0];
  } catch (error) {
    console.error("Error fetching employee with id", error, id);
  }
}

/**
 * @returns the updated employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function updateEmployee({ id, name, birthday, salary }) {
  // TODO
  try {
    const sql = `
    UPDATE employees
    SET name = $1,
    birthday = $2,
    salary = $3
    WHERE id = $4
    RETURNING*;`;
    const value = [name, birthday, salary, id];
    const { rows } = await db.query(sql, value);
    return rows[0];
  } catch (error) {
    console.error(`Error updating employee with id {id}`, error);
  }
}

/**
 * @returns the deleted employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function deleteEmployee(id) {
  // TODO
  try {
    const sql = `
    DELETE FROM employees
    WHERE id = $1
    RETURNING *;`;
    const values = [id];
    const { rows } = await db.query(sql, values);
  } catch (error) {
    console.error("Error deleteing employee with id", id, error);
  }
}
