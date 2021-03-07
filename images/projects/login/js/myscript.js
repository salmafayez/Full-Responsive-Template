
var nameIn = document.getElementById('nameInput'),
    passwordIn = document.getElementById('passwordInput'),
    emailIn = document.getElementById('emailInput'),
    colorIn = document.getElementById('colorInput'),
    nameWarning = document.getElementsByTagName('div')[0],
    passwordWarning = document.getElementsByTagName('div')[1],
    emailWarning = document.getElementsByTagName('div')[2];

nameIn.addEventListener('input',nameValidation);
passwordIn.addEventListener('input',passwordValidation);
emailIn.addEventListener('input',emailValidation);
colorIn.addEventListener('input',overlayBackground)

function nameValidation(){
    nameValue = nameIn.value;
    if( nameValue.length<6 || nameValue.length>12){
        nameWarning.innerText="The name should be between 6 and 12 characters.";
    }
    else{
        nameWarning.innerText="";
    }
}

function passwordValidation(){
    passwordValue = passwordIn.value;
    if( passwordValue.indexOf(' ')!=-1){
        passwordWarning.innerText="The password shouldn’t contain a space.";
    }
    else{
        passwordWarning.innerText="";
    }
}

function emailValidation(){
    emailValue = emailIn.value;
    if( emailValue.indexOf('@')==-1){
        emailWarning.innerText="It is not a valid email.";
    }
    else{
        emailWarning.innerText="";
    }
}

function overlayBackground(){
   document.body.style.background=colorIn.value;
}
