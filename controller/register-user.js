const db  = require("../db/lowdb");
const { report } = require("../routes");
const registerUser = async (req, res, next) => {
    let obj, data, response;
    
    try{
        data = await db;
        response = await data.get("users").push(req.body).write();
        console.log(response);
        // res.status(200).json(response);
    }
    catch(error){
        console.log(error);
        res.end();
    }
};

module.exports = registerUser;