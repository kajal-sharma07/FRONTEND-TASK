
$(document).ready(function () {

    // FAQ Toggle Effect
    $(".question").click(function () {
        $(this).next(".answer").slideToggle();
    });

    // Dynamically Change CSS Properties
    $("#changeColor").click(function () {

        $("body").css({
            "background-color": "#dbeafe"
        });

        $(".container").css({
            "border": "3px solid #2563eb"
        });

    });

    // Show Login Form with Fade In
    $("#showLogin").click(function () {
        $(".login-box").fadeIn(1000);
    });

    // Hide Login Form with Fade Out
    $("#hideLogin").click(function () {
        $(".login-box").fadeOut(1000);
    });

    // Login Form Submit
    $("#loginForm").submit(function (event) {

        event.preventDefault();

        let username = $("#username").val();

        $("#message").text("Welcome " + username + "! Login Successful.");

        $(".login-box").fadeOut(1000);

    });

});
