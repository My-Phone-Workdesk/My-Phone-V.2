var device_type = null;
var Mother_Board_payment = 0;

function Devices(Device) {
    window.device_type = Device;
    if (Device == "Desktop") {
        window.Mother_Board_payment = 4000;
    } else if (Device == "Laptop") {
        window.Mother_Board_payment = 2000;
    } else if (Device == "Notepad") {
        window.Mother_Board_payment = 1500;
    } else if (Device == "Foldable") {
        window.Mother_Board_payment = 1000;
    } else if (Device == "Tablet") {
        window.Mother_Board_payment = 800;
    } else if (Device == "Phone") {
        window.Mother_Board_payment = 500;
    } else {
        window.Error_Display(0);
    }
    Location.href = "../../Screen/User_Setup/Mother_Board.html";
    let input = document.getElementById("input_code");
    input.focus();
}

function Mother_Board() {
    let device = document.querySelector('p');
    let price = document.querySelector('span');
    device.style.bottom = "-5rem";
    device.innerHTML = "Your Device Platform is : " + device_type;
    price.innerHTML = "Your Mother Board Cost is : " + Mother_Board_payment;
}

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

function Error_Display(Number) {
    var ED = "Your Action ran into an error... Error Number --> " + Number;
    console.error(ED);
    setTimeout(() => {
        Location.href = "../index.html";
    }, 2500);
    return ED;
}