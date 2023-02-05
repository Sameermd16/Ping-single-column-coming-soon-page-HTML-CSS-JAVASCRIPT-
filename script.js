const form = document.getElementById("form");
const email = form["email"].value;


form.addEventListener("submit", e => {
    e.preventDefault();
    if(!validEmail(email)) {
        addError("email", "Please enter a valid email address");
    }else{
        removeError("email");
    }

})

function addError(field, message){
    const formControl = form[field].parentNode;
    formControl.classList.add("error");
    const small = form[field].parentNode.querySelector("small");
    small.innerText = message;
}

function removeError(field){
    const formControl = form[field].parentNode;
    formControl.classList.remove("error");
}


function validEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}