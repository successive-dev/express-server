import {permissions} from "../constants";

export default function hasPermission(moduleName: string, role: string, permissionType: string): boolean{
    return permissions[moduleName][permissionType].includes(role);
}
