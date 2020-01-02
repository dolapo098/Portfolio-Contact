const express = require('express');
const router = express.Router()
const valSchema= require("../../validation/contactVal")
const contactSchema= require("../../model/contact")



router.post("/", async(req,res)=>{
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

module.exports= router;