// login/sign-up form
let modal = $(".modal-bg");
let login = $("#login-btn");
let register = $("#register-btn");
let recovery = $("#recovery-link");

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
	$("#psw-recovery").css("display", "none");
});

register.click(function() {
	$("#register").css("display", "block");
	register.addClass("current");
	$("#login").css("display", "none");
	login.removeClass("current");
	$("#psw-recovery").css("display", "none");
});

recovery.click(function() {
	$("#psw-recovery").css("display", "block");
	$("#login").css("display", "none");
	login.removeClass("current");
});