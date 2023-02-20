/*
$(document).ready(function () {
    window.onloadCallback = function() {
        var captcha = ['recaptcha1' ,'recaptcha2', 'recaptcha3'];
        for(var x = 0; x < captcha.length; x++){
            if($('#'+captcha[x]).length){
                grecaptcha.render(captcha[x], {'sitekey' : '6Lec3J4UAAAAAGBCZwDzyw80WufqD5WQjPwLQvmC', 'theme' : 'light' });
            }
        }
    };
});
*/

$(document).ready(function(){
    $(".s3-form input, .s3-form textarea").on('focus',function(){

        $.ajax({
            type: "GET",
            url: "https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit",
            dataType: "script",
            cache: true
        }).done(function() {
            if(typeof onloadCallback == 'undefined') {
                onloadCallback()
            }
        });

        window.onloadCallback = function() {
            var captcha = ['recaptcha1' ,'recaptcha2'];
            for(var x = 0; x < captcha.length; x++){
                if($('#'+captcha[x]).length){
                    grecaptcha.render(captcha[x], {'sitekey' : '6Lec3J4UAAAAAGBCZwDzyw80WufqD5WQjPwLQvmC', 'theme' : 'light' });
                }
            }
        };

    });
});
