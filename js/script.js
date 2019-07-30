$(document).ready(function () {
    $("#Submit").click(function (event) {
        var name = $("#name").val();
        var email = $("#emai").val();
        var message = $("#messa").val();
        if ((name === "") || (email === "") || (message === "")) {
            alert("Please,Fill the form");

        }
        else {
            alert(name + " we have received your message.Thank you for reaching out to us.");
        }
        event.preventDefault();
    });


    $(".one").click(function () {
        $(".hideme").toggle();
        $(".one").fadeOut();
    });


    $(".hideme").click(function () {
        $(".one").toggle();
        $(".hideme").fadeOut();
    });

    $(".two").click(function () {
        $(".hideme1").toggle();
        $(".two").fadeOut();
    });


    $(".hideme1").click(function () {
        $(".two").toggle();
        $(".hideme1").fadeOut();
    });
    $(".three").click(function () {
        $(".hideme2").toggle();
        $(".three").fadeOut();
    });


    $(".hideme2").click(function () {
        $(".three").toggle();
        $(".hideme2").fadeOut();
    });
    $("#image0").mouseover(function () {
        $("#image0").css('opacity', '0.5');
        $("#des0").show();
        $("#des0").addClass('projects');
    });
    $("#image0").mouseleave(function () {
        $("#image0").css('opacity', '1');
        $("#des0").hide();
    });
    $("#image1").mouseover(function () {
        $("#image1").css('opacity', '0.5');
        $("#des1").show();
        $("#des1").addClass('projects');
    });
    $("#image1").mouseleave(function () {
        $("#image1").css('opacity', '1');
        $("#des1").hide();
    });
    $("#image2").mouseover(function () {
        $("#image2").css('opacity', '0.5');
        $("#des2").show();
        $("#des2").addClass('projects');
    });
    $("#image2").mouseleave(function () {
        $("#image2").css('opacity', '1');
        $("#des2").hide();
    });
    $("#image3").mouseover(function () {
        $("#image3").css('opacity', '0.75');
        $("#des3").show();
        $("#des3").addClass('projects');
    });
    $("#image3").mouseleave(function () {
        $("#image3").css('opacity', '1');
        $("#des3").hide();
    });
    $("#image4").mouseover(function () {
        $("#image4").css('opacity', '0.5');
        $("#des4").show();
        $("#des4").addClass('projects');
    });
    $("#image4").mouseleave(function () {
        $("#image4").css('opacity', '1');
        $("#des4").hide();
    });
    $("#image5").mouseover(function () {
        $("#image5").css('opacity', '0.5');
        $("#des5").show();
        $("#des5").addClass('projects');
    });
    $("#image5").mouseleave(function () {
        $("#image5").css('opacity', '1');
        $("#des5").hide();
    });
    $("#image6").mouseover(function () {
        $("#image6").css('opacity', '0.5');
        $("#des6").show();
        $("#des6").addClass('projects');
    });
    $("#image6").mouseleave(function () {
        $("#image6").css('opacity', '1');
        $("#des6").hide();
    });
    $("#image7").mouseover(function () {
        $("#image7").css('opacity', '0.5');
        $("#des7").show();
        $("#des7").addClass('projects');
    });
    $("#image7").mouseleave(function () {
        $("#image7").css('opacity', '1');
        $("#des7").hide();
    });
});
