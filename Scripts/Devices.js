function show_hide() {
    let input = document.getElementById("input_code");
    let eye = document.getElementById("show/hide");
    var check = eye.className;
    if (check.includes("slash") == true) {
        eye.className = "fa-solid fa-eye";
        input.type = "password";
    } else {
        eye.className = "fa-solid fa-eye-slash";
        input.type = "text";
    }
}

var device_type = null;
var amount_MB = 0;

function Setup() {
    switch (window.device_type) {
        case "Desktop":
            window.amount_MB = 4000;
            break;
        case "Laptop" :
            window.amount_MB = 2000;
            break;
        case "Notepad" :
            window.amount_MB = 1500;
            break;
        case "Foldable" :
            window.amount_MB = 1000;
            break;
        case "Tablet" :
            window.amount_MB = 800;
            break;
        case "Phone" :
            window.amount_MB = 500;
            break;
        default :
            window.device_type = "Administrative Device";
            window.amount_MB = 5000;
            break;
    }
    location.href = "../../Screen/User_Setup/Mother_Board.html";
}

function Mother_Board() {
    document.querySelector('p').innerHTML = "Your Selected Device is : " + device_type;
    document.querySelector('span').innerHTML = "Your Mother Board Price Bill is : " + amount_MB;
}
