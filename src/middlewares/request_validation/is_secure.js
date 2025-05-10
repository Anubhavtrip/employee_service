const jwt = require('jsonwebtoken');

const isSecure = (req, res, next) => {
    //check that token is exist or not
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ success: false, message: "Unauthorized request" });
    }
    next();
}

module.exports = {isSecure}