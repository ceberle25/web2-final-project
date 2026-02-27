window.addEventListener("load", () => {
    const form = document.querySelector("#contactForm");
 
    if (!form) return;
 
    const txtFirstName = form.querySelector("[name='firstName']");
    const txtLastName  = form.querySelector("[name='lastName']");
    const txtEmail     = form.querySelector("[name='email']");
    const txtComments  = form.querySelector("[name='comments']");
 
    const vFirstName = form.querySelector("#vFirstName");
    const vLastName  = form.querySelector("#vLastName");
    const vEmail     = form.querySelector("#vEmail");
    const vComments  = form.querySelector("#vComments");
 
    // validates an email address (returns true if valid, false if not)
    function validateEmailAddress(email) {
        var regExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regExp.test(email);
    }
 
    form.addEventListener("submit", (evt) => {
        if (validate()) {
            // form is valid — let it submit to the server
        } else {
            evt.preventDefault();
        }
    });
 
    const validate = () => {
        let isValid = true;
 
        const spans = document.querySelectorAll(".validation");
        spans.forEach((s) => s.innerHTML = "");
 
        // validate first name
        if (txtFirstName.value == "") {
            vFirstName.innerHTML = "Please enter your first name.";
            isValid = false;
        }
 
        // validate last name
        if (txtLastName.value == "") {
            vLastName.innerHTML = "Please enter your last name.";
            isValid = false;
        }
 
        // validate email
        if (txtEmail.value == "") {
            vEmail.innerHTML = "Please enter your email.";
            isValid = false;
        } else if (!validateEmailAddress(txtEmail.value)) {
            vEmail.innerHTML = "Email address is not valid.";
            isValid = false;
        }
 
        // validate comments
        if (txtComments.value == "") {
            vComments.innerHTML = "Please enter your message.";
            isValid = false;
        }
 
        return isValid;
    }
});
 