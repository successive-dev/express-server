import * as express from 'express';
import user from './Controller';
// import validationHandler from '../../../libs/routes/validationHandler';
import authMiddleWare from '../../../libs/routes/authMiddleWare';


let router = express.Router();
// console.log(validate.create);

router.get('/',authMiddleWare('getUsers','write'), user.get);

router.post('/', user.post);

router.put('/', user.put); 

router.delete('/', user.delete);

export default router;

