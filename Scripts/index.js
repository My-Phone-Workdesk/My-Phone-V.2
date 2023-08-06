function eventplay() {
    alert("Aahh... Don't Touch Me ! ");
    scroll(); //Scroll to top Function
    setTimeout ( function alert_after_scroll() {
        alert("This is Under Operation so don't touch it Please");
    }, 1000);
}

function scroll() {
    document.body.scrollTop = 0; //For Safari Browser if so...
    document.documentElement.scrollTop = 0; //For other browsers like FIrefox, Chrome, Edge, etc...
}

function Restart() {
    document.body.style.backgroundColor = "#000000";
    setTimeout ( function restart_time_delay() {
        document.body.style.backgroundImage = "url('../Images/Start_Up_Logo.jpg')";
        document.body.style.backgroundSize = "100vw 100vh";
        document.body.style.backgroundRepeat = "no-repeat";
    }, 5000);
    setTimeout ( function zoom() {
        document.body.style.backgroundColor = "#ffffff";
        document.getElementById("Load_Back").style.visibility = "hidden";
        document.getElementById("Load_Line").style.visibility = "hidden";   
    }, 15575);
    setTimeout (power_off, 18000);
}

function power_off() {
    document.body.style.backgroundImage = "none";
    document.body.style.background = "none";
    document.body.style.backgroundColor = "#000000";
    var package = prompt("Add up a Package to go furthur...", "my-phone.V-2.package.OS-System.*");
    if (package.toLowerCase() == "my-phone.v-2.package.os-system.*") {
        console.log("Package --> My Phone V.2");
        console.log("------------------------");
        console.log("OS System package imported");
        console.log("------------------------");
        console.log("Continue Furthur Progress...");
        console.log("------------- Go Ahead ---------");
        setTimeout ( function Devices_screen() {
            location.href = "../Screen/User_Setup/Devices.html";
        }, 6000);
    } else {
        console.log("Unknown Package imported");
        console.log("No File Location Found on Server");
        console.log("====== Acion Failed ============");
        alert("Package not Found... Go Back Instead...");
        location.href = "../index.html";
    }
}

document.addEventListener("keyup", function eventkey() {
    alert("Aahh... Don't Touch My Keyboard ! ");
});