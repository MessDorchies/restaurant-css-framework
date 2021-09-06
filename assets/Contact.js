function SubmitMessage(){
    let flag = Validate();
    if(flag){
        alert("Votre message à bien été envoyé!");
    }
}
function Validate(){
    if(document.getElementById("firstname").value === ""){
        alert("Veuillez entrez votre prénom");
        return false;
    }
    else if(document.getElementById("lastname").value === ""){
        alert("Veuillez entrez votre nom");
        return false;
    }
    else if(document.getElementById("email").value === ""){
        alert("Veuillez entrez votre email");
        return false;
    }
    else if(document.getElementById("message").value === ""){
        alert("Veuillez entrez votre message");
        return false;
    }
    else{
        return true;
    }
}