var http = require('http');
var os = require("os");
const PORT=8080;
function handleRequest(request, response){
    response.end('It Works!! Hostname: ' + os.hostname());
}

var server = http.createServer(handleRequest);
server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});
