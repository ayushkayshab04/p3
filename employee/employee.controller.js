const employeeService = require("./employee.service");
//const successHandler = require("../common/handlers/sucess.handler")

const getEmployeeList = async (req, res) => {
  try {
    const employeeList = await employeeService.getEmployeeList;
    // return successHandler({ employeeList }, req, res);
    console.log(employeeList)
    res.send("Employee list Found")
  } catch (err) {
    throw new Error(err);
  }
};



module.exports = {
    getEmployeeList,
}