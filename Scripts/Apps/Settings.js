window.onload = () => {

    if ( location.pathname.includes( 'Settings.html' ) ) {

        var icon = document.getElementById( 'icon' );
        var option_class_1 = document.getElementById( 'option_class_1' );
        var option = document.getElementById( 'option_class' );
        var back = document.getElementById( 'back' );

        option.addEventListener( 'click', () => {

            location.assign( 'Factory_Reset.html' );

        });

        option_class_1.addEventListener( 'click', () => {

            location.assign( 'Uninstall_Apps.html' );

        });

        icon.addEventListener( 'click', ToggleLightorDarkMode );

        back.addEventListener( 'click', () => {

            location.assign( '../../Home_Screen.html' );

        });

        back.addEventListener( 'mouseover', () => {

            back.style.backgroundColor = '#303030';

        });

        back.addEventListener( 'mouseleave', () => {

            back.style.backgroundColor = '#373737';

        });

    } else if ( location.pathname.includes( 'Factory_Reset.html' ) ) {

        var resetbtn = document.getElementById( 'resetbtn' );
        var back = document.getElementById( 'back' );
        
        resetbtn.addEventListener( 'mouseover', () => {

            resetbtn.style.backgroundColor = '#303030';

        });

        resetbtn.addEventListener( 'mouseleave', () => {

            resetbtn.style.backgroundColor = '#373737';

        });

        back.addEventListener( 'click', () => {

            location.assign( 'Settings.html' );

        });

        back.addEventListener( 'mouseover', () => {

            back.style.backgroundColor = '#303030';

        });

        back.addEventListener( 'mouseleave', () => {

            back.style.backgroundColor = '#373737';

        });

    } else if ( location.pathname.includes( 'Uninstall_Apps.html' ) ) {

        var back = document.getElementById( 'back' );

        back.addEventListener( 'click', () => {

            location.assign( 'Settings.html' );

        });

        back.addEventListener( 'mouseleave', () => {

            back.style.backgroundColor = '#373737';

        });

        back.addEventListener( 'mouseover', () => {

            back.style.backgroundColor = '#303030';

        });

    };

};

function ToggleLightorDarkMode () {

    if ( ( document.body.style.backgroundColor != 'rgb(55, 55, 55)' ) ) {

        document.body.style.backgroundColor = '#373737'

    } else if ( document.body.style.backgroundColor = 'rgb(55, 55, 55)' ) {
    
        document.body.style.backgroundColor = 'white'
    
    };

};