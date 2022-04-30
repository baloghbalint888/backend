const dbData = require("../../middlewares/queries");
module.exports.login = () => {
    console.log("Új kérés a /login felé");

    return (req, res, next) => {

        const { login, password } = req.body;
        if (login && password) {
            dbData.findUser(req.body, (err, data) => {
                if (err){
                    res.send({status: "failed"})
                }
                console.log(data);
                if (data) {
                    res.send(data);
                } else {
                    res.send({
                        status: "failed",
                    });
                }
            });
        }
        else res.send({status:"failed"})
    };
};
