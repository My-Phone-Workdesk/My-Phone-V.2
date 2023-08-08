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

document.getElementById("Desktop").addEventListener("click", () => {
    Setup("Desktop");
});
document.getElementById("Laptop").addEventListener("click", () => {
    Setup("Laptop");
});
document.getElementById("Notepad").addEventListener("click", () => {
    Setup("Notepad");
});
document.getElementById("Foldable").addEventListener("click", () => {
    Setup("Foldable");
});
document.getElementById("Tablet").addEventListener("click", () => {
    Setup("Tablet");
});
document.getElementById("Phone").addEventListener("click", () => {
    Setup("Phone");
});

var device_type = null;
var amount_MB = 0;

function Setup(name) {
    switch (name) {
        case "Desktop":
            amount_MB = 4000;
            break;
        case "Laptop" :
            amount_MB = 2000;
            break;
        case "Notepad" :
            amount_MB = 1500;
            break;
        case "Foldable" :
            amount_MB = 1000;
            break;
        case "Tablet" :
            amount_MB = 800;
            break;
        case "Phone" :
            amount_MB = 500;
            break;
        default :
            name = "Administrative Device";
            amount_MB = 5000;
            break;
    }
    device_type = name;
    location.href = "../../Screen/User_Setup/Mother_Board.html";
}

function Mother_Board() {
    document.querySelector('p').innerHTML = "Your Selected Device is : " + device_type;
    document.querySelector('span').innerHTML = "Your Device Mother Board Price is : " + amount_MB;
}
