import { print_triangle, print_diamond }  from "./patterns";
import {validateUsers, hasPermission} from "./utils";
import {users} from "./constants";
// export const permissions = {
//     'getUsers': {
//     all: ['head-trainer'],
//     read : ['trainee', 'trainer'],
//     write : ['trainer'],
//     delete: [],
//     }
// }


validateUsers(users);

print_triangle(10);
print_diamond(10);
console.log(hasPermission('getUsers','trainee','read'));
