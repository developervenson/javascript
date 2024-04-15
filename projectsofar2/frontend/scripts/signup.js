//ProjectSoFar-2
//for SignUp page

//Validate Input Fields and Call Backend
function signup() {
       
    if (validateInputs()) {
               
        //Gender Check and populate Gender Variable for Body
        let gendervalu ="";
        
        if (document.getElementById("mgender").checked) {
            gendervalu = "Male";
        } else if (document.getElementById("fgender").checked) {
            gendervalu = "Female";
        } else {
            gendervalu = "";
        };

        //Posting User Data to HTTP Server

        fetch ("http://127.0.0.1:4001/signupuser", {
        method: "POST",
        body: JSON.stringify ({
           name: document.getElementById("name").value,
           gender:  gendervalu,
           dob: document.getElementById("dob").value,
           email: document.getElementById("email").value,
           psword: document.getElementById("psword").value,
           cpsword: document.getElementById("cpsword").value
            })
        })
        .then (function(response) {
            //URL redirection Logic Start
            if (response.redirected) {
                console.log("Redirected to Signin page");
                window.location.href = response.url;
            } else {
            //URL redirection Logic Stop
                response.json()
                .then(function(finalData){
                    console.log(finalData);
                });
            };
        });
    }
    else {
        console.log ("Error Found in Validation");
    };
};

/******************************/
//Validation Routine definition
/******************************/
function validateInputs() {
    let valResult = true;
 
    //Name Validation
    let namevalu = document.getElementById("name").value;

    if (namevalu != "") {
        setSuccess(document.getElementById("name"));
    } else {
        valResult = false;
        setError (document.getElementById("name"), "Name is required");
    };

    //Gender validation
    //value of the radio button should be checked using 'checked' function
    let mgendervalu = document.getElementById("mgender").checked;
    let fgendervalu = document.getElementById("fgender").checked;

    if ((mgendervalu) || (fgendervalu)) {
        setSuccess (document.getElementById("gender"));
    } else {
        valResult = false;
        setError (document.getElementById("gender"), "Gender is required");
    };

    //DOB validation
    let dobvalu = document.getElementById("dob").value;
    
    if (dobvalu != "") {
        setSuccess(document.getElementById("dob"));
    } else {
        valResult = false;
        setError (document.getElementById("dob"), "DOB is required");
    };

    //Email validation
    let emailvalu = document.getElementById("email").value;
    
    if (emailvalu != "") {
        setSuccess(document.getElementById("email"));
    } else {
        valResult = false;
        setError (document.getElementById("email"), "Email is required");
    };

    //Password Validation
    let passvalu = document.getElementById("psword").value;

    if (passvalu != "") {
        setSuccess(document.getElementById("psword"));
    } else {
        valResult = false;
        setError (document.getElementById("psword"), "Password is required");
    };

    let cpassvalu = document.getElementById("cpsword").value;

    if (cpassvalu == "") {
        valResult = false;
        setError (document.getElementById("cpsword"), "Re-enter the password for confirmation");
    } else if (cpassvalu == passvalu) {
        setSuccess(document.getElementById("cpsword"));
    } else {
        valResult = false;
        setError (document.getElementById("cpsword"), "Not matching with the password entered");
    };

    return valResult;
};

/*************************/
//ERROR Routine definition
/*************************/
function setError(elem, message) {
    
    //Stting Success/Error class in current element, the inputbx and inptrd
    elem.classList.remove("success")
    elem.classList.add("error")

    
    //Stting Success/Error class in the valmsg element

    //Finding the parent element of the input element
    let parentElem = elem.parentElement;
    //Finding the valmsg element on the input element
    let valmsgElem = parentElem.querySelector(".valmsg")

    valmsgElem.classList.remove("success")
    valmsgElem.classList.add("error")

    valmsgElem.innerText = message;
};


/**************************/
//SUCCESS Routine definition
/**************************/
function setSuccess(elem) {
    //Stting Success/Error class in current element, the inputbx and inptrd
    elem.classList.remove("error")
    elem.classList.add("success")

    //Stting Success/Error class in the valmsg element

    //Finding the parent element of the input element
    let parentElem = elem.parentElement;
    //Finding the valmsg element on the input element
    let valmsgElem = parentElem.querySelector(".valmsg")

    valmsgElem.classList.remove("error")
    valmsgElem.classList.add("success")

    valmsgElem.innerText = "validated";
    
};


/*******************/
//Reset Input fields
/*******************/
function reset() {
    
    //clearing values from each of the input fields
    document.getElementById("name").value = "";
    //geneder is not getting cleared.. Need to check - Start
    document.getElementById("mgender").value = "";
    document.getElementById("fgender").value = "";
    //Stop
    document.getElementById("dob").value = "";
    document.getElementById("email").value = "";
    document.getElementById("psword").value = "";
    document.getElementById("cpsword").value = "";

    //clearing validation classes from inptbx, inptrd, valmsg emelemts
        
    let removeOninptbxElem = document.getElementsByClassName("inptbx");
    
    for (let i=0; i<removeOninptbxElem.length; i++) {
        removeOninptbxElem[i].classList.remove("error");
        removeOninptbxElem[i].classList.remove("success");
    };

    let removeOninptrdElem = document.getElementsByClassName("inptrd");
    
    for (let i=0; i<removeOninptrdElem.length; i++) {
        removeOninptrdElem[i].classList.remove("error");
        removeOninptrdElem[i].classList.remove("success");
    };

    let removeOnvalmsgElem = document.getElementsByClassName("valmsg");
    
    for (let i=0; i<removeOnvalmsgElem.length; i++) {
        removeOnvalmsgElem[i].classList.remove("error");
        removeOnvalmsgElem[i].classList.remove("success");
    };
    
};