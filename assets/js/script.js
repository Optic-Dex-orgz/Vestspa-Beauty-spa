  
// <!------------------Anne´s Kode--------------------->

// <!------------------Anne´s Kode--------------------->

// <!------------------Runi´s Kode--------------------->

// <!------------------Runi´s Kode--------------------->

// <!------------------Daniel´s Kode--------------------->
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
    if (id == "cm_buttons1") {
        document.getElementById("cm_buttons1").style.backgroundColor = "#930d0bd1"
        document.getElementById("cm_buttons2").style.backgroundColor = "#ff807e"
        document.getElementById("cm_buttons3").style.backgroundColor = "#ff807e"
        document.getElementById('article3').style.opacity = "0"
        document.getElementById('article2').style.opacity = "0"
        setTimeout(function hide_show() {
            document.getElementById('article2').style.display = "none"
            document.getElementById('article3').style.display = "none"
            document.getElementById('article1').style.display = "show"
        document.getElementById('article1').style.opacity = "1"
        },1000)
        return
    }
    if (id == "cm_buttons2") {
        document.getElementById("cm_buttons2").style.backgroundColor = "#930d0bd1"
        document.getElementById("cm_buttons1").style.backgroundColor = "#ff807e"
        document.getElementById("cm_buttons3").style.backgroundColor = "#ff807e"
        document.getElementById('article3').style.opacity = "0"
        document.getElementById('article1').style.opacity = "0"
        setTimeout(function hide_show() {
            document.getElementById('article3').style.display = "none"
            document.getElementById('article1').style.display = "none"
            document.getElementById('article2').style.display = "show"
        document.getElementById('article2').style.opacity = "1"
        },1000)
        return
    }
    if (id == "cm_buttons3") {
        document.getElementById("cm_buttons3").style.backgroundColor = "#930d0bd1"
        document.getElementById("cm_buttons1").style.backgroundColor = "#ff807e"
        document.getElementById("cm_buttons2").style.backgroundColor = "#ff807e"
        document.getElementById('article2').style.opacity = "0"
        document.getElementById('article1').style.opacity = "0"
        setTimeout(function hide_show() {
            document.getElementById('article2').style.display = "none"
        document.getElementById('article1').style.display = "none"
        document.getElementById('article3').style.display = "show"
        document.getElementById('article3').style.opacity = "1"
        },1000)
        return
    }
   
    
}

// <!------------------Daniel´s Kode--------------------->

// <!------------------Kiki´s Kode--------------------->

// <!------------------Kiki´s Kode--------------------->
