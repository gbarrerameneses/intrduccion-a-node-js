// En Node.js para importar un módulo necesitas de la palabra reservada require
// Core Modules
var http = require('http'); // el módulo http permite ejecutar JavaScript del lado del servidor
var fs = require('fs'); // permite leer archivos que se encuentran dentro de nuestro proyecto
var path = require('path'); // ruta de un archivo

var server = http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "text/html"}); // pasámos como 1er parámetro un status code 200 y como 2do parámetro pasamos un json
    response.write("<html><body>Hola</body></html>"); // pasamos HTML
    response.end(); // cerramos nuestra respuesta
});

server.listen(5000);