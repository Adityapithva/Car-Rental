const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name:{type:String,required:true},
    fuelType:{type:String,required:true},
    transmission:{type:String,required:true},
    seatingCapacity:{type:String,required:true},
    image:String,
    rate:{type:Number,required:true},
});

const Cars = mongoose.model('Cars',carSchema);
module.exports = Cars;