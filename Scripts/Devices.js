function Devices(Device) {
    location.href = "../../Screen/User_Setup/Mother_Board.html";
    if (Device == "Desktop") {
        Mother_Board(4000, Device);
    }
}

function Mother_Board(Money, Device) {
    let price = document.querySelector('p');
    var statement = "Your Device Platform is : " + Device + '\n' + "Your Mother Board Cost is : " + Money;
    price.innerHTML = statement;
}

function show_hide() {
    let eye = document.getElementById("show/hide");
    let input = document.getElementById("input_code");
    var check = eye.className;
    if (check.includes("slash") == true) {
        eye.className = "fa-solid fa-eye";
        input.type = "password";
    } else {
        eye.className = "fa-solid fa-eye-slash";
        input.type = "text";
    }
}