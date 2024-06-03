if (screen.width > 768){
    $(".circle-1").click(function(){
        $(".coming").addClass("active");
    })

    $(".circle-2").click(function(){
        $(".container").addClass("active");
    })

    $(".circle-3").click(function(){
        $(".social-media").addClass("active");
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
} else {
    $("svg").remove();
    $(".outer").remove();
}

$(".menu").click(function(){
    $(".options").addClass("active");
})
$(".fa-x").click(function(){
    $(".options").removeClass("active");
})

$(".activateResume").click(function(){
    $(".container").addClass("active");
})

$(".cross").click(function(){
    $(".social-media").removeClass("active");
    $(".container").removeClass("active")
})

$(".activateProjects").click(function(){
    $(".buttonSoon").addClass("active");
})
$(".getBack").click(function(){
    $(".coming").removeClass("active");
    $(".buttonSoon").removeClass("active");
})

$(".activateMedia").click(function(){
    $(".social-media").addClass("active");
})

const elementsToToggle = ["body",".circle-1",".circle-2",".circle-3",".outer",".inner","h1",".index",".cross",".resume", ".left", ".right", ".box h5", ".box h4", ".text li", ".title-2", "p", ".text", ".imgbox", ".contact .title", ".icons", ".education", ".year", ".percent", ".percent div", ".menu", ".options ul", ".options .fa-x"];

    $("h1").click(function(){
        elementsToToggle.forEach(element => $(element).toggleClass("light"));
    })