import {permissions} from "../constants";

export default function hasPermission(moduleName, role, permissionType){
    return permissions[moduleName][permissionType].includes(role);
}


