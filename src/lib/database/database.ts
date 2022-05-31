import mongoose from "mongoose";
import 'dotenv/config';

function InitializeConnection(){
    try{
        mongoose.connect(`${process.env.DATABASE_URL}`);
    }catch{
        console.log('wtf mongoose databse.ts')
    }
   
}

(mongoose.connection.readyState == 1) ? null : InitializeConnection();