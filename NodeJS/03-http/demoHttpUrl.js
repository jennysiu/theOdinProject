// Read the Query String
var http = require("http");

http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  // HTTP Header (content-type)
  // If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type:
  // status code, 200 means that all is OK
  res.write(req.url);
  // The function passed into the http.createServer() has a req argument that represents
  //  the request from the client, as an object (http.IncomingMessage object).
  // This object has a property called "url" which holds the part of the url 
  // that comes after the domain name

  res.end();
}).listen(8080);

// Node.js files must be initiated in the "Command Line Interface" program of your computer.
// write node myfirst.js and hit enter:

// http://localhost:8080/summer
// will output: "/summer"

// http://localhost:8080/winter
// will output: "/winter"
