// login/sign-up form
let modal = $(".modal-bg");
let login = $("#login-btn");
let register = $("#register-btn");

/* Show the modal */
$("#form-opening").click(function() {
	modal.css("display", "block");
});

/* Close the modal */
$(".close").click(function() {
	modal.css("display", "none");
});

/* Change modal tab */
login.click(function() {
	$("#login").css("display", "block");
	login.addClass("current", "slide-in");
	$("#register").css("display", "none");
	register.removeClass("current");
});

register.click(function() {
	$("#register").css("display", "block");
	register.addClass("current")
	$("#login").css("display", "none");
	login.removeClass("current")
});