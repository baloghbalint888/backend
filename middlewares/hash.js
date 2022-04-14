

const bcrypt = require("bcrypt")

function hash(data){
    const salt = bcrypt.genSaltSync(10);
    const hashedData = bcrypt.hashSync(data, salt)

    return hashedData;
}


function compare( data,DBdata){
    if(hash(data) === DBdata){
        return true;
    }
    else return false;
}

module.exports = hash, compare;