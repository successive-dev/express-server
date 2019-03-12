import * as express from "express";
import authMiddleWare from "../../../libs/routes/authMiddleWare";
import validationHandler from "../../../libs/routes/validationHandler";
import validate from "../trainee/validation";
import user from "./Controller";

const router = express.Router();

router.get("/" , validationHandler(validate.get), authMiddleWare("getUsers", "write"), user.get);

router.post("/", validationHandler(validate.create), authMiddleWare("getUsers", "write"), user.post);

router.put("/",  validationHandler(validate.update), authMiddleWare("getUsers", "write"), user.put);

router.delete("/", validationHandler(validate.delete),  authMiddleWare("getUsers", "write"), user.delete);

export default router;
