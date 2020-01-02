const express = require('express');
const app = express()
const connectDB = require('./config/db')
const cors = require("cors")
const path = require("path");
const valSchema= require("./validation/contactVal")
const contactSchema= require("./model/contact")

const Port =process.env.PORT || 2000

connectDB()
app.use(express.json({extended: false}))
app.use(cors())


app.post("/contactMe", async(req,res)=>{
    const{name,email,message,phone}=req.body;
    console.log(req.body)
    try{
        const valContact = await valSchema.validateAsync({name, email,message,phone})
        if(valContact){
            const contactMe= new contactSchema({name,email,message,phone});
            await contactMe.save();
            console.log('message already delivered')
            res.status(200).json({
                message :  "message already sent",
                doc : contactMe
            })
        }
        else{
            console.error(err)
        res.status(400).json(err);
        }
    }catch(err){
        console.error(err);
        return res.status(400).json({
            message:err
        })
    }
})

if(process.env.NODE_ENV === "production"){
    app.use(express.static( "client/build" ));

    app.get("*", (req,res)=>{
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(Port,err=>{
    if(err){
        console.log('Server not connecting');
    }
    else{
        console.log(`Server now listening on port ${Port}`);
    }
})