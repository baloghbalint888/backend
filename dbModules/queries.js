const mysql = require('mysql');
const config = require('./config.json')

const connection = mysql.createConnection({
    host: config.host,
    port: config.port,
    database: config.db,
    user: config.user,
    password: config.password
});
function vat(){
    myQuery = `SELECT vat_percentage FROM vat`;
    connection.query(myQuery,(err,result,fields)=>{
        if(err)
            callback(err,null);
        else{
            callback(null,JSON.parse(JSON.stringify(result)));
        }
    })
}



module.exports.userList = function(callback){
    myQuery = `SELECT login, name, email FROM USERS`;
    connection.query(myQuery,(err,result,fields)=>{
        if(err)
            callback(err,null);
        else{
            callback(null,JSON.parse(JSON.stringify(result)));
        }
    })
}

module.exports.user = function(id,callback){
    myQuery = `SELECT login, phone, birth FROM USERS WHERE userID = ${id}`;
    connection.query(myQuery,(err,result,fields)=>{
        if(err)
            callback(err,null);
        else{
            callback(null,JSON.parse(JSON.stringify(result)));
        }
    })
}

module.exports.productList = function(callback){
    myQuery = `SELECT name,picture,net_value FROM distribution`;
    connection.query(myQuery,(err,result,fields)=>{
        if(err)
            callback(err,null);
        else{
            callback(null,JSON.parse(JSON.stringify(result)));
        }
    })
}

module.exports.productList = function(id,callback){
    myQuery = `SELECT name,picture,net_value FROM distribution WHERE productID = ${id}`;
    connection.query(myQuery,(err,result,fields)=>{
        if(err)
            callback(err,null);
        else{
            callback(null,JSON.parse(JSON.stringify(result)));
        }
    })
}

module.exports.serviceList = function(callback){
    myQuery = `SELECT * FROM services`;
    connection.query(myQuery,(err,result,fields)=>{
        if(err)
            callback(err,null);
        else{
            callback(null,JSON.parse(JSON.stringify(result)));
        }
    })
}

module.exports.service = function(id,callback){
    myQuery = `SELECT * FROM services WHERE serviceID = ${id}`;
    connection.query(myQuery,(err,result,fields)=>{
        if(err)
            callback(err,null);
        else{
            callback(null,JSON.parse(JSON.stringify(result)));
        }
    })
}


module.exports.categoryList = function(callback){
    myQuery = `SELECT * FROM categories`;
    connection.query(myQuery,(err,result,fields)=>{
        if(err)
            callback(err,null);
        else{
            callback(null,JSON.parse(JSON.stringify(result)));
        }
    })
}

module.exports.category = function(id,callback){
    myQuery = `SELECT * FROM categories WHERE id = ${id}`;
    connection.query(myQuery,(err,result,fields)=>{
        if(err)
            callback(err,null);
        else{
            callback(null,JSON.parse(JSON.stringify(result)));
        }
    })
}