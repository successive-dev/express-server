import * as express from 'express';
import Trainee from './Controller';

var router = express.Router();


router.get('/',Trainee.get);

router.post('/',Trainee.put);

router.put('/',Trainee.post);

router.delete('/',Trainee.delete);