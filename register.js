$(document).ready(function() {
    $('input').focus(function() {
        $(this).val("");
    });
    $('#connect').click(function() {
        if (!passwordsMatch()) {
            $('#passWarn').show();
            return;
        }
        var reg = "http://www.nimitae.sg/hayhay/server/register.php";
        $.ajax({
            url: reg,
            type: "POST",
            data: {username: valByName('email'), password: valByName('password')},
            success: register,
            error: whoops
        });
        alert('click!');
    });
});

function valByName(n) {
    return document.getElementsByName(n)[0].value;
};

function register(data) {
    console.log(data);
    alert("yes");
    localStorage.setItem('user', valByName('username'));
    localStorage.setItem('pass', valByName('pass'));
    window.location.replace("http://localhost:63342/angelhack/gab.html");
};

function whoops(xhr, ajaxOptions, throwError) {
    alert("no");
    alert(xhr.status);
    alert(xhr.responseText);
};

function passwordsMatch() {
    return valByName('password') == valByName('repeatpassword');
}