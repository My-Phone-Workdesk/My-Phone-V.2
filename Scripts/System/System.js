function Restart() {

    document.body.style.backgroundColor = "#000000";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "100vw 100vh";
    document.body.style.backgroundImage = "url('../../Images/Start_Up_Logo.jpg')";

    setTimeout ( () => {

        document.body.style.backgroundColor = "#ffffff";
        document.getElementById("Load_Back").style.visibility = "hidden";
        document.getElementById("Load_Line").style.visibility = "hidden";
        document.body.style.backgroundImage = "none";
        document.body.style.background = "none";
        document.body.style.backgroundColor = "#000000";
        
        setTimeout( () => { location.href = "../../index.html"; },2000 );
           
    }, 15575);

}