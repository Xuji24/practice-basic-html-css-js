var max = 300;
var min = -300;

function moveElement(element){
    let randomLocationX = Math.floor(Math.random() * (max - min + 1) ) + min;
    let randomLocationY = Math.floor(Math.random() * (max - min + 1) ) + min;
    
    $(element).css({
        right: randomLocationX + 'px',
        top: randomLocationY + 'px',
    });
    

}

$(document).ready(function () {
    $(".nope").on("mouseenter", function() {
        moveElement($(this));
        $(".gif").attr("src", "./images/Male-sad.gif");
        $(this).css("transition", "0.3s ease-in-out");
    });
    
    $(".yes").on("mouseenter", function(){
        $(".gif").attr("src", "./images/male-happy.gif");
        $(".nope").css({
            top: "0px",
            left: "0px",
            transition: "none"
        })
    });

    $(".yes").on("click", function(){
        $(".header1-text").text("Let's get some ice cream then!");
        $(".gif").attr("src", "./images/Couple-Clingy.gif");
        $(".yes").css("display", "none");
        $(".nope").css("display", "none");
    });
});
