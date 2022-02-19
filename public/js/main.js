(function ($) {

    "use strict";
    $(".carousel-inner .item:first-child").addClass("active");
    /* Mobile menu click then remove
    ==========================*/
    $(".mainmenu-area #primary_menu li a").on("click", function () {
        $(".navbar-collapse").removeClass("in");
    });
    /* Scroll to top
    ===================*/
    $.scrollUp({
        scrollText: '<i class="lnr lnr-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    /* testimonials Slider Active
    =============================*/
    $('.gallery-slide').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        navText: ['<i class="lnr lnr-chevron-left"></i>', '<i class="lnr lnr-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2
            },
            1280: {
                items: 3
            },
            1500: {
                items: 4
            }
        }
    });
    /* testimonials Slider Active
    =============================*/
    $('.team-slide').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        navText: ['<i class="lnr lnr-chevron-left"></i>', '<i class="lnr lnr-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $(".toggole-boxs").accordion();
    /*---------------------------
    MICHIMP INTEGRATION
    -----------------------------*/
    // $('#mc-form').ajaxChimp({
    //     url: 'https://quomodosoft.us14.list-manage.com/subscribe/post?u=b2a3f199e321346f8785d48fb&amp;id=d0323b0697', //Set Your Mailchamp URL
    //     callback: function (resp) {
    //         if (resp.result === 'success') {
    //             $('.subscrie-form, .join-button').fadeOut();
    //             $('body').css('overflow-y', 'scroll');
    //         }
    //     }
    // });

    /*-- Smoth-Scroll --*/
    $('.mainmenu-area a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

        
    /*--------------------
       MAGNIFIC POPUP JS
       ----------------------*/
    var magnifPopup = function () {
        $('.popup').magnificPopup({
            type: 'iframe',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function (openerElement) {
                    // openerElement is the element on which popup was initialized, in this case its <a> tag
                    // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    };
    // Call the functions
    magnifPopup();
    /* Preloader Js
    ===================*/
    $(window).on("load", function () {
        $('.preloader').fadeOut(500);
        /*WoW js Active
        =================*/
        new WOW().init({
            mobile: false,
        });
    });
})(jQuery);





const q0 = document.querySelector('.q0')
const q1 = document.querySelector('.q1')
const q2 = document.querySelector('.q2')
const q3 = document.querySelector('.q3')
const q4 = document.querySelector('.q4')

const myForm = document.getElementById('survey')
const keto = document.getElementById('keto')
const balanced = document.getElementById('balanced')
const vegan = document.getElementById('vegan')
const yesGoals = document.getElementById('noGoals')
const postCodeCheck = document.getElementById('postCodeCheck')
const nextPage = document.querySelector('.nextPage')
const input = document.getElementById('postCode')

const submitBtn = document.querySelector('#submitButton')


function surveryStarter() {
	q0.style.display = 'none'
    q1.style.display = 'block'
    q1.style.animation = 'fadeIn 2s'
    document.querySelector('.home-area').style.display = 'none'
    document.querySelector('.howItWorks').style.display = 'none'
    document.querySelector('.imgSection').style.display = 'none'
    document.querySelector('.footPart').style.display = 'none'  
    document.querySelector('.interestedSect').style.display = 'none'  
    }

function dietOptions() {
	q1.style.display = 'none'
	q2.style.display = 'block'
    q2.style.animation = 'fadeIn 1s'
}
function dietGoal() {
	q2.style.display = 'none'
	q3.style.display = 'block'
    q3.style.animation = 'fadeIn 1s'
}
function postalChecker(){
	q3.style.display = 'none'
	q4.style.display = 'block'
    q4.style.animation = 'fadeIn 1s'
	submitBtn.style.display = 'inline-block'
    
}

// ["click", "keypress"].forEach(ev=>{
//     postCodeCheck.addEventListener(ev, handleEvent);
//   });
postCodeCheck.addEventListener("click", is_ukPostCode)
input.addEventListener("keydown", (e)=> {
    if (e.keyCode ==13){
            return is_ukPostCode()
        }
    }
)

function is_ukPostCode(){
    fetch("./postcodes.json")
    .then(res => res.json())
    .then(data => {

    const userInput = input.value.toLowerCase().replaceAll(" ", "")
    const postCodes = data.postCodes


    regexp = /^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i;
  
        if (postCodes.some(x => userInput.includes(x.toLowerCase())) && regexp.test(userInput))
          {
			document.getElementById('postCode').style.border = '2px solid green'
			document.querySelector('.fas.fa-check-circle').style.display = 'inline'
			document.querySelector('.fas.fa-times-circle').style.display = 'none'

			postCodeCheck.style.display = 'none'
			setInterval(postalChecker, 1000)
		}
        else
          {
			document.getElementById('postCode').style.border = '2px solid red'
			document.querySelector('.fas.fa-times-circle').style.display = 'inline'
          }
        })
}

function phone_number(){
	const phoneInp = document.getElementById('phone')
	const numInput = phoneInp.value.replaceAll(' ', '')

	phonNumVal = /^(?:(?:00)?44|0)7(?:[45789]\d{2}|624)\d{6}$/;
	
	if(phonNumVal.test(numInput) && numInput != '07777777777'){
		console.log(('THERES A MATCH'), numInput)
		document.getElementById('phoneNumInval').style.display = 'none'
		phoneInp.style.border = '2px solid green'
		submitBtn.style.background = '#73ebd1'
		submitBtn.style.border = '0.3rem solid #73ebd1'
        submitBtn.style.color = '#3e5367'
		submitBtn.disabled = false
	}else if(numInput.length === 10 && numInput.split('').at(0) == '7' && numInput != '7777777777'){
		console.log(('THERES ANOTHER MATCH'), numInput.length)
		document.getElementById('phoneNumInval').style.display = 'none'
		phoneInp.style.border = '2px solid green'
		submitBtn.style.background = '#73ebd1'
		submitBtn.style.border = '0.3rem solid #73ebd1'
        submitBtn.style.color = '#3e5367'
		submitBtn.disabled = false
	}else{
		document.getElementById('phoneNumInval').style.display = 'block'
		console.log(('NOPE'), numInput);
		phoneInp.style.border = '2px solid rgb(122 0 0)'
		submitBtn.disabled = true
		submitBtn.style.background = '#A8AEB5'
		submitBtn.style.border = '0.3rem solid #A8AEB5'
        submitBtn.style.color = '#73ebd1'
	}
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

myForm.addEventListener('submit', ()=>{
	submitBtn.setAttribute('disabled', 'disabled')
	submitBtn.value = 'Please wait...'
}, false)