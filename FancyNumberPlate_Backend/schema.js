const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    mobno: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    }
    // bookedPlates: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'NumberPlate'
    // }]
});
const numberPlateSchema = new mongoose.Schema({
    plateId:{
        type:String,
        required:true
    },
    plateNumber: {
        type: String,
        required: true
    },
    platePrize: {
        type: Number,
        default: false
    },
    bookedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});
const adminSchema= new mongoose.Schema({
    adminid:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    mobno: {
        type: Number,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    enteredPlates: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NumberPlate'
      }]
})

const NumberPlate = mongoose.model('NumberPlate', numberPlateSchema);
const User = mongoose.model('User', userSchema);
const Admin = mongoose.model('Admin',adminSchema)

module.exports = { NumberPlate, User, Admin };   