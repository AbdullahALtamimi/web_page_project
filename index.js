function sign(){
    var btn = document.querySelector(".window");
    btn.style.display="block";
    
}
function cancel(){
    var btn = document.querySelector(".window");
    btn.style.display="none";
}
function check(){
    event.preventDefault()
    var name = document.querySelector("#username").value;
    var pass = document.querySelector("#password").value;
    if (name=="" && pass=="")
    {
        alert("make sure to fill all the input area")
    }
    else if (pass=="")
    {
        alert("please enter your password")
    }
    else if (name==""){
        alert("please enter your name or phone number")
    }
    else alert("login completed")
}
function done1(){
    var input = document.querySelector(".subscribe-input").value;
    if (input==""){
        alert("Please enter your email")
    }
    else alert("You have subscribed")
}