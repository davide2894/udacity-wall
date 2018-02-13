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
    $("#message").focus(function() {
    var $this = $(this);
    $this.select();

    // Work around Chrome's little problem
    $this.mouseup(function() {
        // Prevent further mouseup intervention
        $this.unbind("mouseup");
        return false;
    })
    // forbid the user to type < or > characters on desktop and mobile
    // solution adapted from https://stackoverflow.com/questions/36753548/keycode-on-android-is-always-229
        .on("textInput", function(e) {
                 var keyCode = e.originalEvent.data.charCodeAt(0);
                 if(keyCode == 60 || keyCode == 62){
                   e.preventDefault();
                 }
        });
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

    
    $(function () {
    function welcomeDisappear() {
        $('.welcome-gradient').addClass('welcome-away');
    }

    function showPage() {
        $('.page-wrapper').css('display', 'block');
    }
    setTimeout(welcomeDisappear, 600);
    setTimeout(showPage, 600);

    /*
     * Main Page
     */
    // hamburger menu
    $('.menu-toggle').click(function () {
        $('.settings-panel').toggleClass('settings-open');

        $('.settings-opacity').toggleClass('opacity-open');
    })

    //SPLIT MESSAGES & DISPLAY MESSAGES on Window load

    function splitMessage() {
        let messageArray = $('#messages-string').val();
        let msgs='';

        messageArray = messageArray.split('&');
        messageArray.splice(0,1);
                messageArray.reverse();
        //remove all :
        for(let i=0; i<messageArray.length; i++){
            messageArray[i] = messageArray[i].replace(/.+?:/, "");
        }
        //generate HTML for display
        // set the generate HTML on the page
        let j=0;
        while(j<messageArray.length){
            /*
            $('.wall').html('<div class="display-message">\n    <span class="part-message">'+messageArray[j]+'</span><br>\n    <span class="part-user">'+messageArray[j+1]+'</span>\n</div>\n');
            */
            msgs +='<div class="display-message">\n    <span class="part-message">';
            msgs += messageArray[j+1];
            msgs += '"<br><br></span>\n    <span class="part-user">';
            msgs += messageArray[j];
            msgs += '</span>\n</div>\n';

            j+=2;
        }
        $('.wall').append(msgs);

        console.log(messageArray);
        console.log(msgs);

        //Display like a slideshow

        let slideIndex = 1;
        showDivs(slideIndex);

        function plusDivs(n) {
          showDivs(slideIndex += n);
        }

        function showDivs(n) {
          let i;
          let x = $(".display-message");
          if (n > x.length) {slideIndex = 1}
          if (n < 1) {slideIndex = x.length}
          for (i = 0; i < x.length; i++) {
             x[i].style.display = "none";
          }
          x[slideIndex-1].style.display = "block";
        }

        $('.msg-left').click(function () {
            plusDivs(-1);
        })
        $('.msg-right').click(function () {
            plusDivs(1);
        })
    }



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
        splitMessage();
    });


    // HOMEPAGE
    $(".logo").click(function () {
        $('.message-container').css('display', 'none');
        $('.all-container').css('display', 'none');
        $('.udacity-book-container').css('display', 'none');
        $('.wall-wrapper').css('display', 'flex');
        splitMessage();
    })
    $(".logo-side").click(function () {
        $('.message-container').css('display', 'none');
        $('.all-container').css('display', 'none');
        $('.udacity-book-container').css('display', 'none');
        $('.wall-wrapper').css('display', 'flex');
        splitMessage();
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

			// SHOW/HIDE LOGOUT BUTTON
		function loginLogout(){
			var isLogged = $("#login-string").val();
			if(isLogged === "true"){
				$(".btn").css("display", "inline-block");
				$("#logout").css("display", "none");
			}
			else if(isLogged === "false" || isLogged === "null" || isLogged === null) {
				$(".btn").css("display", "none");
				$("#logout").css("display", "inline-block");
			}
		}
		
	// ERROR MESSAGES
	var error = $("#error-string").val();
	function showError(){
		switch(error){
			case "100":
				alert("User with this username already exists!");
				break;
			case "101":
				alert("The passwords must be the same");
				break;
			case "102":
				alert("Registration failed!");
				break;
			case "103":
				alert("User with that username doesn't exist!");
				break;
			case "104":
				alert("You have entered wrong password, try again!");
				break;
		}		
	}

});

});
