
const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

var recieveEmial=localStorage.getItem("email");
var recievepass=localStorage.getItem("password");



form.addEventListener("submit",e=>{


      
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	

    if(passwordValue==""||emailValue==""||!isEmail(emailValue))
    {
        alert("please enter valid data");
         e.preventDefault();
         checkInputs();
    }
    else if(emailValue!=recieveEmial|| passwordValue!=recievepass ){
        alert("you are not a user please register first");
        e.preventDefault();

    }


});

function checkInputs() {
	
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();

    if(emailValue==""){
        checkerror(email,"email can not be Empty")
    }
    else if(!isEmail(emailValue)){
        checkerror(email,"E-mail Not valid")
    }
    else{
        success(email);
    }

    if(passwordValue==""){
        checkerror(password,"password can not be Empty")
    }
    else{
        success(password);
    }
}


    email.onblur=function(){

        const emailValue=email.value;

        if(emailValue==""){
            checkerror(email,"Emial can not be Empty")
        }
        else if(!isEmail(emailValue)){
            checkerror(email,"Enter valid email")
        }
        else{
            success(email);
        }
    }

    password.onblur=function(){

        const passwordValue=password.value;

        if(passwordValue==""){
            checkerror(password,"password can not be Empty")
        }
       
        else{
            success(password);
        }
    }

function checkerror(input, message) {
	const formControl = input.parentElement;
    formControl.className = 'form-contrl error';
	const small = formControl.querySelector('small');
	small.innerText = message;
}

function success(input){
    const formctr=input.parentElement;
    formctr.className="form-contrl success"
}





