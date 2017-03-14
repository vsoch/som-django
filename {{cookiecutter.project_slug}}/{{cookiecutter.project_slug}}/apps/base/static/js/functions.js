/* Requires Jquery */

// Toggle will show or hide an element
toggle = function(input_name){

    if ($(input_name).hasClass("hidden")) {
        $(input_name).removeClass("hidden");
        $(input_name).show();
    } else {
       $(input_name).addClass("hidden");
        $(input_name).hide();
    }
}
