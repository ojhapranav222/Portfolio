$(".circle-2").click(function(){
    $(".container").addClass("active").fadeIn();
})

$(".circle-3").click(function(){
    $(".social-media").addClass("active");
})

$(".cross").click(function(){
    $(".social-media").removeClass("active");
    $(".container").removeClass("active")
})

const elementsToToggle = ["body",".circle-1",".circle-2",".circle-3",".outer",".inner","h1",".index",".cross",".resume", ".left", ".right", ".box h5", ".box h4", ".text li", ".title-2", "p", ".text", ".imgbox", ".contact .title", ".icons", ".education", ".year", ".percent", ".percent div"];

$("h1").click(function(){
    elementsToToggle.forEach(element => $(element).toggleClass("light"));
})

$(".circle-1").mouseover(function(){
    $(".inner").fadeOut(function(){
        $(this).text("Projects").fadeIn();
    });
});
$(".circle-1").mouseout(function(){
    $(".inner").fadeOut(function(){
        $(this).text("Hover over circle").fadeIn();
    });
})

$(".circle-2").mouseover(function(){
    $(".inner").fadeOut(function(){
        $(this).text("Resume").fadeIn();
    });
});
$(".circle-2").mouseout(function(){
    $(".inner").fadeOut(function(){
        $(this).text("Hover over circle").fadeIn();
    });
})

$(".circle-3").mouseover(function(){
    $(".inner").fadeOut(function(){
        $(this).text("Social Media").fadeIn();
    });
});
$(".circle-3").mouseout(function(){
    $(".inner").fadeOut(function(){
        $(this).text("Hover over circle").fadeIn();
    });
})

