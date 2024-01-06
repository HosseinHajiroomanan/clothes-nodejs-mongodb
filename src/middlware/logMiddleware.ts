const logger = require('../utils/logger');
import {Request, Response, NextFunction} from "express";
function logMiddleware(req: Request, res: Response, next: NextFunction) {
    logger.info(`request for ${req.url}[${req.method} ]`);
    next();
}


module.exports = logMiddleware;