//only the model of user is needed to store data into db

// import IUser from '../src/repositories/user/IUserModel';
// import { User } from '../src/repositories/user/UserModel';


export default function seedUser(User) {

    User.findOne( (err, doc) => {
        if(err){return console.log(err)}
        console.log(doc);
        if (!doc) {
            User.create({
                emailid: 'vishal.tewatia@successive@gmail.com',
                name: 'Vishal Tewatia',
                password: 'imroot',
                dob: new Date()
            }, function (err, user) {
                if (err) return console.log(err + 'Error in seedData');
                console.log(user);
                console.log('User pushed');
            })
        }
    });
}