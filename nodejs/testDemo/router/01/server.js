
const http = require('http');
const url = require('url');

const start = (router) =>{
    const onRequest = (request, response) => {

        let pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        router(pathname);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");

}

exports.start = start;

