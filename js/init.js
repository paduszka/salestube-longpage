$(document).ready(function() {

function myFunction() {
    if($(window).width() > 1366)
    {
        $('#fullpage').fullpage();
    }
    else
    {

    }
}

//initialize
myFunction();

//call when the page resizes.
//$(window).resize(function() {
  //  myFunction();
//});

});
