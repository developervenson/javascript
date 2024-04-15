const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4003;

app.use (bodyParser.json());
function middlewareauthcheck(req, res, next)
{
if (req.headers["username"] != "Venkat" || req.headers["passcode"] != "pass") {
    console.log ("Log-The credentials are wrong");
    res.status(400).json({"msg":"Please check the Username and Password"});
} 
else
{
    next();
}
};

function middlewareinputcheck(req,res,next)
{
if (!(req.query["n"] == '2'))
{
    console.log("Value of the qury parameter is ", req.query["n"]);
    res.status(400).json({"msg":"Please check the query parameter entered"});
}
else{
    next();
}
};

app.use(middlewareauthcheck);
app.use (middlewareinputcheck);

app.get("/getdata", function(req,res) {
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