const fs = require("fs");

const updateEnv = () => {
  return (req, res, next) => {
    const Data = [];
    fs.readFile("../.env", function (err, data) {
        Data.push(data);
    });
    console.log(Data);
    next();
  };
};

module.exports = { updateEnv };
