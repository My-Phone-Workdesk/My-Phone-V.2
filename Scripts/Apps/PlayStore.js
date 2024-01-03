window.onload = () => {

    if ( location.pathname.includes( 'InstalledApps.html' ) || location.pathname.includes( 'OS_Store.html' )) {

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

            return RedirectToInstall('iMobilePay');

        });

        PayTM_Install.addEventListener( 'click', () => {

            return RedirectToInstall('PayTM');

        });

        WhatsApp_Install.addEventListener( 'click', () => {

            return RedirectToInstall('WhatsApp');

        });

        Tata_Play_Install.addEventListener( 'click', () => {

            return RedirectToInstall('TataPlay');

        });

        eVote_Install.addEventListener( 'click', () => {

            return RedirectToInstall('eVote');
            
        });

        Family_Link_Install.addEventListener( 'click', () => {

            return RedirectToInstall('FamilyLink');

        });

        OS_Store.addEventListener( 'click', () => {

            return window.location.assign('OS_Store.html');

        });

    };

};

function RedirectToInstall (AppName) {

    var AppNames = ['iMobile Pay', 'PayTM', 'WhatsApp', 'Tata Play', 'eVote', 'Family Link'];
    var AppSizes = ['150MB', '48MB', '78.6MB', '34MB', '24MB', '185.9MB'];
    var AppDownloads = ['5CR+', '500M+', '500CR+', '5CR+', '1CR+', '100M+'];
    var AppRatings = ['4.6★', '4.6★', '4.1★', '3.7★', '3.7★', '4.5★'];
    var AppLogos = ['https://play-lh.googleusercontent.com/Hc8vNA4SOZwg5HMnBiwJLMT3tLYll54D994uZG7GeJYBtMEa2zHk8hNywTJZqpwWTg', 
    'https://play-lh.googleusercontent.com/6_Qan3RBgpJUj0C2ct4l0rKKVdiJgF6vy0ctfWyQ7aN0lBjs78M-1cQUONQSVeo2jfs', 
    'https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN', 
    'https://play-lh.googleusercontent.com/PTLQRc7a8vRjs8fmM7hRI36s7gGYalxIFd80xZDvYkIl91d709fcl4-UH9vZbxWDGG8', 
    'https://play-lh.googleusercontent.com/3APi4HdWb0_rhnhAEoyJEYfSemXW9cNbA2VdOCSN7L6wgdjC_oTxLphER647R9PnSCkV=w240-h480-rw',
    'https://play-lh.googleusercontent.com/rFAHXzQjUQwLH6vffa9rD_1gjH7dZykH7h6RjthsnoHTKGrJSNqTUw0D_TIQSC3ekg=w240-h480-rw'];


    if (AppName == 'iMobilePay') {

        const urlParams = "?name=" + AppNames[0] + "&size=" + AppSizes[0] + "&downloads=" + AppDownloads[0] + "&ratings=" + 
            AppRatings[0] + "&applogo=" + AppLogos[0];
        
        location.href = "InstallApp.html" + urlParams;

    } else if (AppName == 'PayTM') {

        const urlParams = "?name=" + AppNames[1] + "&size=" + AppSizes[1] + "&downloads=" + AppDownloads[1] + "&ratings=" + 
            AppRatings[1] + "&applogo=" + AppLogos[1];
        
        location.href = "InstallApp.html" + urlParams;

    } else if (AppName == 'WhatsApp') {

        const urlParams = "?name=" + AppNames[2] + "&size=" + AppSizes[2] + "&downloads=" + AppDownloads[2] + "&ratings=" + 
        AppRatings[2] + "&applogo=" + AppLogos[2];
        
        location.href = "InstallApp.html" + urlParams;

    } else if (AppName == 'TataPlay') {

        const urlParams = "?name=" + AppNames[3] + "&size=" + AppSizes[3] + "&downloads=" + AppDownloads[3] + "&ratings=" + 
        AppRatings[3] + "&applogo=" + AppLogos[3];
        
        location.href = "InstallApp.html" + urlParams;

    } else if (AppName == 'eVote') {

        const urlParams = "?name=" + AppNames[4] + "&size=" + AppSizes[4] + "&downloads=" + AppDownloads[4] + "&ratings=" + 
        AppRatings[4] + "&applogo=" + AppLogos[4];
        
        location.href = "InstallApp.html" + urlParams;

    } else if (AppName == 'FamilyLink') {

        const urlParams = "?name=" + AppNames[5] + "&size=" + AppSizes[5] + "&downloads=" + AppDownloads[5] + "&ratings=" + 
        AppRatings[5] + "&applogo=" + AppLogos[5];
        
        location.href = "InstallApp.html" + urlParams;

    }

};

function setInfo() {

    const urlParams = new URLSearchParams(window.location.search);
    document.getElementById('icon').src = urlParams.get('applogo');
    document.getElementById('name').innerText = urlParams.get('name');
    document.getElementById('size').innerText = "Size: " + urlParams.get('size');
    document.getElementById('downloads').innerText = "Downloads: " + urlParams.get('downloads') + "+";
    document.getElementById('rating').innerText = "Ratings: " + urlParams.get('ratings');

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

    // Temporary...

    const Installed_Apps = [ 'iMobile_Pay', 'PayTM', 'eVote', 'Tata_Play', 'WhatsApp', 'Family_Link' ];

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

async function Install () {

    document.getElementById('installprogress').style.visibility = 'visible';
    document.getElementById('installpercent').style.visibility = 'visible';

    const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

    for (var i = 0; i < 50; i++) {

        await delay(1000);
        setInterval( ((document.getElementById('installprogress').value += 5),(document.getElementById('installpercent').innerText=document.getElementById('installprogress').value + "%")), 1000 );


    };

};

function Uninstall ( AppName ) {

    console.log( AppName );

};