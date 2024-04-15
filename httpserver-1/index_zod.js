const express = require("express");
const bodyParser = require("body-parser");
const zod = require("zod");
const app = express();
const port = 4002;

const myString = zod.string().ip({
    required_error: "Data is required",
    invalid_type_error: "Data must be a IP Address",
});
const myNumber = zod.number();

app.use (bodyParser.json());

function middlewareauthcheck (req, res, next){
    let response1 = myString.safeParse (req.headers["username"]);
    let response2 = myNumber.safeParse (req.headers["passcode"]);
if (!(response1.success)) {
    console.log (response1.success);
    console.log (req.headers["username"]);
    console.log (myString.safeParse (req.headers["username"]));
    console.log (response1.error.format());
    console.log (response1.error.issues);
    res.status(403).json({"msg":"Username is not a string"});
}
else if (!response2.success) {
    console.log (response2.success);
    console.log (req.headers["passcode"]);
    console.log (myNumber.safeParse (req.headers["passcode"]));
    res.status(403).json({"msg":"Passcode is not a number"});
}
else if (req.headers["username"] != "Venkat" || req.headers["passcode"] != "pass") {
    console.log ("Log-The credentials are wrong");
    res.status(400).json({"msg":"Please check the Username and Password"});
} 
else {
    next();
}
};

function middlewareinputcheck (req, res, next){
if (!(req.query["n"] == '2'))
{
    console.log("Value of the qury parameter is ", req.query["n"]);
    res.status(400).json({"msg":"Please check the query parameter entered"});
}
else {
    next();
}
};

app.get("/getdata", middlewareauthcheck, middlewareinputcheck, function(req,res) {
    console.log (req.headers);
    console.log (req.headers["username"]);
    console.log (req.headers["passcode"]);
    console.log (req.query);
    console.log (req.query["n"]);
    console.log (req.body);
    console.log (req.body["name"]);
    console.log (req.body["skillSet"]);
    console.log (req.body["skillSet"][1]);
    console.log (req.body["spec"]);
    console.log (req.body["spec"]["field"]);
    console.log (req.body["spec"]["grade"][0]);
   
    res.send("Success");
});

app.listen(port, function() {
    console.log("The app is listing on port " + port);
});