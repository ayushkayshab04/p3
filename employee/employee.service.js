const {mysqlManager} = require("../manager/index")

const getEmployeeList = async()=>{
    const conn = await mysqlManager.getConnection();
    const query = `select * from employee`;

    const {rows} = await conn.query(query);
    return rows;
}


module.exports ={
    getEmployeeList,
}