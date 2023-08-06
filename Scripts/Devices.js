function Devices(Device) {
    location.href = "../../Screen/User_Setup/Mother_Board.html";
    if (Device == "Desktop") {
        Mother_Board(4000, Device);
    }
    let input = document.getElementById("input_code");
    input.focus();
}

function Mother_Board(Money, Device) {
    let device = document.querySelector('p');
    let price = document.querySelector('span');
    device.style.bottom = "-5rem";
    device.innerHTML = "Your Device Platform is : " + Device;
    price.innerHTML = "Your Mother Board Cost is : " + Money;
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