// require('dotenv').config();
// const url = process.env.MONGO_URL;
import * as mongoose from 'mongoose';

class Database{
    // url: string;
    // constructor(url:string){
    //     this.url = url;
    // }

    open(url:string){
        mongoose.connect(url, {useNewUrlParser:true})
        .then(()=>console.log("Connected to DB..."))
        .catch(err=>console.log(err.message));  
    }

    disconnect(){
        mongoose.disconnect();
    }
}