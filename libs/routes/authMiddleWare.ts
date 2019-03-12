import * as jwt from "jsonwebtoken";
import hasPermission from "../../extraTs/utils/permissions";
import { User } from "../../src/repositories/user/UserModel";

export default (mod, permission) => {
    return (req, res, next) => {
        const token = req.header("Authorization");
        let user = {};

        if (!token) {
            return res.status(401).send("Access denied. No token provided");
        }

        try {
            user = jwt.verify(token, "123456");
            // DEBUG
            // console.log("Token verified");
        } catch (ex) {
            return res.status(403).send("Un-auth access");
        }

        try {
        // tslint:disable-next-line: no-string-literal
            res.send(hasPermission(mod, user["role"], permission));
        } catch (ex) {
            return res.send(ex);
        }

// tslint:disable-next-line: no-string-literal
        User.findById(user["id"], (err, doc) => {

            if (err) {
                return res.send(err);
            }

            if (doc) {
                res.send(doc);
            }
        });

        next();
    };
};
