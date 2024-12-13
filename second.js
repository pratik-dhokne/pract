// var http = require('http');

// // Create a server
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' }); // Corrected Content-Type assignment
//     res.end('Hello World!'); // Send a response
// }).listen(8080); // Server listens on port 8080


exports.myDateTime = function () {
    return new Date(); // Use 'new Date()' to ensure you get a proper Date object
};
