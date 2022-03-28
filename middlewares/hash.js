module.exports =  function hash(data){
    const salt = bcrypt.genSaltSync(10);
    const hashedData = bcrypt.hashSync(data, salt)

    return hashedData;
}

