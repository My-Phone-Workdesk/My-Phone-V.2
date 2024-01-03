const pick_random = ( min, max ) => { max += 1; return Math.floor( Math.random() * ( max - min ) + min ); };

window.onload = () => {

    if ( location.pathname.includes( 'InstalledApps.html' ) || location.pathname.includes( 'OS_Store.html' ) ) {

        var Back_Button = document.getElementById( 'Back_Button' );
        
        Back_Button.addEventListener( 'click', () => {

            return window.location.assign( 'Play_Store.html' );

        });

        if ( location.pathname.includes( 'InstalledApps.html' ) ) {

            setTimeout( ListInstalledApps,100 );
            
        }

    } else if ( location.pathname.includes( 'Play_Store.html' ) ) {

        var Installed_Apps = document.getElementById( 'Installed_Apps' );
        var iMobile_Pay_Install = document.getElementById( 'iMobile_Pay_Install' );
        var PayTM_Install = document.getElementById( 'PayTM_Install' );
        var WhatsApp_Install = document.getElementById( 'WhatsApp_Install' );
        var Tata_Play_Install = document.getElementById( 'Tata_Play_Install' );
        var eVote_Install = document.getElementById( 'eVote_Install' );
        var Family_Link_Install = document.getElementById( 'Family_Link_Install' );
        var OS_Store = document.getElementById( 'OS_Store' );

        Installed_Apps.addEventListener( 'click', () => {

            return window.location.assign( 'InstalledApps.html' );

        });

        iMobile_Pay_Install.addEventListener( 'click', () => {

            return RedirectToInstall( 'iMobile Pay' );

        });

        PayTM_Install.addEventListener( 'click', () => {

            return RedirectToInstall( 'PayTM' );

        });

        WhatsApp_Install.addEventListener( 'click', () => {

            return RedirectToInstall( 'WhatsApp' );

        });

        Tata_Play_Install.addEventListener( 'click', () => {

            return RedirectToInstall( 'Tata Play' );

        });

        eVote_Install.addEventListener( 'click', () => {

            return RedirectToInstall( 'eVote' );
            
        });

        Family_Link_Install.addEventListener( 'click', () => {

            return RedirectToInstall( 'FamilyLink' );

        });

        OS_Store.addEventListener( 'click', () => {

            return window.location.assign( 'OS_Store.html' );

        });

    } else if ( location.pathname.includes( 'InstallApp.html' ) ) {

        var Install_button = document.getElementById( 'Install_Button' );

        Install_button.addEventListener( 'click', Install );

        setInfo();

    };

};

function RedirectToInstall ( AppName ) {

    var AppNames = ['iMobile Pay', 'PayTM', 'WhatsApp', 'Tata Play', 'eVote', 'Family Link'];
    var AppSizes = ['150MB', '48MB', '78.6MB', '34MB', '24MB', '185.9MB'];
    var AppDownloads = ['5CR+', '500M+', '500CR+', '5CR+', '1CR+', '100M+'];
    var AppRatings = ['4.6★', '4.6★', '4.1★', '3.7★', '3.7★', '4.5★'];
    var AppLogos = [
        
        'https://play-lh.googleusercontent.com/Hc8vNA4SOZwg5HMnBiwJLMT3tLYll54D994uZG7GeJYBtMEa2zHk8hNywTJZqpwWTg',

        'https://play-lh.googleusercontent.com/6_Qan3RBgpJUj0C2ct4l0rKKVdiJgF6vy0ctfWyQ7aN0lBjs78M-1cQUONQSVeo2jfs', 

        'https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN',

        'https://play-lh.googleusercontent.com/PTLQRc7a8vRjs8fmM7hRI36s7gGYalxIFd80xZDvYkIl91d709fcl4-UH9vZbxWDGG8',

        'https://play-lh.googleusercontent.com/3APi4HdWb0_rhnhAEoyJEYfSemXW9cNbA2VdOCSN7L6wgdjC_oTxLphER647R9PnSCkV=w240-h480-rw',

        'https://play-lh.googleusercontent.com/rFAHXzQjUQwLH6vffa9rD_1gjH7dZykH7h6RjthsnoHTKGrJSNqTUw0D_TIQSC3ekg=w240-h480-rw'

    ];

    const App_number = AppNames.indexOf( AppName );

    const info = {

        name: AppNames[ App_number ],
        size: AppSizes[ App_number ],
        downloads: AppDownloads[ App_number ],
        ratings: AppRatings[ App_number ],
        applogo: AppLogos[ App_number ]

    };

    sessionStorage.setItem( 'App_Install', JSON.stringify( info ) );

    return location.assign( './InstallApp.html' );

};

function setInfo() {

    const info = JSON.parse( sessionStorage.getItem( 'App_Install' ) );
    sessionStorage.removeItem( 'App_Install' );

    var icon = document.getElementById( 'icon' );
    var name = document.getElementById( 'name' );
    var size = document.getElementById( 'size' );
    var downloads = document.getElementById( 'downloads' );
    var rating = document.getElementById( 'rating' );

    icon.src = info.applogo
    name.innerText = info.name;
    size.innerText = "Size: " + info.size;
    downloads.innerText = "Downloads: " + info.downloads + "+";
    rating.innerText = "Ratings: " + info.ratings;

};

function ListInstalledApps () {

    const image_sources = {

        iMobile_Pay : 'https://play-lh.googleusercontent.com/Hc8vNA4SOZwg5HMnBiwJLMT3tLYll54D994uZG7GeJYBtMEa2zHk8hNywTJZqpwWTg',

        PayTM : 'https://play-lh.googleusercontent.com/6_Qan3RBgpJUj0C2ct4l0rKKVdiJgF6vy0ctfWyQ7aN0lBjs78M-1cQUONQSVeo2jfs',

        WhatsApp : 'https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN',

        Tata_Play : 'https://play-lh.googleusercontent.com/PTLQRc7a8vRjs8fmM7hRI36s7gGYalxIFd80xZDvYkIl91d709fcl4-UH9vZbxWDGG8',

        eVote : 'https://play-lh.googleusercontent.com/3APi4HdWb0_rhnhAEoyJEYfSemXW9cNbA2VdOCSN7L6wgdjC_oTxLphER647R9PnSCkV=w240-h480-rw',

        Family_Link : 'https://play-lh.googleusercontent.com/rFAHXzQjUQwLH6vffa9rD_1gjH7dZykH7h6RjthsnoHTKGrJSNqTUw0D_TIQSC3ekg=w240-h480-rw'

    };

    const id_format = {

        iMobile_Pay : 'iMobilePay',
        PayTM : 'PayTM',
        WhatsApp : 'WhatsApp',
        Tata_Play : 'TataPlay',
        eVote : 'eVote',
        Family_Link : 'FamilyLink'

    };
    
    const HTML_Look_Format = {

        iMobile_Pay : 'iMobile Pay',
        PayTM : 'PayTM',
        WhatsApp : 'WhatsApp',
        eVote : 'eVote',
        Tata_Play : 'Tata Play',
        Family_Link : 'Family Link'

    };

    var apps_container = document.body.querySelector( 'section' );
    apps_container = apps_container.querySelector( 'div' );

    const Current_User_Data = JSON.parse( sessionStorage.getItem( 'Current_User_Data' ) );

    var Installed_Apps = new Array();
    
    for ( var a = 1; a < Current_User_Data[ 0 ][ 3 ].length; a++ ) {

        Installed_Apps.push( Current_User_Data[ 0 ][ 3 ][ a ][ 'Name' ] );

    };

    for ( var a = 0; a < Installed_Apps.length; a++ ) {

        var app = document.createElement( 'div' );
        app.className = 'app';
        app.id = id_format[ Installed_Apps[ a ] ];

        var image = document.createElement( 'img' );
        image.alt = HTML_Look_Format[ Installed_Apps[ a ] ];
        image.src = image_sources[ Installed_Apps[ a ] ];

        app.appendChild( image );

        var app_details = document.createElement( 'div' );
        app_details.className = 'app-details';

        app.appendChild( app_details );

        var heading_at_three = document.createElement( 'h3' );
        heading_at_three.innerHTML = HTML_Look_Format[ Installed_Apps[ a ] ];

        app_details.appendChild( heading_at_three );

        var Button = document.createElement( 'button' );
        Button.innerHTML = 'Uninstall';
        Button.className = id_format[ Installed_Apps[ a ] ];

        Button.addEventListener( 'click', ( event ) => {

            Uninstall( event.target.className );

        });

        app_details.appendChild( Button );
        apps_container.appendChild( app );

    };

}

function Install () {

    // Temporary -->

    const Internet_min_time_speed = 500;
    const Internet_max_time_speed = 1000;

    const Internet_min_download_speed = 2;
    const Internet_max_download_speed = 8;

    // Actual -->

    document.getElementById( 'installprogress' ).style.visibility = 'visible';
    document.getElementById( 'installpercent' ).style.visibility = 'visible';

    const delay = ( milliseconds ) => new Promise( ( resolve ) => setTimeout( resolve, milliseconds ) );

    for ( var i = 0; i < 100 / Internet_min_download_speed; i++ ) {

        delay( pick_random( Internet_min_time_speed, Internet_max_time_speed ) );

        setInterval(
            
            ( ( document.getElementById( 'installprogress' ).value += pick_random( Internet_min_download_speed, Internet_max_download_speed ) ),

            ( document.getElementById( 'installpercent' ).innerText = document.getElementById('installprogress').value + "%" ) )
        
        , 1000 );

    }; return console.clear();

};

function Uninstall ( AppName ) {

    console.log( AppName );

};