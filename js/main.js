(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    

    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);
 
function signUp(){
    document.getElementById('log_id').style.zIndex = '1';
    document.getElementById('sign_id').style.zIndex = '2';
    
    document.getElementById('ipt_log_a').value = '';
    document.getElementById('ipt_log_b').value = '';
}
function signIn(){
    document.getElementById('log_id').style.zIndex = '2';
    document.getElementById('sign_id').style.zIndex = '1';

    document.getElementById('ipt_sign_a').value = '';
    document.getElementById('ipt_sign_b').value = '';
}

function registerUser(){
var username = document.getElementById('ipt_sign_email').value;
var password = document.getElementById('ipt_sign_pass').value;

console.log(username);
console.log(password);

var user = {
    username: username,
    password: password
};

var json = JSON.stringify(user);
localStorage.setItem(username, json);
console.log('user added');
alert('user registered successfully!');
}

function loginUser(){
var username = document.getElementById('ipt_log_a').value;
var password = document.getElementById('ipt_log_b').value;

var user = localStorage.getItem(username);
var data = JSON.parse(user);
console.log(data);

    if(user == null){
        alert('wrong username!');
    } else if(username == data.username && password == data.password){
        window.location.href = "../index.html";
        alert('successfully logged in!');
    } else {
        alert('wrong password!');
    }
}
