//Load HTTP module

const http = require('http');

//Create Server

http.createServer( (request, response) => {

    response.writeHead( 200, {

        'Content-Type' : 'text/html'

    } );

    response.write('<h1> Hello My Phone </h1>');

    response.end();

} ).listen(2000);

//Success in Running Server