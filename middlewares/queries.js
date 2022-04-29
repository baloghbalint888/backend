const { hashSync, compareSync} = require("bcryptjs");
const connection = require("../services/connection");
module.exports.vat = function (callback) {
  myQuery = `SELECT vat_percentage FROM vat`;
  connection.query(myQuery, (err, result, fields) => {
    if (err) callback(err, null);
    else {
      callback(null, JSON.parse(JSON.stringify(result)));
    }
  });
};
module.exports.adminList = function (callback) {
  myQuery = `SELECT name, login FROM admin`;
  connection.query(myQuery, (err, result, fields) => {
    if (err) callback(err, null);
    else {
      callback(null, JSON.parse(JSON.stringify(result)));
    }
  });
};
module.exports.admin = function (id, callback) {
  myQuery = `SELECT name, login FROM admin WHERE id=${id}`;
  connection.query(myQuery, (err, result, fields) => {
    if (err) callback(err, null);
    else {
      callback(null, JSON.parse(JSON.stringify(result)));
    }
  });
};
module.exports.search = function (data, callback) {
  myQuery = `SELECT name,description,picture,net_value FROM distribution WHERE name LIKE '%${data}%' OR description LIKE '%${data}%'`;
  connection.query(myQuery, (err, result, fields) => {
    if (err) callback(err, null);
    else {
      callback(null, JSON.parse(JSON.stringify(result)));
    }
  });
};
module.exports.userList = function (callback) {
  myQuery = `SELECT userID, login, password, name, phone, birth, email, billing_address, shipping_address, tax_reg FROM USERS`;
  connection.query(myQuery, (err, result, fields) => {
    if (err) callback(err, null);
    else {
      callback(null, JSON.parse(JSON.stringify(result)));
    }
  });
};

module.exports.user = function (id, callback) {
  myQuery = `SELECT login, phone, birth FROM USERS WHERE userID = ${id}`;
  connection.query(myQuery, (err, result, fields) => {
    if (err) callback(err, null);
    else {
      callback(null, JSON.parse(JSON.stringify(result)));
    }
  });
};

module.exports.addUser = function (data, callback) {
  const hashedPW = hashSync(data.password, 10);
  myQuery = `INSERT INTO users (login,password,name,phone,birth,email,billing_address,shipping_address,tax_reg) VALUES ('${data.login}','${hashedPW}','${data.name}','${data.phone}','${data.birth}','${data.email}','${data.billing_address}','${data.shipping_address}','${data.tax_reg}')`;
  connection.query(myQuery, (err, result, fields) => {
    if (err) callback(err.sqlMessage, null);
    else {
      callback(null, JSON.parse(JSON.stringify(result)));
    }
  });
};

module.exports.updateUser = function (data, callback) {
  const {id,updateData} = data;
  if(update.name)
  
  console.log(id)
  console.log(updateData.name)
  myQuery = `UPDATE users
  SET name ='${updateData.name}' , 
  phone=${updateData.phone}, 
  birth=${updateData.birth}, 
  email=${updateData.email}, 
  billing_address=${updateData.billing_address}, 
  billing_address=${updateData.shipping_address}, 
  tax_reg=${updateData.tax_reg}
   WHERE userID = ${id}`;
  connection.query(myQuery, (err, result, fields) => {
    console.log(result)
    if (err) callback(err, { status: "failed"});
    else {
      callback(null, {status : "ok"});
    }
  });
};


module.exports.delUser = function (id, callback) {
  myQuery = `DELETE FROM users WHERE userID = ${id}`;
  connection.query(myQuery, (err, result, fields) => {
    if (err) callback(err, null);
    else {
      callback(null, JSON.parse(JSON.stringify(result)));
    }
  });
};

module.exports.delUserName = function (login, callback) {
  myQuery = `DELETE FROM users WHERE login = '${login}'`;
  connection.query(myQuery, (err, result, fields) => {
    if (err) callback(err, null);
    else {
      callback(null, JSON.parse(JSON.stringify(result)));
    }
  });
};

module.exports.productList = function (callback) {
  myQuery = `SELECT productID,name,description,picture,net_value, catID FROM distribution`;
  connection.query(myQuery, (err, result, fields) => {
    if (err) callback(err, null);
    else {
      callback(null, JSON.parse(JSON.stringify(result)));
    }
  });
};
module.exports.productListPC = function (callback) {
  myQuery = `SELECT productID,name,description,picture,net_value FROM distribution WHERE catID=1 OR catid=2`;
  connection.query(myQuery, (err, result, fields) => {
    if (err) callback(err, null);
    else {
      callback(null, JSON.parse(JSON.stringify(result)));
    }
  });
};

module.exports.productListNET = function (callback) {
  myQuery = `SELECT productID,name,description,picture,net_value FROM distribution WHERE catID=3`;
  connection.query(myQuery, (err, result, fields) => {
    if (err) callback(err, null);
    else {
      callback(null, JSON.parse(JSON.stringify(result)));
    }
  });
};
module.exports.productListPeri = function (callback) {
  myQuery = `SELECT productID,name,description,picture,net_value FROM distribution WHERE catID=4`;
  connection.query(myQuery, (err, result, fields) => {
    if (err) callback(err, null);
    else {
      callback(null, JSON.parse(JSON.stringify(result)));
    }
  });
};

module.exports.productListCable = function (callback) {
  myQuery = `SELECT productID,name,description,picture,net_value FROM distribution WHERE catID=5`;
  connection.query(myQuery, (err, result, fields) => {
    if (err) callback(err, null);
    else {
      callback(null, JSON.parse(JSON.stringify(result)));
    }
  });
};

module.exports.product = function (id, callback) {
  myQuery = `SELECT productID,name,picture,net_value FROM distribution WHERE productID = ${id}`;
  connection.query(myQuery, (err, result, fields) => {
    if (err) callback(err, null);
    else {
      callback(null, JSON.parse(JSON.stringify(result)));
    }
  });
};

module.exports.addProduct = function (file,body, callback) {
  myQuery = `INSERT INTO distribution (catID,name, picture,description,vat_id,net_value) VALUES (${body.catID},'${body.name}','${file.originalname}','${body.description}',${body.vat_id},${body.net_value})`;
  connection.query(myQuery, (err, result, fields) => {
    if (err) callback(err, null);
    else {
      callback(null, JSON.parse(JSON.stringify(result)));
    }
  });
};

module.exports.serviceList = function (callback) {
  myQuery = `SELECT * FROM services`;
  connection.query(myQuery, (err, result, fields) => {
    if (err) callback(err, null);
    else {
      callback(null, JSON.parse(JSON.stringify(result)));
    }
  });
};

module.exports.service = function (id, callback) {
  myQuery = `SELECT * FROM services WHERE serviceID = ${id}`;
  connection.query(myQuery, (err, result, fields) => {
    if (err) callback(err, null);
    else {
      callback(null, JSON.parse(JSON.stringify(result)));
    }
  });
};
module.exports.servicesVat = function (id, callback) {
  myQuery = `SELECT vat_percentage FROM vat INNER JOIN services ON services.vat_id=vat.vat_id WHERE serviceID=${id}`;
  connection.query(myQuery, (err, result, fields) => {
    if (err) callback(err, null);
    else {
      callback(null, JSON.parse(JSON.stringify(result)));
    }
  });
};

module.exports.categoryList = function (callback) {
  myQuery = `SELECT * FROM categories`;
  connection.query(myQuery, (err, result, fields) => {
    if (err) callback(err, null);
    else {
      callback(null, JSON.parse(JSON.stringify(result)));
    }
  });
};

module.exports.category = function (id, callback) {
  myQuery = `SELECT * FROM categories WHERE id = ${id}`;
  connection.query(myQuery, (err, result, fields) => {
    if (err) callback(err, null);
    else {
      callback(null, JSON.parse(JSON.stringify(result)));
    }
  });
};
// itt tartok
module.exports.findUser = function (data, callback) {
  myQuery = `SELECT login,password,userID,is_admin FROM users WHERE login = '${data.login}';`;

  connection.query(myQuery, (err, result, fields) => {
    const userID = result[0].userID;
    const isAdmin = result[0].is_admin;
    console.table(result);
    if (err) callback(err, { status: "failed" });
    if(!result[0]){
       callback (err, false )
    }
    else {
      if (!compareSync(data.password, result[0].password)) {
        callback(err, false);
      } else {
        callback(null, {id : userID, isAdmin : isAdmin});
      }
    }
  });
};



module.exports.cart = function (body,callback){

  myQuery = `SELECT distribution.productID, distribution.picture,distribution.name, distribution.net_value, cart.prod_amount FROM users LEFT JOIN cart ON users.userID = cart.userID LEFT JOIN distribution ON cart.productID = distribution.productID WHERE cart.userID =${body.id}`
  connection.query(myQuery, (err, result, fields) => {
    if (err){ 
      callback(err, {"status" : "failed"});
    }
    else {
      callback(null, JSON.parse(JSON.stringify(result)));
    }
  });
}


module.exports.addToCart = function (data,callback){
  console.log(data.serviceID)
  var myQuery = `INSERT INTO cart (userID,productID,serviceID,prod_amount,date) VALUES(${data.userID},${data.productID},${data.serviceID},${data.prod_amount},'${data.date})`
  if(data.serviceID == 'undefined'){
    myQuery = `INSERT INTO cart (userID,productID,prod_amount,date) VALUES(${data.userID},${data.productID},${data.prod_amount},'${data.date}')`;
  }

  console.log(myQuery)
  connection.query(myQuery, (err, result, fields) => {
    if (err){ 
      callback(err, {"status" : "failed"});
    }
    else {
      callback(null, {"status" : "ok"});
    }
  });
}

module.exports.deleteFromCart = function (data,callback){
  myQuery = `DELETE FROM cart WHERE userID = ${data.userID} AND productID = ${data.productID}`
  connection.query(myQuery, (err, result, fields) => {
    if (err){ 
      callback(err, {"status" : "failed"});
    }
    else {
      callback(null, {"status" : "ok"});
    }
  });
}