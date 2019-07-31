console.log("hello");

$(function() {
    for(let i = 1; i < 5; i++) {
        $('li#navbarDropdown' + i ).hover(function(){ //Open on hover
                $('#menu-' + i).addClass("show");
                console.log("jquery")
            },
            function(){ //Close when not hovered
                $('#menu-' + i).removeClass("show");
            });
    }

});
