const employeeService = require("./employee.service");


const getEmployeeList = async (req, res) => {
  try {
    const employeeList = await employeeService.getEmployeeList;
    return successHandler({ employeeList }, req, res);
  } catch (err) {
    throw new Error(err);
  }
};



module.exports = {
    getEmployeeList,
}