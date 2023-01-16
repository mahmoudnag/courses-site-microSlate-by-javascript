
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');



form.addEventListener("submit",e=>{

    const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

    if(usernameValue==""||passwordValue==""||emailValue==""||password2Value==""||passwordValue!=password2Value ||!isname(usernameValue)||!isEmail(emailValue)){
        alert("please enter valid data");
         e.preventDefault();
         checkInputs();
    }


    localStorage.setItem("email",emailValue);
    localStorage.setItem("password",passwordValue);
    localStorage.setItem('username',usernameValue);

});



function checkInputs() {
	
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
    if(usernameValue==""){
        checkerror(username,"UserName can not be Empty")
    }
    else if(!isname(usernameValue)){
        checkerror(username,"Enter valid Name")
    }
    else{
        success(username);
    }

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

    if(password2Value==""){
        checkerror(password2,"password can not be Empty")
    }
    else if(passwordValue!=password2Value){
        checkerror(password2,"password does not matched")
    }
    else{
        success(password2);
    }



}


    username.onblur=function(){

        const usernameValue=username.value;

        if(usernameValue==""){
            checkerror(username,"UserName can not be Empty")
        }
        else if(!isname(usernameValue)){
            checkerror(username,"Enter valid Name")
        }
        else{
            success(username);
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

    password2.onblur=function(){

        const passwordValue=password.value;
        const password2Value=password2.value;

        if(password2Value==""){
            checkerror(password2,"password can not be Empty")
        }
        else if(passwordValue!=password2Value){
            checkerror(password2,"password does not matched")
        }
        else{
            success(password2);
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
    formctr.className="form-contrl success";

}


   




