const express = require('express');
const app = express()
const connectDB = require('./config/db')
const cors = require("cors")
const path = require("path");


connectDB()
app.use(express.json({extended: false}))
app.use(cors())


app.use('/api/contactMe', require('./routes/api/contactMe'));

if(process.env.NODE_ENV === "production"){
    app.use(express.static( "client/build" ));

    app.get("*", (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const Port =process.env.PORT || 2000
app.listen(Port,err=>{
    if(err){
        console.log('Server not connecting');
    }
    else{
        console.log(`Server now listening on port ${Port}`);
    }
})