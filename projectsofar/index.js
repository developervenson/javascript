//PROJECTSOFAR Application - Using JWT
const express = require("express");
const app = express();
const port = 5001;

const mongoose = require("mongoose");

mongoose.connect ("mongodb+srv://venson:Gr3nadier%40127147@cluster0.wn803ok.mongodb.net/ERPDB")
const userModel = mongoose.model('users', {userName: String, fullName: String, passCode: String, email: String});

const bodyParser = require("body-parser");

app.use(bodyParser.json());

//HTTP Route - LOGIN
app.get("/login", function(req,res){
    console.log ("LOGIN call....");
    res.send("Log In Successfull");
});

//HTTP Route - GET
app.get("/getdata", function(req,res){
    console.log ("GET call....");
    res.send(users);
});

//HTTP Route - POST
app.post("/postdata", function(req,res){
    console.log("POST call....")
    let newUser = new userModel ({
        userName: "Venkat", 
        fullName: "Venkat Muthaiyan", 
        passCode: "pass12",
        email: "venson@yahoo.com"});
        newUser.save();
    res.send("POST to DB is successful...");
});

//HTTP Listener
app.listen (port, function(){
    console.log("The PROJECTSOFAR application is listening on PORT: " + port);
});