const mysql = require('mysql');
const config = require('./config.json')
const bcrypt = require("bcrypt");
const connection = mysql.createConnection({
    host: config.host,
    port: config.port,
    database: config.db,
    user: config.user,
    password: config.password
});

//bruttó árgenerátor szenvedés
/* function vat(){
    myQuery = `SELECT vat_percentage FROM vat`;
    connection.query(myQuery,(err,result,fields)=>{
        const data = JSON.parse(JSON.stringify(result))
        let percentage = data[0].vat_percentage;
        return percentage;
    })

}
 */
module.exports.adminList = function (callback) {
    myQuery = `SELECT name, login FROM admin`;
    connection.query(myQuery, (err, result, fields) => {
        if (err)
            callback(err, null);
        else {
            callback(null, JSON.parse(JSON.stringify(result)));
        }
    })
}

module.exports.userList = function (callback) {
    myQuery = `SELECT login, name, email FROM USERS`;
    connection.query(myQuery, (err, result, fields) => {
        if (err)
            callback(err, null);
        else {
            callback(null, JSON.parse(JSON.stringify(result)));
        }
    })
}

module.exports.user = function (id, callback) {
    myQuery = `SELECT login, phone, birth FROM USERS WHERE userID = ${id}`;
    connection.query(myQuery, (err, result, fields) => {
        if (err)
            callback(err, null);
        else {
            callback(null, JSON.parse(JSON.stringify(result)));
        }
    })
}

module.exports.addUser = function (data, callback) {
    const salt = bcrypt.genSaltSync(10);
    const hashedPW = bcrypt.hashSync(data.password, salt)
    myQuery = `INSERT INTO users (login,password,name,phone,birth,email,billing_address,shipping_address) VALUES ('${data.login}','${hashedPW}','${data.name}','${data.phone}','${data.birth}','${data.email}','${data.billing_address}','${data.shipping_address}')`;
    connection.query(myQuery, (err, result, fields) => {
        if (err)
            callback(err, null);
        else {
            callback(null, JSON.parse(JSON.stringify(result)));
        }
    })
}

module.exports.delUser = function (id, callback) {
    myQuery = `DELETE FROM users WHERE userID = ${id}`;
    connection.query(myQuery, (err, result, fields) => {
        if (err)
            callback(err, null);
        else {
            callback(null, JSON.parse(JSON.stringify(result)));
        }
    })
}

module.exports.delUserName = function (login, callback) {
    myQuery = `DELETE FROM users WHERE login = '${login}'`;
    connection.query(myQuery, (err, result, fields) => {
        if (err)
            callback(err, null);
        else {
            callback(null, JSON.parse(JSON.stringify(result)));
        }
    })
}
module.exports.productList = function (callback) {
    myQuery = `SELECT name,description,picture,net_value FROM distribution`;
    connection.query(myQuery, (err, result, fields) => {
        if (err)
            callback(err, null);
        else {
            callback(null, JSON.parse(JSON.stringify(result)));
        }
    })
}

module.exports.product = function (id, callback) {
    myQuery = `SELECT name,picture,net_value FROM distribution WHERE productID = ${id}`;
    connection.query(myQuery, (err, result, fields) => {
        if (err)
            callback(err, null);
        else {
            callback(null, JSON.parse(JSON.stringify(result)));
        }
    })
}

module.exports.addProduct = function (data, callback) {
    myQuery = `INSERT INTO distribution (catID,name,amount, picture,description,vat_id,net_value) VALUES (${data.catID},'${data.name}','${data.amount}','${data.picture}','${data.description}',${data.vat_id},${data.net_value})`;
    connection.query(myQuery, (err, result, fields) => {
        if (err)
            callback(err, null);
        else {
            callback(null, JSON.parse(JSON.stringify(result)));
        }
    })
}

module.exports.serviceList = function (callback) {
    myQuery = `SELECT * FROM services`;
    connection.query(myQuery, (err, result, fields) => {
        if (err)
            callback(err, null);
        else {
            callback(null, JSON.parse(JSON.stringify(result)));
        }
    })
}

module.exports.service = function (id, callback) {
    myQuery = `SELECT * FROM services WHERE serviceID = ${id}`;
    connection.query(myQuery, (err, result, fields) => {
        if (err)
            callback(err, null);
        else {
            callback(null, JSON.parse(JSON.stringify(result)));
        }
    })
}


module.exports.categoryList = function (callback) {
    myQuery = `SELECT * FROM categories`;
    connection.query(myQuery, (err, result, fields) => {
        if (err)
            callback(err, null);
        else {
            callback(null, JSON.parse(JSON.stringify(result)));
        }
    })
}

module.exports.category = function (id, callback) {
    myQuery = `SELECT * FROM categories WHERE id = ${id}`;
    connection.query(myQuery, (err, result, fields) => {
        if (err)
            callback(err, null);
        else {
            callback(null, JSON.parse(JSON.stringify(result)));
        }
    })
}