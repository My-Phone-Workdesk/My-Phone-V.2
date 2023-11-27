window.onload = () => {

    if ( location.pathname.includes( 'OS_Loader.html' ) ) { Start_Up(); };

};

function Start_Up() {

    var BIOS_List = new Array();

    BIOS_List = JSON.parse( sessionStorage.getItem("Data") );

    var Data_List = new Array();

    for ( var a = 0; a < BIOS_List.length; a++ ) {

        var b = BIOS_List[a];
        Data_List.push( b["BIOS"] );

    }; BIOS_List = Data_List;
    Data_List = null;

    var BIOS = localStorage.getItem("Amount_MB");
    BIOS = BIOS_List[ BIOS ];

    document.body.style.backgroundColor = "#ffffff";

    BIOS_List = JSON.parse( sessionStorage.getItem("Data") );

    Data_List = new Array();

    for ( var a = 0; a < BIOS_List.length; a++ ) {

        var b = BIOS_List[a]; Data_List.push( b["Firmware"] );

    }; BIOS_List = Data_List;
    Data_List = null;

    var OS = BIOS_List[ localStorage.getItem("Amount_MB") ];

    BIOS_List = JSON.parse( sessionStorage.getItem( 'Data' ) );
    Data_List = new Array();

    for ( var a = 0; a < BIOS_List.length; a++ ) {

        Data_List.push( BIOS_List[ a ][ 'Firmware_Version' ] );

    }; BIOS_List = Data_List; Data_List = null;

    var Firmware_Version = BIOS_List[ localStorage.getItem( 'Amount_MB' ) ];

    var version = document.getElementById( 'version' );
    version.innerHTML =  "Version:" + Firmware_Version;

    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "top center";
    document.body.style.backgroundSize = "300px 300px";
    document.body.style.backgroundImage = "";

    switch ( OS ) {

        case "Windows":

                document.body.style.backgroundImage = "url('../OS_Package/Windows.jpg')"; break;

            case "Mac":

                document.body.style.backgroundImage = "url('../OS_Package/Mac.jpg')"; break;

            case "Linux":

                document.body.style.backgroundImage = "url('../OS_Package/Linux.jpg')"; break;

            case "IOS":

                document.body.style.backgroundImage = "url('../OS_Package/iOS.jpg')"; break;

            case "Android":

                document.body.style.backgroundImage = "url('../OS_Package/Android.jpg')"; break;

            case "Andos":

                document.body.style.backgroundImage = "url('../OS_Package/Andos.jpg')"; break;

        default:

            document.body.style.backgroundSize = "60vw 80vh";
            document.body.style.backgroundImage = "url('../Images/Error.jpg')"; break;

    }; setTimeout( () => {

        location.href = "./Home_Screen.html";

    }, BIOS * 2000 );
};