const mysql=require("mysql");
const {promisify}=require("util");
const {database}=require("./keys");

const pool = mysql.createPool(database);

pool.getConnection((err,connection)=>{

    if(err){
        if(err.code === "PROTOCOL_CONECTION_LOST"){
            console.error("DATABASE CONECTION WAS CLOSE");
        }
        if(err.code === "ER_CON_COUNT_ERROR"){
            console.error("DATABASE HAST TO MANY CONECTION");
        }
        if(err.code === "ECONNREFUSED"){
            console.error("DATABASE CONECTION WAS REFUSED");
        }
    }
    if(connection) connection.release();
    console.log("conectada");
    return;

});
pool.query=promisify(pool.query);
module.exports=pool;
