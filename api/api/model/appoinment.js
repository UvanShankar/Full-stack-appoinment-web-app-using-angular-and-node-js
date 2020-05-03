const mongoose= require("mongoose");
const userSchema=mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    appoinmentDate: {type:String,required:true,unique:true},
    name:{type:String,required:true},
    email:{type:String,required:true}
});

module.exports=mongoose.model('Appoinment',userSchema);