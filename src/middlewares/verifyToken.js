const jsonwebtoken = require('jsonwebtoken');

const accessToken = (req) => {
    //extract token
    const token = req.headers.authorization?.split(" ")[1];
    return jsonwebtoken.verify(token,process.env.JWT_SECRET);
}

module.exports = {accessToken}