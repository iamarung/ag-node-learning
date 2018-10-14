// 3rd party node modules
var http = require('http');

// custom node modules
var appConfig = require('./config-app.js');


// global variables
var port = appConfig.port || 8080;


http.createServer(function(req,res) {
    console.log("Hello World! is from a HTTP server.")
    res.writeHead(200,{'Content-Type':'text/html'});
    const message = `Hello World!!! from port ${port} at ${new Date()}`;
    res.write(message);
    res.write('<br/> This looks good...');
    res.end();
}).listen(port);


console.log(`NODE running under http://localhost:${port}/`);