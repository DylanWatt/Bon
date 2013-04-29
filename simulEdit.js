var io = require('socket.io').listen(8080);
var fs = require('fs')
io.set('log level', 1)
io.sockets.on('connection', function (socket) {

	socket.on('message',function(data)
		{
		var date = new Date;
		data.from = socket.handshake.address.address;
		fs.appendFile('log.txt', (date.getTime()+ ' '+  data.from + ' ' + data.message + ' ' + '\n'), function(){});
		socket.broadcast.emit('message', data)
		}
	 )

});
