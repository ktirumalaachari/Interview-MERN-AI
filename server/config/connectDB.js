import mongoose from "mongoose";
import dns from "dns";

// Fix for Windows / ISP DNS ECONNREFUSED on MongoDB SRV queries
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Database Connected")
    }catch(error){
        console.log(`Database Error : ${error}`)
    }
}

export default connectDB