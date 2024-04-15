//HTTP Server for ProjectSoFar2

const express = require ("express");
const app = express();

const cors = require ("cors");
const zod = require ("zod");

const port = 4001;

//In-Memory Database
let appUsers = [];

//Express call to parse the Request Body
app.use(express.json({
    type: "*/*"
}));

//Middleware functions
//ZOD Schemas

let undefinedVali = zod.undefined();
//let nullVali = zod.null(); Not required to be checked as string(), date(), email() functions already perform the null check
let stringVali = zod.string();
let genderVali = zod.union([zod.literal("Male"), zod.literal("Female")]);
let dateVali = zod.date();
let emailVali = zod.string().email();
let stringmin1Vali = zod.string().min(1);
let stringmin5Vali = zod.string().min(5);
let stringmax12Vali = zod.string().max(12);

//Validation Function
function validationcheck (req, res, next) {
       
    console.log("Validation Starts..")
    let valResult = true;
    let valErrors = [];
    let i=0;

    let route = req.path
    if (route == "/signupuser") {
        
        /******************/
        /*Name Validations*/
        /******************/

        //Undefined Value Check
        let nameValiUndefiRes = undefinedVali.safeParse(req.body["name"]);

        if (nameValiUndefiRes.success) {
            valResult = false;
            valErrors[i++] = {
                datakey: "name",
                errormsg: "Expected String, received undefined"
            };
        } else {

            //String value Check
            let stringValiRes = stringVali.safeParse(req.body["name"]);

            if (stringValiRes.error) {
                valResult = false;
                valErrors[i++] = {
                    datakey: "name",
                    errormsg: stringValiRes.error["errors"][0]["message"]
                };
            }; 

            //String min value Check
            let stringmin1ValiRes = stringmin1Vali.safeParse(req.body["name"]);

            if (stringmin1ValiRes.error) {
                valResult = false;
                valErrors[i++] = {
                    datakey: "name",
                    errormsg: stringmin1ValiRes.error["errors"][0]["message"]
                };
            }; 
        };

        /********************/
        /*Gender Validations*/
        /********************/

        //Undefined Value Check
        let genderValiUndefiRes = undefinedVali.safeParse(req.body["gender"]);
        
        if (genderValiUndefiRes.success) {
            valResult = false;
            valErrors[i++] = {
                datakey: "gender",
                errormsg: "Expected String, received undefined"
            };
        } else {

            //Gender value Check
            let genderValiRes = genderVali.safeParse(req.body["gender"]);

            if (genderValiRes.error) {
                valResult = false;
                valErrors[i++] = {
                    datakey: "gender",
                    errormsg: genderValiRes.error["errors"][0]["message"]
                };
            };
        };

        /******************/
        /*DOB Validations*/
        /******************/

        //Undefined Value Check
        let dateValiUndefiRes = undefinedVali.safeParse(req.body["dob"]);

        if (dateValiUndefiRes.success) {
            valResult = false;
            valErrors[i++] = {
                datakey: "dob",
                errormsg: "Expected Date, received undefined"
            };
        } else {

            let dobindate =new Date(req.body["dob"]);
            //DOB value Check
            let dateValiRes = dateVali.safeParse(dobindate);

            if (dateValiRes.error) {
                valResult = false;
                valErrors[i++] = {
                    datakey: "dob",
                    errormsg: dateValiRes.error["errors"][0]["message"]
                };
            };
        };

        /*******************/
        /*Email Validations*/
        /*******************/

        //Undefined Value Check
        let emailValiUndefiRes = undefinedVali.safeParse(req.body["email"]);

        if (emailValiUndefiRes.success) {
            valResult = false;
            valErrors[i++] = {
                datakey: "email",
                errormsg: "Expected Date, received undefined"
            };
        } else {

            //DOB value Check
            let emailValiRes = emailVali.safeParse(req.body["email"]);

            if (emailValiRes.error) {
                valResult = false;
                valErrors[i++] = {
                    datakey: "dob",
                    errormsg: emailValiRes.error["errors"][0]["message"]
                };
            };
        };

        /*********************/
        /*Password Validations*/
        /*********************/

        //Undefined Value Check
        let pswordValiUndefiRes = undefinedVali.safeParse(req.body["name"]);

        if (pswordValiUndefiRes.success) {
            valResult = false;
            valErrors[i++] = {
                datakey: "name",
                errormsg: "Expected String, received undefined"
            };
        } else {

            //String value Check
            let stringValiRes = stringVali.safeParse(req.body["name"]);

            if (stringValiRes.error) {
                valResult = false;
                valErrors[i++] = {
                    datakey: "name",
                    errormsg: stringValiRes.error["errors"][0]["message"]
                };
            }; 

            //String min value Check
            let stringmin1ValiRes = stringmin1Vali.safeParse(req.body["name"]);

            if (stringmin1ValiRes.error) {
                valResult = false;
                valErrors[i++] = {
                    datakey: "name",
                    errormsg: stringmin1ValiRes.error["errors"][0]["message"]
                };
            }; 
        };

        if (!valResult) {
            res.status(400).json({
                msg: valErrors
            });
        } else {
            next();
        };     
        
    } else if (route == "/signinuser") {
        console.log("Hai");
        next();
    };
    
};

//CORS call
app.use(cors());

/****************/
//Middleware Calls
/****************/

/****Validation Call***/
app.use(validationcheck);

/*******************/
//Routes - Get Call
/*******************/

app.get("/getdata", function(req,res) {
    console.log(req.path);
    console.log("Get Data Request to HTTP Server");
    /*res.status(200).json({
        msg: "Success"
    });*/
    res.status(200).send(appUsers);
});

/*******************/ 
//Routes - Post Call - SIGNUP
/*******************/
app.post("/signupuser", function(req,res)    { 
    console.log(req.path);
    console.log("Post Data Request to HTTP Server");
    console.log(appUsers);
    console.log(req.body);
    console.log(req.body["name"])
    console.log(req.body["gender"])
    console.log(req.body["dob"])
    console.log(req.body["email"])
    console.log(req.body["psword"])
    console.log(req.body["cpsword"])
    appUsers.push(req.body);
    console.log(appUsers);
    /*res.status(200).json({
        msg: "Success"
    });*/
    //the following returns the 302 status code
    //302 - Found (Previously "Moved Temporarily")
    res.redirect("http://127.0.0.1:5500/frontend/signin.html");
    
});

/*******************/ 
//Routes - Post Call - SIGNIN
/*******************/
app.get("/signinuser", function(req,res){
    console.log(req.path);
    console.log(req.query)
    console.log(req.query["email"])
    console.log(req.query["psword"])

    /*res.status(200).json({
        msg: "Success"
    });*/

    //the following returns the 302 status code
    //302 - Found (Previously "Moved Temporarily")
    res.redirect("http://127.0.0.1:5500/frontend/landing.html");
});

/*******************/
//Routes - Patch Call
/*******************/
app.patch("/patchdata", function(req,res) { 
    console.log(req.path);
    console.log("Patch Data Request to HTTP Server");
    res.status(200).json({
        msg: "Success"
    });
});


/*********************/
//HTTP Server Listening
/*********************/

app.listen(port, function() {
    console.log("ProjectSoFar2 - HTTP Server is listening on port:" + port);
});


/*********************/
//GLOBAL CATCHES
/********************/
app.use(function(err,req,res,next) {
    console.log(err);
    res.status(500).json({
        msg: "Internal Error detected in HTTP Server"
    });
});