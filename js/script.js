$(document).ready(function(){
$("#Submit").click(function(event){
    var name=$("#name").val();
    var email=$("#emai").val();
    var message=$("#messa").val();
    if((name==="")||(email==="")||(message==="")){
        alert("Please,Fill the form");
    
    }
    else{
        alert(name+"we have received your message.Thank you for reaching out to us.");
    }
    event.preventDefault();
});


    $(".one").click(function(){
        $(".hideme").toggle();
        $(".one").fadeOut();
    });


    $(".hideme").click(function(){
        $(".one").toggle();
        $(".hideme").fadeOut();
    });

$(".two").click(function(){
    $(".hideme1").toggle();
    $(".two").fadeOut();
});


$(".hideme1").click(function(){
    $(".two").toggle();
    $(".hideme1").fadeOut();
});
$(".three").click(function(){
    $(".hideme2").toggle();
    $(".three").fadeOut();
});


$(".hideme2").click(function(){
    $(".three").toggle();
    $(".hideme2").fadeOut();
});
});

