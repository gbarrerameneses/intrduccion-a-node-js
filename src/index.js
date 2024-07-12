// En Node.js para importar un módulo necesitas de la palabra reservada require
var http = require('http'); // el módulo http permite ejecutar JavaScript del lado del servidor
var operations = require('./operations'); // importación total

var server = http.createServer(function(request, response){
    // console.log(request.url); // veamos que url está llamando
    response.writeHead(200, {"Content-Type": "text/html"}); // pasámos como 1er parámetro un status code 200 y como 2do parámetro pasamos un json
    response.write("<html><head><meta charset=\"utf-8\"/></head><body>Hola Mundo! 😃</body></html>"); // pasamos HTML
    response.end(); // cerramos nuestra respuesta
});

console.log('😃 addition', operations.addition(3, 10));
console.log('😃 multiplication', operations.multiplication(3, 10));
server.listen(5000);