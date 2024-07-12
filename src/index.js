// En Node.js para importar un módulo necesitas de la palabra reservada require
var http = require('http'); // el módulo http permite ejecutar JavaScript del lado del servidor

//var operations = require('./utils/operations'); // importación total

// var { multiplication, addition } = require('./utils/operations'); // importación Parcial
var { multiplication } = require('./utils/operations'); // importación Parcial

var server = http.createServer(function(request, response){
    // console.log(request.url); // veamos que url está llamando
    response.writeHead(200, {"Content-Type": "text/html"}); // pasámos como 1er parámetro un status code 200 y como 2do parámetro pasamos un json
    response.write("<html><head><meta charset=\"utf-8\"/></head><body>Hola Mundo! 😃</body></html>"); // pasamos HTML
    response.end(); // cerramos nuestra respuesta
});

// console.log('😃 addition', operations.addition(3, 10)); // importación total
// console.log('😃 multiplication', operations.multiplication(3, 10)); // importación total

// console.log('😃 addition', addition(3, 10)); // importación Parcial (puedo agregar las que necesite)
console.log('😃 multiplication', multiplication(3, 10)); // importación Parcial

server.listen(5000);