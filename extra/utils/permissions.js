var permissions = {
    'getUsers': {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    delete: [],
    }
}

function hasPermission(moduleName, role, permissionType, ){
    return permissions[moduleName][permissionType].includes(role);
}

console.log(hasPermission('getUsers', 'trainee', 'write'));