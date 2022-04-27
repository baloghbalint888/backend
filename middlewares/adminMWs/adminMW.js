const dbData = require("../../middlewares/queries");
const upload = require('multer');
const fs = require("fs");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);
module.exports.admin = () => {
  return (req, res, next) => {
    dbData.admin((err, data) => {
      if (err) throw err;
      res.json(data);
    });
  };
};

module.exports.addProduct = () => {
  return (req, res, next) => {
    dbData.addProduct(req.body, (err, data) => {
      if (err) throw err;
      res.json({ added: "ok" });
    });
  };
};

module.exports.uploadImg = async () => {

}