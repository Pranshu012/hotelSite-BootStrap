$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );

    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });
    
    $("#loginButton").click(function(){
        $("#loginModal").modal('show');
    });

    $(".closeLogin").click(function(){
        $("#loginModal").modal('hide');
    });

    $("#openReserve").click(function(){
        $("#reservetable").modal('show');
    });

    $(".closeReserve").click(function(){
        $("#reservetable").modal('hide');
    });
    
});

// $(function(){
//     $('[data-toggle="tooltip"]').tooltip();
// });

// $(function(){
//     $("#mycarousel").carousel( { interval: 2000 } );

//     $("#carouselButton").trigger(function(){
//         if ($("#carouselButton").children("span").hasClass('fa-pause')) {
//             $("#mycarousel").carousel('pause');
//             $("#carouselButton").children("span").removeClass('fa-pause');
//             $("#carouselButton").children("span").addClass('fa-play');
//         }
//         else if ($("#carouselButton").children("span").hasClass('fa-play')){
//             $("#mycarousel").carousel('cycle');
//             $("#carouselButton").children("span").removeClass('fa-play');
//             $("#carouselButton").children("span").addClass('fa-pause');                    
//         }
//     });
    
//     $("#loginButton").trigger(function(){
//         $("#loginModal").modal('show');
//     });

//     $(".closeLogin").trigger(function(){
//         $("#loginModal").modal('hide');
//     });

//     $("#openReserve").trigger(function(){
//         $("#reservetable").modal('show');
//     });

//     $(".closeReserve").trigger(function(){
//         $("#reservetable").modal('hide');
//     });
    
// });