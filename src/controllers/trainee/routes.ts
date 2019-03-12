import * as express from "express";
import authMiddleWare from "../../../libs/routes/authMiddleWare";
import validationHandler from "../../../libs/routes/validationHandler";
import trainee from "./Controller";
import validate from "./validation";

const router = express.Router();
// console.log(validate.create);

router.get("/", authMiddleWare("getUsers", "write"), validationHandler(validate.get), trainee.get);

router.post("/", authMiddleWare("getUsers", "write"), validationHandler(validate.create), trainee.post);

router.put("/", authMiddleWare("getUsers", "write"),  validationHandler(validate.update), trainee.put);

router.delete("/", authMiddleWare("getUsers", "write"), validationHandler(validate.delete), trainee.delete);

export default router;
