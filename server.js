var server = require('http').createServer(function(req, res) {
  res.end('hello');
});

server.listen(9006);

module.exports = server;
