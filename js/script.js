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
});
$(document).ready(function(){
    $("#toggle_tst").click(function(){
        $("#hideme").toggle()
        $("#toggle_tst").fadeOut()
    });
});
$(document).ready(function(){
    $("#hideme").click(function(){
        $("#toggle_tst").toggle()
        $("#hideme").fadeOut()
    });
});