import validateEmail from './helper';

export default function validateUsers(users){
    let validCount = 0;
    for(let user of users){
        let { traineeEmail, reviewerEmail } = user;
        if(validateEmail(traineeEmail) && validateEmail(reviewerEmail)){
            validCount = validCount+1;
            console.log(user);
        }
    }  
    const invalidCount = users.length - validCount;
    console.log(`Valid Users : ${validCount}`); 
    console.log(`Invalid Users : ${invalidCount}`); 

}
