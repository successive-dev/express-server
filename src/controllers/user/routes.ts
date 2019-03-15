import * as express from 'express';
import { authMiddleWare, validationHandler } from '../../../libs/';
import { validate } from '../trainee/';
import user from './Controller';

const router = express.Router();

router
  .get(
    '/:id',
    validationHandler(validate.get),
    authMiddleWare('getUsers', 'read'),
    user.getById,
  )
  .get(
    '/',
    validationHandler(validate.get),
    authMiddleWare('getUsers', 'read'),
    user.get,
  )
  .post(
    '/',
    validationHandler(validate.create),
    authMiddleWare('getUsers', 'write'),
    user.post,
  )
  .put(
    '/',
    validationHandler(validate.update),
    authMiddleWare('getUsers', 'write'),
    user.put,
  )
  .delete(
    '/:id',
    validationHandler(validate.delete),
    authMiddleWare('getUsers', 'delete'),
    user.delete,
  );

export default router;
