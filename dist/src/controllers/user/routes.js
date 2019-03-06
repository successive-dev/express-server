"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Controller_1 = require("./Controller");
// import validationHandler from '../../../libs/routes/validationHandler';
const authMiddleWare_1 = require("../../../libs/routes/authMiddleWare");
let router = express.Router();
// console.log(validate.create);
router.get('/', authMiddleWare_1.default('getUsers', 'write'), Controller_1.default.get);
router.post('/', Controller_1.default.post);
router.put('/', Controller_1.default.put);
router.delete('/', Controller_1.default.delete);
exports.default = router;
//# sourceMappingURL=routes.js.map