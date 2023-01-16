
////////////////display username


var username = document.getElementById('name');

var y = localStorage.getItem('username');
console.log(y);
username.innerText = y;


////////////////display email

var myemail = document.getElementById('email');


var sortemail = localStorage.getItem('email');
console.log(sortemail);
myemail.innerText = sortemail;



/////////////////////// change password




var changepass = document.getElementById('old_password');
changepass.addEventListener('click', () => {
    window.open('change.html', '_blank', "width=450,height=400,top=200,left=600",);
})





