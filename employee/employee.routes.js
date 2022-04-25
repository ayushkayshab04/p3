const express = require("express");
const { append } = require("express/lib/response");
const route = express.Router({ mergeParams: true });
const Controller = require("./employee.controller");

route.get("/", Controller.getEmployeeList);
route.get("/:id",Controller.getEmployeeById);
route.post("/add",Controller.addEmployee);
route.put("/:id",Controller.updatEmployee);
route.delete("/delete/:id",Controller.deleteEmployee);

module.exports = route;