import * as jwt from "jsonwebtoken";
import hasPermission from "../../extraTs/utils/permissions";
import { User } from "../../src/repositories/user/UserModel";

export default (mod, permission) => {
    return (req, res, next) => {
        const token = req.header("Authorization");
        let user: any = {};

        if (!token) {
            return res.status(401).send("Access denied. No token provided");
        }

        try {
            user = jwt.verify(token, process.env.SECRET);
        } catch (ex) {
            return res.status(403).send("Un-auth access");
        }
        if (!(hasPermission(mod, user.role, permission))) {
            throw new Error("User doesnt have permission");
        }

        User.findById(user.id, (err, doc) => {

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
