function Start_Up() {
    var BIOS_List = new Array();
    BIOS_List = JSON.parse( localStorage.getItem("BIOS") );
    var BIOS = localStorage.getItem("Amount_MB");
    BIOS = BIOS_List[BIOS];
    document.body.style.backgroundColor = "#000000";
    setTimeout ( function () {
        BIOS_List = JSON.parse( localStorage.getItem("OS") );
        BIOS = localStorage.getItem("Amount_MB");
        var OS = BIOS_List[BIOS];
        switch (OS) {
            case "Windows":
                document.body.style.backgroundImage = "url('../OS_Package/Windows.jpg')";
                break;
            case "Mac":
                document.body.style.backgroundImage = "../OS_Package/Mac.jpg";
                break;
            case "Linux":
                document.body.style.backgroundImage = "../OS_Package/Linux.jpg";
                break;
            case "IOS":
                document.body.style.backgroundImage = "../OS_Package/IOS.jpg";
                break;
            case "Android":
                document.body.style.backgroundImage = "../OS_Package/Android.jpg";
                break;
            case "Andos":
                document.body.style.backgroundImage = "../OS_Package/Andos.jpg";
                break;
            default:
                document.body.style.backgroundImage = "url('../OS_Package/Windows.jpg')";
                break;
        }
        document.body.style.backgroundSize = "90vw 90vh";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center center";
    }, BIOS * 1000);
}