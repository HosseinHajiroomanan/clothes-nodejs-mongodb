"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = require('../utils/logger');
function logMiddleware(req, res, next) {
    logger.info(`request for ${req.url}[${req.method} ]`);
    next();
}
module.exports = logMiddleware;
