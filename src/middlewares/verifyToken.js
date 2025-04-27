const jsonwebtoken = require('jsonwebtoken');

const verifyToken = (token) => {
    return jsonwebtoken.verify(token,process.env.JWT_SECRET);
}

module.exports = {verifyToken}