const express = require("express");
const route = express.Router({ mergeParams: true });
const Controller = require("./employee.controller");

route.get("/", Controller.getEmployeeList);

module.exports = route;