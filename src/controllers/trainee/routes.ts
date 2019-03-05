import * as express from 'express';
import trainee from './Controller';
import validate from './validation';
import validationHandler from '../../../libs/routes/validationHandler';


let router = express.Router();
// console.log(validate.create);

router.get('/',validationHandler(validate.get), trainee.get);

router.post('/',validationHandler(validate.create), trainee.post);

router.put('/',validationHandler(validate.update), trainee.put); 

router.delete('/',validationHandler(validate.delete), trainee.delete);

export default router;