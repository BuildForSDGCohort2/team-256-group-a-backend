const db = require("../db/lowdb");

const sign_in = (req) => {
  console.log(req.param.email);
  console.log(req.param.password);
  let user = getStoredUser(req.param.email, req.param.password);

  //If the user is not found return false meaning the user has not registered
  return user == null ? false : true;
};

const getStoredUser = (incomming_email, incomming_password) => {
  return db
    .get("users")
    .find({ email: incomming_email }, { password: incomming_password })
    .value();
};
