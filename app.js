require('dotenv').config();
const express = require("express");
const https = require("https");
const bodyparser = require("body-parser");
const ejs = require("ejs");
const app = express();
const mongoose = require("mongoose");


app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

// Server Connection Of mongodb
var url = process.env.URL;
mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
// mongoose Schema
const areaschema= new mongoose.Schema({
  areaname:String,
  cases:Number
});
// mongoose model
const Area = mongoose.model("area",areaschema);

// setting random area and it's cases for testing



// mongoose Schema for total cases
  const totalschema = new mongoose.Schema({
    confirm:Number,
    death:Number,
    recover:Number,
    active:Number,
  });
  // mongoose model
  const Total = mongoose.model("totalcase",totalschema);



app.get("/",function(req,res){
// FOR FINDING TOTAL CASES
  Total.find(function(err,data){
     if(err){
       console.log(err);
     }
     else{
       const confirm = data[0].confirm;
       const active = data[0].active;
       const death = data[0].death;
       const recover = data[0].recover;
// FOR FINDING AREA WISE
       Area.find(function(err,data){
   if(err){
     console.log(err);
   }
   else{
     res.render("home.ejs",{confirm:confirm,active:active,death:death,recover:recover,data:data})
     console.log(data[0].cases);

   }
 })
     }
   })

});





app.listen(3000,function(){
  console.log("server has started");
})
