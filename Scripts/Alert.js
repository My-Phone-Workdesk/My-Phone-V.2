function give_alert( statement, upcoming_function ) {

    var div = document.createElement( 'div' );
    div.id = 'alert';

    var button = document.createElement( 'button' );
    button.id = 'alert_close';
    button.className = 'fa-solid fa-circle-xmark';

    var p = document.createElement( 'p' );
    p.id = 'alert_statement';
    p.innerHTML = statement;

    div.appendChild( button ); div.appendChild( p );

    document.body.appendChild( div );

    document.body.addEventListener( 'keydown', Handle_Escape_Work, true );

    button.addEventListener( 'click', () => {
        
        div.remove(); setTimeout( () => { return upcoming_function(); },100 );
    
    });

    function Handle_Escape_Work( event ) {

        if ( event.key.toLowerCase() == 'escape' ) {

            div.remove(); document.body.removeEventListener( 'keydown', Handle_Escape_Work, true );
            
            setTimeout( () => { return upcoming_function(); },100 );

        };

    };

};

export { give_alert };