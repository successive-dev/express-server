import validateEmail from './helper';
import {User} from '../interfaces';
export default function validateUsers(users: User[]){
    var validCount = 0;
    for(let user of users){
        var { traineeEmail, reviewerEmail } = user;
        if(validateEmail(traineeEmail) && validateEmail(reviewerEmail)){
            validCount = validCount+1;
            console.log(user);
        }
    }  
    const invalidCount = users.length - validCount;
    console.log(`Valid Users : ${validCount}`); 
    console.log(`Invalid Users : ${invalidCount}`); 

}
