const Restart_time = 6; // in seconds

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

};

window.onload = () => {

    if ( location.pathname.includes( 'Restart.html' ) ) {

        Restart();

        document.addEventListener( 'keydown', ( event ) => {

            if ( event.key == 'F2' ) {

                setTimeout( () => {

                    return location.assign( './Power_Off.html?service=boot' );

                }, ( Restart_time * 1000 ) / ( Restart_time / 2 ) );

            };

        });

    } else if ( location.pathname.includes( 'Power_Off.html' ) ) {

        const url_para = new URLSearchParams( window.location.search );

        if ( url_para.get( 'service' ) != null ) {

            if ( url_para.get( 'service' ) == 'boot' ) {

                var boot = document.createElement( 'input' );

                boot.type = 'text';
                boot.placeholder = 'Enter your Command here...';

                document.body.appendChild( boot );

            };

        } else {

            document.addEventListener( 'keydown', ( event ) => {

                var key_control = true;
    
                if ( event.key == 's' ) {
    
                    setTimeout( () => {
    
                        if ( key_control ) {
    
                            return location.assign( './Restart.html' );
    
                        };
    
                    }, Restart_time * 1000 );
    
                };
    
                document.addEventListener( 'keyup', () => {
    
                    if ( event.key == 's' ) { key_control = false; };
    
                });
    
            });    
            
        };

    };

};