console.log("hello");

$(function() {
    $('li.dropdown').hover(function(){ //Open on hover
            $('.dropdown-menu.header-dropdown').addClass("show");
            console.log("jquery")
        },
        function(){ //Close when not hovered
            $('.header-dropdown').removeClass("show");
        });
});
