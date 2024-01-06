const jwt = require('jsonwebtoken');
const generateToken = (payload: Object) => {
    return jwt.sign(payload, process.env.secret_key);
};

const verifyToken = (token: string) => {
    try {
        return jwt.verify(token, process.env.secret_key);
    } catch (error) {
        return null;
    }
};

module.exports = {
    generateToken,
    verifyToken
};