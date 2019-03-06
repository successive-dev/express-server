import * as jwt from 'jsonwebtoken';
import hasPermission from '../../extraTs/utils/permissions';
import {User} from '../../src/repositories/user/UserModel';

export default function authMiddleWare(mod, permission){
    return function (req, res, next){
        const token = req.header('Authorization');
        if(!token) return res.status(401).send('Access denied. No token provided');
        let user = {};
        try{
            user = jwt.verify(token,'123456');   
            console.log("Token verified");         
        }catch(ex){
            return res.status(403).send('Un-auth access');
        }
        try{
            console.log(hasPermission(mod,user['role'],permission));
        }catch(ex){
            return res.send(ex);
        }
        
        User.findById(user['id'], (err,doc)=>{
            console.log(user['id']);
            if(err) return res.send(err);
            if(doc) res.send(doc);
        });

        next();
    }
}
