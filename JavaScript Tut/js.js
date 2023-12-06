function calc(){
    //taking value of first number
    var a = document.getElementById('FirstNumber').value;
    a = parseInt(a);
    //taking value of second number
    var b = document.getElementById('SecondNumber').value;
    b = parseInt(b);
    //getting the symbol
    var symbol = document.getElementById('mac').value;
    //performing calculation
    
    if (symbol === '+') {
        add(a,b);
    }
    if (symbol ===  '-') {
        sub(a,b);
    }
    if (symbol === '*') {
        mul(a,b);
    }
    if (symbol === '/') {
        div(a,b);
    }
}
function add(a,b){
    let c = a+b;
    alert('The sum is '+c);
}

function sub(a,b){
    let c = a-b;
    alert('The difference is '+c);
}

function mul(a,b){
    let c = a*b;
    alert('The product is '+c);
}

function div(a,b){
    let c = a/b;
    alert('The division is '+c);
}

function show(){
    document.getElementById('show').value = "Hide";
    var a = document.getElementById('password');
    if (a.type === "password") {
        a.type = "text";
    } else {
        a.type = "password";
    }

}

