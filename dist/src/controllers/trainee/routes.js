"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Controller_1 = require("./Controller");
const validation_1 = require("./validation");
const validationHandler_1 = require("../../../libs/routes/validationHandler");
const authMiddleWare_1 = require("../../../libs/routes/authMiddleWare");
let router = express.Router();
// console.log(validate.create);
router.get('/', authMiddleWare_1.default('getUsers', 'write'), validationHandler_1.default(validation_1.default.get), Controller_1.default.get);
router.post('/', validationHandler_1.default(validation_1.default.create), Controller_1.default.post);
router.put('/', validationHandler_1.default(validation_1.default.update), Controller_1.default.put);
router.delete('/', validationHandler_1.default(validation_1.default.delete), Controller_1.default.delete);
exports.default = router;
//# sourceMappingURL=routes.js.map