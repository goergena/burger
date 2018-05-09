var connection = require("./connection");


var orm = {
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    createOne: function (table, col, val, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)"
        connection.query(queryString, [table, col, val], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function (table, strColVal, condition, cb) {
        var queryString = "UPDATE " + table + " SET " + strColVal + " WHERE " + condition;
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;