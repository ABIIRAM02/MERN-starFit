
const mongoose = require('mongoose')

let trainerStructure = new mongoose.Schema({

    name:
    {
        type:String,
        required: true
    },
    age:
    {
        type:Number,
        required:true
    },
    email:
    {
        type:String,
        required:true
    },
    password:
    {
        type:String,
        required:true
    },
    gender:
    {
        type:String,
        required:true
    },
    userKind:
    {
        type:String,
        required:true
    }

})

module.exports = mongoose.model('trainer' ,trainerStructure )