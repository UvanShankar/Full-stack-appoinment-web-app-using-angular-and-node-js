const express = require("express");
const router=express.Router();
const mongoose= require("mongoose");
const Appoinment =require("../model/appoinment");


router.get('/',(req,res,next)=>
{
Appoinment.find().select("_id appoinmentDate name email").exec()
.then(doc=>{
    console.log(doc);
   
    res.status(200).json(doc);
    
    
}).catch(err=>{console.log(err);
         res.status(500).json({error:err});
});
});


router.post('/',(req,res,next)=>  //chech auth is after upload.single beacause upload .single parses the data in the form which is needed in check auth
{
const appoinment = new Appoinment({
    _id:mongoose.Types.ObjectId(),
    appoinmentDate:req.body. appoinmentDate,
    name:req.body.name,
    email:req.body.email
});
appoinment.save().then(result=>{
    console.log(result);
    res.status(200).json({message:"Appoinmnet Created",
    prod:appoinment});  
}).catch(err=>{console.log("err"+err.message);
    res.status(500).json(err);});

});



router.delete('/:appid',(req,res,next)=>{
    Appoinment.remove({_id:req.params.appid}).exec().then(
        result=>{res.status(200).json({message:"deleted user ",
    output:result});}
    ).catch(err=>{res.status(500).json({message:err});});
});
module.exports=router;