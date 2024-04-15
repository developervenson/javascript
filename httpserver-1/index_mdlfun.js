const express = require("express");
const app = express();

const port = 3001;

const bodyParser = require("body-parser");
app.use (bodyParser.json());

function checkcredmiddleware (req,res,next)
{
    if (!(req.header.username == 'Venkat' || req.header.password == 'pass') )
    {
        console.log ("Log-The credentials are wrong");
        res.status(400).json({"msg":"The credentials are wrong"});
    }
    else {
        next();
    };
};

function checkparammiddleware (req,res,next) 
{
    if (!(req.query.num==2))
    {
        console.log("Log-The Query parameters are wrong");
        res.status(400).json({"msg":"The Query parameters are wrong"});
    }
    else {
        next();
    };
};

app.get('/getdata', checkcredmiddleware, checkparammiddleware, function (req,res)
{
console.log ("Accessing the app now");

console.log(req.headers);
console.log(req.headers.username);
console.log(req.headers.password);

console.log (req.query);
console.log (req.query.num);

console.log (req.body);
console.log (req.body.name);
console.log (req.body.age);
console.log (req.body.position);
console.log (req.body.location);
console.log (req.body["grades"]);
console.log (req.body["grades"][2]);
console.log (req.body["spec"]);
console.log (req.body["spec"]["design"]);

res.send ("Hello World");
});

app.listen (port, function()
{
console.log ("Application is listening on Port", port);
});