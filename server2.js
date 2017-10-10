var net = require('net');
var server = net.createServer(function (socket) {
console.log('CONNECTED: ' + socket.remoteAddress +':'+ socket.remotePort);
socket.on('data', function(data) {
console.log('DATA ' + socket.remoteAddress +':'+ socket.remotePort + '...');
console.log(data.toString());
socket.write('You said...\r\n');
socket.write(data);
});
socket.on('close', function(data) {
console.log('CLOSED: ' + socket.remoteAddress +':'+ socket.remotePort);
});
});
server.listen(1337, '127.0.0.1',function() { console.log('READY...'); });