import * as express from "express";
import authMiddleWare from "../../../libs/routes/authMiddleWare";
import validationHandler from "../../../libs/routes/validationHandler";
import trainee from "./Controller";
import validate from "./validation";

const router = express.Router();
// console.log(validate.create);

router.get("/", authMiddleWare("getUsers","write"),validationHandler(validate.get), trainee.get);

router.post("/", validationHandler(validate.create), trainee.post);

router.put("/", validationHandler(validate.update), trainee.put); 

router.delete("/", validationHandler(validate.delete), trainee.delete);

export default router;
