document.getElementById('login-btn').addEventListener('click', function () {



    let emailField = document.getElementById('email');
    let userEmail = emailField.value;

    let passwordField = document.getElementById('password');

    let userPassword = passwordField.value;



    if (userEmail == 'son@dad.com' && userPassword == 'tushar') {

        window.location.href = 'bank.html'

    }


})