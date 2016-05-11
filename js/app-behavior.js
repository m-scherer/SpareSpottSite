/**
 * Created by michaelscherer1 on 4/15/16.
 */

var el = document.getElementById("email-entry");
var elMsg = document.getElementById("email-tip");


function emailCheck(){
    var email = el.value;
    var parsed = email.split(".");
    var matchString = /com/g;
    var testMatch = matchString.test(parsed[1]);


    if(testMatch == true){
        elMsg.textContent = ''
    }
    else{
        elMsg.textContent = 'Please use a valid email address'
    }
}

function emailHelp(){
    elMsg.textContent = 'Use email address';
}

el.addEventListener('blur',emailCheck,false);
el.addEventListener('focus',emailHelp,false);
