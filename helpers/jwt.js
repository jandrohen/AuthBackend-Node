const jwt = require('jsonwebtoken');
const e = require("express");

const generarJWT = ( uid, name)  =>{
    const payload = { uid, name }

    return new Promise((resolve, reject) => {
        jwt.sign(payload, process.env.SECRET_JWT_SEED,{
            expiresIn: '24h'
        }, (err,token) =>{

            if (err){
                //SALIO MAL
                console.log(err)
                reject(err)
            } else {
                //SALIO BIEN
                resolve(token)
            }
        })
    })


}

module.exports = {
    generarJWT
}
