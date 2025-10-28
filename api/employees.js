import express, { request, response } from "express";
const router = express.Router();
export default router;
import {
  getEmployee,
  deleteEmployee,
  updateEmployee,
  updateEmployee,
} from "#db/queries/employees";

// TODO: this file!

// ** GET /employees => return all employees ***

router.get("/", async (request, response, next) => {
  try {
    const employees = await getEmployee();
    response.status(200).json(employees);
  } catch (error) {
    console.error("Error fetching employees", error);
    next(error);
  }
});

// ** PUT /employees/:id ***
router.put("/:id", async (request, response, next) => {
  try {
    const { id } = request.params;
    const { name, birthday, salary } = request.body;
    if (!name || !birthday || !salary) {
      return response.status(400).json({ error: "Missing required fields" });
    }
    const updatedEmployee = await updateEmployee({
      id,
      name,
      birthday,
      salary,
    });
    if (!updatedEmployee) {
      return response.status(404).json({ error: "Employee not found!" });
    }
    response.status(200).json(updatedEmployee);
  } catch (error) {
    console.error(`Error updating Employees ${request.params.id}`, error);
    next(error);
  }
});

// ** DELETE /employees/:id => delete an employee
router.delete("/:id", async (request, response, next) => {
  try {
    const { id } = request.params;
    const deletedEmployee = await deleteEmployee(id);
    if (!deletedEmployee) {
      return response.status(404).json({ error: "Employee not found!" });
    }
    response.status(200).json(deletedEmployee);
  } catch (error) {
    console.error(`Error deleting employee ${request.params.id}`, error);
    next(error);
  }
});
