function sendForm(){
    let x = validateX();
    let y = validateY();
    let r = validateR();
    if(x&&y&&r){
        console.log(x,y,z);
    }
    else{

        if(!x){
            $('.error-logs').text("X error");
        }
    }
}

function validateFloat(str){
    let x = parseFloat(str.replace(',','.'));
    if(isNumber(x)){
        return x;
    }
    return false;
}

function validateInt(str){
    let x = parseInt(str);
    if(isNumber(x)){
        return x;
    }
    return false;
}

function validateX(){
    let checkboxes = document.getElementsByClassName("input-checkbox");
    [].forEach.call(checkboxes, (el)=>{
        if(el.checked===true){
            let x = validateInt(el.name.replace('X',''));
            return x;
        }
    })
    return false;
}

function isNumber(x){
    return !isNaN(x) && isFinite(x);
}

function validateY(){
    let str = document.getElementById("Y-input").value;
    return validateFloat(str);
}

function validateR(){
    let str = document.getElementById("R-input").value;
    return validateFloat(str);
}