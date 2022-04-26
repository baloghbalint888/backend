const dbData = require('../../middlewares/queries');
//const jwt = require("jsonwebtoken");
module.exports.login = () => {
    console.log("Új kérés a /login felé")
    
    return (req, res, next)=>{
        console.log(req.body)
        dbData.findUser(req.body,(err,data)=>{
            if(err) throw err;
/*             const user = req.body
            const token = jwt.sign(user, process.env.MY_SECRET, { expiresIn: "24h" });
            res.cookie("token", token); */
            res.send(data);
        })
    }
}