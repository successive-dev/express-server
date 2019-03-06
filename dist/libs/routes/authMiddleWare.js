"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const permissions_1 = require("../../extraTs/utils/permissions");
const UserModel_1 = require("../../src/repositories/user/UserModel");
function authMiddleWare(mod, permission) {
    return function (req, res, next) {
        const token = req.header('Authorization');
        if (!token)
            return res.status(401).send('Access denied. No token provided');
        let user = {};
        try {
            user = jwt.verify(token, '123456');
            console.log("Token verified");
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
        UserModel_1.User.findById(user['id'], (err, doc) => {
            console.log(user['id']);
            if (err)
                return res.send(err);
            if (doc)
                res.send(doc);
        });
        next();
    };
}
exports.default = authMiddleWare;
//# sourceMappingURL=authMiddleWare.js.map