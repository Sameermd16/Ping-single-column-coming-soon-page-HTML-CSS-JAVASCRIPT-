const form = document.getElementById("form");
const email = document.getElementById("email");


form.addEventListener("submit", e => {
    e.preventDefault();
    
    checkInputs();

})

function checkInputs() {
    const emailValue = email.value.trim();

    if (emailValue === ""){
        error(email, "Email cannot be empty")
    }else if (!isValidEmail(emailValue)){
        error(email, "Email is invalid");
    }
    else {
        success(email);
    }
}

function error(input, message){
    const flowControl = input.parentElement;
    const small = flowControl.querySelector("small");

    flowControl.classList.add("error");
    small.innerText = message;
}

function success(input){
    const flowControl = input.parentElement;
    const small = flowControl.querySelector("small");

    flowControl.classList.remove("error");
    small.style.display = "hidden";
}

function isValidEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}