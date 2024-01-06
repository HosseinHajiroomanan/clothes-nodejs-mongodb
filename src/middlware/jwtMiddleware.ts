const jwt = require('../utils/jwt');
import {Request, Response, NextFunction} from "express";
function jwtMiddleware(req: Request, res: Response, next: NextFunction) {
    let token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    token = token.replace("Bearer ", "");


    if (!jwt.verifyToken(token)) {
        return res.status(403).json({ message: 'Failed to authenticate token' });
    }

    next();
}

module.exports = jwtMiddleware;