// En Node.js para importar un módulo necesitas de la palabra reservada require
var http = require('http'); // el módulo http permite ejecutar JavaScript del lado del servidor

var server = http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "text/html"}); // pasámos como 1er parámetro un status code 200 y como 2do parámetro pasamos un json
    response.write("<html><head><meta charset=\"utf-8\"/></head><body>Hola Mundo! 😃</body></html>"); // pasamos HTML
    response.end(); // cerramos nuestra respuesta
});

server.listen(5000);