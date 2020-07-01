const express = require("express");
const https = require("https");
const bodyparser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));



app.get("/",function(req,res){
  res.sendFile(__dirname+"/home.html");

});


app.post("/",function(req,res){
res.sendFile(__dirname+"/home.html");
});




app.listen(3000,function(){
  console.log("server has started");
})
