function Validate(){
    if(document.MyForm.firstname.Value == ""){
        alert("Veuillez entrez votre prénom");
        document.MyForm.firstname.focus();
        return false;
    }
    else if(document.MyForm.lastname.Value == ""){
        alert("Veuillez entrez votre nom");
        document.MyForm.lastname.focus();
        return false;
    }
    else if(document.MyForm.email.Value == ""){
        alert("Veuillez entrez votre email");
        document.MyForm.email.focus();
        return false;
    }
    else if(document.MyForm.message.Value == ""){
        alert("Veuillez entrez votre message");
        document.MyForm.message.focus();
        return false;
    }
    else{
        alert("Votre message à bien été envoyé!");
        return true;
    }
}