$(function () {
    function welcomeDisappear() {
        $('.welcome-gradient').addClass('welcome-away');
    }

    function showPage() {
        $('.page-wrapper').css('display', 'block');
    }
    setTimeout(welcomeDisappear, 1600);
    setTimeout(showPage, 1600);


    /*
     * Main Page
     */
    // hamburger menu
    $('.menu-toggle').click(function () {
        $('.settings-panel').toggleClass('settings-open');

        $('.settings-opacity').toggleClass('opacity-open');
    })

    // login/sign-up
    // login/sign-up form
    let modal = $(".modal-bg");
    let login = $("#login-btn");
    let register = $("#register-btn");

    /* Show the modal */
    $("#form-opening").click(function () {
        modal.css("display", "block");
    });

    /* Close the modal */
    $(".close").click(function () {
        modal.css("display", "none");
    });

    /* Change modal tab */
    login.click(function () {
        $("#login").css("display", "block");
        login.addClass("current", "slide-in");
        $("#register").css("display", "none");
        register.removeClass("current");
    });

    register.click(function () {
        $("#register").css("display", "block");
        register.addClass("current")
        $("#login").css("display", "none");
        login.removeClass("current")
    });
    
    $(".udacity-book-container").click(function(){
        $(this).css("display", "none");
        $(".book-wrapper").css("display", "flex");
    })

});
