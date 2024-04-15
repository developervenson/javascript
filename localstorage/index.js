const express = require("express");
const app = express();

const port = 4001;

const jwt = require("jsonwebtoken");
const jwtpassword = "1234qwerty";

const cors = require("cors");

app.use(cors());

app.get("/signin", function(req, res){
    console.log(req.query);
    console.log(req.query["email"]);
    console.log(req.query["password"]);
    let authtoken = jwt.sign({email: req.query["email"]}, jwtpassword)
    res.json({
        token: authtoken
    });
})


app.listen(port, function(){
    console.log("HTTP service listening on port:" + port);
})

