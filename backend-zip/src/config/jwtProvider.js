require('dotenv').config();
const jwt = require('jsonwebtoken');

const generateToken=(userId)=>{

    const token=jwt.sign({userId},process.env.ACCESS_TOKEN_SECRET,{ expiresIn: '48h' })
    return token;
}

const getUserIdFromToken=(token)=>{
    const decodedToken=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
    return decodedToken.userId
}


module.exports={generateToken,getUserIdFromToken};