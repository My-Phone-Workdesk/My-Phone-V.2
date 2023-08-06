function Devices(Device) {
    location.href = "../Screen/User_Setup/Mother_Board.html";
    if (Device == "Desktop") {
        Mother_Board(4000, Device);
    }
}

function Mother_Board(Money, Device) {
    let price = document.getElementById("Price");
    price.innerHTML = "Your Device Platform is : " + Device + '\n' + "Your Mother Board Cost is : " + Money;
}