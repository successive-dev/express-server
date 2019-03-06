"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {User} from '../../../src/repositories/user/UserModel';
class UserClass {
    get(req, res) {
        console.log('User Get Pinged');
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
const user = new UserClass();
exports.default = user;
//# sourceMappingURL=Controller.js.map