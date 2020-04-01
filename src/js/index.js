console.log("hello");

$(function() {
    $('[data-toggle="tooltip"]').tooltip()

    for(let i = 1; i < 5; i++) {
        $('li#navbarDropdown' + i ).hover(function(){ //Open on hover
                $('#menu-' + i).addClass("show");
            },
            function(){ //Close when not hovered
                $('#menu-' + i).removeClass("show");
            });
    }

});
