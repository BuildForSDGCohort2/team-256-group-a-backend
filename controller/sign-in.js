const db = require("../db/lowdb");

const getStoredUser = (incommingEmail, incommingPassword) => {
  return db
    .get("users")
    .find({ email: incommingEmail }, { password: incommingPassword })
    .value();
};
const signIn = (req) => {
  let user = getStoredUser(req.param.email, req.param.password);

  //If the user is not found return false meaning the user has not registered
  return user === null ? false : true;
};
