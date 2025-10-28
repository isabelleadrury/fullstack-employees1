import express, { request } from "express";
const app = express();
import { router } from "./api/employees";
export default app;

app.use(express.json());

// TODO: this file!

app.use("/employees", router);

app.use("/", router);

app.use((error, request, response, next) => {
  console.error(error);
  response.status(500).send("Sorry! Something went wrong :(");
});
