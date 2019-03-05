"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
function hasPermission(moduleName, role, permissionType) {
    return constants_1.permissions[moduleName][permissionType].includes(role);
}
exports.default = hasPermission;
//# sourceMappingURL=permissions.js.map