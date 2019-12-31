const mongoose= require('mongoose');
const Schema = mongoose.Schema;

let contactSchema = new Schema({
    name : {
        type: String,
        required : true
    },
    email: {
        type: String,
        required: true
    },
    message:{
         type: String,
        required: true
    },
    phone :{
        type: Number,
        required : true
    }
})

module.exports= mongoose.model('ContactMe',contactSchema)