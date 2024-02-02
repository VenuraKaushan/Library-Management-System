import mongoose from "mongoose";
import "dotenv/config";

const dbConnect = ()=>{
    try{
        mongoose
        .connect(process.env.DB_URL);
        console.log("👌 Database is synced");
    }catch(err){
        console.log(err.message);

    }
};

export default dbConnect;