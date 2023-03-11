


function validatePassword(){

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const message = document.getElementById("message");

    if(password != confirmPassword){
        document.getElementById("password").style.color = "red";
        document.getElementById("confirm-password").style.color = "red";
        document.getElementById("message").textContent = "Passwords must match.";
    } else {
        document.getElementById("password").style.color = "black";
        document.getElementById("confirm-password").style.color = "black";
        document.getElementById("message").textContent = "";
    }

}