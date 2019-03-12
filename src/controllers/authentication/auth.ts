import { compare } from "bcrypt";
import * as express from "express";
import { sign } from "jsonwebtoken";
import UserRepo from "../../repositories/user/UserRepository";

const router = express.Router();

router.post("/", async (req, res) => {
    const { emailid, password } = req.body;
    const user = await UserRepo.findUserByEmail(emailid);
    if (compare(password, user.password)) {
        const token = sign({
            emailid: user.emailid,
            password: user.password,
            role: user.role,
        }, process.env.SECRET, { expiresIn: "0.25h" });
        res.header("Authorization", token).send(token);
    }
});

export default router;
