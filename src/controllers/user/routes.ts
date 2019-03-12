import * as express from "express";
// import validationHandler from '../../../libs/routes/validationHandler';
import authMiddleWare from "../../../libs/routes/authMiddleWare";
import user from "./Controller";

const router = express.Router();
// console.log(validate.create);

router.get("/", user.get);

router.post("/", user.post);

router.put("/", user.put);

router.delete("/", user.delete);

export default router;
