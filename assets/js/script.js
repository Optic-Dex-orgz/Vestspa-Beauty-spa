  
// <!------------------Anne´s Kode--------------------->

// <!------------------Anne´s Kode--------------------->

// <!------------------Runi´s Kode--------------------->

// <!------------------Runi´s Kode--------------------->

// <!------------------Daniel´s Kode--------------------->
let buttons = document.getElementsByClassName("cm_buttons")
let buttonCheck = 0;
function formvalidation() {

let name = document.getElementById('name')
if (name.value == "")
{
    name.focus()
    alert("Name must be filled out");
    return false;
}

let email = document.getElementById('email')
if (!email.value)
{
    alert("Email not filled")
    email.focus()
    return false
}else {
    if (!isValidEmail(email.value)) {
    alert("Email is not correct filled")
    email.focus()
    return false
}


}
let service = document.getElementById('service')
if (service.value == "")
{
    service.focus()
    alert("service must be filled out");
    return false;
}

let phone = document.getElementById('phone')
if (phone.value == "")
{
    service.focus()
    alert("Phone number must be filled out");
    return false;
}
let date = document.getElementById('date')
if (date.value == "")
{
    date.focus()
    alert("Date must be filled out");
    return false;
}
let time = document.getElementById('time')
if (time.value == "")
{
    time.focus()
    alert("Time must be filled out");
    return false;
}
alert("Treatment Booked")
}


function isValidEmail(value) {
    let pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return pattern.test(value);
}
function switchComment(para) {
    let id = para
    console.log(para)
    if (id == "cm_buttons1") {
        buttonCheck = 1;
        document.getElementById("cm_buttons1").style.backgroundColor = "#930d0bd1"
        document.getElementById("cm_buttons2").style.backgroundColor = "#ff807e"
        document.getElementById("cm_buttons3").style.backgroundColor = "#ff807e"
        document.getElementById('article3').style.opacity = "0"
        document.getElementById('article2').style.opacity = "0"
        setTimeout(function hide_show(){
            document.getElementById('article2').style.display = "none"
            document.getElementById('article3').style.display = "none"
            document.getElementById('article1').style.display = "block"
        }, 300)
        setTimeout(function hide_show() {
        document.getElementById('article1').style.opacity = "1"
        },400)
        return
    }
    if (id == "cm_buttons2") {
        buttonCheck = 2;
        document.getElementById("cm_buttons2").style.backgroundColor = "#930d0bd1"
        document.getElementById("cm_buttons1").style.backgroundColor = "#ff807e"
        document.getElementById("cm_buttons3").style.backgroundColor = "#ff807e"
        document.getElementById('article3').style.opacity = "0"
        document.getElementById('article1').style.opacity = "0"
        setTimeout(function hide_show(){
            document.getElementById('article3').style.display = "none"
            document.getElementById('article1').style.display = "none"
            document.getElementById('article2').style.display = "block"
        }, 300)
        setTimeout(function hide_show() {
        document.getElementById('article2').style.opacity = "1"
        },400)
        return
    }
    if (id == "cm_buttons3") {
        buttonCheck = 3;
        document.getElementById("cm_buttons3").style.backgroundColor = "#930d0bd1"
        document.getElementById("cm_buttons1").style.backgroundColor = "#ff807e"
        document.getElementById("cm_buttons2").style.backgroundColor = "#ff807e"
        document.getElementById('article2').style.opacity = "0"
        document.getElementById('article1').style.opacity = "0"
        setTimeout(function hide_show(){
            document.getElementById('article2').style.display = "none"
            document.getElementById('article1').style.display = "none"
            document.getElementById('article3').style.display = "block"
        }, 300)
        setTimeout(function hide_show() {
        document.getElementById('article3').style.opacity = "1"
        },400)
        
        return
    }
   
    
}

let article1 =  document.getElementById('article1')
let article2 =  document.getElementById('article2')
let article3 =  document.getElementById('article3')

buttons[0].addEventListener("mouseover", function() {
    buttons[0].style.backgroundColor = "#930d0bd1"
})
buttons[0].addEventListener("mouseout", function() {
    if ( buttonCheck == 1){
        console.log("works")
       }else {
   
           buttons[0].style.backgroundColor = "#ff807e"}
})
buttons[1].addEventListener("mouseover", function() {
    buttons[1].style.backgroundColor = "#930d0bd1"
})
buttons[1].addEventListener("mouseout", function() {
    if ( buttonCheck == 2){
        console.log("works")
       }else {
   
           buttons[1].style.backgroundColor = "#ff807e"}
})
buttons[2].addEventListener("mouseover", function() {
    buttons[2].style.backgroundColor = "#930d0bd1"
})
buttons[2].addEventListener("mouseout", function() {
    if ( buttonCheck == 3){
     console.log("works")
    }else {

        buttons[2].style.backgroundColor = "#ff807e"}
        
   
})
// <!------------------Daniel´s Kode--------------------->

// <!------------------Kiki´s Kode--------------------->

// <!------------------Kiki´s Kode--------------------->
