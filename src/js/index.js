$(function(){
	function welcomeDisappear() {
		$('.welcome-gradient').addClass('welcome-away');
	}
	function showPage() {
		$('.rest-of-page').css('display','block');
	}
	setTimeout(welcomeDisappear, 1600);
	setTimeout(showPage, 1600);
})