const Mongoose = require("mongoose");

const Database = async (URI) => {
  try {
    const con = await Mongoose.connect(URI);
    console.log(`Databse Connected Successfully - ${con.connection.host}`);
    return con;
  } catch (error) {
    console.error(`Mongodb Connection failed due to - ${error.message}`);
    process.exit();
  }
};
module.exports = {
  Database,
};
