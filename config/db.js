const mongoose = require("mongoose");
const config=require('config');
const db = config.get('mongoURI');

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI ||db, {useNewUrlParser :true, useUnifiedTopology: true})
        console.log('Database now connected')
   }catch(err){
        console.error(err);
    }
}

module.exports=connectDB

    