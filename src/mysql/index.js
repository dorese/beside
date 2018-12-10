var mysql = require("mysql");
var obj = {
    user: "root",
    password: "root",
    database: "1609a",
    localhost: 3000,
    connectionLimit: 100,
}
var pool = mysql.createPool(obj);
module.exports = function(sql, arr, ck) {
    pool.getConnection(function(err, con) {
        if (err) {
            return ck && ck(err)
        }
        con.query(sql, arr, function(err, results) {
            if (err) {
                return ck && ck(err)
            }
            return ck && ck(null, results);
            con.release();
        })
    })
}