const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const mongoose= require("mongoose")
const cors= require("cors");

const appoinmentRoutes=require("./api/router/appoinment");

mongoose.connect('mongodb://localhost:27017/assignment-app', {
    useNewUrlParser: true
  })
  .then(() => console.log('connection successful'))
  .catch((err) => console.error(err));
mongoose.Promise=global.Promise;

const app=express();

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","*");
    if(req.method==="OPTIONS"){
            res.header("Access-Control-Allow-Methods","PUT,POST,DETELE,PATCH,GET");
            return res.status(200).json({});

    }
    next();
});

app.use('/appointments',appoinmentRoutes);
app.use((req,res,next)=>
{
    const error=new Error("Not found");
    error.status=404;
    next(error);
    
});

app.use((err,req,res,next)=>
{
 res.status(err.status||500);
 res.json({
     error:{
     message:err.message
 }});   
});

module.exports=app;
