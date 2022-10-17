import mongoose from "mongoose";

const connection = async (username,password)=>{
    // const URL='mongodb+srv://${username}:${password}@cluster0.yi09t.mongodb.net/test2?retryWrites=true&w=majority';
    const URL=`mongodb+srv://${username}:${password}@cluster0.yi09t.mongodb.net/test2?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
        console.log('connection successfully');
    } catch (error) {
        console.log('error while connecting database',error);
    }
}

export default connection;