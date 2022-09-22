var signupName = document.getElementById('signupName');
var signupEmail = document.getElementById('signupEmail');
var signupPassword = document.getElementById('signupPassword');
var signinEmail = document.getElementById('signinEmail');
var signinPassword = document.getElementById('signinPassword');
var users;

(function () {

    if (localStorage.getItem("dataToUsers") == null) {
        users = [];
    } else {
        users = JSON.parse(localStorage.getItem("dataToUsers"));
    }
})();

function errorSign() {
    for (var i = 0; i < users.length; i++) {
        if (users[i].email == signupEmail.value) {
            return false
        }
    }
}

function SignUp() {
    if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        document.getElementById('errorSign').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        false
    }
    else if (errorSign() == false) {
        document.getElementById('errorSign').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        false
    }
    else {
        var user = {
            name: signupName.value,
            email: signupEmail.value,
            password: signupPassword.value,
        };
        users.push(user);
        localStorage.setItem("dataToUsers", JSON.stringify(users));
    }
}


function Login() {

    if (signinPassword.value == "" || signinEmail.value == "") {
        document.getElementById('flaw').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'

    }

    else {
        var Emaill = signinEmail.value;
        var Passwordd = signinPassword.value;

        for (var i = 0; 1 < users.length; i++) {

            if (users[i].email == Emaill && users[i].password == Passwordd) {
                location.replace('welcom.html');
                var bbb = localStorage.getItem('dataToUsers', users[i].name)
                document.getElementById("username").innerHTML = `<h1 class=" text-info" >welcome${bbb}</h1>`
            }
        }
    }
}

