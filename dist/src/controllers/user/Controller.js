"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    get(req, res) {
        res.send("Get pinged");
        console.log(req.query);
    }
    post(req, res) {
        res.send("Post pinged");
    }
    put(req, res) {
        res.send("Put pinged");
    }
    delete(req, res) {
        res.send("Delete pinged");
    }
}
const user = new User();
exports.default = user;
//# sourceMappingURL=Controller.js.map