users = [{
    traineeEmail:'trainee1@successive.tech',
    reviewerEmail:'reviewer1@successive.tech'
},{
    traineeEmail:'trainee1@successivetech',
    reviewerEmail:'reviewer1@successive.tech'
}]

function validateEmail(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email);
}

function validateUsers(){
    var validCount = 0;
    for(user of users){
        var { traineeEmail, reviewerEmail } = user;
        if(validateEmail(traineeEmail) && validateEmail(reviewerEmail)){
            validCount = validCount+1;
            console.log(user);
        }
    }  
    const invalidCount = users.length - validCount;
    console.log(validCount); 
    console.log(invalidCount); 

}

validateUsers();