document.getElementById("contact-form").onsubmit = () => {

    clearErrors();

    let isValid = true;

    //Validate first/last name
    let fname = document.getElementById("fname").value.trim();
    if(!fname){
        document.getElementById("err-fname").style.display = "block";
        isValid = false;
    }
    let lname = document.getElementById("lname").value.trim();
    if(!lname){
        document.getElementById("err-lname").style.display = "block";
        isValid = false;
    }

    //Validate how we met
    let size = document.getElementById("meet").value;
    if(size == "none"){
        document.getElementById("err-meet").style.display = "block";
        isValid = false;
    }

    return isValid;
}

function clearErrors(){
    let errors = document.getElementsByClassName("err");
    for(let i=0; i<errors.length; i++){
        errors[i].style.display = "none";
    }
}