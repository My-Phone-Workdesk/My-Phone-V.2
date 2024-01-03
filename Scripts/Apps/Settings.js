window.onload = () => {

    var icon = document.getElementById( 'icon' );
    icon.addEventListener( 'click', ToggleLightorDarkMode );

    var option = document.getElementsByClassName( 'option' );
    option.addEventListener( 'click', () => {

        location.assign( 'Factory_Reset.html' );

    });

};

function ToggleLightorDarkMode () {

    if ( ( document.body.style.backgroundColor != 'rgb(55, 55, 55)' ) ) {

        document.body.style.backgroundColor = '#373737'

    } else if ( document.body.style.backgroundColor = 'rgb(55, 55, 55)' ) {
    
        document.body.style.backgroundColor = 'white'
    
    };

};