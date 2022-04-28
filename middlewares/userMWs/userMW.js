const dbData = require('../../middlewares/queries');

module.exports.userList = () => {
    return (req, res, next) => {
        dbData.userList((err, data) => {
            if (err) throw err;
            console.log(`Új ${req.method} kérés a /users felé`);
            res.json(data);
        })
    }
}

module.exports.user = () => {
    return (req, res, next) => {
        if (req.method === 'PUT') {
            dbData.addUser(req.body, (err, data) => {
                if (err) {
                    res.json({
                        "status": "failed"
                    })
                } else res.json({
                    "status": "ok"
                });
            })
        } else if (req.method === "DELETE") {
            if (req.params.id) {
                dbData.delUser(req.params.id, (err, data) => {
                    if (err) {
                        res.json({
                            "status": "failed"
                        });
                    } else res.json({
                        "status": "ok"
                    })
                })
            } else {
                console.log('törlés login alapján')
                console.log(req.body)
                dbData.delUserName(req.body.login, (err, data) => {
                    if (err) {
                        res.json({
                            "status": "failed"
                        })
                    } else res.json({
                        "status": "ok"
                    })
                })
            }

        } else {
            dbData.user(req.params.id, (err, data) => {
                if (err) throw err;
                console.log(`új ${req.method} kérés a /user/${req.params.id} felé`);
                res.json(data);
            })
        }

    }
}

module.exports.products = () => {
    return (req, res, next) => {
        if (req.params.key) {
            if (req.params.key === "pc") {
                dbData.productListPC((err, data) => {
                    if (err) throw err;
                    console.log(`új ${req.method} kérés a /products/PC felé`);
                    res.json(data);
                })
            }
            if (req.params.key == "cables") {
                dbData.productListCable((err, data) => {
                    if (err) throw err;
                    console.log(`új ${req.method} kérés a /products/cables felé`);
                    res.json(data);
                })
            }
            if (req.params.key == "routers") {
                dbData.productListNET((err, data) => {
                    if (err) throw err;
                    console.log(`új ${req.method} kérés a /products/routers felé`);
                    res.json(data);
                })
            }
            if (req.params.key == "peripherals") {
                dbData.productListPeri((err, data) => {
                    if (err) throw err;
                    console.log(`új ${req.method} kérés a /products/peripherals felé`);
                    res.json(data);
                })
            }
        } else {
            dbData.productList((err, data) => {
                if (err) throw err;
                console.log(`új ${req.method} kérés a /products felé`);
                res.json(data);
            })
        }

    }
}

module.exports.product = () => {
    return (req, res, next) => {
        dbData.product(req.params.id, (err, data) => {
            if (err) throw err;
            console.log(`új ${req.method} kérés a /products/${req.params.id} felé`);
            res.json(data);
        })
    }
}

module.exports.search = () => {
    return (req, res, next) => {
        if (!req.params.key) {
            res.redirect('/products')
        } else {
            dbData.search(req.params.key, (err, data) => {
                if (err) throw err;
                console.log(`új ${req.method} kérés a /search/${req.params.key} felé`);
                res.json(data);
            })
        }
    }
}

module.exports.categories = () => {
    return (req, res, next) => {
        if (req.params.id) {
            dbData.category(req.params.id), (err, data) => {
                if (err) throw err;
                res.json(data);
            }
        } else {
            dbData.categoryList((err, data) => {
                if (err) throw err;
                console.log(`új ${req.method} kérés a /categories felé`);
                res.json(data);
            })
        }
    }
}



module.exports.vat = () => {
    return (req, res) => {
        dbData.vat((err, data) => {
            const num = data[0].vat_percentage
            const numString = '1' + '.' + num.toString()
            const szam = parseFloat(numString)
            if (err) throw err;
            res.json({
                "vat": szam
            })
        })
    }
}
module.exports.services = () => {
    return (req, res, next) => {
        if (req.params.id) {
            dbData.service(req.params.id, (err, data) => {
                if (err) throw err;
                console.log(`új ${req.method} kérés a /services/${req.params.id} felé`);
                res.json(data);
            })
        } else {
            dbData.serviceList((err, data) => {
                if (err) throw err;
                console.log(`új ${req.method} kérés a /services felé`);
                res.json(data);
            })
        }
    }
}




module.exports.categories = () => {
    return (req, res, next) => {
        if (req.params.id) {
            dbData.category(req.params.id, (err, data) => {
                if (err) throw err;
                res.json(data);
            })
        } else {
            dbData.categoryList((err, data) => {
                if (err) throw err;
                res.json(data);
            })
        }
    }
}

module.exports.admins = () => {
    return (req, res, next) => {
        dbData.adminList((err, data) => {
            if (err) throw err;
            console.log(`új ${req.method} kérés a /admin felé`)
            res.json(data);
        })
    }
}


module.exports.cart = () => {
    return (req, res, next) => {
        if (!req.params.id) {
            if (req.method === 'PUT') {
                dbData.addToCart(req.body, (err, data) => {
                    if (err) {
                        res.json({
                            "status": "failed"
                        })
                    } else {
                        res.send({
                            "status": "ok"
                        });
                    }
                })
            }
            if (req.method === 'DELETE') {
                dbData.deleteFromCart(req.body, (err, data) => {
                    if (err) {
                        res.json({
                            "status": "failed"
                        })
                    } else {
                        res.json({
                            "status": "ok"
                        })
                    }
                })
            }
        } else {
            dbData.cart(req.params.id, (err, data) => {
                if (err) {
                    res.json({"status": "Not found in DB"})
                } else {
                    res.json(data);
                }
            })
        }

    }
}