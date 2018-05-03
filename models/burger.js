var orm = require("../config/orm.js");

var burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  }, 
  createOne: function(col, val, cb) {
    orm.createOne("burgers", col, val, function(res) {
      cb(res);
    });
  },
  updateOne: function (strColVal, condition, cb) {
    orm.updateOne("burgers", strColVal, condition, function(res) {
      cb(res);
    });
  }
};


module.exports = burger;
