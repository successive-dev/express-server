import { compare } from 'bcrypt';
import * as express from 'express';
import { sign } from 'jsonwebtoken';
import UserRepo from '../../repositories/user/UserRepository';

const router = express.Router();

router.post('/', async (req, res) => {
    const { emailid, password } = req.body;
    const user = await UserRepo.findByQueryUsers({emailid});
    if (await compare(password, user[0].password)) {
        const token = sign({
            emailid: user[0].emailid,
            password: user[0].password,
            role: user[0].role,
        }, process.env.SECRET, { expiresIn: '12h' });
        return res.header('Authorization', token).send(token);
    }
});

export default router;
