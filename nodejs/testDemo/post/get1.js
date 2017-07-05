var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    let params = url.parse(req.url, true);
    res.write('网站名：' + params.query.name);
    res.write("\n");
    res.write('网站 URL：' + params.query.url);
    res.end();
}).listen(3000);