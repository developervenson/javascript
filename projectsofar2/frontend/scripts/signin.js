//ProjectSoFar-2
//for SignIn page

//Validate Input Fields and Call Backend
function signin() {

    if (validateInputs()) {

        //Getting Authentication Token
        let email = document.getElementById("email").value;
        let psword = document.getElementById("psword").value;

        fetch("http://127.0.0.1:4001/signinuser?" + "email=" + email + "&psword=" + psword)
        
            .then(function (response) {
                //URL redirection Logic Start
                if (response.redirected) {
                    console.log("Redirected to Signin page");
                    window.location.href = response.url;
                } else {
                    //URL redirection Logic Stop
                    response.json()
                        .then(function (finalData) {
                            console.log(finalData);
                        });
                };
            });
    }
    else {
        console.log("Error Found in Validation");
    };
};

/******************************/
//Validation Routine definition
/******************************/
function validateInputs() {
    let valResult = true;
 
    //Email validation
    let emailvalu = document.getElementById("email").value;
    
    if (emailvalu != "") {
        valResult = true;
        setSuccess(document.getElementById("email"));
    } else {
        valResult = false;
        setError (document.getElementById("email"), "Email is required");
    };

    //Password Validation
    let passvalu = document.getElementById("psword").value;

    if (passvalu != "") {
        valResult = true;
        setSuccess(document.getElementById("psword"));
    } else {
        valResult = false;
        setError (document.getElementById("psword"), "Password is required");
    };

    return valResult;
};

/*************************/
//ERROR Routine definition
/*************************/
function setError(elem, message) {
    
    //Stting Success/Error class in current element, the inputbx
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
    //Stting Success/Error class in current element, the inputbx
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
    document.getElementById("email").value = "";
    document.getElementById("psword").value = "";
    document.getElementById("cpsword").value = "";

    //clearing validation classes from inptbx, valmsg emelemts
        
    let removeOninptbxElem = document.getElementsByClassName("inptbx");
    
    for (let i=0; i<removeOninptbxElem.length; i++) {
        removeOninptbxElem[i].classList.remove("error");
        removeOninptbxElem[i].classList.remove("success");
    };

    let removeOnvalmsgElem = document.getElementsByClassName("valmsg");
    
    for (let i=0; i<removeOnvalmsgElem.length; i++) {
        removeOnvalmsgElem[i].classList.remove("error");
        removeOnvalmsgElem[i].classList.remove("success");
    };
    
};