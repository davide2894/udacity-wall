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

    $(".udacity-book-container").click(function () {
        $(this).css("display", "none");
        $(".wall-wrapper").css("display", "flex");
    });


    // HOMEPAGE
    $(".logo").click(function () {
        $('.message-container').css('display', 'none');
        $('.all-container').css('display', 'none');
        $('.udacity-book-container').css('display', 'none');
        $('.wall-wrapper').css('display', 'flex');
    })
    $(".logo-side").click(function () {
        $('.message-container').css('display', 'none');
        $('.all-container').css('display', 'none');
        $('.udacity-book-container').css('display', 'none');
        $('.wall-wrapper').css('display', 'flex');
    })



    //WRITE MESSAGE
    $('#message').click(function (event) {
        event.preventDefault();
        $('#message').val('');
        $('#message').attr('placeholder', '');
    })
    $('.msg-cancel').click(function (event) {
        event.preventDefault();
        $('#message').val('');
        $('#message').attr('placeholder', 'Enter Message Here...');
    })
    $('.menu-write').click(function (event) {
        event.preventDefault();
        $('.all-container').css('display', 'none');
        $('.udacity-book-container').css('display', 'none');
        $('.wall-wrapper').css('display', 'none');
        $('.message-container').css('display', 'block');
    })
    $('.msg-submit').click(function (event) {
        event.preventDefault();
        //TO DO the code for submitting the form goes here
        $('.message-container').css('display', 'none');
        $('.all-container').css('display', 'none');
        $('.wall-wrapper').css('display', 'block');
    })




    //MY MESSAGES
    //TO DO function for loading entries
    $('.msg-delete').click(function (event) {
        event.preventDefault();
        //TO DO function for delete entry
    })
    $('.menu-mymemo').click(function (event) {
        event.preventDefault();
        $('.all-container').css('display', 'block');
        $('.message-container').css('display', 'none');
        $('.udacity-book-container').css('display', 'none');
        $('.wall-wrapper').css('display', 'none');
    })
    $('.msg-edit').click(function (event) {
        event.preventDefault();
        //TO DO function for edit entry
        $('.message-container').css('display', 'none');
        $('.all-container').css('display', 'none');
        $('.read-all').css('display', 'block');
    })

    $('.logo').click(function (event) {
        event.preventDefault();
        $('.all-container').css('display', 'none');
        $('.message-container').css('display', 'none');
        $('.read-all').css('display', 'block');
    })

    //TODO code for reading messages goes here
    $('.msg-left').click(function (event) {
        event.preventDefault();
        //until the code for reading isn't here, do-nothing
    })
    $('.msg-right').click(function (event) {
        event.preventDefault();
        //until the code for reading isn't here, do-nothing
    })

});
