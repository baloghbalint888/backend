const dbData = require("../../middlewares/queries");
//const jwt = require("jsonwebtoken");
module.exports.login = () => {
    console.log("Új kérés a /login felé");

    return (req, res, next) => {
        console.log(req.sessionID);
        const { login, password } = req.body;
        if (login && password) {
            dbData.findUser(req.body, (err, data) => {
                if (err) throw err;
                console.log(data);
                if (data) {
                    req.session.authenticated = true;
                    req.session.login = login;
                    res.send(data);
                } else {
                    res.send({
                        status: "failed",
                    });
                }
            });
        }
    };
};
