const express = require("express");
const app = express();
const http = require("https")
const bodyparser = require("body-parser");


app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");

});

app.post("/",function(req,res){
res.sendFile(__dirname+"/index.html");
  const url= "https://api.covid19india.org/v2/state_district_wise.json"
  http.get(url,function(response){
response.setEncoding('binary');
    response.on("data",function(data){
const delta = JSON.parse(data);
      console.log(delta);

    });
  });

  // console.log(req.body.city);
});





app.listen(3000,function(){
  console.log("server has started");
})
