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

    setTimeout ( () => {

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
        version.innerHTML = Firmware_Version;

        document.body.style.backgroundSize = "60vw 55vh";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center center";

        switch ( OS ) {

            case "Windows":

                document.body.style.backgroundImage = "url('../OS_Package/Windows.jpg')";
                document.body.style.backgroundPosition = "top center"; break;

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

                document.body.style.backgroundImage = "url('../Images/Error.jpg')"; break;

        }; setTimeout( () => {

            document.body.style.backgroundImage = "";

        }, BIOS * 2000 );

        setTimeout ( () => {

            location.href = "./Home_Screen.html";

        } , BIOS * 3000 );

    }, BIOS * 1000);

};