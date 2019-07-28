$("#Submit").click(function(load){
    var name=$("#name").val()
    var email=$("#email").val()
    var email=$("#message").val();
    if((name!=="")||(email!==)||(message!=="")){
        alert(name+"we have received your message.Thank you for reaching out to us.");
    
    }
    else{
        alert("fill the form!")
    }
}
