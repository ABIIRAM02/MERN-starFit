
const mongoose = require('mongoose')

let userStructure = new mongoose.Schema(
{
    name:
    {
        type:String,
        required:true
    },
    bmi:
    {
        type:Number,
    },
    health:
    {
        type:String,
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

module.exports = mongoose.model('user' ,userStructure )