"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const permissions_1 = require("../../extraTs/utils/permissions");
function authMiddleWare(mod, permission) {
    return function (req, res, next) {
        const token = req.header('Authorization');
        if (!token)
            return res.status(401).send('Access denied. No token provided');
        let user = {};
        try {
            user = jwt.verify(token, 'qwertyuiopasdfghjklzxcvbnm123456');
        }
        catch (ex) {
            return res.status(403).send('Un-auth access');
        }
        try {
            console.log(permissions_1.default(mod, user['role'], permission));
        }
        catch (ex) {
            return res.send(ex);
        }
        next();
    };
}
exports.default = authMiddleWare;
//# sourceMappingURL=authMiddleWare.js.map